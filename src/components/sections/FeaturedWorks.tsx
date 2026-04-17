'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { ZoomIn, X, ChevronLeft, ChevronRight } from 'lucide-react'

interface GalleryImage {
  id: number
  title: string
  description: string
  image_url: string
  category: string
}

export default function FeaturedWorks() {
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null)
  const [works, setWorks] = useState<GalleryImage[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchFeaturedWorks = async () => {
      try {
        const response = await fetch('/api/gallery?featured=true')
        const data = await response.json()
        
        if (data.success) {
          setWorks(data.data.slice(0, 6)) // Show first 6 featured images
        }
      } catch (error) {
        console.error('Error fetching featured works:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchFeaturedWorks()
  }, [])

  const openLightbox = (idx: number) => setLightboxIdx(idx)
  const closeLightbox = () => setLightboxIdx(null)
  const prevItem = () => setLightboxIdx((prev) => prev !== null ? (prev - 1 + works.length) % works.length : 0)
  const nextItem = () => setLightboxIdx((prev) => prev !== null ? (prev + 1) % works.length : 0)

  if (loading) {
    return (
      <section className="section bg-white">
        <div className="container">
          <div className="section-header">
            <span className="badge badge-green mb-4">Portfolio</span>
            <h2 className="gold-underline">Featured Works</h2>
          </div>
          <div className="text-center py-10">
            <div className="inline-block w-12 h-12 border-4 border-primary-container border-t-transparent rounded-full animate-spin"></div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="section bg-white">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="badge badge-green mb-4">Portfolio</span>
          <h2 className="gold-underline">Featured Works</h2>
          <p className="text-lg text-on-surface-variant max-w-xl mx-auto mt-6">
            Each design tells a unique story — crafted with patience, passion, and the finest henna.
          </p>
        </div>

        {/* Gallery Grid — Masonry-like */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 mt-12 space-y-4">
          {works.map((work, idx) => (
            <div
              key={work.id}
              className="gallery-item break-inside-avoid cursor-pointer"
              onClick={() => openLightbox(idx)}
            >
              <div className="relative overflow-hidden rounded-xl">
                <Image
                  src={work.image_url}
                  alt={work.title}
                  width={600}
                  height={idx % 2 === 0 ? 800 : 600}
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />

                {/* Overlay */}
                <div className="gallery-overlay rounded-xl">
                  <div className="flex-1" />
                  <div className="flex items-end justify-between w-full">
                    <div>
                      <div className="text-white font-semibold text-sm">{work.title}</div>
                      <div className="text-gold text-xs capitalize">{work.category}</div>
                    </div>
                    <ZoomIn size={20} className="text-white" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View Gallery CTA */}
        <div className="text-center mt-10">
          <Link href="/gallery" className="btn btn-primary">
            View Full Gallery
          </Link>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxIdx !== null && works[lightboxIdx] && (
        <div className="lightbox-backdrop" onClick={closeLightbox}>
          <div
            className="relative max-w-2xl w-full mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative bg-white rounded-2xl overflow-hidden">
              <Image
                src={works[lightboxIdx].image_url}
                alt={works[lightboxIdx].title}
                width={1200}
                height={1200}
                className="w-full h-auto"
                priority
              />
            </div>

            {/* Controls */}
            <button
              onClick={closeLightbox}
              className="absolute -top-4 -right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-organic"
            >
              <X size={18} className="text-primary" />
            </button>
            <button onClick={prevItem} className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-5 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-organic hover:bg-surface-low transition-colors">
              <ChevronLeft size={18} className="text-primary" />
            </button>
            <button onClick={nextItem} className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-5 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-organic hover:bg-surface-low transition-colors">
              <ChevronRight size={18} className="text-primary" />
            </button>

            {/* Caption */}
            <div className="text-center mt-4">
              <div className="text-white font-semibold">{works[lightboxIdx].title}</div>
              <div className="text-gold text-sm capitalize">{works[lightboxIdx].category} Mehndi</div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
