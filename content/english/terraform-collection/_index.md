---
title: "Terraform Collection"
description: "A colletion of Infrastructure as Code Terraform modules specifically designed to deploy and manage an enterprise ready, compliant and scalable AWS cloud foundation."
draft: false

banner_section:
    enable: true
    title: "Terraform Collection"
    content: "A collection of our [Terraform modules](https://developer.hashicorp.com/terraform/tutorials/modules/module) specifically designed to deploy and manage an enterprise ready, compliant and scalable AWS cloud foundation. 
              Our modules are used by numerous companies in production. Some modules are open source, others are only accessible to our customers and all of them are continuously improved.<br><br>
              Did something catch your eye?"
    image : "images/solutions/ntc-logo.png"
    button:
        enable: true
        label: "Get in touch"
        link: "contact"
---

`This collection is constantly expanding and improving through customer feedback`
{{<table "table table-striped table-bordered terraform-table">}}
| NAME | DESCRIPTION | TYPE |
| ------------- | ------------- | ------------- |
| <mark style="font-weight:900;background-color:#9ec8ff;">Github Workflows</mark><img width=100/> | Reusable workflows for [Github Actions](https://docs.github.com/en/actions/learn-github-actions/understanding-github-actions) to run a Terraform pipeline. Supports Terraform Cloud & Enterprise and can be used to run Terraform module testing with [Terratest](https://terratest.gruntwork.io/). | [Open Source](https://github.com/nuvibit/github-terraform-workflows) <img width=70/> |
| <mark style="font-weight:900;background-color:#fbe3fc;">Lambda</mark> | Terraform module to deploy and manage AWS Lambda functions with Terraform. Our serverless solutions leverage this module. | [Open Source](https://registry.terraform.io/modules/nuvibit/lambda/aws/latest) |
| <mark style="font-weight:900;background-color:#fbe3fc;">Core Parameters</mark> | Terraform module to store and read a Terraform HCL map via AWS SSM Parameter Store. This enables the storage of centrally managed parameters that can be used across multiple pipelines and AWS accounts for your foundation. | [Open Source](https://registry.terraform.io/modules/nuvibit/core-parameters/aws/latest) |
| <mark style="font-weight:900;background-color:#fbe3fc;">NTC Parameters</mark> | Terraform module to store and retrieve Terraform or JSON parameters without limitations of AWS SSM Parameter Store. This module is specifically designed to integrate with our private modules. | <i id="copy-subnet1" class="fa-solid fa-lock"></i> Private |
| <mark style="font-weight:900;background-color:#fbe3fc;">Organization</mark> | Terraform module to deploy and manage AWS Organizations. Supports Account creation, Organizational Units, delegated administrators and Service Control Policies. | <i id="copy-subnet1" class="fa-solid fa-lock"></i> Private |
| <mark style="font-weight:900;background-color:#fbe3fc;">Identity Center</mark> | Terraform module to deploy and manage Single Sign-On via AWS IAM Identity Center (successor to AWS SSO). | <i id="copy-subnet1" class="fa-solid fa-lock"></i> Private |
| <mark style="font-weight:900;background-color:#fbe3fc;">VPC</mark> | Terraform module to deploy and manage AWS VPC networking. This module is designed for high flexibility and allows extensive scaling. | <i id="copy-subnet1" class="fa-solid fa-lock"></i> Private |
| <mark style="font-weight:900;background-color:#fbe3fc;">IPAM</mark> | Terraform module to deploy and manage Amazon VPC IP Address Manager (IPAM). In combination with the VPC module a highly automated AWS network can be realized. | <i id="copy-subnet1" class="fa-solid fa-lock"></i> Private |
| <mark style="font-weight:900;background-color:#fbe3fc;">Route 53</mark> | Terraform module to deploy and manage Amazon Route 53 DNS service. | <i id="copy-subnet1" class="fa-solid fa-lock"></i> Private |
| <mark style="font-weight:900;background-color:#ffbaba;">Account Lifecycle</mark> | Adaptable solution to manage AWS accounts, repositories and pipelines with Terraform. Simple and efficient with support for self-service integration based on Git. | <i id="copy-subnet1" class="fa-solid fa-lock"></i> Private |
| <mark style="font-weight:900;background-color:#ffbaba;">Account Baseline</mark> | Adaptable solution to manage baseline configuration of AWS accounts with Terraform. Scalable and efficient with support for hundreds of accounts across multiple regions. | <i id="copy-subnet1" class="fa-solid fa-lock"></i> Private |
{{</table>}}
<mark style="font-weight:900;background-color:#9ec8ff;">Tools</mark>
<mark style="font-weight:900;background-color:#fbe3fc;">Terraform modules</mark>
<mark style="font-weight:900;background-color:#ffbaba;">Terraform native solutions</mark>