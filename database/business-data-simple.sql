-- Business Data - Simple Version for phpMyAdmin
-- This version uses simple text strings instead of JSON arrays

-- Clear existing data
TRUNCATE TABLE services;
TRUNCATE TABLE testimonials;
TRUNCATE TABLE blogs;

-- Insert Services with Real Pricing
-- Note: features column will store comma-separated values
INSERT INTO services (title, slug, description, price_range, duration, features, is_popular, display_order, is_active) VALUES
('Bridal Mehndi', 'bridal-mehndi', 'Full hand & feet coverage with intricate traditional patterns. Our bridal mehndi service includes premium natural henna and specialized bridal designs that blend traditional Rajasthani patterns with modern elegance.', '₹6100 onwards', '3-4 hours', 'Full hand & feet coverage, Intricate traditional patterns, Premium natural henna, Bridal specialist, Long-lasting color, Personalized designs', 1, 1, 1),

('Bengal Style Mehndi', 'bengal-style', 'Minimal bold patterns in traditional Bengali style. Perfect for weddings and special occasions with distinctive Bengali motifs and designs.', '₹1500 per person', '1-2 hours', 'Minimal bold patterns, Traditional Bengali style, Alta combination available, Perfect for weddings, Unique cultural designs, Quick application', 0, 2, 1),

('Arabic Mehndi', 'arabic-mehndi', 'Bold modern patterns with flowing vines and geometric designs. Our Arabic mehndi features contemporary styles with quick application and stunning results.', '₹300 onwards', '30-60 minutes', 'Bold modern patterns, Custom designs, Quick application, Contemporary style, Floral & geometric motifs, Elegant finish', 1, 3, 1),

('Baby Shower Mehandi', 'baby-shower', 'Delicate storytelling patterns for the special mom-to-be. Full coverage designs that are safe during pregnancy with beautiful traditional motifs.', '₹3100 onwards', '2-3 hours', 'Delicate storytelling patterns, Full coverage, Safe for pregnancy, Special occasion design, Traditional motifs, Comfortable application', 0, 4, 1),

('Karvachauth Special Mehandi', 'karvachauth-special', 'Traditional patterns for the auspicious Karva Chauth festival. Quick drying designs with traditional auspicious symbols.', '₹1500 onwards', '1-2 hours', 'Traditional patterns, Auspicious designs, Quick drying, Festival special, Cultural significance, Beautiful finish', 0, 5, 1),

('Designer Mehandi', 'designer-mehndi', 'Unique contemporary designs with fusion of traditional and modern styles. Personalized patterns that reflect your individual style.', '₹300 onwards', '30-90 minutes', 'Unique contemporary designs, Fusion of styles, Personalized patterns, Modern elegance, Creative artistry, Trendy designs', 1, 6, 1);

-- Insert Testimonials
INSERT INTO testimonials (client_name, rating, review, event_type, is_featured, is_active, display_order) VALUES
('Priya Sharma', 5, 'Shiv Kumar created the most beautiful bridal mehndi for my wedding! The intricate designs were stunning and lasted for weeks. His professionalism and attention to detail made my special day even more memorable. Highly recommended!', 'Wedding', 1, 1, 1),

('Anjali Verma', 5, 'Amazing Arabic mehndi designs! The bold patterns were exactly what I wanted for my sister sangeet. Quick application and beautiful results. Will definitely book again for future events.', 'Sangeet', 1, 1, 2),

('Neha Rajput', 5, 'Best mehndi artist in Jaipur! I got traditional Rajasthani mehndi for Karva Chauth and received so many compliments. The color was deep and rich. Thank you Shiv Kumar!', 'Festival', 1, 1, 3),

('Kavita Meena', 5, 'Excellent service for my baby shower! The designs were delicate and beautiful. Shiv Kumar was very patient and made sure I was comfortable throughout. The mehndi turned out gorgeous!', 'Baby Shower', 1, 1, 4),

('Ritu Agarwal', 5, 'I have been getting mehndi from Shiv Kumar for the past 5 years. Always consistent quality and beautiful designs. He understands exactly what I want and delivers perfectly every time.', 'Regular Client', 1, 1, 5),

