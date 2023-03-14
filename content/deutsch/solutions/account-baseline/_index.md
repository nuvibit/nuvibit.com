---
title: "Account Baseline"
description: "Komplett Terraform-basierte und extrem flexible Account Baseline Lösung zur Bereitstellung einer sicheren Basiskonfiguration für Ihre AWS-Accounts."
draft: false

banner_section:
    enable: true
    title: "Account Baseline"
    content: "Mit AWS Control Tower lassen sich allgemeine Sicherheitsgrundkonfigurationen für Ihre AWS-Accounts bereitstellen. 
    Das Kopfzerbrechen beginnt in der Regel, sobald man die Grundkonfiguration je nach Funktion und Anforderungen der Accounts anpassen muss.
    Genau an dieser Stelle kann eine Terraform-basierte Account Baseline ihre Stärken ausspielen.<br/><br/>
    Eine Landing Zone mit Account Baseline von Grund auf zu entwickeln, ist eine Menge Arbeit. Gut, dass wir uns darum gekümmert haben."
    image : "images/solutions/account-baseline-logo.png"
    button:
        enable: true
        label: "Kontakt aufnehmen"
        link: "contact"

feature_section:
  enable : true
  title : "Key features"
  image: "images/solutions/account-baseline-illustration.png"

  # feature at the left of the image
  left_side:
  - title : "Infrastructure as Code"
    icon : "fa-file-code"
    content : "Basierend auf [Terraform Modulen](https://developer.hashicorp.com/terraform/tutorials/modules/module 'Terraform Modules Overview'), wodurch sich die Handhabung drastisch vereinfacht."

  - title : "Skalierbarkeit"
    icon : "fa-chart-line"
    content : "Verwaltung von Hunderten von AWS-Accounts über mehreren Regionen mit minimalem Betriebsaufwand."
    
  - title : "Well Architected"
    icon : "fa-drafting-compass"
    content : "Unsere Account Baseline basiert auf praktischer Erfahrung, Best Practices und dem [AWS Well-Architected Framework](https://aws.amazon.com/architecture/well-architected 'AWS Well-Architected')."

  # feature at the right of the image
  right_side:
  - title : "Massgeschneidert auf den Bedarf"
    icon : "fa-cut"
    content : "Die Account Baseline sollte so individuell sein wie der Kunde selbst und deshalb legen wir grossen Wert auf Personalisierung."

  - title : "GitOps by design"
    icon : "fa-code-branch"
    content : "Eine neue Version der Account Baseline kann im Zuge eines Pull Requests getestet und überprüft werden. Das Risiko kritischer Ausfälle kann durch die Einhaltung von Code Review Prinzipien erheblich reduziert werden."

  - title : "Self-Service"
    icon : "fa-chalkboard-teacher"
    content : "Die Implementierung in ein bestehendes Self-Service Portal kann durch eine einfache Git-Integration erreicht werden."


excerpt_section:
    enable: true
    title: "Kurz und knapp..."
    list:
      - title: "Account Baseline Workflow"
        enable: true
        image: "images/solutions/account-baseline-diagram.png"
        content: "Die Account Baseline wird zentral in einem Git-Repository mittels Terraform verwaltet.
                  Ein Benutzer oder ein automatisierter Prozess initiiert den Rollout der Baseline über mehrere Accounts.
                  Terraform-Pipelines verwalten alle Ressourcen, die für die Account-Basiskonfiguration erforderlich sind.<br/>
                  Die Account Baseline umfasst die Härtung von Accounts, die Implementierung von Compliance- und Sicherheitsrichtlinien und die Anbindung von Accounts an die Foundation."

link_section:
    enable: true
    list:
      - title: "Dokumentation"
        enable: false
        content: "You can find more details in our documentation"
        links:
          - url: "https://url1"
            link_name: "documentation 1"
          - url: "https://url2"
            link_name: "documentation 1"
      
      - title: "Blog"
        enable: true
        content: "Lesen Sie mehr über Multi-Account Architektur and Account Baseline in den folgenden Blogbeiträgen"
        blog_tag: baseline

testimonial_section:
    enable: false
    title: "Customer References"
    list:
      - image: "images/logo/logo_nuvibit_dark.png"
        name: "Lorem ipsum dolor"
        content: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt"

---
