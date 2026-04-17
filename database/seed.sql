-- Sample data for Shiv Kumar Mehandi Art website

-- Insert sample services
INSERT INTO services (title, slug, description, price_range, duration, features, is_popular, display_order, is_active) VALUES
('Bridal Mehndi', 'bridal-mehndi', 'Intricate traditional patterns spanning from fingertips to elbows, customized for your most special day. Our bridal mehndi designs blend traditional Rajasthani motifs with modern elegance.', '₹6,100+', '3-4 hours', '["Full hand & arm coverage", "Intricate traditional patterns", "Customized designs", "Premium quality henna", "Dark & long-lasting color", "Complimentary touch-ups"]', TRUE, 1, TRUE),
('Arabic Mehndi', 'arabic-mehndi', 'Bold floral vines and geometric spaces that highlight the natural grace of your hands. Perfect for those who prefer contemporary and elegant designs.', '₹300+', '30-60 min', '["Bold floral patterns", "Geometric designs", "Quick application", "Modern & elegant", "Perfect for all occasions"]', TRUE, 2, TRUE),
('Festival Special', 'festival-special', 'Perfect designs for Karwa Chauth, Teej, Diwali, and Eid celebrations. Traditional motifs that celebrate Indian festivals.', '₹200+', '20-45 min', '["Traditional festival motifs", "Quick & beautiful", "Affordable pricing", "Perfect for celebrations"]', FALSE, 3, TRUE),
('Baby Shower Mehndi', 'baby-shower', 'Delicate and beautiful designs perfect for celebrating the arrival of your little one. Gentle application with natural henna.', '₹500+', '45-60 min', ["Gentle application", "Natural henna", "Beautiful designs", "Safe for expecting mothers"]', FALSE, 4, TRUE),
('Corporate Events', 'corporate-events', 'Professional mehndi services for corporate events, product launches, and brand activations. Bulk bookings available.', 'Custom Quote', 'Varies', '["Bulk bookings", "Professional service", "Flexible timing", "Custom designs"]', FALSE, 5, TRUE),
('Engagement Mehndi', 'engagement-mehndi', 'Beautiful designs for your engagement ceremony. Semi-bridal patterns that are elegant yet not too heavy.', '₹2,000+', '1-2 hours', '["Semi-bridal designs", "Elegant patterns", "Perfect for engagement", "Customizable"]', FALSE, 6, TRUE);

-- Insert sample gallery images (using placeholder descriptions)
INSERT INTO gallery (title, description, image_url, category, is_featured, display_order, is_active) VALUES
('Bridal Full Hand Design', 'Intricate bridal mehndi with traditional Rajasthani motifs', 'https://res.cloudinary.com/dxhsqosdt/image/upload/v1/gallery/bridal-1', 'bridal', TRUE, 1, TRUE),
('Arabic Floral Pattern', 'Bold Arabic mehndi with flowing floral vines', 'https://res.cloudinary.com/dxhsqosdt/image/upload/v1/gallery/arabic-1', 'arabic', TRUE, 2, TRUE),
('Traditional Rajasthani', 'Classic Rajasthani bridal mehndi design', 'https://res.cloudinary.com/dxhsqosdt/image/upload/v1/gallery/traditional-1', 'traditional', TRUE, 3, TRUE),
('Modern Minimalist', 'Contemporary minimalist mehndi design', 'https://res.cloudinary.com/dxhsqosdt/image/upload/v1/gallery/modern-1', 'modern', FALSE, 4, TRUE),
('Festival Special', 'Beautiful festival mehndi for Karwa Chauth', 'https://res.cloudinary.com/dxhsqosdt/image/upload/v1/gallery/festival-1', 'festival', FALSE, 5, TRUE),
('Bridal Feet Design', 'Elegant bridal feet mehndi pattern', 'https://res.cloudinary.com/dxhsqosdt/image/upload/v1/gallery/bridal-feet-1', 'bridal', FALSE, 6, TRUE);

-- Insert sample blog posts
INSERT INTO blogs (title, slug, excerpt, content, category, tags, meta_title, meta_description, author, is_published, published_at) VALUES
('10 Must-Try Bridal Mehndi Patterns for 2024', 'bridal-mehndi-patterns-2024', 
'Discover the top trending bridal mehndi patterns that every bride is requesting this season, from intricate Rajasthani to elegant Arabic fusions.', 
'<h2>Introduction</h2><p>Bridal mehndi is an essential part of Indian weddings, and 2024 brings exciting new trends...</p><h2>1. Traditional Rajasthani Patterns</h2><p>The timeless beauty of Rajasthani mehndi never goes out of style...</p>', 
'Bridal', '["bridal", "mehndi patterns", "wedding", "2024 trends"]', 
'10 Must-Try Bridal Mehndi Patterns for 2024 | Shiv Kumar Mehandi Art', 
'Explore the latest bridal mehndi patterns for 2024. From traditional Rajasthani to modern Arabic fusion designs.', 
'Shiv Kumar', TRUE, NOW()),

('Arabic Mehndi: A Beginner\'s Guide', 'arabic-mehndi-beginners-guide', 
'Learn the fundamental techniques behind Arabic mehndi — from the flowing vines to the bold geometric spaces that define this popular style.', 
'<h2>What is Arabic Mehndi?</h2><p>Arabic mehndi is characterized by its bold, flowing patterns and generous use of negative space...</p>', 
'Tutorial', '["arabic mehndi", "tutorial", "beginners guide"]', 
'Arabic Mehndi: A Beginner\'s Guide | Learn Mehndi Art', 
'Complete beginner\'s guide to Arabic mehndi. Learn techniques, patterns, and tips for creating beautiful Arabic henna designs.', 
'Shiv Kumar', TRUE, NOW()),

('Karwa Chauth Mehndi Special: Traditional Motifs', 'karwa-chauth-mehndi-special', 
'Karwa Chauth calls for the most meaningful mehndi! Explore traditional motifs like the moon, stars, and loving couples.', 
'<h2>Significance of Karwa Chauth Mehndi</h2><p>Karwa Chauth is a beautiful festival celebrating marital bliss...</p>', 
'Festival', '["karwa chauth", "festival", "traditional mehndi"]', 
'Karwa Chauth Mehndi Special | Traditional Designs', 
'Beautiful Karwa Chauth mehndi designs with traditional motifs. Book your appointment for this special festival.', 
'Shiv Kumar', TRUE, NOW());

-- Insert sample testimonials
INSERT INTO testimonials (client_name, rating, review, event_type, is_featured, is_active, display_order) VALUES
('Priya Agarwal', 5, 'Shiv Kumar\'s work is pure magic. The color was so dark and the detail was unbelievable. Every guest at my wedding was asking about my artist! I\'ll never go to anyone else.', 'Wedding', TRUE, TRUE, 1),
('Riya Kapoor', 5, 'His patience is remarkable. He spent 6 hours on my bridal mehndi and the result was a masterpiece. The design was exactly as I had imagined. Highly recommended!', 'Wedding', TRUE, TRUE, 2),
('Sneha Sharma', 5, 'I\'ve been getting mehndi done by Shiv Kumar ji for 4 years now. His Arabic designs are to die for! Always fresh paste, great color, and such a calm atmosphere.', 'Karwa Chauth', TRUE, TRUE, 3),
('Anjali Verma', 5, 'Best mehndi artist in Jaipur! The bridal mehndi was absolutely stunning and lasted for over 2 weeks. Professional, punctual, and very talented.', 'Wedding', FALSE, TRUE, 4),
('Kavita Singh', 5, 'Amazing experience! The designs were intricate and beautiful. Shiv Kumar ji is very patient and makes sure you\'re comfortable throughout.', 'Engagement', FALSE, TRUE, 5);
