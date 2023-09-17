---
title: "Useful GIT information on Windows"
date: 2023-09-17T18:30:35+01:00
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
Some useful Git info

<!--more-->
## Winget Custom Install
installing Git with EnabledSymLinks and windows terminal intergratio
```powershell
winget install Git.Git --custom "/o:EnableSymlinks=Enabled /Components=ext,ext\shellhere,ext\guihere,gitlfs,assoc,assoc_sh,windowsterminal,scalar"
```
## Symbolic Links and Git on Windows
 Symbolic Links and Git on Windows
Create the Symbolic link using gitbash and NOT Windows PowerShell

```bash
#Set global variable to use symlinks
git config --global core.symlinks true

#check the config is set
git config --show-scope --show-origin core.symlinks

#clone remote repo
cd /
git clone https://github.com/xxxx/xxxx.git

#create symbolic link
cd xxxx
ln -s '/c/Users/xxx/Documents/WindowsPowerShell/' WindowsPowerShell

#New symbolic link isn't under version control
git ls-files
#Add symbolic link folder to version control
git add WindowsPowerShell/
#The new folder is under version control
git ls-files
#Local commit of the changes
git commit -m "Finally adding the Windows PowerShell folder in correctly"
#Push changes to remote
git push
```

## Git context menu items missing

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