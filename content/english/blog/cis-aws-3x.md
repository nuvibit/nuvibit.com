---
title: "CIS AWS Foundations Benchmark is cool, but..."
date: 2021-11-24T11:00:00+06:00
image: "images/blog/placeholder.png"
description: "Keeping grip on the current level of security compliance can be a challenge. AWS provides a great tool, that is designed to provide an account overarching overview, valuable especially in AWS Landing Zone architectures: AWS Security Hub"
summary: "This post explains, why we are in favor of using Amazon EventBridge Rules for monitoring the recommended CIS AWS 3.x controls. "
duration: 10
draft: false
---
## Context

Keeping grip on the current level of security compliance can be a challenge. AWS provides a great tool, that is designed to provide an account overarching overview, valuable especially in AWS Landing Zone architectures: **AWS Security Hub**

![img](images/blog/cis_aws_3x/security_hub_dashboard.png)

AWS Security Hub is a cloud security service that automates best practice checks, aggregates alerts for multi account setups, and supports also automated remediation.  
With AWS Security Hub you have access to three predefined security standards that give you automated compliance measurement enabled with a single click (caution - cost for the provisioned config rules will apply):  

\- CIS AWS Foundations Benchmark [CIS-AWS]  
\- Payment Card Industry Data Security Standard [PCI-DSS]  
\- AWS Foundational Security Best Practices [FSBP]  

A security standard is a summary of security controls that can be turned on or off. The cool thing about Security Hub is the automated evaluation of all the related AWS resources with a compliance statement. All this is aggregated to security scores on measure your resource compliance.  
The following image outlines the concept of AWS Security Hub for compliance measurement:

![img](images/blog/cis_aws_3x/security_hub_model.png)

This blog-post refers especially to the “Monitoring” chapter of the **CIS AWS Foundations Benchmark** [CIS-AWS] which contains the security controls **CIS AWS 3.1 - CIS AWS 3.14**. 

{{<table "table table-striped table-bordered">}}
| CIS AWS 3.x Security Controls |
| ------------- |
| CIS AWS 3.1 Ensure a log metric filter and alarm exist for unauthorized API calls |
| CIS AWS 3.2 Ensure a log metric filter and alarm exist for Management Console sign-in without MFA |
| CIS AWS 3.3 Ensure a log metric filter and alarm exist for usage of "root" account |
| CIS AWS 3.4 Ensure a log metric filter and alarm exist for IAM policy changes |
| CIS AWS 3.5 Ensure a log metric filter and alarm exist for CloudTrail configuration changes |
| CIS AWS 3.6 Ensure a log metric filter and alarm exist for AWS Management Console authentication failures |
| CIS AWS 3.7 Ensure a log metric filter and alarm exist for disabling or scheduled deletion of customer created CMKs |
| CIS AWS 3.8 Ensure a log metric filter and alarm exist for S3 bucket policy changes |
| CIS AWS 3.9 Ensure a log metric filter and alarm exist for AWS Config configuration changes |
| CIS AWS 3.10 Ensure a log metric filter and alarm exist for security group changes |
| CIS AWS 3.11 Ensure a log metric filter and alarm exist for changes to Network Access Control Lists (NACL) |
| CIS AWS 3.12 Ensure a log metric filter and alarm exist for changes to network gateways |
| CIS AWS 3.13 Ensure a log metric filter and alarm exist for route table changes |
| CIS AWS 3.14 Ensure a log metric filter and alarm exist for VPC changes |
{{</table>}}

As you notice the CIS AWS 3.x security controls have one thing in common and that is the phrase: “Ensure a log metric filter and alarm exist for …“  
We fully agree to the goals of CIS AWS 3.x but we think that only ensuring a log metric filter and an alarm exists for those controls is **not sufficient**. 
It is very important that those controls are carefully monitored and the SOC easily has access to all event data to be able to analyze the finding quickly.

## Clarification

Using a log metric filter together with an alarm just indicates that the event occurred, but does not provide data on the actual root cause. 
Especially in a multi-account setup leveraging AWS CloudTrail for AWS Organizations leaves you in a potential permanent alarm situation. In this scenario, digging for the actual source for the alarm is waste of effort and time.

Sample of an CIS AWS 3.10 alarm sent to a Amazon SNS topic - not too much valuable information:
```text 
You are receiving this email because your Amazon CloudWatch Alarm "CIS.3.10" in the US East (N. Virginia) region has entered  
the ALARM state, because "Threshold Crossed: 1 out of the last 1 datapoints [2.0 (15/09/21 18:27:00)] was greater than the  
threshold (1.0) (minimum 1 datapoint for OK -> ALARM transition)." at "Wednesday 15 September, 2021 18:32:31 UTC".

View this alarm in the AWS Management Console:
https://us-east-1.console.aws.amazon.com/cloudwatch/deeplink.js?region=us-east-1#alarmsV2:alarm/CIS.3.10

Alarm Details:
- Name:                       CIS.3.10
- Description:                
- State Change:               OK -> ALARM
- Reason for State Change:    Threshold Crossed: 1 out of the last 1 datapoints [2.0 (15/09/21 18:27:00)] was greater than the  
                              threshold (1.0) (minimum 1 datapoint for OK -> ALARM transition).
- Timestamp:                  Wednesday 15 September, 2021 18:32:31 UTC
- AWS Account:                486183375590
- Alarm Arn:                  arn:aws:cloudwatch:us-east-1:486183375590:alarm:CIS.3.10
Threshold:
- The alarm is in the ALARM state when the metric is GreaterThanThreshold 1.0 for 300 seconds. 
Monitored Metric:
- MetricNamespace:                     LogMetrics
- MetricName:                          CIS.3.10
- Dimensions:                          
- Period:                              300 seconds
- Statistic:                           Sum
- Unit:                                not specified
- TreatMissingData:                    missing
```

