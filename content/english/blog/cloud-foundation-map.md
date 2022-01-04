---
title: "Nuvibit Cloud Foundation Map"
date: 2021-12-17T11:00:00+06:00
image: "images/blog/cloud-foundation-map/foundation-map.png"
description: "This post introduces the extended shared responsibility model and presents the Nuvibit Cloud Foundation Capability Map."
summary: "Learn more about how to extend the shared responsibility model to the Nuvibit Cloud Foundation Capability Map."
tags:
  - aws
  - azure
  - foundation
duration: 5
draft: false
---
## Context

Anyone engaged with hyperscalers like AWS or Azure has probably encountered the shared responsibility model:

\- [AWS Shared Responsibility Model](https://aws.amazon.com/compliance/shared-responsibility-model/?nc1=h_ls 'AWS Shared Responsibility Model Website')  
\- [Azure Shared responsibility in the cloud](https://docs.microsoft.com/en-us/azure/security/fundamentals/shared-responsibility 'Azure Shared responsibility in the cloud Website')  

In large organizations where multiple development teams are running multiple workloads in the cloud, it is beneficial to centralize some of the customer responsibilities to offer them to internal development teams in a streamlined manner.

## Extended Shared Responsibility Model

This leads to an **Extended Shared Responsibility Model** shifting from a bi-directional relationship between Cloud Consumer and the Cloud Provider to a triangle relationship between the **Cloud Consumer**, the **Cloud Foundation Team(s)** and the **Cloud Provider**. 


![img](images/blog/cloud-foundation-map/extended-srm.png)

The **Cloud Foundation** can be broken down into **Core Domains** and **Shared Service Domains**, which in turn are composed of individual **Capabilities**.

The **Core Domains** represent the fundamental capabilities like Cloud Management, Cloud Security & Governance and Cloud Networking that will be consumed by the **Cloud Consumers** and the **Shared Service Domains**.

**Shared Service Domains** are capabilities like Container, IoT, BigData or Machine Learning that will be consumed by the **Cloud Consumers**.

The major benefit of this enhanced model is offered to **Cloud Workload Development Teams** who can benefit from a "refinement" of the **Cloud Provider** offering, allowing them to focus on their workload challenges.

Let's have a look at the example of security controls. A majority of the security controls are provided directly by the **Foundation Core Domain**. Optionally, the **Shared Service Domain** will add domain-specific security aspects.
This allows the actual **Cloud Consumer** to already start with a very high level of security "out of the box" and focus only on the workload-specific security aspects.

![img](images/blog/cloud-foundation-map/sample-security.png)

> The **Cloud Workload Development Teams** can rely on centrally provisioned cloud capabilities offered by the **Cloud Foundation**.

## Nuvibit Cloud Foundation Capability Map

Further magnification of the **Cloud Foundation Core Domains** leads to this **Capability Map**:

![img](images/blog/cloud-foundation-map/cloud-capability-map-highres.png)

Each **Foundation Capability** consists of a technical part and a fulfillment part. A **Foundation Capability** is owned by one Foundation Capability Team (a Foundation Capability Team can be responsible for multiple **Foundation Capabilities** - for example, the AWS Foundation Security Team is responsible for the entire **Foundation Security & Governance Domain**).

The **Nuvibit Cloud Foundation Capability Map** is based on the [Cloud Operating Model AWS whitepaper](https://d1.awsstatic.com/whitepapers/building-a-cloud-operating-model.pdf 'AWS Whitepaper') and the [AWS Cloud Adoption Framework](https://docs.aws.amazon.com/whitepapers/latest/overview-aws-cloud-adoption-framework/foundational-capabilities.html) and implements their key principles.

Our model describes the capabilities of a **Inhouse Cloud Platform** in the sense of Gregor Hohpe - The Magic of Platforms [[1]](https://youtu.be/K_VKzHfuIpQ?t=1746) [[2]](https://architectelevator.com/architecture/platforms-fruit-salad/).
<br/><br/>

## Our service

Nuvibit specializes in providing **Cloud Foundation Capabilities** to organizations.

We will tailor our **[Foundation Blueprint](products/foundation-blueprint "Foundation Blueprint product page")** to your needs and enable you to deliver **Foundation Capabilities** to your **Cloud Workload Development Teams** with a high level of maturity.

**[Get in touch](/contact/ 'Contact us for more information!')** with us for further details.