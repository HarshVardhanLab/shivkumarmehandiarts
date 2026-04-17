import type { Metadata } from 'next'
import HeroSection from '@/components/sections/HeroSection'
import ServicesPreview from '@/components/sections/ServicesPreview'
import FeaturedWorks from '@/components/sections/FeaturedWorks'
import TestimonialsSection from '@/components/sections/TestimonialsSection'
import BlogPreview from '@/components/sections/BlogPreview'
import StatsSection from '@/components/sections/StatsSection'
import BookingCTA from '@/components/sections/BookingCTA'

export const metadata: Metadata = {
  title: 'Shiv Kumar Mehandi Art | Best Mehndi Artist in Jaipur',
  description: 'Award-winning mehndi artist in Jaipur with 15+ years experience. Specializing in Bridal, Arabic & Festival mehndi designs. Book your appointment today!',
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <ServicesPreview />
      <FeaturedWorks />
      <TestimonialsSection />
      <BlogPreview />
      <BookingCTA />
    </>
  )
}
