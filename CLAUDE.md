This file is the primary product brief and implementation guide for building LearnFlow locally with Claude.

**Purpose:** This file is the primary product brief and implementation guide for building LearnFlow locally with Claude.

**Product:** LearnFlow --- Your Personal Learning & Implementation OS\
**Tagline:** Learn. Organize. Practice. Implement. Grow.\
**Initial user:** One private user (designed so multi-user support can be added later).\
**Target:** Responsive, installable Progressive Web App (PWA).\
**Hosting target:** Existing Hostinger hosting with Node.js and MySQL, subject to verification of the exact hosting plan and runtime constraints.

# 1. Instructions to Claude --- Read This First

You are the senior full-stack engineer, software architect, product
designer, and QA engineer for this project.

Build a **real, working, maintainable application**, not a static mockup
or a collection of disconnected UI screens.

## Your working rules

1. **Inspect before changing anything.**
   -   Inspect the current directory, files, package manager, Git
       status, and existing project setup.
   -   If the folder is empty, initialize the project.
   -   If it already contains work, understand and preserve it. Do not
       overwrite or delete files without explaining why and getting
       approval when the change is destructive.
2.   Read this entire `CLAUDE.md` before implementation.
3.   Work in small, verifiable milestones. Do not try to generate
       the entire application in one huge step.
4.   Before each milestone, briefly state:
       -   what you will build,
       -   which files you expect to create/change,
       -   any assumptions or risks.
5.   Implement the milestone, run relevant checks, fix errors, and
       summarize:
       -   what works,
       -   commands run,
       -   test/build results,
       -   what remains.
6.   Do not claim a feature works unless it has actually been implemented
       and tested.
7.   Do not leave important controls as decorative buttons. Every visible
       action must work or be clearly marked as not yet available.
8.   Prefer simple, dependable solutions over unnecessary abstractions or
       dependencies.
9.   Use TypeScript strictly. Avoid `any`; explain any unavoidable
       exception.
10.   Keep dependencies current and compatible with one another. Check
       installed package versions before using APIs.
11.   Do not hardcode secrets, passwords, tokens, database credentials, or
       private URLs.
12.   Never put server secrets in client-side code or `NEXT_PUBLIC_`
       variables.
13.   Do not invent hosting capabilities. Verify the actual Hostinger
       plan, Node.js version, startup method, persistent storage rules,
       cron availability, and database access before final deployment
       decisions.
14.   If a requirement is ambiguous, choose a sensible safe default and
       document it. Ask the user only when a decision blocks
       implementation.
15.   Keep this file updated when a major architectural decision changes.
       Add a short `DECISIONS.md` for important decisions and trade-offs.

## First response expected from Claude

After inspecting the folder, report: - whether the project is empty or
already initialized, - detected OS/runtime/package manager if
available, - proposed stack and any compatibility concerns, - the first
milestone plan.

Then begin **Milestone 0: project foundation**. Do not build every
module at once.

# 2. Product Vision

LearnFlow is a private personal learning management and implementation
system. It solves the problem of learning many subjects in parallel and
losing track of:

-   what to learn,
-   what has already been learned,
-   which video/article/course to follow next,
-   what tools and websites are useful,
-   what notes and files belong to each topic,
-   what should be scheduled today or later,
-   what has actually been practiced,
-   which real projects use the skills being learned.

The app must connect the complete journey:

**Discover → Save → Organize → Schedule → Learn → Take Notes → Practice
→ Implement → Review**

This is not a generic CRM and not just a to-do list. It is a personal
knowledge and execution workspace.

## Learning areas

Seed these editable categories (the user can add, rename, recolor, or
archive categories):

-   Programming & Development
-   Artificial Intelligence
-   AI Tools & Automation
-   Website Development
-   Digital Marketing & SEO
-   Business & Entrepreneurship
-   Sales & Communication
-   Productivity & Personal Growth
-   Other

Do not hardcode category-specific behavior. Categories are user-managed
data.

