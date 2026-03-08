---
title: Rabbit Store
difficulty: Medium
platform: THM
tags:
tools:
date: 2026-03-08
---
![](../THM%20Challenge%20Rooms%20-%20Red%20Easy/Obsidian%20assets/Rabbit%20Store.png)

> [!important]
> Demonstrate your web application testing skills and the basics of Linux to escalate your privileges.
> 
> What is user.txt?
> 
> Target IP Address: 10.112.159.28

> [!info]
> Web app pen testing skills are very basic but I have a feeling I am going to learn a few things which I welcome! Anyway let's enumerate.

> [!note]
> Put site into browser and http://cloudsite.thm/ came back so gotta add to /etc/hosts

```
 !w /                                                                              at 18:26:14
> sudo nmap -A -O -sVC -p- 10.112.159.28
[sudo] password for reapz786:
Starting Nmap 7.98 ( https://nmap.org ) at 2026-03-08 18:26 +0000
Nmap scan report for 10.112.159.28
Host is up (0.020s latency).
Not shown: 65531 closed tcp ports (reset)
PORT      STATE SERVICE VERSION
22/tcp    open  ssh     OpenSSH 8.9p1 Ubuntu 3ubuntu0.10 (Ubuntu Linux; protocol 2.0)
| ssh-hostkey:
|   256 3f:da:55:0b:b3:a9:3b:09:5f:b1:db:53:5e:0b:ef:e2 (ECDSA)
|_  256 b7:d3:2e:a7:08:91:66:6b:30:d2:0c:f7:90:cf:9a:f4 (ED25519)
80/tcp    open  http    Apache httpd 2.4.52
|_http-title: Did not follow redirect to http://cloudsite.thm/
|_http-server-header: Apache/2.4.52 (Ubuntu)
4369/tcp  open  epmd    Erlang Port Mapper Daemon
| epmd-info:
|   epmd_port: 4369
|   nodes:
|_    rabbit: 25672
25672/tcp open  unknown
No exact OS matches for host (If you know what OS is running on it, see https://nmap.org/submit/
TCP/IP fingerprint:
OS:SCAN(V=7.98%E=4%D=3/8%OT=22%CT=1%CU=30429%PV=Y%DS=3%DC=T%G=Y%TM=69ADC004
OS:%P=x86_64-pc-linux-gnu)SEQ(SP=100%GCD=1%ISR=10D%TI=Z%CI=Z%II=I%TS=A)SEQ(
OS:SP=103%GCD=1%ISR=10E%TI=Z%CI=Z%II=I%TS=A)SEQ(SP=106%GCD=1%ISR=10D%TI=Z%C
OS:I=Z%II=I%TS=A)SEQ(SP=107%GCD=1%ISR=107%TI=Z%CI=Z%II=I%TS=A)SEQ(SP=107%GC
OS:D=1%ISR=10B%TI=Z%CI=Z%II=I%TS=A)OPS(O1=M4E8ST11NW7%O2=M4E8ST11NW7%O3=M4E
OS:8NNT11NW7%O4=M4E8ST11NW7%O5=M4E8ST11NW7%O6=M4E8ST11)WIN(W1=F4B3%W2=F4B3%
OS:W3=F4B3%W4=F4B3%W5=F4B3%W6=F4B3)ECN(R=Y%DF=Y%T=40%W=F507%O=M4E8NNSNW7%CC
OS:=Y%Q=)T1(R=Y%DF=Y%T=40%S=O%A=S+%F=AS%RD=0%Q=)T2(R=N)T3(R=N)T4(R=Y%DF=Y%T
OS:=40%W=0%S=A%A=Z%F=R%O=%RD=0%Q=)T5(R=Y%DF=Y%T=40%W=0%S=Z%A=S+%F=AR%O=%RD=
OS:0%Q=)T6(R=Y%DF=Y%T=40%W=0%S=A%A=Z%F=R%O=%RD=0%Q=)T7(R=Y%DF=Y%T=40%W=0%S=
OS:Z%A=S+%F=AR%O=%RD=0%Q=)U1(R=Y%DF=N%T=40%IPL=164%UN=0%RIPL=G%RID=G%RIPCK=
OS:G%RUCK=G%RUD=G)IE(R=Y%DFI=N%T=40%CD=S)

Network Distance: 3 hops
Service Info: Host: 127.0.1.1; OS: Linux; CPE: cpe:/o:linux:linux_kernel

TRACEROUTE (using port 1723/tcp)
HOP RTT      ADDRESS
1   18.82 ms 192.168.128.1
2   ...
3   19.96 ms cloudsite.thm (10.112.159.28)

OS and Service detection performed. Please report any incorrect results at https://nmap.org/submit/ .
Nmap done: 1 IP address (1 host up) scanned in 177.43 seconds
```

> [!note]
> nmap reveals 4 ports that are open. CTF name is rabbit store and there is a rabbit port 25672 so thats my attack vector however I will continue to enumerate.

