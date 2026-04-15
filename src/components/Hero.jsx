import { motion } from 'framer-motion'
import { ArrowRight, Check, TrendingUp, Clock, Building2 } from 'lucide-react'

const STATS = [
  { value: '1', label: 'mes', sub: 'implementación' },
  { value: '2', label: 'hs', sub: 'capacitación' },
  { value: '100', label: '%', sub: 'acompañamiento 60 días' },
  { value: '24/7', label: '', sub: 'acceso online' },
]

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-stone-50">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-emerald-100 rounded-full blur-3xl opacity-60" />
        <div className="absolute top-1/2 -left-20 w-72 h-72 bg-orange-100 rounded-full blur-3xl opacity-40" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-emerald-50 rounded-full blur-2xl opacity-40" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 text-emerald-800 rounded-full text-sm font-medium mb-6"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600"></span>
              </span>
              Implementación garantizada en 30 días
            </motion.div>

            <h1 className="font-display text-5xl lg:text-6xl xl:text-7xl font-bold text-stone-900 leading-[1.1] mb-6">
              Tu clínica{' '}
              <span className="text-emerald-700">organizada</span>,{' '}
              <br />
              <span className="text-stone-400">tu tiempo recuperado</span>
            </h1>

            <p className="text-lg text-stone-600 leading-relaxed mb-8 max-w-lg">
              Sistemas de gestión Odoo + páginas web profesionales para ortopedias, 
              clínicas y centros de salud en Argentina.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a
                href="#contacto"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-emerald-700 text-white font-semibold rounded-xl hover:bg-emerald-800 transition-all hover:shadow-lg hover:shadow-emerald-700/20"
              >
                Quiero una demo gratis
                <ArrowRight className="w-5 h-5" />
              </a>
               <a
                href="#planes"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-stone-700 font-semibold rounded-xl border border-stone-200 hover:border-emerald-700 hover:text-emerald-700 transition-all"
               >
                Solicitar cotización
             </a>
            </div>

            <div className="flex flex-wrap items-center gap-6 text-sm text-stone-500">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600" />
                <span>Sin permanencia</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600" />
                <span>Implementación garantizada</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600" />
                <span>Soporte por WhatsApp</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative bg-white rounded-3xl shadow-2xl shadow-stone-200/50 p-6 lg:p-8 border border-stone-100">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <p className="text-sm text-stone-500 mb-1">Panel de control</p>
                  <h3 className="text-xl lg:text-2xl font-bold text-stone-900">Centro Médico</h3>
                </div>
                <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center">
                  <Building2 className="w-6 h-6 text-emerald-700" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-stone-50 rounded-2xl p-4">
                  <p className="text-sm text-stone-500 mb-1">Consultas hoy</p>
                  <p className="text-2xl lg:text-3xl font-bold te xt-stone-900">12</p>
                  <p className="text-xs text-emerald-600 mt-1 flex items-center gap-1">
                    <TrendingUp className="w-3 h-3" />
                    +3 vs ayer
                  </p>
                </div>
                <div className="bg-stone-50 rounded-2xl p-4">
                  <p className="text-sm text-stone-500 mb-1">Stock crítico</p>
                  <p className="text-2xl lg:text-3xl font-bold text-stone-900">2</p>
                  <p className="text-xs text-orange-600 mt-1">Reponer</p>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-stone-50 rounded-xl">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center text-emerald-700 font-semibold text-sm">
                      ML
                    </div>
                    <div>
                      <p className="font-medium text-stone-900 text-sm">María López</p>
                      <p className="text-xs text-stone-500">10:30 - Consulta</p>
                    </div>
                  </div>
                  <span className="px-3 py-1 bg-emerald-100 text-emerald-700 text-xs font-medium rounded-full">
                    Confirmado
                  </span>
                </div>
                <div className="flex items-center justify-between p-3 bg-stone-50 rounded-xl">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center text-orange-700 font-semibold text-sm">
                      RG
                    </div>
                    <div>
                      <p className="font-medium text-stone-900 text-sm">Roberto Gómez</p>
                      <p className="text-xs text-stone-500">11:00 - Consulta</p>
                    </div>
                  </div>
                  <span className="px-3 py-1 bg-orange-100 text-orange-700 text-xs font-medium rounded-full">
                    Pendiente
                  </span>
                </div>
                <div className="flex items-center justify-between p-3 bg-stone-50 rounded-xl">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-700 font-semibold text-sm">
                      CP
                    </div>
                    <div>
                      <p className="font-medium text-stone-900 text-sm">Carlos Pérez</p>
                      <p className="text-xs text-stone-500">11:30 - Control</p>
                    </div>
                  </div>
                  <span className="px-3 py-1 bg-emerald-100 text-emerald-700 text-xs font-medium rounded-full">
                    Confirmado
                  </span>
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-4 border border-stone-100"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-emerald-700" />
                </div>
                <div>
                  <p className="text-sm text-stone-500">Facturación</p>
                  <p className="text-lg font-bold text-stone-900">+38% este mes</p>
                </div>
              </div>
            </motion.div>

            {/* Second floating element */}
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -top-4 -right-4 bg-emerald-700 text-white rounded-2xl shadow-xl p-4"
            >
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <div>
                  <p className="text-xs text-emerald-100">Ahorro semanal</p>
                  <p className="font-bold">12 horas</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-20 lg:mt-28 grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t border-stone-200"
        >
          {STATS.map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-stone-900 mb-1">
                {stat.value}<span className="text-emerald-600">{stat.label}</span>
              </div>
              <p className="text-sm text-stone-500">{stat.sub}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
