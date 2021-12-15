---
title: "Nuvibit Cloud Foundation Map"
date: 2021-12-01T11:00:00+06:00
image: "images/blog/ncfcm/cloud_foundation_map.png"
description: "From extending the shared responsibility model to the Nuvibit Cloud Foundation Capability Map with a focus on the Core Domains."
summary: "This post introduces the extended shared responsibility model and presents the Nuvibit Cloud Foundation Capability Map."
duration: 10
draft: false
---
## Context

Anyone engaged with hyperscalers like AWS, Azure or GCP has already encountered some form of the shared responsibility model:

\- [AWS Shared Responsibility Model](https://aws.amazon.com/compliance/shared-responsibility-model/?nc1=h_ls 'AWS Shared Responsibility Model Website')  
\- [Azure Shared responsibility in the cloud](https://docs.microsoft.com/en-us/azure/security/fundamentals/shared-responsibility 'Azure Shared responsibility in the cloud Website')  
\- [Google Cloud Platform: Shared Responsibility Matrix](https://services.google.com/fh/files/misc/gcp_pci_srm__apr_2019.pdf 'Google Cloud Platform: Shared Responsibility Matrix Whitepaper')  

In large enterprises where multiple development teams run multiple workloads in the cloud, it is beneficial, to centralize some of the customer responsibilities to offer them to the internal development teams in a streamlined way.

## Extended Shared Responsibility Model
This leads to an **Extended Shared Responsibility Model** shifting from a bi-directional relationship between **Corporate Cloud Consumer** and the **Cloud Provider** to a triangle relationship between the **Corporate Cloud Consumer**, the **Corporate Cloud Foundation Squad** and the **Cloud Provider**. 


![img](images/blog/ncfcm/extended_srm.png)

This blog-post is about the capability decomposition of the **Cloud Foundation**, which itself can be divided into **Core Domains** and **Shared Service Domains**. 

The **Core Domains** represent the fundamental capabilities like Cloud Management, Cloud Security & Governance and Cloud Networking that will be consumed by the **Cloud Consumers** and the **Shared Service Domains**.

**Shared Service Domains** are capabilities like Container, IoT, BigData or Machine Learning that will be consumed by the **Cloud Consumers**.
  

The big advantage of this model is offered to the **Cloud Workload Development Teams** who benefit from a cultivated layer of the **Cloud Provider** offering enabling them to focus on the pure challenge of their workload. 

Let's look at the example of security controls. A large piece of security controls are provided directly by the **Foundation Core Domain**. Optionally the **Shared Service Domain** will add the domain-specific security aspects. This will allow the actual **Cloud Consumer** to start already with a very high level of security “out of the box” and to focus only on the workload specific security aspects.

![img](images/blog/ncfcm/sample_security.png)

> The **Cloud Workload Development Teams** can rely on centrally provided cloud capabilities offered by the **Cloud Foundation**.


## Nuvibit Cloud Foundation Capability Map
Further zooming in to the **Core Domains** of the **Cloud Foundation** leads to this **Capability Map**:

![img](images/blog/ncfcm/cloud_capability_map.png)
<div align="center"><a href="/static/images/blog/ncfcm/cloud_capability_map.png">download image</a></div>  
  

Each **Foundation Capability** consists of technical part and a fulfillment part. A **Foundation Capability** is owned by one Foundation Capability Team (one Foundation Capability Team can be responsible for multiple **Foundation Capabilities** - e.g. the corporate AWS Foundation Security Team is responsible for the whole **Foundation Security & Governance Domain**).

The **Nuvibit Cloud Foundation Capability Map** is based on the [Cloud Operating Model AWS whitepaper](https://d1.awsstatic.com/whitepapers/building-a-cloud-operating-model.pdf 'AWS Whitepaper') and the [AWS Cloud Adoption Framework](https://docs.aws.amazon.com/whitepapers/latest/overview-aws-cloud-adoption-framework/foundational-capabilities.html) and implements their main principles.

Nuvibit is specialized in introducing the **Core Capabilities** of a **Cloud Foundation** to companies.

We will tailor our Foundation Core Terraform modules to your needs and enable you to serve the **Foundation Capabilities** to your **Cloud Workload Development Teams** in a high maturity.

**[Contact](/contact/ 'Contact us for more information!')** us for further details.