![](../THM%20Challenge%20Rooms%20-%20Red%20Easy/Obsidian%20assets/Rabbit%20Storewappalyzer.png)

> [!note]
> Wappalyzer used to reveal the tech stack.

```
> gobuster dir -u http://cloudsite.thm/ -w /usr/share/wordlists/SecLists/Discovery/Web-Content/common.txt -t 50 -x php,html,txt,jsp,asp,aspx,bak,old,zip,tar,gz
===============================================================
Gobuster v3.8.2
by OJ Reeves (@TheColonial) & Christian Mehlmauer (@firefart)
===============================================================
[+] Url:                     http://cloudsite.thm/
[+] Method:                  GET
[+] Threads:                 50
[+] Wordlist:                /usr/share/wordlists/SecLists/Discovery/Web-Content/common.txt
[+] Negative Status codes:   404
[+] User Agent:              gobuster/3.8.2
[+] Extensions:              php,html,txt,asp,aspx,bak,gz,jsp,old,zip,tar
[+] Timeout:                 10s
===============================================================
Starting gobuster in directory enumeration mode
===============================================================
about_us.html        (Status: 200) [Size: 9992]
assets               (Status: 301) [Size: 315] [--> http://cloudsite.thm/assets/]
blog.html            (Status: 200) [Size: 10939]
contact_us.html      (Status: 200) [Size: 9914]
index.html           (Status: 200) [Size: 18451]
index.html           (Status: 200) [Size: 18451]
javascript           (Status: 301) [Size: 319] [--> http://cloudsite.thm/javascript/]
server-status        (Status: 403) [Size: 278]
services.html        (Status: 200) [Size: 9358]
Progress: 57012 / 57012 (100.00%)
===============================================================
Finished
===============================================================
```

> [!note]
> 2 redirects which have shown up and I ran other wordlists to ensure best results but assets is the only one that shows up.

![](../THM%20Challenge%20Rooms%20-%20Red%20Easy/Obsidian%20assets/Rabbit%20Storeassets.png)

```
> gobuster vhost -u http://cloudsite.thm/ --append-domain -w /usr/share/wordlists/SecLists/Discovery/DNS/subdomains-top1million-110000.txt  -t 50 | grep -v "302"
===============================================================
Gobuster v3.8.2
by OJ Reeves (@TheColonial) & Christian Mehlmauer (@firefart)
===============================================================
[+] Url:                       http://cloudsite.thm/
[+] Method:                    GET
[+] Threads:                   50
[+] Wordlist:                  /usr/share/wordlists/SecLists/Discovery/DNS/subdomains-top1million-110000.txt
[+] User Agent:                gobuster/3.8.2
[+] Timeout:                   10s
[+] Append Domain:             true
[+] Exclude Hostname Length:   false
===============================================================
Starting gobuster in VHOST enumeration mode
===============================================================
storage.cloudsite.thm Status: 200 [Size: 9039]
po\197\161ta.cloudsite.thm Status: 400 [Size: 301]
===============================================================
Finished
===============================================================
```

> [!note]
> Login/signup page for me to explore...

![](../THM%20Challenge%20Rooms%20-%20Red%20Easy/Obsidian%20assets/Rabbit%20Storelogin.png)

![](../THM%20Challenge%20Rooms%20-%20Red%20Easy/Obsidian%20assets/Rabbit%20Storecant%20login.png)

> [!note]
> created a random email/password combo with admin@admin.com and password is admin which was a successful creation but I wasn't recognised as an internal user.
> 
> I also see a further domain worth using gobuster so maybe I can bypass the login altogether?

```
> gobuster dir -u http://storage.cloudsite.thm/dashboard -w /usr/share/wordlists/SecLists/Discovery/Web-Content/common.txt -t 50 -x php,html,txt,jsp,asp,aspx,bak,old,zip,tar,gz
===============================================================
Gobuster v3.8.2
by OJ Reeves (@TheColonial) & Christian Mehlmauer (@firefart)
===============================================================
[+] Url:                     http://storage.cloudsite.thm/dashboard
[+] Method:                  GET
[+] Threads:                 50
[+] Wordlist:                /usr/share/wordlists/SecLists/Discovery/Web-Content/common.txt
[+] Negative Status codes:   404
[+] User Agent:              gobuster/3.8.2
[+] Extensions:              tar,gz,php,txt,aspx,bak,html,jsp,asp,old,zip
[+] Timeout:                 10s
===============================================================
Starting gobuster in directory enumeration mode
===============================================================
active               (Status: 401) [Size: 32]
Progress: 57012 / 57012 (100.00%)
===============================================================
Finished
===============================================================
```

> [!note]
> OK so the right user will be /dashboard/active but obviously it won't matter if I have the right creds at that point.

![](../THM%20Challenge%20Rooms%20-%20Red%20Easy/Obsidian%20assets/Rabbit%20Storedashbpardactive.png)

