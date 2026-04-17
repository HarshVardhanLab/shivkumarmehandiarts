# 🚀 PlanetScale Setup Guide - 5 Minutes to Deploy!

## ✅ Perfect Choice!

PlanetScale is the best option for your project:
- ✅ **Zero code changes** - Your MySQL code works as-is
- ✅ **5GB free forever** - Way more than you need
- ✅ **No credit card required**
- ✅ **Optimized for Vercel**
- ✅ **Deploy in 5 minutes**

---

## 📋 Step-by-Step Setup (5 Minutes)

### Step 1: Create PlanetScale Account (1 minute)

1. Go to **https://planetscale.com**
2. Click **"Sign up"**
3. Choose **"Continue with GitHub"** (easiest)
4. Authorize PlanetScale

✅ **Done!** No credit card needed.

---

### Step 2: Create Database (1 minute)

1. Click **"Create a new database"**
2. Fill in details:
   - **Name:** `shivkumar-mehndi`
   - **Region:** Select **"AWS Mumbai (ap-south-1)"** (closest to Jaipur)
   - **Plan:** Hobby (Free) - Already selected
3. Click **"Create database"**

⏳ Wait 30 seconds for database to initialize...

✅ **Database created!**

---

### Step 3: Import Your Data (2 minutes)

#### Option A: Using Web Console (Easiest)

1. In your database dashboard, click **"Console"** tab
2. You'll see a SQL editor
3. Copy and paste each SQL file content:

**First - Schema:**
```bash
# Open database/schema.sql in your editor
# Copy ALL content
# Paste in PlanetScale Console
# Click "Run"
```

**Second - Business Data:**
```bash
# Open database/business-data.sql
# Copy ALL content
# Paste in PlanetScale Console
# Click "Run"
```

**Third - Gallery Images:**
```bash
# Open database/gallery-all-images.sql
# Copy ALL content
# Paste in PlanetScale Console
# Click "Run"
```

✅ **Data imported!**

#### Option B: Using PlanetScale CLI (Advanced)

```bash
# Install PlanetScale CLI
brew install planetscale/tap/pscale

# Or using npm
npm install -g @planetscale/cli

# Login
pscale auth login

# Connect to database
pscale connect shivkumar-mehndi main --port 3309

# In another terminal, import data
mysql -h 127.0.0.1 -P 3309 < database/schema.sql
mysql -h 127.0.0.1 -P 3309 < database/business-data.sql
mysql -h 127.0.0.1 -P 3309 < database/gallery-all-images.sql
```

---

### Step 4: Get Connection String (30 seconds)

1. In PlanetScale dashboard, click **"Connect"** button
2. Select **"Connect with: Prisma"** (gives you the format we need)
3. You'll see something like:

```
mysql://username:password@aws.connect.psdb.cloud/shivkumar-mehndi?sslaccept=strict
```

4. **Convert to environment variables:**

From this URL:
```
mysql://abc123xyz:pscale_pw_abc123:@aws-ap-south-1.connect.psdb.cloud/shivkumar-mehndi?sslaccept=strict
```

Extract these values:
```env
DB_HOST=aws-ap-south-1.connect.psdb.cloud
DB_USER=abc123xyz
DB_PASSWORD=pscale_pw_abc123
DB_NAME=shivkumar-mehndi
DB_PORT=3306
```

✅ **Connection details ready!**

---

### Step 5: Add to Vercel (1 minute)

1. Go to **https://vercel.com**
2. Go to your project (or create new)
3. Go to **Settings → Environment Variables**
4. Add these variables:

```env
# Database (from PlanetScale)
DB_HOST=aws-ap-south-1.connect.psdb.cloud
DB_USER=your-username-from-planetscale
DB_PASSWORD=your-password-from-planetscale
DB_NAME=shivkumar-mehndi
DB_PORT=3306

# Cloudinary (already configured)
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=dxhsqosdt
CLOUDINARY_API_KEY=179242962172342
CLOUDINARY_API_SECRET=SDheBj41Sg2n7Z9tG3V6Ph0JrQM

# Business Information
NEXT_PUBLIC_BUSINESS_NAME=Shiv Kumar Mehandi Art
NEXT_PUBLIC_BUSINESS_PHONE=+918058168076
NEXT_PUBLIC_BUSINESS_EMAIL=shivkumarmehandi9419@gmail.com
NEXT_PUBLIC_WHATSAPP_NUMBER=918058168076

# Site URL (update after first deploy)
NEXT_PUBLIC_SITE_URL=https://your-project.vercel.app
```

5. Set for: **Production, Preview, Development**
6. Click **"Save"**

✅ **Environment variables configured!**

---

### Step 6: Deploy to Vercel (1 minute)

#### Option A: Using Vercel Dashboard

1. Go to **https://vercel.com/new**
2. Import your Git repository
3. Set **Root Directory:** `webapp`
4. Click **"Deploy"**

⏳ Wait 2-3 minutes for build...

✅ **Deployed!**

#### Option B: Using Vercel CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy from webapp directory
cd webapp
vercel --prod
```

✅ **Deployed!**

---

## 🧪 Test Your Deployment

Visit your Vercel URL and test:

### Critical Tests:
- [ ] Homepage loads: `https://your-project.vercel.app`
- [ ] Gallery shows images: `/gallery`
- [ ] Click on an image (lightbox works)
- [ ] Filter by category (Bridal, Arabic, etc.)
- [ ] Services page loads: `/services`
- [ ] Contact form: `/contact`
- [ ] Booking form: `/book`
- [ ] WhatsApp button works
- [ ] Mobile navigation works

