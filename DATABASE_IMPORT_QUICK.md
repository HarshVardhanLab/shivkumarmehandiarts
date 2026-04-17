# 📦 Quick Database Import

## 3 Files to Import (In Order)

### 1️⃣ schema.sql
**What:** Creates 6 tables  
**Status:** ✅ Already done (I can see your tables in phpMyAdmin)

---

### 2️⃣ business-data-simple.sql
**What:** Adds 6 services, 6 testimonials, 3 blog posts  
**Why this file:** Works perfectly with phpMyAdmin (no JSON errors)

**How to Import:**
1. Click `shivkuma_allmehandi` database (left sidebar)
2. Click "Import" tab (top)
3. Choose File → Select `business-data-simple.sql`
4. Click "Go" (bottom)
5. Wait for "Import has been successfully finished"

**Expected Result:**
```
✅ 6 rows inserted into services
✅ 6 rows inserted into testimonials  
✅ 3 rows inserted into blogs
```

---

### 3️⃣ gallery-all-images.sql
**What:** Adds 25 real Cloudinary mehndi images

**How to Import:**
1. Still in `shivkuma_allmehandi` database
2. Click "Import" tab
3. Choose File → Select `gallery-all-images.sql`
4. Click "Go"
5. Wait for success message

**Expected Result:**
```
✅ 25 rows inserted into gallery
   - 7 bridal images
   - 5 arabic images
   - 5 traditional images
   - 5 modern images
   - 3 festival images
```

---

## ✅ Verify Import

After importing, click "SQL" tab and run:

```sql
SELECT 'services' as table_name, COUNT(*) as count FROM services
UNION ALL
SELECT 'testimonials', COUNT(*) FROM testimonials
UNION ALL
SELECT 'blogs', COUNT(*) FROM blogs
UNION ALL
SELECT 'gallery', COUNT(*) FROM gallery;
```

**Expected Output:**
```
services      | 6
testimonials  | 6
blogs         | 3
gallery       | 25
```

---

## 🎯 That's It!

After importing these 2 files (schema already done), your database is ready for Vercel deployment.

**Total Time:** 3 minutes

---

## 📍 Your Database Info

From your phpMyAdmin:
- **Database Name:** `shivkuma_allmehandi`
- **Host:** Check your cPanel for remote host
- **Port:** `3306`
- **Username:** Check your cPanel
- **Password:** Check your cPanel

Add these to Vercel Environment Variables!
