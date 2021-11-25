---
title: "CIS AWS Foundations Benchmark ist cool, aber..."
date: 2021-11-24T11:00:00+06:00
image: "images/blog/cis_aws_3x/cis_controls.png"
description: "Den aktuellen Stand der Sicherheits-Compliance im Griff zu behalten, kann eine Herausforderung sein. AWS bietet ein großartiges Tool, das einen kontoübergreifenden Überblick bietet, der insbesondere in AWS Landing Zone-Architekturen wertvoll ist: AWS Security Hub"
summary: "In diesem Beitrag wird erklärt, warum wir Amazon EventBridge Rules für die Überwachung der CIS AWS 3.x-Kontrollen empfehlen."
duration: 10
draft: false
---
## Kontext

Den aktuellen Stand der Sicherheits-Compliance im Griff zu behalten, kann eine Herausforderung sein. AWS bietet ein großartiges Tool, das einen kontoübergreifenden Überblick bietet, der insbesondere in AWS Landing Zone-Architekturen wertvoll ist: **AWS Security Hub**

![img](images/blog/cis_aws_3x/security_hub_dashboard.png)

AWS Security Hub ist ein Cloud-Sicherheitsservice, der Best-Practice-Prüfungen automatisiert, Findings in Multi-Account-Umgebungen aggregiert und auch automatisierte Behebung unterstützt.  
Mit AWS Security Hub haben Sie Zugriff auf drei vordefinierte Sicherheitsstandards, die Ihnen mit einem einzigen Klick eine automatisierte Compliance-Messung ermöglichen (Achtung – es fallen Kosten für die bereitgestellten AWS Config Rules an):  

