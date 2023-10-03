---
title: "windows sandbox"
date: 2023-10-03T11:10:26+01:00
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
 - sandbox
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

Windows Sandbox is really powerful way of testing scripts without knackering your own install.

Useful for testing scripts, if not already enabled you need to run the following in an elevated windows powershell terminal:

```powershell
Enable-WindowsOptionalFeature -FeatureName "Containers-DisposableClientVM" -All -Online
```

Open your start menu search for sandbox and you'll find windows sandbox.

Open this, and it will open a clean install of windows that you can use to test scripts out or software without screwing your main machine up. Once you shut it down everything is lost.

https://www.thomasmaurer.ch/2019/05/how-to-configure-windows-sandbox/

<!--more-->
It also allows me to test winget scripts I needed to install it in a certain way and using the details from: https://learn.microsoft.com/en-us/windows/package-manager/winget/#install-winget-on-windows-sandbox I've been able to install it and use it

```powershell
$progressPreference = 'silentlyContinue'
Write-Information "Downloading WinGet and its dependencies..."
Invoke-WebRequest -Uri https://aka.ms/getwinget -OutFile Microsoft.DesktopAppInstaller_8wekyb3d8bbwe.msixbundle
Invoke-WebRequest -Uri https://aka.ms/Microsoft.VCLibs.x64.14.00.Desktop.appx -OutFile Microsoft.VCLibs.x64.14.00.Desktop.appx
Invoke-WebRequest -Uri https://github.com/microsoft/microsoft-ui-xaml/releases/download/v2.7.3/Microsoft.UI.Xaml.2.7.x64.appx -OutFile Microsoft.UI.Xaml.2.7.x64.appx
Add-AppxPackage Microsoft.VCLibs.x64.14.00.Desktop.appx
Add-AppxPackage Microsoft.UI.Xaml.2.7.x64.appx
Add-AppxPackage Microsoft.DesktopAppInstaller_8wekyb3d8bbwe.msixbundle
```