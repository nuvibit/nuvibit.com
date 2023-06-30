---
title: "Terraform Collection"
description: "Eine Sammlung von Infrastructure as Code Terraform-Modulen, die spezifisch für die Bereitstellung und Verwaltung einer AWS Foundation / Landing Zone entwickelt wurden."
draft: false

banner_section:
    enable: true
    title: "Terraform Collection"
    content: "Eine Sammlung unserer [Terraform Module](https://developer.hashicorp.com/terraform/tutorials/modules/module), die spezifisch für die Bereitstellung und Verwaltung einer AWS Foundation / Landing Zone entwickelt wurden. 
              Unser flexibler, deklarativer und modularer Ansatz bietet viele einzigartige Vorteile für ein Plattformentwicklungsteam und reduziert den Zeit- und Arbeitsaufwand für die Implementierung drastisch.<br><br>"
    image : "images/solutions/ntc-logo.png"
    button:
        enable: true
        label: "Demo buchen"
        link: "contact"

feature_section:
  enable : true
  title: "Key features"
  image : "images/solutions/ntc-module.png"

  # feature at the left of the image
  left_side:
  - title : "100% Terraform-nativ"
    icon : "fa-file-code"
    content : "Verwalten Sie Ihre AWS Foundation / Landing Zone vollständig mit Terraform ohne Abhängigkeiten von AWS Control Tower und CloudFormation."
    
  - title : "Konzipiert für GitOps"
    icon : "fa-brands fa-git-alt"
    content : "Verwalten Sie Ihre AWS Foundation / Landing Zone mit einem vollständigen GitOps-Ansatz. [Segregation of duties](/faq/#segregation 'Was ist Aufgabentrennung?') kann mit Git-Repositories und Pipeline-Berechtigungen durchgesetzt werden."

  - title : "Einfach personalisierbar"
    icon : "fa-user-gear"
    content : "Unser modularer Ansatz bietet eine hohe Flexibilität und viele Optionen, wenn es um die Implementierung einer personalisierten AWS Foundation / Landing Zone geht. Wir bieten Vorlagen für die Personalisierung, die als Ausgangspunkt dienen und direkt übernommen oder angepasst werden können."

  # feature at the right of the image
  right_side:
  - title : "Updates und Support"
    icon : "fa-handshake-angle"
    content : "Erhalten Sie Updates und Support für unsere Module und bleiben Sie mit Ihrer AWS Foundation / Landing Zone auf dem neuesten Stand und funktionsfähig. Wir sind auf AWS und Terraform spezialisiert mit langjähriger praktischer Erfahrung."

  - title : "Enterprise-ready und skalierbar"
    icon : "fa-chart-line"
    content : "Entwickelt für Unternehmen mit hohen Skalierbarkeitsanforderungen, abgestimmt auf Branchenstandards und AWS Best Practices. Verwalten Sie zuverlässig Hunderte von Accounts."

  - title : "Beschleunigung der Cloud Journey"
    icon : "fa-truck-fast"
    content : "Der Aufbau einer skalierbaren AWS Foundation / Landing Zone erfordert viel Zeit und Mühe. Mit unserer Collection können Sie unsere umfassende Erfahrung mit AWS und Terraform nutzen, um Ihren Implementierungsprozess erheblich zu beschleunigen."

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
{{<table "table table-striped table-bordered terraform-table">}}
| NAME | DESCRIPTION |
| ------------- | ------------- |
| <mark style="font-weight:900;background-color:#fbe3fc;">NTC Parameters</mark><img width=150/> | Terraform module to store and retrieve Terraform or JSON parameters across multiple AWS accounts and CI/CD pipelines. This module is specifically designed to integrate with our NTC modules. |
| <mark style="font-weight:900;background-color:#fbe3fc;">NTC Organizations</mark> | Terraform module to manage AWS Organizations. Supports managing nested Organizational Units (OU), delegated administrators and Service Control Policies. |
| <mark style="font-weight:900;background-color:#fbe3fc;">NTC Account Factory</mark> | Terraform module to manage Account Vending, Account Lifecycle, and Account Baseline. Provision new AWS accounts, define custom account lifecycle actions, and roll out baseline configuration for multiple accounts and regions. |
| <mark style="font-weight:900;background-color:#fbe3fc;">NTC Identity Center</mark> | Terraform module to deploy and manage Single Sign-On via AWS IAM Identity Center (successor to AWS SSO). |
| <mark style="font-weight:900;background-color:#fbe3fc;">NTC Log Archive</mark> | Terraform module to deploy and manage a central log archive, where foundation logs like cloudtrail, aws config, vpc flow logs will be saved. |
| <mark style="font-weight:900;background-color:#fbe3fc;">NTC Security Tooling</mark> | Terraform module to deploy and manage central security tooling like AWS Security Hub, AWS Config and Amazon GuardDuty. |
| <mark style="font-weight:900;background-color:#fbe3fc;">NTC IPAM</mark> | Terraform module to deploy and manage Amazon VPC IP Address Manager (IPAM). In combination with the VPC module a highly automated AWS network can be realized. |
| <mark style="font-weight:900;background-color:#fbe3fc;">NTC VPC</mark> | Terraform module to deploy and manage AWS VPC networking. This module is designed for high flexibility and allows extensive scaling. |
| <mark style="font-weight:900;background-color:#fbe3fc;">Account Baseline Templates</mark> | Terraform module which provides templates for account baseline configurations. Can be combined with NTC Account Factory module to precisely roll out account baselines across AWS accounts in multiple regions. |
| <mark style="font-weight:900;background-color:#fbe3fc;">Account Lifecycle Templates</mark> | Terraform module which provides templates for account lifecycle customization. Can be combined with NTC Account Factory module to manage the AWS account lifecycle (e.g. destroy default VPC when new account is created). |
| <mark style="font-weight:900;background-color:#fbe3fc;">SCP Templates</mark> | Terraform module which provides templates for Service Control Policies (SCP). Can be combined with NTC Organizations module to precisely roll out SCPs across Organizational Units and specific AWS accounts. |
{{</table>}}
<br><br>

