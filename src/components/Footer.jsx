import { Instagram, Linkedin, Phone, Mail } from 'lucide-react'
import Logo from './Logo'

const FOOTER_LINKS = [
  { name: 'Solución', href: '#solucion' },
  { name: 'Proceso', href: '#proceso' },
  { name: 'Planes', href: '#planes' },
  { name: 'FAQ', href: '#faq' },
]

const SOCIAL_LINKS = [
  { icon: Instagram, href: 'https://www.instagram.com/mitsistemas.ar', label: 'Instagram' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/matiastasi', label: 'LinkedIn' },
  { icon: Phone, href: 'https://wa.me/5493425500020?text=Hola%20Mat%C3%ADas%2C%20quiero%20saber%20m%C3%A1s%20sobre%20MIT%20Sistemas.', label: 'WhatsApp' },
  { icon: Mail, href: 'mailto:matiastasi97@gmail.com', label: 'Email' },
]

export default function Footer() {
  return (
    <footer className="py-12 bg-stone-950 text-stone-400">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <a href="#" aria-label="MIT Sistemas — inicio">
            <Logo size={40} white textClass="text-lg" />
          </a>

          <div className="flex items-center gap-8 text-sm">
            {FOOTER_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="flex flex-col items-center md:items-end gap-3">
            <div className="flex items-center gap-4">
              {SOCIAL_LINKS.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="text-stone-400 hover:text-emerald-400 transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
            <div className="text-sm text-center md:text-right">
              <p>© 2026 MIT Sistemas. Todos los derechos reservados.</p>
              <p className="mt-1">Santa Fe, Argentina · +54 9 342 626 4360</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}