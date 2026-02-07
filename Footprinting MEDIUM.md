This second server is a server that everyone on the internal network has access to

┌─[eu-academy-3]─[10.10.15.225]─[htb-ac-1746824@htb-2ryqkmifj6]─[~]
└──╼ [★]$ showmount -e 10.129.89.73 
Export list for 10.129.89.73:
/TechSupport (everyone)

 We need to find out as much information as possible about this server and find ways to use it against the server itself.
 For the proof and protection of customer data, a user named `HTB` has been created. Accordingly, we need to obtain the credentials of this user as proof.

┌─[eu-academy-3]─[10.10.15.225]─[htb-ac-1746824@htb-2ryqkmifj6]─[~]
└──╼ [★]$ nmap 10.129.202.41
Starting Nmap 7.94SVN ( https://nmap.org ) at 2026-01-13 12:57 CST
Nmap scan report for 10.129.202.41
Host is up (0.054s latency).
Not shown: 994 closed tcp ports (reset)
PORT     STATE SERVICE
111/tcp  open  rpcbind
135/tcp  open  msrpc
139/tcp  open  netbios-ssn
445/tcp  open  microsoft-ds
2049/tcp open  nfs
3389/tcp open  ms-wbt-server

Nmap done: 1 IP address (1 host up) scanned in 1.03 seconds


┌─[eu-academy-3]─[10.10.15.225]─[htb-ac-1746824@htb-2ryqkmifj6]─[~]
└──╼ [★]$ nmap -sSVC 10.129.89.73 -A 
Starting Nmap 7.94SVN ( https://nmap.org ) at 2026-01-13 12:56 CST
Nmap scan report for 10.129.89.73
Host is up (0.051s latency).
Not shown: 994 closed tcp ports (reset)
PORT     STATE SERVICE       VERSION
111/tcp  open  rpcbind       2-4 (RPC #100000)
| rpcinfo: 
|   program version    port/proto  service
|   100000  2,3,4        111/tcp   rpcbind
|   100000  2,3,4        111/tcp6  rpcbind
|   100000  2,3,4        111/udp   rpcbind
|   100000  2,3,4        111/udp6  rpcbind
|   100003  2,3         2049/udp   nfs
|   100003  2,3         2049/udp6  nfs
|   100003  2,3,4       2049/tcp   nfs
|   100003  2,3,4       2049/tcp6  nfs
|   100005  1,2,3       2049/tcp   mountd
|   100005  1,2,3       2049/tcp6  mountd
|   100005  1,2,3       2049/udp   mountd
|   100005  1,2,3       2049/udp6  mountd
|   100021  1,2,3,4     2049/tcp   nlockmgr
|   100021  1,2,3,4     2049/tcp6  nlockmgr
|   100021  1,2,3,4     2049/udp   nlockmgr
|   100021  1,2,3,4     2049/udp6  nlockmgr
|   100024  1           2049/tcp   status
|   100024  1           2049/tcp6  status
|   100024  1           2049/udp   status
|_  100024  1           2049/udp6  status
135/tcp  open  msrpc         Microsoft Windows RPC
139/tcp  open  netbios-ssn   Microsoft Windows netbios-ssn
445/tcp  open  microsoft-ds?
2049/tcp open  nlockmgr      1-4 (RPC #100021)
3389/tcp open  ms-wbt-server Microsoft Terminal Services
| rdp-ntlm-info: 
|   Target_Name: WINMEDIUM
|   NetBIOS_Domain_Name: WINMEDIUM
|   NetBIOS_Computer_Name: WINMEDIUM
|   DNS_Domain_Name: WINMEDIUM
|   DNS_Computer_Name: WINMEDIUM
|   Product_Version: 10.0.17763
|_  System_Time: 2026-01-13T18:58:04+00:00
| ssl-cert: Subject: commonName=WINMEDIUM
| Not valid before: 2026-01-12T18:52:46
|_Not valid after:  2026-07-14T18:52:46
|_ssl-date: 2026-01-13T18:58:12+00:00; 0s from scanner time.
No exact OS matches for host (If you know what OS is running on it, see https://nmap.org/submit/ ).
TCP/IP fingerprint:
OS:SCAN(V=7.94SVN%E=4%D=1/13%OT=111%CT=1%CU=30171%PV=Y%DS=2%DC=T%G=Y%TM=696
OS:695DE%P=x86_64-pc-linux-gnu)SEQ(SP=103%GCD=1%ISR=106%TI=I%CI=I%II=I%SS=S
OS:%TS=U)OPS(O1=M552NW8NNS%O2=M552NW8NNS%O3=M552NW8%O4=M552NW8NNS%O5=M552NW
OS:8NNS%O6=M552NNS)WIN(W1=FFFF%W2=FFFF%W3=FFFF%W4=FFFF%W5=FFFF%W6=FF70)ECN(
OS:R=Y%DF=Y%T=80%W=FFFF%O=M552NW8NNS%CC=Y%Q=)T1(R=Y%DF=Y%T=80%S=O%A=S+%F=AS
OS:%RD=0%Q=)T2(R=N)T3(R=N)T4(R=Y%DF=Y%T=80%W=0%S=A%A=O%F=R%O=%RD=0%Q=)T5(R=
OS:Y%DF=Y%T=80%W=0%S=Z%A=S+%F=AR%O=%RD=0%Q=)T6(R=Y%DF=Y%T=80%W=0%S=A%A=O%F=
OS:R%O=%RD=0%Q=)T7(R=N)U1(R=Y%DF=N%T=80%IPL=164%UN=0%RIPL=G%RID=G%RIPCK=G%R
OS:UCK=G%RUD=G)IE(R=Y%DFI=N%T=80%CD=Z)

Network Distance: 2 hops
Service Info: OS: Windows; CPE: cpe:/o:microsoft:windows

Host script results:
| smb2-time: 
|   date: 2026-01-13T18:58:09
|_  start_date: N/A
| smb2-security-mode: 
|   3:1:1: 
|_    Message signing enabled but not required

TRACEROUTE (using port 80/tcp)
HOP RTT      ADDRESS
1   49.85 ms 10.10.14.1
2   50.54 ms 10.129.89.73

OS and Service detection performed. Please report any incorrect results at https://nmap.org/submit/ .
Nmap done: 1 IP address (1 host up) scanned in 98.90 seconds

Enumerating NFS to find mounted drives

┌─[eu-academy-3]─[10.10.15.225]─[htb-ac-1746824@htb-2ryqkmifj6]─[~]
└──╼ [★]$ sudo nmap --script nfs* 10.129.89.73 -sV -p111,2049
Starting Nmap 7.94SVN ( https://nmap.org ) at 2026-01-13 13:02 CST
Nmap scan report for 10.129.89.73
Host is up (0.051s latency).

PORT     STATE SERVICE  VERSION
111/tcp  open  rpcbind  2-4 (RPC #100000)
| rpcinfo: 
|   program version    port/proto  service
|   100000  2,3,4        111/tcp   rpcbind
|   100000  2,3,4        111/tcp6  rpcbind
|   100000  2,3,4        111/udp   rpcbind
|   100000  2,3,4        111/udp6  rpcbind
|   100003  2,3         2049/udp   nfs
|   100003  2,3         2049/udp6  nfs
|   100003  2,3,4       2049/tcp   nfs
|   100003  2,3,4       2049/tcp6  nfs
|   100005  1,2,3       2049/tcp   mountd
|   100005  1,2,3       2049/tcp6  mountd
|   100005  1,2,3       2049/udp   mountd
|   100005  1,2,3       2049/udp6  mountd
|   100021  1,2,3,4     2049/tcp   nlockmgr
|   100021  1,2,3,4     2049/tcp6  nlockmgr
|   100021  1,2,3,4     2049/udp   nlockmgr
|   100021  1,2,3,4     2049/udp6  nlockmgr
|   100024  1           2049/tcp   status
|   100024  1           2049/tcp6  status
|   100024  1           2049/udp   status
|_  100024  1           2049/udp6  status
| nfs-showmount: 
|_  /TechSupport 
| nfs-statfs: 
|   Filesystem    1K-blocks   Used        Available   Use%  Maxfilesize  Maxlink
|_  /TechSupport  41312252.0  17067716.0  24244536.0  42%   16.0T        1023
| nfs-ls: Volume /TechSupport
|   access: Read Lookup NoModify NoExtend NoDelete NoExecute
| PERMISSION  UID         GID         SIZE   TIME                 FILENAME
| rwx------   4294967294  4294967294  65536  2021-11-11T00:09:49  .
| ??????????  ?           ?           ?      ?                    ..
| rwx------   4294967294  4294967294  0      2021-11-10T15:19:28  ticket4238791283649.txt
| rwx------   4294967294  4294967294  0      2021-11-10T15:19:28  ticket4238791283650.txt
| rwx------   4294967294  4294967294  0      2021-11-10T15:19:28  ticket4238791283651.txt
| rwx------   4294967294  4294967294  0      2021-11-10T15:19:28  ticket4238791283652.txt
| rwx------   4294967294  4294967294  0      2021-11-10T15:19:28  ticket4238791283653.txt
| rwx------   4294967294  4294967294  0      2021-11-10T15:19:28  ticket4238791283654.txt
| rwx------   4294967294  4294967294  0      2021-11-10T15:19:29  ticket4238791283655.txt
| rwx------   4294967294  4294967294  0      2021-11-10T15:19:29  ticket4238791283656.txt
|_
2049/tcp open  nlockmgr 1-4 (RPC #100021)

Service detection performed. Please report any incorrect results at https://nmap.org/submit/ .
Nmap done: 1 IP address (1 host up) scanned in 64.98 seconds

Found TechSupport but dont have permission so what am i missing?

┌─[eu-academy-3]─[10.10.15.225]─[htb-ac-1746824@htb-2ryqkmifj6]─[~]
└──╼ [★]$ showmount -e 10.129.89.73 
Export list for 10.129.89.73:
/TechSupport (everyone)
┌─[eu-academy-3]─[10.10.15.225]─[htb-ac-1746824@htb-2ryqkmifj6]─[~]
└──╼ [★]$ ls
cacert.der  Desktop  Documents  Downloads  Music  Pictures  Public  Templates  Videos
┌─[eu-academy-3]─[10.10.15.225]─[htb-ac-1746824@htb-2ryqkmifj6]─[~]
└──╼ [★]$ cd Desktop/
┌─[eu-academy-3]─[10.10.15.225]─[htb-ac-1746824@htb-2ryqkmifj6]─[~/Desktop]
└──╼ [★]$ mkdir HTB
┌─[eu-academy-3]─[10.10.15.225]─[htb-ac-1746824@htb-2ryqkmifj6]─[~/Desktop]
└──╼ [★]$ ls
HTB  htb_vpn_logs.log  my_credentials.txt  README.license
┌─[eu-academy-3]─[10.10.15.225]─[htb-ac-1746824@htb-2ryqkmifj6]─[~/Desktop]
└──╼ [★]$ sudo mount -t nfs 10.129.89.73:/ ./HTB -o nolock
┌─[eu-academy-3]─[10.10.15.225]─[htb-ac-1746824@htb-2ryqkmifj6]─[~/Desktop]
└──╼ [★]$ cd HTB
┌─[eu-academy-3]─[10.10.15.225]─[htb-ac-1746824@htb-2ryqkmifj6]─[~/Desktop/HTB]
└──╼ [★]$ tree .
bash: tree: command not found
┌─[eu-academy-3]─[10.10.15.225]─[htb-ac-1746824@htb-2ryqkmifj6]─[~/Desktop/HTB]
└──╼ [★]$ ls
TechSupport
┌─[eu-academy-3]─[10.10.15.225]─[htb-ac-1746824@htb-2ryqkmifj6]─[~/Desktop/HTB]
└──╼ [★]$ cd TechSupport/
bash: cd: TechSupport/: Permission denied
┌─[eu-academy-3]─[10.10.15.225]─[htb-ac-1746824@htb-2ryqkmifj6]─[~/Desktop/HTB]
└──╼ [★]$ ls -la TechSupport/
ls: cannot open directory 'TechSupport/': Permission denied

Cant get in so will redirect focus on rpcbind/smb/netbios

┌─[eu-academy-3]─[10.10.15.225]─[htb-ac-1746824@htb-2ryqkmifj6]─[~]
└──╼ [★]$ sudo nmap 10.129.89.73 -sV -sC -p139,445
Starting Nmap 7.94SVN ( https://nmap.org ) at 2026-01-13 13:15 CST
Nmap scan report for 10.129.89.73
Host is up (0.052s latency).

PORT    STATE SERVICE       VERSION
139/tcp open  netbios-ssn   Microsoft Windows netbios-ssn
445/tcp open  microsoft-ds?
Service Info: OS: Windows; CPE: cpe:/o:microsoft:windows

Host script results:
| smb2-security-mode: 
|   3:1:1: 
|_    Message signing enabled but not required
|_clock-skew: -1s
| smb2-time: 
|   date: 2026-01-13T19:16:01
|_  start_date: N/A

Service detection performed. Please report any incorrect results at https://nmap.org/submit/ .
Nmap done: 1 IP address (1 host up) scanned in 18.44 seconds

Not much provided here. 

┌─[eu-academy-3]─[10.10.15.225]─[htb-ac-1746824@htb-2ryqkmifj6]─[~]
└──╼ [★]$ rpcclient -U "HTB" 10.129.89.73
Password for [WORKGROUP\HTB]:
Cannot connect to server.  Error was NT_STATUS_LOGON_FAILURE

Tried blank password into HTB which was silly lol

Am i supposed to enumerate NFS first and get something to help me with RPC client to get PW?
Need to figure out connection witth SMB/RPC/netBIOS and NFS.

used Enum4Linux-ng:

┌─[eu-academy-3]─[10.10.15.225]─[htb-ac-1746824@htb-2ryqkmifj6]─[~/enum4linux-ng]
└──╼ [★]$ ./enum4linux-ng.py 10.129.89.73 -A
ENUM4LINUX - next generation (v1.3.7)

 ==========================
|    Target Information    |
 ==========================
[*] Target ........... 10.129.89.73
[*] Username ......... ''
[*] Random Username .. 'erezulgf'
[*] Password ......... ''
[*] Timeout .......... 10 second(s)

 =====================================
|    Listener Scan on 10.129.89.73    |
 =====================================
[*] Checking LDAP
[-] Could not connect to LDAP on 389/tcp: connection refused
[*] Checking LDAPS
[-] Could not connect to LDAPS on 636/tcp: connection refused
[*] Checking SMB
[+] SMB is accessible on 445/tcp
[*] Checking SMB over NetBIOS
[+] SMB over NetBIOS is accessible on 139/tcp

 ===========================================================
|    NetBIOS Names and Workgroup/Domain for 10.129.89.73    |
 ===========================================================
[-] Could not get NetBIOS names information via 'nmblookup': timed out

 =========================================
|    SMB Dialect Check on 10.129.89.73    |
 =========================================
[*] Trying on 445/tcp
[+] Supported dialects and settings:
Supported dialects:
  SMB 1.0: false
  SMB 2.0.2: true
  SMB 2.1: true
  SMB 3.0: true
  SMB 3.1.1: true
Preferred dialect: SMB 3.0
SMB1 only: false
SMB signing required: false

 ===========================================================
|    Domain Information via SMB session for 10.129.89.73    |
 ===========================================================
[*] Enumerating via unauthenticated SMB session on 445/tcp
[+] Found domain information via SMB
NetBIOS computer name: WINMEDIUM
NetBIOS domain name: ''
DNS domain: WINMEDIUM
FQDN: WINMEDIUM
Derived membership: workgroup member
Derived domain: unknown

 =========================================
|    RPC Session Check on 10.129.89.73    |
 =========================================
[*] Check for anonymous access (null session)
[-] Could not establish null session: STATUS_ACCESS_DENIED
[*] Check for guest access
[-] Could not establish guest session: STATUS_LOGON_FAILURE
[-] Sessions failed, neither null nor user sessions were possible

 ===============================================
|    OS Information via RPC for 10.129.89.73    |
 ===============================================
[*] Enumerating via unauthenticated SMB session on 445/tcp
[+] Found OS information via SMB
[*] Enumerating via 'srvinfo'
[-] Skipping 'srvinfo' run, not possible with provided credentials
[+] After merging OS information we have the following result:
OS: Windows 10, Windows Server 2019, Windows Server 2016
OS version: '10.0'
OS release: '1809'
OS build: '17763'
Native OS: not supported
Native LAN manager: not supported
Platform id: null
Server type: null
Server type string: null

[!] Aborting remainder of tests since sessions failed, rerun with valid credentials

Completed after 12.02 seconds

Useful info but nothing i can use really. Bit lost at the moment.

Going back to NFS -  i realised my UID doesnt match to UID of mounted NFS so chmod?

┌─[eu-academy-3]─[10.10.15.225]─[htb-ac-1746824@htb-2ryqkmifj6]─[~/Desktop]
└──╼ [★]$ ls -lna
total 80
drwxr-xr-x  3  1002  1002  4096 Jan 13 13:08 .
drwx------ 24  1002  1002  4096 Jan 13 13:23 ..
drwx------  2 65534 65534 65536 Nov 10  2021 HTB

done for the day 13/01/26

Back on to enumerate - realised I didnt do sudo su to access NFS files.

┌─[eu-academy-3]─[10.10.15.238]─[htb-ac-1746824@htb-yku7kqk8e2]─[~]
└──╼ [★]$ showmount -e 10.129.202.41
Export list for 10.129.202.41:
/TechSupport (everyone)
┌─[eu-academy-3]─[10.10.15.238]─[htb-ac-1746824@htb-yku7kqk8e2]─[~]
└──╼ [★]$ ls
cacert.der  Desktop  Documents  Downloads  Music  Pictures  Public  Templates  Videos
┌─[eu-academy-3]─[10.10.15.238]─[htb-ac-1746824@htb-yku7kqk8e2]─[~]
└──╼ [★]$ cd Desktop/
┌─[eu-academy-3]─[10.10.15.238]─[htb-ac-1746824@htb-yku7kqk8e2]─[~/Desktop]
└──╼ [★]$ ls
htb_vpn_logs.log  my_credentials.txt  README.license
┌─[eu-academy-3]─[10.10.15.238]─[htb-ac-1746824@htb-yku7kqk8e2]─[~/Desktop]
└──╼ [★]$ mkdir HTB
┌─[eu-academy-3]─[10.10.15.238]─[htb-ac-1746824@htb-yku7kqk8e2]─[~/Desktop]
└──╼ [★]$ ls
HTB  htb_vpn_logs.log  my_credentials.txt  README.license
┌─[eu-academy-3]─[10.10.15.238]─[htb-ac-1746824@htb-yku7kqk8e2]─[~/Desktop]
└──╼ [★]$ sudo mount -t nfs 10.129.202.41:/TechSupport ./HTB/ -o nolock
┌─[eu-academy-3]─[10.10.15.238]─[htb-ac-1746824@htb-yku7kqk8e2]─[~/Desktop]
└──╼ [★]$ sudo su
┌─[root@htb-yku7kqk8e2]─[/home/htb-ac-1746824/Desktop]
└──╼ #ls
HTB  htb_vpn_logs.log  my_credentials.txt  README.license
┌─[root@htb-yku7kqk8e2]─[/home/htb-ac-1746824/Desktop]
└──╼ #cd HTB/
┌─[root@htb-yku7kqk8e2]─[/home/htb-ac-1746824/Desktop/HTB]
└──╼ #ls
ticket4238791283649.txt  ticket4238791283700.txt  ticket4238791283751.txt
ticket4238791283650.txt  ticket4238791283701.txt  ticket4238791283752.txt
ticket4238791283651.txt  ticket4238791283702.txt  ticket4238791283753.txt
ticket4238791283652.txt  ticket4238791283703.txt  ticket4238791283754.txt
ticket4238791283653.txt  ticket4238791283704.txt  ticket4238791283755.txt
ticket4238791283654.txt  ticket4238791283705.txt  ticket4238791283756.txt
ticket4238791283655.txt  ticket4238791283706.txt  ticket4238791283757.txt
ticket4238791283656.txt  ticket4238791283707.txt  ticket4238791283758.txt
ticket4238791283657.txt  ticket4238791283708.txt  ticket4238791283759.txt
ticket4238791283658.txt  ticket4238791283709.txt  ticket4238791283760.txt
ticket4238791283659.txt  ticket4238791283710.txt  ticket4238791283761.txt
ticket4238791283660.txt  ticket4238791283711.txt  ticket4238791283762.txt
ticket4238791283661.txt  ticket4238791283712.txt  ticket4238791283763.txt
ticket4238791283662.txt  ticket4238791283713.txt  ticket4238791283764.txt
ticket4238791283663.txt  ticket4238791283714.txt  ticket4238791283765.txt
ticket4238791283664.txt  ticket4238791283715.txt  ticket4238791283766.txt
ticket4238791283665.txt  ticket4238791283716.txt  ticket4238791283767.txt
ticket4238791283666.txt  ticket4238791283717.txt  ticket4238791283768.txt
ticket4238791283667.txt  ticket4238791283718.txt  ticket4238791283769.txt
ticket4238791283668.txt  ticket4238791283719.txt  ticket4238791283770.txt
ticket4238791283669.txt  ticket4238791283720.txt  ticket4238791283771.txt
ticket4238791283670.txt  ticket4238791283721.txt  ticket4238791283772.txt
ticket4238791283671.txt  ticket4238791283722.txt  ticket4238791283773.txt
ticket4238791283672.txt  ticket4238791283723.txt  ticket4238791283774.txt
ticket4238791283673.txt  ticket4238791283724.txt  ticket4238791283775.txt
ticket4238791283674.txt  ticket4238791283725.txt  ticket4238791283776.txt
ticket4238791283675.txt  ticket4238791283726.txt  ticket4238791283777.txt
ticket4238791283676.txt  ticket4238791283727.txt  ticket4238791283778.txt
ticket4238791283677.txt  ticket4238791283728.txt  ticket4238791283779.txt
ticket4238791283678.txt  ticket4238791283729.txt  ticket4238791283780.txt
ticket4238791283679.txt  ticket4238791283730.txt  ticket4238791283781.txt
ticket4238791283680.txt  ticket4238791283731.txt  ticket4238791283782.txt
ticket4238791283681.txt  ticket4238791283732.txt  ticket4238791283783.txt
ticket4238791283682.txt  ticket4238791283733.txt  ticket4238791283784.txt
ticket4238791283683.txt  ticket4238791283734.txt  ticket4238791283785.txt
ticket4238791283684.txt  ticket4238791283735.txt  ticket4238791283786.txt
ticket4238791283685.txt  ticket4238791283736.txt  ticket4238791283787.txt
ticket4238791283686.txt  ticket4238791283737.txt  ticket4238791283788.txt
ticket4238791283687.txt  ticket4238791283738.txt  ticket4238791283789.txt
ticket4238791283688.txt  ticket4238791283739.txt  ticket4238791283790.txt
ticket4238791283689.txt  ticket4238791283740.txt  ticket4238791283791.txt
ticket4238791283690.txt  ticket4238791283741.txt  ticket4238791283792.txt
ticket4238791283691.txt  ticket4238791283742.txt  ticket4238791283793.txt
ticket4238791283692.txt  ticket4238791283743.txt  ticket4238791283794.txt
ticket4238791283693.txt  ticket4238791283744.txt  ticket4238791283795.txt
ticket4238791283694.txt  ticket4238791283745.txt  ticket4238791283796.txt
ticket4238791283695.txt  ticket4238791283746.txt  ticket4238791283797.txt
ticket4238791283696.txt  ticket4238791283747.txt  ticket4238791283798.txt
ticket4238791283697.txt  ticket4238791283748.txt  ticket4238791283799.txt
ticket4238791283698.txt  ticket4238791283749.txt  ticket4238791283800.txt
ticket4238791283699.txt  ticket4238791283750.txt  ticket4238791283801.txt
┌─[root@htb-yku7kqk8e2]─[/home/htb-ac-1746824/Desktop/HTB]
└──╼ #cat ticket4238791283
cat: ticket4238791283: No such file or directory
┌─[✗]─[root@htb-yku7kqk8e2]─[/home/htb-ac-1746824/Desktop/HTB]
└──╼ #cat ticket42387912836
ticket4238791283649.txt  ticket4238791283666.txt  ticket4238791283683.txt
ticket4238791283650.txt  ticket4238791283667.txt  ticket4238791283684.txt
ticket4238791283651.txt  ticket4238791283668.txt  ticket4238791283685.txt
ticket4238791283652.txt  ticket4238791283669.txt  ticket4238791283686.txt
ticket4238791283653.txt  ticket4238791283670.txt  ticket4238791283687.txt
ticket4238791283654.txt  ticket4238791283671.txt  ticket4238791283688.txt
ticket4238791283655.txt  ticket4238791283672.txt  ticket4238791283689.txt
ticket4238791283656.txt  ticket4238791283673.txt  ticket4238791283690.txt
ticket4238791283657.txt  ticket4238791283674.txt  ticket4238791283691.txt
ticket4238791283658.txt  ticket4238791283675.txt  ticket4238791283692.txt
ticket4238791283659.txt  ticket4238791283676.txt  ticket4238791283693.txt
ticket4238791283660.txt  ticket4238791283677.txt  ticket4238791283694.txt
ticket4238791283661.txt  ticket4238791283678.txt  ticket4238791283695.txt
--More--^C
┌─[✗]─[root@htb-yku7kqk8e2]─[/home/htb-ac-1746824/Desktop/HTB]
└──╼ #cat ticket4238791283649.txt 
┌─[root@htb-yku7kqk8e2]─[/home/htb-ac-1746824/Desktop/HTB]
└──╼ #cat ./ticket4238791283649.txt
┌─[root@htb-yku7kqk8e2]─[/home/htb-ac-1746824/Desktop/HTB]
└──╼ #vi
^C
^C^C^C^CError detected while processing /usr/share/vim/vim90/plugin/tarPlugin.vim:
line    1:
Interrupted
Error detected while processing /usr/share/vim/vim90/plugin/tohtml.vim:
line    1:
Interrupted
Error detected while processing /usr/share/vim/vim90/plugin/vimballPlugin.vim:
line    1:
Interrupted^C
Error detected while processing /usr/share/vim/vim90/plugin/zipPlugin.vim:
line    1:
Interrupted
Interrupt: Press ENTER or type command to continue
┌─[root@htb-yku7kqk8e2]─[/home/htb-ac-1746824/Desktop/HTB]
└──╼ #vi ticket4238791283
Display all 153 possibilities? (y or n)
┌─[root@htb-yku7kqk8e2]─[/home/htb-ac-1746824/Desktop/HTB]
└──╼ #ls
ticket4238791283649.txt  ticket4238791283700.txt  ticket4238791283751.txt
ticket4238791283650.txt  ticket4238791283701.txt  ticket4238791283752.txt
ticket4238791283651.txt  ticket4238791283702.txt  ticket4238791283753.txt
ticket4238791283652.txt  ticket4238791283703.txt  ticket4238791283754.txt
ticket4238791283653.txt  ticket4238791283704.txt  ticket4238791283755.txt
ticket4238791283654.txt  ticket4238791283705.txt  ticket4238791283756.txt
ticket4238791283655.txt  ticket4238791283706.txt  ticket4238791283757.txt
ticket4238791283656.txt  ticket4238791283707.txt  ticket4238791283758.txt
ticket4238791283657.txt  ticket4238791283708.txt  ticket4238791283759.txt
ticket4238791283658.txt  ticket4238791283709.txt  ticket4238791283760.txt
ticket4238791283659.txt  ticket4238791283710.txt  ticket4238791283761.txt
ticket4238791283660.txt  ticket4238791283711.txt  ticket4238791283762.txt
ticket4238791283661.txt  ticket4238791283712.txt  ticket4238791283763.txt
ticket4238791283662.txt  ticket4238791283713.txt  ticket4238791283764.txt
ticket4238791283663.txt  ticket4238791283714.txt  ticket4238791283765.txt
ticket4238791283664.txt  ticket4238791283715.txt  ticket4238791283766.txt
ticket4238791283665.txt  ticket4238791283716.txt  ticket4238791283767.txt
ticket4238791283666.txt  ticket4238791283717.txt  ticket4238791283768.txt
ticket4238791283667.txt  ticket4238791283718.txt  ticket4238791283769.txt
ticket4238791283668.txt  ticket4238791283719.txt  ticket4238791283770.txt
ticket4238791283669.txt  ticket4238791283720.txt  ticket4238791283771.txt
ticket4238791283670.txt  ticket4238791283721.txt  ticket4238791283772.txt
ticket4238791283671.txt  ticket4238791283722.txt  ticket4238791283773.txt
ticket4238791283672.txt  ticket4238791283723.txt  ticket4238791283774.txt
ticket4238791283673.txt  ticket4238791283724.txt  ticket4238791283775.txt
ticket4238791283674.txt  ticket4238791283725.txt  ticket4238791283776.txt
ticket4238791283675.txt  ticket4238791283726.txt  ticket4238791283777.txt
ticket4238791283676.txt  ticket4238791283727.txt  ticket4238791283778.txt
ticket4238791283677.txt  ticket4238791283728.txt  ticket4238791283779.txt
ticket4238791283678.txt  ticket4238791283729.txt  ticket4238791283780.txt
ticket4238791283679.txt  ticket4238791283730.txt  ticket4238791283781.txt
ticket4238791283680.txt  ticket4238791283731.txt  ticket4238791283782.txt
ticket4238791283681.txt  ticket4238791283732.txt  ticket4238791283783.txt
ticket4238791283682.txt  ticket4238791283733.txt  ticket4238791283784.txt
ticket4238791283683.txt  ticket4238791283734.txt  ticket4238791283785.txt
ticket4238791283684.txt  ticket4238791283735.txt  ticket4238791283786.txt
ticket4238791283685.txt  ticket4238791283736.txt  ticket4238791283787.txt
ticket4238791283686.txt  ticket4238791283737.txt  ticket4238791283788.txt
ticket4238791283687.txt  ticket4238791283738.txt  ticket4238791283789.txt
ticket4238791283688.txt  ticket4238791283739.txt  ticket4238791283790.txt
ticket4238791283689.txt  ticket4238791283740.txt  ticket4238791283791.txt
ticket4238791283690.txt  ticket4238791283741.txt  ticket4238791283792.txt
ticket4238791283691.txt  ticket4238791283742.txt  ticket4238791283793.txt
ticket4238791283692.txt  ticket4238791283743.txt  ticket4238791283794.txt
ticket4238791283693.txt  ticket4238791283744.txt  ticket4238791283795.txt
ticket4238791283694.txt  ticket4238791283745.txt  ticket4238791283796.txt
ticket4238791283695.txt  ticket4238791283746.txt  ticket4238791283797.txt
ticket4238791283696.txt  ticket4238791283747.txt  ticket4238791283798.txt
ticket4238791283697.txt  ticket4238791283748.txt  ticket4238791283799.txt
ticket4238791283698.txt  ticket4238791283749.txt  ticket4238791283800.txt
ticket4238791283699.txt  ticket4238791283750.txt  ticket4238791283801.txt
┌─[root@htb-yku7kqk8e2]─[/home/htb-ac-1746824/Desktop/HTB]
└──╼ #nano ticket4238791283723.txt
┌─[root@htb-yku7kqk8e2]─[/home/htb-ac-1746824/Desktop/HTB]
└──╼ #ls -la
total 72
drwx------ 2 nobody         nogroup        65536 Nov 10  2021 .
drwxr-xr-x 3 htb-ac-1746824 htb-ac-1746824  4096 Jan 16 12:24 ..
-rwx------ 1 nobody         nogroup            0 Nov 10  2021 ticket4238791283649.txt
-rwx------ 1 nobody         nogroup            0 Nov 10  2021 ticket4238791283650.txt
-rwx------ 1 nobody         nogroup            0 Nov 10  2021 ticket4238791283651.txt
-rwx------ 1 nobody         nogroup            0 Nov 10  2021 ticket4238791283652.txt
-rwx------ 1 nobody         nogroup            0 Nov 10  2021 ticket4238791283653.txt
-rwx------ 1 nobody         nogroup            0 Nov 10  2021 ticket4238791283654.txt
-rwx------ 1 nobody         nogroup            0 Nov 10  2021 ticket4238791283655.txt
-rwx------ 1 nobody         nogroup            0 Nov 10  2021 ticket4238791283656.txt
-rwx------ 1 nobody         nogroup            0 Nov 10  2021 ticket4238791283657.txt
-rwx------ 1 nobody         nogroup            0 Nov 10  2021 ticket4238791283658.txt
-rwx------ 1 nobody         nogroup            0 Nov 10  2021 ticket4238791283659.txt
-rwx------ 1 nobody         nogroup            0 Nov 10  2021 ticket4238791283660.txt
-rwx------ 1 nobody         nogroup            0 Nov 10  2021 ticket4238791283661.txt
-rwx------ 1 nobody         nogroup            0 Nov 10  2021 ticket4238791283662.txt
-rwx------ 1 nobody         nogroup            0 Nov 10  2021 ticket4238791283663.txt
-rwx------ 1 nobody         nogroup            0 Nov 10  2021 ticket4238791283664.txt
-rwx------ 1 nobody         nogroup            0 Nov 10  2021 ticket4238791283665.txt
-rwx------ 1 nobody         nogroup            0 Nov 10  2021 ticket4238791283666.txt
-rwx------ 1 nobody         nogroup            0 Nov 10  2021 ticket4238791283667.txt
-rwx------ 1 nobody         nogroup            0 Nov 10  2021 ticket4238791283668.txt
-rwx------ 1 nobody         nogroup            0 Nov 10  2021 ticket4238791283669.txt
-rwx------ 1 nobody         nogroup            0 Nov 10  2021 ticket4238791283670.txt
-rwx------ 1 nobody         nogroup            0 Nov 10  2021 ticket4238791283671.txt
-rwx------ 1 nobody         nogroup            0 Nov 10  2021 ticket4238791283672.txt
-rwx------ 1 nobody         nogroup            0 Nov 10  2021 ticket4238791283673.txt
-rwx------ 1 nobody         nogroup            0 Nov 10  2021 ticket4238791283674.txt
-rwx------ 1 nobody         nogroup            0 Nov 10  2021 ticket4238791283675.txt
-rwx------ 1 nobody         nogroup            0 Nov 10  2021 ticket4238791283676.txt
-rwx------ 1 nobody         nogroup            0 Nov 10  2021 ticket4238791283677.txt
-rwx------ 1 nobody         nogroup            0 Nov 10  2021 ticket4238791283678.txt
-rwx------ 1 nobody         nogroup            0 Nov 10  2021 ticket4238791283679.txt
-rwx------ 1 nobody         nogroup            0 Nov 10  2021 ticket4238791283680.txt
-rwx------ 1 nobody         nogroup            0 Nov 10  2021 ticket4238791283681.txt
-rwx------ 1 nobody         nogroup            0 Nov 10  2021 ticket4238791283682.txt
-rwx------ 1 nobody         nogroup            0 Nov 10  2021 ticket4238791283683.txt
-rwx------ 1 nobody         nogroup            0 Nov 10  2021 ticket4238791283684.txt
-rwx------ 1 nobody         nogroup            0 Nov 10  2021 ticket4238791283685.txt
-rwx------ 1 nobody         nogroup            0 Nov 10  2021 ticket4238791283686.txt
-rwx------ 1 nobody         nogroup            0 Nov 10  2021 ticket4238791283687.txt
-rwx------ 1 nobody         nogroup            0 Nov 10  2021 ticket4238791283688.txt
-rwx------ 1 nobody         nogroup            0 Nov 10  2021 ticket4238791283689.txt
-rwx------ 1 nobody         nogroup            0 Nov 10  2021 ticket4238791283690.txt
-rwx------ 1 nobody         nogroup            0 Nov 10  2021 ticket4238791283691.txt
-rwx------ 1 nobody         nogroup            0 Nov 10  2021 ticket4238791283692.txt
-rwx------ 1 nobody         nogroup            0 Nov 10  2021 ticket4238791283693.txt
-rwx------ 1 nobody         nogroup            0 Nov 10  2021 ticket4238791283694.txt
-rwx------ 1 nobody         nogroup            0 Nov 10  2021 ticket4238791283695.txt
-rwx------ 1 nobody         nogroup            0 Nov 10  2021 ticket4238791283696.txt
-rwx------ 1 nobody         nogroup            0 Nov 10  2021 ticket4238791283697.txt
-rwx------ 1 nobody         nogroup            0 Nov 10  2021 ticket4238791283698.txt
-rwx------ 1 nobody         nogroup            0 Nov 10  2021 ticket4238791283699.txt
-rwx------ 1 nobody         nogroup            0 Nov 10  2021 ticket4238791283700.txt
-rwx------ 1 nobody         nogroup            0 Nov 10  2021 ticket4238791283701.txt
-rwx------ 1 nobody         nogroup            0 Nov 10  2021 ticket4238791283702.txt
-rwx------ 1 nobody         nogroup            0 Nov 10  2021 ticket4238791283703.txt
-rwx------ 1 nobody         nogroup            0 Nov 10  2021 ticket4238791283704.txt
-rwx------ 1 nobody         nogroup            0 Nov 10  2021 ticket4238791283705.txt
-rwx------ 1 nobody         nogroup            0 Nov 10  2021 ticket4238791283706.txt
-rwx------ 1 nobody         nogroup            0 Nov 10  2021 ticket4238791283707.txt
-rwx------ 1 nobody         nogroup            0 Nov 10  2021 ticket4238791283708.txt
-rwx------ 1 nobody         nogroup            0 Nov 10  2021 ticket4238791283709.txt
-rwx------ 1 nobody         nogroup            0 Nov 10  2021 ticket4238791283710.txt
-rwx------ 1 nobody         nogroup            0 Nov 10  2021 ticket4238791283711.txt
-rwx------ 1 nobody         nogroup            0 Nov 10  2021 ticket4238791283712.txt
-rwx------ 1 nobody         nogroup            0 Nov 10  2021 ticket4238791283713.txt
-rwx------ 1 nobody         nogroup            0 Nov 10  2021 ticket4238791283714.txt
-rwx------ 1 nobody         nogroup            0 Nov 10  2021 ticket4238791283715.txt
-rwx------ 1 nobody         nogroup            0 Nov 10  2021 ticket4238791283716.txt
-rwx------ 1 nobody         nogroup            0 Nov 10  2021 ticket4238791283717.txt
-rwx------ 1 nobody         nogroup            0 Nov 10  2021 ticket4238791283718.txt
-rwx------ 1 nobody         nogroup            0 Nov 10  2021 ticket4238791283719.txt
-rwx------ 1 nobody         nogroup            0 Nov 10  2021 ticket4238791283720.txt
-rwx------ 1 nobody         nogroup            0 Nov 10  2021 ticket4238791283721.txt
-rwx------ 1 nobody         nogroup            0 Nov 10  2021 ticket4238791283722.txt
-rwx------ 1 nobody         nogroup            0 Nov 10  2021 ticket4238791283723.txt
-rwx------ 1 nobody         nogroup            0 Nov 10  2021 ticket4238791283724.txt
-rwx------ 1 nobody         nogroup            0 Nov 10  2021 ticket4238791283725.txt
-rwx------ 1 nobody         nogroup            0 Nov 10  2021 ticket4238791283726.txt
-rwx------ 1 nobody         nogroup            0 Nov 10  2021 ticket4238791283727.txt
-rwx------ 1 nobody         nogroup            0 Nov 10  2021 ticket4238791283728.txt
-rwx------ 1 nobody         nogroup            0 Nov 10  2021 ticket4238791283729.txt
-rwx------ 1 nobody         nogroup            0 Nov 10  2021 ticket4238791283730.txt
-rwx------ 1 nobody         nogroup            0 Nov 10  2021 ticket4238791283731.txt
-rwx------ 1 nobody         nogroup            0 Nov 10  2021 ticket4238791283732.txt
-rwx------ 1 nobody         nogroup            0 Nov 10  2021 ticket4238791283733.txt
-rwx------ 1 nobody         nogroup            0 Nov 10  2021 ticket4238791283734.txt
-rwx------ 1 nobody         nogroup            0 Nov 10  2021 ticket4238791283735.txt
-rwx------ 1 nobody         nogroup            0 Nov 10  2021 ticket4238791283736.txt
-rwx------ 1 nobody         nogroup            0 Nov 10  2021 ticket4238791283737.txt
-rwx------ 1 nobody         nogroup            0 Nov 10  2021 ticket4238791283738.txt
-rwx------ 1 nobody         nogroup            0 Nov 10  2021 ticket4238791283739.txt
-rwx------ 1 nobody         nogroup            0 Nov 10  2021 ticket4238791283740.txt
-rwx------ 1 nobody         nogroup            0 Nov 10  2021 ticket4238791283741.txt
-rwx------ 1 nobody         nogroup            0 Nov 10  2021 ticket4238791283742.txt
-rwx------ 1 nobody         nogroup            0 Nov 10  2021 ticket4238791283743.txt
-rwx------ 1 nobody         nogroup            0 Nov 10  2021 ticket4238791283744.txt
-rwx------ 1 nobody         nogroup            0 Nov 10  2021 ticket4238791283745.txt
-rwx------ 1 nobody         nogroup            0 Nov 10  2021 ticket4238791283746.txt
-rwx------ 1 nobody         nogroup            0 Nov 10  2021 ticket4238791283747.txt
-rwx------ 1 nobody         nogroup            0 Nov 10  2021 ticket4238791283748.txt
-rwx------ 1 nobody         nogroup            0 Nov 10  2021 ticket4238791283749.txt
-rwx------ 1 nobody         nogroup            0 Nov 10  2021 ticket4238791283750.txt
-rwx------ 1 nobody         nogroup            0 Nov 10  2021 ticket4238791283751.txt
-rwx------ 1 nobody         nogroup            0 Nov 10  2021 ticket4238791283752.txt
-rwx------ 1 nobody         nogroup            0 Nov 10  2021 ticket4238791283753.txt
-rwx------ 1 nobody         nogroup            0 Nov 10  2021 ticket4238791283754.txt
-rwx------ 1 nobody         nogroup            0 Nov 10  2021 ticket4238791283755.txt
-rwx------ 1 nobody         nogroup            0 Nov 10  2021 ticket4238791283756.txt
-rwx------ 1 nobody         nogroup            0 Nov 10  2021 ticket4238791283757.txt
-rwx------ 1 nobody         nogroup            0 Nov 10  2021 ticket4238791283758.txt
-rwx------ 1 nobody         nogroup            0 Nov 10  2021 ticket4238791283759.txt
-rwx------ 1 nobody         nogroup            0 Nov 10  2021 ticket4238791283760.txt
-rwx------ 1 nobody         nogroup            0 Nov 10  2021 ticket4238791283761.txt
-rwx------ 1 nobody         nogroup            0 Nov 10  2021 ticket4238791283762.txt
-rwx------ 1 nobody         nogroup            0 Nov 10  2021 ticket4238791283763.txt
-rwx------ 1 nobody         nogroup            0 Nov 10  2021 ticket4238791283764.txt
-rwx------ 1 nobody         nogroup            0 Nov 10  2021 ticket4238791283765.txt
-rwx------ 1 nobody         nogroup            0 Nov 10  2021 ticket4238791283766.txt
-rwx------ 1 nobody         nogroup            0 Nov 10  2021 ticket4238791283767.txt
-rwx------ 1 nobody         nogroup            0 Nov 10  2021 ticket4238791283768.txt
-rwx------ 1 nobody         nogroup            0 Nov 10  2021 ticket4238791283769.txt
-rwx------ 1 nobody         nogroup            0 Nov 10  2021 ticket4238791283770.txt
-rwx------ 1 nobody         nogroup            0 Nov 10  2021 ticket4238791283771.txt
-rwx------ 1 nobody         nogroup            0 Nov 10  2021 ticket4238791283772.txt
-rwx------ 1 nobody         nogroup            0 Nov 10  2021 ticket4238791283773.txt
-rwx------ 1 nobody         nogroup            0 Nov 10  2021 ticket4238791283774.txt
-rwx------ 1 nobody         nogroup            0 Nov 10  2021 ticket4238791283775.txt
-rwx------ 1 nobody         nogroup            0 Nov 10  2021 ticket4238791283776.txt
-rwx------ 1 nobody         nogroup            0 Nov 10  2021 ticket4238791283777.txt
-rwx------ 1 nobody         nogroup            0 Nov 10  2021 ticket4238791283778.txt
-rwx------ 1 nobody         nogroup            0 Nov 10  2021 ticket4238791283779.txt
-rwx------ 1 nobody         nogroup            0 Nov 10  2021 ticket4238791283780.txt
-rwx------ 1 nobody         nogroup            0 Nov 10  2021 ticket4238791283781.txt
-rwx------ 1 nobody         nogroup         1305 Nov 10  2021 ticket4238791283782.txt
-rwx------ 1 nobody         nogroup            0 Nov 10  2021 ticket4238791283783.txt
-rwx------ 1 nobody         nogroup            0 Nov 10  2021 ticket4238791283784.txt
-rwx------ 1 nobody         nogroup            0 Nov 10  2021 ticket4238791283785.txt
-rwx------ 1 nobody         nogroup            0 Nov 10  2021 ticket4238791283786.txt
-rwx------ 1 nobody         nogroup            0 Nov 10  2021 ticket4238791283787.txt
-rwx------ 1 nobody         nogroup            0 Nov 10  2021 ticket4238791283788.txt
-rwx------ 1 nobody         nogroup            0 Nov 10  2021 ticket4238791283789.txt
-rwx------ 1 nobody         nogroup            0 Nov 10  2021 ticket4238791283790.txt
-rwx------ 1 nobody         nogroup            0 Nov 10  2021 ticket4238791283791.txt
-rwx------ 1 nobody         nogroup            0 Nov 10  2021 ticket4238791283792.txt
-rwx------ 1 nobody         nogroup            0 Nov 10  2021 ticket4238791283793.txt
-rwx------ 1 nobody         nogroup            0 Nov 10  2021 ticket4238791283794.txt
-rwx------ 1 nobody         nogroup            0 Nov 10  2021 ticket4238791283795.txt
-rwx------ 1 nobody         nogroup            0 Nov 10  2021 ticket4238791283796.txt
-rwx------ 1 nobody         nogroup            0 Nov 10  2021 ticket4238791283797.txt
-rwx------ 1 nobody         nogroup            0 Nov 10  2021 ticket4238791283798.txt
-rwx------ 1 nobody         nogroup            0 Nov 10  2021 ticket4238791283799.txt
-rwx------ 1 nobody         nogroup            0 Nov 10  2021 ticket4238791283800.txt
-rwx------ 1 nobody         nogroup            0 Nov 10  2021 ticket4238791283801.txt
┌─[root@htb-yku7kqk8e2]─[/home/htb-ac-1746824/Desktop/HTB]
└──╼ #whoami
id
stat ticket4238791283720.txt
namei -l ticket4238791283720.txt
root
uid=0(root) gid=0(root) groups=0(root)
  File: ticket4238791283720.txt
  Size: 0         	Blocks: 0          IO Block: 1048576 regular empty file
Device: 0,56	Inode: 281474976940206  Links: 1
Access: (0700/-rwx------)  Uid: (65534/  nobody)   Gid: (65534/ nogroup)
Access: 2021-11-10 18:08:52.481820300 -0600
Modify: 2021-11-10 09:19:36.969281000 -0600
Change: 2021-11-10 09:24:29.295641100 -0600
 Birth: -
f: ticket4238791283720.txt
-rwx------ nobody nogroup ticket4238791283720.txt
┌─[root@htb-yku7kqk8e2]─[/home/htb-ac-1746824/Desktop/HTB]
└──╼ #ls -la | grep 1305
-rwx------ 1 nobody         nogroup         1305 Nov 10  2021 ticket4238791283782.txt
┌─[root@htb-yku7kqk8e2]─[/home/htb-ac-1746824/Desktop/HTB]
└──╼ #
GOT FILE WHICH IS ONLY TXT FILE WITH INFO ABOUT CREDS FOR A SMTP SERVER:

┌─[root@htb-yku7kqk8e2]─[/home/htb-ac-1746824/Desktop/HTB]
└──╼ #cat ticket4238791283782.txt
Conversation with InlaneFreight Ltd

Started on November 10, 2021 at 01:27 PM London time GMT (GMT+0200)
---
01:27 PM | Operator: Hello,. 
 
So what brings you here today?
01:27 PM | alex: hello
01:27 PM | Operator: Hey alex!
01:27 PM | Operator: What do you need help with?
01:36 PM | alex: I run into an issue with the web config file on the system for the smtp server. do you mind to take a look at the config?
01:38 PM | Operator: Of course
01:42 PM | alex: here it is:

 1smtp {
 2    host=smtp.web.dev.inlanefreight.htb
 3    #port=25
 4    ssl=true
 5    user="alex"
 6    password="lol123!mD"
 7    from="alex.g@web.dev.inlanefreight.htb"
 8}
 9
10securesocial {
11    
12    onLoginGoTo=/
13    onLogoutGoTo=/login
14    ssl=false
15    
16    userpass {      
17    	withUserNameSupport=false
18    	sendWelcomeEmail=true
19    	enableGravatarSupport=true
20    	signupSkipLogin=true
21    	tokenDuration=60
22    	tokenDeleteInterval=5
23    	minimumPasswordLength=8
24    	enableTokenJob=true
25    	hasher=bcrypt
26	}
27
28     cookie {
29     #       name=id
30     #       path=/login
31     #       domain="10.129.2.59:9500"
32            httpOnly=true
33            makeTransient=false
34            absoluteTimeoutInMinutes=1440
35            idleTimeoutInMinutes=1440
36    }   




