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
https://adamtheautomator.com/powershell-modules/
https://essenceofcode.com/2022/05/05/debugging-powershell-modules-in-vs-code/

https://devblogs.microsoft.com/scripting/debugging-powershell-script-in-visual-studio-code-part-1/
https://devblogs.microsoft.com/scripting/debugging-powershell-script-in-visual-studio-code-part-2/
https://github.com/MicrosoftDocs/PowerShell-Docs/blob/main/reference/docs-conceptual/dev-cross-plat/vscode/using-vscode.md
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
# Steps to create a PowerShell module

These steps will register your local folder as a PSRepository and Package your PowerShell module so that Install-Module will find the package and install it.

```powershell
$ModuleRepoName='LocalModules'
$ModulesPath=$env:PSModulePath.split(';')[0]
$ModuleName='TestModule'
$ModuleVersion='0.0.1'

#What Repositories do we have registered?
Get-PSRepository

#Register Local Module Folder as a Repository
Register-PSRepository -Name $ModuleRepoName -SourceLocation $ModulesPath -InstallationPolicy 'Trusted'

Unregister-PSRepository -Name $ModuleRepoName
```

## Create New Module
These steps will create the module directory and manifest file:

```powershell
#Create Local Module Folder
New-Item -Path $ModulesPath\$ModuleName -ItemType 'Directory' -Force

#Create new Script File
New-Item -Path $ModulesPath\$ModuleName\$ModuleName.psm1  -ItemType 'File' -Force

$manifest = @{
    Path                = "$ModulesPath\$ModuleName\$ModuleName.psd1"
    RootModule          = "$ModuleName.psm1" 
    ModuleVersion       = "$ModuleVersion"
    Author              = 'Kevin McCabe'
    CompanyName         = 'Red Giraffes'
    Description         = 'Your module description should be succinct'
    FunctionsToExport   = '*' # This will export all functions as commandlets
}

#Create Module Manifest
New-ModuleManifest @manifest
```

## Create Actual Module
These steps will create the actual module (NuGet package)

```powershell
Publish-Module -Path $ModulesPath\$ModuleName -Repository $ModuleRepoName -Force -Verbose
```

You have created your first module and are ready to install it with the following commands.

```powershell
Install-Module -Name $ModuleName -Repository $ModuleRepoName -Verbose -requiredversion $ModuleVersion -Force -AllowClobber -Scope CurrentUser

Get-Module
```

Note: If your new module doesn't show up – enter the command:
```powershell
Import-Module -Name $ModuleName -Force

Get-Module -ListAvailable
```

# PowerShell Gallery (PSGallery)
Now that you have gone through the process of creating a PowerShell module that you can import. If you wish to share this with the world so that others may reuse what you have created, you can publish to the PSGallery. The PSGallery is the default PowerShell location that users find new modules, download them and receive updates.

To do this you will need to sign up for a free account and get your -NuGetApiKey

Navigate to https://www.powershellgallery.com/ and sign-in.
In the upper right click on your sign-in name dropdown and choose ‘API Keys’.
Click ‘Create’, fill in the form and save your key someplace safe so you remember it.
Now that you have an apikey you may publish to the PSGallery just like you published to your LocalModules repository. Example:

```powershell
$NuGetApiKey='ab12cde3fgh45ijk67lmnopq8rs9tuvwxyzabcdefghij0'
$requiredVersion='1.0'
Publish-Module -Name $ModuleName -NuGetApiKey $NuGetApiKey -requiredversion $requiredVersion -verbose
```