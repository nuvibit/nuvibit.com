---
title: "SEMPER"
description: "AWS-Sicherheitsprüfungen und -warnungen automatisiert durch Richtlinien verwalten."
draft: false

banner_section:
    enable: true
    title: "SEMPER"
    content: "Sie verwalten mehrere AWS-Konten und haben Ihre Arbeitslast auf mehrere AWS-Regionen verteilt? <br>
              Dann kennen Sie die Herausforderung, den Überblick über die Sicherheitskonformität Ihrer AWS-Ressourcen zu behalten und Sicherheitswarnungen in Echtzeit zu verwalten.<br><br>
              SEMPER ermöglicht es Ihnen auf konsistente, überprüfbare und automatische Weise, Ihre Sicherheitssensoren auf einer sehr granularen Ebene zu verteilen und akzeptierte Sicherheitswarnungen zu filtern. <br>
              Und das alles mit einem zentralen Repository von Richtlinien. Wir nehmen **[Security as Code](/faq/#pac 'What is Security / Policy as Code?')** ernst."
    image: "images/products/semper-logo.png"
    button:
        enable: true
        label: "Kontakt aufnehmen"
        link: "contact"

feature_section:
  enable : true
  title : "Funktionalitäten"
  image : "images/products/semper-illustration.png"

  # feature at the left of the image
  left_side:
  - title : "Serverless und AWS-Nativ"
    icon : "fa-cloud"
    content : "Unsere serverless Lösung lässt sich nahtlos mit AWS Config, AWS CloudTrail, AWS Security Hub und Amazon GuardDuty integrieren."

  - title : "Bereitstellung von AWS Config- und AWS EventBridge-Regeln"
    icon : "fa-share-alt"
    content : "Stellen Sie benutzerdefinierte AWS-Config- und AWS-EventBridge-Regeln präzise in all Ihren erforderlichen AWS-Konten bereit."
    
  - title : "Anpassung von AWS Security Hub Standards"
    icon : "fa-cogs"
    content : "Verwalten Sie die Sicherheitsstandards von AWS Security Hub von zentraler Stelle auf Ebene Member-Account."

  # feature at the right of the image
  right_side:
  - title : "Filterung von akzeptierten Sicherheitswarnungen"
    icon : "fa-filter"
    content : "Definieren Sie Richtlinien für das Herausfiltern von akzeptierten Sicherheitswarnungen und die automatische Rückspiegelung an AWS Security Hub und Amazon GuardDuty."

  - title : "Anreicherung von relevanten Sicherheitswarnungen"
    icon : "fa-pencil-alt"
    content : "Anreicherung relevanter Sicherheitswarnungen mit Kontextinformationen wie Account-Tags zur besseren Weiterverarbeitung."

  - title : "Verwalten Sie alles mit Policy as Code"
    icon : "fa-code"
    content : "Verwalten Sie alle SEMPER-Funktionen mit Richtlinien in einem einzigen Policy as Code-Repository."

excerpt_section:
    enable: true
    title: "Kurz und bündig..."
    list:
      - title: "Policy-basierte Verteilung von Sicherheitssensoren"
        enable: true
        image: "images/products/semper-configure.png"
        content: "SEMPER stellt **Sensoren** in all Ihren AWS-Konten bereit und konfiguriert sie auf der Grundlage vordefinierter Richtlinien, die Sie anpassen und erweitern können. Die Sensoren basieren auf den Services AWS Security Hub, AWS CloudTrail, AWS Config und Amazon GuardDuty. Wir erweitern und optimieren die Richtlinienbeispiele kontinuierlich, um **bewährte Sicherheitsverfahren und Compliance-Standards** zu erfüllen."

      - title: "Policy-basierte Verarbeitung von Sicherheitswarnungen"
        enable: true
        image: "images/products/semper-processing.png"
        content: "SEMPER sammelt alle Sensorereignisse und reichert sie mit wichtigen Metadaten wie Account-Tags, Kontext aus der AWS-Organisation und weiteren richtlinienbasierten Informationen an. Darüber hinaus ist SEMPER in der Lage, falsch-positive Sicherheitswarnungen auf der Grundlage Ihrer vordefinierten Policies zu unterdrücken und herauszufiltern**.
        Die angereicherten Ergebnisse werden an ein SNS-Thema gesendet und in einem CloudWatch Logs-Stream aufbewahrt. Von dort aus können Sie diese entweder zur weiteren Analyse an ein Drittanbieter-Tool Ihrer Wahl (Splunk, Logstash, AWS QuickSight usw.) **weiterleiten** oder Sie können einen Schritt weiter gehen und eine [automatische Korrektur] (/faq#autoremediation 'Was ist eine automatische Korrektur?') für bestimmte Ergebnisse implementieren."

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
      content: "Lesen Sie mehr über SEMPER in diesen Blogbeiträgen"
      blog_tag: semper

testimonial_section:
    enable: false
    title: "Customer References"
    list:
      - image: "images/logo/logo_nuvibit_dark.png"
        name: "Lorem ipsum dolor"
        content: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt"

---
