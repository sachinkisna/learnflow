# LearnFlow Testing Guide

## Testing Strategy

LearnFlow uses a milestone-based approach with comprehensive testing for each phase.

## Test Setup

### Dependencies

```bash
npm install --include=dev
```

### Test Commands

- **Unit Tests**: `npm run test`
- **Integration Tests**: `npm run test:integration`
- **E2E Tests**: `npm run test:e2e`

## Unit Tests

### Framework

- **Tooling**: Vitest
- **React Testing Library**: For component testing
- **Testing Library DOM**: For DOM manipulation in tests

### Test Files

- `src/__tests__/` - Unit tests
- `src/components/__tests__/` - Component tests
- `src/hooks/__tests__/` - Hook tests

### Test Coverage Goals

- **Critical business logic**: 80%+
- **API endpoints**: 90%+
- **Component interactions**: 70%+

## Integration Tests

### Purpose

Test database interactions, API endpoints, and server-side logic.

### Test Scenarios

1. Database connection and migration
2. User authentication flows
3. Data validation and sanitization
4. File upload processing
5. Session management

### Database Mocking

Use Testcontainers or SQLite for isolated test databases.

## End-to-End Tests

### Framework

- **Tooling**: Playwright
- **Configuration**: `playwright.config.ts`

### Test Scenarios (Milestone 8)

1. **Login**
   - Access protected routes
   - Session persistence

2. **Learning Path Management**
   - Create, edit, complete learning paths
   - Chapter and step management

3. **Resource Library**
   - Save YouTube resources
   - Resource linking
   - Metadata extraction

4. **Task Management**
   - Create and complete tasks
   - Scheduling and rescheduling
   - Task learning step linking

5. **Projects**
   - Create and manage projects
   - Project learning path linking
   - Kanban view functionality

6. **Notes and Attachments**
   - Create and edit notes
   - File upload and download
   - Note linking

7. **Analytics**
   - Dashboard metrics
   - Progress tracking
   - Time statistics

8. **Export and Backup**
   - Data export functionality
   - Backup procedures

### Test Structure

Each E2E test should:

1. Start with clean state
2. Perform actions
3. Verify results
4. Clean up

## Test Quality Gates

Before Milestone 8:

1. **Unit Tests**: Critical business logic passes
2. **Integration Tests**: Database operations work correctly
3. **E2E Tests**: Critical user journeys complete successfully
4. **Security Tests**: Authentication and authorization protected
5. **Performance Tests**: Application meets performance requirements

## Security Testing

### Authentication

- Password hashing verification
- Session cookie security
- Rate limiting on auth endpoints

### Authorization

- Ownership checks for all user resources
- Role-based access control
- API endpoint protection

### Input Validation

- Server-side validation for all inputs
- XSS prevention
- SQL injection protection

## Test Automation

### CI/CD Integration

Test suite runs on pull requests and before deployment.

### Local Testing

```bash
# Run all tests
npm run test:all

# Run unit tests
npm run test

# Run E2E tests
npm run test:e2e
```

## Test Maintenance

### Test Coverage

- Add tests for new features
- Maintain existing test coverage
- Update tests when requirements change

### Flaky Tests

Investigate and fix flaky tests before release.

### Test Data

Use deterministic test data to ensure consistent test results.

## Test Reporting

### Metrics

- Test pass rate
- Test execution time
- Test coverage percentages

### Reporting

All test results should be available in CI/CD pipeline reports.

## Test Planning

### Milestone Test Requirements

- **Milestone 1**: Database setup, authentication flows
- **Milestone 2**: Dashboard functionality, routing
- **Milestone 3**: Learning path CRUD operations
- **Milestone 4**: Resource library, YouTube integration
- **Milestone 5**: Task management, learning sessions
- **Milestone 6**: Projects, notes, file uploads
- **Milestone 7**: PWA features, analytics
- **Milestone 8**: Full integration, security review

### Testing Priority

1. Security and authentication
2. Critical business logic
3. User journey completeness
4. Performance and scalability
5. Reliability and error handling