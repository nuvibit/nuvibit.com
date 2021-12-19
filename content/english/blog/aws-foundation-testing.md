---
title: "You're probably missing an AWS environment..."
date: 2021-12-19T11:00:00+06:00
image: "images/blog/aws-foundation-testing/foundation-testing.png"
description: "Nuvibit Cloud Foundation IaC CI/CD Reference Architecture."
summary: "Foundation services such as vending, security, logging, monitoring, image factory, and networking cannot be properly tested in a live AWS environment because they cannot be separated or they can directly impact all workloads."
duration: 4
draft: false
---
## Context

First of all, what is a **Cloud Foundation** anyway and why should I care about it?

Before deploying a workload to the public cloud there are many moving parts which have to be coordinated.
There are **technical parts** such as connectivity or security and **organizational parts** such as finance or operations.
All of these elements are part of your individual cloud Foundation, which dictates the path for future deployments.

Each cloud customer has a cloud Foundation to some extent, but if that Foundation is not actively shaped from the start, it can cause massive bottlenecks down the road.

As an example, let's assume that we started with the VPC provided by AWS by default.
Later in our cloud journey, we decide to set up a VPN from the office to our VPC and encounter overlapping network areas.
Instead of focusing on our workloads, we now waste time troubleshooting issues we could have avoided if we had initially put more effort into the foundation.

A secure and scalable cloud Foundation will significantly accelerate your cloud adoption journey and is the key to success.
## Foundation Testing

Running workloads reliably and securely in a **multi-account AWS environment** requires a solid and tested Foundation.
Most workloads can run in the same AWS environment for production and testing as they can be easily separated.
Foundation services such as vending, security, logging, monitoring, image factory, and networking cannot be properly tested in a live AWS environment because they cannot be separated or they can directly impact all workloads.

For instance, how can network failover be realistically tested in a live AWS environment without impacting any workloads?

To perform meaningful tests, the test environment must be as close as possible to the production environment.
This is the key point why we recommend an additional AWS environment specifically for **Foundation Testing**.

![img](images/blog/aws-foundation-testing/foundation-environments.png)

## Reference Architecture

Leveraging Infrastructure as Code makes managing an additional AWS environment nearly effortless.
At the heart of both environments are **Infrastructure as Code modules**, which are reusable components that can be populated with different parameters depending on the environment.

Each Foundation core service gets a dedicated **pipeline code repository** for each environment where the Infrastructure as Code modules are invoked.
Each of these repositories has a separate **CI/CD pipeline** responsible for deploying the infrastructure as Code definition in its corresponding AWS environment.

![img](images/blog/aws-foundation-testing/aws-foundation-cicd-reference-architecture-highres.png)

Let's take a look at an example with Terraform:
```terraform {linenos=table,hl_lines=[7],linenostart=50}
# This is an excerpt from the code repository of the Image Factory pipeline (Foundation Testing environment)
# The Terraform module for the image factory is invoked with the "testing" parameter
module "image_factory" {
  source  = "nuvibit/foundation-image-factory/aws"
  version = "~> 1.0"
  
  foundation_environment = "testing"
  platform               = "Linux"
  base_image_name        = "amzn2-ami-hvm"
  base_image_arch        = "x86_64"
}
```
<br/>

## Conclusion

We provide the blueprint here, but the finishing touch is to tailor it to your exact requirements and preferences to make the most of it.

At Nuvibit, we specialize in building enterprise ready, compliant and scalable cloud foundations. 
We are happy to support you in the implementation of your individual Cloud Foundation.

**[Get in touch](/contact/ 'Contact us for more information!')** with us for further details.