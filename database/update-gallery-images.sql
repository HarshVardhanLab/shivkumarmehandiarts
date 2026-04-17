-- Update Gallery with Real Cloudinary Images
-- Run this after schema.sql to populate gallery with actual images

-- Clear existing gallery data
TRUNCATE TABLE gallery;

-- Insert Bridal Mehndi Designs (8 Images)
INSERT INTO gallery (title, description, image_url, cloudinary_id, category, is_featured, display_order, is_active) VALUES
('Bridal Mehndi Design 1', 'Intricate traditional bridal mehndi with detailed patterns', 'https://res.cloudinary.com/dzsd7h9cl/image/upload/v1711884272/MehandiImage0001_cpb6n0.jpg', 'MehandiImage0001_cpb6n0', 'bridal', TRUE, 1, TRUE),
('Bridal Mehndi Design 2', 'Elegant bridal henna design with floral motifs', 'https://res.cloudinary.com/dzsd7h9cl/image/upload/v1711884272/MehandiImage0002_uel2aw.jpg', 'MehandiImage0002_uel2aw', 'bridal', TRUE, 2, TRUE),
('Bridal Mehndi Design 3', 'Beautiful bridal mehndi for wedding ceremony', 'https://res.cloudinary.com/dzsd7h9cl/image/upload/v1711884277/MehandiImage0006_q1qftz.jpg', 'MehandiImage0006_q1qftz', 'bridal', TRUE, 3, TRUE),
('Bridal Mehndi Design 4', 'Exquisite bridal henna with peacock motifs', 'https://res.cloudinary.com/dzsd7h9cl/image/upload/v1711884282/MehandiImage0009_yufxsf.jpg', 'MehandiImage0009_yufxsf', 'bridal', FALSE, 4, TRUE),
('Bridal Design 5', 'Full hand bridal mehndi with intricate details', 'https://res.cloudinary.com/dzsd7h9cl/image/upload/v1711884286/MehandiImage0012_vldorj.jpg', 'MehandiImage0012_vldorj', 'bridal', FALSE, 5, TRUE),
('Bridal Mehndi 6', 'Stunning bridal mehndi for special occasions', 'https://res.cloudinary.com/dzsd7h9cl/image/upload/v1711884293/MehandiImage0018_aato9m.jpg', 'MehandiImage0018_aato9m', 'bridal', FALSE, 6, TRUE),
('Bridal Design 7', 'Magnificent bridal mehndi with traditional elements', 'https://res.cloudinary.com/dzsd7h9cl/image/upload/v1711884299/MehandiImage0023_ebluzt.jpg', 'MehandiImage0023_ebluzt', 'bridal', FALSE, 7, TRUE),

-- Insert Arabic Mehndi Designs (5 Images)
('Arabic Mehndi Design 1', 'Bold Arabic mehndi with flowing patterns', 'https://res.cloudinary.com/dzsd7h9cl/image/upload/v1711884274/MehandiImage0003_tmxxpr.jpg', 'MehandiImage0003_tmxxpr', 'arabic', TRUE, 8, TRUE),
('Arabic Design 2', 'Stunning Arabic mehndi with bold strokes', 'https://res.cloudinary.com/dzsd7h9cl/image/upload/v1711884279/MehandiImage0007_rexl4w.jpg', 'MehandiImage0007_rexl4w', 'arabic', FALSE, 9, TRUE),
('Arabic Mehndi 3', 'Elegant Arabic design with floral elements', 'https://res.cloudinary.com/dzsd7h9cl/image/upload/v1711884284/MehandiImage0011_mufw6o.jpg', 'MehandiImage0011_mufw6o', 'arabic', FALSE, 10, TRUE),
('Arabic Design 4', 'Bold Arabic mehndi with geometric patterns', 'https://res.cloudinary.com/dzsd7h9cl/image/upload/v1711884291/MehandiImage0017_nrzygj.jpg', 'MehandiImage0017_nrzygj', 'arabic', FALSE, 11, TRUE),
('Arabic Mehndi 5', 'Graceful Arabic mehndi with delicate patterns', 'https://res.cloudinary.com/dzsd7h9cl/image/upload/v1711884298/MehandiImage0022_r0ynah.jpg', 'MehandiImage0022_r0ynah', 'arabic', FALSE, 12, TRUE),

