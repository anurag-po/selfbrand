---
title: "SAM"
subtitle: "The Local Voice Assistant Origin Project"
description: "A personal voice assistant built before agentic tooling was common, experimenting with local models, RASA NLU, and offline inference."
order: 5
tags: ["Python", "RASA", "Vosk", "GPT-2", "Offline Inference"]
github: "https://github.com/anurag-puthiyaveetil/sam"
demo: ""
---

## The Hook
A fully offline voice assistant running on a low-end laptop, proving that local NLU and intent parsing can run without heavy cloud dependencies.

## Problem
In 2021, building a personal assistant usually meant using Google Assistant or Alexa APIs. These systems required active internet connections, sent voice data to remote servers, and were closed boxes. Building a custom local assistant was difficult because consumer hardware struggled to run language models.

## Motivation
I wanted to build a completely private, offline helper that could control my local desktop applications, play music, and answer basic questions. I was using a standard laptop that could barely open three IDE windows, so I had to find a way to perform Speech-to-Text and Natural Language Understanding without running massive, memory-heavy models.

## Architecture
The system utilized a modular, event-driven design:

```
[Microphone] -> [Vosk Offline STT] -> [RASA Intent Parser] -> [Python Dispatcher] -> [Local Actions / Pyttsx3 TTS]
```

1. **Speech-to-Text**: Used Vosk, a lightweight offline speech recognition toolkit that takes under 50MB of memory.
2. **Intent Parsing**: Used RASA NLU to define custom intent models, training them on specific commands.
3. **Execution Layer**: A Python dispatcher mapped detected intents to local system calls (e.g., volume control, launching files).
4. **Text-to-Speech**: Used Pyttsx3 for offline speech synthesis.

## Challenges
### 1. The GPT-2 Bottleneck
I tried to integrate local GPT-2 to answer open-ended questions. However, text generation took up to 15 seconds per response and pegged my CPU at 100%. I had to pivot, using local GPT-2 only for short, specific tasks, and building a fallback rule-based system for daily controls to keep response times under 500ms.

### 2. Micro-Inference Tuning
RASA's default pipelines were too heavy for constant background execution. I spent weeks tuning the pipeline: stripping out heavy SpaCy word vectors and replacing them with simple count vectors and lightweight linear classifiers. This reduced memory usage from 1.2GB to under 150MB.

## Lessons Learned
- **Constraints Foster Creativity**: Having low-end hardware forced me to understand the mathematical internals of models rather than just importing huge pre-trained packages.
- **Foundations for ALEX**: The work on intent classification and mapping in SAM laid the direct architectural foundation for the parsing and execution separation used in ALEX.