# 3. Product Scope and Priorities

## MVP --- build these first

1.  Secure private login.
2.  Dashboard.
3.  Categories and tags.
4.  Learning paths with chapters/steps.
5.  Resource library with YouTube and website links.
6.  Daily planner and task management.
7.  Projects and learning-to-project relationships.
8.  Notes and private attachments.
9.  Search, filters, sorting, and useful empty states.
10. Responsive PWA shell and installability.
11. Basic learning and implementation analytics.
12. Backup/export capability.

## Later enhancements --- do not block MVP

-   AI-generated learning roadmaps and summaries.
-   Browser extension / one-click save.
-   YouTube transcript extraction.
-   Push notifications.
-   Advanced offline editing and conflict resolution.
-   Spaced repetition / revision schedules.
-   Calendar integrations.
-   Native mobile app.
-   Multi-user collaboration.

Build the architecture so these can be added later, but do not
over-engineer the MVP for them.

# 4. Technical Stack

Use this as the preferred stack, but verify compatibility before locking
versions.

  -----------------------------------------------------------------------
  Layer                               Preferred technology
  ----------------------------------- -----------------------------------
  Framework                           Next.js App Router

  Language                            TypeScript with strict mode

  Styling                             Tailwind CSS

  UI primitives                       shadcn/ui

  Icons                               Lucide

  Database                            MySQL

  ORM                                 Prisma

  Validation                          Zod

  Forms                               React Hook Form

  Rich text editor                    TipTap

  Charts                              Recharts

  Calendar                            Start with a simple accessible
                                      calendar; add FullCalendar only if
                                      needed

  PWA                                 Web App Manifest + a maintained
                                      service-worker solution

  Testing                             Vitest or Jest + React Testing
                                      Library; Playwright for critical
                                      end-to-end flows

  Version control                     Git

  Hosting target                      Hostinger Node.js hosting + MySQL,
                                      after plan verification
  -----------------------------------------------------------------------

## Architecture

Prefer a **modular monolith**. One deployable application is easier to
operate on personal/shared hosting than multiple services.

Use: - Next.js UI and server-side route handlers/server actions where
appropriate. - A service/repository layer for business logic and data
access. - Prisma for database access and migrations. - MySQL for
structured records. - Private filesystem/object storage for uploaded
files, depending on what the hosting plan supports.

Do not add a separate Express server unless a concrete hosting or
runtime requirement makes it necessary.

## Hosting compatibility gate

Before finalizing deployment configuration, verify: - exact Hostinger
plan, - supported Node.js version, - whether Next.js App Router and the
chosen deployment mode are supported, - required build/start commands, -
whether persistent local file storage is allowed and survives
redeployments, - MySQL host/port/database credentials, - cron
availability, - request execution limits, - backup and restore options.

If the plan cannot reliably host the selected Next.js mode, explain the
issue and propose the smallest compatible adjustment. Do not silently
switch to a different hosting provider or paid service.

# 5. Visual Design System

## Design direction

Minimal, calm, professional productivity software. Take inspiration from
the clarity and information hierarchy of Linear and Notion, but create
an original LearnFlow identity. Do not copy their exact interface.

## Brand

-   Product name: LearnFlow
-   Tagline: Learn. Organize. Practice. Implement. Grow.
-   Accent: warm yellow `#FACC15` (use sparingly)
-   Main text: near-black / neutral charcoal
-   Background: clean off-white or white
-   Borders: subtle neutral gray
-   Success/warning/error: accessible semantic colors
-   Default theme: light
-   Dark mode: optional later

## UI rules

-   Desktop: fixed/collapsible left sidebar, main content area, compact
    top bar.
-   Mobile: compact header and drawer/bottom navigation where
    appropriate.
-   Use consistent spacing, typography, border radius, and component
    variants.
-   Prioritize readable content density over oversized cards.
-   Use clear page titles, descriptions, breadcrumbs where useful.
-   Use skeletons for loading, useful empty states, and actionable error
    messages.
