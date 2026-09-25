const ITEMS = [
  'Gestión de Turnos',
  'Portal Online 24hs',
  'Panel de Control',
  'Gestión de Pacientes',
  'WhatsApp Integrado',
  'Clínicas',
  'Ortopedias',
  'Santa Fe',
  'Argentina',
  'Sistema Odoo',
  'Página Web',
  'Soporte Real',
]

export default function Marquee() {
  return (
    <div className="py-4 bg-stone-900 border-y border-stone-800 overflow-hidden relative">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-r from-stone-900 to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-l from-stone-900 to-transparent pointer-events-none" />

      <div
        className="flex whitespace-nowrap"
        style={{
          animation: 'marquee 28s linear infinite',
        }}
      >
        {[...ITEMS, ...ITEMS].map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-3 px-6 text-xs font-semibold tracking-widest uppercase text-stone-400"
          >
            {item}
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 flex-shrink-0" />
          </span>
        ))}
      </div>

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  )
}
