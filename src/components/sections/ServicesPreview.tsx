'use client'

import Link from 'next/link'
import { Clock, ChevronRight } from 'lucide-react'
import { useEffect, useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRing, faSpa, faStar } from '@fortawesome/free-solid-svg-icons'

const services = [
  {
    id: 'bridal',
    icon: faRing,
    title: 'Bridal Mehndi',
    hindiTitle: 'दुलहन मेहंदी',
    description: 'Intricate traditional patterns spanning from fingertips to elbows, customized for your most special day.',
    price: '₹6,100+',
    duration: '3–4 hours',
    href: '/bridal-mehndi',
    color: 'from-[#1a4d2e] to-[#2d6b42]',
    tag: 'Most Popular',
  },
  {
    id: 'arabic',
    icon: faSpa,
    title: 'Arabic Mehndi',
    hindiTitle: 'अरेबिक मेहंदी',
    description: 'Bold floral vines and geometric spaces that highlight the natural grace of your hands.',
    price: '₹300+',
    duration: '30–60 min',
    href: '/arabic-mehndi',
    color: 'from-[#4f2100] to-[#8b4513]',
    tag: 'Trending',
  },
  {
    id: 'festival',
    icon: faStar,
    title: 'Festival Special',
    hindiTitle: 'त्यौहार मेहंदी',
    description: 'Perfect designs for Karwa Chauth, Teej, Diwali, and Eid celebrations.',
    price: '₹200+',
    duration: '20–45 min',
    href: '/services',
    color: 'from-[#735c00] to-[#b8860b]',
    tag: 'Quick & Beautiful',
  },
]

export default function ServicesPreview() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 150)
            })
          }
        })
      },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="section bg-ivory">
      <div className="container">
        {/* Section Header */}
        <div className="section-header reveal">
          <span className="badge badge-gold mb-4">Our Specialties</span>
          <h2 className="gold-underline">
            Services & Artistry
          </h2>
          <p className="text-lg text-on-surface-variant max-w-xl mx-auto mt-6">
            From intricate bridal designs to quick festival looks — every stroke is crafted with love and precision.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {services.map((service, i) => (
            <div
              key={service.id}
              className={`reveal reveal-delay-${i + 1} card card-service group`}
            >
              {/* Card Header — Gradient */}
              <div className={`bg-gradient-to-br ${service.color} p-8 relative overflow-hidden`}>
                <div className="absolute top-3 right-3">
                  <span className="badge badge-gold text-[10px]">{service.tag}</span>
                </div>
                <div className="text-white text-5xl mb-4">
                  <FontAwesomeIcon icon={service.icon} />
                </div>
                <h3 className="font-serif font-bold text-white text-xl mb-1">
                  {service.title}
                </h3>
                <p className="text-white/60 text-sm font-sans">{service.hindiTitle}</p>
              </div>

              {/* Card Body */}
              <div className="p-6">
                <p className="text-on-surface-variant text-sm leading-relaxed mb-5">
                  {service.description}
                </p>

                <div className="flex items-center justify-between mb-5">
                  <div>
                    <span className="price-tag">{service.price}</span>
                    <span className="text-xs text-outline ml-1">onwards</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-outline">
                    <Clock size={13} />
                    {service.duration}
                  </div>
                </div>

                <Link
                  href={service.href}
                  className="btn btn-primary w-full justify-center group-hover:bg-primary-forest"
                >
                  Book This Service
                  <ChevronRight size={16} />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-10 reveal">
          <Link href="/services" className="btn btn-ghost inline-flex gap-2">
            View All 6 Services
            <ChevronRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  )
}
