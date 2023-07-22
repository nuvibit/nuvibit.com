---
title: "Nuvibit Terraform Collection | AWS Landing Zone & Foundation"
description: "Nuvibit Terraform Collection (NTC) is a revolutionary AWS Landing Zone & Foundation solution based entirely on Infrastructure as Code with Terraform."
draft: false

banner_section:
    enable: true
    title: "Nuvibit Terraform Collection (NTC)"
    content: "NTC is a revolutionary AWS Landing Zone & Foundation solution based entirely on Infrastructure as Code with Terraform.
              NTC is specifically designed to deploy and manage an enterprise-ready, compliant and scalable AWS environment.
              Our flexible, declarative, and modular approach offers many unique benefits to a platform engineering team and drastically reduces implementation time and effort.<br><br>
              Revolutionize your AWS infrastructure with streamlined management, accelerated deployment, and [GitOps](/faq/#gitops 'What is GitOps?') best practices."
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
    content : "Manage your AWS Landing Zone & Foundation entirely with Terraform without dependencies on AWS Control Tower and CloudFormation."
    
  - title : "Designed for GitOps"
    icon : "fa-brands fa-git-alt"
    content : "Manage your AWS Landing Zone & Foundation with a full GitOps approach. [Segregation of duties](/faq/#segregation 'What is segregation of duties?') can be enforced with Git repositories and pipeline permissions."

  - title : "Simple to customize"
    icon : "fa-user-gear"
    content : "Our modular approach offers a lot of flexibility when it comes to implementing a personalized AWS Landing Zone & Foundation. We provide customization templates as a starting point which can be adopted or modified."

  # feature at the right of the image
  right_side:
  - title : "Updates and support"
    icon : "fa-handshake-angle"
    content : "Receive updates and support for our modules and keep your AWS Landing Zone & Foundation up to date and running."

  - title : "Enterprise-ready and scalable"
    icon : "fa-chart-line"
    content : "Designed for enterprises with high scalability requirements, aligned with industry standards and AWS best practices. Reliably manage hundreds of accounts."

  - title : "Accelerate your cloud journey"
    icon : "fa-truck-fast"
    content : "Building a scalable AWS Landing Zone & Foundation takes a lot of time and effort. With our collection, you can leverage our extensive experience with AWS and Terraform to significantly accelerate your implementation process."

markdown_content:
  enable: true

excerpt_section:
    enable: false
    # title: "In a nutshell..."
    # list:
    #   - title: "Placeholder"
    #     enable: true
    #     image: "images/solutions/placeholder.png"
    #     content: "Lorem Ipsum.<br/><br/>"

link_section:
    enable: false
    # list:
    #   - title: "Documentation"
    #     enable: false
    #     content: "You can find more details in our documentation"
    #     links:
    #       - url: "https://url1"
    #         link_name: "documentation 1"
    #       - url: "https://url2"
    #         link_name: "documentation 1"
      
    #   - title: "Blog"
    #     enable: true
    #     content: "Read more about the Nuvibit Foundation Blueprint in these blog posts"
    #     blog_tag: foundation

testimonial_section:
    enable: false
    # title: "Customer References"
    # list:
    #   - image: "images/logo/logo_nuvibit_dark.png"
    #     name: "Lorem ipsum dolor"
    #     content: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt"
---

## Nuvibit Terraform Collection (NTC) Modules 
{{<table "table table-striped table-bordered table-overflow">}}
| NAME | DESCRIPTION |
| ------------- | ------------- |
| <mark class="inline-mark-FBE3FC">NTC Parameters</mark><img width=150/> | Terraform module to store and retrieve Terraform or JSON parameters across multiple AWS accounts and CI/CD pipelines. This module is specifically designed to integrate with our NTC modules. |
| <mark class="inline-mark-FBE3FC">NTC Organizations</mark> | Terraform module to manage AWS Organizations. Supports managing nested Organizational Units (OUs), delegated administrators and Service Control Policies. |
| <mark class="inline-mark-FBE3FC">NTC Account Factory</mark> | Terraform module to manage Account Vending, Account Lifecycle, and Account Baseline. Provision new AWS accounts, define custom account lifecycle actions, and roll out baseline configuration for multiple accounts and regions. |
| <mark class="inline-mark-FBE3FC">NTC Identity Center</mark> | Terraform module to deploy and manage Single Sign-On via AWS IAM Identity Center (successor to AWS SSO). |
| <mark class="inline-mark-FBE3FC">NTC Log Archive</mark> | Terraform module to deploy and manage a central log archive, where foundation logs like Cloudtrail, AWS Config, Amazon GuardDuty and VPC flow logs will be stored. |
| <mark class="inline-mark-FBE3FC">NTC Security Tooling</mark> | Terraform module to deploy and manage central security tooling like AWS Security Hub, AWS Config and Amazon GuardDuty. |
| <mark class="inline-mark-FBE3FC">NTC IPAM</mark> | Terraform module to deploy and manage Amazon VPC IP Address Manager (IPAM). In combination with the VPC module a highly automated AWS network can be realized. |
| <mark class="inline-mark-FBE3FC">NTC VPC</mark> | Terraform module to deploy and manage AWS VPC networking. This module is designed for high flexibility and allows extensive scaling. |
| <mark class="inline-mark-FBE3FC">Account Baseline Templates</mark> | Terraform module which provides templates for account baseline configurations. Can be combined with NTC Account Factory module to precisely roll out account baselines across AWS accounts in multiple regions. |
| <mark class="inline-mark-FBE3FC">Account Lifecycle Templates</mark> | Terraform module which provides templates for account lifecycle customization. Can be combined with NTC Account Factory module to manage the AWS account lifecycle (e.g. destroy default VPC when new account is created). |
| <mark class="inline-mark-FBE3FC">SCP Templates</mark> | Terraform module which provides templates for Service Control Policies (SCP). Can be combined with NTC Organizations module to precisely roll out SCPs across Organizational Units (OUs) and specific AWS accounts. |
{{</table>}}
<br><br>

## AWS Landing Zone & Foundation Comparison
<br>An AWS Landing Zone & Foundation refers to a well-architected, pre-configured environment that serves as a foundation for deploying and managing workloads in the AWS cloud.
It provides a set of best practices and architectural patterns to ensure consistency, security, and scalability across your AWS infrastructure. 
It helps organizations establish a standardized and secure baseline setup, reducing the time and effort required for initial infrastructure deployment. 

There are several solutions for deploying a ready-to-use AWS Landing Zone & Foundation. Each solution offers certain benefits and has its own limitations.<br><br>

{{<table "table table-striped table-bordered table-overflow">}}
|  | NUVIBIT TERRAFORM COLLECTION | AWS LANDING ZONE ACCELERATOR | AWS CONTROL TOWER |
| ------------- | ------------- | ------------- | ------------- |
| <mark class="inline-bold-900">Purpose</mark> | Provides a flexible, declarative, and modular approach to deploying and managing an enterprise-ready and scalable AWS environment with potentially hundreds of accounts. | Provides a framework for rapidly deploying a multi-account AWS environment with recommended best practices. | Offers an automated and prescriptive approach to set up and govern a secure multi-account AWS environment. |
| <mark class="inline-bold-900">Delivery Mechanism</mark> | Terraform | CDK and CloudFormation | AWS managed service + Add-on solutions |
| <mark class="inline-bold-900">Setup Complexity</mark> | Requires Terraform knowledge to implement and operate. The modules will be parameterized and deployed individually. Detailed sample repositories are provided as a blueprint for implementing the entire solution. Additional documentation and step-by-step instructions are also available. | Requires CloudFormation and ideally CDK knowledge. Control Tower or AWS Organizations must be set up first. A CloudFormation template must be executed for the initial deployment of the solution. YAML configuration files are then managed in AWS CodeCommit and deployed through CodePipelines and CloudFormation StackSets. | Control Tower itself can be deployed and managed directly via the AWS console. For customization, additional knowledge in CloudFormation and/or Terraform is required. Add-on solutions for Control Tower need to be provisioned separately and can drastically increase complexity. |
| <mark class="inline-bold-900">Solution Lifecycle</mark> | Each module has its own lifecycle and can be updated and downgraded individually. Running a Terraform plan highlights the changes and should be reviewed to avoid unwanted changes. A staged rollout is supported and recommended. | Entire solution needs to be updated via CloudFormation template. After updating the solution all CodePipelines will be invoked and rolled out. There is no support for a staged rollout. | AWS Control Tower can be updated through the landing zone settings page. Additionally enrolled accounts need to be updated in a second step. Add-on solutions need to be updated separately. |
| <mark class="inline-bold-900">Flexibility and Customization</mark> | Terraform modules offer maximum flexibility in terms of deployment. As long as the underlying services are available, all regions can be managed. It is even possible for certain modules to be deployed in a different region until the underlying service is available (e.g. using Identity Center in Frankfurt until it is available in a new region). Customer managed modules can be used alongside. Dedicated template modules are available as a blueprint for customizing the solution. | Can be used with AWS Control Tower or simply AWS Organizations and can be deployed in regions where AWS Control Tower is not supported. Configuration files allow customization of the solution and deployment of additional CloudFormation StackSets. | AWS Control Tower must be deployed in a supported region (home region) and unsupported regions cannot be fully governed. Add-on solutions are available for limited customization via CloudFormation and/or Terraform. |
| <mark class="inline-bold-900">Automation in CI/CD</mark> | All Terraform modules are deployed via customer pipelines. In addition, NTC Account Factory provides a native AWS solution (based on CodePipelines) to dynamically roll out account baselines with Terraform across multiple accounts and regions. | Based on AWS CodeCommit, CodeBuild and CodePipelines. Cannot be integrated with customer pipelines. | Automation is executed in the background by AWS and is not configurable by the user. Add-on solutions (e.g. Account Factory for Terraform) offer limited customization via customer pipelines. |
| <mark class="inline-bold-900">Troubleshooting</mark> | Everything is deployed with Terraform and therefore potential errors are also related to Terraform. Errors can occur in the Terraform code, Terraform dependencies (versions and providers) and the customization (account lifecycle and account baseline). | Errors can occur in the CDK code (TypeScript), CloudFormation Templates / StackSets and CodePipelines. In combination with the Control Tower, the effort for operation and troubleshooting increases considerably. | Errors can occur in AWS Service Catalog, CloudFormation Templates / StackSets, and by not updating landing zone and account enrollments. When using add-on solutions (e.g. Account Factory for Terraform), additional errors may occur in the add-on solution itself and when customizing the solution (e.g. account baseline). |
| <mark class="inline-bold-900">Support</mark> | Support for the Terraform modules is included in the license. Additional assistance (e.g. training) can be offered separately. | Issues can be submitted to Github Repository. AWS offers assistance with an AWS Business or Enterprise Support plan. | AWS offers assistance for Control Tower itself with an AWS Business or Enterprise Support plan. Issues with add-on solutions (e.g. Account Factory for Terraform) can be submitted to Github Repository. |
| <mark class="inline-bold-900">License</mark> | Must be licensed to access modules, updates, documentation, and support. The source code is fully viewable, and downloaded modules can be used and modified even after the license expires. | Open source. The source code is fully viewable. | Proprietary AWS managed service. Control Tower source code is not viewable. No additional fees for Control Tower service itself. |
{{</table>}}
<br>

## Choose the right AWS Landing Zone & Foundation approach

There is no single solution for AWS Landing Zone & Foundation which meets the requirements for all customers.<br>
There are many aspects to consider when choosing the right solution (e.g. delivery mechanism determines how customization and troubleshooting is performed).<br><br>
This simplified decision tree is intended to provide guidance in choosing the right solution:

![img](images/solutions/ntc-decision-tree.png)