-   All forms must have labels, validation messages, keyboard
    accessibility, and save/cancel actions.
-   Confirm destructive actions.
-   Provide success/error feedback after mutations.
-   Support keyboard navigation and visible focus states.
-   Respect reduced-motion preferences.
-   Do not use gradients, excessive shadows, or decorative charts
    without purpose.

## Main navigation

**Workspace** - Dashboard - My Planner - Learning Paths - Resource
Library - Projects - Notes & Knowledge - Tools & Websites - Calendar -
Analytics

**Preferences** - Settings - Global Search

On small screens, navigation must remain easy to use and must not
squeeze the main content.

# 6. Core Modules and Functional Requirements

## 6.1 Authentication and account

-   Private single-user login initially.
-   No public sign-up.
-   Provide a safe first-admin setup flow; do not ship a default
    password.
-   Hash passwords using Argon2id or another well-supported password
    hashing method.
-   Use secure, HTTP-only, SameSite cookies for sessions.
-   Secure session expiry and logout.
-   Protect all private routes and server actions.
-   Include a password change flow.
-   Add password recovery only if a safe email delivery method is
    configured; otherwise document a secure admin recovery procedure.
-   Never expose session tokens or secrets to the browser.

Although only one user is expected, all user-owned records must include
`userId` so multi-user support can be added without redesigning every
table.

## 6.2 Dashboard

The dashboard should answer: **What should I do today, and where do I
stand?**

Include: - Greeting and current date, using the user's configured
timezone. - Today's scheduled tasks with quick completion. - Today's
learning focus / priority. - Active learning paths and progress. -
Recently saved resources. - Projects in progress and blocked items. -
Weekly learning time. - Learning versus implementation summary. -
Upcoming deadlines. - Quick actions: - Add task - Save resource - Create
learning path - Add note - Create project

Do not fill the dashboard with fake data in production. Use a small,
clearly labelled demo dataset only during development, and provide a way
to remove it.

## 6.3 Categories and tags

Categories: - User-owned. - Name, description, color, icon, sort order,
archived state. - Prevent accidental duplicate names for the same user.

Tags: - Reusable labels such as `beginner`, `advanced`, `important`,
`practice`, `reference`, `watch-later`. - A record can have multiple
tags. - Tags should be searchable and filterable.

## 6.4 Learning Paths

A learning path is a structured journey toward a skill or outcome.

Fields: - title - description - category - cover/icon (optional) -
status: planned, active, paused, completed, archived - priority: low,
medium, high - start date - target date - learning objectives -
estimated total time (optional) - user notes

Structure:

**Learning Path → Chapters/Sections → Learning Steps**

A learning step should support: - title and description, -
position/order, - status: not started, in progress, completed,
skipped, - priority, - estimated minutes, - target date, - completion
date, - associated resources, - notes, - practice exercise, -
implementation outcome.

Features: - Create, edit, reorder, archive, and delete paths. - Create,
edit, reorder, and complete steps. - Show progress based on completed
eligible steps. - Clearly distinguish planned progress from actual
learning time. - Allow a step to be reopened. - Avoid counting skipped
steps as completed learning. - Add a path overview and a focused step
detail view.

## 6.5 Resource Library

Save and organize learning material from the internet.

Resource types: - YouTube video - Website - Article - Documentation -
Online course - AI tool - GitHub repository - PDF / document - Other

Fields: - title - URL - type - description - provider/source - thumbnail
URL (optional) - category - tags - status: inbox, not started, in
progress, completed, archived - priority - date saved - personal rating
(optional) - personal notes - associated learning paths/steps - related
projects

### YouTube behavior

-   Accept a YouTube URL.
-   Validate the hostname and video identifier.
-   Extract the video ID safely.
-   Generate the standard YouTube embed URL from the validated ID; never
    embed arbitrary user-provided iframe HTML.
-   Display an embedded player on the resource detail page.
-   Retrieve title/thumbnail using YouTube oEmbed when available and
    permitted.
