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

> [!info]
> OK, first medium THM room, let's start with enumeration as always.

```
> sudo nmap -p- -A -O -sVC 10.114.165.225
[sudo] password for reapz786:
Starting Nmap 7.98 ( https://nmap.org ) at 2026-03-03 12:43 +0000
Nmap scan report for 10.114.165.225
Host is up (0.021s latency).
Not shown: 65533 closed tcp ports (reset)
PORT   STATE SERVICE VERSION
22/tcp open  ssh     OpenSSH 8.2p1 Ubuntu 4ubuntu0.13 (Ubuntu Linux; protocol 2.0)
| ssh-hostkey:
|   3072 9e:da:82:29:3f:ce:c1:86:57:2c:1e:c2:1d:ac:9f:bc (RSA)
|   256 4a:40:6d:19:f7:19:97:c0:5c:13:71:01:83:c3:d2:17 (ECDSA)
|_  256 0c:ce:2d:62:11:c2:00:8b:ee:70:41:19:f0:bf:f0:56 (ED25519)
80/tcp open  http    Apache httpd 2.4.41 ((Ubuntu))
|_http-title: Did not follow redirect to http://www.smol.thm
|_http-server-header: Apache/2.4.41 (Ubuntu)
No exact OS matches for host (If you know what OS is running on it, see https://nmap.org/submit/ ).
TCP/IP fingerprint:
OS:SCAN(V=7.98%E=4%D=3/3%OT=22%CT=1%CU=35634%PV=Y%DS=3%DC=T%G=Y%TM=69A6D7A7
OS:%P=x86_64-pc-linux-gnu)SEQ(SP=104%GCD=1%ISR=107%TI=Z%TS=A)SEQ(SP=104%GCD
OS:=1%ISR=109%TI=Z%TS=A)SEQ(SP=105%GCD=1%ISR=10B%TI=Z%TS=A)SEQ(SP=107%GCD=1
OS:%ISR=10D%TI=Z%TS=A)SEQ(SP=FE%GCD=1%ISR=109%TI=Z%TS=A)OPS(O1=M4E8ST11NW7%
OS:O2=M4E8ST11NW7%O3=M4E8NNT11NW7%O4=M4E8ST11NW7%O5=M4E8ST11NW7%O6=M4E8ST11
OS:)WIN(W1=F4B3%W2=F4B3%W3=F4B3%W4=F4B3%W5=F4B3%W6=F4B3)ECN(R=N)T1(R=Y%DF=Y
OS:%TG=40%S=O%A=S+%F=AS%RD=0%Q=)T1(R=Y%DF=Y%T=40%S=O%A=S+%F=AS%RD=0%Q=)T2(R
OS:=N)T3(R=N)T4(R=N)T5(R=N)T6(R=N)T7(R=N)U1(R=N)U1(R=Y%DF=N%T=40%IPL=164%UN
OS:=0%RIPL=G%RID=G%RIPCK=G%RUCK=G%RUD=G)IE(R=Y%DFI=N%TG=40%CD=S)IE(R=Y%DFI=
OS:N%T=40%CD=S)

Network Distance: 3 hops
Service Info: OS: Linux; CPE: cpe:/o:linux:linux_kernel

TRACEROUTE (using port 587/tcp)
HOP RTT      ADDRESS
1   18.83 ms 192.168.128.1
2   ...
3   20.84 ms 10.114.165.225

OS and Service detection performed. Please report any incorrect results at https://nmap.org/submit/ .
Nmap done: 1 IP address (1 host up) scanned in 43.38 seconds
```

> [!note]
> Contents