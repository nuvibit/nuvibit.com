---
title: "Frequenty Asked Questions"
description: "Frequenty asked questions regarding cloud topics and our services"
draft: false

faq:
  image: "images/illustrations/questions-and-answers.png"
  items:
    - question: "what is a cloud foundation?"
      answer: "Before deploying a workload on the public cloud there are many moving parts which have to be coordinated.
              There are technical parts such as connectivity or security and organizational parts such as finance or operations.<br>
              A secure, scalable cloud foundation will significantly accelerate your cloud adoption journey and is the key to success."
      anchor: foundation
      enable: true

    - question: "which cloud providers do we support?"
      answer: "We are mainly specialized in secure enterprise deployments on AWS. 
              Some topics are not specific to a cloud provider so feel free to [get in touch](/contact 'contact form') anyway!<br>
              For connectivity topics we offer the same services for AWS and Azure."
      anchor: providers
      enable: true
      
    - question: "what is Infrastructure as Code?"
      answer: "Infrastructure as Code (IaC) is the management of infrastructure in a descriptive model, using software development methods such as versioning of source code.<br>
              [Terraform](https://www.terraform.io/intro/index.html 'Introduction to Terraform') is a powerful open-source Infrastructure as Code software and an outstanding tool for cloud deployments.<br>
              Visit the [Terraform Registry](https://registry.terraform.io/namespaces/nuvibit) and take a look at some of our free to use public modules."
      anchor: iac
      enable: true
      
    - question: "what is Security / Policy as Code?"
      answer: "Similar to Infrastructure as Code the industry shifts to Security / Policy as Code.
              According to [McKinsey](https://www.mckinsey.com/business-functions/mckinsey-digital/our-insights/security-as-code-the-best-and-maybe-only-path-to-securing-cloud-applications-and-systems) 
              and [Gartner](https://www.gartner.com/en/documents/3992070/using-cloud-native-policy-as-code-to-secure-deployments-) the success of security at scale depends on automation and codification.<br>
              We fully agree and built a solution for cloud security event management based on Policy as Code.<br>
              [Get in touch](/contact 'contact form') to learn more about **SEMPER**."
      anchor: pac
      enable: true

    - question: "what are CIS Controls?"
      answer: "The [Center for Internet Security](https://www.cisecurity.org/) publishes best practices guidelines for IT security. 
              Currently published in version 8 it includes 18 control domains from Data Protection, Audit Logging, Service Provider Configuration to Penetration testing and more<br>
              Take a closer look and visit the [CIS Control Navigator](https://www.cisecurity.org/controls/cis-controls-navigator/)."
      anchor: cis
      enable: true

    - question: "what is auto-remediation?"
      answer: "Auto-remediation describes the technique to automatically react on a policy violation and actively engage to enforce to a policy. If for example an AWS Security Group with insecure rules is deployed, the Security Group could be automatically destroyed by auto-remediation."
      anchor: autoremediation
      enable: true

    - question: "what is FinOps?"
      answer: "FinOps is shorthand for \"Cloud Financial Operations\" and describes finance best practices for the cloud.
              Traditional processes are at their limits with pay-as-you-go models, where the costs scale with the actual workload.<br>
              It is all about optimizing cloud spend to get the most value for the business."
      anchor: finops
      enable: true

    - question: "what is GitOps?"
      answer: "GitOps describes the concept of using [Git](https://git-scm.com) as the central version control system to manage the lifecycle of a solution.<br>
              Many tasks such as deployments, automated tests and approval workflows are all triggered and managed by Git events while keeping everything versioned."
      anchor: gitops
      enable: true

    - question: "what is CI/CD?"
      answer: "CI/CD is the combined practices of continuous integration (CI) and continuous delivery or continuous deployment (CD).<br>
              CI is a modern software development practice in which incremental code changes are made frequently and reliably.
              Automated build-and-test steps triggered by CI ensure that code changes being pushed to production are reliable.<br>
              The code is then delivered quickly and seamlessly as a part of the CD process."
      anchor: cicd
      enable: true
---
