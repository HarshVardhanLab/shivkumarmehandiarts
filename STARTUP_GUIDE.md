# 🚀 Startup Guide

## How to Start Your Application

---

## 📋 Available Startup Methods

### Method 1: Using startup.js (Recommended)

**Custom startup script with health checks:**

```bash
cd webapp
npm run startup
```

**Features:**
- ✅ Checks environment variables
- ✅ Tests database connection
- ✅ Shows startup banner
- ✅ Displays configuration
- ✅ Graceful shutdown handling

**Output:**
```
============================================================
🎨 Shiv Kumar Mehandi Art Portal
============================================================
📍 Environment: Production
🌐 Host: localhost
🔌 Port: 3000
============================================================

🔍 Checking environment variables...

✅ DB_HOST: localhost
✅ DB_USER: root
✅ DB_NAME: shivkumar_mehndi
✅ DB_PORT: 3306
✅ DB_PASSWORD: ***
✅ NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME: dxhsqosdt

🗄️  Testing database connection...

✅ Database connection successful!
✅ Services in database: 6
✅ Gallery images in database: 25

============================================================
✅ Server started successfully!
============================================================
🚀 Ready on http://localhost:3000
📱 Local: http://localhost:3000

💡 Press Ctrl+C to stop the server
============================================================
```

---

### Method 2: Standard Next.js Start

**Development mode:**
```bash
cd webapp
npm run dev
```

**Production mode:**
```bash
cd webapp
npm run build
npm start
```

---

### Method 3: Direct Node.js

```bash
cd webapp
node startup.js
```

---

## 🔧 Before Starting

### 1. Install Dependencies
```bash
cd webapp
npm install
```

### 2. Set Environment Variables

**Create `.env.local` file:**
```env
# Database Configuration
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=
DB_NAME=shivkumar_mehndi
DB_PORT=3306

# Cloudinary Configuration
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=dxhsqosdt
CLOUDINARY_API_KEY=179242962172342
CLOUDINARY_API_SECRET=SDheBj41Sg2n7Z9tG3V6Ph0JrQM

# Business Information
NEXT_PUBLIC_BUSINESS_NAME=Shiv Kumar Mehandi Art
NEXT_PUBLIC_BUSINESS_PHONE=+918058168076
NEXT_PUBLIC_BUSINESS_EMAIL=shivkumarmehandi9419@gmail.com
NEXT_PUBLIC_WHATSAPP_NUMBER=918058168076

# Site URL
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### 3. Import Database

**Import these files in order:**
1. `database/schema.sql`
2. `database/business-data-simple.sql`
3. `database/gallery-all-images.sql`

---

## 🎯 Quick Start Commands

### Development (with hot reload)
```bash
npm run dev
```
- Opens: http://localhost:3000
- Auto-reloads on file changes
- Shows detailed error messages

### Production (optimized)
```bash
npm run build
npm run startup
```
- Builds optimized production bundle
- Starts with health checks
- Better performance

### Production (standard)
```bash
npm run build
npm start
```
- Standard Next.js production start
- No custom health checks

---

## 🔍 Startup Script Features

### Environment Variable Checks
The startup script verifies all required variables:
- DB_HOST
- DB_USER
- DB_NAME
- DB_PORT
- NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME

### Database Connection Test
Tests connection and queries:
- Connects to MySQL database
- Counts services (should be 6)
- Counts gallery images (should be 25)

### Error Handling
- Shows clear error messages
- Exits gracefully if critical errors
- Warns about missing optional variables

---

## 🐛 Troubleshooting

### Issue: "Missing required environment variables"

**Solution:**
1. Create `.env.local` file in `webapp/` folder
2. Copy variables from `.env.example`
3. Fill in your values

---

### Issue: "Database connection failed"

**Error:** `connect ECONNREFUSED`

**Solution:**
1. Check MySQL is running:
   ```bash
   # macOS
   brew services list
   
   # Check if MySQL is running
   mysql -u root -p
   ```

2. Verify credentials in `.env.local`
3. Check database exists:
   ```sql
   SHOW DATABASES;
   ```

---

### Issue: "Cannot find module 'next'"

**Solution:**
```bash
cd webapp
npm install
```

---

### Issue: "Port 3000 already in use"

**Solution:**

**Option A: Use different port**
```bash
PORT=3001 npm run startup
```

**Option B: Kill process on port 3000**
```bash
# macOS/Linux
lsof -ti:3000 | xargs kill -9

