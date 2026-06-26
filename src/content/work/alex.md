---
title: "ALEX"
subtitle: "Adaptive Logic Execution eXecutor"
description: "The framework that turns natural language into validated JSON intent routed through a controlled execution layer."
order: 1
tags: ["TypeScript", "LLMs", "JSON Schema", "Agentic Systems"]
github: "https://github.com/anurag-po/Adaptive-Logic-EXecutor---ALEX"
demo: ""
---

## The Hook
ALEX is an intent-routing framework that bridges the gap between unpredictable LLM natural language outputs and deterministic software execution paths.

## Problem
AI agents are notoriously difficult to control in production. When asked to perform actions, LLMs often output conversational text, formatting errors, or parameter hallucinations. If an agent needs to execute database writes or API calls, a single unstructured output can break the system or, worse, create security vulnerabilities. 

## Motivation
I wanted to build a system where the AI does not directly interact with the operating system or database. Instead, the AI acts purely as a semantic compiler: it translates user intent into structured JSON, validates it against a strict schema, and passes it to a sandboxed execution layer. I built ALEX because existing frameworks were either too heavy (like LangChain) or lacked robust runtime validation.

## Architecture
ALEX uses a three-tier architecture to ensure reliability and safety:

```
[User Query] 
     │
     ▼
┌─────────────────────────┐
│  Semantic Parsing Layer │ <-- Translates query to raw JSON
└───────────┬─────────────┘
            │ (Raw JSON)
            ▼
┌─────────────────────────┐
│   Validation Gateway    │ <-- Checks schema, types & constraints
└───────────┬─────────────┘
            │ (Validated Intent)
            ▼
┌─────────────────────────┐
│  Controlled Execution   │ <-- Executes sandboxed functions
└─────────────────────────┘
```

1. **Semantic Parsing Layer**: Converts natural language queries into structured JSON using grammar-constrained decoding.
2. **Validation Gateway**: Uses AJV (Another JSON Schema Validator) to enforce type compliance, check ranges, and ensure parameter bounds before any logic runs.
3. **Execution Layer**: A registry of safe, sandboxed TypeScript functions that execute the parsed parameters, returning clean results.

## Challenges
### 1. Latency of Schema Alignment
Running an LLM call and then parsing, validating, and retrying if validation failed introduced significant latency. To solve this, I implemented **Grammar-guided Sampling** using local models. By forcing the model's logits to conform to the JSON schema during token generation, the output is guaranteed to be valid JSON on the first try, reducing parser retries to zero.

### 2. Context Window Pollution
As the list of executable functions grew, the system prompt became bloated, leading to high token usage and slower response times. I refactored the function registry to use a vector database to dynamically retrieve and inject only the schemas of the top-3 most relevant functions based on the user's query.

## Lessons Learned
- **Isolate Generation from Action**: Never let LLMs run code or call APIs directly. Treat them as untrusted compilers and always validate their output before execution.
- **Constraints Make Speed**: Limiting what the model *can* say (via grammar rules) not only improves accuracy but also improves throughput by avoiding correction loops.
