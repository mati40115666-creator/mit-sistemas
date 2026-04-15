import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const FAQS = [
  {
    q: '¿Cuánto tiempo tarda estar funcionando?',
    a: 'Entre 2 y 4 semanas dependiendo de la complejidad. La primera semana es configuración, la segunda es capacitación y ajustes finales. Tu clínica no se detiene durante el proceso.'
  },
  {
    q: '¿Necesito saber de tecnología?',
    a: 'Para nada. Si usás WhatsApp y Excel básico, podés usar el sistema. La interfaz es intuitiva y te capacitamos paso a paso. Si sabés usar un smartphone, podés usar Odoo.'
  },
  {
    q: '¿Qué pasa si ya tengo una página web?',
    a: 'Podemos integrar el sistema de turnos a tu web actual, o rediseñarla si querés una imagen más profesional. Lo evaluamos en la primera reunión sin costo.'
  },
  {
    q: '¿El mantenimiento mensual es obligatorio?',
    a: 'No es obligatorio, pero sí recomendable. Incluye actualizaciones de seguridad, backups automáticos y soporte técnico. Sin mantenimiento el sistema sigue funcionando, pero sin soporte prioritario.'
  },
  {
    q: '¿Trabajás solo en Santa Fe?',
    a: 'El trabajo es 100% remoto, así que atendemos todo Argentina. La capacitación es por videollamada y el soporte por WhatsApp. Sin costos extras por distancia.'
  },
  {
  q: '¿En qué se diferencia el acompañamiento de 60 días del mantenimiento mensual?',
  a: 'El acompañamiento es la etapa inicial intensiva — te ayudamos a cargar los primeros datos, ajustamos el sistema a tu flujo de trabajo y respondemos tus dudas en minutos. Una vez que lo manejás solo, esa etapa termina. El mantenimiento mensual es opcional y cubre actualizaciones de seguridad, backups automáticos y soporte técnico cuando surge algo puntual.'
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <section id="faq" className="py-24 lg:py-32 bg-stone-50 border-t border-stone-200">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-emerald-700 font-semibold mb-4 tracking-wide text-base uppercase">Preguntas frecuentes</p>
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-stone-900">
            Todo lo que necesitás saber
          </h2>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="bg-white rounded-2xl border border-stone-200 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-stone-50 transition-colors"
              >
                <span className="font-semibold text-stone-900 pr-8">{faq.q}</span>
                <motion.div
                  animate={{ rotate: openIndex === i ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown className="w-5 h-5 text-stone-400 flex-shrink-0" />
                </motion.div>
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <p className="px-6 pb-6 text-stone-600 leading-relaxed">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
