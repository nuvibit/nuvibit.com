---
title: "Nuvibit Account Vending"
date: 2022-01-01T11:00:00+06:00
image: "images/blog/account-vending/account-vending-illustration.png"
description: "In diesem Beitrag wird das Account Vending der Nuvibit Foundation Blueprint erklärt."
summary: "In einem Multi Account Environment ist es wichtig, dass Accounts automatisiert erstellt, mit einer Baseline versehen und verwaltet werden können. In diesem Blog Beitrag wird die Account Vending Lösung des Nuvibit Foundation Blueprints erklärt, die genau das tut."
tags:
  - aws
  - foundation
duration: 5
draft: false
---
## Context

Wenn Ihre AWS Umgebung grösser wird, entsteht sofort die Anforderung, dass neue AWS Account automatisiert, wiederholbar, sicher und compliant erstellt werden können.
Der [Nuvibit Cloud Foundation Blueprint](products/foundation-blueprint) beinhaltet unsere Account Vending Lösung, die genau das tut.

## GitOps by design
Wir sind überzeugt, dass [GitOps](faq/#gitops 'What is GitOps?') die beste Option für Mitarbeiter ist, neue, technische Ressourcen zu bestellen. Darum wurde die Lösung so gebaut, dass Accounts mit einem simplen Pull Request, der alle relevanten Informationen für den Account enthält, bestellt werden.
Dank dieser Architektur muss kein neues Tool eingeführt werden und die bestehenden Benachrichtigungskanäle und Review Prozesse können weiter Verwendet werden.
```
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
  aws-c1-0001 = {
    title         = "marketing application - nonprod"
    account_owner = "max.muster@customer1.com"
    tenant        = "marketing"
    environment   = "nonprod"
  }
```
Jeder Block beschreibt einen Account. Um einen neuen Account zu erstellen wird per Pull Request ein neuer Block hinzugefügt. Das Team, dass für die Cloud Foundation zuständig ist, kann diese Pull Requests wie gewohnt reviewen und im Anschluss Freigeben oder Ablehnen.

Die Attribute in diesem Beispiel sind obligatorisch. Sie werden verwendet, um den Account der richtigen [AWS Organizations OU](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_ous.html) zuzuweisen. Diese Liste kann selbstverständlich mit den Attributen erweitert werden, die für Ihre Organisation wichtig sind (z.B. Kostenstelle, Team Name, Kostenverantwortlicher, etc).
Alle Attribute werden als Tags des neuen Accounts persistiert und können im [IaC Code](faq/#iac 'What is Infrastructure as Code?') als Variablen verwendet werden.

## How it works

Das Account Vending kann in vier Stufen unterteilt werden.

![img](images/blog/account-vending/account-vending-diag.png)
<br/>
{{<table "table table-striped table-bordered">}}
| Stage | Description |
| ---   | :---  |
| 1. Pull Request | Der User erstellt den [Pull Request](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests) in dem Account Inventory Repository mit einem neuen Account Block. Der Pull Request wird von dem Cloud Foundation Team reviewed und freigegeben. |
| 2. Erstellen des Accounts | Der Merge Commit triggert Terraform. Der neue Account wird erstellt, und zu AWS SSO hinzugefügt. Zusätzlich wird ein neues Repository und eine [CI/CD](faq/#cicd 'What is CI/CD?') Pipeline erstellt, mit der später die IaC Templates der Account User deployed werden können. |
| 3. Account Konfiguration | Nicht alles kann via Terraform deployed und konfiguriert werden, da der Terraform Support fehlt. Um diese Fälle abzudecken verwenden wir [AWS Step Functions](https://aws.amazon.com/step-functions/?step-functions.sort-by=item.additionalFields.postDateTime&step-functions.sort-order=desc). <br/>Die Step Function werden vom CloudTrail Event getriggert, der vom Erstellen des Accounts ausgelöst wird.<br/>In unserem Beispiel haben wir drei Step Functions deployed:<br/>**- setup account**: Löscht die default VPCs und alle dazugehörigen Ressourcen<br/>**- create email alias**: Erstellt den E-Mail Alias in Microsoft Exchange, der als Root Mail verwendet wurde<br/>**- add account to baseline**: Fügt den Account im Global Baseline Repo hinzu.| 
|4. Global Baseline | Der Commit im Global Baseline Repository triggert die Pipeline der Global Baseline. Dadurch wird die Account Baseline im neu erstellten Account ausgerollt. Zusätzlich werden die Core Komponenten der Foundation aktualisiert, so dass sie mit den neuen Account interagieren.<br/>Wenn Sie mehr über die Global Baseline und ihre Komponenten wissen wollen, lesen sie unser Blog Beitrag über die [Referenzarchitektur für AWS Multi-Account Kunden](blog/aws-multiaccount-reference-architecture)|
{{</table>}}
<br/>

## Customized to fit your environment
Uns ist bewusst, dass die Toolchain in jeder Firma eine individuelle Entscheidung ist. Es ist darum essentiell, dass das Account Vending **in die bestehende Toolchain passt**. So wird die Lernkurve der Teams möglichst stark reduziert und es müssen keine neuen Tools eingeführt werden.
Genau darum haben wir die Architektur der Account Vendings so offen wie möglich gestaltet.<br/><br/>
Die [CI/CD](faq/#cicd 'What is CI/CD?') Workflows können ebenfalls mit den Tools implementiert werden, die Sie bevorzugen (z.B Jenkins, Bamboo, Gitlab, CircleCI, Github Action, etc). Auch die Git Lösung kann beliebig ausgetauscht werden (Github, GitLab, Bitbucket, etc).<br/><br/> 
Wir empfehlen wo immer möglich Terraform für das Deployment und die Konfiguration von Ihren AWS Accounts und allen Umsystemen zu verwenden. Wenn Terraform ihre Anforderungen nicht unterstützt können wir Sie bei der Implementation in einer Step Function unterstützen.
Wenn Sie weder [Terraform Cloud](https://www.terraform.io/cloud) noch [Terraform Enterprise](https://www.terraform.io/enterprise) verwenden wollen, können die Workflows auch mit der Community Edition von Terraform und dem [CI/CD](faq/#cicd 'What is CI/CD?') Tool Ihrer Wahl implementiert werden.

## Unsere Dienstleistung

Nuvibit ist darauf spezialisiert, **Cloud Foundation Capabilities** in Unternehmen einzuführen.

Wir passen unseren **[Foundation Blueprint](products/foundation-blueprint "Foundation Blueprint Produktseite")** an Ihre Bedürfnisse an und befähigen Sie, **Foundation Capabilities** mit einem hohen Reifegrad für Ihre **Cloud Workload Development Teams** bereitzustellen.

**[Kontaktieren Sie uns](/contact/ 'Kontaktieren Sie uns für weitere Informationen.')** für weitere Informationen.