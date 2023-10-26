---
title: "SEMPER bei RWE - Energiegeladene Verwaltung von AWS Security Findings"
date: 2023-10-12T11:00:00+06:00
image: "images/customers/rwe_logo2.png"

# meta description
description : "Nuvibit SEMPER hilft RWE, ihre Sicherheit auf effiziente Weise zu verwalten."

# button link
button_link: "#"

draft: false
---

## Situationsübersicht

[RWE](https://https://www.rwe.com//) ist ein weltweit führendes Energieunternehmen, bekannt für die Produktion und Verteilung von konventioneller und erneuerbarer Energie. RWE ist in verschiedenen Regionen tätig und hat eine starke Präsenz in Europa, Nordamerika und Asien.
RWE verwaltet eine komplexe AWS Multi-Account Konfiguration mit rund 200 AWS-Accounts über vier AWS-Regionen, die von diversen Entwicklungsteams genutzt werden. Sie legen grossen Wert auf die digitale Sicherheit und integrieren AWS-Dienste wie AWS Config, AWS Security Hub und Amazon GuardDuty. Ihr Security Operations Center verarbeitet jede Woche einen enormen Datenfluss knapp 1 Milliarde AWS CloudTrail-Ereignisse, die in ihrem SIEM-System aufschlagen.

### Herausforderung

Das SOC-Team stand vor der Herausforderung, die grosse Anzahl an AWS-Accounts und die damit verbundenen zahlreichen Security Findings effizient nach ihrer Wichtigkeit zu priorisieren und zu bearbeiten.
Viele Findings bezogen sich auf akzeptierte Risiken, was die Aufgabe noch zeitaufwändiger machte. Um dieses Problem zu lösen, wollte RWE die AWS-Accounts auf der Grundlage ihrer Sicherheitsstufe (z. B. Produktion, Nicht-Produktion, Abteilungen) in Gruppen einteilen und das Finding um wesentliche Informationen  wie den Verantwortlichen oder den Sicherheitsstatus des Source-Accounts ergänzen.
Die Automatisierung war ein wichtiges Ziel für RWE. Damit sollen neue Regeln in Subsets von Accounts ausgerollt, automatisierte Aktionen definiert und spezifische Event Filter angewendet werden können. Darüber hinaus legte RWE grossen Wert darauf, dass alle Konfigurationen sowohl auditierbar als auch revisionssicher gestaltet sind, um den unternehmensspezifischen Compliance-Anforderungen gerecht zu werden.

## Unsere Lösung: SEMPER

RWE entschied sich, unsere serverless Lösung **[SEMPER](/solutions/semper 'Produktseite!')** in ihrer AWS-Organisation einzuführen.

### SEMPER-Architektur

Durch [GitOps](faq/#gitops 'Was ist GitOps?') ist der Kunde in der Lage, Sicherheitsrichtlinien ([Dokumentation zu SEMPER-Richtlinien](https://github.com/nuvibit/semper-policy-repo-sample/wiki/10-SEMPER-Policies)) vorzugeben, die automatisch den Lebenszyklus ihrer AWS Security Findings verwalten.

SEMPER wird vollständig in der Umgebung des Kunden betrieben.

![Architekturdiagramm](images/solutions/SEMPER-Flow.png)

1. **Configuration**: Gezielte Bereitstellung von AWS Config-, AWS EventBridge-Regeln und AWS Security Hub Controls.
2. **Processing**: Anreichern und Filtern von AWS Security Findings.
3. **Post-Processing**: Archivierung und weitere Workflow-Automatisierung (Alarmierung, Auto-Remediation).

### Ergebnisse: Qualitativ

- **Schnelle Umsetzung von Richtlinien**: Neue Regeln oder individuelle Anpassungen können nahtlos innerhalb weniger Minuten in die gesamte Landschaft integriert werden.
- **Fortgeschrittene Automatisierung**: Der gesamte Lebenszyklus der Findings profitiert von den automatisierten Richtlinien, was die Prozesse bei Erkennung, Analyse und Reaktion optimiert.
- **Erhöhte Nachvollziehbarkeit**: Die Richtlinien beschreiben akzeptierte Risiken und Ausnahmen. Diese gewährleistet die Nachvollziehbarkeit und den einfachen Zugriff auf historische Daten.
- **Mehr Kontext**: Zusätzliche Kontextdaten in Bezug auf Security Findings unterstützen automatisierte und manuelle Triage-Prozesse, was zu schnelleren und fundierten Entscheidungen führt.
- **Fokussierung auf das Wesentliche**: Durch das Filtern von unwichtigen Ereignissen kann sich das SOC-Team nun ausschliesslich auf relevante Security Findings konzentrieren, was ihre Arbeitsabläufe optimiert und eine rechtzeitige Reaktion sicherstellt.
- **Ermöglichung von Auto-Remediation**: Wo immer sinnvoll, können Probleme nun automatisch behoben werden, was den manuellen Aufwand minimiert und die Reaktionszeiten verbessert.

### Ergebnisse: Quantitativ

- **Effizienzsteigerung bei der Verarbeitung von Security Findings**: Kunde kann sich auf die 0.1% wirklich relevanten Security Findings fokussieren (verglichen zur Zahl der AWS CloudTrail Events).
- **Mitarbeiterproduktivität**: Signifikante Zeitersparnis für SOC-Mitarbeiter
- **Automatisierte Eingriffe**: Tausende automatische Eingriffe pro Woche ausgelöst
- **Reduzierter Ingenieuraufwand**: Bemerkenswerte Reduzierung der Arbeitsbelastung
- **ROI**: Signifikanter Return on Investment
