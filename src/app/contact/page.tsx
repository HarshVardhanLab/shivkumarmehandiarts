'use client'

import { useState } from 'react'
import Link from 'next/link'
import { MapPin, Phone, Mail, Clock, Send, Loader2 } from 'lucide-react'
import toast from 'react-hot-toast'

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', subject: '', message: '' })
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        toast.success('Message sent! We\'ll reply within 24 hours.')
        setForm({ name: '', phone: '', email: '', subject: '', message: '' })
      } else {
        toast.error('Failed to send. Please WhatsApp us directly.')
      }
    } catch {
      toast.error('Network error. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen pt-0 lg:pt-20 pb-24 lg:pb-8">
      {/* Hero */}
      <div className="page-hero">
        <div className="container">
          <div className="breadcrumb text-white/50">
            <Link href="/" className="hover:text-gold">Home</Link>
            <span>/</span>
            <span className="text-white/80">Contact</span>
          </div>
          <h1 className="font-serif text-white text-4xl lg:text-5xl font-bold mt-4">Get in Touch</h1>
          <p className="text-white/70 mt-3 text-lg">हम यहाँ हैं — आपकी सेवा में। Let's connect!</p>
        </div>
      </div>

      <section className="section bg-ivory">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            {/* Contact Info Column */}
            <div className="lg:col-span-2 space-y-6">
              <h2 className="font-serif text-primary-container text-2xl font-bold">Contact Information</h2>

              {[
                { icon: MapPin, title: 'Location', lines: ['Shop No. 46, Jawahar Nagar', 'Jaipur, Rajasthan — 302004', 'Home visits available'] },
                { icon: Phone, title: 'Phone', lines: ['+91 8058168076', 'WhatsApp: +91 8058168076'] },
                { icon: Mail, title: 'Email', lines: ['shivkumarmehandi9419@gmail.com'] },
                { icon: Clock, title: 'Business Hours', lines: ['Open 24×7', 'Always Available'] },
              ].map(({ icon: Icon, title, lines }) => (
                <div key={title} className="flex gap-4 p-5 bg-white rounded-2xl shadow-organic">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon size={20} className="text-primary-container" />
                  </div>
                  <div>
                    <div className="font-semibold text-on-surface text-sm mb-1.5">{title}</div>
                    {lines.map((line) => (
                      <div key={line} className="text-on-surface-variant text-sm">{line}</div>
                    ))}
                  </div>
                </div>
              ))}

              {/* WhatsApp CTA */}
              <a
                href="https://wa.me/918058168076"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-[#25D366] text-white px-5 py-4 rounded-2xl font-semibold hover:bg-[#20ba5a] transition-colors"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                Chat on WhatsApp — Instant Reply
              </a>

              {/* Map Embed */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-organic">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d227748.3825624477!2d75.65046970850977!3d26.885142844476488!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396c4adf4c57e281%3A0xce1c63a0cf22e09!2sJaipur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1702000000000"
                  width="100%"
                  height="200"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Shiv Kumar Mehandi Art Location"
                />
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-2xl shadow-organic p-8">
                <h2 className="font-serif text-primary-container text-2xl font-bold mb-6">Send a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="text-xs font-semibold uppercase tracking-wider text-outline mb-2 block">Name *</label>
                      <input id="contact-name" required className="input-field" placeholder="Your full name"
                        value={form.name} onChange={(e) => setForm(f => ({ ...f, name: e.target.value }))} />
                    </div>
                    <div>
                      <label className="text-xs font-semibold uppercase tracking-wider text-outline mb-2 block">Phone *</label>
                      <input id="contact-phone" required type="tel" className="input-field" placeholder="+91 80581 68076"
                        value={form.phone} onChange={(e) => setForm(f => ({ ...f, phone: e.target.value }))} />
                    </div>
                  </div>
                  <div>
                    <label className="text-xs font-semibold uppercase tracking-wider text-outline mb-2 block">Email</label>
                    <input id="contact-email" type="email" className="input-field" placeholder="your@email.com"
                      value={form.email} onChange={(e) => setForm(f => ({ ...f, email: e.target.value }))} />
                  </div>
                  <div>
                    <label className="text-xs font-semibold uppercase tracking-wider text-outline mb-2 block">Subject</label>
                    <input id="contact-subject" className="input-field" placeholder="What is this about?"
                      value={form.subject} onChange={(e) => setForm(f => ({ ...f, subject: e.target.value }))} />
                  </div>
                  <div>
                    <label className="text-xs font-semibold uppercase tracking-wider text-outline mb-2 block">Message *</label>
                    <textarea id="contact-message" required rows={5} className="input-field resize-none"
                      placeholder="Tell us about your requirements, event date, location..."
                      value={form.message} onChange={(e) => setForm(f => ({ ...f, message: e.target.value }))} />
                  </div>
                  <button type="submit" disabled={loading} className="btn btn-primary w-full justify-center">
                    {loading ? <Loader2 size={16} className="animate-spin" /> : <Send size={16} />}
                    {loading ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
