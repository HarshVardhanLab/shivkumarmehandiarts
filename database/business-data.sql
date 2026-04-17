-- Business Data from BUSINESS-CLOUDINARY-COMPLETE.md
-- Services, Testimonials, and Blog Posts

-- Clear existing data
TRUNCATE TABLE services;
TRUNCATE TABLE testimonials;
TRUNCATE TABLE blogs;

-- Insert Services with Real Pricing
INSERT INTO services (title, slug, description, price_range, duration, features, is_popular, display_order, is_active) VALUES
(
  'Bridal Mehndi',
  'bridal-mehndi',
  'Full hand & feet coverage with intricate traditional patterns. Our bridal mehndi service includes premium natural henna and specialized bridal designs that blend traditional Rajasthani patterns with modern elegance.',
  '₹6100 onwards',
  '3-4 hours',
  '["Full hand & feet coverage", "Intricate traditional patterns", "Premium natural henna", "Bridal specialist", "Long-lasting color", "Personalized designs"]',
  1,
  1,
  1
),
(
  'Bengal Style Mehndi',
  'bengal-style',
  'Minimal bold patterns in traditional Bengali style. Perfect for weddings and special occasions with distinctive Bengali motifs and designs.',
  '₹1500 per person',
  '1-2 hours',
  '["Minimal bold patterns", "Traditional Bengali style", "Alta combination available", "Perfect for weddings", "Unique cultural designs", "Quick application"]',
  0,
  2,
  1
),
(
  'Arabic Mehndi',
  'arabic-mehndi',
  'Bold modern patterns with flowing vines and geometric designs. Our Arabic mehndi features contemporary styles with quick application and stunning results.',
  '₹300 onwards',
  '30-60 minutes',
  '["Bold modern patterns", "Custom designs", "Quick application", "Contemporary style", "Floral & geometric motifs", "Elegant finish"]',
  1,
  3,
  1
),
(
  'Baby Shower Mehandi',
  'baby-shower',
  'Delicate storytelling patterns for the special mom-to-be. Full coverage designs that are safe during pregnancy with beautiful traditional motifs.',
  '₹3100 onwards',
  '2-3 hours',
  '["Delicate storytelling patterns", "Full coverage", "Safe for pregnancy", "Special occasion design", "Traditional motifs", "Comfortable application"]',
  0,
  4,
  1
),
(
  'Karvachauth Special Mehandi',
  'karvachauth-special',
  'Traditional patterns for the auspicious Karva Chauth festival. Quick drying designs with traditional auspicious symbols.',
  '₹1500 onwards',
  '1-2 hours',
  '["Traditional patterns", "Auspicious designs", "Quick drying", "Festival special", "Cultural significance", "Beautiful finish"]',
  0,
  5,
  1
),
(
  'Designer Mehandi',
  'designer-mehndi',
  'Unique contemporary designs with fusion of traditional and modern styles. Personalized patterns that reflect your individual style.',
  '₹300 onwards',
  '30-90 minutes',
  '["Unique contemporary designs", "Fusion of styles", "Personalized patterns", "Modern elegance", "Creative artistry", "Trendy designs"]',
  1,
  6,
  1
);

-- Insert Testimonials
INSERT INTO testimonials (client_name, rating, review, event_type, is_featured, is_active, display_order) VALUES
(
  'Priya Sharma',
  5,
  'Shiv Kumar created the most beautiful bridal mehndi for my wedding! The intricate designs were stunning and lasted for weeks. His professionalism and attention to detail made my special day even more memorable. Highly recommended!',
  'Wedding',
  1,
  1,
  1
),
(
  'Anjali Verma',
  5,
  'Amazing Arabic mehndi designs! The bold patterns were exactly what I wanted for my sister''s sangeet. Quick application and beautiful results. Will definitely book again for future events.',
  'Sangeet',
  1,
  1,
  2
),
(
  'Neha Rajput',
  5,
  'Best mehndi artist in Jaipur! I got traditional Rajasthani mehndi for Karva Chauth and received so many compliments. The color was deep and rich. Thank you Shiv Kumar!',
  'Festival',
  1,
  1,
  3
),
(
  'Kavita Meena',
  5,
  'Excellent service for my baby shower! The designs were delicate and beautiful. Shiv Kumar was very patient and made sure I was comfortable throughout. The mehndi turned out gorgeous!',
  'Baby Shower',
  1,
  1,
  4
),
(
  'Ritu Agarwal',
  5,
  'I have been getting mehndi from Shiv Kumar for the past 5 years. Always consistent quality and beautiful designs. He understands exactly what I want and delivers perfectly every time.',
  'Regular Client',
  1,
  1,
  5
),
(
  'Pooja Jain',
  5,
  'The designer mehndi I got for my engagement was absolutely stunning! Modern yet traditional, exactly the fusion I was looking for. Highly skilled artist with great creativity.',
  'Engagement',
  0,
  1,
  6
);

