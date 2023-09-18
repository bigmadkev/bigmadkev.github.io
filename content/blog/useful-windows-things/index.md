---
title: "Useful Windows Things"
date: 2023-09-17T18:38:22+01:00
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

Some useful Windows things that I always forget

<!--more-->
## Variables and Shortcuts

### Startup folder
```start > run > shell:startup```
### Widows Store Apps folder
```start > run > shell:appsfolder```
### Roaming Appdata
```%APPDATA%```
### Program Files
```%ProgramFiles%```
### Userprofile
```%USERPROFILE%```

Can find more at https://ss64.com/nt/syntax-variables.html

## Windows Sandbox
Useful for testing scripts, if not already enabled you need to run the following in an elevated windows powershell terminal:

```powershell
Enable-WindowsOptionalFeature -FeatureName "Containers-DisposableClientVM" -All -Online
```

Open your start menu search for sandbox and you'll find windows sandbox.

Open this, and it will open a clean i nstall of windows that you can use to test scripts out or software without screwing your main machine up. Once you shut it down everything is lost.

https://www.thomasmaurer.ch/2019/05/how-to-configure-windows-sandbox/