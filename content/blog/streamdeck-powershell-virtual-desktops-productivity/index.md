---
title: "Streamdeck Powershell Virtual Desktops Productivity"
date: 2023-09-02T23:15:06+01:00
draft: true
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

https://learn.microsoft.com/en-us/powershell/module/powershellget/
https://valoremreply.com/post/creatingapowershellmodule/
https://blog.devolutions.net/2021/03/local-powershell-module-repository-no-server-required/


<!--more-->

## Local Powershell Modules Work Items

```powershell
Get-PSRepository
Name                      InstallationPolicy   SourceLocation
----                      ------------------   --------------
PSGallery                 Trusted              https://www.powershellgallery.com/api/v2

Register-PSRepository -Name LocalModules -SourceLocation C:\studious-fiesta\WindowsPowerShell\Modules\ -InstallationPolicy 'trusted'

Get-PSRepository
Name                      InstallationPolicy   SourceLocation
----                      ------------------   --------------
PSGallery                 Trusted              https://www.powershellgallery.com/api/v2
LocalModules              Trusted              C:\studious-fiesta\WindowsPowerShell\Modules\

Publish-Module -Name VirtualDesktopHelper -Repository LocalModules -Force

Install-Module -Name VirtualDesktopHelper

Get-InstalledModule
Version              Name                                Repository           Description
-------              ----                                ----------           -----------
4.1                  Autoload                            PSGallery            Autoload function like the Korn shell, and can inject fu...
1.4.8.1              PackageManagement                   PSGallery            PackageManagement (a.k.a. OneGet) is a new way to discov...
2.2.5                PowerShellGet                       PSGallery            PowerShell module with commands for discovering, install...
4.8                  Reflection                          PSGallery            A .Net Framework Interaction Module for PowerShell
0.4.6                ScriptDeck                          PSGallery            Supercharge your StreamDeck with PowerShell
1.5.3                VirtualDesktop                      PSGallery            VirtualDesktop is a module that provides commandlets to ...
2.5.0.0              Wasp                                PSGallery            A Windows Automation Script module for Powershell

Get-Module -ListAvailable


$RepoPath="C:\studious-fiesta\WindowsPowerShell\LocalRepo"
$RepoName='LocalRepo'

#Create Local Repo Folder
New-Item -Path $RepoPath -ItemType 'Directory' -Force

#Register the Local Repo Folder as a Repository
Register-PSRepository -name $RepoName -SourceLocation "$(Resolve-Path $RepoPath)" -PublishLocation "$(Resolve-Path $RepoPath)" -InstallationPolicy 'Trusted'

$ModulesPath='C:\studious-fiesta\WindowsPowerShell\Modules'
$ModuleName='VirtualDesktopHelper'

#Publish the Module to the Local Repo
Publish-Module -Repository $RepoName -Path $ModulesPath\$ModuleName

# What Modules are Installed
Get-InstalledModule

#Install Module
Install-Module -Name $ModuleName -Repository $RepoName -Force

# What Modules are Installed
Get-InstalledModule

#Update the installed Module
Update-Module -Name $ModuleName


# What Modules are Installed
Get-InstalledModule

#Remove a Module and all installed version should it have been updated
UnInstall-Module -Name $ModuleName -AllVersions
```

```powershell
$ModuleRepoName='LocalModules'
$ModulesPath='C:\studious-fiesta\WindowsPowerShell\Modules'
$ModuleName='VirtualDesktopHelper'



```