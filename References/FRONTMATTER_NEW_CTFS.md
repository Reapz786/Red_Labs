# 📝 FRONTMATTER FOR NEW CTFS

## Copy these to the TOP of each .md file (before any content)

---

## 🥒 Pickle Rick

```markdown
---
title: "Pickle Rick"
difficulty: Easy
platform: THM
tags: [Web Exploitation, Linux, Command Injection, Directory Enumeration]
tools: [Nmap, Gobuster, Burp Suite, Netcat]
date: 2026-02-01
---
```

**Common tools used in Pickle Rick:**
- Nmap (port scanning)
- Gobuster/Dirb (directory enumeration)
- Burp Suite (web analysis)
- Browser DevTools
- Netcat (reverse shell)
- Python (shell upgrade)

**Common tags:**
- Web Exploitation
- Linux
- Command Injection
- Directory Enumeration
- Reverse Shell

---

## 🔐 Basic Pentesting

```markdown
---
title: "Basic Pentesting"
difficulty: Easy
platform: THM
tags: [Reconnaissance, Enumeration, SMB, SSH, Linux, Privilege Escalation]
tools: [Nmap, Enum4linux, SMBClient, Hydra, SSH, John, LinPEAS]
date: 2026-02-01
---
```

**Common tools used in Basic Pentesting:**
- Nmap (service enumeration)
- Enum4linux (SMB enumeration)
- SMBClient (accessing shares)
- Hydra (password brute force)
- SSH (remote access)
- John the Ripper (password cracking)
- LinPEAS (privilege escalation enumeration)

**Common tags:**
- Reconnaissance
- Enumeration
- SMB Enumeration
- SSH
- Linux
- Privilege Escalation
- Brute Force
- Password Cracking

---

## 🕵️ Agent Sudo

```markdown
---
title: "Agent Sudo"
difficulty: Easy
platform: THM
tags: [Linux, Privilege Escalation, Sudo Exploitation, Steganography, Brute Force]
tools: [Nmap, Hydra, Binwalk, Steghide, John, SSH, Sudo]
date: 2026-02-01
---
```

**Common tools used in Agent Sudo:**
- Nmap (port scanning)
- Hydra (FTP brute force)
- Binwalk (file analysis)
- Steghide (steganography)
- John the Ripper (zip cracking)
- SSH (remote access)
- Sudo (privilege escalation)
- GTFOBins reference

**Common tags:**
- Linux
- Privilege Escalation
- Sudo Exploitation
- CVE Exploitation
- Steganography
- Brute Force
- FTP
- SSH

---

## 🎯 HOW TO USE:

### **Step 1:** Open the write-up file in Obsidian

### **Step 2:** Add frontmatter at the VERY TOP (before any content)

**Example for Pickle Rick:**
```markdown
---
title: "Pickle Rick"
difficulty: Easy
platform: THM
tags: [Web Exploitation, Linux, Command Injection]
tools: [Nmap, Gobuster, Burp Suite, Netcat]
date: 2026-02-01
---

> [!important]
> This is a Rick and Morty themed challenge!

(rest of your content...)
```

### **Step 3:** Adjust if needed

**Customize the tools list based on what YOU actually used:**
- Remove tools you didn't use
- Add tools you did use
- Order doesn't matter

**Examples:**
```markdown
# If you used more tools:
tools: [Nmap, Gobuster, Burp Suite, Netcat, Nikto, WPScan]

# If you used fewer tools:
tools: [Nmap, Gobuster]

# If you used different tools:
tools: [Nmap, Dirb, Python, Curl]
```

### **Step 4:** Save and push

```bash
git add .
git commit -m "Add frontmatter to Pickle Rick, Basic Pentesting, Agent Sudo"
git push
```

---

## 📊 WHAT HAPPENS AUTOMATICALLY:

Once you add frontmatter with `tools:` field:

**Before (showing 0):**
```
Tools Practiced: 0
```

**After (with all 6 write-ups):**
```
Tools Practiced: 15

Nmap x 6 → [Ignite] [Simple CTF] [Pickle Rick] [Basic Pentesting] [Agent Sudo] [Footprinting]
Gobuster x 4 → [Ignite] [Simple CTF] [Pickle Rick] [Footprinting]
Hydra x 3 → [Simple CTF] [Basic Pentesting] [Agent Sudo]
Burp Suite x 3 → [Pickle Rick] [Ignite] [Basic Pentesting]
SSH x 4 → [Simple CTF] [Basic Pentesting] [Agent Sudo] [Footprinting]
```

Each tool is clickable → goes to write-up

---

## 🔍 CAN'T REMEMBER WHAT TOOLS YOU USED?

**Quick way to check:**

1. Open the write-up
2. Search for tool names (Ctrl+F):
   - nmap
   - gobuster
   - burp
   - hydra
   - etc.
3. Add tools you find to the frontmatter

**OR**

If the write-up mentions commands, look for:
- `nmap` → Nmap
- `gobuster` → Gobuster
- `dirb` → Dirb
- `python` → Python
- `nc` → Netcat
- `hydra` → Hydra
- `john` → John the Ripper
- `ssh` → SSH
- `ftp` → FTP
- `burpsuite` / `burp` → Burp Suite

---

## 📅 DATES:

Change the date to when you completed the room:
```markdown
date: 2026-02-01  # Change to your completion date
```

Or just use today's date:
```markdown
date: 2026-02-12
```

---

## ✅ CHECKLIST:

- [ ] Pickle Rick frontmatter added
- [ ] Basic Pentesting frontmatter added
- [ ] Agent Sudo frontmatter added
- [ ] All tools fields populated
- [ ] All dates set
- [ ] Saved all files
- [ ] Pushed to GitHub
- [ ] Wait 3 minutes
- [ ] Check homepage - Tools Practiced should show count!

---

**Once you add these 3, you'll have 6 write-ups total with proper frontmatter. Tools Practiced will work perfectly!**
