import { Star, Quote } from 'lucide-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faRing, faMoon, faEnvelope } from '@fortawesome/free-solid-svg-icons'

const testimonials = [
  {
    name: 'Priya Agarwal',
    role: 'Delhi Bride, 2024',
    icon: faHeart,
    rating: 5,
    text: "Shiv Kumar's work is pure magic. The color was so dark and the detail was unbelievable. Every guest at my wedding was asking about my artist! I'll never go to anyone else.",
    hindiText: 'बहुत ही खूबसूरत काम किया। हर मेहमान ने तारीफ की।',
  },
  {
    name: 'Riya Kapoor',
    role: 'Jaipur Bride, 2024',
    icon: faRing,
    rating: 5,
    text: "His patience is remarkable. He spent 6 hours on my bridal mehndi and the result was a masterpiece. The design was exactly as I had imagined. Highly recommended!",
    hindiText: 'बहुत सुंदर डिज़ाइन बनाया, बिल्कुल वैसा जैसा मैंने सोचा था।',
  },
  {
    name: 'Sneha Sharma',
    role: 'Jaipur, Karwa Chauth',
    icon: faMoon,
    rating: 5,
    text: "I've been getting mehndi done by Shiv Kumar ji for 4 years now. His Arabic designs are to die for! Always fresh paste, great color, and such a calm atmosphere.",
    hindiText: '4 साल से इनसे मेहंदी लगवाती हूँ। बेहतरीन काम करते हैं।',
  },
]

export default function TestimonialsSection() {
  return (
    <section className="section bg-primary relative overflow-hidden">
      {/* Background Texture */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(212,175,55,1) 1px, transparent 0)`,
          backgroundSize: '32px 32px',
        }}
      />

      <div className="container relative z-10">
        {/* Section Header */}
        <div className="section-header">
          <span className="badge mb-4 text-gold/90 bg-gold/10 text-xs uppercase tracking-wider">
            <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
            Love Letters
          </span>
          <h2 className="font-serif text-white">What Our Brides Say</h2>
          <div className="w-16 h-0.5 bg-gold mx-auto mt-3 mb-4" />
          <p className="text-white/60 max-w-xl mx-auto">
            Real stories from real brides — the greatest honour is their happiness.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {testimonials.map((t) => (
            <div key={t.name} className="testimonial-card relative">
              {/* Quote Icon */}
              <div className="absolute -top-4 right-4 text-gold opacity-40">
                <Quote size={32} fill="currentColor" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={14} className="text-gold fill-gold" />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-on-surface text-sm leading-relaxed mb-3">
                "{t.text}"
              </p>

              {/* Hindi */}
              <p className="text-on-surface-variant text-xs italic mb-5">
                {t.hindiText}
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-surface-container-high">
                <div className="w-10 h-10 bg-surface-container rounded-full flex items-center justify-center text-gold flex-shrink-0">
                  <FontAwesomeIcon icon={t.icon} />
                </div>
                <div>
                  <div className="font-semibold text-sm text-on-surface">{t.name}</div>
                  <div className="text-xs text-outline">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Reviews */}
        <div className="text-center mt-10">
          <a href="/reviews" className="btn btn-outline text-gold border-gold/40 hover:bg-gold hover:text-primary">
            Read All 320+ Reviews
          </a>
        </div>
      </div>
    </section>
  )
}
