---
title: "AWS Account Lifecycle Manager"
date: 2022-01-05T11:00:00+06:00
image: "images/blog/aws-account-lifecycle-manager/account-lifecycle-illustration.png"
description: "In diesem Beitrag wird das Account Lifecycle Management des Nuvibit Foundation Blueprint erklärt."
summary: "In einem Multi Account Environment ist es wichtig, dass Accounts automatisiert erstellt, mit einer Baseline versehen, verwaltet und recycled werden können. In diesem Blog Beitrag wird unsere Lifecycle Management Lösung für AWS Accounts des Nuvibit Foundation Blueprints erklärt mit genau dieser Funktionalität."
tags:
  - aws
  - foundation
duration: 5
draft: false
---
## Context

Sobald Ihre AWS Umgebung wächst wird, entsteht sofort die Anforderung, dass neue AWS Account automatisiert, wiederholbar, sicher und compliant ausgerollt werden können.
Der [Nuvibit Cloud Foundation Blueprint](products/foundation-blueprint) beinhaltet unseren Account Lifecycle Manager mit genau dieser Funktionalität. Das Account Lifecycle Management rollt die Accounts nicht nur aus, sondern hält sie auch aktuell und kann die Accounts bei Bedarf recyclen.

## GitOps by design
Wir sind überzeugt, dass [GitOps](faq/#gitops 'What is GitOps?') die beste Option für Mitarbeiter ist, um neue, technische Ressourcen zu bestellen. Aus diesem Grund wurde die Lösung so gebaut, dass Accounts mit einem simplen Git Pull Request bestellt werden, welcher alle notwendigen Informationen enthält.
Dank dieser Architektur muss kein neues Tool eingeführt werden; die bestehenden Benachrichtigungskanäle und Review Prozesse können weiterverwendet werden.

```terraform {linenos=table,hl_lines=[],linenostart=50}
aws-c1-vending = {
    title         = "vending account"
    account_owner = "max.muster@customer1.com"
    tenant        = "core"
    environment   = "prod"
  }
  aws-c1-logging = {
    title         = "Logging account"
    account_owner = "max.muster@customer1.com"
    tenant        = "core"
    environment   = "prod"
  }
  aws-c1-security = {
    title         = "security account"
    account_owner = "max.muster@customer1.com"
    tenant        = "core"
    environment   = "prod"
  }
  aws-c1-OOO1 = {
    title         = "marketing application - nonprod"
    account_owner = "max.muster@customer1.com"
    tenant        = "marketing"
    environment   = "nonprod"
  }
```
Jeder Konfigurations Block beschreibt einen Account. Um einen neuen Account zu erstellen wird per Pull Request ein neuer Konfigurations Block hinzugefügt. Das Team, welches für die Cloud Foundation zuständig ist, kann diese Pull Requests wie gewohnt prüfen und im Anschluss freigeben oder ablehnen.

Der **Account Lifecycle Manager** entscheidet anhand der Attribute welcher [AWS Organizations Unit (OU)](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_ous.html) der Account zuzuweisen ist. Diese Liste kann selbstverständlich mit den Attributen erweitert werden, die für Ihre Organisation wichtig sind (z.B. Kostenstelle, Team Name, DNS Zone, Kostenverantwortlicher, etc). Der **Account Lifecycle Manager** kann diese Attribute auch zu einem späteren Zeitpunkt updaten und den Acccount in eine andere OU schieben, aktualisierten Netzwerkressourcen ausrollen und beispielsweise einen neuen Account Owner hinterlegen.<br/>
Alle Attribute werden als Tags des neuen AWS Accounts persistiert und können im [IaC Code](faq/#iac 'What is Infrastructure as Code?') als Variablen verwendet werden.

## Account Rollout

Der Rollout eines neuen Accounts kann in vier Phasen unterteilt werden:

![img](images/blog/aws-account-lifecycle-manager/rollout-diag-highres.png)
<br/>
{{<table "table table-striped table-bordered">}}
| Phase | Beschreibung |
| ---   | :---  |
| <span style="color: #009900">**1. Pull Request**</span> | Der User erstellt den [Pull Request](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests) in dem Account Inventory Repository welcher einen neuen Account Block beinhaltet. Der Pull Request wird von dem Cloud Foundation Team gereviewed und freigegeben. |
| <span style="color: #0008FF">**2. Account Erstellung**</span> | Der Merge Commit triggert Terraform. Der neue Account wird erstellt und zu AWS SSO hinzugefügt. Zusätzlich wird ein neues Repository und eine [CI/CD](faq/#cicd 'What is CI/CD?') Pipeline erstellt, mit der später die IaC Templates der Account User deployed werden können. <br/> In diesem Beispiel verwenden wir Github für die Code-Repositories und Terraform Cloud für CI/CD. |
| <span style="color: #009999">**3. Account Konfiguration**</span> | Nicht alles kann via Terraform deployed und konfiguriert werden, da hierzu der Terraform Support noch fehlt. Um diese Fälle abzudecken verwenden wir [AWS Step Functions](https://aws.amazon.com/step-functions/?step-functions.sort-by=item.additionalFields.postDateTime&step-functions.sort-order=desc). <br/>Die Step Function werden vom CloudTrail Event getriggert, der durch die Erstellung des Accounts ausgelöst wird.<br/>In unserem Beispiel haben wir drei Step Functions deployed:<br/>**- setup account**: Löscht die default VPCs und alle dazugehörigen Ressourcen<br/>**- create email alias**: Erstellt den E-Mail Alias in Microsoft Exchange, der als Root Mail verwendet wurde<br/>**- add account to baseline**: Fügt den Account im Global Baseline Repo hinzu.|
| <span style="color: #FF00FF">**4. Global Baseline**</span> | Der Commit im Global Baseline Repository triggert die Pipeline der Global Baseline. Dadurch wird die Account Baseline im neu erstellten Account ausgerollt. Zusätzlich werden die Core Komponenten der Foundation aktualisiert, so dass diese mit den neuen Account interagieren.<br/>Wenn Sie mehr über die Global Baseline und ihre Komponenten wissen wollen, lesen sie unser Blog Beitrag über die [Referenzarchitektur für AWS Multi-Account Kunden](blog/aws-multiaccount-reference-architecture).|
{{</table>}}
<br/>

## Account Recycling
AWS bietet leider keine einfache Lösung um Accounts zu löschen. Um diese Einschränkung zu umgehen, haben wir das Account Recycling implementiert.
Um einen AWS Account zu recyclen reicht es, im Account Inventory Repository das Attribut **recycled** zu aktivieren:

```terraform {linenos=table,hl_lines=[6],linenostart=50}
 aws-c1-0001 = {
    title         = "marketing application - nonprod"
    account_owner = "max.muster@customer1.com"
    tenant        = "marketing"
    environment   = "nonprod"
    recycled      = "true"
  }
```

Das Recycling wird in fünf Phasen ausgeführt:

![img](images/blog/aws-account-lifecycle-manager/recycling-diag-highres.png)

<br/>
{{<table "table table-striped table-bordered">}}
| Phase | Beschreibung |
| ---   | :---  |
| <span style="color: #CC6600">**1. Account Cleanup**</span> | Der User muss per [terraform destroy](https://www.terraform.io/cli/commands/destroy "What is terraform destroy?") in seinem Workspace durchführen um alle Ressourcen zu löschen, die er von sich aus erstellt hat.
| <span style="color: #009900">**2. Pull Request**</span> | Der User aktiviert das **recycled** Attribut (true) in seinem Account per Pull Request.
| <span style="color: #0008FF">**3. Account Recycling**</span> | Terraform löscht die Account Pipeline, das Account Repository und deaktiviert den Account in AWS SSO. Der Account wird zusätzlich mit dem recycled Tag versehen. |
| <span style="color: #009999">**4. Baseline**</span> | Die Änderung an den Account Tags löst ein CloudTrail Event aus, welches wiederum die Step Function triggert, die den Account aus dem Global Baseline Repository löscht.|
| <span style="color: #FF00FF">**5. Global Baseline**</span> | Aufgrund des Commits im Global Baseline Repository startet die Pipeline der global Baseline. Die Account Baseline wird aus dem Account gelöscht und die Core Komponenten der Foundation werden aktualisiert, so dass der Account keinen Zugriff mehr hat.<br/>Wenn Sie mehr über die Global Baseline und ihre Komponenten wissen wollen, lesen sie unser Blog Beitrag über die [Referenzarchitektur für AWS Multi-Account Kunden](blog/aws-multiaccount-reference-architecture).|
{{</table>}}
<br/>

Das Einzige, was bleibt, ist eine leere Hülle des Kontos, die keine Kosten verursacht.<br/><br/>

Sobald ein neues Konto benötigt wird, kann das recycelte Konto wiederverwendet werden, indem das Kennzeichen "recycelt" entfernt und die Attribute des Kontos aktualisiert werden:

```terraform {linenos=table,hl_lines=[],linenostart=50}
  aws-c1-OOO1 = {
    title         = "sales application - nonprod"
    account_owner = "john.doe@customer1.com"
    tenant        = "sales"
    environment   = "nonprod"
  }
```

## Customized to fit your environment
Uns ist bewusst, dass die Toolchain in jeder Firma eine individuelle Entscheidung ist. Es ist darum essentiell, dass der Account Lifecycle Manager **in die bestehende Toolchain passt**. So wird die Einstiegshürde für die Teams möglichst reduziert und es müssen keine neuen Tools eingeführt werden.
Genau darum haben wir die Architektur des Account Lifecycle Managers so flexibel wie möglich gestaltet.<br/>

Die [CI/CD](faq/#cicd 'What is CI/CD?') Workflows können ebenfalls mit den Tools implementiert werden, die Sie bevorzugen (z.B Jenkins, Bamboo, Gitlab, CircleCI, GitHub Action, etc). Auch die Git Lösung kann beliebig ausgetauscht werden (GitHub, GitLab, Bitbucket, etc).<br/><br/>

Wir empfehlen wo immer möglich Terraform für das Deployment und die Konfiguration von Ihren AWS Accounts und allen Umsystemen zu verwenden. Wenn Terraform ihre Anforderungen nicht unterstützt können wir Sie bei der Implementation in einer Step Function unterstützen.
Wenn Sie weder [Terraform Cloud](https://www.terraform.io/cloud) noch [Terraform Enterprise](https://www.terraform.io/enterprise) verwenden wollen, können die Workflows auch mit der Community Edition von Terraform und dem [CI/CD](faq/#cicd 'What is CI/CD?') Tool Ihrer Wahl implementiert werden.

## Unsere Dienstleistung

Nuvibit ist darauf spezialisiert, **Cloud Foundation Capabilities** in Unternehmen einzuführen.

Wir passen unseren **[Foundation Blueprint](products/foundation-blueprint "Foundation Blueprint Produktseite")** an Ihre Bedürfnisse an und befähigen Sie **Foundation Capabilities** mit einem hohen Reifegrad für Ihre **Cloud Workload Development Teams** bereitzustellen.

**[Kontaktieren Sie uns](/contact/ 'Kontaktieren Sie uns für weitere Informationen.')** für weitere Informationen.