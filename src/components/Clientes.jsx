import { motion } from 'framer-motion'
import { ExternalLink, MapPin, Check, Calendar, Globe } from 'lucide-react'

// Clientes que autorizaron a nombrarse (Fede, de SIMS, y Lorena, de CES: 16/11/26).
// Solo datos verificables: no se inventan cifras ni frases de los clientes.
const CLIENTES = [
  {
    nombre: 'Consultorios SIMS',
    rubro: 'Consultorios médicos',
    lugar: 'Santa Fe',
    plan: 'Portal de turnos + panel interno',
    color: 'from-sky-900 to-sky-700',
    inicial: 'S',
    puntos: [
      'Los pacientes reservan solos desde el celular, a cualquier hora',
      'Asistencias e inasistencias por obra social, mes a mes',
      'Última asistencia de cada paciente a la vista en su ficha',
    ],
    links: [{ texto: 'Ver su portal de turnos', href: 'https://sims.mitsistemas.com.ar/turnos', icono: Calendar }],
  },
  {
    nombre: 'CES · Centro de Especialidades de la Salud',
    rubro: 'Centro de especialidades',
    lugar: 'Bv. Pellegrini, Santa Fe',
    plan: 'Web + portal de turnos + panel interno',
    color: 'from-rose-900 to-rose-700',
    inicial: 'C',
    puntos: [
      'Más de 15 profesionales, cada uno con su agenda y sus obras sociales',
      'En el mismo portal: unos reservan por calendario y otros por WhatsApp',
      'Permisos por usuario y botón "Llegó" para la sala de espera',
    ],
    links: [
      { texto: 'Ver su web', href: 'https://ces.mitsistemas.com.ar', icono: Globe },
      { texto: 'Ver su portal de turnos', href: 'https://sistema.ces.mitsistemas.com.ar/turnos', icono: Calendar },
    ],
  },
]

export default function Clientes() {
  return (
    <section id="clientes" className="scroll-mt-20 py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14 lg:mb-16">
          <p className="text-emerald-700 font-semibold mb-4 tracking-wide text-base uppercase">Clientes</p>
          <h2 className="font-display text-3xl lg:text-4xl xl:text-5xl font-bold text-stone-900 mb-6">
            Ya lo usan clínicas de Santa Fe
          </h2>
          <p className="text-lg text-stone-600 leading-relaxed">
            No es una maqueta: estos portales están funcionando hoy, con pacientes reales.
            Entrá y sacá un turno de prueba hasta el último paso para ver cómo lo vive un paciente.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
          {CLIENTES.map((c, i) => (
            <motion.article
              key={c.nombre}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="flex flex-col rounded-3xl border border-stone-200 bg-stone-50 overflow-hidden"
            >
              <div className={`bg-gradient-to-br ${c.color} text-white p-6 lg:p-8 flex items-center gap-4`}>
                <div className="w-14 h-14 shrink-0 rounded-2xl bg-white/15 border border-white/25 flex items-center justify-center font-display text-2xl font-bold" aria-hidden="true">
                  {c.inicial}
                </div>
                <div className="min-w-0">
                  <h3 className="font-display text-xl lg:text-2xl font-bold leading-tight">{c.nombre}</h3>
                  <p className="text-white/80 text-sm mt-1 flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 shrink-0" /> {c.rubro} · {c.lugar}
                  </p>
                </div>
              </div>

              <div className="p-6 lg:p-8 flex flex-col flex-1">
                <p className="inline-flex self-start text-xs font-semibold uppercase tracking-wide text-emerald-800 bg-emerald-100 rounded-full px-3 py-1 mb-5">
                  {c.plan}
                </p>
                <ul className="space-y-3 mb-8">
                  {c.puntos.map(p => (
                    <li key={p} className="flex gap-3 text-stone-700">
                      <Check className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto flex flex-wrap gap-3">
                  {c.links.map(l => (
                    <a
                      key={l.href}
                      href={l.href}
                      target="_blank"
                      rel="noopener"
                      className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white border border-stone-200 font-semibold text-stone-800 hover:border-emerald-700 hover:text-emerald-700 transition-all"
                    >
                      <l.icono className="w-4 h-4" />
                      {l.texto}
                      <ExternalLink className="w-3.5 h-3.5 opacity-60" />
                    </a>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
