---
title: "Terraform Collection"
description: "A colletion of Infrastructure as Code Terraform modules specifically designed to deploy and manage an enterprise ready, compliant and scalable AWS cloud foundation."
draft: false

banner_section:
    enable: true
    title: "Terraform Collection"
    content: "A collection of [Terraform modules](https://developer.hashicorp.com/terraform/tutorials/modules/module) specifically designed to deploy and manage an enterprise ready, compliant and scalable AWS cloud foundation. 
              Our modules are used by numerous companies in production. Some modules are open source, others are only accessible to our customers and all of them are continuously improved.<br><br>"
    image : "images/solutions/ntc-logo.png"
    button:
        enable: true
        label: "Book a demo"
        link: "contact"

feature_section:
  enable : true
  title: "Key features"
  image : "images/solutions/ntc-module.png"

  # feature at the left of the image
  left_side:
  - title : "100% Terraform-native"
    icon : "fa-file-code"
    content : "Manage your AWS Foundation / Landing Zone entirely with Terraform without any dependencies on AWS Control Tower and CloudFormation."
    
  - title : "Designed for GitOps"
    icon : "fa-brands fa-git-alt"
    content : "Manage your AWS Foundation with a full GitOps approach. A self-service portal can be easily integrated via Git. Separation of duties can be enforced with Git and pipeline permissions."

  - title : "Simple to customize"
    icon : "fa-user-gear"
    content : "Our modular approach offers a lot of flexibility and options when it comes to implementing a personalized AWS Foundation / Landing Zone. We provide customization templates as a starting point that can be adopted or modified."

  # feature at the right of the image
  right_side:
  - title : "Accelerate your cloud journey"
    icon : "fa-truck-fast"
    content : "Building a scalable AWS Foundation / Landing Zone takes a lot of time and effort. We've poured all of our expertise into our collection, with focus on painless deployment and management."

  - title : "Enterprise-ready and scalable"
    icon : "fa-chart-line"
    content : "Designed for enterprises with high scalability requirements, aligned with industry standards and AWS best practices."

  - title : "Get updates and support"
    icon : "fa-handshake-angle"
    content : "Receive updates and support for our modules and keep your AWS Foundation up to date and running. We specialize in AWS and Terraform with years of hands-on experience."

markdown_content:
  enable: true

excerpt_section:
    enable: false
    title: "In a nutshell..."
    list:
      - title: "Placeholder"
        enable: true
        image: "images/solutions/placeholder.png"
        content: "Lorem Ipsum.<br/><br/>"

link_section:
    enable: false
    list:
      - title: "Documentation"
        enable: false
        content: "You can find more details in our documentation"
        links:
          - url: "https://url1"
            link_name: "documentation 1"
          - url: "https://url2"
            link_name: "documentation 1"
      
      - title: "Blog"
        enable: true
        content: "Read more about the Nuvibit Foundation Blueprint in these blog posts"
        blog_tag: foundation

testimonial_section:
    enable: false
    title: "Customer References"
    list:
      - image: "images/logo/logo_nuvibit_dark.png"
        name: "Lorem ipsum dolor"
        content: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt"

---

## Nuvibit Terraform Collection (NTC) Modules 
{{<table "table table-striped table-bordered terraform-table">}}
| NAME | DESCRIPTION |
| ------------- | ------------- |
| <mark style="font-weight:900;background-color:#fbe3fc;">NTC Parameters</mark><img width=150/> | Terraform module to store and retrieve Terraform or JSON parameters without limitations of AWS SSM Parameter Store. This module is specifically designed to integrate with our NTC modules. |
| <mark style="font-weight:900;background-color:#fbe3fc;">NTC Organizations</mark> | Terraform module to manage AWS Organizations. Supports nested Organizational Units (OU), delegated administrators and Service Control Policies. |
| <mark style="font-weight:900;background-color:#fbe3fc;">NTC Account Factory</mark> | Terraform module to manage account vending, account lifecycle and account baseline. Enables running an enterprise-ready and scalable Terraform Landing Zone. |
| <mark style="font-weight:900;background-color:#fbe3fc;">NTC Identity Center</mark> | Terraform module to deploy and manage Single Sign-On via AWS IAM Identity Center (successor to AWS SSO). |
| <mark style="font-weight:900;background-color:#fbe3fc;">NTC Log Archive</mark> | Terraform module to deploy and manage a central log archive, where foundation logs like cloudtrail, aws config, vpc flow logs will be saved. |
| <mark style="font-weight:900;background-color:#fbe3fc;">NTC Security Tooling</mark> | Terraform module to deploy and manage central security tooling like AWS Security Hub, AWS Config and Amazon GuardDuty. |
| <mark style="font-weight:900;background-color:#fbe3fc;">NTC IPAM</mark> | Terraform module to deploy and manage Amazon VPC IP Address Manager (IPAM). In combination with the VPC module a highly automated AWS network can be realized. |
| <mark style="font-weight:900;background-color:#fbe3fc;">NTC VPC</mark> | Terraform module to deploy and manage AWS VPC networking. This module is designed for high flexibility and allows extensive scaling. |
| <mark style="font-weight:900;background-color:#fbe3fc;">Account Baseline Templates</mark> | Terraform module which provides templates for account baseline configurations. Can be combined with NTC Account Factory module to precisely roll out account baselines across AWS accounts in multiple regions. |
| <mark style="font-weight:900;background-color:#fbe3fc;">Account Lifecycle Templates</mark> | Terraform module which provides templates for account lifecycle customization. Can be combined with NTC Account Factory module to manage the AWS account lifecycle (e.g. destroy default VPC when new account is created). |
| <mark style="font-weight:900;background-color:#fbe3fc;">SCP Templates</mark> | Terraform module which provides templates for Service Control Policies (SCP). Can be combined with NTC Organizations module to precisely roll out SCPs across Organizational Units and AWS accounts. |
{{</table>}}
<br><br>