-- Insert Traditional Designs (5 Images)
('Traditional Design 1', 'Classic traditional mehndi pattern', 'https://res.cloudinary.com/dzsd7h9cl/image/upload/v1711884275/MehandiImage0004_splza0.jpg', 'MehandiImage0004_splza0', 'traditional', TRUE, 13, TRUE),
('Traditional Pattern 2', 'Intricate traditional Rajasthani mehndi', 'https://res.cloudinary.com/dzsd7h9cl/image/upload/v1711884280/MehandiImage0008_y7z5fv.jpg', 'MehandiImage0008_y7z5fv', 'traditional', FALSE, 14, TRUE),
('Traditional Mehndi 3', 'Classic Indian mehndi design', 'https://res.cloudinary.com/dzsd7h9cl/image/upload/v1711884287/MehandiImage0013_r8pexu.jpg', 'MehandiImage0013_r8pexu', 'traditional', FALSE, 15, TRUE),
('Traditional Design 4', 'Authentic traditional mehndi pattern', 'https://res.cloudinary.com/dzsd7h9cl/image/upload/v1711884293/MehandiImage0019_aaqduh.jpg', 'MehandiImage0019_aaqduh', 'traditional', FALSE, 16, TRUE),
('Traditional Mehndi 5', 'Beautiful traditional Rajasthani design', 'https://res.cloudinary.com/dzsd7h9cl/image/upload/v1711884301/MehandiImage0024_jiirui.jpg', 'MehandiImage0024_jiirui', 'traditional', FALSE, 17, TRUE),

-- Insert Modern/Designer Designs (5 Images)
('Designer Mehndi 1', 'Modern designer mehndi with unique patterns', 'https://res.cloudinary.com/dzsd7h9cl/image/upload/v1711884276/MehandiImage0005_pkj1lq.jpg', 'MehandiImage0005_pkj1lq', 'modern', TRUE, 18, TRUE),
('Designer Mehndi 2', 'Contemporary designer mehndi pattern', 'https://res.cloudinary.com/dzsd7h9cl/image/upload/v1711884283/MehandiImage0010_hdmxyd.jpg', 'MehandiImage0010_hdmxyd', 'modern', FALSE, 19, TRUE),
('Designer Pattern 3', 'Unique designer mehndi with modern touch', 'https://res.cloudinary.com/dzsd7h9cl/image/upload/v1711884290/MehandiImage0015_l3a8jt.jpg', 'MehandiImage0015_l3a8jt', 'modern', FALSE, 20, TRUE),
('Designer Mehndi 4', 'Creative designer mehndi with fusion style', 'https://res.cloudinary.com/dzsd7h9cl/image/upload/v1711884296/MehandiImage0021_vhro1g.jpg', 'MehandiImage0021_vhro1g', 'modern', FALSE, 21, TRUE),
('Designer Pattern 5', 'Trendy designer mehndi for modern brides', 'https://res.cloudinary.com/dzsd7h9cl/image/upload/v1711884302/MehandiImage0025_jv8zua.jpg', 'MehandiImage0025_jv8zua', 'modern', FALSE, 22, TRUE),

-- Insert Festival Designs (3 Images)
('Festival Mehndi 1', 'Beautiful festival mehndi design', 'https://res.cloudinary.com/dzsd7h9cl/image/upload/v1711884289/MehandiImage0014_ayja1l.jpg', 'MehandiImage0014_ayja1l', 'festival', FALSE, 23, TRUE),
('Festival Design 2', 'Festive mehndi design for celebrations', 'https://res.cloudinary.com/dzsd7h9cl/image/upload/v1711884297/MehandiImage0020_mlxty5.jpg', 'MehandiImage0020_mlxty5', 'festival', FALSE, 24, TRUE),
('Festival Mehndi 3', 'Elegant festival mehndi design', 'https://res.cloudinary.com/dzsd7h9cl/image/upload/v1711884303/MehandiImage0026_ezlvw2.jpg', 'MehandiImage0026_ezlvw2', 'festival', FALSE, 25, TRUE);

-- Verify the data
SELECT category, COUNT(*) as count FROM gallery GROUP BY category;
SELECT * FROM gallery WHERE is_featured = TRUE;
