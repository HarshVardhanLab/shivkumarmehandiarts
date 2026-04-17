-- Mehndi Artist Website Database Schema
-- Run this in cPanel phpMyAdmin or MySQL client

-- Users table (Admin only)
CREATE TABLE IF NOT EXISTS users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    name VARCHAR(100) NOT NULL,
    role ENUM('admin', 'super_admin') DEFAULT 'admin',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Gallery table
CREATE TABLE IF NOT EXISTS gallery (
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    image_url VARCHAR(500) NOT NULL,
    cloudinary_id VARCHAR(255),
    category ENUM('bridal', 'arabic', 'traditional', 'modern', 'festival') DEFAULT 'bridal',
    is_featured BOOLEAN DEFAULT FALSE,
    display_order INT DEFAULT 0,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX idx_category (category),
    INDEX idx_featured (is_featured),
    INDEX idx_active (is_active)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Services table
CREATE TABLE IF NOT EXISTS services (
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(255) NOT NULL,
    slug VARCHAR(255) UNIQUE NOT NULL,
    description TEXT NOT NULL,
    price_range VARCHAR(100),
    duration VARCHAR(50),
    icon VARCHAR(500),
    cloudinary_id VARCHAR(255),
    features JSON,
    is_popular BOOLEAN DEFAULT FALSE,
    display_order INT DEFAULT 0,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX idx_slug (slug),
    INDEX idx_active (is_active)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Blog table
CREATE TABLE IF NOT EXISTS blogs (
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(255) NOT NULL,
    slug VARCHAR(255) UNIQUE NOT NULL,
    excerpt TEXT,
    content TEXT NOT NULL,
    featured_image VARCHAR(500),
    cloudinary_id VARCHAR(255),
    category VARCHAR(100),
    tags JSON,
    meta_title VARCHAR(255),
    meta_description TEXT,
    author VARCHAR(100) DEFAULT 'Admin',
    views INT DEFAULT 0,
    is_published BOOLEAN DEFAULT TRUE,
    published_at TIMESTAMP NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX idx_slug (slug),
    INDEX idx_published (is_published),
    INDEX idx_category (category)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Appointments table
CREATE TABLE IF NOT EXISTS appointments (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(20) NOT NULL,
    event_date DATE NOT NULL,
    event_type VARCHAR(100),
    service_type VARCHAR(100),
    guest_count INT,
    venue_address TEXT,
    message TEXT,
    status ENUM('pending', 'confirmed', 'cancelled', 'completed') DEFAULT 'pending',
    admin_notes TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX idx_status (status),
    INDEX idx_event_date (event_date)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Contact messages table
CREATE TABLE IF NOT EXISTS messages (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(20),
    subject VARCHAR(255),
    message TEXT NOT NULL,
    is_read BOOLEAN DEFAULT FALSE,
    replied BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    INDEX idx_read (is_read)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Testimonials table
CREATE TABLE IF NOT EXISTS testimonials (
    id INT PRIMARY KEY AUTO_INCREMENT,
    client_name VARCHAR(100) NOT NULL,
    client_image VARCHAR(500),
    rating INT DEFAULT 5,
    review TEXT NOT NULL,
    event_type VARCHAR(100),
    is_featured BOOLEAN DEFAULT FALSE,
    is_active BOOLEAN DEFAULT TRUE,
    display_order INT DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    INDEX idx_featured (is_featured),
    INDEX idx_active (is_active)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Page views analytics
CREATE TABLE IF NOT EXISTS page_views (
    id INT PRIMARY KEY AUTO_INCREMENT,
    page_url VARCHAR(255) NOT NULL,
    page_title VARCHAR(255),
    views INT DEFAULT 1,
    date DATE NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE KEY unique_page_date (page_url, date),
    INDEX idx_date (date)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Site settings table
CREATE TABLE IF NOT EXISTS site_settings (
    id INT PRIMARY KEY AUTO_INCREMENT,
    setting_key VARCHAR(100) UNIQUE NOT NULL,
    setting_value TEXT,
    setting_type VARCHAR(50) DEFAULT 'text',
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Insert default site settings
INSERT INTO site_settings (setting_key, setting_value, setting_type) VALUES
('site_name', 'Shiv Kumar Mehandi Art', 'text'),
('site_tagline', 'Get The Best Mehndi Of Your Choice', 'text'),
('site_tagline_hi', 'अपनी पसंद की बेहतरीन मेहंदी लगवाएं', 'text'),
('contact_email', 'shivkumarmehandi9419@gmail.com', 'text'),
('contact_phone', '+91 8058168076', 'text'),
('whatsapp_number', '+918058168076', 'text'),
('instagram_url', 'https://www.instagram.com/shiv_kumar_mehandi_art', 'text'),
('facebook_url', 'https://www.facebook.com/profile.php?id=100063795336312', 'text'),
('address', 'Shop No. 46, Shopping Center, Jawahar Nagar, Jaipur, Rajasthan - 302004', 'text'),
('opening_hours', 'Mon–Sun, 10:00 AM – 8:00 PM', 'text'),
('about_text', 'With over 15 years of experience in mehndi art, Shiv Kumar creates intricate designs blending traditional Rajasthani patterns with modern trends.', 'textarea'),
('about_text_hi', 'मेहंदी की खूबसूरत कला में 15 वर्षों से अधिक अनुभव के साथ, शिव कुमार पारंपरिक राजस्थानी पैटर्न को आधुनिक ट्रेंड्स के साथ मिलाकर जटिल डिज़ाइन बनाते हैं।', 'textarea'),
('meta_description', 'Best bridal mehndi artist in Jaipur offering bridal, Arabic & custom henna designs. Over 15 years of experience in traditional Rajasthani mehndi art.', 'textarea'),
('meta_keywords', 'Mehndi artist Jaipur, Bridal mehndi, Arabic mehndi, Wedding mehndi, Best mehndi Jaipur', 'text');
