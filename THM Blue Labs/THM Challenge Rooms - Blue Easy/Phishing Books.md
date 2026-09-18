Uncover and investigate a phishing campaign targeting the education sector.

## Phishing Books

It's another typical day at **ProbablyFine Ltd**. Your SOC dashboard is glowing with endless alerts, most of them false positives, as usual. Your team manages several education-sector clients, including universities, schools, and research institutes across the UK. Today, you are in charge of monitoring alerts from universities in London.

Normally, things stay quiet. These universities are very targeted by phishing attacks, but most attempts get stopped by the email filters before anyone even sees them. But today is different. You got an email from a university teacher:

**Subject:** MFA Removal Requests  
**From:** Dr. Isabella <isabella@kingford.ac.uk>

> _Hey, ProbablyFine SOC Team,  
> __I've been getting several emails asking me to approve my MFA.  
> Are you performing any tests? Should I approve these requests?_  
> _Dr. Isabella_

You contact Dr. Isabella directly, and it becomes clear that she has been targeted by a phishing email designed to steal her credentials, which is why she is receiving multiple MFA requests! You advise her to reset her password immediately.

Now it's time to dig deeper: No alerts were triggered in your SIEM, so you requested the original `.eml` file of the phishing email to perform a manual investigation. Was this an isolated hit, or part of a larger phishing campaign targeting universities? Start the analysis machine and examine the email. Let's see what’s really going on!
## Machine Access

For this challenge, you are given an instance containing the `.eml` file reported by Dr. Isabella. Please start the machine by clicking the "**Start Machine**" button below.

**Ensure that you test and analyze the file inside the VM environment.**

You also have access to TryDetectThis, a threat intelligence database to check the reputation and other details of IP addresses, domains, and file hashes. To access this platform, please navigate to the following URL in your own browser, outside the VM environment:

|   |   |
|---|---|
|**Access**|Granted|
|**URL**|[TryDetectThis(opens in new tab)](https://static-labs.tryhackme.cloud/apps/trydetectthis/)|
Answer the questions below

Which specific header check explains why Isabella received the email without being rejected by the email platform?  
Answer Example: "CHECK=value"

![](../../THM%20Red%20Labs/THM%20Challenge%20Rooms%20-%20Red%20Easy/Obsidian%20assets/Phishing%20Books%20-%20DMARC.png)

What technique did the attacker use to make the message seem legitimate? Typosquatting

![](../../THM%20Red%20Labs/THM%20Challenge%20Rooms%20-%20Red%20Easy/Obsidian%20assets/Phishing%20Books%20-%20typosquatting.png)

Which MITRE technique and sub-technique ID best fit this sender address trick?

![](../../THM%20Red%20Labs/THM%20Challenge%20Rooms%20-%20Red%20Easy/Obsidian%20assets/Phishing%20Books%20-%20mitre.png)

What is the file extension of the attached file?

![](../../THM%20Red%20Labs/THM%20Challenge%20Rooms%20-%20Red%20Easy/Obsidian%20assets/Phishing%20Books%20-%20html.png)

What is the MD5 hash of the .HTML file?  

![](../../THM%20Red%20Labs/THM%20Challenge%20Rooms%20-%20Red%20Easy/Obsidian%20assets/Phishing%20Books%20=%20md5.png)

What is the landing page of the phishing attack?

![](../../THM%20Red%20Labs/THM%20Challenge%20Rooms%20-%20Red%20Easy/Obsidian%20assets/Phishing%20Books%20-%20url.png)

Which MITRE technique ID was used inside the attached file?  

![](../../THM%20Red%20Labs/THM%20Challenge%20Rooms%20-%20Red%20Easy/Obsidian%20assets/Phishing%20Books%20-%20obconfusious.png)

What is the hidden message the attacker left in the file?  Reverse from nano'd file

![](../../THM%20Red%20Labs/THM%20Challenge%20Rooms%20-%20Red%20Easy/Obsidian%20assets/Phishing%20Books%20-%20reverser.png)

Which line in the attached file is responsible for decoding the URL redirect?

![](../../THM%20Red%20Labs/THM%20Challenge%20Rooms%20-%20Red%20Easy/Obsidian%20assets/Phishing%20Books%20-%20line%20reverser.png)

What is the first URL in the redirect chain?

http://xn--librarytlu-13cwe32432-kwr.com:8082 - cheatedd for that

What is the Threat Actor associated with this malicious file and/or URL?

![](../../THM%20Red%20Labs/THM%20Challenge%20Rooms%20-%20Red%20Easy/Obsidian%20assets/Phishing%20Books%20=%20threat%20actors.png)

What is the main target of this Threat Actor according to MITRE?