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

## Situation Overview

[RWE](https://https://www.rwe.com//) is a leading global energy company known for the production and distribution of both conventional and renewable energy. Operating in several regions, RWE has a strong presence in Europe, North America, and Asia.
The company manages a complex AWS multi-account configuration, involving around 200 AWS accounts spread across four AWS regions and utilized by diverse development teams. RWE places great emphasis on digital security and integrates various AWS services, such as AWS Config, AWS Security Hub, and Amazon GuardDuty. Every week, their Security Operations Center (SOC) receives nearly 1 billion AWS CloudTrail events that feed into their SIEM system.

### Challenge

The SOC team faces the challenge of efficiently prioritizing and processing a large number of security findings across numerous AWS accounts.
Many of these findings relate to accepted risks, which adds complexity and time to the task. To address this issue, RWE aims to categorize AWS accounts based on their security levels, such as production, non-production, and departmental accounts. They also intend to enrich the security findings with essential information, like the individual responsible or the security status of the source account.
Automation is another key focus for RWE. They plan to roll out new rules to subsets of accounts, define automated actions, and apply specific event filters. Furthermore, RWE places a high value on ensuring that all configurations are auditable and revision-proof to meet their company-specific compliance requirements.

## Our Solution: SEMPER

RWE decided to introduce our serverless solution **[SEMPER](/solutions/semper 'Product page!')** in their AWS Organization.

### SEMPER Architecture

Through [GitOps](faq/#gitops 'What is GitOps?'), the customer can specify security policies ([Documentation on SEMPER Policies](https://github.com/nuvibit/semper-policy-repo-sample/wiki/10-SEMPER-Policies)) that automatically manage the lifecycle of their AWS Security Findings.

SEMPER operates entirely within the customer's environment.

![Architecture Diagram](images/solutions/SEMPER-Flow.png)

1. **Configure**: Targeted deployment of AWS Config, AWS EventBridge rules, and AWS Security Hub controls.
2. **Processing**: Enriching and filtering of AWS Security Findings.
3. **Post-Processing**: Archiving and additional workflow automation, such as alarming and auto-remediation.

### Results: Qualitative

- **Swift Policy Implementation**: New rules or modifications can be integrated seamlessly into the entire landscape within minutes.
- **Advanced Automation**: The entire findings lifecycle benefits from automated policies, streamlining detection, analysis, and response processes.
- **Enhanced Traceability**: Policies describe accepted risks and exceptions. This ensures traceability and easy access to historical data.
- **Richer Context**: Additional contextual data related to security findings supports automated and manual triage processes, resulting in faster and more informed decisions.
- **Relevant Focus**: By filtering unimportant events, the SOC team can now focus exclusively on relevant Security Findings, streamlining their workflows and ensuring timely response.
- **Facilitated Auto-Remediation**: Wherever appropriate, issues can now be remediated automatically, minimizing manual effort and improving response times.

### Results: Quantitative

- **Increased efficiency in processing security findings**: Customer can focus on the 0.1% security findings that are truly relevant (compared to the number of AWS CloudTrail events).
- **Staff Productivity**: Significant time savings for SOC staff.
- **Automated Interventions**: Thousands of auto-remediations triggered per week.
- **Reduced Engineering Efforts**: Remarkable reduction in workload.
- **ROI**: Significant return on investment.
