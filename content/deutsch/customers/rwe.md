---
title: "SEMPER bei RWE - Energiegeladene Verwaltung von AWS Security Findings"
date: 2023-10-12T11:00:00+06:00
image: "images/customers/rwe_logo2.png"

# Meta-Beschreibung
Beschreibung : "Nuvibit SEMPER hilft RWE, ihre Sicherheit auf effiziente Weise zu verwalten."

# Schaltflächenlink
button_link: "#"

draft: false
---

## Situationsüberblick

[RWE](https://https://www.rwe.com//) ist ein weltweit führendes Energieunternehmen, das für die Produktion und Verteilung von konventioneller und erneuerbarer Energie bekannt ist. Sie sind in verschiedenen Regionen tätig und haben eine starke Präsenz in Europa, Nordamerika und Asien. [RWE](https://https://www.rwe.com//) verwaltet eine komplexe AWS Multi-Account Konfiguration mit rund 200 Accounts in vier Regionen, die verschiedene Entwicklungsteams unterstützt. Sie legen großen Wert auf die digitale Sicherheit und integrieren AWS-Dienste wie AWS Config, AWS Security Hub und Amazon GuardDuty. Ihr Security Operations Center verarbeitet jede Woche einen enormen Datenfluss von über 500 Millionen AWS CloudTrail-Ereignissen, die auf ihr SIEM-System ausgerichtet sind.

### Herausforderung

[RWE](https://https://www.rwe.com//) stand vor Herausforderungen aufgrund der großen Anzahl von AWS-Accounts und den damit verbundenen Security Findings, was es ihrem SOC-Team erschwerte, sie effizient zu verarbeiten. Viele der Befunde waren mit akzeptierten Risiken verbunden, was die zeitaufwändige Natur der Aufgabe verstärkte. Um dem entgegenzuwirken, wollte [RWE](https://https://www.rwe.com//) die Accounts nach ihrem Sicherheitsniveau kategorisieren (z. B. Produktion, Nicht-Produktion, Abteilungen) und wichtige Informationen über das Ursprungskonto in den Befunden aufnehmen. Die Automatisierung war ein Hauptziel für [RWE](https://https://www.rwe.com//) und zielte darauf ab, neue Regeln für Kontountergruppen bereitzustellen, automatisierte Aktionen für bestimmte Ereignisse zu definieren und Ereignisse in bestimmten Kontexten zu filtern. [RWE](https://https://www.rwe.com//) benötigte auch, dass die Erklärungen nachvollziehbar und historisch für die Einhaltung bewährter Sicherheitspraktiken sind.

## Unsere Lösung: SEMPER

[RWE](https://https://www.rwe.com//) entschied sich, unsere Lösung **[SEMPER](/solutions/semper 'Produktseite!')** in ihrer AWS-Organisation einzuführen.

### SEMPER-Architektur

Durch [GitOps](faq/#gitops 'Was ist GitOps?') ist der Kunde in der Lage, Richtlinien ([Dokumentation zu SEMPER-Richtlinien](https://github.com/nuvibit/semper-policy-repo-sample/wiki/10-SEMPER-Policies)), die automatisch den Lebenszyklus ihrer AWS Security Findings verwalten, aufrechtzuerhalten.

SEMPER wird vollständig im eigenen Bereich des Kunden betrieben.

![Architekturdiagramm](images/solutions/SEMPER-Flow.png)

1. **Konfiguration**: Gezielte Bereitstellung von AWS Config-, AWS Event Rules-Ereignissen und AWS Security Hub-Steuerungen.
2. **Verarbeitung**: Anreichern und Filtern von AWS Security Findings.
3. **Nachverarbeitung**: Archivierung und weitere Workflow-Automatisierung (Alarmierung, automatische Behebung).

### Ergebnisse: Qualitativ

- **Schnelle Umsetzung von Richtlinien**: Neue Regeln oder individuelle Anpassungen können nahtlos innerhalb weniger Minuten in die gesamte Landschaft integriert werden.
- **Fortgeschrittene Automatisierung**: Der gesamte Lebenszyklus der Befunde profitiert von automatisierter Politik, was die Prozesse bei Erkennung, Analyse und Reaktion optimiert.
- **Erhöhte Nachverfolgbarkeit**: Die Richtlinien verfolgen nun von Natur aus akzeptierte Befunde und Ausnahmen, was die Verantwortlichkeit und den einfachen Zugriff auf historische Daten gewährleistet.
- **Mehr Kontext**: Zusätzliche Kontextdaten in Bezug auf Security Findings unterstützen automatisierte und manuelle Triage-Prozesse, was zu schnelleren und fundierteren Entscheidungen führt.
- **Fokussierung auf das Wesentliche**: Durch das Filtern von unnötigem Rauschen kann sich das SOC-Team nun ausschließlich auf relevante Security Findings konzentrieren, was ihre Bemühungen optimiert und eine rechtzeitige Behebung sicherstellt.
- **Erleichterte automatische Behebung**: Wenn möglich, können Probleme nun automatisch behoben werden, was den manuellen Eingriff minimiert und die Reaktionszeiten verbessert.

### Ergebnisse: Quantitativ

- **Effizienz bei Befunden**: 99,9 % weniger Befunde - im Vergleich zu SEMPER-Befunden zu CloudTrail-Protokollen
- **Mitarbeiterproduktivität**: Signifikante Zeitersparnis für SOC-Mitarbeiter
- **Automatisierte Eingriffe**: Tausende automatischer Behebungen pro Woche ausgelöst
- **Reduzierter Ingenieuraufwand**: Bemerkenswerte Reduzierung der Arbeitsbelastung
- **ROI**: Positive und greifbare Rendite für Investitionen
