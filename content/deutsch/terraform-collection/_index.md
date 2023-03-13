---
title: "Terraform Sammlung"
description: "A colletion of Infrastructure as Code Terraform modules specifically designed to deploy and manage an enterprise ready, compliant and scalable AWS foundation."
draft: false

banner_section:
    enable: true
    title: "Terraform Sammlung"
    content: "A collection of [Terraform modules](https://developer.hashicorp.com/terraform/tutorials/modules/module) specifically designed to deploy and manage an enterprise ready, compliant and scalable AWS foundation. Our modules are used by numerous companies in production. Some modules are open source, others are only accessible to our customers and all of them are continuously improved.<br><br>
    Did something catch your eye?"
    image : "images/illustrations/cloud-infrastructure-as-code.png"
    button:
        enable: true
        label: "Get in touch"
        link: "contact"
---

{{<table "table table-striped table-bordered terraform-table">}}
| NAME | DESCRIPTION | LINK |
| ------------- | ------------- | ------------- |
| <mark style="font-weight:900;background-color:#9ec8ff;">Github Workflows</mark><img width=100/> | Reusable workflows for [Github Actions](https://docs.github.com/en/actions/learn-github-actions/understanding-github-actions) to run a Terraform pipeline. Supports Terraform Cloud & Enterprise and can be used to run Terraform module testing with [Terratest](https://terratest.gruntwork.io/). | [Github](https://github.com/nuvibit/github-terraform-workflows) <img width=70/> |
| <mark style="font-weight:900;background-color:#fbe3fc;">Lambda</mark> | Terraform module to deploy and manage AWS Lambda functions with Terraform. Our serverless solutions are all based on this module. | [Github](https://github.com/nuvibit/terraform-aws-lambda)<hr>[Registry](https://registry.terraform.io/modules/nuvibit/lambda/aws/latest) |
| <mark style="font-weight:900;background-color:#fbe3fc;">Core Parameters</mark> | Terraform module to store and read a Terraform HCL map via AWS SSM Parameter Store. This enables the storage of centrally managed parameters that can be used across multiple pipelines and AWS accounts for your foundation. | [Github](https://github.com/nuvibit/terraform-aws-core-parameters)<hr>[Registry](https://registry.terraform.io/modules/nuvibit/core-parameters/aws/latest) |
| <mark style="font-weight:900;background-color:#fbe3fc;">Single Sign-On</mark> | Terraform module to deploy and manage Single Sign-On in AWS IAM Identity Center (successor to AWS SSO). Seamless integration with Account Lifecycle. | <i id="copy-subnet1" class="fa-solid fa-lock"></i> Private |
| <mark style="font-weight:900;background-color:#fbe3fc;">VPC</mark> | Terraform module to deploy and manage AWS VPC networking. Seamless integration with Account Lifecycle. | <i id="copy-subnet1" class="fa-solid fa-lock"></i> Private |
| <mark style="font-weight:900;background-color:#fbe3fc;">IPAM</mark> | Terraform module to deploy and manage Amazon VPC IP Address Manager (IPAM). Seamless integration with Account Lifecycle. | <i id="copy-subnet1" class="fa-solid fa-lock"></i> Private |
| <mark style="font-weight:900;background-color:#fbe3fc;">Route 53</mark> | Terraform module to deploy and manage Amazon Route 53 DNS service. | <i id="copy-subnet1" class="fa-solid fa-lock"></i> Private |
| <mark style="font-weight:900;background-color:#fbe3fc;">Image Factory</mark> | Terraform module to continuously build, test, and validate Amazon Machine Images (AMI). | <i id="copy-subnet1" class="fa-solid fa-lock"></i> Private |
| <mark style="font-weight:900;background-color:#fbe3fc;">Core Security</mark> | Terraform module to deploy and manage core security in AWS. Supports AWS Security Hub, Amazon GuardDuty, AWS Config and more. | <i id="copy-subnet1" class="fa-solid fa-lock"></i> Private |
| <mark style="font-weight:900;background-color:#fbe3fc;">Log Archive</mark> | Terraform module to deploy and manage a centralized S3 log archive in AWS. | <i id="copy-subnet1" class="fa-solid fa-lock"></i> Private |
| <mark style="font-weight:900;background-color:#ffbaba;">SEMPER</mark> | Serverless solution to discover and manage AWS security findings. Simple and efficient through [Policy as Code](https://github.com/nuvibit/semper-policy-repo-sample/wiki) and Terraform. | <i id="copy-subnet1" class="fa-solid fa-lock"></i> Private |
| <mark style="font-weight:900;background-color:#ffbaba;">Account Lifecycle</mark> | Adaptable solution to create and manage AWS accounts with Terraform. Simple and efficient with support for self-service integration based on Gitops. | <i id="copy-subnet1" class="fa-solid fa-lock"></i> Private |
| <mark style="font-weight:900;background-color:#ffbaba;">Account Baseline</mark> | Adaptable solution to create and manage baseline configuration of AWS accounts with Terraform. Scalable and efficient with support for hundreds of accounts across multiple regions. | <i id="copy-subnet1" class="fa-solid fa-lock"></i> Private |
{{</table>}}