-   If metadata retrieval fails, let the user enter title and thumbnail
    manually.
-   Respect videos that are private, deleted, region restricted, age
    restricted, or embedding-disabled.
-   Do not claim a video is playable until the embed is actually
    available.
-   Do not download or copy video content.

### Other URLs

-   Allow manual title/description entry.
-   Optional metadata extraction must be server-side, time-limited, and
    protected against SSRF.
-   Do not fetch localhost, private IP ranges, cloud metadata endpoints,
    or arbitrary internal network addresses.
-   Do not make metadata extraction a requirement for saving a resource.

### Resource views

-   Grid
-   Table
-   Compact list

Filters: - type - category - tag - status - priority - learning path -
project - saved date

Provide a fast "Quick Save" interaction available from the global
header.

## 6.6 Planner and Tasks

Task fields: - title - description - status: todo, in progress,
completed, cancelled - priority: low, medium, high, urgent - scheduled
date - due date/time (optional) - estimated minutes - actual minutes
(optional, or derived from sessions) - linked learning path - linked
learning step - linked resource - linked project - notes

Views: - Today - Week - Month - Unscheduled - Completed

Requirements: - Create, edit, reschedule, complete, reopen, and delete
tasks. - A task may be linked to a learning step, resource, or
project. - Support recurring tasks only if implemented reliably;
otherwise defer. - When a task is not completed, offer to reschedule it.
Do not silently move tasks to another date. - Show overdue tasks
clearly. - Store timestamps consistently and display them in the user's
timezone. - Calendar dates must not shift because of UTC conversion
bugs.

## 6.7 Learning Sessions and Timer

Track actual focused learning, separately from planned task duration.

-   Start, pause, resume, and stop a session.
-   Associate a session with a path, step, or project.
-   Store start/end timestamps and duration.
-   Handle accidental refresh or navigation safely.
-   Prevent duplicate active sessions.
-   Allow manual correction of a session duration with an audit record.
-   Do not count idle or planned time as actual learning time.

## 6.8 Projects and Implementation

Projects represent real practical outcomes.

Fields: - title - description - objective - status: planned, in
progress, on hold, completed, archived - priority - start date - target
date - repository URL - live/demo URL - final outcome / reflection -
category and tags

Project features: - Task checklist. - Kanban view: To Do, In Progress,
Done. - Linked learning paths. - Linked resources. - Linked notes and
attachments. - Milestones. - Progress overview. - Completion summary.

A many-to-many relationship must support: - one project linked to
multiple learning paths, - one learning path linked to multiple
projects.

## 6.9 Notes and Knowledge

Use TipTap or another maintained rich-text editor.

Support: - headings, - paragraphs, - bold/italic/underline, - bullet and
numbered lists, - checklists, - links, - code blocks with language
labels, - tables if stable, - images where practical.

Notes can be connected to: - learning paths, - learning steps, -
resources, - projects, - tasks.

Requirements: - Autosave with a visible save state. - Avoid losing edits
on navigation. - Sanitize rendered rich text. - Search note titles and
content. - Support export to Markdown. - Keep note content portable; do
not store editor-specific opaque state without a portable
representation.

## 6.10 Attachments and Files

Allowed file types should be configurable. Initial safe allowlist: -
PDF - TXT - Markdown - DOCX - XLSX - PNG / JPG / WEBP - ZIP only if
needed and handled safely

Requirements: - Validate MIME type and extension server-side. - Set a
reasonable configurable file-size limit. - Store outside the public web
root. - Use generated storage names, not user-supplied paths. - Save
metadata in the database. - Serve files through authenticated download
endpoints. - Prevent path traversal. - Never execute uploaded files. -
Allow delete and download. - Provide storage usage information. - Back
up files together with database records.

If the Hostinger plan does not guarantee persistent private storage,
choose an appropriate supported storage option and explain any cost
before implementation. Do not silently use temporary deployment storage.

## 6.11 Tools & Websites Directory

A searchable directory for useful tools and websites.

