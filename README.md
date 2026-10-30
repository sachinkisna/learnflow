# LearnFlow --- Personal Learning Management OS

LearnFlow is a private personal learning management and implementation
system. It helps you learn many subjects in parallel while maintaining
track of everything:

- **What to learn** - Structured learning paths with chapters and steps
- **Progress tracking** - Monitor actual vs. planned learning time
- **Resources** - Save and organize YouTube videos, articles, and other learning materials
- **Daily planning** - Schedule tasks and track completion
- **Projects** - Connect skills to real implementation projects
- **Notes & knowledge** - Rich-text notes with secure attachments

## Quick Start

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to start using LearnFlow.

## Features

- Secure private login (single-user initially)
- Modular learning paths with chapters and steps
- Resource library with YouTube support and metadata extraction
- Daily planner and task management
- Project tracking with Kanban views
- Rich-text notes with file attachments
- Analytics dashboard
- Progressive Web App (PWA) ready

## Tech Stack

- **Framework:** Next.js App Router
- **Language:** TypeScript (strict mode)
- **Styling:** Tailwind CSS + shadcn/ui
- **Icons:** Lucide
- **Database:** MySQL with Prisma ORM
- **Validation:** Zod
- **Forms:** React Hook Form
- **Editor:** TipTap
- **Charts:** Recharts

## Architecture

Modular monolith designed for personal/shared hosting. All user-owned
records include `userId` for future multi-user support.

## Milestones

Building in phases as specified in `CLAUDE.md`:

- **Milestone 0:** Project foundation
- **Milestone 1:** Database and authentication
- **Milestone 2:** Application shell and dashboard
- **Milestone 3:** Learning paths
- **Milestone 4:** Resource library
- **Milestone 5:** Planner and learning sessions
- **Milestone 6:** Projects, notes, attachments
- **Milestone 7:** PWA and analytics
- **Milestone 8:** Hardening and deployment

## Local Development

The project uses Next.js with TypeScript and Tailwind CSS.

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start
```

## Structure

- `src/` - Application source code
- `public/` - Static assets
- `db/` - Database configuration and migrations
- `prisma/` - Database schema (coming soon)

## Current Status

Project is in early development. This repository currently contains
the foundational project structure and configuration for Milestone 0.