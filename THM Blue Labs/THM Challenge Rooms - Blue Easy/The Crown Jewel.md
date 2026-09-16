Triage a critical alert using Wireshark and Splunk to trace the network intrusion attempt.

You are on a shift, looking at the new alert coming from Imperium Labs - a company under MSSP monitoring long before you joined the team. It's hard to say what the company's primary focus is, but it has a global presence and undoubtedly has secrets to protect, especially those on heavily secured GitLab and Jira servers which store proprietary source code and project data.
## The Alert

The alert you are looking at is called `Reverse Shell Outbound Connection Detected`, not something you see every day. Fortunately, you were able to obtain the raw PCAPs and Splunk logs for this event. Can you analyze the network traffic and logs to reconstruct and stop a sophisticated attack aimed at stealing the "Crown Jewel" data?

![](https://cdn-images.tryhackme.com/user-uploads/5e8dd9a4a45e18443162feab/room-content/5e8dd9a4a45e18443162feab-1762806692464.png)

## Machine Access

To access the VM, click the **Start Machine** button below. Please give the VM up to five minutes to start and piece together the attack chain:

- Detailed network traffic capture `challenge.pcap` that you can find on the `network_traffic` folder on the VM's Desktop
- Pre-ingested Splunk logs (`index=network_logs`), which can be accessed at `MACHINE_IP:8000`

![](../../THM%20Red%20Labs/THM%20Challenge%20Rooms%20-%20Red%20Easy/Obsidian%20assets/The%20Crown%20Jewel.png)

![](../../THM%20Red%20Labs/THM%20Challenge%20Rooms%20-%20Red%20Easy/Obsidian%20assets/The%20Crown%20Jewel%20-%20SourceIP.png)

![](../../THM%20Red%20Labs/THM%20Challenge%20Rooms%20-%20Red%20Easy/Obsidian%20assets/The%20Crown%20Jewel%20-%20Dest%20IP%20+%20Port.png)

![](../../THM%20Red%20Labs/THM%20Challenge%20Rooms%20-%20Red%20Easy/Obsidian%20assets/The%20Crown%20Jewel%20-%20MAC%20address.png)

![](../../THM%20Red%20Labs/THM%20Challenge%20Rooms%20-%20Red%20Easy/Obsidian%20assets/The%20Crown%20Jewel%20-%20non%20standard%20user%20agent.png)

![](../../THM%20Red%20Labs/THM%20Challenge%20Rooms%20-%20Red%20Easy/Obsidian%20assets/The%20Crown%20Jewel%20-%20ARP%20spoof%20count.png)

