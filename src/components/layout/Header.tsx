'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, Phone, ChevronDown } from 'lucide-react'

const navLinks = [
  { href: '/', label: 'Home' },
  {
    label: 'Services',
    href: '/services',
    dropdown: [
      { href: '/services', label: 'All Services' },
      { href: '/bridal-mehndi', label: 'Bridal Mehndi' },
      { href: '/arabic-mehndi', label: 'Arabic Mehndi' },
    ]
  },
  { href: '/gallery', label: 'Gallery' },
  { href: '/mehndi-designs', label: 'Designs' },
  { href: '/blog', label: 'Blog' },
  { href: '/about', label: 'About' },
  {
    label: 'More',
    href: '#',
    dropdown: [
      { href: '/reviews', label: 'Reviews' },
      { href: '/faq', label: 'FAQ' },
      { href: '/contact', label: 'Contact' },
    ]
  },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const pathname = usePathname()

  useEffect(() => {
    setMobileMenuOpen(false)
  }, [pathname])

  // Don't show header in admin
  if (pathname.startsWith('/admin')) return null

  return (
    <>
      {/* Scroll Progress Bar */}
      <ScrollProgressBar />

      {/* Desktop Header - Hidden on mobile */}
      <header className="fixed top-3 left-0 right-0 z-50 px-4 hidden lg:block">
        <div className="nav-glass mx-auto max-w-6xl rounded-2xl shadow-organic">
          <div className="container">
            <div className="flex items-center justify-between h-16 lg:h-18">
              {/* Logo */}
              <Link href="/" className="flex items-center gap-3 group">
                <div className="w-10 h-10 rounded-full bg-primary-gradient flex items-center justify-center flex-shrink-0 shadow-green">
                  <span className="text-white font-serif font-bold text-lg">S</span>
                </div>
                <div className="hidden sm:block">
                  <div className="font-serif font-bold text-primary-container text-lg leading-tight">
                    Shiv Kumar
                  </div>
                  <div className="text-xs text-gold-secondary font-sans uppercase tracking-wider">
                    Mehandi Art
                  </div>
                </div>
              </Link>

              {/* Desktop Navigation */}
              <nav className="hidden lg:flex items-center gap-1">
                {navLinks.map((link) =>
                  link.dropdown ? (
                    <div
                      key={link.label}
                      className="relative"
                      onMouseEnter={() => setActiveDropdown(link.label)}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      <button className="flex items-center gap-1 px-4 py-2 rounded-xl text-sm font-medium text-gray-700 hover:text-primary-container hover:bg-surface-low transition-all duration-200 min-h-[44px]">
                        {link.label}
                        <ChevronDown size={14} className={`transition-transform ${activeDropdown === link.label ? 'rotate-180' : ''}`} />
                      </button>
                      {activeDropdown === link.label && (
                        <div className="absolute top-full left-0 mt-1 bg-white rounded-xl shadow-organic border border-surface-high py-2 min-w-[180px] z-50">
                          {link.dropdown.map((item) => (
                            <Link
                              key={item.href}
                              href={item.href}
                              className="block px-4 py-2.5 text-sm text-gray-700 hover:text-primary-container hover:bg-surface-low transition-colors"
                            >
                              {item.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 min-h-[44px] flex items-center ${
                        pathname === link.href
                          ? 'text-primary-container bg-surface-container font-semibold'
                          : 'text-gray-700 hover:text-primary-container hover:bg-surface-low'
                      }`}
                    >
                      {link.label}
                    </Link>
                  )
                )}
              </nav>

              {/* CTA + Mobile Toggle */}
              <div className="flex items-center gap-3">
                <a
                  href="tel:+918058168076"
                  className="hidden md:flex items-center gap-1.5 text-sm text-primary-container font-medium hover:text-gold transition-colors"
                >
                  <Phone size={15} />
                  <span>Call Now</span>
                </a>
                <Link
                  href="/book"
                  className="btn btn-primary text-sm px-5 py-2.5 hidden sm:flex"
                >
                  Book Now
                </Link>
                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="lg:hidden p-2 rounded-xl hover:bg-surface-container transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
                  aria-label="Toggle menu"
                >
                  {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Full-Screen Overlay Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden fixed inset-0 z-40 bg-primary flex flex-col" style={{ paddingTop: '80px' }}>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="absolute top-5 right-5 p-2 text-white"
            >
              <X size={28} />
            </button>
            <nav className="flex flex-col px-8 py-6 gap-2 overflow-y-auto">
              {navLinks.map((link) => (
                link.dropdown ? (
                  <div key={link.label}>
                    <div className="text-xs text-gold uppercase tracking-widest py-3 font-semibold">{link.label}</div>
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block text-white/80 text-lg py-2 hover:text-gold transition-colors pl-4"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`text-xl py-3 transition-colors border-b border-white/10 ${
                      pathname === link.href ? 'text-gold font-semibold' : 'text-white hover:text-gold'
                    }`}
                  >
                    {link.label}
                  </Link>
                )
              ))}
              <Link href="/book" className="btn btn-gold mt-6 text-center justify-center">
                Book Appointment
              </Link>
              <a href="https://wa.me/918058168076" className="btn btn-outline mt-2 text-center justify-center border-gold/50 text-gold">
                WhatsApp Us
              </a>
            </nav>
          </div>
        )}
      </header>

      {/* Mobile Bottom Navigation */}
      <MobileBottomNav pathname={pathname} />
    </>
  )
}

function ScrollProgressBar() {
  const [width, setWidth] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const el = document.documentElement
      const scrollTop = el.scrollTop || document.body.scrollTop
      const scrollHeight = el.scrollHeight - el.clientHeight
      const scrolled = (scrollTop / scrollHeight) * 100
      setWidth(scrolled)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return <div className="scroll-progress" style={{ width: `${width}%` }} />
}

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faImages, faCalendar, faComments, faBars } from '@fortawesome/free-solid-svg-icons'

function MobileBottomNav({ pathname }: { pathname: string }) {
  const [visible, setVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      
      // Show nav when scrolling up, hide when scrolling down
      if (currentScrollY < lastScrollY || currentScrollY < 50) {
        setVisible(true)
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setVisible(false)
      }
      
      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  const mainItems = [
    { href: '/', icon: faHome, label: 'Home' },
    { href: '/gallery', icon: faImages, label: 'Gallery' },
    { href: '/book', icon: faCalendar, label: 'Book' },
    { href: '/contact', icon: faComments, label: 'Chat' },
  ]

  const menuItems = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'All Services' },
    { href: '/bridal-mehndi', label: 'Bridal Mehndi' },
    { href: '/arabic-mehndi', label: 'Arabic Mehndi' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/mehndi-designs', label: 'Designs' },
    { href: '/blog', label: 'Blog' },
    { href: '/about', label: 'About' },
    { href: '/reviews', label: 'Reviews' },
    { href: '/faq', label: 'FAQ' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <>
      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-[45]"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* Mobile Menu Drawer */}
      <div 
        className={`lg:hidden fixed bottom-0 left-0 right-0 z-[45] transition-transform duration-300 ${
          menuOpen ? 'translate-y-0' : 'translate-y-full'
        }`}
      >
        <div className="bg-white rounded-t-3xl shadow-2xl max-h-[70vh] overflow-y-auto">
          <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between rounded-t-3xl">
            <h3 className="font-serif font-bold text-primary-container text-lg">Menu</h3>
            <button 
              onClick={() => setMenuOpen(false)}
              className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
            >
              <X size={18} />
            </button>
          </div>
          <nav className="px-4 py-4">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className={`block px-4 py-3 rounded-xl text-sm font-medium transition-colors mb-1 ${
                  pathname === item.href
                    ? 'bg-primary/10 text-primary-container'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="px-6 py-4 border-t border-gray-200">
            <Link 
              href="/book" 
              className="btn btn-primary w-full justify-center"
              onClick={() => setMenuOpen(false)}
            >
              Book Appointment
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Navigation Bar */}
      <div 
        className={`lg:hidden fixed bottom-4 left-4 right-4 z-40 transition-all duration-300 ${
          visible ? 'translate-y-0 opacity-100' : 'translate-y-24 opacity-0'
        }`}
      >
        <div className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/30 px-2 py-2">
          <div className="flex items-center justify-around">
            {mainItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`flex-1 flex flex-col items-center justify-center gap-1 text-xs font-medium transition-all duration-200 min-h-[56px] rounded-xl ${
                  pathname === item.href
                    ? 'text-primary-container bg-primary/10'
                    : 'text-gray-600 hover:text-primary-container hover:bg-gray-50'
                }`}
              >
                <FontAwesomeIcon icon={item.icon} className="text-lg" />
                <span className="text-[10px]">{item.label}</span>
              </Link>
            ))}
            {/* Menu Button */}
            <button
              onClick={() => setMenuOpen(true)}
              className="flex-1 flex flex-col items-center justify-center gap-1 text-xs font-medium transition-all duration-200 min-h-[56px] rounded-xl text-gray-600 hover:text-primary-container hover:bg-gray-50"
            >
              <FontAwesomeIcon icon={faBars} className="text-lg" />
              <span className="text-[10px]">Menu</span>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
