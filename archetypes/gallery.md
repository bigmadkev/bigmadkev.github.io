---
title: "{{ $title := replace .Name "-" " " }}{{ replace $title "   " " - "}}"
date: {{ .Date }}
draft: true
description: 
resources:
  - src: foo.jpg
    title: Foo
    params:
      author:
      source:
---