## AWS Foundation / Landing Zone Comparison
\
An AWS Foundation / Landing Zone refers to a well-architected, pre-configured environment that serves as a foundation for deploying and managing workloads in the AWS cloud.
It provides a set of best practices and architectural patterns to ensure consistency, security, and scalability across your AWS infrastructure. 
It helps organizations establish a standardized and secure baseline setup, reducing the time and effort required for initial infrastructure deployment. 

There are several solutions for deploying an out-of-the-box AWS Landing Zone.
Each solution offers certain benefits and has its own limitations.
\
\
{{<table "table table-striped table-bordered terraform-table">}}
|  | AWS LANDING ZONE ACCELERATOR | AWS CONTROL TOWER | NUVIBIT TERRAFORM COLLECTION |
| ------------- | ------------- | ------------- | ------------- |
| <mark style="font-weight:900;">Purpose</mark> | Provides a framework for rapidly deploying a multi-account AWS environment with recommended best practices. | Offers an automated and prescriptive approach to set up and govern a secure multi-account AWS environment. | Provides a customizable, declarative, and modular approach to deploying and managing a scalable and enterprise-ready AWS environment. |
| <mark style="font-weight:900;">Delivery mechanism</mark> | CDK and CloudFormation | AWS Managed Service + Add-on solutions | Terraform |
| <mark style="font-weight:900;">Setup Complexity</mark> | Requires some CloudFormation and CDK knowledge. Control Tower or AWS Organizations must be set up first. A CloudFormation template must be executed for the initial deployment of the solution. YAML configuration files are then managed in AWS CodeCommit and deployed through CodePipelines and CloudFormation StackSets. | Control Tower itself can be deployed and managed directly via the AWS console. For customization, additional knowledge in CloudFormation or Terraform is required. Add-on solutions for Control Tower need to be provisioned separately and drastically increase complexity. | Requires Terraform knowledge to implement and operate. The modules will be parameterized and deployed individually. Detailed sample repositories are provided as a blueprint for implementing the entire solution. Additional documentation and step-by-step instructions are also available. |
| <mark style="font-weight:900;">Solution lifecycle</mark> | Entire solution needs to be updated via CloudFormation template. After updating the solution all CodePipelines will be invoked and rolled out. There is no support for a staged rollout. | AWS Control Tower landing zone can be updated through the Landing zone settings page. Additionally enrolled accounts need to be updated in a second step. Add-on solutions need to be updated separately. | Each module has its own lifecycle and can be updated and downgraded individually. Running a Terraform plan highlights the changes and should be reviewed to avoid unwanted changes. A staged rollout is supported and recommended. |
| <mark style="font-weight:900;">Automation in CI/CD</mark> | Based on AWS CodeCommit, CodeBuild and CodePipelines. Cannot be integrated with customer pipelines | Automation is executed in the background by AWS and is not configurable by the user. Add-ons (e.g. Account Factory for Terraform) offer some customization via customer pipelines. | All Terraform modules are deployed via customer pipelines. In addition, NTC Account Factory provides a native AWS solution for dynamically rolling out account baselines with Terraform across multiple accounts and regions. |
| <mark style="font-weight:900;">Operation and troubleshooting</mark> | Errors can occur in the CDK code (TypeScript), CloudFormation Templates / StackSets and CodePipelines. In combination with the Control Tower, the operating and troubleshooting effort becomes even greater. | Errors can occur in the AWS Service Catalog, CloudFormation Templates / StackSets, and by specifying invalid inputs or by not updating Landing Zone and account enrollments. When using add-ons (e.g. Account Factory for Terraform), additional errors may occur in the add-on solution itself and when customizing the solution (e.g. account baseline). | Everything is deployed with Terraform and therefore potential errors are also related to Terraform. Errors can occur in the Terraform code, Terraform dependencies (versions and providers) and the customization (account lifecycle and account baseline). |
| <mark style="font-weight:900;">Support</mark> | Issues can be submitted to Githup Repository. AWS offers assistance with an AWS Business or Enterprise Support plan. | AWS offers assistance for Control Tower itself with an AWS Business or Enterprise Support plan. Issues with add-ons (e.g. Account Factory for Terraform) can be submitted to Githup Repository. | Support for the Terraform modules is included in the subscription. Additional assistance (e.g. training) can be offered separately. |
| <mark style="font-weight:900;">License</mark> | OpenSource | Proprietary. Control Tower source code is not viewable. No additional fees for Control Tower service itself. | Only available with active subscription that provides access to modules, updates, documentation, and support. Source code is fully viewable, and downloaded modules can be modified and used even after the subscription expires. |
{{</table>}}


<!-- 
https://www.sierra-cedar.com/2023/06/13/aws-account-factory-for-terraform-vs-aws-landing-zone-accelerator/
https://www.meshcloud.io/de/blog/aws-landing-zone-comparison/
https://docs.aws.amazon.com/prescriptive-guidance/latest/large-migration-foundation-playbook/landing-zone.html
https://www.ecloudcontrol.com/aws-landing-zone-vs-control-tower/
https://docs.aws.amazon.com/prescriptive-guidance/latest/migration-aws-environment/building-landing-zones.html 
-->