Fields: - name - URL - description - category - pricing model: free,
freemium, paid, trial, unknown - use case - personal rating - tags -
notes - related learning paths/projects

This can reuse the Resource model with a dedicated `tool` resource type
and a specialized view, if that keeps the data model simpler.

## 6.12 Analytics

Show useful, honest measurements: - tasks completed by day/week/month, -
actual learning minutes, - planned versus actual time, - learning path
progress, - resources saved and completed, - projects completed, -
implementation tasks completed, - learning activity calendar/heatmap.

Do not equate videos watched with skills mastered. Label all metrics
precisely.

Provide date filters and use the user's timezone.

# 7. Data Model and Database Design

Use Prisma with MySQL. Use UUIDs or a consistent CUID strategy for
primary keys. Use explicit relations and indexes. Include `createdAt`
and `updatedAt` where appropriate.

Recommended entities:

1.  User
2.  UserSettings
3.  Category
4.  Tag
5.  LearningPath
6.  LearningChapter
7.  LearningStep
8.  Resource
9.  LearningStepResource (many-to-many)
10. Project
11. ProjectLearningPath (many-to-many)
12. Task
13. Note
14. Attachment
15. LearningSession
16. Reminder
17. ActivityLog
18. Session / authentication models required by the chosen auth solution

## Important modeling requirements

-   Every user-owned entity has `userId`.
-   Every query and mutation checks ownership on the server.
-   Add indexes for common filters: `userId + status`,
    `userId + scheduledDate`, foreign keys, and sort positions.
-   Use foreign-key constraints.
-   Use transactions for related multi-record updates.
-   Define deletion behavior intentionally. Prefer archive/soft-delete
    for important learning content; use cascade only where it is safe
    and documented.
-   Avoid polymorphic foreign keys without integrity protection. For
    notes/attachments that can attach to multiple entity types, either
    use explicit nullable foreign keys with validation or a normalized
    link table with a clear integrity strategy.
-   Store date-only fields as date-only values where possible. Store
    timestamps in UTC and display in the user's timezone.
-   Store money/pricing only if a future feature requires it; it is not
    an MVP requirement.
-   Keep migrations in version control.
-   Never edit production database schema manually without a migration.

## Suggested Prisma model design

Claude should produce the complete `schema.prisma` based on the
requirements above. Do not blindly copy a partial SQL schema from a
chat transcript. Validate Prisma relation names, referential actions,
MySQL compatibility, and migration output.

# 8. API and Server-Side Design

Use Next.js Route Handlers and/or Server Actions consistently. Avoid
implementing the same business operation twice.

Suggested resource endpoints (adjust to chosen routing conventions):

-   `GET/POST /api/learning-paths`
-   `GET/PATCH/DELETE /api/learning-paths/:id`
-   `GET/POST /api/chapters`
-   `GET/POST /api/learning-steps`
-   `GET/POST /api/resources`
 -  `GET/PATCH/DELETE /api/resources/:id`
-   `GET/POST /api/tasks`
-   `GET/PATCH/DELETE /api/tasks/:id`
-   `GET/POST /api/projects`
-   `GET/PATCH/DELETE /api/projects/:id`
-   `GET/POST /api/notes`
-   `POST /api/uploads`
-   `GET /api/calendar`
-   `GET /api/analytics`
-   `GET /api/dashboard`

Every server-side operation must: - authenticate the user, - validate
input, - check ownership of all referenced records, - return safe,
consistent errors, - avoid leaking stack traces or sensitive database
details, - use pagination for potentially large lists.

# 9. PWA and Offline Strategy

PWA is required, but offline support should be introduced carefully.

## MVP PWA

-   Valid web app manifest.
-   App name and short name.
-   Custom icons in required sizes.
-   Theme/background colors.
-   `display: standalone`.
-   Installability on supported browsers.
-   Service worker.
-   Cache static application assets safely.
-   Offline fallback page.
-   Clear update behavior when a new app version is deployed.

## Offline data

