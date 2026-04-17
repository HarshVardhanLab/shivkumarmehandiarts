import Link from 'next/link'
import { MapPin, Phone, Mail, Heart } from 'lucide-react'

const footerLinks = {
  services: [
    { href: '/bridal-mehndi', label: 'Bridal Mehndi' },
    { href: '/arabic-mehndi', label: 'Arabic Mehndi' },
    { href: '/services', label: 'Karvachauth Mehndi' },
    { href: '/services', label: 'Baby Shower' },
    { href: '/services', label: 'Festival Mehndi' },
    { href: '/services', label: 'Corporate Events' },
  ],
  quickLinks: [
    { href: '/gallery', label: 'Gallery' },
    { href: '/mehndi-designs', label: 'Design Inspiration' },
    { href: '/blog', label: 'Blog & Tips' },
    { href: '/reviews', label: 'Customer Reviews' },
    { href: '/faq', label: 'FAQs' },
    { href: '/about', label: 'About the Artist' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-primary text-white/80 pb-20 lg:pb-0">
      {/* Main Footer */}
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                <span className="text-gold font-serif font-bold text-xl">S</span>
              </div>
              <div>
                <div className="font-serif font-bold text-white text-xl">Shiv Kumar</div>
                <div className="text-xs text-gold uppercase tracking-wider">Mehandi Art</div>
              </div>
            </div>
            <p className="text-sm text-white/60 leading-relaxed mb-5">
              Where tradition meets artistry. 15+ years of crafting beautiful mehndi designs for life's most special moments.
            </p>
            <p className="text-gold font-serif italic text-lg mb-6">
              "मेहंदी जो दिल से बनाई जाए"
            </p>

            {/* Social Icons */}
            <div className="flex gap-3">
              <a
                href="#"
                aria-label="Instagram"
                className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center hover:bg-gold hover:text-primary transition-all duration-300"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center hover:bg-gold hover:text-primary transition-all duration-300"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a
                href="#"
                aria-label="YouTube"
                className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center hover:bg-gold hover:text-primary transition-all duration-300"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-serif font-semibold text-white text-lg mb-5 flex items-center gap-2">
              <span className="w-6 h-0.5 bg-gold inline-block"></span>
              Services
            </h3>
            <ul className="space-y-2.5">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-gold transition-colors flex items-center gap-2 group"
                  >
                    <span className="text-gold/40 group-hover:text-gold transition-colors">›</span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif font-semibold text-white text-lg mb-5 flex items-center gap-2">
              <span className="w-6 h-0.5 bg-gold inline-block"></span>
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-gold transition-colors flex items-center gap-2 group"
                  >
                    <span className="text-gold/40 group-hover:text-gold transition-colors">›</span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-serif font-semibold text-white text-lg mb-5 flex items-center gap-2">
              <span className="w-6 h-0.5 bg-gold inline-block"></span>
              Contact
            </h3>

            <ul className="space-y-4">
              <li className="flex gap-3">
                <MapPin size={16} className="text-gold flex-shrink-0 mt-0.5" />
                <span className="text-sm leading-relaxed">
                  Shop No. 46, Jawahar Nagar<br />Jaipur, Rajasthan — 302004
                </span>
              </li>
              <li className="flex gap-3 items-center">
                <Phone size={16} className="text-gold flex-shrink-0" />
                <a href="tel:+918058168076" className="text-sm hover:text-gold transition-colors">
                  +91 8058168076
                </a>
              </li>
              <li className="flex gap-3 items-center">
                <Mail size={16} className="text-gold flex-shrink-0" />
                <a href="mailto:shivkumarmehandi9419@gmail.com" className="text-sm hover:text-gold transition-colors break-all">
                  shivkumarmehandi9419@gmail.com
                </a>
              </li>
            </ul>

            {/* Business Hours */}
            <div className="mt-5 p-3 bg-white/5 rounded-xl">
              <p className="text-xs text-gold uppercase tracking-wider mb-2 font-semibold">Business Hours</p>
              <p className="text-xs text-white/60">Open 24×7 — Always Available</p>
            </div>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/918058168076?text=Hi! I'd like to book a mehndi appointment."
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 flex items-center gap-2 bg-[#25D366]/20 hover:bg-[#25D366]/30 text-white px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 border border-[#25D366]/30"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="#25D366">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/40">
          <p className="flex items-center gap-1.5">
            © 2024 Shiv Kumar Mehandi Art. Crafted with
            <Heart size={12} className="text-gold fill-gold" />
            &amp; Tradition.
          </p>
          <div className="flex gap-5">
            <Link href="/privacy" className="hover:text-gold transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-gold transition-colors">Terms of Service</Link>
            <Link href="/admin/login" className="hover:text-gold transition-colors">Artist Login</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
