#!/usr/bin/env node

/**
 * Database Connection Test Script
 * Run: node scripts/test-db.js
 */

const mysql = require('mysql2/promise');
require('dotenv').config({ path: '.env.local' });

async function testConnection() {
  console.log('🔍 Testing Database Connection...\n');
  
  console.log('Configuration:');
  console.log(`  Host: ${process.env.DB_HOST || 'localhost'}`);
  console.log(`  User: ${process.env.DB_USER || 'root'}`);
  console.log(`  Password: ${process.env.DB_PASSWORD ? '***' + process.env.DB_PASSWORD.slice(-3) : '(empty)'}`);
  console.log(`  Database: ${process.env.DB_NAME || 'mehndi_db'}\n`);

  try {
    // First, try to connect without selecting a database
    console.log('Step 1: Testing MySQL connection...');
    const connection = await mysql.createConnection({
      host: process.env.DB_HOST || 'localhost',
      user: process.env.DB_USER || 'root',
      password: process.env.DB_PASSWORD || '',
    });
    
    console.log('✅ MySQL connection successful!\n');

    // Check if database exists
    console.log('Step 2: Checking if database exists...');
    const [databases] = await connection.query(
      'SHOW DATABASES LIKE ?',
      [process.env.DB_NAME || 'mehndi_db']
    );

    if (databases.length === 0) {
      console.log(`❌ Database '${process.env.DB_NAME || 'mehndi_db'}' does not exist.`);
      console.log('\n📝 To create the database, run:');
      console.log(`   mysql -u root -p -e "CREATE DATABASE ${process.env.DB_NAME || 'mehndi_db'} CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;"`);
      console.log('\n   Or in MySQL console:');
      console.log(`   CREATE DATABASE ${process.env.DB_NAME || 'mehndi_db'} CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;`);
      await connection.end();
      return;
    }

    console.log(`✅ Database '${process.env.DB_NAME || 'mehndi_db'}' exists!\n`);

    // Connect to the database
    console.log('Step 3: Connecting to database...');
    await connection.changeUser({ database: process.env.DB_NAME || 'mehndi_db' });
    console.log('✅ Connected to database!\n');

    // Check tables
    console.log('Step 4: Checking tables...');
    const [tables] = await connection.query('SHOW TABLES');
    
    if (tables.length === 0) {
      console.log('❌ No tables found in database.');
      console.log('\n📝 To create tables, run the schema:');
      console.log('   mysql -u root -p mehndi_db < database/schema.sql');
      console.log('\n   Or import database/schema.sql via phpMyAdmin');
    } else {
      console.log(`✅ Found ${tables.length} tables:`);
      tables.forEach(table => {
        console.log(`   - ${Object.values(table)[0]}`);
      });
      
      // Check row counts
      console.log('\nStep 5: Checking data...');
      for (const table of tables) {
        const tableName = Object.values(table)[0];
        const [rows] = await connection.query(`SELECT COUNT(*) as count FROM ${tableName}`);
        console.log(`   ${tableName}: ${rows[0].count} rows`);
      }
    }

    await connection.end();
    console.log('\n✅ All checks completed successfully!');
    console.log('\n🚀 Your database is ready to use!');

  } catch (error) {
    console.error('\n❌ Error:', error.message);
    
    if (error.code === 'ER_ACCESS_DENIED_ERROR') {
      console.log('\n💡 Fix: Update DB_PASSWORD in .env.local');
      console.log('   If you don\'t have a password, leave it empty: DB_PASSWORD=');
      console.log('\n   To set a MySQL root password:');
      console.log('   mysql -u root -e "ALTER USER \'root\'@\'localhost\' IDENTIFIED BY \'your_password\';"');
    } else if (error.code === 'ECONNREFUSED') {
      console.log('\n💡 Fix: Start MySQL server');
      console.log('   brew services start mysql');
      console.log('   or: mysql.server start');
    }
    
    process.exit(1);
  }
}

testConnection();
