Gather threat intel to determine the risks and assist incident response.
## Unusual Login

Welcome to your first shift! You are greeted by an internal alert on the SOC dashboard titled "Unusual VPN login of susan.martin@probablyfine.thm from 37.19.201.132 (Singapore)."

The SOC handover notes did indeed mention that Susan from Marketing is in Singapore, attending a security vendor conference. It is probably just fine, but the SOC procedure tells us to verify each IP in our threat intel platform TryDetectThis. Answer the first **four** questions to gather more information and determine the threat level.
## Security Check Tool

That login IP looks suspicious, doesn't it? Your teammates reached out to Susan, and she confirmed she did not log in to the company VPN. She also mentioned that while using a public Wi-Fi hotspot at a cafe, she was suddenly prompted to install a "security check" tool, which she did. The host telemetry reveals a suspicious binary with the hash **b8e02f2bc0ffb42e8cf28e37a26d8d825f639079bf6d948f8debab6440ee5630**. Can you help us figure out what this binary exactly does and answer the remaining questions?

## TryDetectThis

TryDetectThis is a threat intelligence database to check the reputation and other details of IP addresses, domains, and file hashes. To access this platform, please navigate to the following URL in your own browser: 

|   |   |
|---|---|
|**Access**|Granted|
|**URL**|[TryDetectThis(opens in new tab)](https://static-labs.tryhackme.cloud/apps/trydetectthis/)|

What is the ASN number related to the IP?

![](../../THM%20Red%20Labs/THM%20Challenge%20Rooms%20-%20Red%20Easy/Obsidian%20assets/Just%20a%20VPN%20Login%20-%20ASN.png)

Which service is offered from this IP?

![](../../THM%20Red%20Labs/THM%20Challenge%20Rooms%20-%20Red%20Easy/Obsidian%20assets/Just%20a%20VPN%20Login%20-%20vpn.png)

What is the filename of the file related to the hash?

![](../../THM%20Red%20Labs/THM%20Challenge%20Rooms%20-%20Red%20Easy/Obsidian%20assets/Just%20a%20VPN%20Login%20-%20hash%20of%20file.png)

What is the threat signature that Microsoft assigned to the file?

![](../../THM%20Red%20Labs/THM%20Challenge%20Rooms%20-%20Red%20Easy/Obsidian%20assets/Just%20a%20VPN%20Login%20-%20microsoft.png)

One of the contacted domains is part of a large malicious infrastructure cluster.  
Based on its HTTPS certificate, how many domains are linked to the same campaign?

![](../../THM%20Red%20Labs/THM%20Challenge%20Rooms%20-%20Red%20Easy/Obsidian%20assets/Just%20a%20VPN%20Login%20-%20domain.png)

The file matches one of the YARA rules made by "kevoreilly".  
What line is present in the rule's "condition" field?

![](../../THM%20Red%20Labs/THM%20Challenge%20Rooms%20-%20Red%20Easy/Obsidian%20assets/Just%20a%20VPN%20Login%20-%20YARA%20CROFT.png)

The file is also mentioned in a threat intel report.  
What is the title of the report mentioning this hash?

![](../../THM%20Red%20Labs/THM%20Challenge%20Rooms%20-%20Red%20Easy/Obsidian%20assets/Just%20a%20VPN%20Login%20-%20report%20mention.png)

Which team did the author of the malware start collaborating with in early 2024?

![](../../THM%20Red%20Labs/THM%20Challenge%20Rooms%20-%20Red%20Easy/Obsidian%20assets/Just%20a%20VPN%20Login%20-%20collab.png)

A Mexican-based affiliate related to the malware family also uses other infostealers.  
Which mentioned infostealer targets Android systems?



The report states that the affiliates behind the malware use the services of AnonRDP. Which Mitre ATT&CK sub-technique does this align with?