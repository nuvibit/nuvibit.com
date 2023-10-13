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

[RWE](https://https://www.rwe.com//) is a major global energy company known for producing and distributing both conventional and renewable energy sources. They operate in multiple regions, with a strong presence in Europe, North America, and Asia. [RWE](https://https://www.rwe.com//) manages a complex AWS Multi-Account setup with around 200 accounts in four regions, supporting various development teams. They prioritize digital security by integrating AWS services like AWS Config, AWS Security Hub, and Amazon GuardDuty. Their Security Operations Center handles an enormous data flow of over 500 million AWS CloudTrail events each week, directed toward their SIEM system.

### Challenge

[RWE](https://https://www.rwe.com//) faced challenges due to the large number of AWS accounts and associated security findings, making it difficult for their SOC team to process them efficiently. Many findings were related to accepted risks, which added to the time-consuming nature of the task. To address this, [RWE](https://https://www.rwe.com//) wanted to categorize accounts into groups based on their security level (e.g., production, non-production, departments) and include essential information about the originating account in the findings. Automation was a key goal for [RWE](https://https://www.rwe.com//), aiming to deploy new rules to account subsets, define automated actions for specific events, and filter events in particular contexts. [RWE](https://https://www.rwe.com//) also needed the declarations to be traceable and historical for compliance with security best practices.

## Our Solution: SEMPER

[RWE](https://https://www.rwe.com//) decided to introduce our serverless solution **[SEMPER](/solutions/semper 'Product page!')** into their AWS Organization.

### SEMPER Architecture

Via [GitOps](faq/#gitops 'What is GitOps?') the customer is able to maintain policies ([Documentation on SEMPER Policies](https://github.com/nuvibit/semper-policy-repo-sample/wiki/10-SEMPER-Policies)) that will automatically manage the lifecycle of their AWS Security Findings.

SEMPER is operated entirely self-contained in the customer's perimeter.

![Architecture Diagram](images/solutions/SEMPER-Flow.png)

1. **Configure**: Targeted deployment of AWS Config-, AWS Event Rules events, and AWS Security Hub controls.
2. **Processing**: Enriching and filtering of AWS Security Findings.
3. **Post-Processing**: Archiving and further workflow automation (alarming, auto-remediation).



### Results: Qualitative

- **Swift Policy Implementation**: Any new rules or tailored adjustments can seamlessly be integrated across the landscape in minutes.
- **Advanced Automation**: The entire Finding Lifecycle benefits from policy-based automation, streamlining the processes involved in detection, analysis, and response.
- **Enhanced Traceability**: The policies now inherently track accepted findings and exceptions, ensuring accountability and easy access to historical data.
- **Richer Context**: Additional contextual data associated with security findings aids automated and manual triage processes, ensuring quicker and more informed decision-making.
- **Relevant Focus**: By filtering out the noise, the SOC team can now concentrate solely on pertinent security findings, optimizing their efforts and ensuring timely remediation.
- **Facilitated Auto-Remediation**: Where feasible, issues can now be rectified automatically, minimizing manual intervention and improving response times.

### Results: Quantitative

- **Efficiency in Findings**: 99.9% decrease in findings - compared SEMPER findings to CloudTrail Logs
- **Employee Productivity**: Significant time saved for SOC employees
- **Automated Interventions**: Thousands of auto-remediations triggered weekly
- **Reduced Engineering Efforts**: Notable reduction in workload
- **ROI**: Positive and tangible return on investment
