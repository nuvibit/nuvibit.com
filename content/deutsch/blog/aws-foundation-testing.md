---
title: "Ihnen fehlt vermutlich eine AWS Umgebung..."
date: 2021-12-19T11:00:00+06:00
image: "images/blog/aws-foundation-testing/foundation-testing.png"
description: "In diesem Beitrag wird die Nuvibit Cloud Foundation IaC CI/CD Referenz Architektur vorgestellt."
summary: "Foundation-Services wie Vending, Security, Logging, Monitoring, Image Factory und Networking können in einer produktiven AWS Umgebung nicht ausreichend getestet werden, da diese nicht isoliert werden können oder einen direkten Einfluss auf alle Workloads haben können."
duration: 5
draft: false
---
## Kontext

Was ist eigentlich eine **Cloud Foundation** und warum sollte ich mich dafür interessieren?

Bevor ein Workload in die Public Cloud verlagert werden kann, müssen viele Aspekte koordiniert werden.
Es gibt **technische Aspekte** wie Connectivity oder Security und **organisatorische Aspekte** wie Finance oder Operations.
Alle diese Elemente sind Teil Ihrer individuellen Cloud Foundation, die den Kurs für künftige Anwendungen vorgibt.

Jeder Cloud-Kunde hat bereits zu einem gewissen Grad eine eigene Cloud Foundation, aber wenn diese Foundation nicht von Anfang an aktiv geformt wird, kann es schnell zu erheblichen Engpässen kommen.

Nehmen wir beispielsweise an, dass wir mit dem von AWS standardmäßig bereitgestellten VPC begonnen haben.
Zu einem späteren Zeitpunkt unserer Cloud Journey möchten wir ein VPN vom Firmensitz zu unserem VPC einrichten und stossen auf überlappende Netzwerkbereiche.
Anstatt uns auf unsere Workloads zu konzentrieren, verschwenden wir nun wertvolle Zeit mit der Behebung von Problemen, die wir hätten vermeiden können, wenn wir von Anfang an mehr in die Foundation investiert hätten.

Eine sichere und skalierbare Cloud Foundation wird Ihre Cloud Journey erheblich beschleunigen und ist der Schlüssel zum Erfolg.
## Foundation Testing

Die zuverlässige und sichere Bereitstellung von Workloads in einer **Multi-Account AWS Umgebung** erfordert eine solide und getestete Foundation.
Die meisten Workloads können in derselben [AWS Organization](https://aws.amazon.com/de/organizations/) für Produktion und Testing betrieben werden, da sie leicht voneinander getrennt werden können.
Foundation-Services wie Vending, Security, Logging, Monitoring, Image Factory und Networking können in einer produktiven AWS Umgebung nicht ausreichend getestet werden, da diese nicht isoliert werden können oder einen direkten Einfluss auf alle Workloads haben können.

Wie kann beispielsweise ein Netzwerk-Failover in einer produktiven AWS Organization realistisch getestet werden, ohne die Workloads zu beeinträchtigen?
Oder stellen Sie sich eine vorgesehene Anpassung der Organisationsstruktur oder der [Service-Kontrollrichtlinien (SCP)](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_scps.html) vor.

Gründliche Tests sind hier besonders ratsam, da sich ein Fehler sofort auf alle Ihre Cloud-Workloads auswirken kann.

Um aussagekräftige Tests durchführen zu können, muss die Cloud Foundation-Testumgebung so nah wie möglich an der Produktionsumgebung sein.
Dies ist der entscheidende Punkt, weshalb wir eine zusätzliche AWS Organization speziell für **Foundation Testing** empfehlen.

![img](images/blog/aws-foundation-testing/foundation-environments.png)

## Referenz Architektur

Die Verwendung von Infrastructure as Code macht das Verwalten einer zusätzlichen AWS Organization nahezu mühelos.
Das Herzstück beider Umgebungen sind **Infrastructure as Code Module**, die jeweils Foundation Core Capabilities darstellen. 
Diese Module sind wiederverwendbare Komponenten, die mit umgebungsspezifischen Parametern bestückt werden können.

Jede Foundation Core Capability erhält ein eigenes **Pipeline Code Repository** für jede Umgebung, in der die Infrastructure as Code Module aufgerufen werden.
Jedes dieser Repositories verfügt über eine separate **CI/CD-Pipeline**, die für die Bereitstellung der Infrastruktur als Code Definition in der entsprechenden Foundation Testumgebung oder Produktionsumgebung verantwortlich ist.

![img](images/blog/aws-foundation-testing/aws-foundation-cicd-reference-architecture-highres.png)

## Fazit

Wir liefern hier die Vorlage, aber der Feinschliff besteht darin, diese genau auf Ihre Anforderungen und Vorlieben abzustimmen, um den größten Nutzen daraus zu ziehen.
<br/><br/>

### Unsere Dienstleistung

Nuvibit ist darauf spezialisiert, **Cloud Foundation Capabilities** in Unternehmen einzuführen.

Wir passen unseren **Foundation Blueprint** an Ihre Bedürfnisse an und befähigen Sie, **Foundation Capabilities** mit einem hohen Reifegrad für Ihre **Cloud Workload Development Teams** bereitzustellen.

**[Kontaktieren Sie uns](/contact/ 'Kontaktieren Sie uns für weitere Informationen.')** für weitere Informationen.