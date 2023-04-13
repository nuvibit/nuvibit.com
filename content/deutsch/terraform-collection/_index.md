---
title: "Terraform Collection"
description: "Eine Sammlung von Infrastructure as Code Terraform-Modulen, die spezifisch für die Bereitstellung und Verwaltung einer AWS Cloud Foundation entwickelt wurden."
draft: false

banner_section:
    enable: true
    title: "Terraform Collection"
    content: "Eine Sammlung unserer [Terraform Module](https://developer.hashicorp.com/terraform/tutorials/modules/module), die spezifisch für die Bereitstellung und Verwaltung einer AWS Cloud Foundation entwickelt wurden. 
              Unsere Module werden von zahlreichen Unternehmen in der Produktion eingesetzt. Einige Module sind Open Source, andere sind nur für unsere Kunden zugänglich und alle Module werden kontinuierlich weiterentwickelt.<br><br>
              Interesse geweckt?"
    image : "images/solutions/ntc-logo.png"
    button:
        enable: true
        label: "Kontakt aufnehmen"
        link: "contact"
---

`Diese Sammlung wird laufend erweitert und durch Kundenfeedback verbessert`
{{<table "table table-striped table-bordered terraform-table">}}
| NAME | BESCHREIBUNG | KATEGORIE |
| ------------- | ------------- | ------------- |
| <mark style="font-weight:900;background-color:#9ec8ff;">Github Workflows</mark><img width=100/> | Wiederverwendbare Workflows für [Github Actions](https://docs.github.com/en/actions/learn-github-actions/understanding-github-actions) zur Umsetzung einer Terraform Pipeline. Unterstützt Terraform Cloud & Enterprise und kann zum Testen von Terraform Modulen mit [Terratest](https://terratest.gruntwork.io/) verwendet werden. | [Open Source](https://github.com/nuvibit/github-terraform-workflows) <img width=70/> |
| <mark style="font-weight:900;background-color:#fbe3fc;">Lambda</mark> | Terraform Modul zur Provisionierung von AWS Lambda Funktionen. Unsere Serverless-Lösungen basieren auf diesem Modul. | [Open Source](https://registry.terraform.io/modules/nuvibit/lambda/aws/latest) |
| <mark style="font-weight:900;background-color:#fbe3fc;">Core Parameters</mark> | Terraform Modul zum Speichern und Lesen einer Terraform HCL map via AWS SSM Parameter Store. Dies ermöglicht das Speichern von zentral verwalteten Parametern, die über mehrere Pipelines und AWS-Accounts für die Foundation genutzt werden können. | [Open Source](https://registry.terraform.io/modules/nuvibit/core-parameters/aws/latest) |
| <mark style="font-weight:900;background-color:#fbe3fc;">NTC Parameters</mark> | Terraform Modul zum Speichern und Abrufen von Terraform- oder JSON-Parametern ohne die Einschränkungen von AWS SSM Parameter Store. Dieses Modul ist speziell für die Integration mit unseren privaten Modulen konzipiert. | <i id="copy-subnet1" class="fa-solid fa-lock"></i> Privat |
| <mark style="font-weight:900;background-color:#fbe3fc;">Organization</mark> | Terraform-Modul zur Bereitstellung und Verwaltung von AWS Organizations. Unterstützt Account Erstellung, Organisationseinheiten, Delegation von Administrationsaufgaben und Service Control Policies. | <i id="copy-subnet1" class="fa-solid fa-lock"></i> Privat |
| <mark style="font-weight:900;background-color:#fbe3fc;">Identity Center</mark> | Terraform Modul zur Bereitstellung und Verwaltung von Single Sign-On in AWS IAM Identity Center (Nachfolger von AWS SSO). | <i id="copy-subnet1" class="fa-solid fa-lock"></i> Privat |
| <mark style="font-weight:900;background-color:#fbe3fc;">VPC</mark> | Terraform Modul zur Bereitstellung und Verwaltung von AWS VPC-Netzwerken. Dieses Modul ist auf starke Flexibilität ausgelegt und ermöglicht umfangreiche Skalierung. | <i id="copy-subnet1" class="fa-solid fa-lock"></i> Privat |
| <mark style="font-weight:900;background-color:#fbe3fc;">IPAM</mark> | Terraform Modul zur Bereitstellung und Verwaltung von Amazon VPC IP Address Manager (IPAM). In Kombination mit dem VPC-Modul kann ein hochautomatisiertes AWS-Netzwerk realisiert werden. | <i id="copy-subnet1" class="fa-solid fa-lock"></i> Privat |
| <mark style="font-weight:900;background-color:#fbe3fc;">Route 53</mark> | Terraform Modul zur Bereitstellung und Verwaltung des Amazon Route 53 DNS Service. | <i id="copy-subnet1" class="fa-solid fa-lock"></i> Privat |
| <mark style="font-weight:900;background-color:#ffbaba;">Account Lifecycle</mark> | Flexible Lösung zur Verwaltung von AWS-Accounts mit Terraform. Einfach und effizient mit Support für Self-Service-Integration auf Basis von Git. | <i id="copy-subnet1" class="fa-solid fa-lock"></i> Privat |
| <mark style="font-weight:900;background-color:#ffbaba;">Account Baseline</mark> | Flexible Lösung zur Verwaltung der Basiskonfiguration von AWS-Accounts mit Terraform. Skalierbar und effizient mit Support für Hunderte von Accounts über mehrere Regionen. | <i id="copy-subnet1" class="fa-solid fa-lock"></i> Privat |
{{</table>}}
<mark style="font-weight:900;background-color:#9ec8ff;">Hilfsmittel</mark>
<mark style="font-weight:900;background-color:#fbe3fc;">Terraform Modul</mark>
<mark style="font-weight:900;background-color:#ffbaba;">Terraform native Lösung</mark>