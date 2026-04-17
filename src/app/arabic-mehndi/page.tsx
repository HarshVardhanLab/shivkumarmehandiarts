import type { Metadata } from 'next'
import Link from 'next/link'
import { Star, CheckCircle, ChevronRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Arabic Mehndi in Jaipur | Bold Floral Henna Designs',
  description: 'Expert Arabic mehndi designs in Jaipur. Bold floral patterns, quick application, deep color. Arabic mehndi starting at ₹300. Book online or WhatsApp!',
  keywords: ['arabic mehndi jaipur', 'arabic henna design', 'arabic mehndi artist', 'bold floral mehndi'],
}

const styles = [
  { name: 'Classic Arabic Florals', desc: 'Bold roses and vines with generous negative space', price: '₹300+' },
  { name: 'Arabic Geometric', desc: 'Diamond lattice and mandala patterns for a modern feel', price: '₹400+' },
  { name: 'Gulf Style Arabic', desc: 'Heavy coverage in the classic Gulf bride tradition', price: '₹800+' },
  { name: 'Arabic Finger Design', desc: 'Delicate ring-style designs on just the fingers', price: '₹150+' },
]

export default function ArabicMehndiPage() {
  return (
    <div className="min-h-screen pt-0 lg:pt-20 pb-24 lg:pb-8">
      <div className="bg-gradient-to-br from-[#3d2800] via-[#4f2100] to-[#8b4513] py-20">
        <div className="container">
          <div className="breadcrumb text-white/50">
            <Link href="/" className="hover:text-gold">Home</Link>
            <span>/</span>
            <span className="text-white/80">Arabic Mehndi</span>
          </div>
          <span className="badge badge-gold mt-4 inline-block text-xs">🌹 Arabic Style Expert</span>
          <h1 className="font-serif text-white text-4xl lg:text-6xl font-bold mt-4 leading-tight">
            Arabic Mehndi<br />
            <span className="text-gradient-gold">Jaipur</span>
          </h1>
          <p className="text-white/70 text-xl mt-4 max-w-2xl">
            Bold, beautiful, and instantly recognizable. Arabic mehndi&apos;s flowing florals and dramatic negative space create a look that&apos;s timeless and stunning.
          </p>
          <div className="flex flex-wrap gap-4 mt-8">
            <Link href="/book" className="btn btn-gold px-8">Book Arabic Mehndi</Link>
            <a href="https://wa.me/918058168076" target="_blank" rel="noopener noreferrer" className="btn bg-[#25D366] text-white px-8">
              WhatsApp Now
            </a>
          </div>
        </div>
      </div>

      <section className="section bg-ivory">
        <div className="container">
          <div className="section-header">
            <h2 className="gold-underline">Arabic Mehndi Styles & Pricing</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
            {styles.map((s) => (
              <div key={s.name} className="card p-6 text-center">
                <div className="text-4xl mb-3">🌹</div>
                <h3 className="font-serif font-bold text-primary-container text-lg mb-2">{s.name}</h3>
                <p className="text-on-surface-variant text-sm mb-4">{s.desc}</p>
                <div className="price-tag mb-4">{s.price}</div>
                <Link href="/book" className="btn btn-primary w-full justify-center text-sm">Book</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container max-w-4xl">
          <h2 className="font-serif text-primary-container text-3xl font-bold text-center mb-10">What Makes Our Arabic Mehndi Special</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              'Quick application — ideal for parties and events',
              'Deep, dark color with authentic organic henna',
              'Bold designs that photograph beautifully',
              'Can be done in 30–90 minutes',
              'Available for hands AND feet',
              'Custom designs to match your outfit',
            ].map((p) => (
              <div key={p} className="flex items-center gap-3 p-4 bg-surface-low rounded-xl">
                <CheckCircle size={16} className="text-primary-container flex-shrink-0" />
                <span className="text-on-surface-variant text-sm">{p}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-primary">
        <div className="container max-w-2xl text-center">
          <div className="flex justify-center gap-1 mb-4">
            {Array(5).fill(0).map((_, i) => <Star key={i} size={20} className="text-gold fill-gold" />)}
          </div>
          <blockquote className="text-white text-xl font-serif italic mb-4">
            &ldquo;Arabic mehndi itna beautiful bana tha ki sabne photo khichvai! Very fast too — just 45 minutes for both hands.&rdquo;
          </blockquote>
          <cite className="text-gold text-sm not-italic">— Zara Khan, Jaipur</cite>
        </div>
      </section>

      <section className="section bg-ivory">
        <div className="container text-center">
          <h2 className="font-serif text-primary-container text-3xl font-bold mb-4">Book Your Arabic Mehndi</h2>
          <p className="text-on-surface-variant mb-8">Walk-in welcome, or book ahead for larger groups!</p>
          <Link href="/book" className="btn btn-primary text-base px-10">Book Now <ChevronRight size={16} /></Link>
        </div>
      </section>
    </div>
  )
}
