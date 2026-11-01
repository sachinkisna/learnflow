# LearnFlow - Architectural Decisions

## Database Setup

- **Technology**: MySQL with Prisma ORM
- **Connection**: `DATABASE_URL` in every environment
- **Decision**: Use MySQL in production and development to keep Prisma migrations consistent
- **Rationale**: Hostinger provides MySQL, and a single provider avoids deploying a SQLite-only schema to production

## Authentication

- **Technology**: NextAuth.js with JWT strategy
- **Security**: Session-based authentication with secure cookie settings
- **Rationale**: NextAuth provides robust, secure authentication with minimal configuration

## File Upload Storage

- **Location**: Server-side disk storage in ./private-uploads directory
- **Security**: Server-only endpoints, no client-side file handling
- **Validation**: MIME type and extension validation on upload
- **Rationale**: Meets security requirements and works with the specified hosting plan

## PWA Configuration

- **Manifest**: Standard Web App Manifest with standalone display
- **Icons**: Favicon only for now - full icon set for production
- **Rationale**: Minimal viable PWA meets requirements while avoiding unnecessary complexity

## Build Process

- **Framework**: Next.js App Router (v15.5.28)
- **Styling**: Tailwind CSS with shadcn/ui components
- **TypeScript**: Strict mode enabled
- **Rationale**: Modern, type-safe development stack as specified in requirements

## Testing Strategy

- **Unit Tests**: Progress calculation, timezone handling, ownership checks
- **E2E Tests**: Critical user journeys using Playwright
- **Integration Tests**: API endpoints and database interactions
- **Rationale**: Comprehensive testing without over-engineering

## Security Implementation

- **Password Hashing**: bcryptjs
- **Input Validation**: Zod for all server-side inputs
- **Authorization**: Role-based access control with user ownership checks
- **Security Headers**: Implemented via Next.js configuration
- **Rationale**: Security is a release requirement, not a later enhancement

## Development Workflow

- **Milestone-based**: Following CLAUDE.md milestone structure
- **Incremental**: Each milestone builds on previous work
- **Testing**: Verify functionality before moving to next milestone
- **Rationale**: Ensures quality and prevents scope creep

## Known Limitations

- **Multi-user**: Single-user initially, with data model structured for future expansion
- **File Types**: Limited to initial safe list, expandable later
- **Offline Features**: Basic offline support, advanced features deferred
- **PWA Icons**: Minimal icon set, will expand for production
- **Rationale**: MVP focus on core functionality

## Next Steps

- [ ] Configure environment variables
- [ ] Set up database connection
- [ ] Implement Milestone 1 (Database and Authentication)
- [ ] Configure hosting environment
- [ ] Test production build process