---
title: "Reference architecture for AWS Multi-Account Customers"
date: 2023-10-18T11:00:00+06:00
image: "images/blog/aws-multiaccount-reference-architecture/reference-org-architecture.png"
description: "This post introduces the Nuvibit reference architecture for customers with an AWS multi-account environment."
summary: "We introduce the Nuvibit reference architecture for customers with an AWS multi-account environment."
tags:
  - aws
  - foundation
  - ntc
duration: 5
draft: true
---
## Context



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

![img](images/solutions/ntc-decision-tree-highres.png)

## PLACEHOLDER -> LINK TO NTC