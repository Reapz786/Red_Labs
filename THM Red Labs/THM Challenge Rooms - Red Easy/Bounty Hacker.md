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
> 
> Target IP: 10.66.165.145
> 
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

> [!note]
> Interesting site

![](Bounty%20Hacker%20site.png)

> [!important]
> Who wrote the task list?

> [!info]
> Not sure how to find this but page source didn't find anything so lets run gobuster see what we can find?

```
<html>
<style>
h3 {text-align: center;}
p {text-align: center;}
.img-container {text-align: center;}
</style>
<div class='img-container'>
	<img src="[/images/crew.jpg](view-source:http://10.66.165.145/images/crew.jpg)" tag alt="Crew Picture" style="width:1000;height:563">
</div>
<body>
<h3>Spike:"..Oh look you're finally up. It's about time, 3 more minutes and you were going out with the garbage."</h3>
<hr>
<h3>Jet:"Now you told Spike here you can hack any computer in the system. We'd let Ed do it but we need her working on something else and you were getting real bold in that bar back there. Now take a look around and see if you can get that root the system and don't ask any questions you know you don't need the answer to, if you're lucky I'll even make you some bell peppers and beef."</h3>
<hr>
<h3>Ed:"I'm Ed. You should have access to the device they are talking about on your computer. Edward and Ein will be on the main deck if you need us!"</h3>
<hr>
<h3>Faye:"..hmph.."</h3>
</body>
</html><html>
<style>
h3 {text-align: center;}
p {text-align: center;}
.img-container {text-align: center;}
</style>
<div class='img-container'>
	<img src="[/images/crew.jpg](view-source:http://10.66.165.145/images/crew.jpg)" tag alt="Crew Picture" style="width:1000;height:563">
</div>
<body>
<h3>Spike:"..Oh look you're finally up. It's about time, 3 more minutes and you were going out with the garbage."</h3>
<hr>
<h3>Jet:"Now you told Spike here you can hack any computer in the system. We'd let Ed do it but we need her working on something else and you were getting real bold in that bar back there. Now take a look around and see if you can get that root the system and don't ask any questions you know you don't need the answer to, if you're lucky I'll even make you some bell peppers and beef."</h3>
<hr>
<h3>Ed:"I'm Ed. You should have access to the device they are talking about on your computer. Edward and Ein will be on the main deck if you need us!"</h3>
<hr>
<h3>Faye:"..hmph.."</h3>
</body>
</html>
```

> [!note]
> While waiting for Gobuster - I ran a detailed aggressive nmap scan with the following results:

```
┌──(kali㉿kali)-[~]
└─$ sudo nmap -A -O -sVC -p- 10.66.165.145
[sudo] password for kali: 
Starting Nmap 7.95 ( https://nmap.org ) at 2026-02-21 09:03 EST
Stats: 0:04:42 elapsed; 0 hosts completed (1 up), 1 undergoing SYN Stealth Scan
SYN Stealth Scan Timing: About 87.06% done; ETC: 09:08 (0:00:42 remaining)
Nmap scan report for 10.66.165.145
Host is up (0.084s latency).
Not shown: 55531 filtered tcp ports (no-response), 10001 closed tcp ports (reset)
PORT   STATE SERVICE VERSION
21/tcp open  ftp     vsftpd 3.0.5
| ftp-anon: Anonymous FTP login allowed (FTP code 230)
|_Can't get directory listing: PASV failed: 550 Permission denied.
| ftp-syst: 
|   STAT: 
| FTP server status:
|      Connected to ::ffff:192.168.144.173
|      Logged in as ftp
|      TYPE: ASCII
|      No session bandwidth limit
|      Session timeout in seconds is 300
|      Control connection is plain text
|      Data connections will be plain text
|      At session startup, client count was 4
|      vsFTPd 3.0.5 - secure, fast, stable
|_End of status
22/tcp open  ssh     OpenSSH 8.2p1 Ubuntu 4ubuntu0.13 (Ubuntu Linux; protocol 2.0)
| ssh-hostkey: 
|   3072 77:4f:00:7b:dd:cd:2c:79:e0:c5:70:f1:6f:54:fc:86 (RSA)
|   256 a4:e0:72:e0:f7:91:16:23:5c:8a:1e:00:56:2e:be:c6 (ECDSA)
|_  256 90:7c:c2:a3:fe:ed:b2:47:5c:8e:7c:93:63:9b:63:ff (ED25519)
80/tcp open  http    Apache httpd 2.4.41 ((Ubuntu))
|_http-server-header: Apache/2.4.41 (Ubuntu)
|_http-title: Site doesn't have a title (text/html).
Aggressive OS guesses: Linux 4.15 - 5.19 (90%), HP P2000 G3 NAS device (89%), Linux 2.6.32 (88%), Linux 2.6.32 - 3.13 (88%), Linux 4.15 (88%), OpenWrt 19.07 (Linux 4.14) (88%), Linux 5.0 - 5.14 (88%), Linux 5.4 (88%), Netgear RAIDiator 4.2.21 (Linux 2.6.37) (88%), Linux 2.6.39 (87%)
No exact OS matches for host (test conditions non-ideal).
Network Distance: 3 hops
Service Info: OSs: Unix, Linux; CPE: cpe:/o:linux:linux_kernel
TRACEROUTE (using port 44927/tcp)
HOP RTT      ADDRESS
1   84.27 ms 192.168.128.1
2   ...
3   84.61 ms 10.66.165.145
OS and Service detection performed. Please report any incorrect results at https://nmap.org/submit/ .
Nmap done: 1 IP address (1 host up) scanned in 335.81 seconds
```

> [!info]
> Most useful thing from that nmap scan was finding FTP anonymous login allowed.

```
┌──(kali㉿kali)-[~]
└─$ ftp 10.66.165.145 
Connected to 10.66.165.145.
220 (vsFTPd 3.0.5)
Name (10.66.165.145:kali): anonymous
230 Login successful.
Remote system type is UNIX.
Using binary mode to transfer files.
ftp> ls -la
200 PORT command successful. Consider using PASV.
150 Here comes the directory listing.
drwxr-xr-x    2 ftp      ftp          4096 Jun 07  2020 .
drwxr-xr-x    2 ftp      ftp          4096 Jun 07  2020 ..
-rw-rw-r--    1 ftp      ftp           418 Jun 07  2020 locks.txt
-rw-rw-r--    1 ftp      ftp            68 Jun 07  2020 task.txt
226 Directory send OK.
ftp> get locks.txt
local: locks.txt remote: locks.txt
200 PORT command successful. Consider using PASV.
150 Opening BINARY mode data connection for locks.txt (418 bytes).
100% |************|   418        3.43 MiB/s    00:00 ETA
226 Transfer complete.
418 bytes received in 00:00 (4.91 KiB/s)
ftp> ASCII
?Invalid command.
ftp> type ASCII
ASCII: unknown mode.
ftp> get task.txt
local: task.txt remote: task.txt
200 PORT command successful. Consider using PASV.
150 Opening BINARY mode data connection for task.txt (68 bytes).
100% |************|    68       69.17 KiB/s    00:00 ETA
226 Transfer complete.
68 bytes received in 00:00 (0.76 KiB/s)
ftp> exit
221 Goodbye.
```

