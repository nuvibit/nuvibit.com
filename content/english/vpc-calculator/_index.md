---
title: "VPC Subnet Calculator"
description: "A network subnet calculator specifically tailored for AWS VPC subnets."
draft: false

banner_section:
    enable: true
    title: "VPC Subnet Calculator"
    content: "There are hundreds of great subnet calculators out there. So why have another one? 
    Even our cloud network sorcerer needs tools from time to time, but he couldn't find anything that met all of his requirements, so he decided to build his own. This calculator is therefore specifically tailored and simplified for [AWS VPC subnets](https://docs.aws.amazon.com/vpc/latest/userguide/configure-subnets.html#subnet-sizing).<br><br>
    Enter a network range (e.g. 192.168.0.0/24) and decide whether it should be divided evenly by a single CIDR block (e.g. 26) or variably by different CIDR blocks (e.g. 26,26,28,28).<br><br>"
    image : "images/illustrations/network-sorcerer.png"
---

{{<table "table table-striped table-bordered subnet-table">}}
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
<br><br><br/>
<font size="4">
Any problems or missing a feature? Please open an issue on [Github](https://github.com/nuvibit/nuvibit.com/issues)
</font>