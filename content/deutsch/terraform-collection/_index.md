---
title: "Terraform Sammlung"
description: "Eine Sammlung von Infrastructure as Code Terraform-Modulen, die spezifisch für die Bereitstellung und Verwaltung einer AWS Cloud Foundation entwickelt wurden."
draft: false

banner_section:
    enable: true
    title: "Terraform Sammlung"
    content: "Eine Sammlung unserer [Terraform Module](https://developer.hashicorp.com/terraform/tutorials/modules/module), die spezifisch für die Bereitstellung und Verwaltung einer AWS Cloud Foundation entwickelt wurden. 
              Unsere Module werden von zahlreichen Unternehmen in der Produktion eingesetzt. Einige Module sind Open Source, andere sind nur für unsere Kunden zugänglich und alle Module werden kontinuierlich weiterentwickelt.<br><br>
              Interesse geweckt?"
    image : "images/illustrations/cloud-infrastructure-as-code.png"
    button:
        enable: true
        label: "Kontakt aufnehmen"
        link: "contact"
---

{{<table "table table-striped table-bordered terraform-table">}}
| NAME | BESCHREIBUNG | LINK |
| ------------- | ------------- | ------------- |
| <mark style="font-weight:900;background-color:#9ec8ff;">Github Workflows</mark><img width=100/> | Wiederverwendbare Workflows für [Github Actions](https://docs.github.com/en/actions/learn-github-actions/understanding-github-actions) zur Umsetzung einer Terraform Pipeline. Unterstützt Terraform Cloud & Enterprise und kann zum Testen von Terraform Modulen mit [Terratest](https://terratest.gruntwork.io/) verwendet werden. | [Github](https://github.com/nuvibit/github-terraform-workflows) <img width=70/> |
| <mark style="font-weight:900;background-color:#fbe3fc;">Lambda</mark> | Terraform Modul zur Provisionierung von AWS Lambda Funktionen. Unsere Serverless-Lösungen basieren auf diesem Modul. | [Github](https://github.com/nuvibit/terraform-aws-lambda)<hr>[Registry](https://registry.terraform.io/modules/nuvibit/lambda/aws/latest) |
| <mark style="font-weight:900;background-color:#fbe3fc;">Core Parameters</mark> | Terraform Modul zum Speichern und Lesen einer Terraform HCL map via AWS SSM Parameter Store. Dies ermöglicht das Speichern von zentral verwalteten Parametern, die über mehrere Pipelines und AWS-Accounts für die Foundation genutzt werden können. | [Github](https://github.com/nuvibit/terraform-aws-core-parameters)<hr>[Registry](https://registry.terraform.io/modules/nuvibit/core-parameters/aws/latest) |
| <mark style="font-weight:900;background-color:#fbe3fc;">Single Sign-On</mark> | Terraform Modul zur Bereitstellung und Verwaltung von Single Sign-On in AWS IAM Identity Center (Nachfolger von AWS SSO). Nahtlose Integration mit Account Lifecycle. | <i id="copy-subnet1" class="fa-solid fa-lock"></i> Privat |
| <mark style="font-weight:900;background-color:#fbe3fc;">VPC</mark> | Terraform Modul zur Bereitstellung und Verwaltung von AWS VPC-Netzwerken. Nahtlose Integration mit Account Lifecycle. | <i id="copy-subnet1" class="fa-solid fa-lock"></i> Privat |
| <mark style="font-weight:900;background-color:#fbe3fc;">IPAM</mark> | Terraform Modul zur Bereitstellung und Verwaltung von Amazon VPC IP Address Manager (IPAM). Nahtlose Integration mit Account Lifecycle. | <i id="copy-subnet1" class="fa-solid fa-lock"></i> Privat |
| <mark style="font-weight:900;background-color:#fbe3fc;">Route 53</mark> | Terraform Modul zur Bereitstellung und Verwaltung des Amazon Route 53 DNS Service. | <i id="copy-subnet1" class="fa-solid fa-lock"></i> Privat |
| <mark style="font-weight:900;background-color:#fbe3fc;">Image Factory</mark> | Terraform Modul zum kontinuierlichen Erzeugen, Testen und Validieren von Amazon Machine Images (AMI). | <i id="copy-subnet1" class="fa-solid fa-lock"></i> Privat |
| <mark style="font-weight:900;background-color:#fbe3fc;">Core Security</mark> | Terraform Modul zur Bereitstellung und Verwaltung der zentralen Security in AWS. Unterstützt AWS Security Hub, Amazon GuardDuty, AWS Config und mehr. | <i id="copy-subnet1" class="fa-solid fa-lock"></i> Privat |
| <mark style="font-weight:900;background-color:#fbe3fc;">Log Archive</mark> | Terraform Modul zur Bereitstellung und Verwaltung eines zentralisierten S3 Log Archivs in AWS. | <i id="copy-subnet1" class="fa-solid fa-lock"></i> Privat |
| <mark style="font-weight:900;background-color:#ffbaba;">SEMPER</mark> | Serverless-Lösung zum Erkennen und Verwalten von AWS Security Finding. Einfach und effizient durch Policy as Code und Terraform. | <i id="copy-subnet1" class="fa-solid fa-lock"></i> Privat<hr>[Wiki](https://github.com/nuvibit/semper-policy-repo-sample/wiki) |
| <mark style="font-weight:900;background-color:#ffbaba;">Account Lifecycle</mark> | Flexible Lösung zur Erstellung und Verwaltung von AWS-Accounts mit Terraform. Einfach und effizient mit Support für Self-Service-Integration auf Basis von Git. | <i id="copy-subnet1" class="fa-solid fa-lock"></i> Privat |
| <mark style="font-weight:900;background-color:#ffbaba;">Account Baseline</mark> | Flexible Lösung zur Erstellung und Verwaltung der Basiskonfiguration von AWS-Accounts mit Terraform. Skalierbar und effizient mit Support für Hunderte von Accounts über mehrere Regionen. | <i id="copy-subnet1" class="fa-solid fa-lock"></i> Privat |
{{</table>}}