---
title: Blue
difficulty: Easy
platform: THM
tags:
tools:
date: 2026-02-20
---
![[Blue-2.png]]

> [!important]
> Deploy & hack into a Windows machine, leveraging common misconfigurations issues.
> 10.67.147.22
> Scan and learn what exploit this machine is vulnerable to. Please note that this machine does not respond to ping (ICMP) and may take a few minutes to boot up. **This room is not meant to be a boot2root CTF, rather, this is an educational series for complete beginners. Professionals will likely get very little out of this room beyond basic practice as the process here is meant to be beginner-focused.**

> [!important]
>How many ports are open with a port number under 1000?

> [!note]
> Using the following nmap syntax/cmd/script, I found that there is 3 ports open under 1000:

```
┌──(kali㉿kali)-[~]
└─$ sudo nmap 10.67.147.22         
[sudo] password for kali: 
Starting Nmap 7.95 ( https://nmap.org ) at 2026-02-20 15:28 EST
Nmap scan report for 10.67.147.22
Host is up (0.091s latency).
Not shown: 991 closed tcp ports (reset)
PORT      STATE SERVICE
135/tcp   open  msrpc
139/tcp   open  netbios-ssn
445/tcp   open  microsoft-ds
3389/tcp  open  ms-wbt-server
49152/tcp open  unknown
49153/tcp open  unknown
49154/tcp open  unknown
49158/tcp open  unknown
49159/tcp open  unknown

Nmap done: 1 IP address (1 host up) scanned in 2.71 seconds
```

> [!important]
> What is this machine vulnerable to? (Answer in the form of: ms??-???, ex: ms08-067)

> [!note]
> To find this out I ran a deeper nmap scan
