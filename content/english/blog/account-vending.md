---
title: "Nuvibit Account Vending"
date: 2022-01-01T11:00:00+06:00
image: "images/blog/account-vending/account-vending-illustration.png"
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
The [Nuvibit Cloud Founation Blueprint](products/foundation-blueprint) contains our solution to provision new AWS Accounts.

## GitOps by design
We believe that [GitOps](faq/#gitops 'What is GitOps?') is the best way for employees to order new resources. Therefor accounts can be ordered with a simple pull request containing the relevant information you need to create a new account.

```
aws-c1-vending = {
    title         = "vending account"
    account_owner = "max.muster@customer1.com"
    mandant       = "core"
    environment   = "prod"
  }
  aws-c1-logging = {
    title         = "Logging account"
    account_owner = "max.muster@customer1.com"
    mandant       = "core"
    environment   = "prod"
  }
  aws-c1-security = {
    title         = "security account"
    account_owner = "max.muster@customer1.com"
    mandant       = "core"
    environment   = "prod"
  }
  aws-c1-0001 = {
    title         = "marketing application - nonprod"
    account_owner = "max.muster@customer1.com"
    mandant       = "marketing"
    environment   = "nonprod"
  }
```

Every block represents one account. The pull requests can be approved or declined after thorough reviews of the team that is responsible for your Cloud Foundation.

The attributes displayed in this example are required. The account vending determines the [AWS Organizations OU](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_ous.html) placement based on those attributes. Of course the list of attributes can be extended with any attributes that are needed by your organization (i.e. cost center, team name, manager mail, etc).
All the attributes are persisted as tags of the account and are queriable in your [IaC](faq/#iac 'What is Infrastructure as Code?') definitions.

## How it works

The account vending can be separated into four stages:
{{<table "table table-striped table-bordered">}}
| Stage | Description |
| ---   | :---  |
| 1. Pull request | The user creates a [pull request](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests) in the account repository containing all the required tags. The pull request is reviewed, approved and merged by the team responsible for the cloud foundation |
| 2. Account creation | Terraform is triggered by the merge commit and creates a new AWS account, adds the account to AWS SSO, creates a new repository and finally creates the [CI/CD](faq/#cicd 'What is CI/CD?') pipeline to be used to deploy IaC definitions to the account. <br/> In our sample we use github for the code repositories and terraform cloud for [CI/CD](faq/#cicd 'What is CI/CD'). The solution can of course be adapted to whatever tooling you would like to use.|
| 3. Account Configuration | Not everything can be done via terraform as there are tools or actions that are not supported by terraform. To cover those cases we implemented [AWS Step Functions](https://aws.amazon.com/step-functions/?step-functions.sort-by=item.additionalFields.postDateTime&step-functions.sort-order=desc). <br/>The step functions are triggered by the CloudTrail Event that occurs as soon as a new account gets created. <br/>In our example we deploy three step functions: <br/>**- setup account**: deletes the default VPCs and all attached resources<br/>**- create email alias**: creates an email alias in Microsoft Exchange<br/>**- add account to baseline**: Adds the new account to the global baseline repository
| 4. Global Baseline | The commit to the global baseline repository triggers the pipeline of the global baseline. The account baseline is rolled out to the newly created account and all the core components of the foundation are updated to interact with the new account.<br/>To learn more about the gobal baseline and it's components read our blog post about the [Reference architecture for AWS Multi-Account Customers](blog/aws-multiaccount-reference-architecture)|
{{</table>}}
<br/>
![img](images/blog/account-vending/account-vending-diag.png)

## Customized to fit your environment
We understand that tooling is a very individual choice for every organization. It is crucial that the account vending **fits into the existing tooling landscape** to reduce the learning curve for your teams as much as possible.
That is why we designed the account vending solution to be very open.<br/><br/>
The [CI/CD](faq/#cicd 'What is CI/CD?') workflows can be implemented with the tooling of your choice (Jenkins, Bamboo, Gitlab, CircleCI, Github Actions, etc). The vending will also work with any source control solution you may have in place (GitHub, GitLab, Bitbucket, etc).<br/><br/>
Wherever possible we will recommend to use terraform for the deployment and configuration of your AWS accounts and surrounding systems. If there is no terraform support for your requirement we can implement it with the step functions.
If you do not want to rely on [Terraform Cloud](https://www.terraform.io/cloud) or [Terraform Enterprise](https://www.terraform.io/enterprise), the workflows can also be implemented with the community edition of terraform and the [CI/CD](faq/#cicd 'What is CI/CD?') tooling of your choice.

## Our service

Nuvibit specializes in providing **Cloud Foundation Capabilities** to organizations.

We will tailor our **Foundation Blueprint** to your needs and enable you to deliver **Foundation Capabilities** to your **Cloud Workload Development Teams** with a high level of maturity.

**[Get in touch](/contact/ 'Contact us for more information!')** with us for further details.