---
title: "SEMPER"
description: "SEMPER is an AWS Native Security Event and Finding Management solution that allows you to manage your security sensors at a very granular level in a consistent and auditable way and to automatically filter accepted security findings."
draft: false

banner_section:
    enable: true
    title: "SEMPER"
    content: "You manage multiple AWS accounts and have your workload distributed in multiple AWS regions?<br>
              Then you are familiar with the challenge of keeping track of the security compliance of your AWS resources and managing security events in real time.<br><br>
              SEMPER enables you to manage your security sensors at a very granular level in a consistent and auditable way and automatically filter accepted security findings.<br>
              All conveniently managed through a central **[Policy as Code](/faq/#pac 'What is Security / Policy as Code?')** repository."
    image: "images/solutions/semper-logo.png"
    button:
        enable: true
        label: "Get in touch"
        link: "contact"

feature_section:
  enable : true
  title : "Key features"
  image : "images/solutions/semper-illustration.png"

  # feature at the left of the image
  left_side:
  - title : "Serverless and AWS Native"
    icon : "fa-cloud"
    content : "Our serverless solution seamlessly integrates with AWS Config, AWS CloudTrail, AWS Security Hub and Amazon GuardDuty."

  - title : "Provision security sensors"
    icon : "fa-share-alt"
    content : "Provision custom AWS Config- and AWS EventBridge Rules precisely in all your required accounts."
    
  - title : "Tailor AWS Security Hub Standards"
    icon : "fa-cogs"
    content : "Manage the security standards of AWS Security Hub on member-account level."

  # feature at the right of the image
  right_side:
  - title : "Filter Security Findings"
    icon : "fa-filter"
    content : "Define policies for filtering out accepted security findings and automated reflection to AWS Security Hub and Amazon GuardDuty."

  - title : "More context information"
    icon : "fa-pencil-alt"
    content : "Enrich relevant security findings with context information like account tags for better post processing."

  - title : "Policy as Code"
    icon : "fa-code"
    content : "Manage all SEMPER features with a single Policy as Code repository."


excerpt_section:
    enable: true
    title: "In a nutshell..."
    list:
      - title: "Policy based Security Sensor Distribution"
        enable: true
        image: "images/solutions/semper-configure.png"
        content: "SEMPER deploys and configures **sensors** in all your AWS Accounts based on predefined policy sets that you can customize and extend. The sensors are built on the cloud native services AWS Security Hub, AWS CloudTrail, AWS Config and Amazon GuardDuty. We continuously extend and optimize the policy sets to meet **security best practices and compliance standards**."

      - title: "Policy based Security Finding Processing"
        enable: true
        image: "images/solutions/semper-processing.png"
        content: "SEMPER **collects** all the sensor events centrally and **enriches** them with important metadata like source account tags, context from AWS Organizations and policy based infos. Furthermore, SEMPER is capable of **suppressing and filtering** false positives based on your predefined rules.
        The enriched findings are sent to an SNS Topic and persisted in a CloudWatch Logs stream. From there you can either **pass** them for further analysis to a third party tool of your choice (Splunk, Logstash, AWS QuickSight, etc) or you can go a step further and implement [auto-remediation](/faq#autoremediation 'What is auto-remediation?') for certain findings."

link_section:
    enable: true
    list:
      - title: "Documentation"
        enable: true
        content: "You can find more details in our documentation"
        links:
          - url: "https://github.com/nuvibit/semper-policy-repo-sample"
            link_name: "Sample SEMPER policy repository with documentation"
      
      - title: "Media"
        enable: true
        content: "Additional media"
        links:
          - url: "media/SEMPER.pdf"
            link_name: "SEMPER product presentation"
      
      - title: "Blog"
        enable: true
        content: "Read more about SEMPER in these blog posts"
        blog_tag: semper

testimonial_section:
    enable: true
    title: "Testimonials"
    list:
      - image: "images/customers/rwe.svg"
        name: "RWE AG"
        link: "customers/rwe"
        content: "SEMPER is granting us complete visibility and control over the flood of security events in our AWS organization."