## AWS Foundation / Landing Zone Comparison
\
An AWS Foundation / Landing Zone refers to a well-architected, pre-configured environment that serves as a foundation for deploying and managing workloads in the AWS cloud.
It provides a set of best practices and architectural patterns to ensure consistency, security, and scalability across your AWS infrastructure. 
It helps organizations establish a standardized and secure baseline setup, reducing the time and effort required for initial infrastructure deployment. 

There are several solutions for deploying a ready-to-use AWS Foundation / Landing Zone. Each solution offers certain benefits and has its own limitations.
\
\
{{<table "table table-striped table-bordered terraform-table">}}
|  | AWS LANDING ZONE ACCELERATOR | AWS CONTROL TOWER | NUVIBIT TERRAFORM COLLECTION |
| ------------- | ------------- | ------------- | ------------- |
| <mark style="font-weight:900;">Purpose</mark> | Provides a framework for rapidly deploying a multi-account AWS environment with recommended best practices. | Offers an automated and prescriptive approach to set up and govern a secure multi-account AWS environment. | Provides a flexible, declarative, and modular approach to deploying and managing an enterprise-ready and scalable AWS environment with potentially hundreds of accounts. |
| <mark style="font-weight:900;">Delivery Mechanism</mark> | CDK and CloudFormation | AWS managed service + Add-on solutions | Terraform |
| <mark style="font-weight:900;">Setup Complexity</mark> | Requires CloudFormation and ideally CDK knowledge. Control Tower or AWS Organizations must be set up first. A CloudFormation template must be executed for the initial deployment of the solution. YAML configuration files are then managed in AWS CodeCommit and deployed through CodePipelines and CloudFormation StackSets. | Control Tower itself can be deployed and managed directly via the AWS console. For customization, additional knowledge in CloudFormation and/or Terraform is required. Add-on solutions for Control Tower need to be provisioned separately and can drastically increase complexity. | Requires Terraform knowledge to implement and operate. The modules will be parameterized and deployed individually. Detailed sample repositories are provided as a blueprint for implementing the entire solution. Additional documentation and step-by-step instructions are also available. |
| <mark style="font-weight:900;">Solution Lifecycle</mark> | Entire solution needs to be updated via CloudFormation template. After updating the solution all CodePipelines will be invoked and rolled out. There is no support for a staged rollout. | AWS Control Tower can be updated through the landing zone settings page. Additionally enrolled accounts need to be updated in a second step. Add-on solutions need to be updated separately. | Each module has its own lifecycle and can be updated and downgraded individually. Running a Terraform plan highlights the changes and should be reviewed to avoid unwanted changes. A staged rollout is supported and recommended. |
| <mark style="font-weight:900;">Flexibility and Customization</mark> | Can be used with AWS Control Tower or simply AWS Organizations and can be deployed in regions where AWS Control Tower is not supported. Configuration files allow customization of the solution and deployment of additional CloudFormation StackSets. | AWS Control Tower must be deployed in a supported region (home region) and unsupported regions cannot be fully governed. Add-on solutions are available for limited customization via CloudFormation and/or Terraform. | Terraform modules offer maximum flexibility in terms of deployment. As long as the underlying services are available, all regions can be managed. It is even possible for certain modules to be deployed in a different region until the underlying service is available (e.g. using Identity Center in Frankfurt until it is available in a new region). Customer managed modules can be used alongside. Dedicated template modules are available as a blueprint for customizing the solution. |
| <mark style="font-weight:900;">Automation in CI/CD</mark> | Based on AWS CodeCommit, CodeBuild and CodePipelines. Cannot be integrated with customer pipelines | Automation is executed in the background by AWS and is not configurable by the user. Add-on solutions (e.g. Account Factory for Terraform) offer limited customization via customer pipelines. | All Terraform modules are deployed via customer pipelines. In addition, NTC Account Factory provides a native AWS solution (based on CodePipelines) to dynamically roll out account baselines with Terraform across multiple accounts and regions. |
| <mark style="font-weight:900;">Troubleshooting</mark> | Errors can occur in the CDK code (TypeScript), CloudFormation Templates / StackSets and CodePipelines. In combination with the Control Tower, the effort for operation and troubleshooting increases considerably. | Errors can occur in AWS Service Catalog, CloudFormation Templates / StackSets, and by not updating landing zone and account enrollments. When using add-on solutions (e.g. Account Factory for Terraform), additional errors may occur in the add-on solution itself and when customizing the solution (e.g. account baseline). | Everything is deployed with Terraform and therefore potential errors are also related to Terraform. Errors can occur in the Terraform code, Terraform dependencies (versions and providers) and the customization (account lifecycle and account baseline). |
| <mark style="font-weight:900;">Support</mark> | Issues can be submitted to Githup Repository. AWS offers assistance with an AWS Business or Enterprise Support plan. | AWS offers assistance for Control Tower itself with an AWS Business or Enterprise Support plan. Issues with add-on solutions (e.g. Account Factory for Terraform) can be submitted to Githup Repository. | Support for the Terraform modules is included in the subscription. Additional assistance (e.g. training) can be offered separately. |
| <mark style="font-weight:900;">License</mark> | Open source. The source code is fully viewable. | Proprietary AWS managed service. Control Tower source code is not viewable. No additional fees for Control Tower service itself. | Must be licensed to access modules, updates, documentation, and support. The source code is fully viewable, and downloaded modules can be modified and used even after the license expires. |
{{</table>}}
<br>

## Choose the right AWS Foundation / Landing Zone approach

There is no single solution for AWS Foundation / Landing Zone which meets the requirements for all customers.<br>
While we are confident that our Terraform Collection offers many unique benefits to a platform engineering team, there are some cases where we would not necessarily recommend our solution.
<br><br>
There are many aspects to consider when choosing the right solution (e.g. delivery mechanism determines how customization and troubleshooting is performed), but this simplified decision tree can provide guidance.

![img](images/solutions/ntc-decision-tree.png)
