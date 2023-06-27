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

  - title : "Enterprise-ready and scalable"
    icon : "fa-chart-line"
    content : "Designed for enterprises with high scalability requirements while leveraging industry standards and AWS best practices."
    
  - title : "Designed for GitOps"
    icon : "fa-brands fa-git"
    content : "Manage your AWS Foundation / Landing Zone with a full GitOps approach. A self-service portal can be easily integrated via Git."

  # feature at the right of the image
  right_side:
  - title : "Get updates and support"
    icon : "fa-handshake-angle"
    content : "Receive updates and support for our modules and keep your Foundation up to date and running. We specialize in AWS and Terraform with years of hands-on experience."

  - title : "Accelerate your cloud journey"
    icon : "fa-truck-fast"
    content : "Building a scalable Landing Zone takes a lot of time and effort. We've poured all of our expertise into our collection, with focus on painless deployment and management."

  - title : "Continuously growing"
    icon : "fa-seedling"
    content : "We are continuously expanding and improving our collection, relying heavily on feedback from our customers."

markdown_content:
  enable: true

excerpt_section:
    enable: false
    title: "In a nutshell..."
    list:
      - title: "Assessment"
        enable: true
        image: "images/solutions/foundation-blueprint-assessment.png"
        content: "First and foremost, we need to get an overview of where you stand on your cloud journey and where you want to go.
                  We will analyze your cloud strategy and organizational structures to adjust our Blueprint to them.
                  Your connectivity, security and automation requirements are also identified and taken into account.<br/><br/>
                  Part of the assessment also includes workshops to give you a better understanding of our Cloud Foundation."

      - title: "Implementation"
        enable: true
        image: "images/solutions/foundation-blueprint-implementation.png"
        content: "Once we have a clear overview and gathered all requirements, we assemble a team of specialists to build your tailored Cloud Foundation based on our Blueprint.
                  We adapt our Foundation Blueprint Terraform modules to perfectly fit your needs and support you during implementation.<br/><br/>
                  If needed, we can also adapt or build the tooling required for Infrastructure as Code deployments with Terraform."

      - title: "Transition"
        enable: true
        image: "images/solutions/foundation-blueprint-transition.png"
        content: "We have no interest in building a Cloud Foundation without ensuring that the necessary capabilities on your side will be established to run it successfully.
                  Because we believe that hands-on experience is the best way to learn new skills, we support the employees responsible for operations with on-the-job training.<br/><br/>
                  Part of the transition includes cementing the [Cloud Foundation Capabilities](/blog/cloud-foundation-map 'Nuvibit Cloud Foundation Blog Post') which are essential to establish a Cloud Operating Model."

      - title: "Support"
        enable: true
        image: "images/solutions/foundation-blueprint-support.png"
        content: "Even after the successful implementation of your Cloud Foundation, we want to continue supporting you on your cloud journey.
                  We can help you to optimize and refine your Foundation based on our Terraform modules.<br/><br/>
                  In addition, we can provide you with updates to our Foundation Terraform modules and implement your feature requests."

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

`Nuvibit Terraform Collection (NTC)`
{{<table "table table-striped table-bordered terraform-table">}}
| MODULE | DESCRIPTION |
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
| <mark style="font-weight:900;background-color:#fbe3fc;">Account Lifecycle Templates</mark> | Terraform module which provides templates for account lifecycle customization. Can be combined with NTC Account Factory module to manage the AWS account lifecycle (e.g. destroy default VPCs when new AWS account is created). |
| <mark style="font-weight:900;background-color:#fbe3fc;">SCP Templates</mark> | Terraform module which provides templates for Service Control Policies (SCP). Can be combined with NTC Organizations module to precisely roll out SCPs across Organizational Units and AWS accounts. |
{{</table>}}