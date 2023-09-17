---
title: "go modules development"
date: 2023-09-17T18:19:24+01:00
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

Repoint to local repo

Allows the colaboration on modules without having to change a load of the stack.
<!--more-->

```powershell
go work mod edit -replace="github.com/hbstack/socials=C:\Users\kev\hbstack-socials"
```
Undo repointing
```powershell
go work mod edit -dropreplace="github.com/hbstack/socials"
```