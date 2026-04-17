import type { Metadata } from 'next'
import Link from 'next/link'
import { Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Customer Reviews | Shiv Kumar Mehandi Art',
  description: 'Read 320+ verified reviews from happy brides and customers of Shiv Kumar Mehandi Art. 4.9★ average rating.',
}

const reviews = [
  { name: 'Priya Agarwal', location: 'Delhi', rating: 5, service: 'Bridal Mehndi', date: 'Dec 2024', text: "Pure magic! The color was so dark and the detail was unbelievable. Every guest asked about my mehndi artist!", verified: true },
  { name: 'Riya Kapoor', location: 'Jaipur', rating: 5, service: 'Bridal Mehndi', date: 'Nov 2024', text: "He spent 6 hours on my bridal mehndi and it was a masterpiece. Exactly what I had imagined. Highly recommended!", verified: true },
  { name: 'Sneha Sharma', location: 'Jaipur', rating: 5, service: 'Karvachauth', date: 'Oct 2024', text: "4 saalon se inse mehandi lagate hain. Arabic designs to die for! Always fresh paste, great color.", verified: true },
  { name: 'Zara Khan', location: 'Jaipur', rating: 5, service: 'Arabic Mehndi', date: 'Oct 2024', text: "Arabic mehndi itna beautiful bana tha ki sabne photo khichvai! Just 45 minutes for both hands. Amazing!", verified: true },
  { name: 'Anjali Verma', location: 'Delhi', rating: 5, service: 'Bridal Mehndi', date: 'Sep 2024', text: "Shiv Kumar ji ne meri shaadi mein char chand laga diye. Sabse beautiful bridal mehndi I have ever seen!", verified: true },
  { name: 'Kavita Singh', location: 'Lucknow', rating: 5, service: 'Festival Mehndi', date: 'Sep 2024', text: "Teej ke liye ekdum perfect design mila. Colors bahut dark aya. Highly recommend for festival mehndi.", verified: true },
]

export default function ReviewsPage() {
  return (
    <div className="min-h-screen pt-0 lg:pt-20 pb-24 lg:pb-8">
      <div className="page-hero">
        <div className="container">
          <div className="breadcrumb text-white/50">
            <Link href="/" className="hover:text-gold">Home</Link>
            <span>/</span>
            <span className="text-white/80">Reviews</span>
          </div>
          <h1 className="font-serif text-white text-4xl lg:text-5xl font-bold mt-4">Customer Reviews</h1>
          <p className="text-white/70 mt-3 text-lg">4.9★ from 320+ verified reviews</p>
        </div>
      </div>

      <section className="section bg-ivory">
        <div className="container">
          {/* Aggregate Rating */}
          <div className="bg-primary rounded-2xl p-8 text-center mb-12 max-w-sm mx-auto">
            <div className="font-serif font-bold text-gold text-6xl">4.9</div>
            <div className="flex justify-center gap-1 my-2">
              {Array(5).fill(0).map((_, i) => <Star key={i} size={20} className="text-gold fill-gold" />)}
            </div>
            <div className="text-white/70 text-sm">Based on 320+ reviews</div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((r) => (
              <div key={r.name} className="testimonial-card">
                <div className="flex gap-1 mb-3">
                  {Array(r.rating).fill(0).map((_, i) => <Star key={i} size={14} className="text-gold fill-gold" />)}
                </div>
                <p className="text-on-surface text-sm leading-relaxed mb-3">"{r.text}"</p>
                <div className="flex items-center justify-between pt-4 border-t border-surface-container-high">
                  <div>
                    <div className="font-semibold text-sm text-on-surface">{r.name}</div>
                    <div className="text-xs text-outline">{r.location} · {r.service}</div>
                  </div>
                  <div className="text-xs text-outline">{r.date}</div>
                </div>
                {r.verified && (
                  <div className="mt-2 text-xs text-green-600 flex items-center gap-1">✓ Verified Booking</div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-10 p-6 bg-white rounded-2xl shadow-organic">
            <h3 className="font-serif text-primary-container text-xl font-bold mb-2">Leave Your Review</h3>
            <p className="text-on-surface-variant text-sm mb-4">Did you love our work? Share your experience!</p>
            <a href="https://g.page/r/review" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              Review on Google
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