### Database Tests:
- [ ] Gallery images load (should see 25 images)
- [ ] Services load (should see 6 services)
- [ ] Testimonials load (should see 6 reviews)
- [ ] Blog posts load (should see 3 posts)

✅ **All working? Congratulations! 🎉**

---

## 🔧 Troubleshooting

### Issue: "Connection refused" or "Can't connect to database"

**Solution:**
1. Check PlanetScale database is **not paused**
2. Verify connection string is correct
3. Make sure you copied the password correctly (no spaces)
4. Check environment variables in Vercel are set for "Production"

**Test connection locally:**
```bash
# Update your .env.local with PlanetScale credentials
# Run dev server
npm run dev

# If it works locally, redeploy to Vercel
vercel --prod --force
```

---

### Issue: "No images showing in gallery"

**Solution:**
1. Check if data was imported:
   - Go to PlanetScale Console
   - Run: `SELECT COUNT(*) FROM gallery;`
   - Should return: 25

2. If 0 rows, re-import:
   ```sql
   -- In PlanetScale Console, paste content from:
   database/gallery-all-images.sql
   ```

---

### Issue: "Build failed on Vercel"

**Solution:**
```bash
# Test build locally first
cd webapp
npm run build

# If successful, deploy again
vercel --prod --force
```

---

## 📊 PlanetScale Dashboard Features

### Insights Tab
- See query performance
- Monitor database usage
- Track storage (you have 5GB free!)

### Console Tab
- Run SQL queries
- View table data
- Test queries

### Branches Tab
- Create database branches (like Git)
- Test schema changes safely
- Merge when ready

### Settings Tab
- View connection strings
- Manage access
- Configure regions

---

## 🎯 Post-Deployment Checklist

- [ ] Database connected successfully
- [ ] All 25 images visible in gallery
- [ ] Services page shows 6 services with images
- [ ] Contact form submits (check PlanetScale `contacts` table)
- [ ] Booking form submits (check PlanetScale `bookings` table)
- [ ] Mobile responsive
- [ ] WhatsApp links work
- [ ] Phone links work
- [ ] Page load time < 3 seconds

---

## 💡 Pro Tips

### 1. Monitor Your Database
```sql
-- Check total images
SELECT COUNT(*) FROM gallery;

-- Check by category
SELECT category, COUNT(*) FROM gallery GROUP BY category;

-- Check recent bookings
SELECT * FROM bookings ORDER BY created_at DESC LIMIT 10;

-- Check recent contacts
SELECT * FROM contacts ORDER BY created_at DESC LIMIT 10;
```

### 2. Backup Your Data
```bash
# PlanetScale has automatic backups, but you can also:
# Export from Console tab → Export to CSV
# Or use CLI:
pscale database dump shivkumar-mehndi main --output backup.sql
```

### 3. Performance Optimization
- PlanetScale automatically optimizes queries
- Use the Insights tab to see slow queries
- Add indexes if needed (already done in schema.sql)

---

## 🔐 Security Best Practices

✅ **Already Configured:**
- Database credentials in environment variables
- SSL/TLS encryption (PlanetScale default)
- Parameterized queries (prevents SQL injection)
- No database credentials in code

✅ **Additional Security:**
- Never commit `.env.local` to Git
- Rotate passwords periodically
- Use PlanetScale's IP allowlist (optional)
- Enable 2FA on PlanetScale account

---

## 📈 Scaling (When You Grow)

### Current Setup (Free Tier):
- 5GB storage
- 1 billion row reads/month
- 10 million row writes/month
- Perfect for 1000s of visitors/month

### When to Upgrade:
- If you exceed 5GB storage
- If you need more than 1 database
- If you need database branches for staging

### Upgrade Path:
- **Scaler Plan:** $29/month
  - 25GB storage
  - 100 billion row reads/month
  - Unlimited databases
  - Database branches

---

## 🎉 Success!

Your website is now live with:
- ✅ PlanetScale MySQL database (5GB free)
- ✅ Vercel hosting (free)
- ✅ Cloudinary images (free tier)
- ✅ Zero code changes
- ✅ Professional setup

**Total Cost:** $0/month 🎊

---

## 📞 Support

### PlanetScale Support
- Docs: https://planetscale.com/docs
- Community: https://github.com/planetscale/discussion
- Twitter: @planetscale

### Your Website
- Email: shivkumarmehandi9419@gmail.com
- Phone: +91 8058168076

---

## 🚀 Next Steps

1. **Custom Domain** (Optional)
   - Go to Vercel → Settings → Domains
   - Add: `shivkumarmehandiart.com`
   - Update DNS records

2. **Analytics** (Optional)
   - Enable Vercel Analytics
   - Add Google Analytics
   - Monitor traffic

3. **SEO** (Already done!)
   - Submit sitemap to Google Search Console
   - Verify site ownership
   - Monitor search rankings

---

## 📝 Quick Reference

### PlanetScale Connection String Format:
```
mysql://username:password@host.connect.psdb.cloud/database?sslaccept=strict
```

### Environment Variables:
```env
DB_HOST=aws-ap-south-1.connect.psdb.cloud
DB_USER=your-username
DB_PASSWORD=your-password
DB_NAME=shivkumar-mehndi
DB_PORT=3306
```

### Useful Commands:
```bash
# Deploy to Vercel
vercel --prod

# View logs
vercel logs

# Connect to PlanetScale
pscale connect shivkumar-mehndi main

# Check database
pscale shell shivkumar-mehndi main
```

---

**Setup Time:** 5 minutes ⏱️  
**Cost:** $0/month 💰  
**Difficulty:** ⭐ Easy  
**Status:** ✅ Production Ready

---

*Happy Deploying! 🚀*

**Your website will be live at:** `https://your-project.vercel.app`
