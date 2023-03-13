---
title: "Account Lifecycle"
description: "Fully Terraform-native and extremely flexible Account Lifecycle solution to provision and manage AWS accounts."
draft: false

banner_section:
    enable: true
    title: "Account Lifecycle"
    content: "As your AWS deployment grows, you will be faced with the need to provide secure and compliant AWS accounts in an automated manner. 
    It's important that the Account Lifecycle fits into your existing tooling landscape to reduce the learning curve and operational overhead for your teams. 
    That's why we designed this solution to be fully Terraform-native and extremely flexible.<br/><br/>
    Building a Landing Zone with Account Lifecycle from scratch with Terraform is a lot of work. Good thing we took care of that."
    image : "images/solutions/account-lifecycle-logo.png"
    button:
        enable: true
        label: "Get in touch"
        link: "contact"

feature_section:
  enable : true
  title : "Key features"
  image: "images/solutions/account-lifecycle-illustration.png"

  # feature at the left of the image
  left_side:
  - title : "Infrastructure as Code"
    icon : "fa-file-code"
    content : "Based on [Terraform modules](https://developer.hashicorp.com/terraform/tutorials/modules/module 'Terraform Modules Overview'), which dramatically simplifies the management."

  - title : "Scalability"
    icon : "fa-chart-line"
    content : "Manage hundreds of AWS accounts while keeping operational overhead minimal."
    
  - title : "Recycling"
    icon : "fa-recycle"
    content : "AWS allows deletion of accounts only with certain restrictions. To avoid this, we provide the possibility to recycle accounts."

  # feature at the right of the image
  right_side:
  - title : "Tailored to your needs"
    icon : "fa-cut"
    content : "The tooling landscape is customer-specific and therefore we support a variety of integrations."

  - title : "GitOps by design"
    icon : "fa-code-branch"
    content : "A new AWS account can be ordered with a simple pull request and all changes can be easily tracked."

  - title : "Self-Service"
    icon : "fa-chalkboard-teacher"
    content : "Implementation into an existing self-service portal can be easily achieved through a simple Git integration."


excerpt_section:
    enable: true
    title: "In a nutshell..."
    list:
      - title: "Account Lifecycle Workflow"
        enable: true
        image: "images/solutions/account-lifecycle-diagram.png"
        content: "The Account Lifecycle is managed in a Git repository via Terraform.
                  Either a user or an automated process updates the account list with Git.
                  A Terraform pipeline will manage all the resources necessary to create and lifecycle an AWS account.<br/>
                  External resources which are required for the AWS accounts can also be managed with this solution."

link_section:
    enable: true
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
        content: "Read more about Account Lifecycle in these blog posts"
        blog_tag: lifecycle

testimonial_section:
    enable: false
    title: "Customer References"
    list:
      - image: "images/logo/logo_nuvibit_dark.png"
        name: "Lorem ipsum dolor"
        content: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt"

---
