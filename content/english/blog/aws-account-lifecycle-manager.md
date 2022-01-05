---
title: "AWS Account Lifecycle Manager"
date: 2022-01-05T11:00:00+06:00
image: "images/blog/aws-account-lifecycle-manager/account-lifecycle-illustration.png"
description: "This post explains the account lifecycle manager of the nuvibit foundation blueprint."
summary: "Learn how accounts can be created, baselined and managed in the nuvibit cloud foundation blueprint."
tags:
  - aws
  - foundation
duration: 5
draft: false
---
## Context

As your AWS footprint grows you will encounter the need to provision secure and compliant AWS Accounts in an automated way.
Our [Nuvibit Cloud Foundation Blueprint](products/foundation-blueprint "Foundation Blueprint product page") includes the **Account Lifecycle Manager**, which addresses exactly this challenge. Our solution is not only able to provision new AWS Accounts, but also keeps them up to date and recycles them when they are no longer needed (a common requirement for experimental workloads).

## GitOps by design
We believe that [GitOps](faq/#gitops 'What is GitOps?') is the best way for employees to order new resources. Therefore, a new AWS Account can be ordered with a simple pull request containing the required information.

```terraform {linenos=table,hl_lines=[],linenostart=50}
  aws-c1-lifecycle = {
    title         = "lifecycle account"
    account_owner = "max.muster@customer1.com"
    tenant        = "core"
    environment   = "prod"
  }
  aws-c1-logging = {
    title         = "Logging account"
    account_owner = "max.muster@customer1.com"
    tenant        = "core"
    environment   = "prod"
  }
  aws-c1-security = {
    title         = "security account"
    account_owner = "max.muster@customer1.com"
    tenant        = "core"
    environment   = "prod"
  }
  aws-c1-OOO1 = {
    title         = "marketing application - nonprod"
    account_owner = "max.muster@customer1.com"
    tenant        = "marketing"
    environment   = "nonprod"
  }
```

Every AWS Account is defined in a dedicated config code block.
Pull requests can be approved or denied after thorough review by the team responsible for your Cloud Foundation.

The **Account Lifecycle Manager** determines the [AWS Organizations Unit (OU)](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_ous.html) placement based on the defined attributes.
Naturally, the list of attributes can be extended to your organizational requirements (i.e. cost center, DNS zone, team name, manager mail).
The **Account Lifecycle Manager** can also update these attributes later on and will automatically migrate AWS Accounts into the correct OU, initiate provisioning of network resources and for example assign a new owner.<br/>
All these attributes are stored as tags of the AWS Account and can be retrieved in your [IaC](faq/#iac 'What is Infrastructure as Code?') definition.

## Account Rollout

The **Account Lifecycle Manager** can be separated into four stages:

![img](images/blog/aws-account-lifecycle-manager/rollout-diag-highres.png)
<br/>
{{<table "table table-striped table-bordered">}}
| Stage | Description |
| ---   | :---  |
| <span style="color: #009900">**1. Pull Request**</span> | The user creates a [pull request](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests) in the account inventory repository containing all the required tags. The pull request is reviewed, approved and merged by the team responsible for the cloud foundation. |
| <span style="color: #0008FF">**2. Account Provisioning**</span> | Terraform is triggered by the merge commit and creates a new AWS Account, enables AWS SSO, creates a new repository and finally creates the [CI/CD](faq/#cicd 'What is CI/CD?') pipeline that provisions the workload resources to the AWS Account. <br/> In this example we use github for the code repositories and terraform cloud for CI/CD. |
| <span style="color: #009999">**3. Account Configuration**</span> | Not everything can be done via terraform as there are some tools and actions that are not yet supported. For those exceptions we implemented [AWS Step Functions](https://aws.amazon.com/step-functions/?step-functions.sort-by=item.additionalFields.postDateTime&step-functions.sort-order=desc). <br/>The step functions are triggered by the CloudTrail Event that occurs as soon as a new account gets created. <br/>In our example we deploy three step functions: <br/>**- setup account**: deletes the default VPCs and all attached resources<br/>**- create email alias**: creates an email alias (in this example with Microsoft 365)<br/>**- add account to baseline**: Adds the new account to the global baseline repository
| <span style="color: #FF00FF">**4. Global Baseline**</span> | The commit to the global baseline repository triggers the pipeline of the global baseline. The account baseline is rolled out to the newly created account and all the core components of the foundation are updated to interact with the new account.<br/>To learn more about the global baseline and it's components read our blog post about the [Reference architecture for AWS Multi-Account Customers](blog/aws-multiaccount-reference-architecture).|
{{</table>}}
<br/>

## Account Recycling
AWS does not offer a simple solution to delete accounts in an automated manner. To bypass this constraint we implemented an account recycling feature.
To recycle an AWS Account you can simply update the account inventory repository with the **recycled flag**:

```terraform {linenos=table,hl_lines=[6],linenostart=50}
 aws-c1-0001 = {
    title         = "marketing application - nonprod"
    account_owner = "max.muster@customer1.com"
    tenant        = "marketing"
    environment   = "nonprod"
    recycled      = "true"
  }
```

The recycling is done in five stages:


![img](images/blog/aws-account-lifecycle-manager/recycling-diag-highres.png)

<br/>
{{<table "table table-striped table-bordered">}}
| Stage | Description |
| ---   | :---  |
| <span style="color: #CC6600">**1. Account Cleanup**</span> | The user has to perform a [terraform destroy](https://www.terraform.io/cli/commands/destroy "What is terraform destroy?") in his workspace to remove all resources that he has deployed over time.
| <span style="color: #009900">**2. Pull Request**</span> | The user creates a pull request where he sets the **recycled** flag to **true**.
| <span style="color: #0008FF">**3. Account recycling**</span> | Terraform removes the account pipline and repository and disables AWS SSO. Furthermore the account tags are updated to show that the account is recycled. |
| <span style="color: #009999">**4. Baseline Commit**</span> | The tag change creates a CloutTrail Event which in turn triggers the step function that removes the account from the global basline repository.|
| <span style="color: #FF00FF">**5. Global Baseline**</span> | The commit to the global baseline repository triggers the pipeline of the global baseline. The account baseline is removed from the account and all the core components of the foundation are updated to prevent interaction with the new account.<br/>Again, to learn more about the global baseline and it's components read our blog post about the [Reference architecture for AWS Multi-Account Customers](blog/aws-multiaccount-reference-architecture "Blog post: Reference architecture for AWS Multi-Account Customers").|
{{</table>}}
<br/>

The only thing left is an empty hull of the account that does not create any costs.<br/><br/>

As soon as a new account is needed the recycled account can be reused by removing the recyled flag and updating the account attributes:

```terraform {linenos=table,hl_lines=[],linenostart=50}
  aws-c1-OOO1 = {
    title         = "sales application - nonprod"
    account_owner = "john.doe@customer1.com"
    tenant        = "sales"
    environment   = "nonprod"
  }
```

## Customized to fit your environment
We understand that tooling is a very individual choice for every organization. It is crucial that the account lifecycle manager **fits into the existing tooling landscape** to reduce the learning curve for your teams as much as possible.
That is why we designed this solution to be highly flexible.<br/>

The [CI/CD](faq/#cicd 'What is CI/CD?') workflows can be implemented with the tooling of your choice (Jenkins, Bamboo, Gitlab, CircleCI, GitHub Actions, etc). This solution will also work with any source control provider you may already have in place (GitHub, GitLab, Bitbucket, etc).<br/><br/>
We highly recommend to use terraform for the deployment and management of your AWS Accounts and surrounding systems.
If you do not want to rely on [Terraform Cloud](https://www.terraform.io/cloud) or [Terraform Enterprise](https://www.terraform.io/enterprise), the workflows can also be implemented with the community edition of terraform and the [CI/CD](faq/#cicd 'What is CI/CD?') tooling of your choice.

## Our service

Nuvibit specializes in providing **Cloud Foundation Capabilities** to organizations.

We will tailor our **[Foundation Blueprint](products/foundation-blueprint "Foundation Blueprint product page")** to your needs and enable you to deliver **Foundation Capabilities** to your **Cloud Workload Development Teams** with a high level of maturity.

**[Get in touch](/contact/ 'Contact us for more information!')** with us for further details.
