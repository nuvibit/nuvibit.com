---
title: "AWS Account Lifecycle"
date: 2022-01-05T11:00:00+06:00
image: "images/blog/aws-account-lifecycle/account-lifecycle-illustration.png"
description: "In diesem Blogbeitrag stellen wir unsere Lifecycle-Management-Lösung für AWS Accounts vor."
summary: "In einer AWS Multi-Account Umgebung ist es wichtig, dass AWS Accounts auf automatisierte Art und Weise erstellt, verwaltet und recycelt werden können. In diesem Blogbeitrag stellen wir unsere Lifecycle-Management-Lösung für AWS Accounts vor."
tags:
  - aws
  - foundation
  - lifecycle
duration: 5
draft: false
---
## Kontext
Sobald Ihre AWS Umgebung wächst, entsteht meist der Wunsch und die Anforderung, sichere und konforme AWS Accounts auf automatisierte Weise bereitzustellen.
Der [Nuvibit Cloud Foundation Blueprint](solutions/foundation-blueprint) beinhaltet unseren **Account Lifecycle** mit genau dieser Funktionalität. Unsere Lösung ist nicht nur in der Lage, neue AWS Accounts bereitzustellen, sondern hält sie auch auf dem neuesten Stand und recycelt sie, wenn sie nicht mehr benötigt werden (eine typische Anforderung für experimentelle Workloads).