In case of an event you want to know more context information like: acting principal, affected resource with account and region

To find the alarm-causing event information you need to dig through the Amazon CloudWatch Logs, which is cumbersome. 

## Recommendation
What we recommend is utilizing Amazon EventBridge Rules on the default event-bus for the CIS AWS 3.x event signatures. You will get an instant event notification with full event information.  
Sample of an CIS AWS 3.10 Event:
```json {linenos=table,hl_lines=[],linenostart=50}
{
  "version": "0",
  "id": "3bfd2f04-b57f-5cae-5423-cefcda82691b",
  "detail-type": "AWS API Call via CloudTrail",
  "source": "aws.ec2",
  "account": "626708301729",
  "time": "2021-11-04T15:56:41Z",
  "region": "eu-west-1",
  "resources": [],
  "detail": {
    "eventVersion": "1.08",
    "userIdentity": {
      "type": "AssumedRole",
      "principalId": "AROAZD2VZY6QQWB4D7CX6:michael.ullrich@nuvibit.com",
      "arn": "arn:aws:sts::626708301729:assumed-role/AWSReservedSSO_AdministratorAccess_1f51a532758ff888/michael.ullrich@nuvibit.com",
      "accountId": "626708301729",
      "accessKeyId": "ASIAZD2VZY6Q7WV5ARRX",
      "sessionContext": {
        "sessionIssuer": {
          "type": "Role",
          "principalId": "AROAZD2VZY6QQWB4D7CX6",
          "arn": "arn:aws:iam::626708301729:role/aws-reserved/sso.amazonaws.com/eu-central-1/AWSReservedSSO_AdministratorAccess_1f51a532758ff888",
          "accountId": "626708301729",
          "userName": "AWSReservedSSO_AdministratorAccess_1f51a532758ff888"
        },
        "webIdFederationData": {},
        "attributes": {
          "creationDate": "2021-11-04T15:54:33Z",
          "mfaAuthenticated": "false"
        }
      }
    },
    "eventTime": "2021-11-04T15:56:41Z",
    "eventSource": "ec2.amazonaws.com",
    "eventName": "AuthorizeSecurityGroupIngress",
    "awsRegion": "eu-west-1",
    "sourceIPAddress": "194.230.147.5",
    "userAgent": "console.ec2.amazonaws.com",
    "requestParameters": {
      "groupId": "sg-b0673be3",
      "ipPermissions": {
        "items": [
          {
            "ipProtocol": "tcp",
            "fromPort": 0,
            "toPort": 65535,
            "groups": {},
            "ipRanges": {
              "items": [
                {
                  "cidrIp": "0.0.0.0/0"
                }
              ]
            },
            "ipv6Ranges": {},
            "prefixListIds": {}
          }
        ]
      }
    },
    "responseElements": {
      "requestId": "233ec260-265b-40dc-918b-e3ced0e85977",
      "_return": true,
      "securityGroupRuleSet": {
        "items": [
          {
            "groupOwnerId": "626708301729",
            "groupId": "sg-b0673be3",
            "securityGroupRuleId": "sgr-0c609e6f9cdaf10ea",
            "isEgress": false,
            "ipProtocol": "tcp",
            "fromPort": 0,
            "toPort": 65535,
            "cidrIpv4": "0.0.0.0/0"
          }
        ]
      }
    },
    "requestID": "233ec260-265b-40dc-918b-e3ced0e85977",
    "eventID": "ed2b58c7-5b71-49d8-9f26-66b695f0e2a7",
    "readOnly": false,
    "eventType": "AwsApiCall",
    "managementEvent": true,
    "recipientAccountId": "626708301729",
    "eventCategory": "Management"
  }
}
```
As you see, the event payload itself contains all the information valuable for further security processing.

## Conclusion
We recommend to ***use Amazon EventBridge Rules for monitoring of CIS AWS 3.x*** add to even add more context like account-tags of the originating account to the event information.  
Furthermore we recommend to place more than the CIS AWS 3.x sensors, like:  

\- Monitor for OU-SCP assignment changes  
\- Monitor for SCP policy changes  
\- Monitor for OU structure changes   
\- Monitor for Account-OU assignment changes  

If you are managing multiple accounts and search for a solution to precisely manage Amazon EventBridge Rules in all your accounts, feel free to contact us and learn more about our **[SEMPER](/contact/ 'Contact us for more information!') solution**.

## References
{{<table "table table-striped table-bordered">}}
| ID        | Link           
| ----------| ------------- 
| [CIS-AWS] | [CIS AWS Foundations Benchmark standard - AWS Security Hub](https://docs.aws.amazon.com/securityhub/latest/userguide/securityhub-standards-cis.html)
| [PCI-DSS] | [Payment Card Industry Data Security Standard (PCI DSS) - AWS Security Hub](https://docs.aws.amazon.com/securityhub/latest/userguide/securityhub-standards-pcidss.html)
| [FSBP]    | [AWS Foundational Security Best Practices standard - AWS Security Hub](https://docs.aws.amazon.com/securityhub/latest/userguide/securityhub-standards-fsbp.html)
{{</table>}}