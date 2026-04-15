import { motion } from 'framer-motion'
import { Calendar, Users, TrendingUp, Shield, FileText, HeadphonesIcon } from 'lucide-react'

const FEATURES = [
  {
    icon: Calendar,
    title: 'Gestión de turnos inteligente',
    desc: 'Pacientes reservan online, reciben recordatorios automáticos por WhatsApp y tu recepción no pierde tiempo en llamadas.'
  },
  {
    icon: Users,
    title: 'Historial clínico unificado',
    desc: 'Toda la información del paciente en un solo lugar: consultas, estudios, evolución, recetas y pagos históricos.'
  },
  {
    icon: TrendingUp,
    title: 'Control financiero real',
    desc: 'Facturación electrónica AFIP integrada, cuentas corrientes de pacientes y obras sociales, reportes automáticos mensuales.'
  },
  {
    icon: Shield,
    title: 'Stock de insumos médicos',
    desc: 'Seguimiento de implantes, materiales descartables y equipamiento. Alertas automáticas cuando hay que reponer stock.'
  },
  {
    icon: FileText,
    title: 'Página web profesional',
    desc: 'Diseño moderno, carga rápida, posicionado en Google. Tus pacientes te encuentran antes que a la competencia.'
  },
  {
    icon: HeadphonesIcon,
    title: 'Soporte humano y personalizado',  
    desc: 'Capacitación en vivo y soporte por WhatsApp con respuesta en menos de 2 horas. No te dejamos solo después de la venta.'
  }
]

export default function Features() {
  return (
    <section id="solucion" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <p className="text-emerald-700 font-semibold mb-4 tracking-wide text-sm uppercase">La solución</p>
          <h2 className="font-display text-3xl lg:text-4xl xl:text-5xl font-bold text-stone-900 mb-6">
            Todo lo que necesita tu clínica en un solo sistema
          </h2>
          <p className="text-lg text-stone-600 leading-relaxed">
            No son herramientas sueltas. Es una plataforma integrada donde 
            turnos, pacientes, stock y finanzas se conectan automáticamente.
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
