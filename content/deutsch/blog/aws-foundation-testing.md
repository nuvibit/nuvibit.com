---
title: "You're probably missing an AWS environment..."
date: 2021-12-15T11:00:00+06:00
image: "images/blog/aws-foundation-testing/foundation-testing.png"
description: "Nuvibit Cloud Foundation IaC CI/CD Reference Architecture."
summary: "Foundation services such as vending, security, logging, monitoring, image factory, and networking cannot be properly tested in a live AWS environment because they can directly impact all workloads."
duration: 10
draft: false
---
## Context

First of all, what is a Cloud Foundation anyway and why should I care about it?

[insert cloud foundation summary]

## Foundation Testing

To run workloads reliably and securely in a multi-account AWS environment, a solid and tested foundation is therefore required.
Most Workloads can run in the same AWS environment for production and testing as they can be easily separated.
Foundation services such as vending, security, logging, monitoring, image factory, and networking cannot be properly tested in a live AWS environment because they can directly impact all workloads.

For example, how should a network failover be tested in a live AWS environment without impacting any workloads?

For any testing to be meaningful, the test environment must be as close as possible to the production environment.
This is the key point why we recommend an additional AWS environment specifically for foundation testing.

![img](images/blog/aws-foundation-testing/foundation-environments.png)

## Reference Architecture

By leveraging infrastructure as code, managing the additional AWS environment is virtually a no-brainer.
At the heart of both environments are Infrastructure as Code modules, which are reusable components that can be populated with different parameters depending on the given environment.

Each Foundation core service gets a separate pipeline code repository for each environment where the Infrastructure as Code modules are invoked.
Each of these repositories has its own CI/CD pipeline which is responsible for deploying the infrastructure as a code definition in its designated AWS environment.

The only difference in the CI/CD pipeline configuration is that some point to a separate identical AWS environment.

![img](images/blog/aws-foundation-testing/aws-foundation-cicd-reference-architecture-highres.png)

## Conclusion

[insert short conclusion]

**[Contact](/contact/ 'Contact us for more information!')** us for further details.