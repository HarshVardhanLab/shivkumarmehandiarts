'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ChevronRight } from 'lucide-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpa } from '@fortawesome/free-solid-svg-icons'

const slides = [
  {
    id: 1,
    title: 'Bridal Mehndi',
    subtitle: 'Traditional storytelling patterns for your big day',
    bg: 'from-primary via-primary-container to-primary-forest',
    cta: { label: 'Book Bridal', href: '/bridal-mehndi' },
  },
  {
    id: 2,
    title: 'Arabic Mehndi',
    subtitle: 'Bold floral vines and geometric elegance',
    bg: 'from-[#2d1a00] via-[#4f2100] to-[#3d2800]',
    cta: { label: 'Explore Arabic', href: '/arabic-mehndi' },
  },
  {
    id: 3,
    title: 'Festival Specials',
    subtitle: 'Celebrate every occasion with traditional art',
    bg: 'from-primary-container via-primary to-[#1a4d2e]',
    cta: { label: 'View All Services', href: '/services' },
  },
]

interface GalleryImage {
  id: number
  title: string
  image_url: string
  category: string
}

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [featuredImages, setFeaturedImages] = useState<GalleryImage[]>([])

  // Fetch featured images for carousel background
  useEffect(() => {
    const fetchFeaturedImages = async () => {
      try {
        const response = await fetch('/api/gallery?featured=true')
        const data = await response.json()
        
        if (data.success && data.data.length > 0) {
          // Get 3 best images (one for each slide)
          setFeaturedImages(data.data.slice(0, 3))
        }
      } catch (error) {
        console.error('Error fetching featured images:', error)
      }
    }

    fetchFeaturedImages()
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      setIsAnimating(true)
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length)
        setIsAnimating(false)
      }, 500)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const goToSlide = (idx: number) => {
    if (idx === currentSlide) return
    setIsAnimating(true)
    setTimeout(() => {
      setCurrentSlide(idx)
      setIsAnimating(false)
    }, 300)
  }

  const slide = slides[currentSlide]
  const backgroundImage = featuredImages[currentSlide]

  return (
    <section
      className={`relative min-h-screen transition-all duration-1000 overflow-hidden flex items-center`}
      style={{ paddingTop: '20px', paddingBottom: '100px' }}
    >
      {/* Background Image Overlay */}
      {backgroundImage && (
        <div className="absolute inset-0 z-0">
          <Image
            src={backgroundImage.image_url}
            alt={backgroundImage.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50" />
        </div>
      )}

      {/* Fallback gradient if no image */}
      {!backgroundImage && (
        <div className={`absolute inset-0 z-0 bg-gradient-to-br ${slide.bg}`} />
      )}

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none z-10"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(212,175,55,0.8) 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }}
      />

      {/* Decorative Mandala - Hidden on mobile */}
      <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 opacity-10 pointer-events-none z-10">
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="100" cy="100" r="90" stroke="#D4AF37" strokeWidth="0.5"/>
          <circle cx="100" cy="100" r="70" stroke="#D4AF37" strokeWidth="0.5"/>
          <circle cx="100" cy="100" r="50" stroke="#D4AF37" strokeWidth="0.5"/>
          <circle cx="100" cy="100" r="30" stroke="#D4AF37" strokeWidth="0.5"/>
          {[0,30,60,90,120,150,180,210,240,270,300,330].map((angle) => (
            <line
              key={angle}
              x1="100" y1="10"
              x2="100" y2="190"
              stroke="#D4AF37"
              strokeWidth="0.3"
              transform={`rotate(${angle} 100 100)`}
            />
          ))}
        </svg>
      </div>

      {/* Hero Content */}
      <div className="container relative z-20 px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="max-w-2xl">
            {/* Hindi Tagline */}
            <div
              className={`inline-block mb-4 sm:mb-6 transition-all duration-500 ${isAnimating ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0'}`}
            >
              <span className="badge text-white bg-primary/60 backdrop-blur-md text-xs sm:text-sm px-4 py-2 border border-white/30 font-medium shadow-lg">
                <FontAwesomeIcon icon={faSpa} className="mr-1.5 text-xs" />
                मेहंदी जो दिल से बनाई जाए
              </span>
            </div>

            {/* Main Heading */}
            <h1
              className={`font-serif text-white text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold leading-tight mb-2 transition-all duration-500 ${isAnimating ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}
              style={{
                textShadow: '2px 2px 8px rgba(0,0,0,0.8), 0 0 20px rgba(0,0,0,0.5)'
              }}
            >
              {slide.title}
            </h1>

            {/* Business Name */}
            <div
              className={`font-sans text-gold text-base sm:text-lg md:text-xl lg:text-2xl mb-3 sm:mb-4 transition-all duration-500 delay-75 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}
              style={{
                textShadow: '1px 1px 4px rgba(0,0,0,0.8), 0 0 15px rgba(0,0,0,0.6)'
              }}
            >
              Shiv Kumar Mehandi Art
            </div>

            {/* Subtitle */}
            <p
              className={`text-white text-sm sm:text-base md:text-lg lg:text-xl mb-6 sm:mb-8 max-w-xl leading-relaxed transition-all duration-500 delay-100 ${isAnimating ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}
              style={{
                textShadow: '1px 1px 6px rgba(0,0,0,0.8), 0 0 15px rgba(0,0,0,0.5)'
              }}
            >
              {slide.subtitle}
            </p>

            {/* CTA Buttons */}
            <div
              className={`flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-12 transition-all duration-500 delay-150 ${isAnimating ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}
            >
              <Link href="/book" className="btn btn-gold text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-3.5 justify-center shadow-lg">
                Book Appointment
                <ChevronRight size={18} />
              </Link>
              <Link href="/gallery" className="btn btn-outline text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-3.5 border-white/70 bg-white/10 backdrop-blur-sm text-white hover:bg-white hover:text-primary justify-center shadow-lg">
                View Gallery
              </Link>
            </div>

            {/* Trust Badges */}
            <div
              className={`grid grid-cols-2 sm:flex sm:flex-wrap gap-4 sm:gap-6 transition-all duration-500 delay-200 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}
            >
              {[
                { value: '15+', label: 'Years Experience' },
                { value: '5000+', label: 'Happy Brides' },
                { value: '4.9★', label: 'Customer Rating' },
                { value: '#1', label: "Jaipur's Best" },
              ].map(({ value, label }) => (
                <div key={label} className="text-center sm:text-left bg-black/30 backdrop-blur-sm rounded-lg px-3 py-2 border border-white/20">
                  <span className="font-serif font-bold text-gold text-xl sm:text-2xl block" style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.8)' }}>{value}</span>
                  <span className="text-white/90 text-[10px] sm:text-xs block mt-0.5" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.8)' }}>{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Gallery Card - Desktop Only */}
          <div
            className={`hidden lg:block transition-all duration-500 delay-300 ${isAnimating ? 'opacity-0 translate-x-4' : 'opacity-100 translate-x-0'}`}
          >
            {featuredImages.length > 0 && (
              <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 border border-white/20 shadow-2xl">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-white font-semibold text-lg">Featured Designs</h3>
                  <Link href="/gallery" className="text-gold text-sm hover:underline">
                    View All →
                  </Link>
                </div>
                
                <div className="grid grid-cols-2 gap-3">
                  {featuredImages.slice(0, 4).map((img) => (
                    <Link
                      key={img.id}
                      href="/gallery"
                      className="group relative aspect-square rounded-2xl overflow-hidden"
                    >
                      <Image
                        src={img.image_url}
                        alt={img.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute bottom-2 left-2 right-2">
                          <p className="text-white text-xs font-medium truncate">{img.title}</p>
                          <p className="text-gold text-xs capitalize">{img.category}</p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>

                {featuredImages.length > 4 && (
                  <div className="mt-4 text-center">
                    <Link 
                      href="/gallery" 
                      className="text-white/70 text-sm hover:text-gold transition-colors"
                    >
                      +{featuredImages.length - 4} more designs
                    </Link>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Mobile Gallery Card - Below content */}
          <div
            className={`lg:hidden transition-all duration-500 delay-300 ${isAnimating ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}
          >
            {featuredImages.length > 0 && (
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-3 sm:p-4 border border-white/20 shadow-2xl">
                <div className="flex items-center justify-between mb-2 sm:mb-3">
                  <h3 className="text-white font-semibold text-sm sm:text-base">Featured Designs</h3>
                  <Link href="/gallery" className="text-gold text-xs sm:text-sm hover:underline">
                    View All →
                  </Link>
                </div>
                
                <div className="grid grid-cols-3 gap-2">
                  {featuredImages.slice(0, 3).map((img) => (
                    <Link
                      key={img.id}
                      href="/gallery"
                      className="group relative aspect-square rounded-lg overflow-hidden"
                    >
                      <Image
                        src={img.image_url}
                        alt={img.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Slide Dots */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goToSlide(idx)}
            className={`transition-all duration-300 rounded-full ${
              idx === currentSlide
                ? 'w-6 sm:w-8 h-2 bg-gold'
                : 'w-2 h-2 bg-white/30 hover:bg-white/60'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>

      {/* Scroll indicator - Hidden on mobile */}
      <div className="hidden sm:flex absolute bottom-8 right-8 flex-col items-center gap-2 text-white/40 text-xs z-20">
        <span>Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-white/40 to-transparent animate-pulse" />
      </div>
    </section>
  )
}
