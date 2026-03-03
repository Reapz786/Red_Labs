---
title: Smol
difficulty: Medium
platform: THM
tags:
tools:
date: 2026-03-03
---
![](../THM%20Challenge%20Rooms%20-%20Red%20Easy/Obsidian%20assets/Smol-3.png)

> [!important]
> At the heart of **Smol** is a WordPress website, a common target due to its extensive plugin ecosystem. 
> 
> The machine showcases a publicly known vulnerable plugin, highlighting the risks of neglecting software updates and security patches. 
> 
> Enhancing the learning experience, Smol introduces a backdoored plugin, emphasizing the significance of meticulous code inspection before integrating third-party components.
> 
> Target IP Address: 10.114.165.225
> 
> What is the user flag?

> [!info]
> OK, first medium THM room, let's start with enumeration as always.

```
> sudo nmap -p- -A -O -sVC www.smol.thm
Starting Nmap 7.98 ( https://nmap.org ) at 2026-03-03 12:51 +0000
Nmap scan report for www.smol.thm (10.114.165.225)
Host is up (0.022s latency).
Not shown: 65533 closed tcp ports (reset)
PORT   STATE SERVICE VERSION
22/tcp open  ssh     OpenSSH 8.2p1 Ubuntu 4ubuntu0.13 (Ubuntu Linux; protocol 2.0)
| ssh-hostkey:
|   3072 9e:da:82:29:3f:ce:c1:86:57:2c:1e:c2:1d:ac:9f:bc (RSA)
|   256 4a:40:6d:19:f7:19:97:c0:5c:13:71:01:83:c3:d2:17 (ECDSA)
|_  256 0c:ce:2d:62:11:c2:00:8b:ee:70:41:19:f0:bf:f0:56 (ED25519)
80/tcp open  http    Apache httpd 2.4.41 ((Ubuntu))
|_http-title: AnotherCTF
|_http-server-header: Apache/2.4.41 (Ubuntu)
|_http-generator: WordPress 6.7.1
No exact OS matches for host (If you know what OS is running on it, see https://nmap.org/submit/ ).
TCP/IP fingerprint:
OS:SCAN(V=7.98%E=4%D=3/3%OT=22%CT=1%CU=39188%PV=Y%DS=3%DC=T%G=Y%TM=69A6D995
OS:%P=x86_64-pc-linux-gnu)SEQ(SP=105%GCD=1%ISR=10D%TI=Z%CI=Z%II=I%TS=A)SEQ(
OS:SP=107%GCD=1%ISR=106%TI=Z%TS=A)SEQ(SP=FD%GCD=1%ISR=105%TI=Z%CI=Z%II=I%TS
OS:=A)SEQ(SP=FD%GCD=1%ISR=106%TI=Z%CI=Z%II=I%TS=A)SEQ(SP=FE%GCD=1%ISR=108%T
OS:I=Z%CI=Z%II=I%TS=A)OPS(O1=M4E8ST11NW7%O2=M4E8ST11NW7%O3=M4E8NNT11NW7%O4=
OS:M4E8ST11NW7%O5=M4E8ST11NW7%O6=M4E8ST11)WIN(W1=F4B3%W2=F4B3%W3=F4B3%W4=F4
OS:B3%W5=F4B3%W6=F4B3)ECN(R=Y%DF=Y%T=40%W=F507%O=M4E8NNSNW7%CC=Y%Q=)T1(R=Y%
OS:DF=Y%T=40%S=O%A=S+%F=AS%RD=0%Q=)T2(R=N)T3(R=N)T4(R=N)T4(R=Y%DF=Y%T=40%W=
OS:0%S=A%A=Z%F=R%O=%RD=0%Q=)T5(R=N)T5(R=Y%DF=Y%T=40%W=0%S=Z%A=S+%F=AR%O=%RD
OS:=0%Q=)T6(R=N)T6(R=Y%DF=Y%T=40%W=0%S=A%A=Z%F=R%O=%RD=0%Q=)T7(R=N)T7(R=Y%D
OS:F=Y%T=40%W=0%S=Z%A=S+%F=AR%O=%RD=0%Q=)U1(R=Y%DF=N%T=40%IPL=164%UN=0%RIPL
OS:=G%RID=G%RIPCK=G%RUCK=G%RUD=G)IE(R=Y%DFI=N%T=40%CD=S)

Network Distance: 3 hops
Service Info: OS: Linux; CPE: cpe:/o:linux:linux_kernel

TRACEROUTE (using port 5900/tcp)
HOP RTT      ADDRESS
1   18.78 ms 192.168.128.1
2   ...
3   20.30 ms www.smol.thm (10.114.165.225)

OS and Service detection performed. Please report any incorrect results at https://nmap.org/submit/ .
Nmap done: 1 IP address (1 host up) scanned in 47.90 seconds
```

> [!note]
> Only two ports opened and had to add www.smol.thm to the /etc/hosts file.

```
> searchsploit 6.7.1
-------------------------------------------------------------------------------------------- ---------------------------------
 Exploit Title                                                                              |  Path
-------------------------------------------------------------------------------------------- ---------------------------------
AnyDVD 6.7.1.0 - Denial of Service                                                          | windows_x86/dos/15306.pl
Cisco Firepower Management Center < 6.6.7.1 - Authenticated RCE                             | hardware/webapps/51881.py
Man-db 2.6.7.1 - Local Privilege Escalation                                                 | linux/local/41158.md
McAfee Email Gateway 6.7.1 - 'systemWebAdminConfig.do' Remote Security Bypass               | windows/remote/34013.txt
MedDream PACS Server Premium 6.7.1.1 - 'email' SQL Injection                                | php/webapps/45344.txt
PHPCompta/NOALYSS 6.7.1 5638 - Remote Command Execution                                     | php/webapps/34861.txt
Softneta MedDream PACS Server Premium 6.7.1.1 - Directory Traversal                         | php/webapps/45347.txt
SolarWinds Kiwi Syslog Server 9.6.7.1 - Unquoted Service Path                               | windows/local/52064.txt
WordPress Theme Newspaper 6.7.1 - Privilege Escalation                                      | php/webapps/39894.php
-------------------------------------------------------------------------------------------- ---------------------------------
Shellcodes: No Results
```

> [!note]
> While awaiting gobuster web directory enumeration - I decided to look up wordpress 6.7.1 vulnerabilities and saw on searchsploit and exploit DB https://www.exploit-db.com/exploits/39894 paths for PE further into the 