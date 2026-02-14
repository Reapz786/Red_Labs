
![](Obsidian%20assets/RootMe.png)

> [!important]
> A ctf for beginners, can you root me?
>First, let's get information about the target.

> [!important]
> Scan the machine, how many ports are open?
> What version of Apache is running? 
> What service is running on port 22?
> Find directories on the web server using the GoBuster tool.  
> What is the hidden directory?

> [!info]
> Running nmap & Gobuster with specific options for both should get me answers for all of them.

```
┌──(kali㉿kali)-[~]                                                                                                                                        
└─$ gobuster dir -u http://10.67.185.180/ -w /usr/share/dirb/wordlists/common.txt                                                                          
===============================================================                                                                                            
Gobuster v3.8                                                                                                                                              
by OJ Reeves (@TheColonial) & Christian Mehlmauer (@firefart)                                                                                              
===============================================================                                                                                            
[+] Url:                     http://10.67.185.180/  
[+] Method:                  GET                                                       
[+] Threads:                 10
[+] Wordlist:                /usr/share/dirb/wordlists/common.txt
[+] Negative Status codes:   404
[+] User Agent:              gobuster/3.8        17:53:04 [3/55]
[+] Timeout:                 10s                                                                                                                           
===============================================================                                                                                            
Starting gobuster in directory enumeration mode                                                                                                            
===============================================================
/.hta                 (Status: 403) [Size: 278]                                                                                                            
/.htpasswd            (Status: 403) [Size: 278]                                                             
/.htaccess            (Status: 403) [Size: 278]                                                       
/css                  (Status: 301) [Size: 312] [--> http://10.67.185.180/css/]                                                                            
/index.php            (Status: 200) [Size: 616]                                                                                                            
/js                   (Status: 301) [Size: 311] [--> http://10.67.185.180/js/]                                                                             
/panel                (Status: 301) [Size: 314] [--> http://10.67.185.180/panel/]                                                                          
/server-status        (Status: 403) [Size: 278]                                                                                                            
/uploads              (Status: 301) [Size: 316] [--> http://10.67.185.180/uploads/]
Progress: 4613 / 4613 (100.00%)                                              
===============================================================              
Finished                                                                     
===============================================================
```
```

```
