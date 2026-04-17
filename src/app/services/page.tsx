'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Clock, Star, CheckCircle, ChevronRight } from 'lucide-react'

interface Service {
  id: number
  title: string
  slug: string
  description: string
  price_range: string
  duration: string
  features: string[]
  is_popular: boolean
  display_order: number
}

interface GalleryImage {
  id: number
  title: string
  image_url: string
  category: string
}

export default function ServicesPage() {
  const [services, setServices] = useState<Service[]>([])
  const [galleryImages, setGalleryImages] = useState<{ [key: string]: GalleryImage[] }>({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch services
        const servicesRes = await fetch('/api/services')
        const servicesData = await servicesRes.json()
        
        if (servicesData.success) {
          setServices(servicesData.data)
          
          // Fetch gallery images for each category
          const categories = ['bridal', 'arabic', 'traditional', 'modern', 'festival']
          const imagesPromises = categories.map(async (category) => {
            const res = await fetch(`/api/gallery?category=${category}&limit=3`)
            const data = await res.json()
            return { category, images: data.success ? data.data : [] }
          })
          
          const imagesResults = await Promise.all(imagesPromises)
          const imagesMap: { [key: string]: GalleryImage[] } = {}
          imagesResults.forEach(({ category, images }) => {
            imagesMap[category] = images
          })
          setGalleryImages(imagesMap)
        }
      } catch (error) {
        console.error('Error fetching data:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  const getServiceCategory = (slug: string): string => {
    if (slug.includes('bridal')) return 'bridal'
    if (slug.includes('arabic')) return 'arabic'
    if (slug.includes('karvachauth') || slug.includes('festival')) return 'festival'
    if (slug.includes('designer')) return 'modern'
    return 'traditional'
  }

  const getServiceColor = (slug: string): string => {
    if (slug.includes('bridal')) return 'from-[#1a4d2e] to-[#2d6b42]'
    if (slug.includes('arabic')) return 'from-[#4f2100] to-[#8b4513]'
    if (slug.includes('bengal')) return 'from-[#3d2800] to-[#735c00]'
    if (slug.includes('baby')) return 'from-[#1a4d2e] to-[#735c00]'
    if (slug.includes('karvachauth')) return 'from-[#3d2800] to-[#735c00]'
    if (slug.includes('designer')) return 'from-[#733d00] to-[#b8730b]'
    return 'from-[#1a4d2e] to-[#2d6b42]'
  }

  return (
    <div className="min-h-screen pt-0 lg:pt-20 pb-24 lg:pb-28">
      {/* Page Hero */}
      <div className="page-hero">
        <div className="container">
          <div className="breadcrumb text-white/50">
            <Link href="/" className="hover:text-gold transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white/80">Services</span>
          </div>
          <h1 className="font-serif text-white text-4xl lg:text-5xl font-bold mt-4">
            Services & Pricing
          </h1>
          <p className="text-white/70 mt-3 text-lg max-w-xl">
            From intimate bridal mehndi to grand festival designs — crafted with 15+ years of mastery.
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <section className="section bg-ivory">
        <div className="container">
          {loading ? (
            <div className="text-center py-20">
              <div className="inline-block w-12 h-12 border-4 border-primary-container border-t-transparent rounded-full animate-spin"></div>
              <p className="text-outline mt-4">Loading services...</p>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service) => {
                  const category = getServiceCategory(service.slug)
                  const images = galleryImages[category] || []
                  const color = getServiceColor(service.slug)
                  
                  return (
                    <div key={service.id} className="card overflow-hidden group hover:shadow-2xl transition-shadow duration-300">
                      {/* Image Gallery */}
                      {images.length > 0 && (
                        <div className="relative h-64 bg-gray-100">
                          <div className="grid grid-cols-3 gap-1 h-full">
                            {images.slice(0, 3).map((img) => (
                              <div key={img.id} className="relative overflow-hidden">
                                <Image
                                  src={img.image_url}
                                  alt={img.title}
                                  fill
                                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                              </div>
                            ))}
                          </div>
                          {service.is_popular && (
                            <span className="badge badge-gold text-[11px] absolute top-3 right-3 z-10">
                              Most Popular
                            </span>
                          )}
                          <div className={`absolute inset-0 bg-gradient-to-t ${color} opacity-20`} />
                        </div>
                      )}

                      {/* Body */}
                      <div className="p-6">
                        {/* Title */}
                        <h2 className="font-serif font-bold text-primary-container text-2xl mb-2">
                          {service.title}
                        </h2>

                        {/* Price + Duration */}
                        <div className="flex items-center justify-between mb-4 pb-4 border-b border-surface-container-high">
                          <div>
                            <span className="price-tag">{service.price_range}</span>
                          </div>
                          <div className="flex items-center gap-1.5 text-sm text-outline">
                            <Clock size={14} />
                            {service.duration}
                          </div>
                        </div>

                        {/* Stars */}
                        <div className="flex gap-0.5 mb-4">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star key={i} size={13} className="text-gold fill-gold" />
                          ))}
                        </div>

                        {/* Description */}
                        <p className="text-on-surface-variant text-sm leading-relaxed mb-5">
                          {service.description}
                        </p>

                        {/* What's included */}
                        {service.features && service.features.length > 0 && (
                          <div className="mb-5">
                            <p className="text-xs font-semibold text-on-surface uppercase tracking-wider mb-2">
                              What's Included
                            </p>
                            <ul className="space-y-1.5">
                              {service.features.slice(0, 4).map((item, idx) => (
                                <li key={idx} className="flex items-start gap-2 text-sm text-on-surface-variant">
                                  <CheckCircle size={13} className="text-primary-container flex-shrink-0 mt-0.5" />
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {/* CTA */}
                        <Link href="/book" className="btn btn-primary w-full justify-center">
                          Book Now
                          <ChevronRight size={15} />
                        </Link>
                      </div>
                    </div>
                  )
                })}
              </div>

              {/* Group Note */}
              <div className="mt-12 p-6 bg-white rounded-2xl shadow-organic text-center">
                <div className="text-3xl mb-3">🎊</div>
                <h3 className="font-serif font-bold text-primary-container text-xl mb-2">
                  Group & Event Discounts
                </h3>
                <p className="text-on-surface-variant text-sm max-w-xl mx-auto mb-4">
                  Planning a large wedding or corporate event? We offer special packages for groups of 10+ guests.
                  Contact us for a custom quote.
                </p>
                <Link href="/contact" className="btn btn-ghost inline-flex">
                  Request Custom Quote <ChevronRight size={15} />
                </Link>
              </div>
            </>
          )}
        </div>
      </section>
    </div>
  )
}
