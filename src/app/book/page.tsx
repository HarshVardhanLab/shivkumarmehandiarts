'use client'

import { useState } from 'react'
import Link from 'next/link'
import { CheckCircle, ChevronRight, ChevronLeft, Calendar, User, Phone, Mail, MapPin, Loader2 } from 'lucide-react'
import toast from 'react-hot-toast'

type FormData = {
  name: string
  phone: string
  email: string
  date: string
  eventType: string
  serviceType: string
  guestCount: string
  venue: string
  address: string
  specialRequirements: string
}

const EVENT_TYPES = ['Wedding', 'Engagement', 'Karvachauth', 'Baby Shower', 'Birthday Party', 'Festival', 'Corporate Event', 'Other']
const SERVICE_TYPES = ['Bridal Mehndi', 'Arabic Mehndi', 'Karvachauth Mehndi', 'Baby Shower Mehndi', 'Corporate Mehndi', 'Festival Mehndi']
const STEPS = ['Personal Info', 'Appointment', 'Event Details', 'Confirm']

const INITIAL: FormData = {
  name: '', phone: '', email: '',
  date: '', eventType: '', serviceType: '',
  guestCount: '1', venue: '', address: '', specialRequirements: ''
}

export default function BookPage() {
  const [step, setStep] = useState(0)
  const [form, setForm] = useState<FormData>(INITIAL)
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const update = (field: keyof FormData, value: string) =>
    setForm((prev) => ({ ...prev, [field]: value }))

  const canProceed = () => {
    if (step === 0) return form.name.trim() && form.phone.trim() && form.email.trim()
    if (step === 1) return form.date && form.eventType && form.serviceType
    if (step === 2) return form.address.trim()
    return true
  }

  const handleSubmit = async () => {
    setLoading(true)
    try {
      const res = await fetch('/api/book', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setSubmitted(true)
        toast.success('Booking submitted! We\'ll confirm within 2 hours.')
      } else {
        toast.error('Submission failed. Please WhatsApp us.')
      }
    } catch {
      toast.error('Network error. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  if (submitted) {
    return (
      <div className="min-h-screen bg-ivory flex items-center justify-center px-4 pt-0 lg:pt-20 pb-24 lg:pb-8">
        <div className="text-center max-w-md">
          <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle size={40} className="text-primary-container" />
          </div>
          <h2 className="font-serif text-primary-container text-3xl font-bold mb-3">
            Booking Received! 🎉
          </h2>
          <p className="text-on-surface-variant mb-2">
            Thank you, <strong>{form.name}</strong>! Your booking for <strong>{form.serviceType}</strong> on <strong>{form.date}</strong> has been submitted.
          </p>
          <p className="text-sm text-outline mb-6">
            We'll send a confirmation to {form.email} and WhatsApp you at {form.phone} within 2 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/" className="btn btn-primary">Back to Home</Link>
            <a
              href={`https://wa.me/918058168076?text=Hi! I just submitted a booking for ${form.serviceType} on ${form.date}. My name is ${form.name}.`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn bg-[#25D366] text-white"
            >
              Confirm via WhatsApp
            </a>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-ivory pt-0 lg:pt-20 pb-24 lg:pb-8">
      {/* Hero */}
      <div className="page-hero">
        <div className="container">
          <div className="breadcrumb text-white/50">
            <Link href="/" className="hover:text-gold transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white/80">Book Appointment</span>
          </div>
          <h1 className="font-serif text-white text-4xl lg:text-5xl font-bold mt-4">
            Book Your Appointment
          </h1>
          <p className="text-white/70 mt-3 text-lg">
            अपनी मेहंदी बुकिंग करें — आसानी से, जल्दी से।
          </p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            {/* Step Indicator */}
            <div className="step-indicator mb-10">
              {STEPS.map((label, i) => (
                <div key={label} className="flex items-center">
                  <div className={`step-circle ${i < step ? 'completed' : i === step ? 'active' : 'inactive'}`}>
                    {i < step ? <CheckCircle size={18} /> : i + 1}
                  </div>
                  {i < STEPS.length - 1 && (
                    <div className={`step-line ${i < step ? 'completed' : 'inactive'}`} />
                  )}
                </div>
              ))}
            </div>

            {/* Step Labels */}
            <div className="text-center mb-8">
              <span className="badge badge-gold">{`Step ${step + 1} of ${STEPS.length}`}</span>
              <h2 className="font-serif text-primary-container text-2xl font-bold mt-3">{STEPS[step]}</h2>
            </div>

            {/* Form Card */}
            <div className="bg-white rounded-2xl shadow-organic p-8">
              {/* Step 0 — Personal Info */}
              {step === 0 && (
                <div className="space-y-6">
                  <div>
                    <label className="text-xs font-semibold text-on-surface uppercase tracking-wider flex items-center gap-2 mb-2">
                      <User size={13} /> Full Name *
                    </label>
                    <input
                      id="booking-name"
                      className="input-field"
                      placeholder="Enter your name"
                      value={form.name}
                      onChange={(e) => update('name', e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-on-surface uppercase tracking-wider flex items-center gap-2 mb-2">
                      <Phone size={13} /> Phone Number *
                    </label>
                    <input
                      id="booking-phone"
                      type="tel"
                      className="input-field"
                      placeholder="+91 80581 68076"
                      value={form.phone}
                      onChange={(e) => update('phone', e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-on-surface uppercase tracking-wider flex items-center gap-2 mb-2">
                      <Mail size={13} /> Email Address *
                    </label>
                    <input
                      id="booking-email"
                      type="email"
                      className="input-field"
                      placeholder="your@email.com"
                      value={form.email}
                      onChange={(e) => update('email', e.target.value)}
                    />
                  </div>
                </div>
              )}

              {/* Step 1 — Appointment Details */}
              {step === 1 && (
                <div className="space-y-6">
                  <div>
                    <label className="text-xs font-semibold text-on-surface uppercase tracking-wider flex items-center gap-2 mb-2">
                      <Calendar size={13} /> Preferred Date *
                    </label>
                    <input
                      id="booking-date"
                      type="date"
                      className="input-field"
                      min={new Date().toISOString().split('T')[0]}
                      value={form.date}
                      onChange={(e) => update('date', e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-on-surface uppercase tracking-wider mb-2 block">
                      Event Type *
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      {EVENT_TYPES.map((t) => (
                        <button
                          key={t}
                          type="button"
                          onClick={() => update('eventType', t)}
                          className={`py-2.5 px-3 rounded-xl text-sm font-medium transition-all border min-h-[44px] ${
                            form.eventType === t
                              ? 'bg-primary text-white border-primary'
                              : 'bg-surface-low text-on-surface-variant border-surface-container-high hover:border-primary/30'
                          }`}
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-on-surface uppercase tracking-wider mb-2 block">
                      Service Type *
                    </label>
                    <div className="grid grid-cols-1 gap-2">
                      {SERVICE_TYPES.map((s) => (
                        <button
                          key={s}
                          type="button"
                          onClick={() => update('serviceType', s)}
                          className={`py-2.5 px-4 rounded-xl text-sm font-medium transition-all border min-h-[44px] text-left ${
                            form.serviceType === s
                              ? 'bg-primary text-white border-primary'
                              : 'bg-surface-low text-on-surface-variant border-surface-container-high hover:border-primary/30'
                          }`}
                        >
                          {s}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Step 2 — Event Details */}
              {step === 2 && (
                <div className="space-y-6">
                  <div>
                    <label className="text-xs font-semibold text-on-surface uppercase tracking-wider mb-2 block">
                      Number of Guests
                    </label>
                    <input
                      id="booking-guests"
                      type="number"
                      min="1"
                      max="500"
                      className="input-field"
                      placeholder="1"
                      value={form.guestCount}
                      onChange={(e) => update('guestCount', e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-on-surface uppercase tracking-wider flex items-center gap-2 mb-2">
                      <MapPin size={13} /> Venue Name
                    </label>
                    <input
                      id="booking-venue"
                      className="input-field"
                      placeholder="Wedding hall / Home / Hotel name"
                      value={form.venue}
                      onChange={(e) => update('venue', e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-on-surface uppercase tracking-wider mb-2 block">
                      Full Address *
                    </label>
                    <textarea
                      id="booking-address"
                      rows={3}
                      className="input-field resize-none"
                      placeholder="Full address with city and pin code"
                      value={form.address}
                      onChange={(e) => update('address', e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-on-surface uppercase tracking-wider mb-2 block">
                      Special Requirements
                    </label>
                    <textarea
                      id="booking-special"
                      rows={3}
                      className="input-field resize-none"
                      placeholder="Any special design requests, allergies, timing constraints..."
                      value={form.specialRequirements}
                      onChange={(e) => update('specialRequirements', e.target.value)}
                    />
                  </div>
                </div>
              )}

              {/* Step 3 — Review & Confirm */}
              {step === 3 && (
                <div className="space-y-4">
                  <p className="text-sm text-on-surface-variant mb-4">
                    Please review your booking details before submitting.
                  </p>
                  {[
                    { label: 'Name', value: form.name },
                    { label: 'Phone', value: form.phone },
                    { label: 'Email', value: form.email },
                    { label: 'Date', value: form.date },
                    { label: 'Event', value: form.eventType },
                    { label: 'Service', value: form.serviceType },
                    { label: 'Guests', value: form.guestCount },
                    { label: 'Venue', value: form.venue || '—' },
                    { label: 'Address', value: form.address },
                    { label: 'Special Requests', value: form.specialRequirements || 'None' },
                  ].map(({ label, value }) => (
                    <div key={label} className="flex gap-4 py-2.5 border-b border-surface-container">
                      <span className="text-xs font-semibold text-outline uppercase tracking-wider w-28 flex-shrink-0">
                        {label}
                      </span>
                      <span className="text-sm text-on-surface flex-1">{value}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between mt-8 pt-6 border-t border-surface-container">
                <button
                  onClick={() => setStep((s) => s - 1)}
                  disabled={step === 0}
                  className="btn btn-outline disabled:opacity-30 disabled:cursor-not-allowed"
                >
                  <ChevronLeft size={16} /> Back
                </button>

                {step < 3 ? (
                  <button
                    onClick={() => setStep((s) => s + 1)}
                    disabled={!canProceed()}
                    className="btn btn-primary disabled:opacity-40 disabled:cursor-not-allowed"
                  >
                    Continue <ChevronRight size={16} />
                  </button>
                ) : (
                  <button
                    onClick={handleSubmit}
                    disabled={loading}
                    className="btn btn-gold"
                  >
                    {loading ? <Loader2 size={16} className="animate-spin" /> : <CheckCircle size={16} />}
                    {loading ? 'Submitting...' : 'Confirm Booking'}
                  </button>
                )}
              </div>
            </div>

            {/* WhatsApp alternative */}
            <div className="text-center mt-6 text-sm text-outline">
              Prefer WhatsApp? &nbsp;
              <a
                href="https://wa.me/918058168076?text=Hi! I want to book an appointment."
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-container font-medium hover:text-gold underline decoration-gold/50"
              >
                Message us directly →
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