# Or find and kill manually
lsof -i :3000
kill -9 <PID>
```

---

### Issue: "Services count: 0" or "Gallery count: 0"

**Solution:**
Import database files:
```bash
# Using MySQL command line
mysql -u root -p shivkumar_mehndi < database/business-data-simple.sql
mysql -u root -p shivkumar_mehndi < database/gallery-all-images.sql
```

Or use phpMyAdmin to import the files.

---

## 📊 Startup Checklist

Before starting the application:

- [ ] Node.js installed (v18 or higher)
- [ ] Dependencies installed (`npm install`)
- [ ] `.env.local` file created with all variables
- [ ] MySQL server running
- [ ] Database created (`shivkumar_mehndi`)
- [ ] Database tables created (`schema.sql` imported)
- [ ] Business data imported (`business-data-simple.sql`)
- [ ] Gallery images imported (`gallery-all-images.sql`)
- [ ] Port 3000 available (or use different port)

---

## 🚀 Production Deployment

### For Vercel:

**Don't use startup.js on Vercel!**

Vercel uses its own startup process. Just:
1. Push code to Git
2. Connect repository to Vercel
3. Set environment variables in Vercel dashboard
4. Deploy

**Vercel automatically runs:**
```bash
npm run build
npm start
```

---

### For Custom Server (VPS, AWS, etc.):

**Use PM2 for process management:**

```bash
# Install PM2
npm install -g pm2

# Start with PM2
cd webapp
pm2 start startup.js --name "mehandi-art"

# View logs
pm2 logs mehandi-art

# Restart
pm2 restart mehandi-art

# Stop
pm2 stop mehandi-art

# Auto-start on server reboot
pm2 startup
pm2 save
```

---

## 📝 Environment-Specific Configs

### Development (.env.local)
```env
NODE_ENV=development
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### Production (Vercel)
```env
NODE_ENV=production
DB_HOST=your-remote-host
DB_USER=your-remote-user
DB_PASSWORD=your-password
NEXT_PUBLIC_SITE_URL=https://your-domain.vercel.app
```

---

## 🎯 Quick Reference

| Command | Purpose | Environment |
|---------|---------|-------------|
| `npm run dev` | Development with hot reload | Development |
| `npm run build` | Build production bundle | Production |
| `npm start` | Start production server | Production |
| `npm run startup` | Start with health checks | Both |
| `node startup.js` | Direct startup | Both |

---

## 💡 Pro Tips

### Tip 1: Check Logs
```bash
# View startup logs
npm run startup 2>&1 | tee startup.log
```

### Tip 2: Custom Port
```bash
PORT=8080 npm run startup
```

### Tip 3: Custom Hostname
```bash
HOSTNAME=0.0.0.0 PORT=3000 npm run startup
```

### Tip 4: Production Mode Locally
```bash
NODE_ENV=production npm run startup
```

---

## 🆘 Need Help?

### Check Application Status
```bash
# Is server running?
curl http://localhost:3000

# Check API
curl http://localhost:3000/api/services

# Check database
mysql -u root -p -e "SELECT COUNT(*) FROM shivkumar_mehndi.services;"
```

### View Logs
- Development: Logs show in terminal
- Production: Use PM2 logs or check server logs

### Common Issues
1. Port already in use → Change port or kill process
2. Database connection failed → Check MySQL is running
3. Missing env variables → Create .env.local
4. Module not found → Run npm install

---

## ✅ Success Indicators

Your application started successfully when you see:

```
✅ Server started successfully!
🚀 Ready on http://localhost:3000
```

**Test it:**
1. Open browser: http://localhost:3000
2. Homepage should load
3. Gallery should show images
4. Services page should work

---

**Status:** ✅ Startup script ready  
**Location:** `webapp/startup.js`  
**Command:** `npm run startup`

---

*Happy coding! 🚀*
