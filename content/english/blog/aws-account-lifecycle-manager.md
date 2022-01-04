---
title: "Nuvibit AWS Account Lifecycle Manager"
date: 2022-01-01T11:00:00+06:00
image: "images/blog/aws-account-lifecycle-manager/account-lifecycle-illustration.png"
description: "This post explains the account vending of the nuvibit foundation blueprint."
summary: "Learn how accounts can be created, baselined and managed in the nuvibit cloud foundation blueprint."
tags:
  - aws
  - foundation
duration: 5
draft: false
---
## Context

As soon as your AWS footprint starts to get a little bigger you will encounter the need to automatically and efficiently deploy secure and compliant AWS Accounts. 
The [Nuvibit Cloud Foundation Blueprint](products/foundation-blueprint) contains our solution to do exactly that. Not only is the account lifecycle management able to rollout new account, it is also able to recycle accounts that are not needed anymore. This is quite common for accounts that host experimental workloads.

## GitOps by design
We believe that [GitOps](faq/#gitops 'What is GitOps?') is the best way for employees to order new resources. Therefor accounts can be ordered with a simple pull request containing the relevant information you need to create a new account.

```terraform {linenos=table,hl_lines=[],linenostart=50}
  aws-c1-vending = {
    title         = "vending account"
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

Every block represents one account. The pull requests can be approved or declined after thorough reviews of the team that is responsible for your Cloud Foundation.

The attributes displayed in this example are required. The account vending determines the [AWS Organizations OU](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_ous.html) placement based on those attributes. Of course the list of attributes can be extended with any attributes that are needed by your organization (i.e. cost center, dns zone, team name, manager mail, etc). This means that we can also update the tags later on and the lifecycle management will automatically move the account to the correct OU, the dns zone can be chanced, we can assign a new account owner, etc.
All the attributes are persisted as tags of the account and are queriable in your [IaC definitions](faq/#iac 'What is Infrastructure as Code?').

## Account Rollout

The account vending can be separated into four stages:

![img](images/blog/aws-account-lifecycle-manager/rollout-diag-highres.png)
<br/>
{{<table "table table-striped table-bordered">}}
| Stage | Description |
| ---   | :---  |
| <span style="color: #009900">**1. Pull Request**</span> | The user creates a [pull request](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests) in the account inventory repository containing all the required tags. The pull request is reviewed, approved and merged by the team responsible for the cloud foundation |
| <span style="color: #0008FF">**2. Account Provisioning**</span> | Terraform is triggered by the merge commit and creates a new AWS account, adds the account to AWS SSO, creates a new repository and finally creates the [CI/CD](faq/#cicd 'What is CI/CD?') pipeline to be used to deploy IaC definitions to the account. <br/> In our sample we use github for the code repositories and terraform cloud for CI/CD. |
| <span style="color: #009999">**3. Account Configuration**</span> | Not everything can be done via terraform as there are tools or actions that are not supported by terraform. To cover those cases we implemented [AWS Step Functions](https://aws.amazon.com/step-functions/?step-functions.sort-by=item.additionalFields.postDateTime&step-functions.sort-order=desc). <br/>The step functions are triggered by the CloudTrail Event that occurs as soon as a new account gets created. <br/>In our example we deploy three step functions: <br/>**- setup account**: deletes the default VPCs and all attached resources<br/>**- create email alias**: creates an email alias i.e in M365<br/>**- add account to baseline**: Adds the new account to the global baseline repository
| <span style="color: #FF00FF">**4. Global Baseline**</span> | The commit to the global baseline repository triggers the pipeline of the global baseline. The account baseline is rolled out to the newly created account and all the core components of the foundation are updated to interact with the new account.<br/>To learn more about the global baseline and it's components read our blog post about the [Reference architecture for AWS Multi-Account Customers](blog/aws-multiaccount-reference-architecture)|
{{</table>}}
<br/>

## Account Recycling
AWS does not offer a simple solution to delete accounts in an automated manner. To bypass this constraint we implemented the account recycling feature.
To recycle an account you can simple set a flag in the account registry repository:

```terraform {linenos=table,hl_lines=[6],linenostart=50}
 aws-c1-0001 = {
    title         = "marketing application - nonprod"
    account_owner = "max.muster@customer1.com"
    tenant        = "marketing"
    environment   = "nonprod"
    recycled      = "true"
  }
```

The recycling is done in 5 stages:


![img](images/blog/aws-account-lifecycle-manager/recycling-diag-highres.png)

<br/>
{{<table "table table-striped table-bordered">}}
| Stage | Description |
| ---   | :---  |
| <span style="color: #CC6600">**1. Account resource destruction**</span> | The user has to perform a [terraform destroy](https://www.terraform.io/cli/commands/destroy) in his workspace to remove all resources that he has deployed over time.
| <span style="color: #009900">**2. Pull Request**</span> | The user creates a pull request where he sets the **recycled** flag to **true**.
| <span style="color: #0008FF">**3. Account recycling**</span> | Terraform removes the account pipline and repository and removes the account from AWS SSO. Furthermore the account tags are updated to show that the account is recycled. |
| <span style="color: #009999">**4. Baseline Commit**</span> | The tag change creates a CloutTrail Event which in turn triggers the step function that removes the account from the global basline repository.|
| <span style="color: #FF00FF">**5. Global Baseline**</span> | The commit to the global baseline repository triggers the pipeline of the global baseline. The account baseline is removed from the account and all the core components of the foundation are updated to prevent interaction with the new account.<br/>Again, to learn more about the global baseline and it's components read our blog post about the [Reference architecture for AWS Multi-Account Customers](blog/aws-multiaccount-reference-architecture)|
{{</table>}}
<br/>

The only thing left is an empty hull of the account that does not create any costs.<br/>
As soon as a new account is needed the recycled account can be reused ba removing the recyled flag and updating the account attributes:

```terraform {linenos=table,hl_lines=[],linenostart=50}
  aws-c1-0001 = {
    title         = "sales application - nonprod"
    account_owner = "john.doe@customer1.com"
    tenant        = "sales"
    environment   = "nonprod"
  }
```

## Customized to fit your environment
We understand that tooling is a very individual choice for every organization. It is crucial that the account vending **fits into the existing tooling landscape** to reduce the learning curve for your teams as much as possible.
That is why we designed the account vending solution to be very open.<br/><br/>
The CI/CD workflows can be implemented with the tooling of your choice (Jenkins, Bamboo, Gitlab, CircleCI, Github Actions, etc). The vending will also work with any source control solution you may have in place (GitHub, GitLab, Bitbucket, etc).<br/><br/>
Wherever possible we will recommend to use terraform for the deployment and configuration of your AWS accounts and surrounding systems. If there is no terraform support for your requirement we can implement it with the step functions.
If you do not want to rely on [Terraform Cloud](https://www.terraform.io/cloud) or [Terraform Enterprise](https://www.terraform.io/enterprise), the workflows can also be implemented with the community edition of terraform and the CI/CD tooling of your choice.

## Our service

Nuvibit specializes in providing **Cloud Foundation Capabilities** to organizations.

We will tailor our **Foundation Blueprint** to your needs and enable you to deliver **Foundation Capabilities** to your **Cloud Workload Development Teams** with a high level of maturity.

**[Get in touch](/contact/ 'Contact us for more information!')** with us for further details.