## GitOps by design
Wir sind überzeugt, dass [GitOps](faq/#gitops 'What is GitOps?') die beste Methode für Mitarbeiter ist, um neue technische Ressourcen zu bestellen.
Aus diesem Grund haben wir unsere Lösung so konzipiert, dass ein neuer AWS Account mit einem einfachen Pull Request bestellt werden kann, der die erforderlichen Informationen enthält.

```terraform {linenos=table,hl_lines=[],linenostart=50, noClasses=false}
  aws-c1-lifecycle = {
    title         = "lifecycle account"
    account_owner = "max.muster@customer1.com"
    tenant        = "core"
    environment   = "prod"
  }
  aws-c1-logging = {
    title         = "logging account"
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

Jeder AWS Account wird in einem eigenen Konfigurations-Block definiert.
Das Team, welches für die Cloud Foundation zuständig ist, kann diese Pull Requests sorgfältig prüfen und im Anschluss freigeben oder ablehnen.

Der **Account Lifecycle** entscheidet anhand der Attribute welche [AWS Organizations Unit (OU)](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_ous.html) ein Account zugewiesen wird. 
Die Liste kann selbstverständlich mit den Attributen erweitert werden, die für Ihre Organisation wichtig sind (z.B. Kostenstelle, Team Name, DNS Zone, Kostenverantwortlicher, etc). 
Der **Account Lifecycle** kann diese Attribute auch zu einem späteren Zeitpunkt aktualisieren, den Account in eine andere OU schieben, die Bereitstellung von Netzwerkressourcen einleiten und beispielsweise einen neuen Account Owner hinterlegen.<br/>
Alle diese Attribute werden als Tags des AWS Accounts gespeichert und können in Ihrer [IaC](faq/#iac 'What is Infrastructure as Code?') Definition aufgerufen werden.

## Account Rollout
Der Rollout eines neuen AWS Accounts kann in vier Phasen unterteilt werden:

![img](images/blog/aws-account-lifecycle/rollout-diag-highres.png)
<br/>
{{<table "table table-striped table-bordered">}}
| Phase | Beschreibung |
| ---   | ---  |
| <span class="inline-color-009900">**1. Pull Request**</span> | Der User erstellt einen [Pull Request](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests) im Account Inventory Repository welcher einen neuen Account Block beinhaltet. Der Pull Request wird von dem Cloud Foundation Team überprüft und freigegeben. |
| <span class="inline-color-0008FF">**2. Account Erstellung**</span> | Terraform wird durch den Merge Commit angestossen. Der neue Account wird erstellt und zu AWS SSO hinzugefügt. Zusätzlich wird ein neues Repository und eine [CI/CD](faq/#cicd 'What is CI/CD?') Pipeline erstellt, mit der später die Workload-Ressourcen für den AWS Account bereitgestellt werden können. <br/> In diesem Beispiel verwenden wir Github für die Code-Repositories und Terraform Cloud für CI/CD. |
| <span class="inline-color-009999">**3. Account Konfiguration**</span> | Nicht alles kann via Terraform deployed und konfiguriert werden, da hierzu der Terraform Support noch fehlt. Um diese Fälle abzudecken, verwenden wir [AWS Step Functions](https://aws.amazon.com/step-functions/?step-functions.sort-by=item.additionalFields.postDateTime&step-functions.sort-order=desc). <br/>Der AWS Step Functions workflow wird von einem CloudTrail Event angestossen, das durch die Erstellung des Accounts ausgelöst wird.<br/>In unserem Beispiel haben wir drei Schritte deployed:<br/>**- setup account**: Löscht das default VPC und alle dazugehörigen Ressourcen im neu erstellten Account<br/>**- create email alias**: Erstellt den E-Mail Alias in Microsoft Exchange, der als Account Root Mail verwendet wird<br/>**- add account to baseline**: Fügt den Account im Global Baseline Repo hinzu.|
| <span class="inline-color-FF00FF">**4. Global Baseline**</span> | Der Commit im Global Baseline Repository stösst die Pipeline der Global Baseline an. Dadurch wird die Account Baseline im neu erstellten Account ausgerollt. Zusätzlich werden die zentralen Komponenten der Foundation aktualisiert, so dass diese mit den neuen Account interagieren.<br/>Wenn Sie mehr über die Global Baseline und ihre Komponenten wissen wollen, lesen Sie unseren Blogbeitrag über die [Referenzarchitektur für AWS Multi-Account Kunden](blog/aws-multiaccount-reference-architecture).|
{{</table>}}
<br/>

## Account Recycling
AWS bietet keine einfache Lösung, um Accounts zu löschen. 
Um diese Einschränkung zu umgehen, haben wir ein Account Recycling implementiert.
Um einen AWS Account zu recyclen, reicht es, im Account Inventory Repository das Attribut **recycled** zu aktivieren:

```terraform {linenos=table,hl_lines=[6],linenostart=50, noClasses=false}
 aws-c1-0001 = {
    title         = "marketing application - nonprod"
    account_owner = "max.muster@customer1.com"
    tenant        = "marketing"
    environment   = "nonprod"
    recycled      = "true"
  }
```

Das Recycling wird in fünf Phasen ausgeführt:
![img](images/blog/aws-account-lifecycle/recycling-diag-highres.png)

<br/>
{{<table "table table-striped table-bordered">}}
| Phase | Beschreibung |
| ---   | ---  |
| <span class="inline-color-CC6600">**1. Account Cleanup**</span> | Der User muss mit [terraform destroy](https://www.terraform.io/cli/commands/destroy "What is terraform destroy?") in seinem Workspace alle Ressourcen löschen, die er von sich aus erstellt hat.
| <span class="inline-color-009900">**2. Pull Request**</span> | Der User aktiviert das **recycled** Attribut (true) in seinem Account per Pull Request.
| <span class="inline-color-0008FF">**3. Account Recycling**</span> | Terraform löscht die Account Pipeline, das Account Repository und deaktiviert den Account in AWS SSO. Der Account wird zusätzlich mit dem recycled Tag versehen. |
| <span class="inline-color-009999">**4. Baseline**</span> | Die Änderung an den Account Tags löst ein CloudTrail Event aus, das wiederum die Step Function startet, die den Account aus dem Global Baseline Repository löscht.|
| <span class="inline-color-FF00FF">**5. Global Baseline**</span> | Aufgrund des Commits im Global Baseline Repository startet die Pipeline der global Baseline. Die Account Baseline wird aus dem Account gelöscht und die zentralen Komponenten der Foundation werden aktualisiert, so dass der Account keinen Zugriff mehr hat.<br/>Wenn Sie mehr über die Global Baseline und ihre Komponenten wissen wollen, lesen Sie unseren Blogbeitrag über die [Referenzarchitektur für AWS Multi-Account Kunden](blog/aws-multiaccount-reference-architecture).|
{{</table>}}
<br/>

Das Einzige, was bleibt, ist eine leere Hülle des AWS Accounts, die keine Kosten verursacht.<br/>

Sobald ein neuer Account benötigt wird, kann ein recycelter Account wiederverwendet werden, indem das Kennzeichen **recyceled** entfernt und die Attribute des Accounts aktualisiert werden:

```terraform {linenos=table,hl_lines=[],linenostart=50, noClasses=false}
  aws-c1-OOO1 = {
    title         = "sales application - nonprod"
    account_owner = "john.doe@customer1.com"
    tenant        = "sales"
    environment   = "nonprod"
  }
```

## Massgeschneidert für Ihre Umgebung
Uns ist bewusst, dass die Toolchain in jeder Firma eine individuelle Entscheidung ist. 
Es ist essentiell, dass der Account Lifecycle **in die bestehende Toolchain passt**. 
Dadurch wird die Einstiegshürde für die Teams auch deutlich verringert.
Aus diesem Grund haben wir unsere Lösung so konzipiert, dass sie extrem flexibel ist.<br/>

Die [CI/CD](faq/#cicd 'What is CI/CD?') Workflows können mit den Tools Ihrer Wahl implementiert werden (z.B Jenkins, Bamboo, Gitlab, CircleCI, GitHub Action, AWS CodeStar etc). Auch der Git Provider kann beliebig ausgetauscht werden (GitHub, GitLab, Bitbucket, etc).<br/><br/>

Wir empfehlen wo immer möglich Terraform für das Bereitstellung und die Konfiguration Ihrer AWS Accounts und allen Umsystemen zu verwenden. 
Wenn Sie weder [Terraform Cloud](https://www.terraform.io/cloud) noch [Terraform Enterprise](https://www.terraform.io/enterprise) verwenden wollen, können die Workflows auch mit der Community Edition von Terraform und dem [CI/CD](faq/#cicd 'What is CI/CD?') Tool Ihrer Wahl implementiert werden.

## Unsere Dienstleistung
Nuvibit ist darauf spezialisiert, **Cloud Foundation Capabilities** in Unternehmen einzuführen.

Wir passen unseren **[Foundation Blueprint](solutions/foundation-blueprint "Foundation Blueprint Produktseite")** an Ihre Bedürfnisse an und befähigen Sie **Foundation Capabilities** mit einem hohen Reifegrad für Ihre **Cloud Workload Development Teams** bereitzustellen.

**[Kontaktieren Sie uns](/contact/ 'Kontaktieren Sie uns für weitere Informationen.')** für weitere Informationen.