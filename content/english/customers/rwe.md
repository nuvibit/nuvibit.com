---
title: "SEMPER at RWE - energized AWS Security Findings Management"
date: 2023-10-12T11:00:00+06:00
image: "images/customers/rwe_logo2.png"

# meta description
description : "Nuvibit SEMPER helps RWE to manage their Security in a streamlined was."

# button link
button_link: "#"

draft: false
---

# SEMPER at RWE - energized AWS Security Findings Management

## Situation: Customer Overview

[RWE](https://https://www.rwe.com//) is a major player in the energy industry with a significant global presence. They specialize in producing and distributing various forms of energy, both conventional and renewable.

### RWE Offerings

- **Renewable Energy**: Wind, solar, and hydroelectric projects
- **Conventional Energy**: Natural gas, coal, etc.
- **Geographic Presence**: Europe, North America, Asia

### AWS Multi-Account Setup

- Around 200 AWS accounts
- Distributed across multiple AWS regions
- Integrated AWS Config, AWS Security Hub, Amazon GuardDuty
- Security Operations Center (SOC) handles over 500 million AWS CloudTrail events each week

### Security Challenges

1. **Volume of AWS Security Findings**: Many findings need attention
2. **Time-Consuming Analysis**: Complicated and time-intensive processes
3. **Need for Segmentation**: Classification of AWS accounts based on security level
4. **Need for Automation**: Automate the process to reduce manual load

## Our Solution: SEMPER

[RWE](https://https://www.rwe.com//) decided to introduce our solution **[SEMPER](/solutions/semper 'Product page!')** into their AWS Organization.

### SEMPER Architecture

Via [GitOps](faq/#gitops 'What is GitOps?') the customer is able to maintain policies ([Documentation on SEMPER Policies](https://github.com/nuvibit/semper-policy-repo-sample/wiki/10-SEMPER-Policies)) that will automatically manage the lifecycle of their AWS Security Findings.

SEMPER is operated entirely self-contained in the customer's perimeter.

![Architecture Diagram](images/solutions/SEMPER-Flow.png)

1. **Configure**: Targeted deployment of AWS Config-, AWS Event Rules events, and AWS Security Hub controls.
2. **Processing**: Enriching and filtering of AWS Security Findings.
3. **Post-Processing**: Archiving and further workflow automation (alarming, auto-remediation).



### Results: Qualitative

- **Swift Policy Implementation**
- **Advanced Automation**
- **Enhanced Traceability**
- **Richer Context**
- **Relevant Focus**
- **Facilitated Auto-Remediation**

### Results: Quantitative

- **Efficiency in Findings**: 99.9% decrease in findings - compared SEMPER findings to CloudTrail Logs
- **Employee Productivity**: Significant time saved for SOC employees
- **Automated Interventions**: Thousands of auto-remediations triggered weekly
- **Reduced Engineering Efforts**: Notable reduction in workload
- **ROI**: Positive and tangible return on investment
