---
title: "Reference architecture for AWS Multi-Account Customers"
date: 2021-12-18T11:00:00+06:00
image: "images/blog/aws-multiaccount-reference-architecture/reference-org-architecture.png"
description: "This post introduces the Nuvibit reference architecture for customers with an AWS multi-account environment."
summary: "We introduce the Nuvibit reference architecture for customers with an AWS multi-account environment."
tags:
  - aws
  - foundation
duration: 5
draft: false
---
## Context

Customers with an AWS multi-account environment are quickly confronted with the related challenges.
How should the cloud responsibility be transferred to the different organizational units?

Our Nuvibit reference architecture provides a solution to this challenge.
The reference architecture considers and implements best practices from the following sources:

\- [AWS Landing Zone](https://aws.amazon.com/solutions/implementations/aws-landing-zone/ 'AWS Landing Zone') and [AWS Control Tower](https://aws.amazon.com/controltower/ 'AWS Control Tower')<br/>
\- [Apply security services across your AWS organization](https://docs.aws.amazon.com/prescriptive-guidance/latest/security-reference-architecture/security-services.html 'Apply security services across your AWS organization')<br/>
\- [AWS Security Reference Architecture](https://docs.aws.amazon.com/prescriptive-guidance/latest/security-reference-architecture/architecture.html 'AWS Security Reference Architecture')<br/>
\- [Multi Account Network Architecture](https://docs.aws.amazon.com/managedservices/latest/userguide/malz-net-arch.html 'Multi Account Network Architecture')<br/>

In addition, our experience with AWS multi-account environments has been included in this reference architecture.

Our Nuvibit reference architecture is a realization of a **Inhouse AWS Platform** in the sense of Gregor Hohpe - The Magic of Platforms [[1]](https://youtu.be/K_VKzHfuIpQ?t=1746) [[2]](https://architectelevator.com/architecture/platforms-fruit-salad/) and is a implementation of the **Core Domains** of the **Nuvibit Cloud Foundation**, which are fully covered in the blog post **[Nuvibit Cloud Foundation Map](/blog/cloud-foundation-map 'Blog post on the Nuvibit Cloud Foundation Map')**.

![img](images/blog/aws-multiaccount-reference-architecture/foundation-core-domains.png)

## AWS Account Domains

Not all accounts are the same and are used for the same kind of workloads and purposes.
To maintain a clear overview, we divide the AWS accounts into three domains:

\-**Foundation Core**<br/>
\-**Foundation Shared Service**<br/>
\-**Business Workload**<br/>

{{<table "table table-striped table-bordered">}}
| Domain | Description |
| ---   | :---  |
| **Foundation Core** | Accounts that host core components of the Nuvibit Cloud Foundation and are managed by the Cloud Foundation Core Team(s). |
| **Foundation Shared Service** | Account that host shared services and platforms (streaming platform, data lake, analitics platform, API management) and are managed by the Cloud Foundation Shared Service Team(s). |
| **Business Workload** | Accounts that host all the components of the business applications and are managed by the Cloud Workload Development Team(s). |
{{</table>}}
<br/>

The following graphic serves as an example and gives an overview of the different accounts, categorized by domains:

![img](images/blog/aws-multiaccount-reference-architecture/aws-foundation-account-types.png)

We recommend setting up the following **Foundation Core Accounts** and at least two accounts per business application. 
**Foundation Shared Service Accounts** are optional and whether you need them depends on your individual requirements.

{{<table "table table-striped table-bordered">}}
| Domain | Account Type | Description |
| ---   | :---  | :---  |
| Foundation Core | AWS Organizations Management | [AWS Organization](https://aws.amazon.com/organizations/), [Organization-unit (OU)](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_ous.html) and [service control policy (SCP)](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_scps.html) management. Consolidated billing over the AWS organization |
| Foundation Core | Core Account Lifecycle | Account lifecycle management including vending, baselining and retirement. |
| Foundation Core | Core Security | Aggregation of [AWS Config](https://aws.amazon.com/config/), [AWS Security Hub](https://aws.amazon.com/security-hub/) and [Amazon GuardDuty](https://aws.amazon.com/guardduty/). <br/> Our security event management solution [SEMPER](/products/semper) is also a citizen of this account. |
| Foundation Core | Core Logging | Log aggregation and archiving account. No direct access to ensure log integrity. |
| Foundation Core | Core Monitoring | Hosts your central monitoring solutions (i.e. [AWS OpenSearch](https://aws.amazon.com/opensearch-service/), [Splunk](https://www.splunk.com/), etc).<br/>This account is separated from the Core Logging account to protect the log archive from [tampering](https://capec.mitre.org/data/definitions/268.html). The integrity of the log archive has to be protected rigorously.|
| Foundation Core | Core Image Factory | [Amazon Machine Image (AMI)](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/AMIs.html) building account. AMIs are built in this account and shared across the AWS organization. |
| Foundation Core | Core Networking | Core connectivity services ([Transit Gateway](https://aws.amazon.com/transit-gateway/), [Route53](https://aws.amazon.com/route53/), [Direct Connect](https://aws.amazon.com/directconnect/), [VPN](https://aws.amazon.com/vpn/)).<br/> **Optional:** [Shared VPCs](https://docs.aws.amazon.com/vpc/latest/userguide/vpc-sharing.html#vpc-sharing-share-subnet) for the whole AWS organization to ensure the network configuration is not altered by the Business Workload teams. |
| Foundation Shared Service | Shared Services | Shared Service Accounts host services or platforms used by multiple Business Workloads. Great examples would be a shared streaming platform like [Kafka](https://kafka.apache.org/) (i.e. [MSK](https://aws.amazon.com/msk/)), a data lake solution, an [active directory service](https://aws.amazon.com/directoryservice/) or a shared [Kubernetes](https://kubernetes.io/de/docs/concepts/overview/what-is-kubernetes/) cluster (i.e. [EKS](https://aws.amazon.com/eks/)).|
| Business Workload | Workload | How you organize your business workload accounts, is up to you. We recommend to have at least two accounts per business workload to separate production workloads from non-production workloads and reduce the blast radius. Also this enables you to apply different rules and policies to production and non-production accounts. |
{{</table>}}
<br/>

## Foundation Core Domain - Account Baseline

The Capabilities in the **Nuvibit Foundation Core Domain** typically consist not only of the **Foundation Core Accounts** but also require some components to be deployed in all Accounts within the AWS organization.<br/>
Those distributed components are summarized in the term **Account Baseline**.<br/>
The **Account Baseline** includes account hardening, implementing compliance and security policies as well as wiring up the accounts with the **Foundation Core Accounts**.<br/><br/>
This **Account Baseline** is managed in a central place and rolled out to all AWS accounts within the AWS organization.

![img](images/blog/aws-multiaccount-reference-architecture/aws-foundation-core.png)

We strongly recommended to provision all resources used for the **Foundation Core Capabilities** via **[Infrastructure as Code](/faq/#iac 'What is Infrastructure as Code?')**. 
From experience, we rely exclusively on [Terraform](https://www.terraform.io/intro/index.html 'Introduction to Terraform') for this purpose.
<br/><br/>

## Our service

Nuvibit specializes in providing **Cloud Foundation Capabilities** to organizations.

We will tailor our **Foundation Blueprint** to your needs and enable you to deliver **Foundation Capabilities** to your **Cloud Workload Development Teams** with a high level of maturity.

**[Get in touch](/contact/ 'Contact us for more information!')** with us for further details.