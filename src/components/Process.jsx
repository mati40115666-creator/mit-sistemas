import { motion } from 'framer-motion'
import { Search, Settings, GraduationCap, MessageCircle } from 'lucide-react'

const PROCESS_STEPS = [
  {
    num: '01',
    icon: Search,
    title: 'Diagnóstico gratuito',
    desc: 'Reunión de 20 minutos para entender cómo funciona tu centro médico hoy y qué procesos necesitás automatizar urgentemente.'
  },
  {
    num: '02',
    icon: Settings,
    title: 'Implementación',
    desc: 'Configuramos el sistema con tus datos reales: pacientes, servicios, precios, stock inicial y obras sociales.'
  },
  {
    num: '03',
    icon: GraduationCap,
    title: 'Capacitación',
    desc: 'Dos horas de entrenamiento práctico con tu equipo. Grabado para que lo vean las veces que quieran.'
  },
  {
    num: '04',
    icon: MessageCircle,
    title: 'Soporte continuo',
    desc: '60 días de acompañamiento directo por WhatsApp. Resolvemos dudas en minutos, no en días.'
  }
]

export default function Process() {
  return (
    <section id="proceso" className="py-24 lg:py-32 bg-emerald-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <p className="text-emerald-300 font-semibold mb-4 tracking-wide text-sm uppercase">Cómo trabajamos</p>
          <h2 className="font-display text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-6">
            De la reunión inicial al sistema funcionando en 4 pasos
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {PROCESS_STEPS.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative"
            >
              {/* Connector line */}
              {i < 3 && (
                <div className="hidden lg:block absolute top-12 left-full w-full h-px">
                  <div className="w-full h-full bg-gradient-to-r from-emerald-200 to-transparent" />
                </div>
              )}
              
              <div className="text-5xl lg:text-6xl font-bold text-emerald-700 mb-4 font-display">
                {step.num}
              </div>
              <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-4">
                <step.icon className="w-6 h-6 text-emerald-700" />
              </div>
              <h3 className="text-lg lg:text-xl font-bold text-white mb-3">
                {step.title}
              </h3>
              <p className="text-emerald-100 leading-relaxed text-sm lg:text-base">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
