# ⚡ Quick Deploy Guide - 5 Minutes

## 🎯 Deploy Your Website in 5 Minutes!

Follow these exact steps:

---

## ✅ Step 1: PlanetScale (2 minutes)

### 1.1 Create Account
```
1. Go to: https://planetscale.com
2. Click "Sign up"
3. Choose "Continue with GitHub"
4. Authorize
```

### 1.2 Create Database
```
1. Click "Create a new database"
2. Name: shivkumar-mehndi
3. Region: AWS Mumbai (ap-south-1)
4. Plan: Hobby (Free)
5. Click "Create database"
```

### 1.3 Import Data
```
1. Click "Console" tab
2. Copy content from: database/schema.sql
3. Paste and click "Run"
4. Copy content from: database/business-data.sql
5. Paste and click "Run"
6. Copy content from: database/gallery-all-images.sql
7. Paste and click "Run"
```

### 1.4 Get Connection Details
```
1. Click "Connect" button
2. Select "Prisma" format
3. Copy the connection string
4. Extract these values:

From: mysql://USER:PASS@HOST/DB?sslaccept=strict

DB_HOST = HOST (e.g., aws-ap-south-1.connect.psdb.cloud)
DB_USER = USER
DB_PASSWORD = PASS
DB_NAME = shivkumar-mehndi
DB_PORT = 3306
```

✅ **PlanetScale Ready!**

---

## ✅ Step 2: Vercel (3 minutes)

### 2.1 Deploy Project
```
1. Go to: https://vercel.com/new
2. Import your Git repository
3. Root Directory: webapp
4. Click "Deploy"
```

⏳ Wait for build (2-3 minutes)...

### 2.2 Add Environment Variables
```
1. Go to: Settings → Environment Variables
2. Add these (one by one):
```

**Copy and paste these:**

```env
DB_HOST
Value: [paste from PlanetScale]

DB_USER
Value: [paste from PlanetScale]

DB_PASSWORD
Value: [paste from PlanetScale]

DB_NAME
Value: shivkumar-mehndi

DB_PORT
Value: 3306

NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME
Value: dxhsqosdt

CLOUDINARY_API_KEY
Value: 179242962172342

CLOUDINARY_API_SECRET
Value: SDheBj41Sg2n7Z9tG3V6Ph0JrQM

NEXT_PUBLIC_BUSINESS_PHONE
Value: +918058168076

NEXT_PUBLIC_BUSINESS_EMAIL
Value: shivkumarmehandi9419@gmail.com

NEXT_PUBLIC_WHATSAPP_NUMBER
Value: 918058168076

NEXT_PUBLIC_SITE_URL
Value: [your-vercel-url]
```

**Important:** Set for "Production, Preview, Development"

### 2.3 Redeploy
```
1. Go to: Deployments tab
2. Click "..." on latest deployment
3. Click "Redeploy"
```

✅ **Deployed!**

---

## ✅ Step 3: Test (30 seconds)

Visit your Vercel URL and check:

```
✓ Homepage loads
✓ Gallery shows 25 images
✓ Services page works
✓ Contact form works
✓ WhatsApp button works
✓ Mobile navigation works
```

---

## 🎉 Done!

Your website is live at: `https://your-project.vercel.app`

**Total Time:** 5 minutes  
**Total Cost:** $0/month  

---

## 🆘 Quick Fixes

### Images not showing?
```
1. Go to PlanetScale Console
2. Run: SELECT COUNT(*) FROM gallery;
3. Should show: 25
4. If 0, re-import gallery-all-images.sql
```

### Database connection error?
```
1. Check environment variables in Vercel
2. Make sure no extra spaces in password
3. Verify PlanetScale database is not paused
4. Redeploy: vercel --prod --force
```

### Build failed?
```
1. Check build logs in Vercel
2. Test locally: npm run build
3. If works locally, redeploy
```

---

## 📞 Need Help?

**PlanetScale Issues:**
- Docs: https://planetscale.com/docs
- Support: support@planetscale.com

**Vercel Issues:**
- Docs: https://vercel.com/docs
- Support: support@vercel.com

**Website Issues:**
- Email: shivkumarmehandi9419@gmail.com
- Phone: +91 8058168076

---

## 🚀 Next Steps

1. **Add Custom Domain** (Optional)
   - Vercel → Settings → Domains
   - Add your domain
   - Update DNS

2. **Enable Analytics** (Optional)
   - Vercel → Analytics → Enable
   - Free for hobby projects

3. **Monitor Performance**
   - Check Vercel dashboard
   - View PlanetScale insights

---

**Congratulations! Your website is live! 🎊**
