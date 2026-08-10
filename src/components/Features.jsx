import { motion } from 'framer-motion'
import { Calendar, Users, TrendingUp, Shield, FileText, HeadphonesIcon } from 'lucide-react'

const FEATURES = [
  {
    icon: Calendar,
    title: 'Turnos online sin llamadas',
    desc: 'Los pacientes reservan solos desde la web, eligiendo profesional y horario disponible. Tu recepción deja de vivir del teléfono.'
  },
  {
    icon: Users,
    title: 'Ficha de pacientes centralizada',
    desc: 'Datos, obra social y requisitos de cada paciente en un mismo lugar, accesible para todo el equipo.'
  },
  {
    icon: TrendingUp,
    title: 'Panel de gestión diario',
    desc: 'Agenda del día lista para imprimir, filtro de turnos por profesional y por fecha, todo desde un panel simple.'
  },
  {
    icon: Shield,
    title: 'Aviso de turno por WhatsApp',
    desc: 'Un clic desde el panel abre WhatsApp con el mensaje de turno ya escrito, listo para enviar al paciente.'
  },
  {
    icon: FileText,
    title: 'Página web profesional',
    desc: 'Diseño moderno, carga rápida, posicionado en Google. Tus pacientes te encuentran antes que a la competencia.'
  },
  {
    icon: HeadphonesIcon,
    title: 'Soporte humano y personalizado',  
    desc: 'Capacitación y soporte por WhatsApp. No te dejamos solo después de la venta.'
  }
]

export default function Features() {
  return (
    <section id="solucion" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <p className="text-emerald-700 font-semibold mb-4 tracking-wide text-base uppercase">La solución</p>
          <h2 className="font-display text-3xl lg:text-4xl xl:text-5xl font-bold text-stone-900 mb-6">
            Todo lo que necesita tu clínica en un solo sistema
          </h2>
          <p className="text-lg text-stone-600 leading-relaxed">
            El sistema base incluye todo lo necesario para ordenar la agenda desde el día uno.
            Historial clínico, stock de insumos y facturación se suman como módulos, según
            lo que cada clínica necesite.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {FEATURES.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group p-6 lg:p-8 rounded-2xl lg:rounded-3xl bg-stone-50 hover:bg-emerald-50 transition-all duration-300 border border-stone-100 hover:border-emerald-200"
            >
              <div className="w-12 h-12 lg:w-14 lg:h-14 bg-white rounded-xl lg:rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 group-hover:shadow-md transition-all duration-300">
                <feature.icon className="w-6 h-6 lg:w-7 lg:h-7 text-emerald-700" />
              </div>
              <h3 className="text-lg lg:text-xl font-bold text-stone-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-stone-600 leading-relaxed text-sm lg:text-base">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
