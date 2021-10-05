---
title: "Frequenty Asked Questions"
description: "Frequenty Asked Questions zu unseren Services und Cloud Themen"
draft: false

faq:
  image: "images/illustrations/questions_and_answers.png"
  items:
    - question: "Was ist eine Cloud Foundation?"
      answer: "Bevor die ersten produktiven Workloads in der Cloud deployed werden können, gibt es viele verschiedene Komponenten und Themen, die organisiert und beachtet werden sollten. Es gibt sowohl technische Komponenten - wie Connectivity, Security und Compliance - als auch organisatorische Punkte - wie finanzielle Steuerung oder der Betriebsorganisation - welche allesamt durchdacht werden wollen."
      anchor: foundation
      enable: true

    - question: "Welche Provider supporten wir?"
      answer: "Wir sind hauptsächlich spezialisiert auf sichere Enterprise Deployments in AWS. 
              Einige Themen sind jedoch nicht nur auf einen Provider bezogen, sondern lassen sich auf alle gängigen Public Cloud Provider anwenden. Zögert also nicht, uns zu eurem Anliegen zu [kontaktieren](/contact 'contact form')."
      anchor: providers
      enable: true
      
    - question: "Was ist Infrastructure as Code?"
      answer: "Infrastructure as Code (IaC) beschreibt das Management von Infrastruktur als Code Artefact. Dabei kommen klassisch Software Entwicklungsmethoden wie Source Code Versioning zum Einsatz.<br>
              [Terraform](https://www.terraform.io/intro/index.html 'Introduction to Terraform') ist eine mächtige open-source Software und ein grossartiges Tool für Cloud Deployments."
      anchor: iac
      enable: true
      
    - question: "Was ist Security / Policy as Code?"
      answer: "Ähnlich wie bei Infrastruktur sollen auch Security Standards und Policies als Code verwaltet werden können.
              Gemäss [McKinsey](https://www.mckinsey.com/business-functions/mckinsey-digital/our-insights/security-as-code-the-best-and-maybe-only-path-to-securing-cloud-applications-and-systems) 
              und [Gartner](https://www.gartner.com/en/documents/3992070/using-cloud-native-policy-as-code-to-secure-deployments-) trägt die Automatisierung und Kodifizierung entscheidend zum Erfolg von Security Massnahmen bei.<br>
              Wir stimmen dem voll und ganz zu und haben eine Lösung für die Verwaltung von Sicherheitsereignissen in der Cloud entwickelt, die auf Policy as Code basiert.<br>
              [Kontaktiert uns](/contact 'contact form') um mehr zu unserer Lösung **nbSEMPER** zu erfahren."
      anchor: pac
      enable: true

    - question: "Was sind CIS Controls?"
      answer: "Das [Center for Internet Security](https://www.cisecurity.org/) veröffentlicht regelmässig Best Practices und Leitfäden für IT Security.
              Aktuell sind die CIS Controls in der Version 8 erhältlich, in diesem Regelwerk gibt es  18 **Control Domains** von Data Protection, Audit Logging, Service Provider Configuration bis zu Penetration Testing enthalten.
              Um tiefer einzusteigen empfehlen wir den CIS [CIS Control Navigator](https://www.cisecurity.org/controls/cis-controls-navigator/)."
      anchor: cis
      enable: true

    - question: "Was ist FinOps?"
      answer: "FinOps steht kurz für \"Cloud Financial Operations\" und beschreibt das Finanz Management im public Cloud Umgebungen.
              Traditionelle Budgetierungs-Prozesse stossen bei Pay-As-You-Go Modellen schnell an ihre Grenzen, da sie oft fixe, jährliche oder quartalsweise Budgets voraussetzen. In Public Cloud Umgebungen skalieren die Kosten mit dem eigentlichen Workload mit, so sind sie nur sehr schwer auf einen längeren Zeitraum im Voraus zu budgetieren.<br>
              Der Hauptfokus von FinOps liegt also darin die Cloud Services optimal zu nutzen um die Kosten zu optimieren und den grössten Mehrwert & Business Value zu generieren."
      anchor: finops
      enable: true

    - question: "Was ist GitOps?"
      answer: "GitOps beschreibt das Konzept, [Git](https://git-scm.com) als zentrales Versionierunssystem zu nutzen, um den Lifecycle einer Systemumgebung zu steuern.<br>
              Aufgaben innerhalb des Lifecycles wie Entwicklung-, Test- und die Abnahme-Prozess werden alle zentral via Git ausgelöst und verwaltet. Gleichzeitig sind alle Aktionen in einer Git History versioniert und nachvollziehbar protokolliert."
      anchor: gitops
      enable: true

    - question: "Was ist CI/CD?"
      answer: "CI/CD kombiniert Continuous Integration (CI) und Continuous Delivery oder Continuous Deployment (CD).<br>
              CI bedeutet, das Änderungen kontinuierlich und in kleinen Inkrementen in die Systemumgebung integriert werden.
              Automatisierte Build und Test Schritte werden über das CI Tool für jede Änderung angestossen um sicherzustellen, dass die Änderungen den Funktions- und Qualitätsanforderungen entsprechen um in die Produktion integriert zu werden.<br>
              CD ist dafür zuständig, dass die Änderungen automatisiert in die bestehende Systemumgebung integriert werden."
      anchor: cicd
      enable: true
---
