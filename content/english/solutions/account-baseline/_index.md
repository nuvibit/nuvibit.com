---
title: "Account Baseline"
description: "Fully Terraform-native and extremely flexible Account Baseline solution to provision a secure baseline configuration to your AWS accounts."
draft: false

banner_section:
    enable: true
    title: "Account Baseline"
    content: "You could use AWS Control Tower to provision a common set of security baseline configurations for your AWS accounts. 
    The headaches usually start when you need to tailor your account baseline based on different types of accounts and requirements.
    This is where a Terraform Account Baseline can truly work its magic.<br/><br/>
    Building a Landing Zone with Account Baseline from scratch is a lot of work. Good thing we took care of that."
    image : "images/solutions/account-baseline-logo.png"
    button:
        enable: true
        label: "Get in touch"
        link: "contact"

feature_section:
  enable : true
  title : "Key features"
  image: "images/solutions/account-baseline-illustration.png"

  # feature at the left of the image
  left_side:
  - title : "Infrastructure as Code"
    icon : "fa-file-code"
    content : "Based on [Terraform modules](https://developer.hashicorp.com/terraform/tutorials/modules/module 'Terraform Modules Overview'), which dramatically simplifies the management."

  - title : "Scalability"
    icon : "fa-chart-line"
    content : "Manage hundreds of AWS accounts across multiple regions while keeping operational overhead minimal."
    
  - title : "Well Architected"
    icon : "fa-drafting-compass"
    content : "Our Account Baseline is based on practical experience, best practices and the [AWS Well-Architected Framework](https://aws.amazon.com/architecture/well-architected 'AWS Well-Architected')."

  # feature at the right of the image
  right_side:
  - title : "Tailored to your needs"
    icon : "fa-cut"
    content : "The Account Baseline is supposed to be as unique as the customer himself and that's why we strongly embrace customization."

  - title : "GitOps by design"
    icon : "fa-code-branch"
    content : "A new Account Baseline version can be tested and reviewed during pull request. The risk of critical failures can be significantly reduced by enforcing code review practices."

  - title : "Self-Service"
    icon : "fa-chalkboard-teacher"
    content : "Implementation into an existing self-service portal can be easily achieved through a simple Git integration."


excerpt_section:
    enable: true
    title: "In a nutshell..."
    list:
      - title: "Account Baseline Workflow"
        enable: true
        image: "images/solutions/account-baseline-diagram.png"
        content: "The Account Baseline is centrally managed in a Git repository via Terraform.
                  Either a user or an automated process starts the rollout of the baseline across multiple accounts.
                  Terraform pipelines will manage all the resources necessary for the account base configuration.<br/>
                  The Account Baseline includes hardening accounts, implementing compliance and security policies, and connecting accounts to the Foundation."

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
        content: "Read more about Multi-Account Architecture and Account Baseline in these blog posts"
        blog_tag: baseline

testimonial_section:
    enable: false
    title: "Customer References"
    list:
      - image: "images/logo/logo_nuvibit_dark.png"
        name: "Lorem ipsum dolor"
        content: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt"

---
