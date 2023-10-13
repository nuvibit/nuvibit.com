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

[RWE](https://https://www.rwe.com//) ist ein weltweit führendes Energieunternehmen, das für die Produktion und Verteilung von konventioneller und erneuerbarer Energie bekannt ist. Sie sind in verschiedenen Regionen tätig und haben eine starke Präsenz in Europa, Nordamerika und Asien. [RWE](https://https://www.rwe.com//) verwaltet eine komplexe AWS Multi-Account Konfiguration mit rund 200 Accounts in vier Regionen, die von diversen Entwicklungsteams genutzt werden. Sie legen großen Wert auf die digitale Sicherheit und integrieren AWS-Dienste wie AWS Config, AWS Security Hub und Amazon GuardDuty. Ihr Security Operations Center verarbeitet jede Woche einen enormen Datenfluss von über 500 Millionen AWS CloudTrail-Ereignissen, die in ihrem SIEM-System aufschlagen.

### Herausforderung

[RWE](https://https://www.rwe.com//) sah sich aufgrund der großen Anzahl von AWS Accounts und der damit verbundenen Securit Findings mit Herausforderungen konfrontiert, die es dem SOC-Team schwer machten, diese effizient zu bearbeiten. Viele Findings bezogen sich auf akzeptierte Risiken, was die Aufgabe noch zeitaufwändiger machte. Um dieses Problem zu lösen, wollte [RWE](https://https://www.rwe.com//) die Accounts auf der Grundlage ihrer Sicherheitsstufe (z. B. Produktion, Nicht-Produktion, Abteilungen) in Gruppen einteilen und das Finding mit wesentliche Informationen über den Source Account ergänzen. Die Automatisierung war ein wichtiges Ziel für [RWE](https://https://www.rwe.com//). Damit sollen neue Rules in Subsets von Accounts ausgerollt, Autmatisierte Aktionen definiert und speziefische Event filter deployed werden können. Für [RWE](https://https://www.rwe.com//) war es außerdem wichtig, dass die Deklarationen rückverfolgbar und historisch nachvollziehbar sind, um ihre Compliance Anforderungen zu erfüllen.

## Unsere Lösung: SEMPER

[RWE](https://https://www.rwe.com//) entschied sich, unsere Lösung **[SEMPER](/solutions/semper 'Produktseite!')** in ihrer AWS-Organisation einzuführen.

### SEMPER-Architektur

Durch [GitOps](faq/#gitops 'Was ist GitOps?') ist der Kunde in der Lage, Richtlinien ([Dokumentation zu SEMPER-Richtlinien](https://github.com/nuvibit/semper-policy-repo-sample/wiki/10-SEMPER-Policies)), die automatisch den Lebenszyklus ihrer AWS Security Findings verwalten, aufrechtzuerhalten.

SEMPER wird vollständig im eigenen Bereich des Kunden betrieben.

![Architekturdiagramm](images/solutions/SEMPER-Flow.png)

1. **Configuration**: Gezielte Bereitstellung von AWS Config, AWS Event Rule Events und AWS Security Hub Controls.
2. **Processing**: Anreichern und Filtern von AWS Security Findings.
3. **Post-Processing**: Archivierung und weitere Workflow-Automatisierung (Alarmierung, auto-remeditation).

### Ergebnisse: Qualitativ

- **Schnelle Umsetzung von Richtlinien**: Neue Rules oder individuelle Anpassungen können nahtlos innerhalb weniger Minuten in die gesamte Landschaft integriert werden.
- **Fortgeschrittene Automatisierung**: Der gesamte Lebenszyklus der Findings profitiert von den automatisierten Policies, was die Prozesse bei Erkennung, Analyse und Reaktion optimiert.
- **Erhöhte Nachvollziehbarkeit**: Die Policies beschreiben akzeptierte Risiken und Ausnahmen. Diese gewährleistet die Nachvollziehbarkeit und den einfachen Zugriff auf historische Daten.
- **Mehr Kontext**: Zusätzliche Kontextdaten in Bezug auf Security Findings unterstützen automatisierte und manuelle Triage-Prozesse, was zu schnelleren und fundierteren Entscheidungen führt.
- **Fokussierung auf das Wesentliche**: Durch das Filtern von unnötigem Rauschen kann sich das SOC-Team nun ausschließlich auf relevante Security Findings konzentrieren, was ihre Arbeitsabläufe optimiert und eine rechtzeitige Reaktion sicherstellt.
- **Ermöglichung von Auto-Remediation**: Wo immer sinnvoll, können Probleme nun automatisch behoben werden, was den manuellen Aufwand minimiert und die Reaktionszeiten verbessert.

### Ergebnisse: Quantitativ

- **Effizienz bei Befunden**: 99,9 % weniger Findings - SEMPER Findings im Vergleich zu den CloudTrail Events davor
- **Mitarbeiterproduktivität**: Signifikante Zeitersparnis für SOC-Mitarbeiter
- **Automatisierte Eingriffe**: Tausende automatische Eingriffe pro Woche ausgelöst
- **Reduzierter Ingenieuraufwand**: Bemerkenswerte Reduzierung der Arbeitsbelastung
- **ROI**: Signifikanter return of invest
