import { Activity } from 'lucide-react'

const FOOTER_LINKS = [
  { name: 'Solución', href: '#solucion' },
  { name: 'Proceso', href: '#proceso' },
  { name: 'Planes', href: '#planes' },
  { name: 'FAQ', href: '#faq' },
]

export default function Footer() {
  return (
    <footer className="py-12 bg-stone-950 text-stone-400">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <a href="#" className="flex items-center gap-3">
  <svg width="36" height="36" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="48" height="48" rx="12" fill="#047857"/>
    <text x="24" y="26" textAnchor="middle" fontFamily="system-ui" fontWeight="800" fontSize="16" fill="white" letterSpacing="1">MIT</text>
    <path d="M6 34 L12 34 L15 28 L18 38 L21 30 L24 34 L27 34 L30 28 L33 38 L36 31 L39 34 L42 34" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity="0.9"/>
  </svg>
  <div className="flex flex-col leading-tight">
    <span className="text-lg font-bold text-white">
      MIT <span className="text-emerald-400">Sistemas</span>
    </span>
    <span className="text-xs text-stone-400 uppercase tracking-widest">Gestión Digital</span>
  </div>
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

          <div className="text-sm text-center md:text-right">
            <p>© 2026 MIT Sistemas. Todos los derechos reservados.</p>
            <p className="mt-1">Santa Fe, Argentina · +54 9 342 626 4360</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
