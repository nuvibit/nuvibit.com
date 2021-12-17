---
title: "SEMPER"
description: "AWS Security Event and Finding Management"
draft: false

banner_section:
    enable: true
    title: "SEMPER"
    content: "You manage multiple AWS accounts and have your workload distributed in multiple AWS regions?  <br>
              Then you know the challenge keeping track of the security compliance of your AWS resources and managing security events in realtime.<br><br>
              SEMPER enables you in a consistent and auditable way to manage your security sensors on a very granular level and to filter accepted security findings automatically. <br>
              All with a central repository of policies. We take **[Security as Code](/faq/#pac 'What is Security / Policy as Code?')** serious. "
    image: "images/products/semper-logo.png"
    button:
        enable: true
        label: "Get in touch"
        link: "contact"

feature_section:
  enable : true
  title : "Key features"
  image : "images/products/semper-illustration.png"

  # feature at the left of the image
  left_side:
  - title : "Manage all with Policy as Code"
    icon : "fa-code"
    content : "Manage all SEMPER features with a single Policy as Code repository."

  - title : "Provision AWS Config- and AWS EventBridge Rules"
    icon : "fa-share-alt"
    content : "Provision custom AWS Config- and AWS EventBridge Rules precisely in all your required accounts."
    
  - title : "Tailor AWS Security Hub Standards"
    icon : "fa-cogs"
    content : "Manage the security standards of AWS Security Hub on member-account level."

  # feature at the right of the image
  right_side:
  - title : "Filter accepted Security Findings"
    icon : "fa-filter"
    content : "Define policies for filtering out accepted security findings and automated reflection to AWS Security Hub and Amazon GuardDuty."

  - title : "Enrich relevant Security Findings"
    icon : "fa-pencil-alt"
    content : "Enrich relevant security findings with context information like account-tags for better post processing."

  - title : "Serverless and AWS Native"
    icon : "fa-cloud"
    content : "Our serverless solution seamlessly integrates with AWS Config, AWS CloudTrail, AWS Security Hub and Amazon GuardDuty."

excerpt_section:
    enable: true
    title: "In a nutshell..."
    list:
      - title: "Policy based Securtiy Sensor Distribution"
        enable: true
        image: "images/products/semper-configure.png"
        content: "SEMPER deploys and configures **sensors** in all your AWS Accounts based on predefined policy sets that you can customize and extend. The sensors are built on the cloud native services AWS Security Hub, AWS CloudTrail, AWS Config and Amazon GuardDuty. We continuously extend and optimize the policy sets to meet **security best practices and compliance standards**."

      - title: "Policy based Securtiy Finding Processing"
        enable: true
        image: "images/products/semper-processing.png"
        content: "SEMPER **collects** all the sensor events centrally and **enriches** them with important metadata like source account tags, context from AWS Organizations and policy based infos. Furthermore, SEMPER is capable of **suppressing and filtering** false positives based on your predefined rules.
        The enriched findings are sent to an SNS Topic and persisted in a CloudWatch Logs stream. From there you can either **pass** them for further analysis to a third party tool of your choice (Splunk, Logstash, AWS QuickSight, etc) or you can go a step further and implement [auto-remediation](/faq#autoremediation 'What is auto-remediation?') for certain findings."

link_section:
    enable: true
    list:
    - title: "Documentation"
      enable: false
      content: "Visit our full documentation with examples and the full architecture on"
      link: "https://github.com/nuvibit/SEMPER"
      link_name: "github.com"
    
    - title: "Blog"
      enable: true
      content: "Read more about SEMPER in these blog posts"
      blogs:
        - link: "blog/cis-aws-3x"
          link_name: "CIS AWS Foundations Benchmark is cool, but..."

testimonial_section:
    enable: false
    title: "Customer References"
    list:
      - image: "images/logo/logo_nuvibit_dark.png"
        name: "Lorem ipsum dolor"
        content: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt"

---
