#!/usr/bin/env node

/**
 * Startup Script for Shiv Kumar Mehandi Art Portal
 * This script starts the Next.js production server
 */

const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');

// Configuration
const dev = process.env.NODE_ENV !== 'production';
const hostname = process.env.HOSTNAME || 'localhost';
const port = parseInt(process.env.PORT || '3000', 10);

// Initialize Next.js app
const app = next({ dev, hostname, port });
const handle = app.getRequestHandler();

// Startup banner
console.log('\n' + '='.repeat(60));
console.log('🎨 Shiv Kumar Mehandi Art Portal');
console.log('='.repeat(60));
console.log(`📍 Environment: ${dev ? 'Development' : 'Production'}`);
console.log(`🌐 Host: ${hostname}`);
console.log(`🔌 Port: ${port}`);
console.log('='.repeat(60) + '\n');

// Check environment variables
console.log('🔍 Checking environment variables...\n');

const requiredEnvVars = [
  'DB_HOST',
  'DB_USER',
  'DB_NAME',
  'DB_PORT',
  'NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME'
];

const missingVars = [];
requiredEnvVars.forEach(varName => {
  if (process.env[varName]) {
    console.log(`✅ ${varName}: ${varName.includes('PASSWORD') ? '***' : process.env[varName]}`);
  } else {
    console.log(`❌ ${varName}: Missing`);
    missingVars.push(varName);
  }
});

if (process.env.DB_PASSWORD) {
  console.log(`✅ DB_PASSWORD: ***`);
} else {
  console.log(`⚠️  DB_PASSWORD: Not set (might be empty)`);
}

console.log('');

if (missingVars.length > 0) {
  console.error('❌ Missing required environment variables:');
  missingVars.forEach(varName => console.error(`   - ${varName}`));
  console.error('\n💡 Please set these in your .env.local file or environment\n');
  process.exit(1);
}

// Test database connection
async function testDatabaseConnection() {
  console.log('🗄️  Testing database connection...\n');
  
  try {
    const mysql = require('mysql2/promise');
    
    const connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD || '',
      database: process.env.DB_NAME,
      port: parseInt(process.env.DB_PORT || '3306', 10)
    });

    console.log('✅ Database connection successful!');
    
    // Test query
    const [rows] = await connection.query('SELECT COUNT(*) as count FROM services');
    console.log(`✅ Services in database: ${rows[0].count}`);
    
    const [galleryRows] = await connection.query('SELECT COUNT(*) as count FROM gallery');
    console.log(`✅ Gallery images in database: ${galleryRows[0].count}`);
    
    await connection.end();
    console.log('');
    
    return true;
  } catch (error) {
    console.error('❌ Database connection failed:');
    console.error(`   ${error.message}\n`);
    console.error('💡 Please check your database credentials in .env.local\n');
    return false;
  }
}

// Start the server
app.prepare().then(async () => {
  // Test database connection before starting server
  const dbConnected = await testDatabaseConnection();
  
  if (!dbConnected && !dev) {
    console.error('❌ Cannot start production server without database connection\n');
    process.exit(1);
  }
  
  if (!dbConnected && dev) {
    console.warn('⚠️  Starting development server without database connection\n');
  }

  createServer(async (req, res) => {
    try {
      const parsedUrl = parse(req.url, true);
      await handle(req, res, parsedUrl);
    } catch (err) {
      console.error('Error occurred handling', req.url, err);
      res.statusCode = 500;
      res.end('Internal server error');
    }
  })
    .once('error', (err) => {
      console.error('❌ Server error:', err);
      process.exit(1);
    })
    .listen(port, () => {
      console.log('='.repeat(60));
      console.log('✅ Server started successfully!');
      console.log('='.repeat(60));
      console.log(`🚀 Ready on http://${hostname}:${port}`);
      console.log(`📱 Local: http://localhost:${port}`);
      if (dev) {
        console.log(`\n💡 Press Ctrl+C to stop the server`);
      }
      console.log('='.repeat(60) + '\n');
    });
});

// Graceful shutdown
process.on('SIGTERM', () => {
  console.log('\n\n🛑 SIGTERM signal received: closing HTTP server');
  process.exit(0);
});

process.on('SIGINT', () => {
  console.log('\n\n🛑 SIGINT signal received: closing HTTP server');
  process.exit(0);
});
