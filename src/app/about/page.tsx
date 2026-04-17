import type { Metadata } from 'next'
import Link from 'next/link'
import { Award, Star, Heart } from 'lucide-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLeaf, faPalette, faClock, faHome, faHeart, faTrophy } from '@fortawesome/free-solid-svg-icons'

export const metadata: Metadata = {
  title: 'About Shiv Kumar | Mehandi Artist with 15+ Years Experience',
  description: 'Meet Shiv Kumar — Jaipur\'s most trusted mehndi artist with 15+ years of experience, 5000+ brides served, and a passion for traditional artistry.',
}

const milestones = [
  { year: '2009', event: 'Started practicing mehndi art at age 18' },
  { year: '2012', event: 'First bridal mehndi commission — a turning point' },
  { year: '2015', event: 'Opened Shiv Kumar Mehandi Art studio in Jaipur' },
  { year: '2018', event: 'Completed 1000+ bridal mehndi milestone' },
  { year: '2021', event: 'Featured in Navbharat Times & wedding magazines' },
  { year: '2024', event: '5000+ brides served, rated #1 in Jaipur' },
]

const whyUs = [
  { icon: faLeaf, title: '100% Natural Henna', desc: 'We use only organic, chemical-free henna paste sourced from Rajasthan for the deepest, safest color.' },
  { icon: faPalette, title: 'Custom Designs', desc: 'Every design is created uniquely for you — no templates, no copies. Your vision, our artistry.' },
  { icon: faClock, title: 'Punctuality Guaranteed', desc: 'We respect your wedding schedule. We arrive 30 minutes early and always finish on time.' },
  { icon: faHome, title: 'Home Visit Available', desc: 'We come to your home, venue, or hotel across Jaipur and surrounding areas.' },
  { icon: faHeart, title: 'Post-Care Guidance', desc: 'Complete aftercare instructions to ensure maximum color and longevity.' },
  { icon: faTrophy, title: 'Award-Winning Artist', desc: 'Recognized by local wedding associations for excellence in traditional and contemporary mehndi art.' },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-0 lg:pt-20 pb-24 lg:pb-8">
      {/* Hero */}
      <div className="page-hero">
        <div className="container">
          <div className="breadcrumb text-white/50">
            <Link href="/" className="hover:text-gold">Home</Link>
            <span>/</span>
            <span className="text-white/80">About</span>
          </div>
          <h1 className="font-serif text-white text-4xl lg:text-5xl font-bold mt-4">
            About the Artist
          </h1>
          <p className="text-white/70 mt-3 text-lg max-w-xl">
            15 years of passion, patience, and precision — the story behind the art.
          </p>
        </div>
      </div>

      {/* Artist Story */}
      <section className="section bg-ivory">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image Placeholder */}
            <div className="relative">
              <div className="bg-gradient-to-br from-[#1a4d2e] to-[#2d6b42] rounded-3xl flex items-center justify-center" style={{ paddingBottom: '120%', position: 'relative' }}>
                <div className="absolute inset-0 flex items-center justify-center text-white/20">
                  <FontAwesomeIcon icon={faPalette} className="text-[8rem]" />
                </div>
              </div>
              {/* Floating stat card */}
              <div className="absolute -bottom-6 -right-4 bg-white rounded-2xl p-4 shadow-organic">
                <div className="text-3xl font-serif font-bold text-primary-container">15+</div>
                <div className="text-xs text-outline">Years of Mastery</div>
              </div>
            </div>

            {/* Story Text */}
            <div>
              <span className="badge badge-gold mb-4 inline-block">🪷 Our Story</span>
              <h2 className="font-serif text-primary-container text-3xl lg:text-4xl font-bold mb-5">
                Shiv Kumar — The Artist Behind the Art
              </h2>
              <p className="text-on-surface-variant leading-relaxed mb-4">
                Born and raised in Moradabad, Uttar Pradesh, Shiv Kumar discovered his passion for mehndi art at the age of 16, watching local artisans create intricate designs during neighborhood weddings. By 18, he had begun practicing formally.
              </p>
              <p className="text-on-surface-variant leading-relaxed mb-4">
                Over the next 15 years, he honed his craft — studying traditional Rajasthani and Mughal patterns, learning Arabic techniques, and eventually developing his own signature style: a fusion of classical motifs with contemporary minimalism.
              </p>
              <p className="text-on-surface-variant leading-relaxed mb-6">
                Today, Shiv Kumar Mehandi Art is synonymous with excellence in Moradabad. From grand ballroom weddings to intimate home ceremonies, every stroke is delivered with the same devotion.
              </p>

              {/* Stats Row */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                {[
                  { value: '5000+', label: 'Brides Served' },
                  { value: '50+', label: 'Design Styles' },
                  { value: '4.9★', label: 'Google Rating' },
                ].map(({ value, label }) => (
                  <div key={label} className="text-center p-3 bg-white rounded-xl shadow-organic">
                    <div className="font-serif font-bold text-xl text-primary-container">{value}</div>
                    <div className="text-xs text-outline mt-0.5">{label}</div>
                  </div>
                ))}
              </div>

              <div className="flex gap-3">
                <Link href="/book" className="btn btn-primary">Book Appointment</Link>
                <Link href="/gallery" className="btn btn-outline">View Work</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section bg-white">
        <div className="container">
          <div className="section-header">
            <span className="badge badge-gold mb-4">Journey</span>
            <h2 className="gold-underline">Our Milestones</h2>
          </div>
          <div className="max-w-2xl mx-auto mt-12">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-16 top-0 bottom-0 w-px bg-gradient-to-b from-primary to-gold" />
              <div className="space-y-8">
                {milestones.map(({ year, event }) => (
                  <div key={year} className="flex gap-6 items-start relative">
                    <div className="w-16 text-right flex-shrink-0">
                      <span className="font-serif font-bold text-gold text-lg">{year}</span>
                    </div>
                    <div className="w-4 h-4 bg-gold rounded-full flex-shrink-0 mt-1 relative z-10 shadow-gold" />
                    <div className="flex-1 pb-4">
                      <p className="text-on-surface-variant text-sm leading-relaxed">{event}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section bg-ivory">
        <div className="container">
          <div className="section-header">
            <span className="badge badge-green mb-4">Why Us</span>
            <h2 className="gold-underline">The Shiv Kumar Difference</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {whyUs.map((item) => (
              <div key={item.title} className="card p-6">
                <div className="text-4xl mb-4 text-primary-container">
                  <FontAwesomeIcon icon={item.icon} />
                </div>
                <h3 className="font-serif font-bold text-primary-container text-lg mb-2">{item.title}</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="section bg-primary">
        <div className="container">
          <div className="text-center">
            <h2 className="font-serif text-white text-3xl font-bold mb-4">Awards & Recognition</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 max-w-3xl mx-auto">
              {[
                { icon: Award, label: 'Best Bridal Mehndi', sub: 'Jaipur Wedding Expo 2023' },
                { icon: Star, label: '4.9★ Google Rating', sub: '320+ Verified Reviews' },
                { icon: Heart, label: "Brides' Choice Award", sub: 'WedMeGood 2024' },
              ].map(({ icon: Icon, label, sub }) => (
                <div key={label} className="bg-white/10 rounded-2xl p-6 text-center">
                  <Icon size={32} className="text-gold mx-auto mb-3" />
                  <div className="font-serif font-bold text-white text-lg">{label}</div>
                  <div className="text-white/60 text-sm mt-1">{sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
