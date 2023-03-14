---
title: "VPC Subnetz-Rechner"
description: "Dieser Subnetz-Rechner ist speziell für AWS VPC-Subnetze konzipiert. Unterstützt IPv4-Subnetzberechnungen mit statischer und variabler Länge."
draft: false

banner_section:
    enable: true
    title: "VPC Subnetz-Rechner"
    content: "Es gibt bereits unzählige gute Subnetz-Rechner...<br>
    Warum also noch einer?<br>
    Sogar unser Cloud Netzwerk-Zauberer braucht von Zeit zu Zeit etwas Unterstützung, aber er konnte kein wirklich passendes Tool finden, also beschloss er einfach, sein eigenes zu bauen. Dieser Rechner wurde daher speziell für [AWS VPC-Subnetze](https://docs.aws.amazon.com/vpc/latest/userguide/configure-subnets.html#subnet-sizing) entwickelt und beschränkt sich auf das Wesentliche.<br><br>
    **Anwendungsbeispiel 1**<br>
    Du hast einen IPv4-Netzwerkbereich (172.31.0.0/16) und möchtest berechnen, wie viele VPCs mit einem CIDR von /24 erstellt werden können.<br>
    --> Füge <mark style='background-color:#fbe3fc;'>172.31.0.0/16</mark> in das erste Feld und <mark style='background-color: #fbe3fc;'>24</mark> in das zweite Feld ein.<br><br>
    **Anwendungsbeispiel 2**<br>
    du hast einen VPC-Netzwerkbereich (172.31.0.0/24) und möchtest unterschiedlich grosse Subnetze über 3 Verfügbarkeitszonen hinweg berechnen.<br>
    --> Füge <mark style='background-color:#fbe3fc;'>172.31.0.0/24</mark> in das erste Feld und <mark style='background-color: #fbe3fc;'>26,26,26,28,28,28</mark> in das zweite Feld ein."
    image : "images/illustrations/network-sorcerer.png"
---
<section id="subnet_stats" hidden>
<p class="mb-3">
  Berechnung von <span id="subnet_stats_count" style="font-weight:bold;">0</span> Subnetzen war <span id="subnet_stats_status" style="font-weight:bold;color:ForestGreen;">erfolgreich</span>
</p>
<p class="mb-5">
  Rund <span id="subnet_stats_usage" style="font-weight:bold;color:ForestGreen">0</span>% des verfügbaren Netzwerkadressraums wird genutzt
</p>
</section>
{{<table "table table-striped table-bordered text-center subnet-table">}}
| SUBNETZBEREICH | VERFÜGBARE HOSTS <span style="color:red">*</span> |
| ------------- | ------------- |
| x.x.x.x/16 | 65531 |
| x.x.x.x/17 | 32763 |
| x.x.x.x/18 | 16379 |
| x.x.x.x/19 | 8187 |
| x.x.x.x/20 | 4091 |
| x.x.x.x/21 | 2043 |
| x.x.x.x/22 | 1019 |
| x.x.x.x/23 | 507 |
| x.x.x.x/24 | 251 |
| x.x.x.x/25 | 123 |
| x.x.x.x/26 | 59 |
| x.x.x.x/27 | 27 |
| x.x.x.x/28 | 11 |
{{</table>}}
<span style="color:red">*</span> In AWS können die ersten vier IP-Adressen und die letzte IP-Adresse in jedem Subnetz-CIDR-Block nicht genutzt werden.
<br><br><br>

Irgendwelche Probleme oder eine fehlende Funktion? Bitte ein Issue öffnen auf [Github](https://github.com/nuvibit/nuvibit.com/issues)