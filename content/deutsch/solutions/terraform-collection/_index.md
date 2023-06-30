---
title: "Terraform Collection"
description: "Eine Sammlung von Infrastructure as Code Terraform-Modulen, die spezifisch für die Bereitstellung und Verwaltung einer AWS Foundation / Landing Zone entwickelt wurden."
draft: false

banner_section:
    enable: true
    title: "Terraform Collection"
    content: "Eine Sammlung unserer [Terraform Module](https://developer.hashicorp.com/terraform/tutorials/modules/module), die spezifisch für die Bereitstellung und Verwaltung einer AWS Foundation / Landing Zone entwickelt wurden. 
              Unser flexibler, deklarativer und modularer Ansatz bietet viele einzigartige Vorteile für ein Plattform-Engineering-Team und reduziert den Zeit- und Arbeitsaufwand für die Implementierung drastisch.<br><br>"
    image : "images/solutions/ntc-logo.png"
    button:
        enable: true
        label: "Demo buchen"
        link: "contact"

feature_section:
  enable : true
  title: "Key features"
  image : "images/solutions/ntc-module.png"

  # feature at the left of the image
  left_side:
  - title : "100% Terraform-nativ"
    icon : "fa-file-code"
    content : "Verwalten Sie Ihre AWS Foundation / Landing Zone vollständig mit Terraform ohne Abhängigkeiten von AWS Control Tower und CloudFormation."
    
  - title : "Konzipiert für GitOps"
    icon : "fa-brands fa-git-alt"
    content : "Verwalten Sie Ihre AWS Foundation / Landing Zone mit einem vollständigen GitOps-Ansatz. [Segregation of duties](/faq/#segregation 'Was ist Aufgabentrennung?') kann mit Git-Repositories und Pipeline-Berechtigungen durchgesetzt werden."

  - title : "Einfach personalisierbar"
    icon : "fa-user-gear"
    content : "Unser modularer Ansatz bietet eine hohe Flexibilität und viele Optionen, wenn es um die Implementierung einer personalisierten AWS Foundation / Landing Zone geht. Wir bieten Vorlagen für die Personalisierung, die als Ausgangspunkt dienen und direkt übernommen oder angepasst werden können."

  # feature at the right of the image
  right_side:
  - title : "Updates und Support"
    icon : "fa-handshake-angle"
    content : "Erhalten Sie Updates und Support für unsere Module und bleiben Sie mit Ihrer AWS Foundation / Landing Zone auf dem neuesten Stand und funktionsfähig. Wir sind auf AWS und Terraform spezialisiert mit langjähriger praktischer Erfahrung."

  - title : "Unternehmenstauglich und skalierbar"
    icon : "fa-chart-line"
    content : "Entwickelt für Unternehmen mit hohen Skalierbarkeitsanforderungen, abgestimmt auf Branchenstandards und AWS Best Practices. Verwalten Sie zuverlässig Hunderte von Accounts."

  - title : "Beschleunigung der Cloud Journey"
    icon : "fa-truck-fast"
    content : "Der Aufbau einer skalierbaren AWS Foundation / Landing Zone erfordert viel Zeit und Mühe. Mit unserer Collection können Sie unsere umfassende Erfahrung mit AWS und Terraform nutzen, um Ihren Implementierungsprozess erheblich zu beschleunigen."

markdown_content:
  enable: true

excerpt_section:
    enable: false
    # title: "In a nutshell..."
    # list:
    #   - title: "Placeholder"
    #     enable: true
    #     image: "images/solutions/placeholder.png"
    #     content: "Lorem Ipsum.<br/><br/>"

link_section:
    enable: false
    # list:
    #   - title: "Documentation"
    #     enable: false
    #     content: "You can find more details in our documentation"
    #     links:
    #       - url: "https://url1"
    #         link_name: "documentation 1"
    #       - url: "https://url2"
    #         link_name: "documentation 1"

    #   - title: "Blog"
    #     enable: true
    #     content: "Read more about the Nuvibit Foundation Blueprint in these blog posts"
    #     blog_tag: foundation

testimonial_section:
    enable: false
    # title: "Customer References"
    # list:
    #   - image: "images/logo/logo_nuvibit_dark.png"
    #     name: "Lorem ipsum dolor"
    #     content: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt"
---

