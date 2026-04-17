# Shiv Kumar Mehandi Art - Website

Professional mehndi artist portfolio and booking website built with Next.js 14, TypeScript, and MySQL.

## 🌟 Features

- **Dynamic Gallery**: 25+ mehndi designs from database with category filtering
- **Service Showcase**: 6 professional services with pricing and details
- **Online Booking**: Multi-step appointment booking form
- **Contact System**: Contact form with email notifications
- **Blog Section**: 3 blog posts about mehndi art and trends
- **Testimonials**: Customer reviews and ratings
- **Mobile Optimized**: Responsive design with mobile-first approach
- **SEO Optimized**: Meta tags, structured data, and sitemap
- **Performance**: Next.js Image optimization, lazy loading, code splitting

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Database**: MySQL 8.0+
- **Image CDN**: Cloudinary
- **Icons**: FontAwesome + Lucide React
- **Forms**: React Hook Form
- **Animations**: Framer Motion
- **Deployment**: Vercel

## 📋 Prerequisites

- Node.js 18+ 
- MySQL 8.0+
- npm or yarn
- Cloudinary account

## 🚀 Quick Start

### 1. Clone and Install

```bash
cd webapp
npm install
```

### 2. Environment Setup

Copy `.env.example` to `.env.local` and fill in your credentials:

```bash
cp .env.example .env.local
```

Required variables:
- Database credentials (MySQL)
- Cloudinary credentials
- Business contact information

### 3. Database Setup

```bash
# Create database
mysql -u root -p -e "CREATE DATABASE shivkumar_mehndi"

# Import schema
mysql -u root -p shivkumar_mehndi < database/schema.sql

# Import business data
mysql -u root -p shivkumar_mehndi < database/business-data.sql

# Import gallery images
mysql -u root -p shivkumar_mehndi < database/gallery-all-images.sql
```

### 4. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### 5. Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
webapp/
├── src/
│   ├── app/                    # Next.js 14 App Router
│   │   ├── page.tsx           # Homepage
│   │   ├── gallery/           # Gallery page
│   │   ├── mehndi-designs/    # Designs showcase
│   │   ├── services/          # Services page
│   │   ├── about/             # About page
│   │   ├── contact/           # Contact page
│   │   ├── book/              # Booking page
│   │   ├── blog/              # Blog pages
│   │   └── api/               # API routes
│   ├── components/
│   │   ├── layout/            # Header, Footer
│   │   ├── sections/          # Page sections
│   │   └── floating/          # WhatsApp, Chatbot
│   ├── lib/
│   │   ├── db.ts              # Database connection
│   │   └── constants.ts       # Business constants
│   └── styles/
│       └── globals.css        # Global styles
├── database/                   # SQL files
├── public/                     # Static assets
├── .env.local                 # Environment variables
├── .env.example               # Example env file
├── vercel.json                # Vercel config
├── DEPLOYMENT.md              # Deployment guide
└── package.json               # Dependencies
```

## 🗄️ Database Schema

### Tables

1. **gallery** - Mehndi design images (25 images)
2. **services** - Service offerings (6 services)
3. **testimonials** - Customer reviews (6 testimonials)
4. **blogs** - Blog posts (3 posts)
5. **bookings** - Appointment requests
6. **contacts** - Contact form submissions

## 🎨 Design System

### Colors
- Primary Green: `#1a4d2e` (Mehndi Green)
- Secondary Brown: `#8b4513` (Mehndi Brown)
- Accent Gold: `#d4af37` (Mehndi Gold)
- Background: `#fffff0` (Ivory)

### Typography
- Headings: Playfair Display (Serif)
- Body: Inter (Sans-serif)

### Components
- Cards with shadows and hover effects
- Gradient backgrounds
- Rounded corners (12px-24px)
- Smooth transitions (300ms)

## 📱 Pages

1. **Homepage** (`/`) - Hero, services preview, featured works, testimonials
2. **Gallery** (`/gallery`) - All mehndi designs with filtering
3. **Designs** (`/mehndi-designs`) - Categorized design showcase
4. **Services** (`/services`) - Service details with pricing
5. **About** (`/about`) - Artist story and credentials
6. **Contact** (`/contact`) - Contact form and information
7. **Book** (`/book`) - Multi-step booking form
8. **Blog** (`/blog`) - Blog listing and individual posts
9. **FAQ** (`/faq`) - Frequently asked questions
10. **Reviews** (`/reviews`) - Customer testimonials

## 🔌 API Routes

- `GET /api/gallery` - Fetch gallery images
- `GET /api/services` - Fetch services
- `GET /api/testimonials` - Fetch testimonials
- `GET /api/blogs` - Fetch blog posts
- `POST /api/book` - Submit booking
- `POST /api/contact` - Submit contact form
- `POST /api/chat` - Chatbot responses

## 🚀 Deployment

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed deployment instructions.

### Quick Deploy to Vercel

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel --prod
```

### Environment Variables for Production

Set these in Vercel Dashboard:
- Database credentials
- Cloudinary credentials
- Business information
- Site URL

## 🧪 Testing

```bash
# Build test
npm run build

# Lint
npm run lint

# Type check
npx tsc --noEmit
```

## 📊 Performance

- Lighthouse Score: 90+
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3s
- Image Optimization: Next.js Image + Cloudinary
- Code Splitting: Automatic (Next.js)

## 🔒 Security

- Environment variables for sensitive data
- SQL injection prevention (parameterized queries)
- XSS protection (React default)
- HTTPS enforced (Vercel)
- CORS configured
- Rate limiting on API routes

## 📈 SEO

- Meta tags on all pages
- Open Graph tags
- Twitter Card tags
- Structured data (JSON-LD)
- Sitemap.xml
- Robots.txt
- Google Site Verification

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📞 Business Information

- **Business**: Shiv Kumar Mehandi Art
- **Location**: Shop No. 46, Jawahar Nagar, Jaipur, Rajasthan - 302004
- **Phone**: +91 8058168076
- **Email**: shivkumarmehandi9419@gmail.com
- **WhatsApp**: +91 8058168076
- **Hours**: Open 24×7

## 🤝 Contributing

This is a private business website. For issues or suggestions, contact the developer.

## 📄 License

Private - All rights reserved by Shiv Kumar Mehandi Art

## 🙏 Credits

- **Developer**: [Your Name]
- **Business Owner**: Shiv Kumar
- **Images**: Cloudinary
- **Icons**: FontAwesome, Lucide React
- **Framework**: Next.js by Vercel

## 📞 Support

For technical support or questions:
- Email: shivkumarmehandi9419@gmail.com
- Phone: +91 8058168076

---

**Version**: 1.0.0  
**Last Updated**: April 2026  
**Status**: Production Ready ✅
