---
title: "clean windows install"
date: 2023-10-03T11:01:40+01:00
draft: true
description:
noindex: false
featured: false
pinned: false
# comments: false
series:
#  -
categories:
 - windows
tags:
 - software
 - clean
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

Here are the programs that I install when I perform a clean install of windows

<!--more-->

_Ideally run in en elevated privileged windows powershell terminal._

```powershell
#Install Browsers
winget install --accept-package-agreements --accept-source-agreements Google.Chrome, Mozilla.Firefox, Brave.Brave
#Install Developer
winget install --accept-package-agreements --accept-source-agreements GoLang.Go, Hugo.Hugo.Extended, OpenJS.NodeJS.LTS, Microsoft.VisualStudioCode, notepad++.notepad++, Microsoft.WindowsTerminal
winget install --accept-package-agreements --accept-source-agreements Git.Git --custom "/o:EnableSymlinks=Enabled /Components=ext,ext\shellhere,ext\guihere,gitlfs,assoc,assoc_sh,windowsterminal,scalar"
#Install Productivity
winget install --accept-package-agreements --accept-source-agreements AutoHotkey.AutoHotkey, 9NBLGGH5R558, Microsoft.PowerToys
#Install Other Things
winget install --accept-package-agreements --accept-source-agreements Spotify.Spotify, calibre.calibre
#Install Yearly Updated items
winget install --accept-package-agreements --accept-source-agreements TechSmith.Snagit.2023
```

*Reboot*

```powershell
git config --global user.email "you@example.com"
git config --global user.name "Your Name"

npm install -g npm@10.1.0
npm install
```