Start with a conservative approach: - Cache the app shell and static
assets. - Optionally cache a read-only copy of recent tasks/paths. -
Save note drafts locally using IndexedDB. - Clearly display
offline/online state. - Do not claim server data has been saved until
sync succeeds.

Advanced offline editing and conflict resolution are Phase 2. If
implemented later, use record versioning/updated timestamps and a
visible conflict-resolution flow. Do not silently overwrite server
changes.

Do not cache private API responses in a broad shared cache. Ensure
service-worker caching cannot expose one user's data to another account
on a shared device.

# 10. Security, Privacy, and Reliability

Security is a release requirement, not a later enhancement.

-   Secure password hashing.
-   HTTP-only, Secure, SameSite session cookies.
-   CSRF protection appropriate to the chosen auth architecture.
-   Authorization and ownership checks on every private server
    operation.
-   Zod validation on all external input.
-   Output escaping and rich-text sanitization.
-   Secure file upload and download.
    -   Secure file upload and download.
-   Rate limiting for login and sensitive endpoints, using a solution
    compatible with the hosting plan.
-   Security headers and a restrictive Content Security Policy where
    practical.
-   Validate and restrict embed providers.
-   SSRF protection for URL metadata extraction.
-   Keep `.env` out of Git.
-   Provide `.env.example` with placeholders only.
-   Do not log passwords, session cookies, tokens, or private note
    contents.
-   Record important user actions without storing unnecessary sensitive
    content.
-   Provide export and backup/restore procedures.

## Backups

Document and implement: - scheduled MySQL backup, - attachment backup, -
backup retention, - off-account backup destination if available, -
restore test procedure, - recovery steps after failed deployment.

A backup is not considered reliable until a restore has been tested.

# 11. Testing and Quality Gates

Add automated tests for important business logic and critical user
journeys.

## Unit/integration tests

-   Progress calculation.
-   Task date and timezone handling.
-   Ownership checks.
-   Resource URL validation.
-   YouTube video ID parsing.
-   Session duration calculations.
-   Note sanitization.
-   File upload validation.
-   Project/path relationships.

## End-to-end tests

1.  Login.
2.  Create a category.
3.  Create a learning path and chapter.
4.  Add learning steps.
5.  Save a YouTube resource.
6.  Link the resource to a step.
7.  Schedule a task.
8.  Complete the task and learning step.
9.  Create a project and link the learning path.
10. Create a note and attach it.
11. Verify dashboard and analytics.
12. Verify logout and protected-route behavior.

## Release quality gates

Before marking a milestone complete: - TypeScript check passes. - Lint
passes. - Relevant tests pass. - Production build passes. - No critical
console errors. - Responsive layout checked. - Empty, loading, success,
and error states handled. - No placeholder buttons for claimed
features. - No secrets committed.

# 12. Development Milestones

Build in this order. Do not jump ahead before the current milestone
works.

## Milestone 0 --- Inspect and initialize

-   Inspect folder and environment.
-   Initialize Next.js TypeScript project if empty.
-   Configure Tailwind and shadcn/ui.
-   Set up linting and formatting.
-   Create `.env.example`.
-   Create initial README and DECISIONS.md.
-   Confirm local dev server and production build work.

**Acceptance:** App runs locally; clean project structure; no secrets.

## Milestone 1 --- Database and authentication

-   Verify MySQL connectivity.
-   Configure Prisma.
-   Create initial schema and migration.
-   Add private login and safe first-admin setup.
-   Protect application routes.
-   Add user settings and timezone.
-   Add seed script for categories (idempotent).

**Acceptance:** Only the authorized user can log in and access private
pages; data persists in MySQL.

## Milestone 2 --- Application shell and dashboard

-   Sidebar and mobile navigation.
-   Header and global quick actions.
-   Dashboard widgets connected to real data.
-   Loading, error, and empty states.
-   Responsive design.

**Acceptance:** Dashboard is functional, not a static mockup.

## Milestone 3 --- Learning paths

