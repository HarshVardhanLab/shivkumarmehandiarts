'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ChevronDown, ChevronUp } from 'lucide-react'

const faqs = [
  {
    q: 'Bridal mehndi ki booking kitne time pehle karni chahiye? / How far in advance should I book bridal mehndi?',
    a: 'We recommend booking 2–4 weeks in advance for bridal mehndi. During peak seasons (October–February), book at least 4–6 weeks ahead. For Karwa Chauth, book 1–2 weeks early as slots fill fast.',
  },
  {
    q: 'Bridal mehndi ka price kya hai? / What is the price for bridal mehndi?',
    a: 'Our bridal mehndi starts at ₹6,100 and varies based on design complexity, coverage area, and number of people. Full bridal set (both hands + feet) typically ranges from ₹6,100 to ₹15,000. Contact us for a custom quote.',
  },
  {
    q: 'Kya aap home visit karte ho? / Do you offer home visits?',
    a: 'Yes! We provide home visits throughout Jaipur and surrounding areas. Travel charges apply based on distance.',
  },
  {
    q: 'Mehndi lagane ke baad kaise care karein? / How to care for mehndi after application?',
    a: 'Keep paste on for 6–8 hours. Do not use water for 12 hours after removal. Apply lemon-sugar syrup while paste is wet. After removal, apply mustard oil or Vicks. Avoid soap contact for 24 hours. Stay away from water for best results.',
  },
  {
    q: 'Kya henna safe hai pregnant women ke liye? / Is henna safe for pregnant women?',
    a: 'Our henna paste is 100% natural and safe. However, we always use only organic, chemical-free henna without PPD or black henna additives. We recommend a patch test 24 hours before application. Always consult your doctor if unsure.',
  },
  {
    q: 'Mehndi ka rang dark kaise kare? / How to make mehndi color dark?',
    a: 'For maximum color: Leave paste on for 6–8 hours. Apply clove smoke or eucalyptus oil over paste. After removal, apply mustard oil. Avoid washing with soap for first 24 hours. Avoid swimming or soaking hands.',
  },
  {
    q: 'Kya aap festival mehndi bhi karte ho? / Do you do festival mehndi?',
    a: 'Yes! We specialize in festival mehndi for Karwa Chauth, Teej, Diwali, Eid, Navratri, and all major festivals. Quick express designs are available for walk-ins during festival days.',
  },
  {
    q: 'Corporate events ke liye booking kaise karein? / How to book for corporate events?',
    a: 'For corporate events, contact us via phone or email. We provide trained artists, all equipment, and handle groups of any size. Minimum booking is 2 hours. Rates start at ₹1,500/artist/hour.',
  },
  {
    q: 'Arabic aur Bridal mehndi mein kya difference hai?',
    a: 'Arabic mehndi features bold floral patterns with more negative space and takes 30–90 minutes. Bridal mehndi is more intricate with full coverage, storytelling motifs, and takes 3–6 hours. Bridal also typically includes foot designs and groom\'s name hidden within.',
  },
  {
    q: 'Kya aap last minute booking accept karte ho? / Do you accept last minute bookings?',
    a: 'Subject to availability, we do accommodate urgent bookings. Please call or WhatsApp directly for same-day or next-day requests. Festival periods are usually fully booked, so calling early is recommended.',
  },
  {
    q: 'Payment kaise hogi? / What are the payment options?',
    a: 'We accept cash, UPI (Google Pay, PhonePe, Paytm), and bank transfer. A 30% advance is required to confirm wedding/bridal bookings. Festival and event bookings are paid the day of service.',
  },
  {
    q: 'Kya henna se allergy ho sakti hai? / Can I be allergic to henna?',
    a: 'True natural henna is very rarely allergenic. However, "black henna" with PPD chemical can cause severe reactions. We ONLY use pure organic henna from Rajasthan. For first-timers, we offer a free patch test 24 hours before the appointment.',
  },
]

export default function FAQPage() {
  const [openIdx, setOpenIdx] = useState<number | null>(0)
  const toggle = (i: number) => setOpenIdx(openIdx === i ? null : i)

  return (
    <div className="min-h-screen pt-0 lg:pt-20 pb-24 lg:pb-8">
      <div className="page-hero">
        <div className="container">
          <div className="breadcrumb text-white/50">
            <Link href="/" className="hover:text-gold">Home</Link>
            <span>/</span>
            <span className="text-white/80">FAQ</span>
          </div>
          <h1 className="font-serif text-white text-4xl lg:text-5xl font-bold mt-4">
            Frequently Asked Questions
          </h1>
          <p className="text-white/70 mt-3 text-lg">
            अक्सर पूछे जाने वाले सवाल — Hindi & English both!
          </p>
        </div>
      </div>

      <section className="section bg-ivory">
        <div className="container max-w-3xl mx-auto">
          <div className="bg-white rounded-2xl shadow-organic p-6 lg:p-8">
            {faqs.map((faq, i) => (
              <div key={i} className="faq-item">
                <button
                  className="faq-question"
                  onClick={() => toggle(i)}
                  aria-expanded={openIdx === i}
                >
                  <span className="flex-1 text-left text-sm lg:text-base">{faq.q}</span>
                  {openIdx === i
                    ? <ChevronUp size={18} className="text-gold flex-shrink-0" />
                    : <ChevronDown size={18} className="text-outline flex-shrink-0" />
                  }
                </button>
                <div className={`faq-answer ${openIdx === i ? 'open' : ''}`}>
                  <p className="text-on-surface-variant text-sm leading-relaxed pb-4">
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10 p-6 bg-primary rounded-2xl">
            <p className="text-white/80 text-sm mb-4">Still have questions? We're happy to help!</p>
            <div className="flex flex-wrap justify-center gap-3">
              <a
                href="https://wa.me/918058168076"
                className="btn bg-[#25D366] text-white"
                target="_blank" rel="noopener noreferrer"
              >
                WhatsApp Us
              </a>
              <Link href="/contact" className="btn btn-outline text-white border-white/30 hover:bg-white hover:text-primary">
                Contact Form
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
