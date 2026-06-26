---
title: "Why I Keep Building Systems That Remove Friction"
description: "The recurring pattern across my work and the thesis that software should adapt to people, not the other way around."
date: "2026-01-10"
tags: ["Design Philosophy", "Automation", "Friction"]
---

If you watch a non-programmer interact with a computer, you will quickly notice a pattern. They pause, hesitate, look for menus, type formulas, copy files, and try to remember arbitrary rules. 

They are translating their human intent into the computer's language. This translation layer is where **friction** lives.

Every system I have built over the past few years—from a local voice helper ([SAM](file:///work/sam)) to an offline industrial parser ([GACL OCR Pipeline](file:///work/ocr)), to an intent executor ([ALEX](file:///work/alex))—has been an attempt to destroy this translation layer.

### The Cost of Friction
Friction is not just annoying; it is a drain on human capability. When you have to think about *how* to use a tool, you are not thinking about *what* you are creating.

Most software forces people to learn its logic. A spreadsheet requires you to write `=VLOOKUP()`. A database requires SQL. An editor requires keyboard shortcuts. 

The interesting problem—the one worth working on—is the opposite: **how do we build systems that understand what people actually mean, and handle the details invisibly?**

### The Friction-Free Thesis
In my work, removing friction looks like:
- **Natural Input**: Using language as the programming interface (e.g., ALEX parsing commands).
- **Context-Aware Routing**: A command bar that knows if you want to search, open a page, or ask a question (e.g., Nexlyra routing inputs).
- **Silent Automation**: Eliminating manual data extraction from physical assets (e.g., GACL OCR parsing instrument readings directly to databases).

Computers are the most powerful thinking tools we have ever built. But today, we spend too much time serving them. We need to build software that adapts to us, that sits quietly in the background, and that turns raw human intent into action. That is the software I want to keep building.
