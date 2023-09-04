---
title: "My First Hugo.io Post"
date: 2023-09-02T23:02:11+01:00
draft: true
description: 
noindex: false
featured: true
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

Just dumping some thoughts out for now

<!--more-->
Repoint to local repo

Allows the colaboration on modules without having to change a load of the stack.

```powershell
go mod edit -replace="github.com/hbstack/socials=C:\Users\kev\hbstack-socials"
```
Undo repointing
```
go mod edit -dropreplace="github.com/hbstack/socials"
```

#### Heading 4

```powershell
#display powershell version
$PSVersionTable.PSVersion

#install winget on Windows Powershell 5
Install-Module -Name Microsoft.WinGet.Client

#see what is installed
winget list
#see what update installs are outdated
winget update
#update all
winget update --all
```

## Windows Sandbox
Useful for testing scripts, if not already enabled you need to run the following in an elevated windows powershell terminal:
```powershell
Enable-WindowsOptionalFeature -FeatureName "Containers-DisposableClientVM" -All -Online
```

Open your start menu search for sandbox and you'll find windows sandbox.
Open this, and it will open a clean install of windows that you can use to test scripts out or software without screwing your main machine up. Once you shut it down everything is lost.
