---
title: "AWS Europe (Zurich) Region in 🇨🇭 Switzerland just opened its doors!"
date: 2021-10-11T11:00:00+06:00
image: "images/blog/aws-swiss-region/eu-central-2.png"
description: "This post introduces the AWS Europe (Zurich) Region in Switzerland."
summary: "<insert description>"
tags:
  - aws
  - networking
duration: 5
draft: false
---
## Context

<!-- First of all, what is a **Cloud Foundation** anyway and why should I care about it?

Before deploying a workload to the public cloud there are many moving parts which have to be coordinated.
There are **technical parts** such as connectivity or security and **organizational parts** such as finance or operations.
All of these elements are part of your individual Cloud Foundation, which dictates the path for future deployments.

Each cloud customer has a Cloud Foundation to some extent, but if that Foundation is not actively shaped from the start, it can cause massive bottlenecks down the road.

As an example, let's assume that we started with the VPC provided by AWS by default.
Later in our cloud journey, we decide to set up a VPN from the office to our VPC and encounter overlapping network areas.
Instead of focusing on our workloads, we now waste time troubleshooting issues we could have avoided if we had initially put more effort into the foundation.

A secure and scalable Cloud Foundation will significantly accelerate your cloud adoption journey and is the key to success.
## Foundation Testing

Running workloads reliably and securely in a **AWS multi-account environment** requires a solid and tested Foundation.
Most workloads can run in the same [AWS Organization](https://aws.amazon.com/organizations/) for production and testing as they can be easily separated.
Foundation services such as vending, security, logging, monitoring, image factory and networking cannot be properly tested in the productive AWS environment because they cannot be separated or they can directly impact all workloads.

For instance, how can network failover be realistically tested in a live AWS Organization without impacting any workloads?
Or imagine a proposed change to your organizational unit structure or your [service control polcies (SCP)](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_scps.html).

Thorough testing is highly recommended, as a failure will immediately impact all of your cloud workloads.

To perform meaningful tests, the Cloud Foundation test environment must be as close as possible to the production environment.
This is the key point why we recommend an additional AWS Organization specifically for **Foundation Testing**.

![img](images/blog/aws-foundation-testing/foundation-environments.png)

## Reference Architecture

Leveraging Infrastructure as Code makes managing an additional AWS Organization nearly effortless.
At the heart of both environments are **Infrastructure as Code modules** representing the Foundation Core Capabilities. 
This modules are reusable components, populated with the different environment specific parameters.

Each Foundation Core Capability gets a dedicated **pipeline code repository** for each environment where the Infrastructure as Code modules are invoked.
Each of these repositories has a separate **CI/CD pipeline** responsible for deploying the infrastructure as Code definition in its corresponding Foundation Testing or -Production environment.

![img](images/blog/aws-foundation-testing/aws-foundation-cicd-reference-architecture-highres.png) -->

## Conclusion

The new AWS Region in Switzerland is a door opener for customers with local data residency and low latency requirements!
<br/><br/>

## Our service

Nuvibit specializes in providing **Cloud Foundation Capabilities** to organizations.

We will tailor our **[Foundation Blueprint](solutions/foundation-blueprint "Foundation Blueprint product page")** to your needs and enable you to deliver **Foundation Capabilities** to your **Cloud Workload Development Teams** with a high level of maturity.

**[Get in touch](/contact/ 'Contact us for more information!')** with us for further details.