# Vercel Deployment Guide

## Prerequisites

1. **Vercel Account**: Sign up at [vercel.com](https://vercel.com)
2. **Database**: MySQL database (PlanetScale, Railway, or any MySQL provider)
3. **Cloudinary Account**: Already configured with cloud name `dxhsqosdt`

---

## Step 1: Database Setup

### Option A: PlanetScale (Recommended for Vercel)

1. Create account at [planetscale.com](https://planetscale.com)
2. Create new database: `shivkumar-mehndi`
3. Get connection string from dashboard
4. Run database migrations:

```bash
# Connect to PlanetScale
pscale connect shivkumar-mehndi main --port 3309

# In another terminal, run migrations
mysql -h 127.0.0.1 -P 3309 -u root < database/schema.sql
mysql -h 127.0.0.1 -P 3309 -u root < database/business-data.sql
mysql -h 127.0.0.1 -P 3309 -u root < database/gallery-all-images.sql
```

### Option B: Railway

1. Create account at [railway.app](https://railway.app)
2. Create new MySQL database
3. Get connection details from dashboard
4. Import SQL files via Railway dashboard or CLI

### Option C: Other MySQL Providers

- AWS RDS
- DigitalOcean Managed Database
- Aiven
- Any MySQL 8.0+ compatible database

---

## Step 2: Vercel Project Setup

### Method 1: Vercel CLI (Recommended)

```bash
# Install Vercel CLI
npm install -g vercel

# Login to Vercel
vercel login

# Deploy from webapp directory
cd webapp
vercel
```

### Method 2: Vercel Dashboard

1. Go to [vercel.com/new](https://vercel.com/new)
2. Import Git repository
3. Set root directory to `webapp`
4. Configure environment variables (see Step 3)
5. Click "Deploy"

---

## Step 3: Environment Variables

Add these in Vercel Dashboard → Project Settings → Environment Variables:

### Required Variables

```env
# Database (from your MySQL provider)
DB_HOST=your-database-host.com
DB_USER=your-database-user
DB_PASSWORD=your-database-password
DB_NAME=shivkumar_mehndi
DB_PORT=3306

# Cloudinary (Already configured)
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=dxhsqosdt
CLOUDINARY_API_KEY=179242962172342
CLOUDINARY_API_SECRET=SDheBj41Sg2n7Z9tG3V6Ph0JrQM

# Business Information
NEXT_PUBLIC_BUSINESS_NAME=Shiv Kumar Mehandi Art
NEXT_PUBLIC_BUSINESS_PHONE=+918058168076
NEXT_PUBLIC_BUSINESS_EMAIL=shivkumarmehandi9419@gmail.com
NEXT_PUBLIC_WHATSAPP_NUMBER=918058168076

# Site URL (Update after deployment)
NEXT_PUBLIC_SITE_URL=https://your-project.vercel.app
```

### Optional Variables

```env
# Google Analytics
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX

# Google Site Verification (Already configured)
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=rSBmwv7-YfmQwqZ7uDhYfb3Msekcx0IhdYIvFl9m704

# Email (for contact form - optional)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASSWORD=your-app-password
```

---

## Step 4: Deploy

### First Deployment

```bash
cd webapp
vercel --prod
```

### Subsequent Deployments

```bash
# Preview deployment
vercel

# Production deployment
vercel --prod
```

---

## Step 5: Custom Domain (Optional)

1. Go to Vercel Dashboard → Project → Settings → Domains
2. Add your custom domain: `shivkumarmehandiart.com`
3. Update DNS records as instructed by Vercel
4. Update `NEXT_PUBLIC_SITE_URL` environment variable

---

## Step 6: Post-Deployment Checklist

- [ ] Test all pages load correctly
- [ ] Verify database connection (check gallery images)
- [ ] Test contact form submission
- [ ] Test booking form submission
- [ ] Verify WhatsApp links work
- [ ] Check mobile responsiveness
- [ ] Test chatbot functionality
- [ ] Verify all images load from Cloudinary
- [ ] Check SEO meta tags
- [ ] Test Google Search Console integration

---

## Database Connection Strings

### PlanetScale Format
```
mysql://username:password@host.connect.psdb.cloud/database?sslaccept=strict
```

### Standard MySQL Format
```
mysql://username:password@host:3306/database
```

### Environment Variable Format (Used in code)
```env
DB_HOST=host.com
DB_USER=username
DB_PASSWORD=password
DB_NAME=database
DB_PORT=3306
```

---

## Troubleshooting

### Database Connection Issues

1. Check if database is accessible from Vercel's region
2. Verify SSL/TLS settings
3. Check firewall rules allow Vercel IPs
4. Test connection string locally first

### Build Failures

```bash
# Clear cache and rebuild
vercel --force

# Check build logs
vercel logs
```

### Environment Variables Not Working

1. Ensure variables are set for "Production" environment
2. Redeploy after adding variables
3. Check variable names match exactly (case-sensitive)

### Images Not Loading

1. Verify Cloudinary credentials
2. Check CORS settings in Cloudinary dashboard
3. Ensure `next.config.mjs` has correct image domains

---

## Performance Optimization

### Already Configured

- ✅ Next.js Image Optimization
- ✅ Static page generation where possible
- ✅ API route caching
- ✅ Cloudinary image optimization
- ✅ Font optimization

### Recommended

- Enable Vercel Analytics
- Set up Vercel Speed Insights
- Configure ISR (Incremental Static Regeneration) for gallery
- Enable Edge Functions for API routes

---

## Monitoring

### Vercel Dashboard

- Real-time logs
- Performance metrics
- Error tracking
- Deployment history

### Recommended Tools

- Google Analytics (for traffic)
- Sentry (for error tracking)
- Vercel Analytics (for performance)
- Uptime monitoring (UptimeRobot, Pingdom)

---

## Backup Strategy

### Database Backups

```bash
# Export database
mysqldump -h host -u user -p database > backup.sql

# Schedule daily backups (cron)
0 2 * * * mysqldump -h host -u user -p database > backup-$(date +\%Y\%m\%d).sql
```

### Cloudinary Backups

- Images are already backed up in Cloudinary
- Download via Cloudinary API if needed
- Keep SQL file with image URLs in version control

---

## Security Checklist

- [ ] Database credentials in environment variables (not in code)
- [ ] API keys secured
- [ ] CORS configured properly
- [ ] Rate limiting on API routes
- [ ] SQL injection prevention (using parameterized queries)
- [ ] XSS protection (React default)
- [ ] HTTPS enforced (Vercel default)
- [ ] Environment variables not exposed to client

---

## Support

### Vercel Support
- Documentation: [vercel.com/docs](https://vercel.com/docs)
- Community: [github.com/vercel/next.js/discussions](https://github.com/vercel/next.js/discussions)

### Database Support
- PlanetScale: [planetscale.com/docs](https://planetscale.com/docs)
- Railway: [docs.railway.app](https://docs.railway.app)

---

## Quick Deploy Commands

```bash
# Install dependencies
npm install

# Build locally to test
npm run build

# Deploy to Vercel
vercel --prod

# View logs
vercel logs

# Open project in browser
vercel open
```

---

## Project Structure

```
webapp/
├── src/
│   ├── app/              # Next.js 14 App Router pages
│   ├── components/       # React components
│   ├── lib/             # Utilities (db, constants)
│   └── styles/          # Global styles
├── database/            # SQL migration files
├── public/              # Static assets
├── .env.local          # Local environment variables
├── .env.example        # Example environment variables
├── vercel.json         # Vercel configuration
└── package.json        # Dependencies

Database Tables:
- gallery (25 images)
- services (6 services)
- testimonials (6 testimonials)
- blogs (3 blog posts)
- bookings (appointment requests)
- contacts (contact form submissions)
```

---

## Deployment Checklist

### Before Deployment
- [ ] All environment variables documented
- [ ] Database schema created
- [ ] Database seeded with initial data
- [ ] Build passes locally (`npm run build`)
- [ ] All tests pass (if any)
- [ ] `.env.local` not committed to git

### During Deployment
- [ ] Environment variables set in Vercel
- [ ] Database connection tested
- [ ] Build succeeds on Vercel
- [ ] No build warnings or errors

### After Deployment
- [ ] All pages accessible
- [ ] Forms working (contact, booking)
- [ ] Images loading
- [ ] Mobile responsive
- [ ] SEO meta tags correct
- [ ] Analytics tracking (if configured)

---

**Deployment Time:** ~5-10 minutes  
**Build Time:** ~2-3 minutes  
**Region:** Mumbai (bom1) - Closest to Jaipur

---

*Last Updated: April 2026*
*Version: 1.0.0*
