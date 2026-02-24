---
title: Expose
difficulty: Easy
platform: THM
tags:
tools:
date: 2026-02-24
---
![](Obsidian%20assets/intro.png)
> [!important]
> Use your red teaming knowledge to pwn a Linux machine.
> 
> _Exposing unnecessary services in a machine can be dangerous. Can you capture the flags and pwn the machine_?
> 
> Target IP: 10.114.173.211
> 
> What is the user flag?

> [!info]
> Okay no guidance given for this one so lets start with enumerating.

```
┌──(kali㉿kali)-[~/Downloads]
└─$ sudo nmap 10.114.173.211    
Starting Nmap 7.95 ( https://nmap.org ) at 2026-02-24 10:11 EST
Nmap scan report for 10.114.173.211
Host is up (0.024s latency).
Not shown: 997 closed tcp ports (reset)
PORT   STATE SERVICE
21/tcp open  ftp
22/tcp open  ssh
53/tcp open  domain

Nmap done: 1 IP address (1 host up) scanned in 0.81 seconds
```
> [!note]
> Ok basic scan reveals 3 open ports but I will do a more aggressive scan to reveal further information like OS scan, version scan and see what domain reveals,

```
┌──(kali㉿kali)-[~/Downloads]
└─$ sudo nmap -A -O -sVC -p- 10.114.173.211
Starting Nmap 7.95 ( https://nmap.org ) at 2026-02-24 10:11 EST
Nmap scan report for 10.114.173.211
Host is up (0.023s latency).
Not shown: 65530 closed tcp ports (reset)
PORT     STATE SERVICE                 VERSION
21/tcp   open  ftp                     vsftpd 2.0.8 or later
|_ftp-anon: Anonymous FTP login allowed (FTP code 230)
| ftp-syst: 
|   STAT: 
| FTP server status:
|      Connected to ::ffff:192.168.148.210
|      Logged in as ftp
|      TYPE: ASCII
|      No session bandwidth limit
|      Session timeout in seconds is 300
|      Control connection is plain text
|      Data connections will be plain text
|      At session startup, client count was 2
|      vsFTPd 3.0.3 - secure, fast, stable
|_End of status
22/tcp   open  ssh                     OpenSSH 8.2p1 Ubuntu 4ubuntu0.7 (Ubuntu Linux; protocol 2.0)
| ssh-hostkey: 
|   3072 be:51:4e:77:d2:84:e9:bd:79:27:f5:bf:8a:9e:4c:f7 (RSA)
|   256 64:09:cc:b3:82:be:b4:99:37:1b:08:75:45:22:c5:f4 (ECDSA)
|_  256 2d:e3:7e:f7:0b:7d:58:8c:46:4f:cb:90:62:d6:ff:e9 (ED25519)
53/tcp   open  domain                  ISC BIND 9.16.1 (Ubuntu Linux)
| dns-nsid: 
|_  bind.version: 9.16.1-Ubuntu
1337/tcp open  http                    Apache httpd 2.4.41 ((Ubuntu))
|_http-server-header: Apache/2.4.41 (Ubuntu)
|_http-title: EXPOSED
1883/tcp open  mosquitto version 1.6.9
| mqtt-subscribe: 
|   Topics and their most recent payloads: 
|     $SYS/broker/messages/sent: 1
|     $SYS/broker/version: mosquitto version 1.6.9
|     $SYS/broker/load/messages/sent/5min: 0.20
|     $SYS/broker/heap/maximum: 49688
|     $SYS/broker/load/sockets/15min: 0.07
|     $SYS/broker/load/messages/sent/1min: 0.76
|     $SYS/broker/load/connections/5min: 0.20
|     $SYS/broker/uptime: 462 seconds
|     $SYS/broker/clients/disconnected: 0
|     $SYS/broker/load/messages/received/1min: 0.76
|     $SYS/broker/store/messages/bytes: 180
|     $SYS/broker/messages/received: 1
|     $SYS/broker/load/connections/15min: 0.07
|     $SYS/broker/bytes/sent: 4
|     $SYS/broker/load/sockets/5min: 0.20
|     $SYS/broker/load/bytes/received/1min: 13.69
|     $SYS/broker/load/bytes/received/15min: 1.18
|     $SYS/broker/load/bytes/sent/1min: 3.04
|     $SYS/broker/load/bytes/received/5min: 3.41
|     $SYS/broker/bytes/received: 18
|     $SYS/broker/clients/active: 0
|     $SYS/broker/load/bytes/sent/15min: 0.27
|     $SYS/broker/clients/connected: 0
|     $SYS/broker/load/sockets/1min: 0.63
|     $SYS/broker/load/messages/sent/15min: 0.07
|     $SYS/broker/load/connections/1min: 0.76
|     $SYS/broker/clients/inactive: 0
|     $SYS/broker/heap/current: 47240
|     $SYS/broker/load/messages/received/15min: 0.07
|     $SYS/broker/load/messages/received/5min: 0.20
|_    $SYS/broker/load/bytes/sent/5min: 0.76
No exact OS matches for host (If you know what OS is running on it, see https://nmap.org/submit/ ).
TCP/IP fingerprint:
OS:SCAN(V=7.95%E=4%D=2/24%OT=21%CT=1%CU=38079%PV=Y%DS=3%DC=T%G=Y%TM=699DBFD
OS:C%P=x86_64-pc-linux-gnu)SEQ(SP=102%GCD=1%ISR=10B%TI=Z%CI=Z%II=I%TS=A)SEQ
OS:(SP=104%GCD=1%ISR=10A%TI=Z%CI=Z%II=I%TS=A)SEQ(SP=105%GCD=1%ISR=109%TI=Z%
OS:CI=Z%II=I%TS=A)SEQ(SP=105%GCD=1%ISR=10B%TI=Z%CI=Z%II=I%TS=A)SEQ(SP=FF%GC
OS:D=1%ISR=103%TI=Z%CI=Z%II=I%TS=A)OPS(O1=M4E8ST11NW7%O2=M4E8ST11NW7%O3=M4E
OS:8NNT11NW7%O4=M4E8ST11NW7%O5=M4E8ST11NW7%O6=M4E8ST11)WIN(W1=F4B3%W2=F4B3%
OS:W3=F4B3%W4=F4B3%W5=F4B3%W6=F4B3)ECN(R=Y%DF=Y%T=40%W=F507%O=M4E8NNSNW7%CC
OS:=Y%Q=)T1(R=Y%DF=Y%T=40%S=O%A=S+%F=AS%RD=0%Q=)T2(R=N)T3(R=N)T4(R=Y%DF=Y%T
OS:=40%W=0%S=A%A=Z%F=R%O=%RD=0%Q=)T5(R=Y%DF=Y%T=40%W=0%S=Z%A=S+%F=AR%O=%RD=
OS:0%Q=)T6(R=Y%DF=Y%T=40%W=0%S=A%A=Z%F=R%O=%RD=0%Q=)T7(R=Y%DF=Y%T=40%W=0%S=
OS:Z%A=S+%F=AR%O=%RD=0%Q=)U1(R=Y%DF=N%T=40%IPL=164%UN=0%RIPL=G%RID=G%RIPCK=
OS:G%RUCK=G%RUD=G)IE(R=Y%DFI=N%T=40%CD=S)
Network Distance: 3 hops
Service Info: OS: Linux; CPE: cpe:/o:linux:linux_kernel
TRACEROUTE (using port 554/tcp)
HOP RTT      ADDRESS
1   19.79 ms 192.168.128.1
2   ...
3   22.87 ms 10.114.173.211

OS and Service detection performed. Please report any incorrect results at https://nmap.org/submit/ .
Nmap done: 1 IP address (1 host up) scanned in 65.98 seconds
```
> [!note]
> FTP aggressive scanning reveals version vsftpd 2.0.8 with anonymous login allowed so potential attack vector there.
> 
> SSH open port doesn't reveal much useful info but will probably be used to find user.txt
> 
> domain port doesn't reveal much but Gobuster scan can explore the sub-domain for any useful info.
> 
> 1337/tcp open  http Apache httpd 2.4.41 ((Ubuntu)) - This is great as this means there's a webpage to view but not on port 80 but rather 1337 (leet code).
> 
> 1883/tcp open  mosquitto version 1.6.9 - not sure what this relates to but research around this needs to be done. Guessing for now its a DB? there were file paths revealed involving $SYS path
> 
> OS detected is Linux.

> [!info]
>Let's continue with enumeration so lets check out the website for any low hanging fruit and start a Gobuster scan in the background.

![](Obsidian%20assets/Expose%20error.png)
> [!note]
> Am I not viewing the site correctly?
> Quick google search revealed I was attempting a HTTPS connection request when it should be HTTP request

![](Obsidian%20assets/Exposed%20site.png)


fdff