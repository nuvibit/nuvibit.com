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

[RWE](https://https://www.rwe.com//) is a leading global energy company, known for the production and distribution of conventional and renewable energy. RWE operates in several regions and has a strong presence in Europe, North America and Asia.
RWE manages a complex AWS multi-account configuration with around 200 AWS accounts across four AWS regions used by diverse development teams. They place great emphasis on digital security and integrate AWS services such as AWS Config, AWS Security Hub, and Amazon GuardDuty. Every week, their Security Operations Center processes an enormous flow of data close to 1 billion AWS CloudTrail events that hit their SIEM system.

### Challenge

The SOC team faced the challenge of efficiently prioritizing and processing the large number of AWS accounts and the numerous security findings associated with them based on importance.
Many Findings related to accepted risks, which made the task even more time-consuming. To solve this problem, RWE wanted to group AWS accounts based on their security level (e.g., production, non-production, departments) and add essential information to the finding, such as the person responsible or the security status of the source account.
Automation was an important goal for RWE. This should allow new rules to be rolled out to subsets of accounts, automated actions to be defined and specific event filters to be applied. Furthermore, RWE attached great importance to the fact that all configurations are designed to be both auditable and audit-proof in order to meet company-specific compliance requirements.

## Our Solution: SEMPER

RWE decided to introduce our serverless solution **[SEMPER](/solutions/semper 'Product page!')** in their AWS Organization.

### SEMPER Architecture

Through [GitOps](faq/#gitops 'What is GitOps?'), the customer is able to specify security policies ([Documentation on SEMPER Policies](https://github.com/nuvibit/semper-policy-repo-sample/wiki/10-SEMPER-Policies)) that automatically manage the lifecycle of their AWS Security Findings.

SEMPER is run entirely in the customer's environment.

![Architecture Diagram](images/solutions/SEMPER-Flow.png)

1. **Configure**: Targeted deployment of AWS Config, AWS EventBridge rules, and AWS Security Hub controls.
2. **Processing**: Enriching and filtering of AWS Security Findings.
3. **Post-Processing**: Archiving and further workflow automation (alarming, auto-remediation).

### Results: Qualitative

- **Swift Policy Implementation**: New rules or customizations can be seamlessly integrated into the entire landscape within minutes.
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
