import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle, Star, Clock, ChevronRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Bridal Mehndi in Jaipur | Best Dulhan Mehndi Artist',
  description: 'Get the most stunning bridal mehndi in Jaipur by Shiv Kumar. 5000+ brides served. Bridal mehndi starting ₹6,100. Book your wedding mehndi today!',
  keywords: ['bridal mehndi jaipur', 'dulhan mehndi jaipur', 'wedding mehndi artist', 'best bridal mehndi'],
}

const designs = [
  { name: 'Full Rajasthani Bridal', desc: 'Complete coverage with intricate paisleys, peacocks and traditional motifs', price: '₹8,000+', time: '4–5 hrs' },
  { name: 'Arabic Fusion Bridal', desc: 'Bold florals on outer hands with traditional inner patterns', price: '₹6,100+', time: '3–4 hrs' },
  { name: 'Contemporary Minimalist', desc: 'Clean geometric lines with strategic gold negative space', price: '₹6,500+', time: '3 hrs' },
  { name: 'Full Sleeve + Feet', desc: 'Extended sleeve coverage plus both feet — the grand bridal look', price: '₹12,000+', time: '6–7 hrs' },
]

export default function BridalMehndiPage() {
  return (
    <div className="min-h-screen pt-0 lg:pt-20 pb-24 lg:pb-8">
      {/* SEO Hero */}
      <div className="bg-gradient-to-br from-[#002018] via-[#1a4d2e] to-[#2d6b42] py-20">
        <div className="container">
          <div className="breadcrumb text-white/50">
            <Link href="/" className="hover:text-gold">Home</Link>
            <span>/</span>
            <span className="text-white/80">Bridal Mehndi</span>
          </div>
          <span className="badge badge-gold mt-4 inline-block text-xs">💍 Dulhan Mehndi Specialist</span>
          <h1 className="font-serif text-white text-4xl lg:text-6xl font-bold mt-4 leading-tight">
            Bridal Mehndi in<br />
            <span className="text-gradient-gold">Jaipur</span>
          </h1>
          <p className="text-white/70 text-xl mt-4 max-w-2xl leading-relaxed">
            Your wedding day deserves the finest mehndi. 15+ years, 5000+ brides, and one unmatched passion for the art — only at Shiv Kumar Mehandi Art.
          </p>
          <div className="flex flex-wrap gap-4 mt-8">
            <Link href="/book" className="btn btn-gold text-base px-8">Book Bridal Mehndi</Link>
            <a href="https://wa.me/918058168076" target="_blank" rel="noopener noreferrer" className="btn bg-[#25D366] text-white text-base px-8">
              WhatsApp for Quote
            </a>
          </div>
        </div>
      </div>

      {/* Pricing Table */}
      <section className="section bg-ivory">
        <div className="container">
          <div className="section-header">
            <h2 className="gold-underline">Bridal Mehndi Packages</h2>
            <p className="text-on-surface-variant mt-6 max-w-xl mx-auto">Choose the perfect bridal mehndi package for your special day.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 max-w-3xl mx-auto">
            {designs.map((d, i) => (
              <div key={d.name} className={`card p-6 ${i === 1 ? 'ring-2 ring-gold' : ''}`}>
                {i === 1 && (
                  <div className="badge badge-gold text-xs mb-3 inline-block">Most Popular</div>
                )}
                <h3 className="font-serif font-bold text-primary-container text-xl mb-2">{d.name}</h3>
                <p className="text-on-surface-variant text-sm mb-4">{d.desc}</p>
                <div className="flex items-center justify-between mb-4">
                  <span className="price-tag">{d.price}</span>
                  <span className="flex items-center gap-1 text-xs text-outline"><Clock size={12} />{d.time}</span>
                </div>
                <Link href="/book" className="btn btn-primary w-full justify-center">Book Now</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Book Us */}
      <section className="section bg-white">
        <div className="container max-w-4xl mx-auto">
          <h2 className="font-serif text-center text-primary-container text-3xl font-bold mb-10">
            Why Brides Choose Shiv Kumar
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              '5000+ brides served across India',
              'Dulhan name hidden in design (signature touch)',
              'Pure organic Rajasthani henna paste',
              'Arrives 30 minutes early — punctuality guaranteed',
              'Custom consultation before the event',
              'Post-removal care kit provided',
              'Home visits available across Jaipur and nearby areas',
              '4.9★ average rating from 320+ reviews',
            ].map((point) => (
              <div key={point} className="flex items-start gap-3 p-4 bg-surface-low rounded-xl">
                <CheckCircle size={18} className="text-primary-container flex-shrink-0 mt-0.5" />
                <span className="text-on-surface-variant text-sm">{point}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Review Snippet */}
      <section className="section bg-primary">
        <div className="container max-w-2xl text-center">
          <div className="flex justify-center gap-1 mb-4">
            {Array(5).fill(0).map((_, i) => <Star key={i} size={20} className="text-gold fill-gold" />)}
          </div>
          <blockquote className="text-white text-xl font-serif italic mb-4">
            "Shiv Kumar ji ne meri shaadi mein char chand laga diye. Sabse beautiful bridal mehndi I have ever seen!"
          </blockquote>
          <cite className="text-gold text-sm not-italic">— Anjali Verma, Delhi Bride 2024</cite>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section bg-ivory">
        <div className="container text-center">
          <h2 className="font-serif text-primary-container text-3xl font-bold mb-4">
            Ready to Book Your Bridal Mehndi?
          </h2>
          <p className="text-on-surface-variant mb-8">Limited slots available per month. Book early to secure your date!</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/book" className="btn btn-primary text-base px-10">Book Now <ChevronRight size={16} /></Link>
            <Link href="/gallery" className="btn btn-outline text-base px-10">View Portfolio</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
