'use client'

import { useEffect, useRef } from 'react'

const stats = [
  { value: '15+', label: 'Years of Mastery', sublabel: 'Since 2009' },
  { value: '5000+', label: 'Brides Adorned', sublabel: 'Across India' },
  { value: '50+', label: 'Design Styles', sublabel: 'Bridal to Modern' },
  { value: '4.9★', label: 'Customer Rating', sublabel: '320+ Reviews' },
]

export default function StatsSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 100)
            })
          }
        })
      },
      { threshold: 0.2 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-16 bg-surface-container">
      <div className="container">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`reveal reveal-delay-${i + 1} text-center p-6 bg-white rounded-2xl shadow-organic`}
            >
              <div className="font-serif font-bold text-3xl lg:text-4xl text-primary-container mb-1">
                {stat.value}
              </div>
              <div className="font-sans font-semibold text-on-surface text-sm mb-1">
                {stat.label}
              </div>
              <div className="text-xs text-outline">
                {stat.sublabel}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
