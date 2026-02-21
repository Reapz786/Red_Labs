---
title: Bounty Hacker
difficulty: Easy
platform: THM
tags:
tools:
date: 2026-02-21
---
![](Bounty%20Hacker.png)
> [!important]
> You talked a big game about being the most elite hacker in the solar system. Prove it and claim your right to the status of Elite Bounty Hacker!
> 
> You were boasting on and on about your elite hacker skills in the bar and a few Bounty Hunters decided they'd take you up on claims! Prove your status is more than just a few glasses at the bar. I sense bell peppers & beef in your future!
> Target IP: 10.66.165.14510.66.165.145
> Find open ports on the machine 

```
┌──(kali㉿kali)-[~]
└─$ sudo nmap 10.66.165.145              
[sudo] password for kali: 
Starting Nmap 7.95 ( https://nmap.org ) at 2026-02-21 09:03 EST
Nmap scan report for 10.66.165.145
Host is up (0.086s latency).
Not shown: 967 filtered tcp ports (no-response), 30 closed tcp ports (reset)
PORT   STATE SERVICE
21/tcp open  ftp
22/tcp open  ssh
80/tcp open  http

Nmap done: 1 IP address (1 host up) scanned in 4.83 seconds
```
