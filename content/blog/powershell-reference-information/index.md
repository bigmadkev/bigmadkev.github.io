---
title: "powershell reference information"
date: 2023-09-17T18:27:19+01:00
description:
noindex: false
featured: false
pinned: false
# comments: false
series:
#  -
categories:
#  -
tags:
#  -
images:
#  -
# menu:
#   main:
#     weight: 100
#     params:
#       icon:
#         vendor: bs
#         name: book
#         color: '#e24d0e'
---

Some points for powershell to refer back to.

<!--more-->


```powershell
#display powershell version
$PSVersionTable.PSVersion

#install winget on Windows Powershell 5
Install-Module -Name Microsoft.WinGet.Client

#see what is installed
winget list

#Get all the upgradeable applications
winget list --upgrade-available

#see what update installs are outdated
winget update
Name        Id                    Version      Available    Source
------------------------------------------------------------------
AutoHotkey  AutoHotkey.AutoHotkey 2.0.6        2.0.7        winget
Snagit 2023 TechSmith.Snagit.2023 23.2.0.30713 23.2.1.33145 winget
2 upgrades available.

#update all
winget update --all
Name        Id                    Version      Available    Source
------------------------------------------------------------------
AutoHotkey  AutoHotkey.AutoHotkey 2.0.6        2.0.7        winget
Snagit 2023 TechSmith.Snagit.2023 23.2.0.30713 23.2.1.33145 winget
2 upgrades available.

(1/2) Found AutoHotkey [AutoHotkey.AutoHotkey] Version 2.0.7
This application is licensed to you by its owner.
Microsoft is not responsible for, nor does it grant any licenses to, third-party packages.
Downloading https://github.com/AutoHotkey/AutoHotkey/releases/download/v2.0.7/AutoHotkey_2.0.7_setup.exe
  ██████████████████████████████  2.83 MB / 2.83 MB
Successfully verified installer hash
Starting package install...
Successfully installed

(2/2) Found Snagit 2023 [TechSmith.Snagit.2023] Version 23.2.1.33145
This application is licensed to you by its owner.
Microsoft is not responsible for, nor does it grant any licenses to, third-party packages.
Downloading https://download.techsmith.com/snagit/releases/snagit.exe
  ██████████████████████████████   271 MB /  271 MB
Successfully verified installer hash
Starting package install...
Successfully installed

2 package(s) have version numbers that cannot be determined. Use --include-unknown to see all results.
```
