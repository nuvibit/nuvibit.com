---
title: "Nuvibit Cloud Foundation Map"
date: 2021-12-17T11:00:00+06:00
image: "images/blog/cloud-foundation-map/foundation-map.png"
description: "In diesem Beitrag wird das erweiterte Prinzip der geteilten Verantwortung eingeführt und die Nuvibit Cloud Foundation Capability Map vorgestellt."
summary: "Erfahren Sie mehr darüber, wie Sie das Prinzip der geteilten Verantwortung (shared responsibility model) zur Nuvibit Cloud Foundation Capability Map ausweiten können."
tags:
  - aws
  - azure
  - foundation
duration: 5
draft: false
---
## Kontext

Jeder, der mit Hyperscalern wie AWS oder Azure zu tun hat, ist vermutlich bereits mit dem Prinzip der geteilten Verantwortung (shared responsibility model) in Berührung gekommen:

\- [AWS Shared Responsibility Model](https://aws.amazon.com/compliance/shared-responsibility-model/?nc1=h_ls 'AWS Shared Responsibility Model Website')  
\- [Azure Shared responsibility in the cloud](https://docs.microsoft.com/en-us/azure/security/fundamentals/shared-responsibility 'Azure Shared responsibility in the cloud Website')  

In grossen Unternehmen, in denen mehrere Entwicklungsteams mehrere Workloads in der Cloud betreuen, ist es von Vorteil, einige der Aufgaben zu zentralisieren, um die internen Entwicklungsteams zu entlasten.

## Erweitertes Prinzip der geteilten Verantwortung

Dies führt zu einem **erweiterten Prinzip der geteilten Verantwortung**, das sich von einer bidirektionalen Beziehung zwischen Cloud Consumer und dem Cloud Provider zu einer Dreiecksbeziehung zwischen dem **Cloud Consumer**, den **Cloud Foundation Team(s)** und dem **Cloud Provider** entwickelt. 

![img](images/blog/cloud-foundation-map/extended-srm.png)

Die **Cloud Foundation** lässt sich in **Core Domains** und **Shared Service Domains** unterteilen, welche sich wiederum aus einzelnen **Capabilities** zusammensetzen.

Die **Core Domains** repräsentieren die grundlegenden Capabilities wie Cloud Management, Cloud Security & Governance und Cloud Networking, die von den **Cloud Consumers** und den **Shared Service Domains** genutzt werden.

Bei den **Shared Service Domains** handelt es sich um Capabilities wie Container, IoT, BigData oder Machine Learning, die von den **Cloud Consumers** genutzt werden.

Der grosse Vorteil dieses erweiterten Modells wird **Cloud Workload Development Teams** angeboten, die von einer "Veredelung" des **Cloud Provider**-Angebots profitieren und sich auf ihre Workload-Herausforderungen konzentrieren können.

Werfen wir einen Blick auf das Beispiel der Sicherheitskontrollen. 
Ein Grossteil der Sicherheitskontrollen wird direkt von der **Foundation Core Domain** bereitgestellt. 
Optional wird die **Shared Service Domain** domänenspezifische Sicherheitsaspekte hinzufügen.
Dadurch kann der eigentliche **Cloud Consumer** bereits mit einem sehr hohen Mass an Sicherheit "out of the box" beginnen und sich nur auf die workload-spezifischen Sicherheitsaspekte konzentrieren.

![img](images/blog/cloud-foundation-map/sample-security.png)

> Die **Cloud Workload Development Teams** können sich auf eine zentral bereitgestellte Cloud-Veredelung verlassen, die von der **Cloud Foundation** angeboten wird.

## Nuvibit Cloud Foundation Capability Map

Eine weitere Detaillierung der **Cloud Foundation Core Domains** führt zu dieser **Capability Map**:

![img](images/blog/cloud-foundation-map/cloud-capability-map-highres.png)

Jede **Foundation Capability** besteht aus einem technischen Teil und einem Fulfillment-Teil. Eine **Foundation Capability** wird durch ein Foundation Capability Team verantwortet (ein Foundation Capability-Team kann für mehrere **Foundation Capabilities** zuständig sein - so ist beispielsweise das AWS Foundation Security Team für den gesamten **Foundation Security & Governance Bereich** verantwortlich).

Die **Nuvibit Cloud Foundation Capability Map** basiert auf dem [Cloud Operating Model AWS Whitepaper](https://d1.awsstatic.com/whitepapers/building-a-cloud-operating-model.pdf 'AWS Whitepaper') und dem [AWS Cloud Adoption Framework](https://docs.aws.amazon.com/whitepapers/latest/overview-aws-cloud-adoption-framework/foundational-capabilities.html) und setzt deren Hauptprinzipien um.
<br/><br/>

## Unsere Dienstleistung

Nuvibit ist darauf spezialisiert, **Cloud Foundation Capabilities** in Unternehmen einzuführen.

Wir passen unseren **Foundation Blueprint** an Ihre Bedürfnisse an und befähigen Sie, **Foundation Capabilities** mit einem hohen Reifegrad für Ihre **Cloud Workload Development Teams** bereitzustellen.

**[Kontaktieren Sie uns](/contact/ 'Kontaktieren Sie uns für weitere Informationen.')** für weitere Informationen.