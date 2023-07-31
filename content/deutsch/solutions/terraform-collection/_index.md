---
title: "NTC | Terraform-native AWS Landing Zone & Foundation"
description: "Nuvibit Terraform Collection (NTC) ist eine revolutionäre AWS Landing Zone & Foundation-Lösung, die vollständig auf Terraform basiert."
draft: false

banner_section:
    enable: true
    title: "Nuvibit Terraform Collection (NTC)"
    content: "NTC ist eine revolutionäre AWS Landing Zone & Foundation-Lösung, die vollständig auf Infrastructure as Code mit Terraform basiert.
                NTC wurde spezifisch für die Bereitstellung und Verwaltung einer Enterprise-tauglichen, konformen und skalierbaren AWS-Umgebung entwickelt.
                Unser flexibler, deklarativer und modularer Ansatz bietet viele einzigartige Vorteile für ein Plattform-Engineering-Team und reduziert die Implementierungszeit und den Aufwand drastisch.<br><br>
                Revolutionieren Sie Ihre AWS-Infrastruktur mit effizienter Verwaltung, beschleunigter Bereitstellung und [GitOps](/faq/#gitops 'Was ist GitOps?') Best Practices."
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
    content : "Verwalten Sie Ihre AWS Landing Zone & Foundation vollständig mit Terraform ohne Abhängigkeiten von AWS Control Tower und CloudFormation."
    
  - title : "Konzipiert für GitOps"
    icon : "fa-brands fa-git-alt"
    content : "Verwalten Sie Ihre AWS Landing Zone & Foundation im GitOps-Ansatz. [Segregation of duties](/faq/#segregation 'Was ist Aufgabentrennung?') kann mit Git-Repositories und Pipeline-Berechtigungen durchgesetzt werden."

  - title : "Einfach personalisierbar"
    icon : "fa-user-gear"
    content : "Unser modularer Ansatz bietet eine hohe Flexibilität, wenn es um die Implementierung einer personalisierten AWS Landing Zone & Foundation geht. Vorlagen für die Personalisierung können direkt übernommen oder angepasst werden."

  # feature at the right of the image
  right_side:
  - title : "Updates und Support"
    icon : "fa-handshake-angle"
    content : "Erhalten Sie Updates und Support für unsere Module und bleiben Sie mit Ihrer AWS Landing Zone & Foundation auf dem neuesten Stand und funktionsfähig."

  - title : "Enterprise-ready"
    icon : "fa-chart-line"
    content : "Entwickelt für Unternehmen mit hohen Anforderungen an Skalierbarkeit, abgestimmt auf Branchenstandards und AWS Empfehlungen. Verwalten Sie zuverlässig Hunderte von Accounts."

  - title : "Beschleunigung der Cloud Journey"
    icon : "fa-truck-fast"
    content : "Der Aufbau einer skalierbaren AWS Landing Zone & Foundation erfordert viel Zeit und Mühe. Profitieren Sie von unserer langjährigen Erfahrung mit AWS und Terraform, um den Implementierungsprozess erheblich zu beschleunigen."

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
{{<table "table table-striped table-bordered table-overflow">}}
| NAME | DESCRIPTION |
| ------------- | ------------- |
| <mark class="inline-mark-FBE3FC">NTC Parameters</mark><img width=150/> | Terraform-Modul zum Speichern und Abrufen von Terraform- oder JSON-Parametern in mehreren AWS-Konten und CI/CD-Pipelines. Dieses Modul ist speziell für die Integration mit unseren NTC-Modulen konzipiert. |
| <mark class="inline-mark-FBE3FC">NTC Organizations</mark> | Terraform-Modul zur Verwaltung von AWS Organizations. Unterstützt die Verwaltung von Organizational Units (OUs), delegated administrators und Service Control Policies. |
| <mark class="inline-mark-FBE3FC">NTC Account Factory</mark> | Terraform-Modul zur Verwaltung von Account Vending, Account Lifecycle und Account Baseline. Provisionierung neuer AWS-Accounts, Benutzerdefinierte Account-Lifecycle-Aktionen und Rollout von Baseline-Konfigurationen für zahlreiche Accounts und Regionen. |
| <mark class="inline-mark-FBE3FC">NTC Identity Center</mark> | Terraform-Modul zur Bereitstellung und Verwaltung von Single Sign-On via AWS IAM Identity Center (Nachfolger von AWS SSO). |
| <mark class="inline-mark-FBE3FC">NTC Log Archive</mark> | Terraform-Modul zur Bereitstellung und Verwaltung eines zentralen Log-Archivs, in dem Foundation Logs wie Cloudtrail, AWS Config, Amazon GuardDuty und VPC Flow Logs aufbewahrt werden. |
| <mark class="inline-mark-FBE3FC">NTC Security Tooling</mark> | Terraform-Modul zur Bereitstellung und Verwaltung zentraler Sicherheitstools wie AWS Security Hub, AWS Config und Amazon GuardDuty. |
| <mark class="inline-mark-FBE3FC">NTC IPAM</mark> | Terraform-Modul zur Bereitstellung und Verwaltung von Amazon VPC IP Address Manager (IPAM). In Kombination mit dem VPC-Modul kann ein hochgradig automatisiertes AWS-Netzwerk realisiert werden. |
| <mark class="inline-mark-FBE3FC">NTC VPC</mark> | Terraform-Modul zur Bereitstellung und Verwaltung von AWS VPC-Netzwerken. Dieses Modul ist für hohe Flexibilität ausgelegt und ermöglicht eine umfangreiche Skalierung. |
| <mark class="inline-mark-FBE3FC">Account Baseline Templates</mark> | Terraform-Modul, welches Vorlagen für Account-Baseline-Konfigurationen bereitstellt. Kann mit dem Modul NTC Account Factory kombiniert werden, um Account-Baselines für AWS-Accounts in mehreren Regionen präzise auszurollen. |
| <mark class="inline-mark-FBE3FC">Account Lifecycle Templates</mark> | Terraform-Modul, welches Vorlagen für die Anpassung des Account-Lebenszyklus bereitstellt. Kann mit dem Modul NTC Account Factory kombiniert werden, um den Lebenszyklus eines AWS-Accounts zu verwalten (z.B. Standard-VPC löschen, wenn ein neuer Account erstellt wird). |
| <mark class="inline-mark-FBE3FC">SCP Templates</mark> | Terraform-Modul, welches Vorlagen für Service Control Policies (SCP) bereitstellt. Kann mit dem Modul NTC Organizations kombiniert werden, um SCPs über Organizational Units (OUs) und spezifische AWS-Accounts präzise auszurollen. |
{{</table>}}
<br><br>

## AWS Landing Zone & Foundation Vergleich
<br>Eine AWS Landing Zone & Foundation ist eine gut strukturierte, vorkonfigurierte Umgebung, die als Grundlage für die Bereitstellung und Verwaltung von Workloads in der AWS-Cloud dient.
Sie bietet eine Reihe von Best Practices und Architekturmustern, um Konsistenz, Sicherheit und Skalierbarkeit in Ihrer AWS-Infrastruktur zu gewährleisten. 
Sie hilft Unternehmen dabei, eine standardisierte und sichere Grundkonfiguration einzurichten und so den Zeit- und Arbeitsaufwand für die anfängliche Bereitstellung der Infrastruktur zu reduzieren.

Es gibt verschiedene Lösungen für die Bereitstellung einer einsatzbereiten AWS Landing Zone & Foundation. Jede Lösung bietet bestimmte Vorteile und hat bestimmte Einschränkungen.<br><br>

{{<table "table table-striped table-bordered table-overflow">}}
|  | NUVIBIT TERRAFORM COLLECTION | AWS LANDING ZONE ACCELERATOR | AWS CONTROL TOWER |
| ------------- | ------------- | ------------- | ------------- |
| <mark class="inline-bold-900">Verwendungszweck</mark> | Bietet einen flexiblen, deklarativen und modularen Ansatz für die Bereitstellung und Verwaltung einer Enterprise-tauglichen und skalierbaren AWS-Umgebung mit potenziell Hunderten von Accounts. | Bietet ein Framework für die schnelle Bereitstellung einer AWS-Umgebung mit mehreren Accounts mit empfohlenen Best Practices. | Bietet einen automatisierten und vorgegebenen Ansatz zum Einrichten und Verwalten einer sicheren AWS-Umgebung mit mehreren Accounts. |
| <mark class="inline-bold-900">Bereitstellungsmechanismus</mark> | Terraform | CDK und CloudFormation | AWS managed service + Add-on Lösungen |
| <mark class="inline-bold-900">Komplexität des Aufbaus</mark> | Erfordert Terraform-Kenntnisse zur Implementierung und zum Betrieb. Die Module werden individuell parametrisiert und bereitgestellt. Detaillierte Beispiel-Repositories werden als Blueprint für die Implementierung der gesamten Lösung bereitgestellt. Zusätzliche Dokumentation und Schritt-für-Schritt-Anleitungen sind ebenfalls verfügbar. | Erfordert CloudFormation und idealerweise CDK-Kenntnisse. Control Tower oder AWS-Organisationen müssen zuerst eingerichtet werden. Für die erste Bereitstellung der Lösung muss eine CloudFormation-Vorlage ausgeführt werden. YAML-Konfigurationsdateien werden dann in AWS CodeCommit verwaltet und über CodePipelines und CloudFormation StackSets bereitgestellt. | Control Tower selbst kann direkt über die AWS-Konsole bereitgestellt und verwaltet werden. Für individuelle Anpassungen sind zusätzliche Kenntnisse in CloudFormation und/oder Terraform erforderlich. Add-on Lösungen für Control Tower müssen separat bereitgestellt werden und können die Komplexität drastisch erhöhen. |
| <mark class="inline-bold-900">Lösungslebenszyklus</mark> | Jedes Modul hat seinen eigenen Lebenszyklus und kann einzeln aktualisiert und zurückgestuft werden. Die Ausführung eines Terraform Plans kennzeichnet die Veränderungen und sollte überprüft werden, um unerwünschte Anpassungen zu vermeiden. Ein stufenweiser Rollout wird unterstützt und empfohlen. | Die gesamte Lösung muss über die CloudFormation-Vorlage aktualisiert werden. Nach dem Aktualisieren der Lösung werden alle CodePipelines gestartet und ausgerollt. Es gibt keine Unterstützung für ein gestaffeltes Rollout. | AWS Control Tower kann über die Einstellungen der Landing Zone aktualisiert werden. Zusätzlich müssen registrierte Accounts in einem zweiten Schritt aktualisiert werden. Add-on Lösungen müssen separat aktualisiert werden. |
| <mark class="inline-bold-900">Flexibilität und Personalisierbarkeit</mark> | Terraform-Module bieten ein Maximum an Flexibilität in Bezug auf die Bereitstellung. Solange die zugrunde liegenden Dienste verfügbar sind, können alle Regionen verwaltet werden. Es ist sogar möglich, bestimmte Module in einer anderen Region einzusetzen, bis der zugrunde liegende Dienst verfügbar ist (z.B. Verwendung des Identity Center in Frankfurt, bis es in einer neuen Region verfügbar ist). Vom Kunden verwaltete Module können parallel verwendet werden. Dedizierte Vorlagen-Module sind als Blueprint für die Anpassung der Lösung verfügbar. | Kann mit AWS Control Tower oder lediglich AWS Organizations verwendet werden und kann in Regionen bereitgestellt werden, in denen AWS Control Tower nicht unterstützt wird. Mit Konfigurationsdateien kann die Lösung angepasst und zusätzliche CloudFormation StackSets bereitgestellt werden. | AWS Control Tower muss in einer unterstützten Region (Heimatregion) bereitgestellt werden. Nicht unterstützte Regionen können nicht vollständig verwaltet werden. Add-on Lösungen sind für beschränkte Personalisierung über CloudFormation und/oder Terraform verfügbar. |
| <mark class="inline-bold-900">Automatisierung in CI/CD</mark> | Alle Terraform-Module werden über Kunden-Pipelines bereitgestellt. Darüber hinaus bietet NTC Account Factory eine native AWS-Lösung (basierend auf CodePipelines) zum dynamischen Rollout von Account-Baselines mit Terraform über mehrere Accounts und Regionen. | Basiert auf AWS CodeCommit, CodeBuild und CodePipelines. Kann nicht mit Kunden-Pipelines integriert werden. | Die Automatisierung wird von AWS im Hintergrund ausgeführt und ist vom Benutzer nicht konfigurierbar. Add-on Lösungen (z.B. Account Factory für Terraform) bieten eine begrenzte Personalisierung über Kunden-Pipelines. |
| <mark class="inline-bold-900">Fehlerdiagnose</mark> | Alles wird mit Terraform bereitgestellt, und daher sind mögliche Fehler auch mit Terraform verbunden. Fehler können im Terraform-Code, in den Terraform-Abhängigkeiten (Versionen und Provider) und in der Personalisierung (Account Lifecycle und Account Baseline) auftreten. | Fehler können im CDK-Code (TypeScript), CloudFormation Templates / StackSets und CodePipelines auftreten. In Kombination mit dem Control Tower erhöht sich der Aufwand für Betrieb und Fehlersuche erheblich. | Es können Fehler in AWS Service Catalog, CloudFormation Templates / StackSets und durch nicht aktualisierte Landing Zones und Account Enrollments auftreten. Bei der Verwendung von Add-on Lösungen (z.B. Account Factory für Terraform) können zusätzliche Fehler in der Add-on Lösung selbst und beim Anpassen der Lösung (z.B. Account Baseline) auftreten. |
| <mark class="inline-bold-900">Unterstützung</mark> | Support für die Terraform-Module ist in der Lizenz enthalten. Zusätzliche Unterstützung (z.B. Training) kann separat angeboten werden. | Probleme können im Github Repository eingereicht werden. AWS bietet Unterstützung in Verbindung mit einem AWS Business oder Enterprise Support Plan. | AWS bietet Support für Control Tower an sich in Verbindung mit einem AWS Business oder Enterprise Support Plan. Probleme mit Add-on Lösungen (z.B. Account Factory für Terraform) können im Github Repository eingereicht werden. |
| <mark class="inline-bold-900">Lizenz</mark> | Für den Zugriff auf Module, Updates, Dokumentation und Support muss eine Lizenz erworben werden. Der Quellcode ist vollständig einsehbar, und heruntergeladene Module können auch nach Ablauf der Lizenz verwendet und modifiziert werden. | Open source. Der Quellcode ist vollständig einsehbar. | Proprietärer, von AWS verwalteter Dienst. Der Quellcode von Control Tower ist nicht einsehbar. Keine zusätzlichen Gebühren für den Control Tower Service an sich. |{{</table>}}
<br>

## Die richtige AWS Landing Zone & Foundation wählen
Es gibt keine Standardlösung für AWS Landing Zone & Foundation, die die Anforderungen aller Kunden erfüllt.<br>
Bei der Auswahl der richtigen Lösung sind viele Aspekte zu berücksichtigen (z.B. bestimmt der Bereitstellungsmechanismus, wie Personalisierung und Fehlersuche durchgeführt werden).<br><br>
Dieser vereinfachte Entscheidungsbaum soll als Orientierungshilfe bei der Wahl der richtigen Lösung dienen:

![img](images/solutions/ntc-decision-tree.png)
