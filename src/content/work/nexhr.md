---
title: "NexHR"
subtitle: "Minimal HR & Employee Management Portal"
description: "A clean, employee-first dashboard designed to simplify check-ins and reduce daily administrative friction."
order: 6
tags: ["Next.js", "PostgreSQL", "Prisma", "Tailwind CSS"]
github: "https://github.com/anurag-po/NexHR"
demo: ""
---

## The Hook
A streamlined, high-performance employee directory and check-in portal built to replace cluttered, legacy corporate portals.

## Problem
Most corporate HR software is cluttered, slow, and hard to navigate. Simple daily actions like marking attendance, submitting a leave request, or looking up a coworker's contact info take multiple steps and cause friction.

## Motivation
I wanted to build an HR dashboard that focuses entirely on developer-level simplicity. The UI should load instantly, let employees do what they need in under 5 seconds, and get out of their way.

## Architecture
The project utilizes a modern full-stack Next.js architecture:

- **Frontend**: Clean Next.js dashboard layout with Tailwind CSS.
- **Backend**: Next.js Server Actions connecting to a PostgreSQL database.
- **Database Layer**: Prisma ORM for schema modeling and type-safe queries.

## Challenges
### 1. Large-Scale Directory Search
As the mock directory grew to hundreds of employees, rendering the list caused small lags on mobile screens. I implemented virtualized lists and cached searches in the browser memory using debounced local filtering to keep the experience instantaneous.

### 2. Time-Zone Offsets in Attendance Logs
Recording punch-in times accurately when employees worked across different regions was causing database discrepancies. I standardized the database schema to record all timestamps in UTC and converted them dynamically on the client side based on the browser's locale.

## Lessons Learned
- **Less is More**: A user interface is successful when there is nothing left to remove. Prioritizing layout clarity over adding secondary features makes software feel premium.
- **Prisma is Excellent for Speed**: The database prototyping phase went twice as fast thanks to Prisma's automatic migrations and type-safety.
