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
```powershell
go mod edit -dropreplace="github.com/hbstack/socials"
```

#### Powershell Info

```powershell
#display powershell version
$PSVersionTable.PSVersion

#install winget on Windows Powershell 5
Install-Module -Name Microsoft.WinGet.Client

#see what is installed
winget list

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

## Fix Git Context menu failing
### Hammer Option

1. Uninstall git
```powershell
winget uninstall git
```
2. Open regedit as an admin
1. Go to 'HKEY_CURRENT_USER/Software/Classes/Directory/Background'
1. Delete key 'shell'
2. Open regedit
1. CTRL+F - Look at Keys only and uncheck Match Whole String Only - git_
1. Delete key
1. F3 to find next and delete key again and repeat
1. Reinstall git
```powershell
winget install git
```
6. Restart Explorer 

### Less Hammer
1. Open regedit as an admin
1. CTRL+F - Look at Keys only and uncheck Match Whole String Only - git_
1. point items to correct place example below

```registry
[HKEY_CLASSES_ROOT\Directory\background\shell\git_gui]
@="Open Git &GUI here"
"Icon"="C:\\Program Files\\Git\\cmd\\git-gui.exe"

[HKEY_CLASSES_ROOT\Directory\background\shell\git_gui\command]
@="\"C:\\Program Files\\Git\\cmd\\git-gui.exe\" \"--working-dir\" \"%v.\""

[HKEY_CLASSES_ROOT\Directory\background\shell\git_shell]
@="Open Git Ba&sh here"
"Icon"="C:\\Program Files\\Git\\git-bash.exe"

[HKEY_CLASSES_ROOT\Directory\background\shell\git_shell\command]
@="\"C:\\Program Files\\Git\\git-bash.exe\" \"--cd=%v.\""
```

## Windows Sandbox
Useful for testing scripts, if not already enabled you need to run the following in an elevated windows powershell terminal:
```powershell
Enable-WindowsOptionalFeature -FeatureName "Containers-DisposableClientVM" -All -Online
```

Open your start menu search for sandbox and you'll find windows sandbox.
Open this, and it will open a clean install of windows that you can use to test scripts out or software without screwing your main machine up. Once you shut it down everything is lost.


## Startup folder
start > run > shell:startup