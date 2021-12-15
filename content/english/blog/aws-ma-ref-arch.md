---
title: "Reference Architecture for AWS Multi-Account Customers"
date: 2021-12-15T11:00:00+06:00
image: "images/blog/aws_ma_ref_arch/tile.png"
description: "Nuvibit Multi Account Reference Architecture."
summary: "Introducing the Nuvibit Reference Architecture for customers with a multi-account environment on AWS."
duration: 10
draft: false
---
## Context

This blog post is an introduction of the Nuvibit Reference Architecture for customers with a multi-account environment on AWS.
The Nuvibit Reference Architecture is derived and implements best practices from the following sources:

\- [AWS Landing Zone](https://aws.amazon.com/de/solutions/implementations/aws-landing-zone/ 'AWS Landing Zone') and [AWS Control Tower](https://aws.amazon.com/de/controltower/ 'AWS Control Tower')<br/>
\- [Apply security services across your AWS organization](https://docs.aws.amazon.com/prescriptive-guidance/latest/security-reference-architecture/security-services.html 'Apply security services across your AWS organization')<br/>
\- [AWS Security Reference Architecture](https://docs.aws.amazon.com/prescriptive-guidance/latest/security-reference-architecture/architecture.html 'AWS Security Reference Architecture')<br/>
\- [Multi Account Network Architecture](https://docs.aws.amazon.com/managedservices/latest/userguide/malz-net-arch.html 'Multi Account Network Architecture')<br/>
\- Industry proven best practices based on our experiences<br/><br/>

This topic is directly linked to the Cloud **Cloud Foundation Core Domains** described here: **TODO Add link to Nuvibit Cloud Foundation Landscape**
![img](images/blog/aws_ma_ref_arch/foundation_core_domains.png)

## AWS Account Domains
Not all accounts are the same and are used for the same kind of workloads and purposes. To simplify the discussion about the different account we can categorize accounts into domains. <br/>
We use the terms **Foundation Core Accounts**, **Foundation Shared Service Account** and **Business Workload Accounts** to describe the different domains.<br/>
The following graph shows a set of accounts categorized into mentioned domains:
![img](images/blog/aws_ma_ref_arch/aws_ma_account_types.png)

We recommend to establish the following **Foundation Core Accounts** and at least two accounts per business workload. Shared Service Accounts are not required for a working Foundation. If you need such an account depends on the systems and platforms you want your teams to use.<br/>

{{<table "table table-striped table-bordered">}}
| Domain | Account Type | Description |
| ---   | :---  | :---  |
| Foundation Core | AWS Organizations Management | Organization-unit (OU) management and service control policies (SCPs). Consolidated billing over the AWS organization |
| Foundation Core | Core Account Lifecycle | Account lifecycle management including vending, baselining and retirement. |
| Foundation Core | Core Security | Aggregation of AWS Config, AWS Security Hub and Amazon GuardDuty. <br/> Our security event management solution [SEMPER](linktosemper) is also a citizen of this account. |
| Foundation Core | Core Logging | Log aggregation and archiving account. No direct access to ensure log integrity. |
| Foundation Core | Core Monitoring | Hosts your central monitoring solutions (i.e. ElasticSearch, Splunk, etc).<br/>This account is separated from the logging account to protect the log archive from tampering. The integrity of the log archive has to be protected rigorously.|
| Foundation Core | Core Image Factory | Amazon Machine Image (AMI) building account. AMIs are built in this account and shared across the AWS organization. |
| Foundation Core | Core Networking | Core connectivity services (Transit Gateway, Rout53, Direct Connect, VPN).<br/> **Optional:** Shared subnets for the whole AWS organization |
| Foundation Shared Service | Shared Services | Shared Service Accounts host services or platforms used by jultiple Business Workloads. Great examples would be a shared streaming platform like Kafka (i.e. MSK), a data lake solution, an active directory service or a shared Kubernetes cluster (i.e. EKS).|
| Foundation Customer | Business Workload | How you organize your business accounts, is up to you. We recommend to have at least two accounts per business workload to separate production workloads from non-production workloads and reduce the blast radius. Also this enables you to apply different rules and policies to production and non-production accounts. |
{{</table>}}
<br/>

## Foundation Core Domain - Account Baseline
The Capabilities in the **Nuvibit Foundation Core Domain** typically consist not only of a **Foundation Core Account** but also requires some components to be deployed in all Accounts within the AWS organization.<br/>
Those distributed components are summarized in the term **Account Baseline**.<br/>
The Baseline includes account hardening, implementing compliance and security policies as well as wiring the accounts up with the **Foundation Core Account**.<br/><br/>

This **Account Baseline** is managed in a central place and rolled out to all AWS accounts within the organization.

![img](images/blog/aws_ma_ref_arch/aws_foundation_core.png)

We strongly recommended to provision all resources used for the **Foundation Core Capabilities** via **[Infrastructure as Code](/faq/#iac 'What is Infrastructure as Code?')**. Nuvibit made great experience in leveraging [Terraform](https://www.terraform.io/intro/index.html 'Introduction to Terraform').

Nuvibit is specialized in introducing the **Core Capabilities** of a **Corporate Cloud Foundation** to companies.

We will tailor our Foundation Core Terraform modules to your needs and enable you to serve the **Foundation Capabilities** to your **Cloud Workload Development Teams** in a high maturity.

**[Contact](/contact/ 'Contact us for more information!')** us for further details.
