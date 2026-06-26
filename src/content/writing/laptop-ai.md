---
title: "Building AI Assistants on a Laptop That Could Barely Run Them"
description: "What constraints taught me about model architecture, lightweight NLU, and optimization during the SAM era."
date: "2026-03-10"
tags: ["AI", "Local Models", "Optimization"]
---

In 2021, if you wanted to build an AI assistant, you had two choices: hook into Google or Alexa APIs, or try to run language models locally. I chose the latter, but there was a catch: my hardware was a dual-core laptop with 8GB of RAM. If I opened VS Code and a web browser, the system would crawl. 

Trying to run a raw text generator like GPT-2 locally was a lesson in humility. The CPU fans would scream, and it took 15 seconds to reply: "Hello, how can I help you?"

But constraints are the best teachers. When you cannot throw compute at a problem, you are forced to think about efficiency.

### What the Constraints Taught Me

1. **Keep the Pipeline Granular**: Instead of using one massive end-to-end model for speech-to-text, intent parsing, and text-to-speech, I split the work. I used Vosk (a highly optimized C-based speech engine) which used less than 50MB of memory.
2. **Grammar over Generative Capacity**: I didn't need an LLM to chat about philosophy when I just wanted to turn down my music. I used RASA NLU and stripped out the heavy token embedding matrices, relying on simple TF-IDF feature extraction and linear support vector classifiers. It was 100x lighter and ran in milliseconds.
3. **Structured Context Management**: I learned to pass state as tiny, validated variables rather than long paragraphs of text prompt history.

This era of building [SAM](file:///work/sam) showed me that software does not need to be massive to feel smart. It needs to be precise. The design patterns I learned while optimizing model code on that slow laptop became the foundation for the architectural patterns of [ALEX](file:///work/alex) years later.
