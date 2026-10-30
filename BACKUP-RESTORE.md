# LearnFlow Backup and Restore Guide

## Backup Strategy

### Regular Backups

#### Database Backup

Daily automated MySQL backups:

```bash
mysqldump -u username -p password database_name > /backups/database_$(date +%Y%m%d_%H%M%S).sql
```

#### File System Backup

Daily backup of:
- `private-uploads` directory
- Application configuration files
- Session and cache files

### Backup Retention

- Keep last 7 daily backups
- Keep last 4 weekly backups
- Keep last 12 monthly backups
- Current backup always retained

### Backup Locations

1. **Primary**: Hostinger control panel backup storage
2. **Secondary**: Off-site cloud storage (recommended)
3. **Local**: Separate machine for disaster recovery

## Restore Procedures

### Emergency Restore (Site Down)

1. **Restore Database**
   ```bash
   mysql -u username -p password database_name < /backups/database_YYYYMMDD_HHMMSS.sql
   ```

2. **Restore File System**
   ```bash
   cp -r /backups/private-uploads/* ./private-uploads/
   ```

3. **Restart Application**
   ```bash
   npm run start
   ```

### Partial Restore (Data Loss)

1. **Identify affected data**
2. **Export partial backup** if available
3. **Manually restore** affected tables or files

## Testing Backup and Restore

### Monthly Test

1. **Create test backup**
2. **Verify backup integrity**
   ```bash
   mysql -u username -p password -e "USE database_name; SHOW TABLES;"
   ```

3. **Perform test restore**
   - In test environment
   - Verify data integrity
   - Document any issues

4. **Cleanup**
   Remove test data after verification

### Restore Drill

Test the complete restore process quarterly:

1. Create full test backup
2. Completely restore in test environment
3. Verify all functionality works
4. Document any recovery time metrics

## Backup Monitoring

### What to Monitor

- Database size growth
- File system usage in `private-uploads`
- Backup completion status
- Restore test results
- Storage availability

### Monitoring Tools

- Hostinger control panel
- Database monitoring tools
- File system monitoring

## Backup Security

### Access Control

- **Database backups**: Limited to administrators
- **File backups**: Secure storage location
- **Access logs**: Record all backup operations

### Encryption

- Encrypt backups at rest
- Secure transmission if backups are moved offsite
- Secure backup storage location

## Backup Automation

### Cron Jobs

```bash
# Daily backup at 2:00 AM
0 2 * * * /path/to/backup-script.sh

# Weekly backup on Sunday at 3:00 AM
0 3 * * 0 /path/to/backup-script.sh
```

### Backup Script

Create comprehensive backup script that:

1. Performs database backup
2. Performs file system backup
3. Verifies backup integrity
4. Cleans old backups
5. Sends notification of backup status

## Recovery Plan

### Contact Information

- Database administrator
- Application developers
- Hosting provider support
- System administrators

### Recovery Steps

1. **Incident detection** - Monitor alerts and check application status
2. **Immediate response** - Start emergency restore if needed
3. **Root cause analysis** - Identify why data loss occurred
4. **Restore data** - Perform restore from latest backup
5. **Test recovery** - Verify application functionality
6. **Document incident** - Create post-incident report
7. **Improve** - Update backup strategy based on lessons learned

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