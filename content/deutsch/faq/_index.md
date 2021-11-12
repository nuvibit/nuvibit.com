---
title: "Häufig gestellte Fragen"
description: "Häufig gestellte Fragen zu Cloud Themen und unseren Services"
draft: false

faq:
  image: "images/illustrations/questions_and_answers.png"
  items:
    - question: "Was ist eine Cloud Foundation?"
      answer: Bevor ein Workload in der Public Cloud bereitgestellt werden kann, müssen zahlreiche Komponenten aufeinander abgestimmt werden.
              Es gibt technische Aspekte wie Konnektivität oder Sicherheit und organisatorische Aspekte wie Finanzen oder Betrieb.<br>
              Eine sichere, skalierbare Cloud Foundation wird Ihre Cloud Journey erheblich beschleunigen und ist der Schlüssel zum Erfolg."
      anchor: foundation
      enable: true

    - question: "Welche Cloud Provider unterstützen wir?"
      answer: "Wir sind hauptsächlich spezialisiert auf sichere Enterprise Deployments in AWS.
              Einige Themen sind jedoch nicht spezifisch auf einen Provider bezogen, sondern lassen sich auf alle gängigen Public Cloud Provider anwenden. Zögern Sie also nicht, uns zu Ihrem Anliegen zu [kontaktieren](/contact 'contact form')."
      anchor: providers
      enable: true

    - question: "Was ist Infrastructure as Code?"
      answer: "Infrastructure as Code (IaC) beschreibt das Management von Infrastruktur als Code-Artefakt und nutzt Softwareentwicklungsmethoden wie die Versionierung des Quellcodes.<br>
              [Terraform](https://www.terraform.io/intro/index.html 'Introduction to Terraform') ist eine mächtige Open-Source Software und ein grossartiges Tool für Cloud Deployments.<br>
              Besuchen Sie die [Terraform Registry](https://registry.terraform.io/namespaces/nuvibit) und werfen Sie einen Blick auf unsere öffentlichen Module, die kostenlos genutzt werden können."
      anchor: iac
      enable: true

    - question: "Was ist Security / Policy as Code?"
      answer: "Ähnlich wie bei Infrastruktur sollen auch Security Standards und Policies als Code
              verwaltet werden können.
              Gemäss [McKinsey](https://www.mckinsey.com/business-functions/mckinsey-digital/our-insights/security-as-code-the-best-and-maybe-only-path-to-securing-cloud-applications-and-systems)
              und [Gartner](https://www.gartner.com/en/documents/3992070/using-cloud-native-policy-as-code-to-secure-deployments-) trägt die Automatisierung und Kodifizierung entscheidend zum Erfolg von Security Massnahmen bei.<br>
              Wir stimmen dem voll und ganz zu und haben eine Lösung für die Verwaltung von Sicherheitsereignissen in der Cloud entwickelt, die auf Policy as Code basiert.<br>
              [Kontakt aufnehmen](/contact 'contact form'), um mehr zu unserer Lösung **SEMPER** zu erfahren."
      anchor: pac
      enable: true

    - question: "Was sind CIS Controls?"
      answer: "Das [Center for Internet Security](https://www.cisecurity.org/) veröffentlicht regelmässig Best Practices und Leitfäden für IT Security.
              Aktuell sind die CIS Controls in der Version 8 erhältlich. In diesem Regelwerk gibt es 18 **Control Domains** von Data Protection, Audit Logging, Service Provider Configuration bis hin zu Penetration Testing.<br>
              Um hier tiefer einzusteigen, empfehlen wir den [CIS Control Navigator](https://www.cisecurity.org/controls/cis-controls-navigator/)."
      anchor: cis
      enable: true

    - question: "Was ist FinOps?"
      answer: "FinOps steht kurz für \"Cloud Financial Operations\" und beschreibt das Finanzmanagement in Public Cloud Umgebungen.
              Traditionelle Budgetierungs-Prozesse stossen bei Pay-As-You-Go Modellen schnell an ihre Grenzen, da diese oft fixe, jährliche oder quartalsweise Budgets voraussetzen.
              In Public Cloud skalieren die Kosten mit dem eigentlichen Workload und lassen sich schwer im Voraus budgetieren.<br>
              Der Hauptfokus von FinOps liegt also darin, die Cloud Services optimal zu nutzen, um die Kosten zu optimieren und den grössten Mehrwert für Ihr Unternehmen zu generieren."
      anchor: finops
      enable: true

    - question: "Was ist GitOps?"
      answer: "GitOps beschreibt das Konzept der Verwendung von [Git](https://git-scm.com) als zentrales Versionskontrollsystem zur Verwaltung des Lebenszyklus einer Systemumgebung.<br>
              Aufgaben innerhalb dieses Lifecycles, wie Entwicklung-, Test- und der Abnahmeprozess, werden alle zentral via Git angestossen und verwaltet. 
              Gleichzeitig sind alle Aktionen in Git versioniert und nachvollziehbar protokolliert."
      anchor: gitops
      enable: true

    - question: "Was ist CI/CD?"
      answer: "CI/CD kombiniert Continuous Integration (CI) und Continuous Delivery oder Continuous Deployment (CD).<br>
              CI bedeutet, das Änderungen kontinuierlich und häufig in kleinen Inkrementen in die Systemumgebung integriert werden.
              Mittels automatisierte Build- und Testschritte, die durch CI ausgelöst werden, wird sichergestellt, dass Codeänderungen in der Produktion zuverlässig und funktional sind.<br>
              CD ist dafür zuständig, dass die Änderungen automatisiert in die bestehende Systemumgebung integriert werden."
      anchor: cicd
      enable: true
---