-- Insert Blog Posts
INSERT INTO blogs (title, slug, excerpt, content, category, tags, meta_title, meta_description, author, is_published, published_at) VALUES
(
  'Top 10 Bridal Mehndi Designs for 2026',
  'top-10-bridal-mehndi-designs-2026',
  'Discover the most trending bridal mehndi designs for 2026. From traditional Rajasthani patterns to modern fusion styles, find the perfect design for your special day.',
  '<h2>Introduction</h2><p>Bridal mehndi is an essential part of Indian weddings, symbolizing love, prosperity, and good fortune. As we step into 2026, new trends are emerging while traditional designs continue to hold their charm.</p><h2>1. Traditional Rajasthani Bridal Mehndi</h2><p>The classic Rajasthani style features intricate patterns covering the entire hand and feet. These designs include peacocks, paisleys, and floral motifs that tell a story.</p><h2>2. Arabic Fusion Bridal Mehndi</h2><p>Bold Arabic patterns combined with traditional bridal elements create a stunning fusion look. Perfect for modern brides who want something unique.</p><h2>3. Minimalist Bridal Mehndi</h2><p>Less is more! Minimalist designs with clean lines and strategic placement are gaining popularity among contemporary brides.</p><h2>4. Full Coverage Bridal Mehndi</h2><p>For brides who love intricate details, full coverage designs extending up to the elbows and knees create a dramatic and traditional look.</p><h2>5. Geometric Bridal Patterns</h2><p>Modern geometric patterns mixed with traditional motifs offer a fresh take on bridal mehndi.</p><h2>Conclusion</h2><p>Choose a design that reflects your personality and complements your bridal outfit. Book your bridal mehndi appointment early to ensure availability!</p>',
  'Bridal',
  '["bridal mehndi", "wedding mehndi", "mehndi designs", "2026 trends", "Rajasthani mehndi"]',
  'Top 10 Bridal Mehndi Designs for 2026 | Shiv Kumar Mehandi Art',
  'Discover trending bridal mehndi designs for 2026. Traditional Rajasthani patterns, Arabic fusion, and modern styles by expert mehndi artist in Jaipur.',
  'Shiv Kumar',
  1,
  '2026-04-01 10:00:00'
),
(
  'How to Care for Your Mehndi: Tips for Long-Lasting Color',
  'mehndi-care-tips-long-lasting-color',
  'Learn the best practices to maintain your mehndi and achieve deep, long-lasting color. Expert tips from 15+ years of experience in mehndi artistry.',
  '<h2>Introduction</h2><p>Getting beautiful mehndi is just the first step. Proper care ensures your mehndi develops a deep, rich color that lasts for weeks.</p><h2>Before Application</h2><p><strong>1. Clean Your Skin:</strong> Wash hands and feet thoroughly with soap. Avoid applying oils or lotions before mehndi application.</p><p><strong>2. Exfoliate Gently:</strong> Light exfoliation removes dead skin cells, allowing better mehndi penetration.</p><h2>During Application</h2><p><strong>3. Stay Still:</strong> Avoid movement to prevent smudging. The application process requires patience.</p><p><strong>4. Keep Warm:</strong> Warmth helps mehndi develop better color. Sit in a warm room during application.</p><h2>After Application</h2><p><strong>5. Let It Dry Completely:</strong> Wait at least 6-8 hours before removing dried mehndi. Overnight is ideal.</p><p><strong>6. Apply Sugar-Lemon Mixture:</strong> Dab a mixture of sugar and lemon juice to keep mehndi moist and enhance color.</p><p><strong>7. Avoid Water:</strong> Don''t wash the area for at least 12 hours after removing dried mehndi.</p><p><strong>8. Apply Oil:</strong> After 12 hours, apply mustard oil or coconut oil to protect the design and enhance color.</p><h2>Maintenance Tips</h2><p><strong>9. Avoid Chlorine:</strong> Stay away from swimming pools and harsh chemicals.</p><p><strong>10. Moisturize Regularly:</strong> Keep the area moisturized with natural oils to prevent fading.</p><h2>Conclusion</h2><p>Following these simple tips will help your mehndi achieve a beautiful dark color that lasts 2-3 weeks. For best results, always choose natural henna from experienced artists.</p>',
  'Tips & Care',
  '["mehndi care", "henna tips", "long lasting mehndi", "mehndi color", "henna aftercare"]',
  'Mehndi Care Tips: How to Get Long-Lasting Dark Color | Expert Guide',
  'Learn expert tips for mehndi care and maintenance. Get deep, long-lasting color with proper aftercare techniques from professional mehndi artist.',
  'Shiv Kumar',
  1,
  '2026-04-10 14:30:00'
),
(
  'Arabic Mehndi vs Traditional Mehndi: Which Style is Right for You?',
  'arabic-vs-traditional-mehndi-style-guide',
  'Confused between Arabic and traditional mehndi styles? This comprehensive guide helps you choose the perfect mehndi design for your occasion.',
  '<h2>Introduction</h2><p>Choosing between Arabic and traditional mehndi can be challenging. Both styles have their unique beauty and charm. Let''s explore the differences to help you decide.</p><h2>Traditional Mehndi</h2><p><strong>Characteristics:</strong></p><ul><li>Dense, intricate patterns</li><li>Full coverage designs</li><li>Includes peacocks, paisleys, and floral motifs</li><li>Symmetrical patterns</li><li>Takes longer to apply (2-4 hours)</li></ul><p><strong>Best For:</strong> Weddings, traditional ceremonies, brides who love detailed work</p><h2>Arabic Mehndi</h2><p><strong>Characteristics:</strong></p><ul><li>Bold, flowing patterns</li><li>More open space</li><li>Floral vines and geometric designs</li><li>Asymmetrical patterns</li><li>Quicker application (30-90 minutes)</li></ul><p><strong>Best For:</strong> Modern events, parties, those who prefer contemporary styles</p><h2>Which Should You Choose?</h2><p><strong>Choose Traditional If:</strong></p><ul><li>You''re a bride wanting full coverage</li><li>You love intricate, detailed work</li><li>You prefer symmetrical designs</li><li>You have time for longer application</li></ul><p><strong>Choose Arabic If:</strong></p><ul><li>You want a modern, bold look</li><li>You prefer quicker application</li><li>You like flowing, organic patterns</li><li>You want something contemporary</li></ul><h2>Fusion Style</h2><p>Can''t decide? Try a fusion of both! Combine the intricate details of traditional mehndi with the bold strokes of Arabic style for a unique look.</p><h2>Conclusion</h2><p>Both styles are beautiful in their own way. Consider your occasion, outfit, and personal preference when choosing. Our expert artists can create any style or fusion design you desire!</p>',
  'Design Guide',
  '["arabic mehndi", "traditional mehndi", "mehndi styles", "design guide", "mehndi comparison"]',
  'Arabic vs Traditional Mehndi: Complete Style Guide | Choose Your Design',
  'Compare Arabic and traditional mehndi styles. Learn the differences, characteristics, and which design is perfect for your occasion.',
  'Shiv Kumar',
  1,
  '2026-04-15 11:00:00'
);

-- Verify insertions
SELECT 'Services' as table_name, COUNT(*) as count FROM services
UNION ALL
SELECT 'Testimonials', COUNT(*) FROM testimonials
UNION ALL
SELECT 'Blogs', COUNT(*) FROM blogs;
