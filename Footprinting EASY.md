company `Inlanefreight Ltd`
first server is an internal DNS server
our client wants to know what information we can get out of these services and how this information could be used against its infrastructure
our client has made it clear that it is forbidden to attack the services aggressively using exploits, as these services are in production.
our teammates have found the following credentials "ceil:qwer1234",
company's employees were talking about SSH keys on a forum.
The administrators have stored a `flag.txt` file on this server to track our progress and measure success. Fully enumerate the target and submit the contents of this file as proof.

FTP 2121 and 21 confirmed creds work but limited visibility - extended passive mode - need to investigate

┌─[eu-academy-3]─[10.10.14.71]─[htb-ac-1746824@htb-bvr8ch40jz]─[~]
└──╼ [★]$ nmap 10.129.42.195 -sSVC
Starting Nmap 7.94SVN ( https://nmap.org ) at 2026-01-12 12:20 CST
Stats: 0:01:25 elapsed; 0 hosts completed (1 up), 1 undergoing Service Scan
Service scan Timing: About 75.00% done; ETC: 12:22 (0:00:27 remaining)
Stats: 0:01:40 elapsed; 0 hosts completed (1 up), 1 undergoing Service Scan
Service scan Timing: About 75.00% done; ETC: 12:22 (0:00:32 remaining)
Nmap scan report for 10.129.42.195
Host is up (0.057s latency).
Not shown: 996 closed tcp ports (reset)
PORT     STATE SERVICE      VERSION
21/tcp   open  ftp
| fingerprint-strings: 
|   GenericLines: 
|     220 ProFTPD Server (ftp.int.inlanefreight.htb) [10.129.42.195]
|     Invalid command: try being more creative
|_    Invalid command: try being more creative
22/tcp   open  ssh          OpenSSH 8.2p1 Ubuntu 4ubuntu0.2 (Ubuntu Linux; protocol 2.0)
| ssh-hostkey: 
|   3072 3f:4c:8f:10:f1:ae:be:cd:31:24:7c:a1:4e:ab:84:6d (RSA)
|   256 7b:30:37:67:50:b9:ad:91:c0:8f:f7:02:78:3b:7c:02 (ECDSA)
|_  256 88:9e:0e:07:fe:ca:d0:5c:60:ab:cf:10:99:cd:6c:a7 (ED25519)
53/tcp   open  domain       ISC BIND 9.16.1 (Ubuntu Linux)
| dns-nsid: 
|_  bind.version: 9.16.1-Ubuntu
2121/tcp open  ccproxy-ftp?
| fingerprint-strings: 
|   GenericLines: 
|     220 ProFTPD Server (Ceil's FTP) [10.129.42.195]
|     Invalid command: try being more creative
|_    Invalid command: try being more creative
2 services unrecognized despite returning data. If you know the service/version, please submit the following fingerprints at https://nmap.org/cgi-bin/submit.cgi?new-service :
==============NEXT SERVICE FINGERPRINT (SUBMIT INDIVIDUALLY)==============
SF-Port21-TCP:V=7.94SVN%I=7%D=1/12%Time=69653B7D%P=x86_64-pc-linux-gnu%r(G
SF:enericLines,9C,"220\x20ProFTPD\x20Server\x20\(ftp\.int\.inlanefreight\.
SF:htb\)\x20\[10\.129\.42\.195\]\r\n500\x20Invalid\x20command:\x20try\x20b
SF:eing\x20more\x20creative\r\n500\x20Invalid\x20command:\x20try\x20being\
SF:x20more\x20creative\r\n");
==============NEXT SERVICE FINGERPRINT (SUBMIT INDIVIDUALLY)==============
SF-Port2121-TCP:V=7.94SVN%I=7%D=1/12%Time=69653B7D%P=x86_64-pc-linux-gnu%r
SF:(GenericLines,8D,"220\x20ProFTPD\x20Server\x20\(Ceil's\x20FTP\)\x20\[10
SF:\.129\.42\.195\]\r\n500\x20Invalid\x20command:\x20try\x20being\x20more\
SF:x20creative\r\n500\x20Invalid\x20command:\x20try\x20being\x20more\x20cr
SF:eative\r\n");
Service Info: OS: Linux; CPE: cpe:/o:linux:linux_kernel

Service detection performed. Please report any incorrect results at https://nmap.org/submit/ .
Nmap done: 1 IP address (1 host up) scanned in 210.68 seconds


DNS enumerated

─[eu-academy-3]─[10.10.14.71]─[htb-ac-1746824@htb-bvr8ch40jz]─[~]
└──╼ [★]$ dig axfr inlanefreight.htb @10.129.42.195

; <<>> DiG 9.18.33-1~deb12u2-Debian <<>> axfr inlanefreight.htb @10.129.42.195
;; global options: +cmd
inlanefreight.htb.	604800	IN	SOA	inlanefreight.htb. root.inlanefreight.htb. 2 604800 86400 2419200 604800
inlanefreight.htb.	604800	IN	TXT	"MS=ms97310371"
inlanefreight.htb.	604800	IN	TXT	"atlassian-domain-verification=t1rKCy68JFszSdCKVpw64A1QksWdXuYFUeSXKU"
inlanefreight.htb.	604800	IN	TXT	"v=spf1 include:mailgun.org include:_spf.google.com include:spf.protection.outlook.com include:_spf.atlassian.net ip4:10.129.124.8 ip4:10.129.127.2 ip4:10.129.42.106 ~all"
inlanefreight.htb.	604800	IN	NS	ns.inlanefreight.htb.
app.inlanefreight.htb.	604800	IN	A	10.129.18.15
internal.inlanefreight.htb. 604800 IN	A	10.129.1.6
mail1.inlanefreight.htb. 604800	IN	A	10.129.18.201
ns.inlanefreight.htb.	604800	IN	A	10.129.34.136
inlanefreight.htb.	604800	IN	SOA	inlanefreight.htb. root.inlanefreight.htb. 2 604800 86400 2419200 604800
;; Query time: 49 msec
;; SERVER: 10.129.42.195#53(10.129.42.195) (TCP)
;; WHEN: Mon Jan 12 12:35:45 CST 2026
;; XFR size: 10 records (messages 1, bytes 540)

┌─[eu-academy-3]─[10.10.14.71]─[htb-ac-1746824@htb-bvr8ch40jz]─[~]
└──╼ [★]$ ssh ceil@10.129.42.195
The authenticity of host '10.129.42.195 (10.129.42.195)' can't be established.
ED25519 key fingerprint is SHA256:AtNYHXCA7dVpi58LB+uuPe9xvc2lJwA6y7q82kZoBNM.
This key is not known by any other names.
Are you sure you want to continue connecting (yes/no/[fingerprint])? yes
Warning: Permanently added '10.129.42.195' (ED25519) to the list of known hosts.
ceil@10.129.42.195: Permission denied (publickey).
┌─[eu-academy-3]─[10.10.14.71]─[htb-ac-1746824@htb-bvr8ch40jz]─[~]

Found the issue! - it was the public key i was looking for into ftp server but i didnt use the right flag for ls - should have used ls -la to see the .ssh and obtasin the public key which was id_rsa
Once i got this - exfiltrated public key and used this to log into ssh - once in via SSH - used cd .. to get back into home folder and find flag folder which contained the flag.txt file.