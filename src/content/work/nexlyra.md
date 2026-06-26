---
title: "Nexlyra"
subtitle: "Keyboard-First Productivity Browser"
description: "An Electron-based keyboard-centric browser with an omnibox intent-routing engine."
order: 3
tags: ["Electron", "Node.js", "JavaScript", "HTML/CSS"]
github: "https://github.com/anurag-po/Nexlyra-browser/"
demo: ""
---

## The Hook
A desktop web container built on Electron designed to eliminate traditional browser friction by routing omnibox inputs to search engines, direct URLs, or AI endpoints using high-speed heuristics.

## Problem
In standard browsers, users waste cycles manually clicking search bars, opening new tabs for AI prompts, and navigating bookmark folders. This friction interrupts flow state and slows down daily professional tasks.

## Motivation
I wanted to build a web shell where the browser handles the routing logic. If I type a search query, it should open a search. If I ask a conceptual question, it should feed it into a ChatGPT/Perplexity context. If I type a URL, it should load the page. I chose Electron to leverage web views alongside native OS menu integration for custom keyboard intercepts.

## Architecture
Nexlyra utilizes Electron's multi-process architecture to decouple the UI from native operations:

```
┌────────────────────────────────────────────────────────┐
│                      Main Process                      │ (Node.js)
│  - Native OS Menus & Global Keyboard Shortcuts        │
│  - Window Management & JSON Persistence Storage        │
└──────────────────────────┬─────────────────────────────┘
                           │ (IPC Bridge via Context Isolation)
                           ▼
┌────────────────────────────────────────────────────────┐
│                   Renderer Process                     │ (HTML/CSS/JS)
│  - Custom "Deep Dark" UI Command Bar                   │
│  - Heuristic Intent-Routing Engine (Regex & Heuristics)│
│  - Dynamic multi-engine WebViews                       │
└────────────────────────────────────────────────────────┘
```

1. **Native Keyboard Hooking**: Captures system-level overrides like `Ctrl+L` to focus the Command Bar and `Ctrl+W` to close the application via native OS menus.
2. **IPC Bridge**: Secure, bi-directional communication between the Main process and the Renderer process with `contextIsolation` enabled.
3. **Intent Engine**: A custom-written JavaScript parser that evaluates strings against regex patterns to classify them as direct URLs, search queries, or AI prompts.

## Challenges
### 1. Intercepting System Shortcuts Reliably
Web pages inside browser views often try to consume shortcuts like `Ctrl+L` or `Ctrl+W`, preventing the browser interface from intercepting them. I solved this by overriding the native application menu templates in Electron's Main process, registering global shortcuts that trigger before the web view's renderer consumes the keystrokes.

### 2. Regex Domain Classification False Positives
Distinguishing between a complex search query containing periods (e.g., `is node.js single-threaded`) and a subdomain URL (e.g., `app.vercel.app`) was prone to false routing. I refined a multi-stage parser: check for TLD matching lists, filter out spaces, and check for standard URL formats before falling back to search engine routing.

## Lessons Learned
- **IPC Safety**: Security inside Electron requires strict configuration. Keeping the IPC bridge narrow and avoiding raw Node access in the renderer is essential to maintain application safety.
- **Immediate Desktop Integration**: Building on Electron allowed quick packaging into local `.exe` installers for Windows, making native productivity features immediately accessible.