## Nuvibit Terraform Collection (NTC) Module 
{{<table "table table-striped table-bordered terraform-table">}}
| NAME | DESCRIPTION |
| ------------- | ------------- |
| <mark style="font-weight:900;background-color:#fbe3fc;">NTC Parameters</mark><img width=150/> | Terraform-Modul zum Speichern und Abrufen von Terraform- oder JSON-Parametern in mehreren AWS-Konten und CI/CD-Pipelines. Dieses Modul ist speziell für die Integration mit unseren NTC-Modulen konzipiert. |
| <mark style="font-weight:900;background-color:#fbe3fc;">NTC Organizations</mark> | Terraform-Modul zur Verwaltung von AWS Organizations. Unterstützt die Verwaltung von Organizational Units (OUs), delegated administrators und Service Control Policies. |
| <mark style="font-weight:900;background-color:#fbe3fc;">NTC Account Factory</mark> | Terraform-Modul zur Verwaltung von Account Vending, Account Lifecycle und Account Baseline. Provisionierung neuer AWS-Accounts, Benutzerdefinierte Account-Lifecycle-Aktionen und Rollout von Baseline-Konfigurationen für zahlreiche Accounts und Regionen. |
| <mark style="font-weight:900;background-color:#fbe3fc;">NTC Identity Center</mark> | Terraform-Modul zur Bereitstellung und Verwaltung von Single Sign-On via AWS IAM Identity Center (Nachfolger von AWS SSO). |
| <mark style="font-weight:900;background-color:#fbe3fc;">NTC Log Archive</mark> | Terraform-Modul zur Bereitstellung und Verwaltung eines zentralen Log-Archivs, in dem Foundation Logs wie Cloudtrail, AWS Config, Amazon GuardDuty und VPC Flow Logs aufbewahrt werden. |
| <mark style="font-weight:900;background-color:#fbe3fc;">NTC Security Tooling</mark> | Terraform-Modul zur Bereitstellung und Verwaltung zentraler Sicherheitstools wie AWS Security Hub, AWS Config und Amazon GuardDuty. |
| <mark style="font-weight:900;background-color:#fbe3fc;">NTC IPAM</mark> | Terraform-Modul zur Bereitstellung und Verwaltung von Amazon VPC IP Address Manager (IPAM). In Kombination mit dem VPC-Modul kann ein hochgradig automatisiertes AWS-Netzwerk realisiert werden. |
| <mark style="font-weight:900;background-color:#fbe3fc;">NTC VPC</mark> | Terraform-Modul zur Bereitstellung und Verwaltung von AWS VPC-Netzwerken. Dieses Modul ist für hohe Flexibilität ausgelegt und ermöglicht eine umfangreiche Skalierung. |
| <mark style="font-weight:900;background-color:#fbe3fc;">Account Baseline Templates</mark> | Terraform-Modul, welches Vorlagen für Account-Baseline-Konfigurationen bereitstellt. Kann mit dem Modul NTC Account Factory kombiniert werden, um Account-Baselines für AWS-Accounts in mehreren Regionen präzise auszurollen. |
| <mark style="font-weight:900;background-color:#fbe3fc;">Account Lifecycle Templates</mark> | Terraform-Modul, welches Vorlagen für die Anpassung des Account-Lebenszyklus bereitstellt. Kann mit dem Modul NTC Account Factory kombiniert werden, um den Lebenszyklus eines AWS-Accounts zu verwalten (z.B. Standard-VPC löschen, wenn ein neuer Account erstellt wird). |
| <mark style="font-weight:900;background-color:#fbe3fc;">SCP Templates</mark> | Terraform-Modul, welches Vorlagen für Service Control Policies (SCP) bereitstellt. Kann mit dem Modul NTC Organizations kombiniert werden, um SCPs über Organizational Units (OUs) und spezifische AWS-Accounts präzise auszurollen. |
{{</table>}}
<br><br>

## AWS Foundation / Landing Zone Vergleich
<br>Eine AWS Foundation / Landing Zone ist eine gut strukturierte, vorkonfigurierte Umgebung, die als Grundlage für die Bereitstellung und Verwaltung von Workloads in der AWS-Cloud dient.
Sie bietet eine Reihe von Best Practices und Architekturmustern, um Konsistenz, Sicherheit und Skalierbarkeit in Ihrer AWS-Infrastruktur zu gewährleisten. 
Sie hilft Unternehmen dabei, eine standardisierte und sichere Grundkonfiguration einzurichten und so den Zeit- und Arbeitsaufwand für die anfängliche Bereitstellung der Infrastruktur zu reduzieren.

