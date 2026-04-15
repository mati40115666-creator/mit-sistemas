import { useState } from 'react'
import { motion } from 'framer-motion'
import { Check, ArrowRight } from 'lucide-react'

const PLANS = [
  {
    name: 'Esencial',
    price: '300',
    maintenance: '60',
    desc: 'Para centro médicos que recién empiezan a digitalizarse',
    features: [
      'Página web profesional',
      'Formulario de contacto + WhatsApp',
      'SEO local y Google Maps',
      '1 usuario administrador',
      'Soporte activo 30 días'
    ],
    cta: 'Consultar disponibilidad',
    popular: false
  },
  {
    name: 'Profesional',
    price: '600',
    maintenance: '100',
    desc: 'El más elegido por ortopedias y centro médicos',
    features: [
      'Todo lo del plan Esencial',
      'Sistema Odoo: turnos + pacientes + finanzas',
      'Facturación electrónica AFIP',
      'Control de stock de insumos',
      '3 usuarios simultáneos',
      'Capacitación 2hs en vivo',
      'Soporte activo 60 días'
    ],
    cta: 'Quiero este plan',
    popular: true
  },
  {
    name: 'Premium',
    price: '1.200',
    maintenance: '150',
    desc: 'Para centro médicos con múltiples especialidades',
    features: [
      'Todo lo del plan Profesional',
      'Usuarios ilimitados',
      'Integración con WhatsApp Business API',
      'Reportes avanzados personalizados',
      'Capacitación extendida 4hs',
      'Llamada mensual de seguimiento',
      'Soporte prioritario 90 días'
    ],
    cta: 'Contactar',
    popular: false
  }
]

export default function Pricing() {
  const [hoveredPlan, setHoveredPlan] = useState(null)

  return (
    <section id="planes" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-emerald-700 font-semibold mb-4 tracking-wide text-base uppercase">Inversiones</p>
          <h2 className="font-display text-3xl lg:text-4xl xl:text-5xl font-bold text-stone-900 mb-6">
            Precios claros, sin sorpresas
          </h2>
          <p className="text-lg text-stone-600">
            Todos los planes incluyen implementación completa y capacitación. 
            El mantenimiento mensual es opcional pero recomendado.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 items-start">
          {PLANS.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              onMouseEnter={() => setHoveredPlan(i)}
              onMouseLeave={() => setHoveredPlan(null)}
              className={`relative rounded-2xl lg:rounded-3xl p-6 lg:p-8 transition-all duration-300 ${
                plan.popular
                  ? 'bg-stone-900 text-white shadow-2xl shadow-stone-900/20 lg:scale-105 lg:-my-4'
                  : 'bg-stone-50 text-stone-900 border border-stone-200 hover:border-emerald-300'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1.5 bg-emerald-500 text-white text-sm font-semibold rounded-full shadow-lg">
                    Más elegido
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <p className={`text-sm ${plan.popular ? 'text-stone-400' : 'text-stone-500'}`}>
                  {plan.desc}
                </p>
              </div>

              <div className="mb-6">
                <div className="flex items-baseline gap-1">
                  <span className="text-2xl font-semibold">$</span>
                  <span className="text-5xl font-bold">{plan.price}</span>
                  <span className={`text-sm ${plan.popular ? 'text-stone-400' : 'text-stone-500'}`}>
                    USD
                  </span>
                </div>
                <p className={`text-sm mt-2 ${plan.popular ? 'text-stone-400' : 'text-stone-500'}`}>
                  + ${plan.maintenance}/mes mantenimiento opcional
                </p>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, fi) => (
                  <li key={fi} className="flex items-start gap-3">
                    <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                      plan.popular ? 'text-emerald-400' : 'text-emerald-600'
                    }`} />
                    <span className={`text-sm ${plan.popular ? 'text-stone-300' : 'text-stone-600'}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-4 rounded-xl font-semibold transition-all flex items-center justify-center gap-2 ${
                  plan.popular
                    ? 'bg-emerald-500 text-white hover:bg-emerald-400'
                    : 'bg-stone-900 text-white hover:bg-stone-800'
                }`}
              >
                {plan.cta}
                <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          ))}
        </div>

        <p className="text-center mt-12 text-stone-500">
          ¿No sabés cuál elegir?{' '}
          <a href="#contacto" className="text-emerald-700 font-semibold hover:underline">
            Escribime y te asesoro sin compromiso
          </a>
        </p>
      </div>
    </section>
  )
}
