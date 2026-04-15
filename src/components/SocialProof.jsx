import { motion } from 'framer-motion'
import { Building2, TrendingUp, Package, CreditCard, Quote } from 'lucide-react'

export default function SocialProof() {
  return (
    <section className="py-20 lg:py-28 bg-emerald-900 text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-emerald-300 font-semibold mb-4 tracking-wide text-sm uppercase">Caso de éxito</p>
            <h2 className="font-display text-3xl lg:text-4xl font-bold mb-6 leading-tight">
              Cómo Global Médica pasó de Excel a un sistema profesional
            </h2>
            <p className="text-emerald-100 text-lg leading-relaxed mb-8">
              Centro de ortopedia y traumatología en Santa Fe. Especialidades: 
              cirugías, implantes biomédicos, artroscopia, insumos hospitalarios 
              y equipamiento médico.
            </p>

            <div className="grid grid-cols-3 gap-6 mb-10">
              <div className="text-center p-4 bg-emerald-800/50 rounded-2xl">
                <p className="text-2xl lg:text-3xl font-bold text-emerald-300 mb-1">-40%</p>
                <p className="text-xs lg:text-sm text-emerald-200">tiempo administrativo</p>
              </div>
              <div className="text-center p-4 bg-emerald-800/50 rounded-2xl">
                <p className="text-2xl lg:text-3xl font-bold text-emerald-300 mb-1">100%</p>
                <p className="text-xs lg:text-sm text-emerald-200">stock controlado</p>
              </div>
              <div className="text-center p-4 bg-emerald-800/50 rounded-2xl">
                <p className="text-2xl lg:text-3xl font-bold text-emerald-300 mb-1">0</p>
                <p className="text-xs lg:text-sm text-emerald-200">turnos perdidos</p>
              </div>
            </div>

            <blockquote className="relative">
              <Quote className="absolute -top-2 -left-2 w-8 h-8 text-emerald-700 opacity-50" />
              <p className="pl-8 text-emerald-100 italic text-lg leading-relaxed">
                "Implementamos el sistema en un mes y en dos horas de capacitación 
                ya lo usábamos solos. Ahora sabemos exactamente qué hay en stock 
                y cuánto facturamos sin depender de nadie."
              </p>
              <footer className="pl-8 mt-4 text-emerald-300 font-semibold">
                — Director, Global Médica · Santa Fe, Argentina
              </footer>
            </blockquote>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-emerald-800 rounded-3xl p-6 lg:p-8 border border-emerald-700">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-lg">
                  <Building2 className="w-8 h-8 text-emerald-700" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Global Médica</h3>
                  <p className="text-emerald-300">Ortopedia y Traumatología</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-emerald-900/50 rounded-xl p-4 border border-emerald-700/50">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <Package className="w-5 h-5 text-emerald-400" />
                      <span className="text-emerald-100 font-medium">Stock de implantes</span>
                    </div>
                    <span className="text-emerald-300 text-sm font-semibold">Automatizado</span>
                  </div>
                  <div className="h-2 bg-emerald-950 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: '85%' }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.5 }}
                      className="h-full bg-emerald-400 rounded-full" 
                    />
                  </div>
                  <p className="text-xs text-emerald-400 mt-2">124 productos controlados</p>
                </div>

                <div className="bg-emerald-900/50 rounded-xl p-4 border border-emerald-700/50">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <CreditCard className="w-5 h-5 text-emerald-400" />
                      <span className="text-emerald-100 font-medium">Cuentas corrientes</span>
                    </div>
                    <span className="text-emerald-300 text-sm font-semibold">Tiempo real</span>
                  </div>
                  <div className="h-2 bg-emerald-950 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: '100%' }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.7 }}
                      className="h-full bg-emerald-400 rounded-full" 
                    />
                  </div>
                  <p className="text-xs text-emerald-400 mt-2">Obras sociales y particulares</p>
                </div>

                <div className="bg-emerald-900/50 rounded-xl p-4 border border-emerald-700/50">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <TrendingUp className="w-5 h-5 text-emerald-400" />
                      <span className="text-emerald-100 font-medium">Facturación mensual</span>
                    </div>
                    <span className="text-emerald-300 text-sm font-semibold">En tiempo real</span>
                  </div>
                  <div className="h-2 bg-emerald-950 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: '92%' }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.9 }}
                      className="h-full bg-emerald-400 rounded-full" 
                    />
                  </div>
                  <p className="text-xs text-emerald-400 mt-2">Obras sociales y particulares</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
