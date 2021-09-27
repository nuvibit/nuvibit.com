---
title: "Frequenty Asked Questions"
description: "Frequenty asked questions über unsere Services und Cloud Themen"
draft: false

faq:
  image: "images/illustrations/questions_and_answers.png"
  items:
    - question: "Was ist eine Cloud Foundation?"
      answer: "Bevor die ersten produktiven Workloads in der Cloud deployed werden können gibt es viele verschiedene Komponenten und Themen, die organisiert und durchgedacht werden sollten. Es gibt sowohl technische Komponenten wie Connectivity, Security und Compliance als auch organisatorische Punkte wie finanzielle Steuerung oder Betriebsorganisation, die beachtet werden müssen."
      anchor: foundation

      enable: true

    - question: "Welche Provider supporten wir?"
      answer: "Wir sind hauptsächlich spezialisiert auf sichere Enterprise Deployments in AWS. 
              Einige Themen sind aber nicht nur auf einen Provider bezogen sondern lassen sich auf alle public Cloud Provider anwenden. Zögert also nicht uns zu Eurem Anliegen zu [kontaktieren](/contact 'contact form').
      anchor: providers
      enable: true
      
    - question: "Was ist Infrastructure as Code?"
      answer: "Infrastructure as Code (IaC) beschreibt das Management von Infrastruktur als Code Artefact. Dabei kommen klassisch Software Entwicklungsmethoden wie Source Code Versioning zum Einsatz.<br>
              [Terraform](https://www.terraform.io/intro/index.html 'Introduction to Terraform') ist eine mächtige open-source Software und ein grossartiges Tool für Cloud Deployments."
      anchor: iac
      enable: true
      
    - question: "Was ist Security / Policy as Code?"
      answer: "Ähnlich wie bei Infrastruktur sollen auch Security Standards und Policies als Code verwaltet werden können..
              Gemäss [McKinsey](https://www.mckinsey.com/business-functions/mckinsey-digital/our-insights/security-as-code-the-best-and-maybe-only-path-to-securing-cloud-applications-and-systems) 
              und [Gartner](https://www.gartner.com/en/documents/3992070/using-cloud-native-policy-as-code-to-secure-deployments-) trägt die Automatisierung und Kodifizierung entscheidend zum Erfolg von Security Massnahmen bei.<br>
              We fully agree and built a solution for cloud security event management based on Policy as Code.<br>
              [Get in touch](/contact 'contact form') to learn more about **nbSEMPER**."
      anchor: pac
      enable: true

    - question: "Was sind CIS Controls?"
      answer: "Das [Center for Internet Security](https://www.cisecurity.org/) veröffentliche regelmässig Best Practices und Guidelines für IT Security.
              Aktuell in der Version 8 verfügbar sind in dem Dokument 18 Control Domains von Data Protection, Audit Logging, Service Provider Configuration bis zu Penetration Testing enthalten.
              Um tiefer einzusteigen empfehlen wir den CIS [CIS Control Navigator](https://www.cisecurity.org/controls/cis-controls-navigator/).
      anchor: cis
      enable: true

    - question: "Was ist FinOps?"
      answer: "FinOps steht kurz für \"Cloud Financial Operations\" und beschreibt das Finanz Management im public Cloud Umgebungen.
              Traditionelle Budgetierungs Prozesse stossen bei Pay-as-you-go Modellen schnell an ihre Grenzen, da sie oft fixe, jährliche oder quartalsweise Budgets voraussetzen. In public Cloud Umgebungen skallieren die Kosten mit dem eigentlichen Workload mit und sind so nur sehr schwer auf einen längeren Zeitraum budgetierbar.<br>
              Der Hauptfokus liegt also dabei die Cloud Services optimal zu nutzen um die Kosten zu optimieren und den grössten Business Value zu generieren."
      anchor: finops
      enable: true

    - question: "Was ist GitOps?"
      answer: "GitOps beschreibt das Konzept, [Git](https://git-scm.com)v als zentrales Versionierunssystem zu nutzen, um den Lifecycle eines systems zu stehern.<br>
              Aufgaben innerhalb des Lifecycles wie Deployments, Tests und Approval Workflows werden alle zentral via Git ausgelöst und gemanagt. Gleichzeitig sind alle Aktionen in der Git History versioniert und nachvollziehbar protokolliert."
      anchor: gitops
      enable: true

    - question: "Was ist CI/CD?"
      answer: "CI/CD kombiniert continuous integration (CI) und continuous delivery oder continuous deployment (CD).<br>
              CI bedeutet, das Änderungen kontinuierlich und in kleinen Inkrementen in das System integriert werden.
              Automatisierte Build und Test Schritte werden über das CI Tool für jede Änderung angestossen um sicherzustellen, dass die Änderungen den Funktions- und Qualitätsanforderungen entsprechen um in die Produktion integriert zu werden.<br>
              CD ist dafür zuständig, dass die Änderungen automatisiert in das bestehende System integriert werden."dddd
      anchor: cicd
      enable: true
---
