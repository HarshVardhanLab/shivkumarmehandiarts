# Vercel Deployment Checklist

## ✅ Pre-Deployment Checklist

### 1. Code Preparation
- [x] All code committed to Git
- [x] Build passes locally (`npm run build`)
- [x] No TypeScript errors
- [x] No ESLint errors (warnings are OK)
- [x] `.env.local` is in `.gitignore`
- [x] `.env.example` created with all required variables

### 2. Database Setup
- [ ] MySQL database created (PlanetScale/Railway/Other)
- [ ] Database schema imported (`database/schema.sql`)
- [ ] Business data imported (`database/business-data.sql`)
- [ ] Gallery images imported (`database/gallery-all-images.sql`)
- [ ] Database connection tested locally
- [ ] Database credentials ready for Vercel

### 3. Environment Variables Ready
- [ ] `DB_HOST`
- [ ] `DB_USER`
- [ ] `DB_PASSWORD`
- [ ] `DB_NAME`
- [ ] `DB_PORT`
- [ ] `NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME`
- [ ] `CLOUDINARY_API_KEY`
- [ ] `CLOUDINARY_API_SECRET`
- [ ] `NEXT_PUBLIC_BUSINESS_PHONE`
- [ ] `NEXT_PUBLIC_BUSINESS_EMAIL`
- [ ] `NEXT_PUBLIC_WHATSAPP_NUMBER`

---

## 🚀 Deployment Steps

### Step 1: Create Vercel Project

**Option A: Via CLI**
```bash
# Install Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy
cd webapp
vercel
```

**Option B: Via Dashboard**
1. Go to https://vercel.com/new
2. Import Git repository
3. Set root directory: `webapp`
4. Click "Deploy"

### Step 2: Configure Environment Variables

1. Go to Vercel Dashboard → Your Project → Settings → Environment Variables
2. Add all variables from `.env.example`
3. Set for: Production, Preview, Development
4. Click "Save"

### Step 3: Redeploy

```bash
vercel --prod
```

Or trigger redeploy from Vercel Dashboard

---

## 🧪 Post-Deployment Testing

### Critical Tests
- [ ] Homepage loads: `https://your-project.vercel.app`
- [ ] Gallery page shows images: `/gallery`
- [ ] Designs page shows images: `/mehndi-designs`
- [ ] Services page loads: `/services`
- [ ] Contact form works: `/contact`
- [ ] Booking form works: `/book`
- [ ] WhatsApp button works (opens WhatsApp)
- [ ] Phone links work (opens dialer)
- [ ] Email links work (opens email client)

### Database Tests
- [ ] Gallery images load from database
- [ ] Services load from database
- [ ] Testimonials load from database
- [ ] Blog posts load from database
- [ ] Featured images display correctly

### Mobile Tests
- [ ] Mobile navigation works
- [ ] Bottom nav bar shows/hides correctly
- [ ] All pages responsive on mobile
- [ ] Images load on mobile
- [ ] Forms work on mobile

### Performance Tests
- [ ] Page load time < 3 seconds
- [ ] Images optimized (Next.js Image)
- [ ] No console errors
- [ ] Lighthouse score > 90

---

## 🔧 Common Issues & Solutions

### Issue: Database Connection Failed

**Solution:**
1. Check database is accessible from internet
2. Verify credentials in Vercel environment variables
3. Check SSL/TLS settings
4. Test connection string locally first

```bash
# Test database connection
node -e "const mysql = require('mysql2/promise'); mysql.createConnection({host:'HOST',user:'USER',password:'PASS',database:'DB'}).then(()=>console.log('✅ Connected')).catch(e=>console.log('❌',e.message))"
```

### Issue: Images Not Loading

**Solution:**
1. Check Cloudinary credentials
2. Verify `next.config.mjs` has correct domains
3. Check browser console for CORS errors
4. Test image URLs directly in browser

### Issue: Build Failed

**Solution:**
```bash
# Clear cache and rebuild locally
rm -rf .next
npm run build

# If successful, deploy again
vercel --prod --force
```

### Issue: Environment Variables Not Working

**Solution:**
1. Ensure variables are set for "Production" environment
2. Variable names are case-sensitive
3. Redeploy after adding variables
4. Check for typos in variable names

---

## 📊 Monitoring Setup

### Vercel Analytics (Free)
1. Go to Project → Analytics
2. Enable Vercel Analytics
3. View real-time metrics

