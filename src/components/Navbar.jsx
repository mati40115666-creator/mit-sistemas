import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, X, Menu } from 'lucide-react'
import Logo from './Logo'

const NAV_LINKS = [
  { name: 'Solución', href: '#solucion' },
  { name: 'Proceso', href: '#proceso' },
  { name: 'Fundador', href: '#nosotros' },
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
          <a href="#" aria-label="MIT Sistemas — inicio">
            <Logo />
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
