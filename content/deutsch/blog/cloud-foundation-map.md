---
title: "Nuvibit Cloud Foundation Map"
date: 2021-12-01T11:00:00+06:00
image: "images/blog/cloud-foundation-map/tile.png"
description: "Von der Erweiterung des Modells der geteilten Verantwortung zur Nuvibit Cloud Foundation Capability Map mit Fokus auf die Core Domains."
summary: "In diesem Beitrag wird das erweiterte Modell der geteilten Verantwortung eingeführt und die Nuvibit Cloud Foundation Capability Map vorgestellt."
duration: 15
draft: false
---
## Kontext

Jeder, der mit Hyperscalern wie AWS oder Azure zu tun hat, ist bereits mit einer Form des Modells der geteilten Verantwortung in Berührung gekommen:

\- [AWS Shared Responsibility Model](https://aws.amazon.com/compliance/shared-responsibility-model/?nc1=h_ls 'AWS Shared Responsibility Model Website')  
\- [Azure Shared responsibility in the cloud](https://docs.microsoft.com/en-us/azure/security/fundamentals/shared-responsibility 'Azure Shared responsibility in the cloud Website')  

In grossen Unternehmen, in denen mehrere Entwicklungsteams mehrere Workloads in der Cloud betreuen, ist es von Vorteil, einige der Aufgaben zu zentralisieren, um die internen Entwicklungsteams zu entlasten.

## Erweitertes Modell der geteilten Verantwortung
Dies führt zu einem **erweiterten Modell der geteilten Verantwortung**, das sich von einer bidirektionalen Beziehung zwischen **Cloud Consumer** und dem **Cloud Provider** zu einer Dreiecksbeziehung zwischen dem **Cloud Consumer**, den **Cloud Foundation Team(s)** und dem **Cloud Provider** entwickelt. 

![img](images/blog/cloud-foundation-map/extended-srm.png)

In diesem Blog-Beitrag geht es um die Vorstellung der Capabilities der **Cloud Foundation**, die wiederum in **Core Domains** und **Shared Service Domains** unterteilt werden kann. 

Die **Core Domains** repräsentieren die grundlegenden Capabilities wie Cloud Management, Cloud Security & Governance und Cloud Networking, die von den **Cloud Consumers** und den **Shared Service Domains** genutzt werden.

Bei den **Shared Service Domains** handelt es sich um Capabilities wie Container, IoT, BigData oder Machine Learning, die von den **Cloud Consumers** genutzt werden.
  
Der grosse Vorteil dieses Modells wird den **Cloud Workload Development Teams** geboten, die von einer "Veredelung" des **Cloud Provider**-Angebots profitieren und sich so auf die Herausforderungen ihres Workloads fokussieren können. 

Betrachten wir das Beispiel der Sicherheitskontrollen. Ein grosser Teil der Sicherheitskontrollen wird direkt von der **Foundation Core Domain** bereitgestellt. Optional wird die **Shared Service Domain** domänenspezifische Sicherheitsaspekte hinzufügen. Dadurch kann der eigentliche **Cloud Consumer** bereits mit einem sehr hohen Mass an Sicherheit "out of the box" starten und sich nur auf die workload-spezifischen Sicherheitsaspekte konzentrieren.

![img](images/blog/cloud-foundation-map/sample-security.png)

> Die **Cloud Workload Development Teams** können sich auf eine zentral bereitgestellte Cloud-Veredelung verlassen, die von der **Cloud Foundation** angeboten wird.

## Nuvibit Cloud Foundation Capability Map
Eine weitere Detaillierung der **Core Domains** der **Cloud Foundation** führt zu dieser **Capability Map**:

![img](images/blog/cloud-foundation-map/cloud-capability-map-highres.png)

Jede **Foundation Capability** besteht aus einem technischen Teil und einem Fulfillment-Teil. Eine **Foundation Capability** wird durch ein Foundation Capability Team erbracht (ein Foundation Capability Team kann für mehrere **Foundation Capabilities** verantwortlich sein - z.B. ist das AWS Foundation Security Team für den gesamten **Foundation Security & Governance Bereich** verantwortlich).

Die **Nuvibit Cloud Foundation Capability Map** basiert auf dem [Cloud Operating Model AWS Whitepaper] (https://d1.awsstatic.com/whitepapers/building-a-cloud-operating-model.pdf 'AWS Whitepaper') und dem [AWS Cloud Adoption Framework] (https://docs.aws.amazon.com/whitepapers/latest/overview-aws-cloud-adoption-framework/foundational-capabilities.html) und setzt deren Hauptprinzipien um.

Nuvibit ist darauf spezialisiert, die **Core Capabilities** einer **Cloud Foundation** in Unternehmen einzuführen.

Wir passen unsere Foundation Core Terraform Module auf Ihre Bedürfnisse an und versetzen Sie in die Lage, die **Foundation Capabilities** Ihren **Cloud Workload Development Teams** in einem hohen Reifegrad zur Verfügung zu stellen.

**[Kontaktieren](/contact/ 'Kontakt aufnehmen für mehr Infos!')** Sie uns für weitere Details..