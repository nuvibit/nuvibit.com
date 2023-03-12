---
title: "VPC Subnetzrechner"
description: "A network s calculator specifically designed for AWS VPC subnets. Supports static length and variable length IPv4 subnet calculations."
draft: false

banner_section:
    enable: true
    title: "VPC Subnetzrechner"
    content: "There are hundreds of great subnet calculators out there...<br>
    So why have another one?<br>
    Even our cloud network sorcerer needs help from time to time, but he couldn't find the right tool for his needs, so he decided to build his own. This calculator is therefore specifically designed for [AWS VPC subnets](https://docs.aws.amazon.com/vpc/latest/userguide/configure-subnets.html#subnet-sizing) and aims to be clutter free.<br><br>
    **Usage example 1**<br>
    You have an IPv4 network range (172.31.0.0/16) and want to calculate how many VPCs with a CIDR of /24 you can create.<br>
    --> Insert <mark style='background-color:#fbe3fc;'>172.31.0.0/16</mark> into first field and <mark style='background-color: #fbe3fc;'>24</mark> into second field.<br><br>
    **Usage example 2**<br>
    You have a VPC network range (172.31.0.0/24) and you want to calculate variably sized subnets across 3 availability zones.<br>
    --> Insert <mark style='background-color:#fbe3fc;'>172.31.0.0/24</mark> into first field and <mark style='background-color: #fbe3fc;'>26,26,26,28,28,28</mark> into second field.<br><br>"
    image : "images/illustrations/network-sorcerer.png"
---
<section id="subnet_stats" hidden>
<p class="mb-3">
  Calculation of <span id="subnet_stats_count" style="font-weight:bold;">0</span> subnets was <span id="subnet_stats_status" style="font-weight:bold;color:ForestGreen;">successfull</span>
</p>
<p class="mb-5">
  About <span id="subnet_stats_usage" style="font-weight:bold;color:ForestGreen">0</span>% of available network address space is used
</p>
</section>
{{<table "table table-striped table-bordered text-center subnet-table">}}
| SUBNET RANGE | AVAILABLE HOSTS <span style="color:red">*</span> |
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
<span style="color:red">*</span> In AWS the first four IP addresses and the last IP address in each subnet CIDR block are not available for use.
<br><br><br>

Any problems or missing a feature? Please open an issue on [Github](https://github.com/nuvibit/nuvibit.com/issues)