-   Categories and tags.
-   Learning paths.
-   Chapters and steps.
-   Ordering and progress calculation.
-   Search and filters.

**Acceptance:** A full learning journey can be created, edited,
completed, reopened, and archived.

## Milestone 4 --- Resource library

-   Resource CRUD.
-   Quick Save.
-   YouTube URL parsing and embed.
-   Metadata retrieval with fallback.
-   Link resources to steps and projects.
-   Search, filters, and views.

**Acceptance:** A YouTube resource can be saved, organized, opened,
embedded where allowed, and linked to a learning step.

## Milestone 5 --- Planner and learning sessions

-   Task CRUD.
-   Daily/weekly/monthly views.
-   Scheduling and rescheduling.
-   Timer and learning sessions.
-   Actual learning time.

**Acceptance:** A user can plan a session, complete it, and see accurate
history.

## Milestone 6 --- Projects, notes, attachments

-   Project CRUD and Kanban.
-   Many-to-many path/project linking.
-   Notes editor and autosave.
-   Secure file upload/download.
-   Search and cross-links.

**Acceptance:** A skill learned can be connected to a real project with
resources, notes, tasks, and attachments.

## Milestone 7 --- PWA and analytics

-   Manifest, icons, service worker.
-   Installability and offline fallback.
-   Conservative local drafts.
-   Analytics and date filters.
-   Export.

**Acceptance:** PWA installs and core metrics are accurate.

## Milestone 8 --- Hardening and deployment

-   Full test pass.
-   Security review.
-   Backup and restore test.
-   Hostinger plan compatibility verification.
-   Production deployment.
-   HTTPS and subdomain.
-   Smoke tests after deployment.

**Acceptance:** A working, secured, backed-up production application.

# 13. Suggested Initial Seed Data

Seed categories only. Do not create fake learning history or fake
completed tasks.

Suggested starter learning paths (optional and clearly marked as
examples): - JavaScript & TypeScript - React & Next.js - Backend
Development - AI Tools & AI Agents - Workflow Automation with n8n -
Digital Marketing & SEO - Sales & Client Acquisition - Business Systems

The user should be able to delete or edit all seed content.

# 14. Environment Variables

Create `.env.example` with placeholder values, such as:

``` env
DATABASE_URL="mysql://USER:PASSWORD@HOST:3306/DATABASE"
AUTH_SECRET="REPLACE_WITH_A_LONG_RANDOM_SECRET"
APP_URL="http://localhost:3000"
APP_TIMEZONE="Asia/Kolkata"
UPLOAD_DIR="./private-uploads"
```

Use the actual variable names required by the chosen authentication and
deployment setup. Never put real credentials in this file or commit a
real `.env`.

# 15. Documentation Deliverables

Maintain these files:

-   `README.md` --- setup, scripts, architecture, local development.
-   `CLAUDE.md` --- this product and engineering brief.
-   `DECISIONS.md` --- architectural decisions and reasons.
-   `DEPLOYMENT.md` --- Hostinger deployment and rollback.
-   `BACKUP-RESTORE.md` --- backup and recovery procedure.
-   `TESTING.md` --- tests and quality gates.
-   `.env.example` --- placeholders only.

Keep documentation accurate as implementation evolves.

# 16. First Task --- Start Now

Claude, begin by inspecting the current `LearnFlow` folder and reading
this brief.

Then:

1.  Report the current folder state.
2.  Identify any Hostinger/Next.js compatibility questions that need
    later verification.
3.  Initialize the project if the folder is empty.
4.  Set up the minimal design system and application shell.
5.  Run the app locally and verify the production build.
6.  Stop and report the completed foundation milestone before moving
    into database/authentication.

Do not generate every module in one response. Build, test, and verify
incrementally.

**Definition of success:** LearnFlow becomes a dependable private PWA
where the user can capture learning resources, organize learning paths,
schedule daily work, preserve notes/files, track real learning time,
connect skills to practical projects, and review measurable progress.
