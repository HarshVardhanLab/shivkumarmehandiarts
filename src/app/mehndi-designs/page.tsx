'use client'

import { useState, useEffect } from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRing, faSpa, faLeaf, faPalette, faHeart, faArrowRight } from '@fortawesome/free-solid-svg-icons'

interface GalleryImage {
  id: number
  title: string
  description: string
  image_url: string
  category: string
  is_featured: number
}

interface CategoryData {
  name: string
  slug: string
  icon: any
  color: string
  description: string
  images: GalleryImage[]
}

export default function MehndiDesignsPage() {
  const [categories, setCategories] = useState<CategoryData[]>([
    { name: 'Bridal Collection', slug: 'bridal', icon: faRing, color: 'from-[#1a4d2e] to-[#2d6b42]', description: 'Intricate traditional patterns for your special day', images: [] },
    { name: 'Arabic Designs', slug: 'arabic', icon: faSpa, color: 'from-[#4f2100] to-[#8b4513]', description: 'Bold floral vines and geometric elegance', images: [] },
    { name: 'Traditional Indian', slug: 'traditional', icon: faLeaf, color: 'from-[#733d00] to-[#b8730b]', description: 'Classic Rajasthani and Indian patterns', images: [] },
    { name: 'Modern & Minimalist', slug: 'modern', icon: faPalette, color: 'from-[#1a4d2e] to-[#735c00]', description: 'Contemporary fusion designs', images: [] },
    { name: 'Festival Specials', slug: 'festival', icon: faHeart, color: 'from-[#3d2800] to-[#735c00]', description: 'Perfect for celebrations and occasions', images: [] },
  ])
  const [loading, setLoading] = useState(true)
  const [totalImages, setTotalImages] = useState(0)

  useEffect(() => {
    const fetchImages = async () => {
      try {
        // Fetch all images
        const response = await fetch('/api/gallery')
        const data = await response.json()
        
        if (data.success) {
          setTotalImages(data.data.length)
          
          // Group images by category
          const updatedCategories = categories.map(cat => {
            const categoryImages = data.data.filter((img: GalleryImage) => 
              img.category === cat.slug
            ).slice(0, 6) // Get first 6 images per category
            
            return { ...cat, images: categoryImages }
          })
          
          setCategories(updatedCategories)
        }
      } catch (error) {
        console.error('Error fetching images:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchImages()
  }, [])

  return (
    <div className="min-h-screen pt-0 lg:pt-20 pb-24 lg:pb-8">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-primary via-primary-container to-primary-forest py-12 lg:py-20">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(212,175,55,0.8) 1px, transparent 0)`,
          backgroundSize: '32px 32px',
        }} />
        <div className="container relative px-4">
          <div className="breadcrumb text-white/50 mb-3 text-sm">
            <Link href="/" className="hover:text-gold transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white/80">Mehndi Designs</span>
          </div>
          <h1 className="font-serif text-white text-3xl lg:text-6xl font-bold mb-3 lg:mb-4">
            Design Inspiration Gallery
          </h1>
          <p className="text-white/80 text-sm lg:text-lg max-w-2xl">
            Explore {totalImages}+ stunning mehndi designs across all styles and occasions. Find your perfect inspiration!
          </p>
        </div>
      </div>

      <section className="section py-6 lg:py-12 bg-ivory">
        <div className="container px-4">
          {loading ? (
            <div className="text-center py-20">
              <div className="inline-block w-12 h-12 border-4 border-primary-container border-t-transparent rounded-full animate-spin"></div>
              <p className="text-outline mt-4">Loading beautiful designs...</p>
            </div>
          ) : (
            <div className="space-y-12 lg:space-y-16">
              {categories.map((cat, idx) => (
                <div key={cat.slug} className="space-y-6">
                  {/* Category Header */}
                  <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${cat.color} flex items-center justify-center shadow-md`}>
                          <FontAwesomeIcon icon={cat.icon} className="text-white text-xl" />
                        </div>
                        <div>
                          <h2 className="font-serif text-primary-container text-2xl lg:text-3xl font-bold">
                            {cat.name}
                          </h2>
                          <p className="text-outline text-sm">{cat.images.length} designs available</p>
                        </div>
                      </div>
                      <p className="text-on-surface-variant text-sm lg:text-base ml-0 lg:ml-15">
                        {cat.description}
                      </p>
                    </div>
                    <Link 
                      href={`/gallery?category=${cat.slug}`}
                      className="btn btn-outline text-sm px-6 py-2 flex items-center gap-2 w-fit"
                    >
                      View All
                      <FontAwesomeIcon icon={faArrowRight} className="w-3 h-3" />
                    </Link>
                  </div>

                  {/* Images Grid */}
                  {cat.images.length > 0 ? (
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 lg:gap-4">
                      {cat.images.map((img) => (
                        <Link
                          key={img.id}
                          href="/gallery"
                          className="group relative aspect-square overflow-hidden rounded-xl lg:rounded-2xl bg-white shadow-md hover:shadow-2xl transition-all duration-300"
                        >
                          <Image
                            src={img.image_url}
                            alt={img.title}
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-500"
                            loading="lazy"
                          />
                          
                          {/* Overlay */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="absolute bottom-0 left-0 right-0 p-2 lg:p-3">
                              <h3 className="text-white font-semibold text-[10px] lg:text-xs truncate">{img.title}</h3>
                            </div>
                          </div>

                          {img.is_featured === 1 && (
                            <span className="absolute top-2 left-2 px-1.5 lg:px-2 py-0.5 bg-gold text-white text-[9px] lg:text-[10px] font-medium rounded-full">
                              Featured
                            </span>
                          )}
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-12 bg-white/50 rounded-2xl">
                      <p className="text-outline">No designs available in this category yet.</p>
                    </div>
                  )}

                  {/* Divider */}
                  {idx < categories.length - 1 && (
                    <div className="border-t border-gray-200 mt-8"></div>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* CTA Section */}
          <div className="text-center mt-12 lg:mt-16 bg-gradient-to-br from-primary via-primary-container to-primary-forest rounded-3xl p-8 lg:p-12">
            <h3 className="font-serif text-white text-2xl lg:text-3xl font-bold mb-3">
              Found Your Inspiration?
            </h3>
            <p className="text-white/80 mb-6 max-w-xl mx-auto">
              Let's bring your dream mehndi design to life! Book your appointment today and get personalized designs.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/book" className="btn btn-gold text-base px-8">
                Book Appointment
              </Link>
              <Link href="/gallery" className="btn btn-outline border-white/30 text-white hover:bg-white hover:text-primary text-base px-8">
                View Full Gallery
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
