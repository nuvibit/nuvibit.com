---
title: "Referenzarchitektur für AWS Multi-Account Kunden"
date: 2021-12-18T11:00:00+06:00
image: "images/blog/aws-multiaccount-reference-architecture/reference-org-architecture.png"
description: "In diesem Beitrag wird die Nuvibit Referenzarchitektur für Kunden mit einer AWS Multi-Account-Umgebung vorgestellt."
summary: "Wir stellen die Nuvibit Referenzarchitektur für Kunden mit einer AWS Multi-Account-Umgebung vor."
tags:
  - aws
  - foundation
duration: 5

draft: false
---
## Context

Kunden mit einer AWS Multi-Account-Umgebung werden schnell mit den damit verbundenen Herausforderungen konfrontiert.
Wie soll die Verantwortung für die Cloud auf die unterschiedlichen Organisationseinheiten übertragen werden?

Mit unserer Nuvibit-Referenzarchitektur bieten wir eine Lösung für diese Herausforderung.
Die Referenzarchitektur berücksichtigt und implementiert Empfehlungen und Richtlinien aus den folgenden von AWS empfohlenen Quellen:

\- [AWS Landing Zone](https://aws.amazon.com/de/solutions/implementations/aws-landing-zone/ 'AWS Landing Zone') and [AWS Control Tower](https://aws.amazon.com/de/controltower/ 'AWS Control Tower')<br/>
\- [Apply security services across your AWS organization](https://docs.aws.amazon.com/prescriptive-guidance/latest/security-reference-architecture/security-services.html 'Apply security services across your AWS organization')<br/>
\- [AWS Security Reference Architecture](https://docs.aws.amazon.com/prescriptive-guidance/latest/security-reference-architecture/architecture.html 'AWS Security Reference Architecture')<br/>
\- [Multi Account Network Architecture](https://docs.aws.amazon.com/managedservices/latest/userguide/malz-net-arch.html 'Multi Account Network Architecture')<br/>

Zusätzlich sind unsere Erfahrungen mit AWS Multi-Account-Umgebungen in diese Referenzarchitektur eingeflossen.

Der Fokus liegt auf den **Core Domains** der **Nuvibit Cloud Foundation**, die im Blogbeitrag **[Nuvibit Cloud Foundation Map](/blog/cloud-foundation-map 'Nuvibit Cloud Foundation Blog Post')** ausführlich behandelt werden.

![img](images/blog/aws-multiaccount-reference-architecture/foundation-core-domains.png)

## AWS Account Domains

In einer AWS Multi-Account-Umgebung sind nicht alle AWS-Accounts für denselben Zweck bestimmt.
Um den Überblick zu behalten, teilen wir die AWS-Accounts in drei Domänen ein:

\-**Foundation Core**<br/>
\-**Foundation Shared Service**<br/>
\-**Business Workload**<br/>

{{<table "table table-striped table-bordered">}}
| Domain | Beschreibung |
| ---   | :---  |
| **Foundation Core** | Accounts, die Kernkomponenten der Nuvibit Cloud Foundation beinhalten und vom Cloud Foundation Core Team(s) verwaltet werden. |
| **Foundation Shared Service** | Accounts, die gemeinsame Dienste und Plattformen hosten (Streaming Plattform, Data Lake, Analytics Plattform, API Management) und vom Cloud Foundation Shared Service Team(s) verwaltet werden. |
| **Business Workload** | Accounts, auf denen alle Komponenten der Business-Applikationen gehostet werden und die vom Cloud Workload Development Team(s) verwaltet werden. |
{{</table>}}
<br/>

Die folgende Grafik dient als Beispiel und gibt einen Überblick über die verschiedenen Accounts, kategorisiert nach Domänen:

![img](images/blog/aws-multiaccount-reference-architecture/aws-foundation-account-types.png)

Wir empfehlen, die folgenden **Foundation Core Accounts** und mindestens zwei Konten pro Business-Applikation einzurichten.
**Foundation Shared Service Accounts** sind optional und ob Sie diese benötigen, hängt von Ihren individuellen Anforderungen ab.

{{<table "table table-striped table-bordered">}}
| Domain | Account Typ | Beschreibung |
| ---   | :---  | :---  |
| Foundation Core | AWS Organizations Management | Verwaltung der [AWS Organization](https://aws.amazon.com/de/organizations/), der [Organisationseinheiten (OUs)](https://docs.aws.amazon.com/de_de/organizations/latest/userguide/orgs_manage_ous.html) und der [Service Control Policies (SCPs)](https://docs.aws.amazon.com/de_de/organizations/latest/userguide/orgs_manage_policies_scps.html). Abrechnung von Kosten der ganzen AWS Organization (Consolidated Billing) |
| Foundation Core | Core Account Lifecycle | Management der Erstellung, des Baselinings, und des Abbaus von AWS Accounts |
| Foundation Core | Core Security | Zusammenzug von [AWS Config](https://aws.amazon.com/de/config/), [AWS Security Hub](https://aws.amazon.com/de/security-hub/) und [Amazon GuardDuty](https://aws.amazon.com/de/guardduty/) Daten. <br/> Unsere Security Event Management Lösung [SEMPER](/products/semper) wird auch in diesem Account aufgebaut. |
| Foundation Core | Core Logging | Ablage und Archivierung von Logs. Direkter Zugriff wird eingeschränkt um die Integrität der Logs zu gewährleisten. |
| Foundation Core | Core Monitoring | Beinhaltet zentrale Monitoring Systeme (z.B. [AWS OpenSearch](https://aws.amazon.com/de/opensearch-service/), [Splunk](https://www.splunk.com/), usw.).<br/>Dieser Account wird vom Logging Account getrennt, um zu verhindern, dass Logs [manipuliert](https://capec.mitre.org/data/definitions/268.html) werden können. Die Integrität der Logs hat höchste Priorität und kann so am besten sichergestellt werden. |
| Foundation Core | Core Image Factory | Account um [Amazon Machine Image (AMI)](https://docs.aws.amazon.com/de_de/AWSEC2/latest/UserGuide/AMIs.html) zu bauen. AMIs werden in diesem Account gebaut und mit der AWS Organization geteilt. |
| Foundation Core | Core Networking | Beinhaltet die zentralen Netzwerk Komponenten ([Transit Gateway](https://aws.amazon.com/de/transit-gateway/), [Route53](https://aws.amazon.com/de/route53/), [Direct Connect](https://aws.amazon.com/de/directconnect/), [VPN](https://aws.amazon.com/de/vpn/)).<br/> **Optional:** [Shared VPCs](https://docs.aws.amazon.com/vpc/latest/userguide/vpc-sharing.html#vpc-sharing-share-subnet) für alle Accounts in der Organization. Damit kann erreicht werden, dass die Teams keine Änderungen an der Netzwerk Konfiguration machen können. |
| Foundation Shared Service | Shared Services | Shared Service Accounts beinhalten Plattformen oder Services, die von mehreren Business Workloads genutzt werden. Gute Beispiele sind Streaming Plattformen wie [Kafka](https://kafka.apache.org/) (z.B. [MSK](https://aws.amazon.com/msk/)), Data Lakes, [Active Directory](https://aws.amazon.com/directoryservice/) oder ein geteiltes [Kubernetes](https://kubernetes.io/de/docs/concepts/overview/what-is-kubernetes/) Cluster (z.B. [EKS](https://aws.amazon.com/eks/)).|
| Business Workload	| Business Workload | Wie Sie Ihre Business Workload Accounts strukturieren, überlassen wir ihnen. Wir empfehlen mindestens zwei Accounts pro Workload zu erstellen. Damit können produktive Workloads sehr einfach von nicht produktiven Workloads getrennt werden. Zusätzlich können so verschieden Rules und Policies (z.B. SCPs) für produktive und nicht produktive Accounts angewendet werden. |
{{</table>}}
<br/>

## Foundation Core Domain - Account Baseline

Die Capabilities der **Nuvibit Foundation Core Domain** bestehen typischerweise nicht nur aus den **Foundation Core Accounts** sondern setzen voraus, dass einige Komponenten in allen Accounts innerhalb der AWS Organization bereitgestellt werden.<br/>
Diese verteilten Komponenten nennen wir **Account Baseline**.<br/>
Die **Account Baseline** umfasst die Härtung der Accounts, Compliance und Security Policies und auch die Konfiguration, um die Accounts mit den jeweiligen **Foundation Core Accounts** zu verbinden.<br/><br/>
Die **Account Baseline** wird zentral verwaltet und in alle Accounts der AWS Organization ausgerollt.

![img](images/blog/aws-multiaccount-reference-architecture/aws-foundation-core.png)

Wir empfehlen dringend, alle für die **Foundation Core Capabilities** verwendeten Ressourcen über **[Infrastructure as Code](/faq/#iac 'What is Infrastructure as Code?')** bereitzustellen.
Aus Erfahrung setzen wir hierfür ausschliesslich auf [Terraform](https://www.terraform.io/intro/index.html 'Introduction to Terraform').
<br/><br/>

## Unsere Dienstleistung

Nuvibit ist darauf spezialisiert, **Cloud Foundation Capabilities** in Unternehmen einzuführen.

Wir passen unseren **Foundation Blueprint** an Ihre Bedürfnisse an und befähigen Sie, **Foundation Capabilities** mit einem hohen Reifegrad für Ihre **Cloud Workload Development Teams** bereitzustellen.

**[Kontaktieren Sie uns](/contact/ 'Kontaktieren Sie uns für weitere Informationen.')** für weitere Informationen.