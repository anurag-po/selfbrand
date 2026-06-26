---
title: "MinuteMind"
subtitle: "AI Meeting Execution System"
description: "Converts meeting discussions into actionable tasks and synced issues. Built at a hackathon."
order: 4
tags: ["Next.js", "Whisper API", "GPT-4o", "Linear API"]
github: "https://github.com/anurag-puthiyaveetil/minutemind"
demo: "https://minutemind-hazel.vercel.app/"
---

## The Hook
A hackathon-born tool that captures real-time audio transcripts and translates disorganized conversation into structured Linear issues and GitHub tasks.

## Problem
Meetings often produce lists of "todos" that are buried in chat history or forgotten. The manual process of translating conversation notes into actual issues in ticketing platforms creates friction, leading to lost momentum.

## Motivation
My team and I built MinuteMind at a hackathon to test a simple thesis: what if the meeting itself created the tickets? Instead of having a PM write down summaries, the system should analyze speech patterns, isolate commitments ("I'll fix this endpoint by Tuesday"), identify who said them, and generate validated tasks in one click.

## Architecture
The application runs as a real-time serverless pipeline:

```
[Audio Input] -> [Whisper API Transcription] -> [GPT-4o Agent Parser] -> [Action Registry] -> [GitHub/Linear API sync]
```

1. **Audio Recording**: A client-side Web Audio recorder uploads chunks to the API.
2. **Transcription**: Whisper API processes the audio and returns timestamps.
3. **Structured Extraction**: GPT-4o analyzes the transcript using structured outputs (JSON schema) to extract tasks, assignees, dates, and context.
4. **Integration Layer**: Routes confirmed tasks directly to GitHub Issues and Linear.

## Challenges
### 1. Diarization and Attribution
Whisper alone does not separate speakers. In a team of four, assigning a task to "someone" was useless. Since we had only 24 hours, we couldn't train a speaker diarization model. We solved this by parsing semantic references within the text (e.g., "Anurag, can you check...?", "Yeah, I'll do that") and feeding context clues to the LLM to map names to tasks.

### 2. Conversational Contradictions
People change their minds in real-time (e.g., "Let's use Postgres. Wait, actually, let's stick to SQLite for now"). Standard text parsers often extracted both decisions as tasks. We implemented a sliding-window conversational review prompt that instructed the model to prioritize final commitments over initial proposals.

## Lessons Learned
- **UX of AI**: Users do not want fully automated actions. They want *proposals* they can review. The best UX was a side-drawer showing proposed tasks with editable text inputs before exporting them.
- **Hackathon Tradeoffs**: When time is short, leverage pre-built APIs and focus entirely on creating a smooth, functional user flow rather than building complex backend models from scratch.
