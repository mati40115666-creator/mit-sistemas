import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, X, Menu } from 'lucide-react'

const NAV_LINKS = [
  { name: 'Solución', href: '#solucion' },
  { name: 'Proceso', href: '#proceso' },
  { name: 'Sobre mí', href: '#nosotros' },
  { name: 'Planes', href: '#planes' },
  { name: 'FAQ', href: '#faq' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="#" className="flex items-center gap-3">
  <svg width="40" height="40" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="48" height="48" rx="12" fill="#047857"/>
    <text x="24" y="26" textAnchor="middle" fontFamily="system-ui" fontWeight="800" fontSize="16" fill="white" letterSpacing="1">MIT</text>
    <path d="M6 34 L12 34 L15 28 L18 38 L21 30 L24 34 L27 34 L30 28 L33 38 L36 31 L39 34 L42 34" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity="0.9"/>
  </svg>
  <div className="flex flex-col leading-tight">
    <span className="text-xl font-bold text-stone-900 tracking-tight">
      MIT <span className="text-emerald-700">Sistemas</span>
    </span>
    <span className="text-xs text-stone-400 uppercase tracking-widest">Gestión Digital</span>
  </div>
</a>

          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-stone-600 hover:text-emerald-700 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <a
              href="#contacto"
              className="inline-flex items-center gap-2 px-10 py-3.5 bg-emerald-700 text-white font-semibold rounded-full hover:bg-emerald-800 transition-colors tracking-wide uppercase text-sm"
            >
              Agendar demo
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <button
            className="md:hidden p-2 text-stone-600"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white border-t border-stone-200"
        >
          <div className="px-6 py-4 space-y-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block text-stone-600 font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contacto"
              className="block w-full text-center px-5 py-3 bg-emerald-700 text-white font-semibold rounded-full"
              onClick={() => setMobileMenuOpen(false)}
            >
              Agendar demo
            </a>
          </div>
        </motion.div>
      )}
    </motion.nav>
  )
}