### Google Analytics (Optional)
1. Create GA4 property
2. Get Measurement ID
3. Add to environment variables: `NEXT_PUBLIC_GA_MEASUREMENT_ID`
4. Redeploy

### Error Tracking (Optional)
- Sentry: https://sentry.io
- LogRocket: https://logrocket.com
- Vercel Logs: Built-in

---

## 🌐 Custom Domain Setup

### Step 1: Add Domain in Vercel
1. Go to Project → Settings → Domains
2. Add domain: `shivkumarmehandiart.com`
3. Add www subdomain: `www.shivkumarmehandiart.com`

### Step 2: Update DNS Records

**For Namecheap/GoDaddy/Other:**

| Type  | Name | Value                    | TTL  |
|-------|------|--------------------------|------|
| A     | @    | 76.76.21.21             | Auto |
| CNAME | www  | cname.vercel-dns.com    | Auto |

**For Cloudflare:**
- Disable proxy (orange cloud) for Vercel domains
- Use DNS only (grey cloud)

### Step 3: Update Environment Variable
```env
NEXT_PUBLIC_SITE_URL=https://shivkumarmehandiart.com
```

### Step 4: Verify
- Wait 24-48 hours for DNS propagation
- Check: https://dnschecker.org
- Test both www and non-www versions

---

## 🔐 Security Checklist

- [x] `.env.local` not in Git
- [x] Database credentials in environment variables
- [x] API keys secured
- [x] SQL injection prevention (parameterized queries)
- [x] XSS protection (React default)
- [x] HTTPS enforced (Vercel default)
- [ ] Rate limiting on API routes (optional)
- [ ] CORS configured (if needed)

---

## 📈 Performance Optimization

### Already Configured
- ✅ Next.js Image Optimization
- ✅ Static page generation
- ✅ Cloudinary image optimization
- ✅ Font optimization
- ✅ Code splitting

### Recommended
- [ ] Enable Vercel Speed Insights
- [ ] Configure ISR for gallery (revalidate every hour)
- [ ] Enable Edge Functions for API routes
- [ ] Add service worker for offline support

---

## 💾 Backup Strategy

### Database Backups
```bash
# Manual backup
mysqldump -h HOST -u USER -pPASS DATABASE > backup-$(date +%Y%m%d).sql

# Automated daily backup (add to cron)
0 2 * * * mysqldump -h HOST -u USER -pPASS DATABASE > /backups/backup-$(date +\%Y\%m\%d).sql
```

### Code Backups
- Git repository (already backed up)
- Vercel deployment history (automatic)

### Image Backups
- Cloudinary (automatic)
- Keep SQL file with image URLs in Git

---

## 📞 Support Contacts

### Vercel Support
- Docs: https://vercel.com/docs
- Community: https://github.com/vercel/next.js/discussions
- Email: support@vercel.com

### Database Support
- PlanetScale: https://planetscale.com/docs
- Railway: https://docs.railway.app

### Developer
- Email: shivkumarmehandi9419@gmail.com
- Phone: +91 8058168076

---

## 🎯 Success Criteria

Your deployment is successful when:

- ✅ All pages load without errors
- ✅ Database connection works
- ✅ Images load from Cloudinary
- ✅ Forms submit successfully
- ✅ Mobile navigation works
- ✅ WhatsApp/Phone links work
- ✅ Page load time < 3 seconds
- ✅ No console errors
- ✅ Lighthouse score > 85

---

## 🚀 Quick Deploy Commands

```bash
# First time deployment
cd webapp
vercel

# Production deployment
vercel --prod

# View logs
vercel logs

# Open in browser
vercel open

# Check deployment status
vercel ls

# Rollback to previous deployment
vercel rollback
```

---

## 📝 Deployment Log Template

```
Date: _______________
Deployed By: _______________
Deployment URL: _______________
Build Time: _______________
Status: _______________

Tests Passed:
- [ ] Homepage
- [ ] Gallery
- [ ] Forms
- [ ] Mobile
- [ ] Database

Issues Found:
_______________________________________________
_______________________________________________

Resolution:
_______________________________________________
_______________________________________________

Notes:
_______________________________________________
_______________________________________________
```

---

**Estimated Deployment Time:** 10-15 minutes  
**Build Time:** 2-3 minutes  
**DNS Propagation:** 24-48 hours (for custom domain)

---

*Ready to deploy? Start with Step 1! 🚀*
