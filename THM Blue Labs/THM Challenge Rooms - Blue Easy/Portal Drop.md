Investigate a suspected breach on a CRM portal using logs and EDR data.

## Portal Drop

You are on the day shift in the ProbablyFine when the monitoring dashboard flashes red. A new alert appears in the WAF summary, reporting a web scan on `crm.trypatchme.thm` followed by a suspicious file upload anomaly. The affected website is TryPatchMe's public-facing CRM portal, a valued customer who provides software patching consulting services.

That should be an easy case, since you have access to both the web access logs and the EDR console. Combined, they should give you a clear answer: either it's a False Positive, or the portal has been breached and TryPatchMe needs to patch the CRM now!

To solve this case, you will need to correlate activity between two primary sources:

- Web Access Logs: Click the **Download Task Files** button to retrieve the raw traffic data. You may find it helpful to use tools like `grep`, `awk`, or a spreadsheet editor to work through the file.

- EDR Console: You have access to the EDR console below, which is the primary tool for investigating the resulting attack detections and initiate response actions to contain the threat.

|            |                                                                                            |
| ---------- | ------------------------------------------------------------------------------------------ |
| **Access** | Granted                                                                                    |
| **URL**    | [EDR Console(opens in new tab)](https://static-labs.tryhackme.cloud/apps/portal-drop-edr/) |
What is the IP address that initiated the brute force on the CRM web portal?

> [!info]
> Realised when loking for bruteforce - it involves login in the URI/URL and its a POST request so looked at highest occuring IP that had it and boom!

![](../../THM%20Red%20Labs/THM%20Challenge%20Rooms%20-%20Red%20Easy/Obsidian%20assets/Portal%20Drop%20-%20brutforcing.png)

How many successful and failed logins are seen in the logs?  
Answer Example: 42, 56

```
> grep '/login' access-combined-crm-1767978582478-1768841821765.log | awk '{print $9}' | sort | uniq -c
     18 200
     35 401
 ~/Downloads/THM rooms/Portal Drop                                                  at 19:41:18
>
```

Following the brute force, which user-agent was used for the file upload?

![](../../THM%20Red%20Labs/THM%20Challenge%20Rooms%20-%20Red%20Easy/Obsidian%20assets/Portal%20Drop%20-%20user%20agent.png)

What was the name of the suspicious file uploaded by the attacker?

![](../../THM%20Red%20Labs/THM%20Challenge%20Rooms%20-%20Red%20Easy/Obsidian%20assets/Portal%20Drop%20-%20invoice%20file.png)

At what time did the attacker first invoke the uploaded script?  
Answer Example: 2025-10-24 15:35:50

![](../../THM%20Red%20Labs/THM%20Challenge%20Rooms%20-%20Red%20Easy/Obsidian%20assets/Portal%20Drop%20-%20first%20time%20file%20invoked.png)

What is the first decoded command the attacker ran on the CRM?

![](../../THM%20Red%20Labs/THM%20Challenge%20Rooms%20-%20Red%20Easy/Obsidian%20assets/Portal%20Drop%20-%20whoami.png)


> [!Info] 
> Realised every cmd everyone inputs wehen they first enter a system is whoamii so logcal guess

Based on the attacker’s activity on the CRM, which MITRE ATT&CK Persistence sub-technique ID is most applicable?

![](../../THM%20Red%20Labs/THM%20Challenge%20Rooms%20-%20Red%20Easy/Obsidian%20assets/Portal%20Drop%20-%20technique.png)

![](../../THM%20Red%20Labs/THM%20Challenge%20Rooms%20-%20Red%20Easy/Obsidian%20assets/Portal%20Drop%20-%20sub%20technique.png)


