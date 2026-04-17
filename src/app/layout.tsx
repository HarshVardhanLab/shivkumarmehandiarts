import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import FloatingElements from '@/components/floating/FloatingElements'
import ChatbotWidget from '@/components/floating/ChatbotWidget'
import ToasterProvider from '@/components/providers/ToasterProvider'

export const metadata: Metadata = {
  metadataBase: new URL('https://shivkumarmehandiart.com'),
  title: {
    default: 'Shiv Kumar Mehandi Art | Best Mehndi Artist in Jaipur',
    template: '%s | Shiv Kumar Mehandi Art',
  },
  description: 'Professional mehndi artist in Jaipur with 15+ years experience. Specializing in Bridal Mehndi, Arabic Mehndi, and festival designs. Book your appointment today!',
  keywords: ['bridal mehndi jaipur', 'mehandi artist near me', 'arabic mehndi design', 'wedding mehndi', 'henna artist jaipur', 'rajasthani mehndi'],
  authors: [{ name: 'Shiv Kumar' }],
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://shivkumarmehandiart.com',
    siteName: 'Shiv Kumar Mehandi Art',
    title: 'Shiv Kumar Mehandi Art | Best Mehndi Artist in Jaipur',
    description: 'Where tradition meets artistry. 15+ years of experience, 5000+ brides served.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shiv Kumar Mehandi Art',
    description: 'Best Mehndi Artist in Jaipur | Bridal & Arabic Mehndi',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;0,800;1,400&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600;9..40,700&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Shiv Kumar Mehandi Art",
              "description": "Professional mehndi artist in Jaipur specializing in Bridal, Arabic, and Festival mehndi",
              "url": "https://shivkumarmehandiart.com",
              "telephone": "+91-8058168076",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Shop No. 46, Shopping Center, Jawahar Nagar",
                "addressLocality": "Jaipur",
                "addressRegion": "Rajasthan",
                "postalCode": "302004",
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 28.8386,
                "longitude": 78.7733
              },
              "openingHoursSpecification": [
                { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], "opens": "09:00", "closes": "20:00" }
              ],
              "priceRange": "₹₹",
              "image": "https://shivkumarmehandiart.com/og-image.jpg",
              "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "320" }
            })
          }}
        />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingElements />
        <ChatbotWidget />
        <ToasterProvider />
      </body>
    </html>
  )
}
