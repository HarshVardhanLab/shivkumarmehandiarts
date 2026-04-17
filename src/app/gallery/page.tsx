'use client'

import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { X, ChevronLeft, ChevronRight, Grid3x3, LayoutGrid, Heart } from 'lucide-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faRing, faSpa, faLeaf, faPalette, faHeart } from '@fortawesome/free-solid-svg-icons'

type Category = 'all' | 'bridal' | 'arabic' | 'traditional' | 'modern' | 'festival'
type ViewMode = 'masonry' | 'grid'

interface GalleryImage {
  id: number
  title: string
  description: string
  image_url: string
  cloudinary_id: string
  category: string
  is_featured: number
  display_order: number
}

const CATEGORIES: { value: Category; label: string; icon: any }[] = [
  { value: 'all', label: 'All Designs', icon: faStar },
  { value: 'bridal', label: 'Bridal', icon: faRing },
  { value: 'arabic', label: 'Arabic', icon: faSpa },
  { value: 'traditional', label: 'Traditional', icon: faLeaf },
  { value: 'modern', label: 'Modern', icon: faPalette },
  { value: 'festival', label: 'Festival', icon: faHeart },
]

export default function GalleryPage() {
  const searchParams = useSearchParams()
  const categoryParam = searchParams.get('category') as Category | null
  
  const [activeCategory, setActiveCategory] = useState<Category>(categoryParam || 'all')
  const [viewMode, setViewMode] = useState<ViewMode>('masonry')
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null)
  const [visibleCount, setVisibleCount] = useState(12)
  const [images, setImages] = useState<GalleryImage[]>([])
  const [loading, setLoading] = useState(true)
  const [favorites, setFavorites] = useState<Set<number>>(new Set())

  // Update active category when URL param changes
  useEffect(() => {
    if (categoryParam && categoryParam !== activeCategory) {
      setActiveCategory(categoryParam)
    }
  }, [categoryParam])

  // Fetch images from API
  useEffect(() => {
    const fetchImages = async () => {
      setLoading(true)
      try {
        const url = activeCategory === 'all' 
          ? '/api/gallery' 
          : `/api/gallery?category=${activeCategory}`
        
        const response = await fetch(url)
        const data = await response.json()
        
        if (data.success) {
          setImages(data.data)
        }
      } catch (error) {
        console.error('Error fetching gallery:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchImages()
    setVisibleCount(12) // Reset visible count when category changes
  }, [activeCategory])

  const visible = images.slice(0, visibleCount)

  const openLightbox = (id: number) => {
    const idx = images.findIndex((i) => i.id === id)
    if (idx !== -1) setLightboxIdx(idx)
  }
  
  const closeLightbox = () => setLightboxIdx(null)
  const prev = () => setLightboxIdx((p) => (p !== null ? (p - 1 + images.length) % images.length : 0))
  const next = () => setLightboxIdx((p) => (p !== null ? (p + 1) % images.length : 0))

  const toggleFavorite = (id: number) => {
    setFavorites(prev => {
      const newFavorites = new Set(prev)
      if (newFavorites.has(id)) {
        newFavorites.delete(id)
      } else {
        newFavorites.add(id)
      }
      return newFavorites
    })
  }

  // Close lightbox on Escape key
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox()
      if (e.key === 'ArrowLeft' && lightboxIdx !== null) prev()
      if (e.key === 'ArrowRight' && lightboxIdx !== null) next()
    }
    if (lightboxIdx !== null) window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lightboxIdx, images.length])

  return (
    <div className="min-h-screen bg-ivory pt-0 lg:pt-20 pb-24 lg:pb-28">
      {/* Page Hero */}
      <div className="relative bg-gradient-to-br from-primary via-primary-container to-primary-forest py-12 lg:py-20">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(212,175,55,0.8) 1px, transparent 0)`,
          backgroundSize: '32px 32px',
        }} />
        <div className="container relative px-4">
          <div className="breadcrumb text-white/50 mb-3 text-sm">
            <Link href="/" className="hover:text-gold transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white/80">Gallery</span>
          </div>
          <h1 className="font-serif text-white text-3xl lg:text-6xl font-bold mb-3 lg:mb-4">
            Mehndi Gallery
          </h1>
          <p className="text-white/80 text-sm lg:text-lg max-w-2xl">
            Explore our collection of {images.length}+ stunning mehndi designs. From intricate bridal patterns to modern Arabic styles.
          </p>
        </div>
      </div>

      <section className="section py-6 lg:py-12">
        <div className="container px-4">
          {/* Filter Bar */}
          <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-lg p-3 lg:p-4 mb-6 border border-gray-100">
            <div className="flex flex-col gap-3">
              {/* Category Filters */}
              <div className="flex flex-wrap gap-2">
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat.value}
                    onClick={() => setActiveCategory(cat.value)}
                    className={`px-3 py-2 rounded-xl text-xs lg:text-sm font-medium transition-all duration-200 flex items-center gap-1.5 ${
                      activeCategory === cat.value
                        ? 'bg-primary-container text-white shadow-md'
                        : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <FontAwesomeIcon icon={cat.icon} className="w-3.5 h-3.5" />
                    <span>{cat.label}</span>
                  </button>
                ))}
              </div>

              {/* View Mode Toggle */}
              <div className="flex gap-2 bg-gray-50 p-1 rounded-xl w-fit">
                <button
                  onClick={() => setViewMode('masonry')}
                  className={`p-2 rounded-lg transition-all ${
                    viewMode === 'masonry' ? 'bg-white shadow-sm text-primary-container' : 'text-gray-500'
                  }`}
                  aria-label="Masonry view"
                >
                  <LayoutGrid size={16} />
                </button>
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-lg transition-all ${
                    viewMode === 'grid' ? 'bg-white shadow-sm text-primary-container' : 'text-gray-500'
                  }`}
                  aria-label="Grid view"
                >
                  <Grid3x3 size={16} />
                </button>
              </div>
            </div>
          </div>

          {/* Loading State */}
          {loading && (
            <div className="text-center py-20">
              <div className="inline-block w-12 h-12 border-4 border-primary-container border-t-transparent rounded-full animate-spin"></div>
              <p className="text-outline mt-4">Loading beautiful designs...</p>
            </div>
          )}

          {/* Empty State */}
          {!loading && images.length === 0 && (
            <div className="text-center py-20">
              <div className="mb-4">
                <FontAwesomeIcon icon={faPalette} className="w-16 h-16 text-gray-300" />
              </div>
              <p className="text-outline text-lg">No designs found in this category.</p>
              <button 
                onClick={() => setActiveCategory('all')}
                className="btn btn-primary mt-4"
              >
                View All Designs
              </button>
            </div>
          )}

          {/* Gallery Grid */}
          {!loading && images.length > 0 && (
            <>
              {viewMode === 'masonry' ? (
                <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-3 lg:gap-4 space-y-3 lg:space-y-4">
                  {visible.map((item, idx) => (
                    <div
                      key={item.id}
                      className="break-inside-avoid cursor-pointer group relative"
                      onClick={() => openLightbox(item.id)}
                    >
                      <div className="relative overflow-hidden rounded-xl lg:rounded-2xl bg-white shadow-md hover:shadow-2xl transition-all duration-300">
                        <Image
                          src={item.image_url}
                          alt={item.title}
                          width={600}
                          height={idx % 3 === 0 ? 800 : 600}
                          className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                        />
                        
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="absolute bottom-0 left-0 right-0 p-3 lg:p-4">
                            <h3 className="text-white font-semibold text-xs lg:text-sm mb-1">{item.title}</h3>
                            <span className="inline-block px-2 py-0.5 lg:py-1 bg-gold/90 text-white text-[10px] lg:text-xs rounded-full capitalize">
                              {item.category}
                            </span>
                          </div>
                        </div>

                        {/* Favorite Button */}
                        <button
                          onClick={(e) => {
                            e.stopPropagation()
                            toggleFavorite(item.id)
                          }}
                          className="absolute top-2 lg:top-3 right-2 lg:right-3 w-8 lg:w-10 h-8 lg:h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:scale-110"
                        >
                          <Heart 
                            size={16} 
                            className={favorites.has(item.id) ? 'fill-red-500 text-red-500' : 'text-gray-600'}
                          />
                        </button>

                        {item.is_featured === 1 && (
                          <span className="absolute top-2 lg:top-3 left-2 lg:left-3 px-2 py-0.5 lg:py-1 bg-gold text-white text-[10px] lg:text-xs font-medium rounded-full">
                            Featured
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-4">
                  {visible.map((item) => (
                    <div
                      key={item.id}
                      className="cursor-pointer group relative aspect-square"
                      onClick={() => openLightbox(item.id)}
                    >
                      <div className="relative overflow-hidden rounded-xl lg:rounded-2xl bg-white shadow-md hover:shadow-2xl transition-all duration-300 h-full">
                        <Image
                          src={item.image_url}
                          alt={item.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                        />
                        
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="absolute bottom-0 left-0 right-0 p-2 lg:p-3">
                            <h3 className="text-white font-semibold text-[10px] lg:text-xs mb-0.5 lg:mb-1 truncate">{item.title}</h3>
                            <span className="inline-block px-1.5 lg:px-2 py-0.5 bg-gold/90 text-white text-[9px] lg:text-[10px] rounded-full capitalize">
                              {item.category}
                            </span>
                          </div>
                        </div>

                        {/* Favorite Button */}
                        <button
                          onClick={(e) => {
                            e.stopPropagation()
                            toggleFavorite(item.id)
                          }}
                          className="absolute top-2 right-2 w-7 lg:w-8 h-7 lg:h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        >
                          <Heart 
                            size={12} 
                            className={favorites.has(item.id) ? 'fill-red-500 text-red-500' : 'text-gray-600'}
                          />
                        </button>

                        {item.is_featured === 1 && (
                          <span className="absolute top-2 left-2 px-1.5 lg:px-2 py-0.5 bg-gold text-white text-[9px] lg:text-[10px] font-medium rounded-full">
                            Featured
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Load More */}
              {visibleCount < images.length && (
                <div className="text-center mt-12">
                  <button
                    onClick={() => setVisibleCount((prev) => prev + 12)}
                    className="btn btn-primary px-8"
                  >
                    Load More ({images.length - visibleCount} remaining)
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {lightboxIdx !== null && images[lightboxIdx] && (
        <div className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={closeLightbox}>
          <div
            className="relative max-w-5xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative bg-white rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src={images[lightboxIdx].image_url}
                alt={images[lightboxIdx].title}
                width={1200}
                height={1200}
                className="w-full h-auto max-h-[80vh] object-contain"
                priority
              />
            </div>

            {/* Controls */}
            <button
              onClick={closeLightbox}
              className="absolute -top-4 -right-4 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-xl hover:bg-gray-100 transition-colors"
              aria-label="Close"
            >
              <X size={20} className="text-gray-700" />
            </button>
            
            {images.length > 1 && (
              <>
                <button 
                  onClick={prev} 
                  className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-xl hover:bg-gray-100 transition-colors"
                  aria-label="Previous"
                >
                  <ChevronLeft size={24} className="text-gray-700" />
                </button>
                <button 
                  onClick={next} 
                  className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-xl hover:bg-gray-100 transition-colors"
                  aria-label="Next"
                >
                  <ChevronRight size={24} className="text-gray-700" />
                </button>
              </>
            )}

            {/* Caption */}
            <div className="text-center mt-6">
              <h3 className="text-white font-semibold text-xl mb-2">{images[lightboxIdx].title}</h3>
              <span className="inline-block px-3 py-1 bg-gold rounded-full text-white text-sm capitalize mb-2">
                {images[lightboxIdx].category} Mehndi
              </span>
              {images[lightboxIdx].description && (
                <p className="text-white/80 text-sm mt-3 max-w-2xl mx-auto">
                  {images[lightboxIdx].description}
                </p>
              )}
              <p className="text-white/50 text-xs mt-3">
                {lightboxIdx + 1} / {images.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
