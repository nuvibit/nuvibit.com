---
title: "Nuvibit SEMPER | Komplette Kontrolle über Ihre AWS-Sicherheit"
description: "SEMPER revolutioniert die präzise Verwaltung von Sicherheitssensoren, gewährleistet Konsistenz und automatisiert die Verarbeitung von Sicherheitsbefunden."
draft: false

banner_section:
    enable: true
    title: "SEMPER"
    content: "Mit der Verteilung von Workloads über verschiedene AWS-Accounts und -Regionen kann die Aufrechterhaltung der Sicherheits-Compliance und die Überwachung von Sicherheitsereignissen in Echtzeit entmutigend sein.  
              SEMPER revolutioniert Ihren Ansatz, indem es eine präzise Verwaltung von Sicherheitssensoren ermöglicht, Konsistenz gewährleistet und die Verarbeitung von Sicherheitsbefunden automatisiert.
              Ein zentrales [Policy as Code](/faq/#pac 'What is Security / Policy as Code?') Repository vereinfacht und optimiert den gesamten Prozess und gibt Ihnen die vollständige Kontrolle über Ihre AWS-Sicherheitslandschaft.<br><br>
              Erleben Sie den Gedankenfrieden, den das nahtlose Sicherheitsmanagement mit SEMPER bietet."
    image: "images/solutions/semper-logo.png"
    button:
        enable: true
        label: "Demo buchen"
        link: "contact"

feature_section:
  enable : true
  title : "Key Features"
  image : "images/solutions/semper-illustration.png"

  # feature at the left of the image
  left_side:
  - title : "Serverless und AWS-Nativ"
    icon : "fa-cloud"
    content : "Unsere serverless Lösung lässt sich nahtlos mit AWS Config, AWS CloudTrail, AWS Security Hub und Amazon GuardDuty integrieren."

  - title : "Bereitstellung von Sicherheitssensoren"
    icon : "fa-share-alt"
    content : "Stellen Sie benutzerdefinierte AWS-Config- und AWS-EventBridge-Regeln präzise in all Ihren erforderlichen AWS Accounts bereit."
    
  - title : "Massgeschneiderte AWS Security Hub Standards"
    icon : "fa-cogs"
    content : "Verwalten Sie die Sicherheitsstandards von AWS Security Hub auf Ebene Member-Account."

  # feature at the right of the image
  right_side:
  - title : "Filtern von Sicherheitswarnungen"
    icon : "fa-filter"
    content : "Definieren Sie Richtlinien für das Herausfiltern von akzeptierten Sicherheitswarnungen und die automatische Weiterleitung an AWS Security Hub und Amazon GuardDuty."

  - title : "Mehr Kontextinformationen"
    icon : "fa-pencil-alt"
    content : "Anreicherung relevanter Sicherheitswarnungen mit Kontextinformationen wie Account Tags zur besseren Weiterverarbeitung."

  - title : "Policy as Code"
    icon : "fa-code"
    content : "Verwalten Sie alle SEMPER Features mit Richtlinien in einem zentralen Policy as Code Repository."

excerpt_section:
    enable: true
    title: "Kurz und bündig..."
    list:
      - title: "Policy-basierte Verteilung von Sicherheitssensoren"
        enable: true
        image: "images/solutions/semper-configure.png"
        content: "SEMPER stellt **Sensoren** in all Ihren AWS Accounts bereit und konfiguriert sie auf der Grundlage vordefinierter Richtlinien, die Sie anpassen und erweitern können. Die Sensoren basieren auf den Services AWS Security Hub, AWS CloudTrail, AWS Config und Amazon GuardDuty. Wir erweitern und optimieren die Richtlinienbeispiele kontinuierlich, um **bewährte Sicherheitsverfahren und Compliance-Standards** zu erfüllen."

      - title: "Policy-basierte Verarbeitung von Sicherheitswarnungen"
        enable: true
        image: "images/solutions/semper-processing.png"
        content: "SEMPER sammelt alle Sensorereignisse und reichert sie mit wichtigen Metadaten wie Account Tags, Kontext aus der AWS Organisation und weiteren richtlinienbasierten Informationen an. Darüber hinaus ist SEMPER in der Lage, falsch-positive Sicherheitswarnungen auf der Grundlage Ihrer vordefinierten Policies **zu unterdrücken und herauszufiltern**.
        Die angereicherten Ergebnisse werden an ein SNS-Thema gesendet und in einem CloudWatch Logs-Stream aufbewahrt. Von dort aus können Sie diese entweder zur weiteren Analyse an ein Drittanbieter-Tool Ihrer Wahl (Splunk, Logstash, AWS QuickSight usw.) **weiterleiten** oder Sie können einen Schritt weiter gehen und eine [automatische Korrektur](/faq#autoremediation 'Was ist eine automatische Korrektur?') für bestimmte Ergebnisse implementieren."

link_section:
    enable: true
    list:
      - title: "Dokumentation"
        enable: true
        content: "Genauere Details finden Sie in unserer Dokumentation"
        links:
          - url: "https://github.com/nuvibit/semper-policy-repo-sample"
            link_name: "Beispiel eines SEMPER Policy Repositories mit Dokumentation"
      
      - title: "Medien"
        enable: true
        content: "Zusätzliche Medien"
        links:
          - url: "media/SEMPER.pdf"
            link_name: "SEMPER Produktpräsentation"
      
      - title: "Blog"
        enable: true
        content: "Lesen Sie mehr über SEMPER in diesen Blogbeiträgen"
        blog_tag: semper

testimonial_section:
    enable: false
    title: "Referenzen"
    list:
      - image: "images/customers/rwe.svg"
        name: "RWE AG"
        link: "customers/rwe"
        content: "\"Dank der Policy-as-Code Lösung SEMPER haben wir die Compliance von über 100 AWS Accounts jederzeit unter Kontrolle und erleichtern so die Arbeit des Security Operations Centers erheblich.\" Dr. Thomas Gigerl - Head of IT Security"
---
