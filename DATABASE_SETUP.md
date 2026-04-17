# Database Setup Instructions

## Prerequisites
- MySQL 8.0 or higher
- Access to MySQL server (local or cPanel phpMyAdmin)

## Step 1: Create Database

```sql
CREATE DATABASE mehndi_db CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
```

## Step 2: Run Schema

1. Open `database/schema.sql`
2. Copy all contents
3. Execute in MySQL/phpMyAdmin

This will create all necessary tables:
- users
- gallery
- services
- blogs
- appointments
- messages
- testimonials
- page_views
- site_settings

## Step 3: Seed Sample Data (Optional)

1. Open `database/seed.sql`
2. Copy all contents
3. Execute in MySQL/phpMyAdmin

This will populate:
- 6 sample services
- 6 sample gallery images
- 3 sample blog posts
- 5 sample testimonials

## Step 4: Create Admin User

The admin password needs to be hashed. Run this in your terminal:

```bash
cd webapp
node -e "const bcrypt = require('bcryptjs'); console.log(bcrypt.hashSync('admin123', 10));"
```

Then insert the admin user:

```sql
INSERT INTO users (email, password, name, role) VALUES 
('shivkumarmehandi9419@gmail.com', 'PASTE_HASHED_PASSWORD_HERE', 'Shiv Kumar', 'super_admin');
```

## Step 5: Update Environment Variables

Update `.env.local` with your database credentials:

```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=mehndi_db
```

## Step 6: Test Connection

Restart the dev server:

```bash
npm run dev
```

Check the console for:
```
✅ Database connected successfully
```

## API Endpoints

Once setup is complete, these endpoints will be available:

- `GET /api/services` - Fetch all services
- `GET /api/gallery?category=bridal` - Fetch gallery images
- `GET /api/blogs` - Fetch all blog posts
- `GET /api/blogs?slug=post-slug` - Fetch single blog post
- `GET /api/testimonials?featured=true` - Fetch testimonials
- `POST /api/book` - Create appointment
- `POST /api/contact` - Send contact message

## Troubleshooting

### Connection Failed
- Check database credentials in `.env.local`
- Ensure MySQL server is running
- Verify database name exists

### Permission Denied
- Grant privileges: `GRANT ALL PRIVILEGES ON mehndi_db.* TO 'your_user'@'localhost';`
- Flush privileges: `FLUSH PRIVILEGES;`

### Tables Not Created
- Check MySQL version (8.0+ required)
- Ensure proper character set (utf8mb4)
- Check for SQL syntax errors in console

## Production Deployment

For production (cPanel):

1. Create database in cPanel MySQL Databases
2. Import `schema.sql` via phpMyAdmin
3. Import `seed.sql` via phpMyAdmin
4. Update production environment variables
5. Test all API endpoints

## Backup

Regular backups recommended:

```bash
mysqldump -u root -p mehndi_db > backup_$(date +%Y%m%d).sql
```

## Support

For issues, check:
- MySQL error logs
- Next.js console output
- Browser network tab for API errors
