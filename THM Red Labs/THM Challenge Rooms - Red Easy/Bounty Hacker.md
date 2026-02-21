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