Es gibt verschiedene Lösungen für die Bereitstellung einer einsatzbereiten AWS Foundation / Landing Zone. Jede Lösung bietet bestimmte Vorteile und hat bestimmte Einschränkungen.<br><br>

{{<table "table table-striped table-bordered terraform-table">}}
|  | AWS LANDING ZONE ACCELERATOR | AWS CONTROL TOWER | NUVIBIT TERRAFORM COLLECTION |
| ------------- | ------------- | ------------- | ------------- |
| <mark style="font-weight:900;">Verwendungszweck</mark> | Bietet ein Framework für die schnelle Bereitstellung einer AWS-Umgebung mit mehreren Accounts mit empfohlenen Best Practices. | Bietet einen automatisierten und vorgegebenen Ansatz zum Einrichten und Verwalten einer sicheren AWS-Umgebung mit mehreren Accounts. | Bietet einen flexiblen, deklarativen und modularen Ansatz für die Bereitstellung und Verwaltung einer unternehmenstauglichen und skalierbaren AWS-Umgebung mit potenziell Hunderten von Accounts. |
| <mark style="font-weight:900;">Bereitstellungsmechanismus</mark> | CDK und CloudFormation | AWS managed service + Add-on Lösungen | Terraform |
| <mark style="font-weight:900;">Komplexität des Aufbaus</mark> | Erfordert CloudFormation und idealerweise CDK-Kenntnisse. Control Tower oder AWS-Organisationen müssen zuerst eingerichtet werden. Für die erste Bereitstellung der Lösung muss eine CloudFormation-Vorlage ausgeführt werden. YAML-Konfigurationsdateien werden dann in AWS CodeCommit verwaltet und über CodePipelines und CloudFormation StackSets bereitgestellt. | Control Tower selbst kann direkt über die AWS-Konsole bereitgestellt und verwaltet werden. Für individuelle Anpassungen sind zusätzliche Kenntnisse in CloudFormation und/oder Terraform erforderlich. Add-on Lösungen für Control Tower müssen separat bereitgestellt werden und können die Komplexität drastisch erhöhen. | Erfordert Terraform-Kenntnisse zur Implementierung und zum Betrieb. Die Module werden individuell parametrisiert und bereitgestellt. Detaillierte Beispiel-Repositories werden als Blueprint für die Implementierung der gesamten Lösung bereitgestellt. Zusätzliche Dokumentation und Schritt-für-Schritt-Anleitungen sind ebenfalls verfügbar. |
| <mark style="font-weight:900;">Lösungslebenszyklus</mark> | Die gesamte Lösung muss über die CloudFormation-Vorlage aktualisiert werden. Nach dem Aktualisieren der Lösung werden alle CodePipelines gestartet und ausgerollt. Es gibt keine Unterstützung für ein gestaffeltes Rollout. | AWS Control Tower kann über die Einstellungen der Landing Zone aktualisiert werden. Zusätzlich müssen registrierte Accounts in einem zweiten Schritt aktualisiert werden. Add-on Lösungen müssen separat aktualisiert werden. | Jedes Modul hat seinen eigenen Lebenszyklus und kann einzeln aktualisiert und zurückgestuft werden. Die Ausführung eines Terraform Plans kennzeichnet die Veränderungen und sollte überprüft werden, um unerwünschte Anpassungen zu vermeiden. Ein stufenweiser Rollout wird unterstützt und empfohlen. |
| <mark style="font-weight:900;">Flexibilität und Personalisierbarkeit</mark> | Kann mit AWS Control Tower oder lediglich AWS Organizations verwendet werden und kann in Regionen bereitgestellt werden, in denen AWS Control Tower nicht unterstützt wird. Mit Konfigurationsdateien kann die Lösung angepasst und zusätzliche CloudFormation StackSets bereitgestellt werden. | AWS Control Tower muss in einer unterstützten Region (Heimatregion) bereitgestellt werden. Nicht unterstützte Regionen können nicht vollständig verwaltet werden. Add-on Lösungen sind für beschränkte Personalisierung über CloudFormation und/oder Terraform verfügbar. | Terraform-Module bieten ein Maximum an Flexibilität in Bezug auf die Bereitstellung. Solange die zugrunde liegenden Dienste verfügbar sind, können alle Regionen verwaltet werden. Es ist sogar möglich, bestimmte Module in einer anderen Region einzusetzen, bis der zugrunde liegende Dienst verfügbar ist (z.B. Verwendung des Identity Center in Frankfurt, bis es in einer neuen Region verfügbar ist). Vom Kunden verwaltete Module können parallel verwendet werden. Dedizierte Vorlagen-Module sind als Blueprint für die Anpassung der Lösung verfügbar. |
| <mark style="font-weight:900;">Automatisierung in CI/CD</mark> | Basiert auf AWS CodeCommit, CodeBuild und CodePipelines. Kann nicht mit Kunden-Pipelines integriert werden. | Die Automatisierung wird von AWS im Hintergrund ausgeführt und ist vom Benutzer nicht konfigurierbar. Add-on Lösungen (z.B. Account Factory für Terraform) bieten eine begrenzte Personalisierung über Kunden-Pipelines. | Alle Terraform-Module werden über Kunden-Pipelines bereitgestellt. Darüber hinaus bietet NTC Account Factory eine native AWS-Lösung (basierend auf CodePipelines) zum dynamischen Rollout von Account-Baselines mit Terraform über mehrere Accounts und Regionen. |
| <mark style="font-weight:900;">Fehlerdiagnose</mark> | Fehler können im CDK-Code (TypeScript), CloudFormation Templates / StackSets und CodePipelines auftreten. In Kombination mit dem Control Tower erhöht sich der Aufwand für Betrieb und Fehlersuche erheblich. | Es können Fehler in AWS Service Catalog, CloudFormation Templates / StackSets und durch nicht aktualisierte Landing Zones und Account Enrollments auftreten. Bei der Verwendung von Add-on Lösungen (z.B. Account Factory für Terraform) können zusätzliche Fehler in der Add-on Lösung selbst und beim Anpassen der Lösung (z.B. Account Baseline) auftreten. | Alles wird mit Terraform bereitgestellt, und daher sind mögliche Fehler auch mit Terraform verbunden. Fehler können im Terraform-Code, in den Terraform-Abhängigkeiten (Versionen und Provider) und in der Personalisierung (Account Lifecycle und Account Baseline) auftreten. |
| <mark style="font-weight:900;">Unterstützung</mark> | Probleme können im Github Repository eingereicht werden. AWS bietet Unterstützung in Verbindung mit einem AWS Business oder Enterprise Support Plan. | AWS bietet Support für Control Tower an sich in Verbindung mit einem AWS Business oder Enterprise Support Plan. Probleme mit Add-on Lösungen (z.B. Account Factory für Terraform) können im Github Repository eingereicht werden. | Der Support für die Terraform-Module ist in der Lizenz enthalten. Zusätzliche Unterstützung (z.B. Training) kann separat angeboten werden. |
| <mark style="font-weight:900;">Lizenz</mark> | Open source. Der Quellcode ist vollständig einsehbar. | Proprietärer, von AWS verwalteter Dienst. Der Quellcode von Control Tower ist nicht einsehbar. Keine zusätzlichen Gebühren für den Control Tower Service an sich. | Für den Zugriff auf Module, Updates, Dokumentation und Support muss eine Lizenz erworben werden. Der Quellcode ist vollständig einsehbar, und heruntergeladene Module können auch nach Ablauf der Lizenz verwendet und modifiziert werden. |
{{</table>}}
<br>

## Die richtige AWS Foundation / Landing Zone wählen

Es gibt keine Standardlösung für AWS Foundation / Landing Zone, die die Anforderungen aller Kunden erfüllt.<br>
Obwohl wir überzeugt sind, dass unsere Terraform Collection viele einzigartige Vorteile für ein Plattform-Engineering-Team bietet, gibt es auch Fälle, in denen wir unsere Lösung nicht zwingend empfehlen würden.<br><br>

Bei der Auswahl der richtigen Lösung sind viele Aspekte zu berücksichtigen (z.B. bestimmt der Bereitstellungsmechanismus, wie Personalisierung und Fehlersuche durchgeführt werden), dennoch kann dieser vereinfachte Entscheidungsbaum als Orientierung dienen.

![img](images/solutions/ntc-decision-tree.png)
