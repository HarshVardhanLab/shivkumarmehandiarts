import Link from 'next/link'
import { Phone, MessageCircle, Calendar } from 'lucide-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle, faMapMarkerAlt, faPalette, faHeart } from '@fortawesome/free-solid-svg-icons'

export default function BookingCTA() {
  return (
    <section className="section bg-primary-gradient relative overflow-hidden">
      {/* Decorative */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(212,175,55,1) 1px, transparent 0)`,
          backgroundSize: '28px 28px',
        }}
      />

      <div className="container relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <span className="badge mb-5 text-gold/90 bg-gold/10 text-xs uppercase tracking-wider inline-block">
            <Calendar size={14} className="inline mr-2" />
            Ready to Book?
          </span>

          <h2 className="font-serif text-white text-4xl lg:text-5xl font-bold mb-4">
            Let's Create Something
            <span className="text-gradient-gold block mt-1">Unforgettable</span>
          </h2>

          <p className="text-white/70 text-lg mb-3">
            अपनी मेहंदी बुकिंग आज ही करें
          </p>
          <p className="text-white/60 text-base mb-10 max-w-xl mx-auto">
            Book your appointment with Jaipur's most trusted mehndi artist.
            Available for weddings, festivals, and events across India.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Link href="/book" className="btn btn-gold text-base px-10 py-4">
              <Calendar size={18} />
              Book Appointment
            </Link>
            <a
              href="https://wa.me/918058168076?text=Hi! I want to book mehndi appointment."
              target="_blank"
              rel="noopener noreferrer"
              className="btn text-base px-10 py-4 bg-[#25D366] text-white hover:bg-[#20ba5a]"
            >
              <MessageCircle size={18} />
              WhatsApp Us
            </a>
            <a href="tel:+918058168076" className="btn btn-outline text-base px-8 py-4 border-white/30 text-white hover:bg-white hover:text-primary">
              <Phone size={18} />
              Call Now
            </a>
          </div>

          {/* Feature Points */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: faCheckCircle, label: 'Instant Confirmation' },
              { icon: faMapMarkerAlt, label: 'Home Visit Available' },
              { icon: faPalette, label: 'Custom Designs' },
              { icon: faHeart, label: '100% Natural Henna' },
            ].map(({ icon, label }) => (
              <div key={label} className="flex items-center gap-2 justify-center text-white/70 text-sm">
                <FontAwesomeIcon icon={icon} className="text-gold" />
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