('Pooja Jain', 5, 'The designer mehndi I got for my engagement was absolutely stunning! Modern yet traditional, exactly the fusion I was looking for. Highly skilled artist with great creativity.', 'Engagement', 0, 1, 6);

-- Insert Blog Posts
-- Note: tags column will store comma-separated values
INSERT INTO blogs (title, slug, excerpt, content, category, tags, meta_title, meta_description, author, is_published, published_at) VALUES
('Top 10 Bridal Mehndi Designs for 2026', 'top-10-bridal-mehndi-designs-2026', 'Discover the most trending bridal mehndi designs for 2026. From traditional Rajasthani patterns to modern fusion styles, find the perfect design for your special day.', '<h2>Introduction</h2><p>Bridal mehndi is an essential part of Indian weddings. In 2026, we are seeing a beautiful blend of traditional Rajasthani patterns with contemporary design elements. This guide showcases the top 10 bridal mehndi designs that are trending this year.</p><h2>1. Traditional Rajasthani Bridal</h2><p>Full coverage designs with intricate peacock motifs, paisleys, and traditional symbols. Perfect for brides who want to honor cultural heritage.</p><h2>2. Modern Minimalist</h2><p>Clean lines with strategic negative space. Ideal for contemporary brides who prefer subtle elegance.</p><h2>3. Fusion Style</h2><p>Combining Arabic boldness with Indian intricacy. Best of both worlds for modern Indian weddings.</p>', 'Bridal', 'bridal mehndi, wedding mehndi, mehndi designs, 2026 trends', 'Top 10 Bridal Mehndi Designs for 2026', 'Discover trending bridal mehndi designs for 2026', 'Shiv Kumar', 1, '2026-04-01 10:00:00'),

('How to Care for Your Mehndi', 'mehndi-care-tips-long-lasting-color', 'Learn the best practices to maintain your mehndi and achieve deep, long-lasting color. Expert tips from professional mehndi artist Shiv Kumar.', '<h2>Introduction</h2><p>Proper care ensures your mehndi develops a deep, rich color that lasts for weeks. Follow these expert tips for the best results.</p><h2>Immediate Care (First 6 Hours)</h2><p>Keep the mehndi paste on for at least 6-8 hours. The longer you keep it, the darker the color will be.</p><h2>After Removing Paste</h2><p>Do not wash with water immediately. Scrape off the dried paste gently. Apply a mixture of lemon juice and sugar for deeper color.</p><h2>Long-term Maintenance</h2><p>Avoid water contact for 24 hours. Apply natural oils like coconut or mustard oil to protect the design and enhance color.</p>', 'Tips & Care', 'mehndi care, henna tips, long lasting mehndi', 'Mehndi Care Tips for Long-Lasting Color', 'Learn expert tips for mehndi care and maintenance', 'Shiv Kumar', 1, '2026-04-10 14:30:00'),

('Arabic vs Traditional Mehndi', 'arabic-vs-traditional-mehndi-style-guide', 'Confused between Arabic and traditional mehndi styles? This comprehensive guide helps you choose the perfect design for your occasion.', '<h2>Introduction</h2><p>Both Arabic and traditional Indian mehndi styles have their unique beauty and charm. Understanding the differences helps you choose the right style for your event.</p><h2>Arabic Mehndi Characteristics</h2><p>Bold flowing patterns, lots of negative space, floral and vine motifs, quick application time, modern and contemporary look.</p><h2>Traditional Indian Mehndi</h2><p>Intricate detailed patterns, full coverage designs, peacocks and paisleys, longer application time, classic and cultural significance.</p><h2>Which to Choose?</h2><p>Arabic for: Modern events, quick application, bold statement. Traditional for: Weddings, cultural events, full coverage, intricate beauty.</p>', 'Design Guide', 'arabic mehndi, traditional mehndi, mehndi styles', 'Arabic vs Traditional Mehndi Style Guide', 'Compare Arabic and traditional mehndi styles', 'Shiv Kumar', 1, '2026-04-15 11:00:00');

-- Verify insertions
SELECT 'Services' as table_name, COUNT(*) as record_count FROM services
UNION ALL
SELECT 'Testimonials', COUNT(*) FROM testimonials
UNION ALL
SELECT 'Blogs', COUNT(*) FROM blogs;
