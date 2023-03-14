---
title: "Account Lifecycle"
description: "Komplett Terraform-basierte und extrem flexible Account Lifecycle Lösung zur Bereitstellung und Verwaltung Ihrer AWS-Accounts."
draft: false

banner_section:
    enable: true
    title: "Account Lifecycle"
    content: "Sobald Ihre AWS Umgebung wächst, entsteht meist der Wunsch und die Anforderung, sichere und konforme AWS Accounts auf automatisierte Weise bereitzustellen. 
    Es ist wichtig, dass sich der Account Lifecycle in Ihre bestehende Tooling-Landschaft einfügt, um die Lernkurve und den Betriebsaufwand für Ihre Teams zu reduzieren. 
    Aus diesem Grund haben wir diese Lösung so konzipiert, dass sie vollständig Terraform-basiert und extrem flexibel ist.<br/><br/>
    Eine Landing Zone mit Account Lifecycle von Grund auf zu entwickeln, ist eine Menge Arbeit. Gut, dass wir uns darum gekümmert haben."
    image : "images/solutions/account-lifecycle-logo.png"
    button:
        enable: true
        label: "Kontakt aufnehmen"
        link: "contact"

feature_section:
  enable : true
  title : "Key features"
  image: "images/solutions/account-lifecycle-illustration.png"

  # feature at the left of the image
  left_side:
  - title : "Infrastructure as Code"
    icon : "fa-file-code"
    content : "Basierend auf [Terraform Modulen](https://developer.hashicorp.com/terraform/tutorials/modules/module 'Terraform Modules Overview'), wodurch sich die Handhabung drastisch vereinfacht."

  - title : "Skalierbarkeit"
    icon : "fa-chart-line"
    content : "Verwaltung von Hunderten von AWS-Accounts über mehreren Regionen mit minimalem Betriebsaufwand."
    
  - title : "Recycling"
    icon : "fa-recycle"
    content : "AWS erlaubt die Löschung von Accounts nur mit bestimmten Einschränkungen. Um dies zu vermeiden, bieten wir die Möglichkeit, Accounts zu recyceln."

  # feature at the right of the image
  right_side:
  - title : "Massgeschneidert auf den Bedarf"
    icon : "fa-cut"
    content : "Die Tooling-Landschaft ist kundenspezifisch und wir unterstützen deshalb eine Vielzahl von Integratione"

  - title : "GitOps by design"
    icon : "fa-code-branch"
    content : "Ein neuer AWS-Account kann mit einem einfachen Pull-Request bestellt werden und alle Änderungen können leicht nachvollzogen werden."

  - title : "Self-Service"
    icon : "fa-chalkboard-teacher"
    content : "Die Implementierung in ein bestehendes Self-Service Portal kann durch eine einfache Git-Integration erreicht werden."


excerpt_section:
    enable: true
    title: "Kurz und knapp..."
    list:
      - title: "Account Lifecycle Workflow"
        enable: true
        image: "images/solutions/account-lifecycle-diagram.png"
        content: "Der Account Lifecycle wird zentral in einem Git-Repository mittels Terraform verwaltet.
                  Ein Benutzer oder ein automatisierter Prozess aktualisiert die Account-Liste über Git.
                  Eine Terraform-Pipeline verwaltet alle Ressourcen, die für die Erstellung und den Lifecycle eines AWS-Accounts erforderlich sind.<br/>
                  Auch externe Ressourcen, die für die Bereitstellung der AWS-Accounts benötigt werden, können mit dieser Lösung gesteuert werden."

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
        content: "Lesen Sie mehr über Account Lifecycle in den folgenden Blogbeiträgen"
        blog_tag: lifecycle

testimonial_section:
    enable: false
    title: "Customer References"
    list:
      - image: "images/logo/logo_nuvibit_dark.png"
        name: "Lorem ipsum dolor"
        content: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt"

---
