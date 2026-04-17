-- Seed Gallery with All 25 Cloudinary Images
-- Run this after importing schema.sql

-- Clear existing gallery
TRUNCATE TABLE gallery;

-- Insert all 25 gallery images from Cloudinary
INSERT INTO gallery (title, description, image_url, cloudinary_id, category, is_featured, display_order, is_active) VALUES
('Bridal Mehndi Design 1', 'Intricate traditional bridal mehndi with detailed patterns', 'https://res.cloudinary.com/dzsd7h9cl/image/upload/v1711884272/MehandiImage0001_cpb6n0.jpg', 'MehandiImage0001_cpb6n0', 'bridal', 1, 1, 1),
('Bridal Mehndi Design 2', 'Elegant bridal henna design with floral motifs', 'https://res.cloudinary.com/dzsd7h9cl/image/upload/v1711884272/MehandiImage0002_uel2aw.jpg', 'MehandiImage0002_uel2aw', 'bridal', 1, 2, 1),
('Arabic Mehndi Design 1', 'Bold Arabic mehndi with flowing patterns', 'https://res.cloudinary.com/dzsd7h9cl/image/upload/v1711884274/MehandiImage0003_tmxxpr.jpg', 'MehandiImage0003_tmxxpr', 'arabic', 1, 3, 1),
('Traditional Design 1', 'Classic traditional mehndi pattern', 'https://res.cloudinary.com/dzsd7h9cl/image/upload/v1711884275/MehandiImage0004_splza0.jpg', 'MehandiImage0004_splza0', 'traditional', 1, 4, 1),
('Designer Mehndi 1', 'Modern designer mehndi with unique patterns', 'https://res.cloudinary.com/dzsd7h9cl/image/upload/v1711884276/MehandiImage0005_pkj1lq.jpg', 'MehandiImage0005_pkj1lq', 'modern', 1, 5, 1),
('Bridal Mehndi Design 3', 'Beautiful bridal mehndi for wedding ceremony', 'https://res.cloudinary.com/dzsd7h9cl/image/upload/v1711884277/MehandiImage0006_q1qftz.jpg', 'MehandiImage0006_q1qftz', 'bridal', 1, 6, 1),
('Arabic Design 2', 'Stunning Arabic mehndi with bold strokes', 'https://res.cloudinary.com/dzsd7h9cl/image/upload/v1711884279/MehandiImage0007_rexl4w.jpg', 'MehandiImage0007_rexl4w', 'arabic', 0, 7, 1),
('Traditional Pattern 2', 'Intricate traditional Rajasthani mehndi', 'https://res.cloudinary.com/dzsd7h9cl/image/upload/v1711884280/MehandiImage0008_y7z5fv.jpg', 'MehandiImage0008_y7z5fv', 'traditional', 0, 8, 1),
('Bridal Mehndi Design 4', 'Exquisite bridal henna with peacock motifs', 'https://res.cloudinary.com/dzsd7h9cl/image/upload/v1711884282/MehandiImage0009_yufxsf.jpg', 'MehandiImage0009_yufxsf', 'bridal', 0, 9, 1),
('Designer Mehndi 2', 'Contemporary designer mehndi pattern', 'https://res.cloudinary.com/dzsd7h9cl/image/upload/v1711884283/MehandiImage0010_hdmxyd.jpg', 'MehandiImage0010_hdmxyd', 'modern', 0, 10, 1),
('Arabic Mehndi 3', 'Elegant Arabic design with floral elements', 'https://res.cloudinary.com/dzsd7h9cl/image/upload/v1711884284/MehandiImage0011_mufw6o.jpg', 'MehandiImage0011_mufw6o', 'arabic', 0, 11, 1),
('Bridal Design 5', 'Full hand bridal mehndi with intricate details', 'https://res.cloudinary.com/dzsd7h9cl/image/upload/v1711884286/MehandiImage0012_vldorj.jpg', 'MehandiImage0012_vldorj', 'bridal', 0, 12, 1),
('Traditional Mehndi 3', 'Classic Indian mehndi design', 'https://res.cloudinary.com/dzsd7h9cl/image/upload/v1711884287/MehandiImage0013_r8pexu.jpg', 'MehandiImage0013_r8pexu', 'traditional', 0, 13, 1),
('Festival Mehndi 1', 'Beautiful festival mehndi design', 'https://res.cloudinary.com/dzsd7h9cl/image/upload/v1711884289/MehandiImage0014_ayja1l.jpg', 'MehandiImage0014_ayja1l', 'festival', 0, 14, 1),
('Designer Pattern 3', 'Unique designer mehndi with modern touch', 'https://res.cloudinary.com/dzsd7h9cl/image/upload/v1711884290/MehandiImage0015_l3a8jt.jpg', 'MehandiImage0015_l3a8jt', 'modern', 0, 15, 1),
('Arabic Design 4', 'Bold Arabic mehndi with geometric patterns', 'https://res.cloudinary.com/dzsd7h9cl/image/upload/v1711884291/MehandiImage0017_nrzygj.jpg', 'MehandiImage0017_nrzygj', 'arabic', 0, 16, 1),
('Bridal Mehndi 6', 'Stunning bridal mehndi for special occasions', 'https://res.cloudinary.com/dzsd7h9cl/image/upload/v1711884293/MehandiImage0018_aato9m.jpg', 'MehandiImage0018_aato9m', 'bridal', 0, 17, 1),
('Traditional Design 4', 'Authentic traditional mehndi pattern', 'https://res.cloudinary.com/dzsd7h9cl/image/upload/v1711884293/MehandiImage0019_aaqduh.jpg', 'MehandiImage0019_aaqduh', 'traditional', 0, 18, 1),
('Festival Design 2', 'Festive mehndi design for celebrations', 'https://res.cloudinary.com/dzsd7h9cl/image/upload/v1711884297/MehandiImage0020_mlxty5.jpg', 'MehandiImage0020_mlxty5', 'festival', 0, 20, 1),
('Designer Mehndi 4', 'Creative designer mehndi with fusion style', 'https://res.cloudinary.com/dzsd7h9cl/image/upload/v1711884296/MehandiImage0021_vhro1g.jpg', 'MehandiImage0021_vhro1g', 'modern', 0, 19, 1),
('Arabic Mehndi 5', 'Graceful Arabic mehndi with delicate patterns', 'https://res.cloudinary.com/dzsd7h9cl/image/upload/v1711884298/MehandiImage0022_r0ynah.jpg', 'MehandiImage0022_r0ynah', 'arabic', 0, 21, 1),
('Bridal Design 7', 'Magnificent bridal mehndi with traditional elements', 'https://res.cloudinary.com/dzsd7h9cl/image/upload/v1711884299/MehandiImage0023_ebluzt.jpg', 'MehandiImage0023_ebluzt', 'bridal', 0, 22, 1),
('Traditional Mehndi 5', 'Beautiful traditional Rajasthani design', 'https://res.cloudinary.com/dzsd7h9cl/image/upload/v1711884301/MehandiImage0024_jiirui.jpg', 'MehandiImage0024_jiirui', 'traditional', 0, 23, 1),
('Designer Pattern 5', 'Trendy designer mehndi for modern brides', 'https://res.cloudinary.com/dzsd7h9cl/image/upload/v1711884302/MehandiImage0025_jv8zua.jpg', 'MehandiImage0025_jv8zua', 'modern', 0, 24, 1),
('Festival Mehndi 3', 'Elegant festival mehndi design', 'https://res.cloudinary.com/dzsd7h9cl/image/upload/v1711884303/MehandiImage0026_ezlvw2.jpg', 'MehandiImage0026_ezlvw2', 'festival', 0, 25, 1);

-- Verify insertion
SELECT COUNT(*) as total_images FROM gallery;
SELECT category, COUNT(*) as count FROM gallery GROUP BY category;
SELECT * FROM gallery WHERE is_featured = 1;