\- CIS AWS Foundations Benchmark [**[CIS-AWS](https://docs.aws.amazon.com/securityhub/latest/userguide/securityhub-standards-cis.html 'CIS AWS Foundations Benchmark standard - AWS Security Hub')**]<br/>
\- Payment Card Industry Data Security Standard [**[PCI-DSS](https://docs.aws.amazon.com/securityhub/latest/userguide/securityhub-standards-pcidss.html 'Payment Card Industry Data Security Standard (PCI DSS) - AWS Security Hub')**]<br/>
\- AWS Foundational Security Best Practices [**[FSBP](https://docs.aws.amazon.com/securityhub/latest/userguide/securityhub-standards-fsbp.html 'AWS Foundational Security Best Practices standard - AWS Security Hub')**]<br/><br/>

Ein Sicherheitsstandard ist eine Zusammenfassung von Sicherheitskontrollen, die aktiviert oder deaktiviert werden können. Das Gute an Security Hub ist die automatisierte Auswertung aller zugehörigen AWS-Ressourcen mit einer Compliance-Bewertung. All dies wird zu Sicherheitsbewertungen zusammengefasst, um Ihre Ressourcen-Compliance zu messen.  
Die folgende Abbildung skizziert das Konzept von AWS Security Hub für die Compliance-Messung:  

![img](images/blog/cis_aws_3x/security_hub_model.png)

Dieser Blog-Beitrag bezieht sich insbesondere auf das Kapitel “Monitoring” des **CIS AWS Foundations Benchmark** [**[CIS-AWS](https://docs.aws.amazon.com/securityhub/latest/userguide/securityhub-standards-cis.html 'CIS AWS Foundations Benchmark standard - AWS Security Hub')**], das die **CIS AWS 3.1 - CIS AWS 3.14**-Kontrollen enthält.

{{<table "table table-striped table-bordered">}}
| CIS AWS 3.x-Kontrollen |
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

Wie Sie feststellen, haben die CIS AWS 3.x-Kontrollen eines gemeinsam und das ist der Satzteil: „Ensure a log metric filter and alarm exist for…“  
Wir stimmen den Zielen von CIS AWS 3.x voll und ganz zu, sind jedoch der Meinung, dass es **nicht ausreichend** ist, nur sicherzustellen, dass für diese Kontrollen ein Log-Metrikfilter und ein Alarm vorhanden sind.  
Es ist sehr wichtig, dass diese Kontrollen sorgfältig überwacht werden und das Security Operations Center (SOC) problemlos auf alle Ereignisdaten zugreifen kann, um den Befund schnell analysieren zu können.<br/><br/>

## Erklärung

Die Verwendung eines Log-Metrikfilters zusammen mit einem Alarm zeigt lediglich an, dass ein Ereignis aufgetreten ist, liefert jedoch keine Daten über das eigentliche Ereignis.
Insbesondere bei Multi-Account Umgebungen, welche AWS CloudTrail für AWS Organizations nutzen, geraten Sie in eine potenzielle permanente Alarmsituation. In diesem Szenario ist die Suche nach der eigentlichen Quelle für den Alarm mühsam und zeitintensiv.

Beispiel für einen CIS AWS 3.10-Alarm, der an ein Amazon Simple Notification Service (SNS) Thema gesendet wurde – kaum wertvolle Informationen:
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
- AWS Account:                215125613612
- Alarm Arn:                  arn:aws:cloudwatch:us-east-1:215125613612:alarm:CIS.3.10
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

Im Falle eines Ereignisses möchten Sie weitere Kontextinformationen wie den ausführenden Principal und die betroffene Ressource mit Account-ID und Region erfahren

Um die alarmauslösenden Ereignisinformationen zu finden, müssen Sie die Amazon CloudWatch Logs durchsuchen, was umständlich ist.<br/><br/>

## Empfehlung
Wir empfehlen die Verwendung von Amazon EventBridge Rules auf dem default event-bus für die CIS AWS 3.x-Ereignissignaturen.  
Sie erhalten so eine sofortige Ereignisbenachrichtigung mit vollständigen Ereignisinformationen.  
  
Beispiel für ein CIS AWS 3.10-Ereignis:
```json {linenos=table,hl_lines=[],linenostart=50}
{
  "version": "0",
  "id": "3bfd2f21-b57f-5cae-5423-cefcda82691b",
  "detail-type": "AWS API Call via CloudTrail",
  "source": "aws.ec2",
  "account": "215125613612",
  "time": "2021-11-04T15:56:41Z",
  "region": "eu-west-1",
  "resources": [],
  "detail": {
    "eventVersion": "1.08",
    "userIdentity": {
      "type": "AssumedRole",
      "principalId": "AGDLJ51ASFJ15AFGSX15X:noreply@nuvibit.com",
      "arn": "arn:aws:sts::215125613612:assumed-role/AWS_AdministratorAccess_11agga1jh2g5jk1/noreply@nuvibit.com",
      "accountId": "215125613612",
      "accessKeyId": "LJFA22VZY6Q7WVSS2RX",
      "sessionContext": {
        "sessionIssuer": {
          "type": "Role",
          "principalId": "AGDLJ51ASFJ15AFGSX15X",
          "arn": "arn:aws:iam::215125613612:role/aws-reserved/sso.amazonaws.com/eu-central-1/AWS_AdministratorAccess_11agga1jh2g5jk1",
          "accountId": "215125613612",
          "userName": "AWS_AdministratorAccess_11agga1jh2g5jk1"
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
    "sourceIPAddress": "72.21.210.29",
    "userAgent": "console.ec2.amazonaws.com",
    "requestParameters": {
      "groupId": "sg-b15kasfs",
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
      "requestId": "233ec260-412d-40dc-918b-e3ced0e85977",
      "_return": true,
      "securityGroupRuleSet": {
        "items": [
          {
            "groupOwnerId": "215125613612",
            "groupId": "sg-b15kasfs",
            "securityGroupRuleId": "sgr-0c609eafsa2af10ea",
            "isEgress": false,
            "ipProtocol": "tcp",
            "fromPort": 0,
            "toPort": 65535,
            "cidrIpv4": "0.0.0.0/0"
          }
        ]
      }
    },
    "requestID": "233ec260-412d-40dc-918b-e3ced0e85977",
    "eventID": "ed2b58c7-5b71-49d8-412d-66b695f0e2a7",
    "readOnly": false,
    "eventType": "AwsApiCall",
    "managementEvent": true,
    "recipientAccountId": "215125613612",
    "eventCategory": "Management"
  }
}
```
Wie Sie sehen, enthält das Ereignis umfangreiche Informationen, die für die weitere Sicherheitsverarbeitung wertvoll sind.<br/><br/>

## Fazit
Wir empfehlen, ***Amazon EventBridge Rules für die Überwachung von CIS AWS 3.x*** zu verwenden und den Ereignisinformationen noch mehr Kontext wie zum Beispiel Account-Tags und OU-ID des verursachenden Accounts  hinzuzufügen.<br/>
Darüber hinaus empfehlen wir, über die CIS AWS 3.x-Empfehlung hinaus zusätzliche Sensoren zu platzieren, wie zum Beispiel:

\- Monitor for OU-SCP assignment changes<br/>
\- Monitor for SCP policy changes<br/>
\- Monitor for OU structure changes<br/>
\- Monitor for Account-OU assignment changes<br/><br/>

<!-- Wenn Sie eine AWS Multi-Account Umgebung verwalten und nach einer Lösung suchen, um die Amazon EventBridge Rules in all Ihren Accounts präzise zu verwalten, können Sie uns gerne kontaktieren und mehr über **[SEMPER](/de/contact/ 'Kontakt aufnehmen für mehr Infos!')** erfahren. -->

## Unsere Lösung

Ihre Workloads sind über mehrere AWS Accounts und eventuell sogar verschiedene Regionen verteilt?

Mit unserer cloud-nativen, Serverless-Lösung **[SEMPER](/contact/ 'Kontakt aufnehmen für mehr Infos!')** können Sie Amazon EventBridge- und AWS Config Rules zentral bereitstellen und resultierende Events sowie AWS Security Hub und Amazon GuardDuty Findings sinnvoll filtern.
Darüber hinaus können Sie relevante Findings mit wichtigen Zusatzinformationen anreichern und die gesamte Lösung über ein zentrales **[Policy as Code](/faq/#pac 'Was ist Policy as Code?')** Repository verwalten.