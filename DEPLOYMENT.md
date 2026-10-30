# LearnFlow Deployment Guide

## Prerequisites

- Hostinger Node.js hosting with MySQL
- Next.js App Router support (v15.0.0+)
- MySQL database with appropriate privileges

## Environment Variables

Create `.env` in deployment environment:

```env
DATABASE_URL="mysql://username:password@hostname:3306/database_name"
AUTH_SECRET="LONG_RANDOM_SECRET_STRING"
APP_URL="https://yourdomain.com"
APP_TIMEZONE="UTC"
UPLOAD_DIR="/path/to/private-uploads"
MAX_FILE_SIZE=10485760
ALLOWED_FILE_TYPES=pdf,txt,md,docx,xlsx,png,jpg,jpeg,webp,zip"
```

## Build and Deploy

### 1. Local Development (Optional)

```bash
npm install
npm run dev
```

### 2. Production Build

```bash
npm run build
```

### 3. Deploy to Hostinger

1. Upload build output to `/var/www/` directory
2. Set correct permissions:
   ```bash
   chmod -R 755 .
   chmod -R 775 private-uploads
   ```

3. Configure MySQL database in Hostinger's control panel

4. Set environment variables in server configuration

### 4. Startup

```bash
npm run start
```

## Database Migration

### Initial Setup

```bash
npx prisma init
```

Edit generated `schema.prisma` according to project requirements, then:

```bash
npx prisma migrate dev
```

### Production Migration

```bash
npx prisma migrate deploy
```

## File Uploads

### Directory Setup

Create and configure:

```bash
mkdir -p ./private-uploads
chmod -R 775 ./private-uploads
```

### Access

Files are served through authenticated endpoints, preventing direct access.

## Security Considerations

### HTTPS

Configure SSL certificate for production deployment.

### Rate Limiting

Implement rate limiting for authentication endpoints.

### Backup Strategy

1. MySQL automated backups via Hostinger
2. Manual export of `private-uploads`
3. Regular database dump and restore testing

## Rollback

If issues occur during deployment:

1. Revert to previous build artifacts
2. Restore database from backup
3. Restart application

## Monitoring

- Application logs in deployment console
- Database connection status
- File system usage in `private-uploads`

## Troubleshooting

### Common Issues

1. **Database Connection Errors**: Verify `DATABASE_URL` and MySQL permissions
2. **File Upload Permission**: Ensure `private-uploads` has correct permissions
3. **Build Errors**: Check for Node.js version compatibility
4. **Authentication Issues**: Verify `AUTH_SECRET` is set correctly

### Support

For hosting-specific issues, consult Hostinger's documentation or contact their support.

## Quality Gates

Before production deployment:

1. **TypeScript compilation passes**
2. **All lint rules pass**
3. **Critical E2E tests pass**
4. **Security review complete**
5. **Backup and restore tested**
6. **Production build successful**

## Backup Compliance

### GDPR and Data Protection

- Document data processing activities
- Maintain data retention records
- Secure backup storage locations
- Backup and restore procedures

### Audit Requirements

- Log all backup operations
- Regular backup verification
- Test restore procedures
- Document backup retention policies

## Backup Best Practices

1. **Test regularly** - Monthly full test, weekly partial test
2. **Keep backups separate** - Offline backups for disaster recovery
3. **Verify backups** - Always test restore before relying on backups
4. **Document procedures** - Clear, up-to-date documentation
5. **Automate when possible** - Reduce human error
6. **Monitor backups** - proactive detection of issues
7. **Secure backups** - Encrypt and restrict access
8. **Version control** - Keep multiple backup versions

## Backup Restore Verification

### Pre-restore Checklist

- [ ] Backup is current and complete
- [ ] Restore procedure documented
- [ ] Test environment available
- [ ] Downtime window scheduled
- [ ] Stakeholders notified

### Post-restore Verification

- [ ] All critical tables restored
- [ ] File system integrity verified
- [ ] Application functions correctly
- [ ] User authentication works
- [ ] All features available
- [ ] Performance acceptable

## Emergency Contact

For backup and restore issues:

- Contact hosting provider immediately for infrastructure issues
- Contact database administrator for database problems
- Contact application team for application-specific issues
- Follow established incident response procedures