import { motion } from 'framer-motion'
import { MapPin, Code2, HeartPulse, MessageCircle } from 'lucide-react'
import Avatar from './Avatar'

const VALORES = [
  {
    icon: HeartPulse,
    title: 'Especialización en salud',
    desc: 'Me enfoco exclusivamente en clínicas y ortopedias. Conozco el rubro, sus procesos y sus problemas reales.'
  },
  {
    icon: Code2,
    title: 'Tecnología moderna',
    desc: 'Trabajo con React, Vite y Odoo — herramientas robustas, rápidas y escalables para que tu sistema dure años.'
  },
  {
    icon: MessageCircle,
    title: 'Trato directo y personal',
    desc: 'Hablás conmigo desde el primer día hasta la entrega. Sin intermediarios, sin tickets, sin bots.'
  },
]

export default function About() {
  return (
    <section id="nosotros" className="py-24 lg:py-32 bg-white border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left — texto */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-emerald-700 font-semibold mb-4 tracking-wide text-sm uppercase">
              Sobre MIT Sistemas
            </p>
            <h2 className="font-display text-3xl lg:text-4xl xl:text-5xl font-bold text-stone-900 mb-6 leading-tight">
              Una persona real,<br />
              <span className="text-emerald-700">comprometida con tu resultado</span>
            </h2>
            <p className="text-lg text-stone-600 leading-relaxed mb-6">
              Soy Matías, desarrollador web y consultor de sistemas de gestión con base en Santa Fe. Me especializo exclusivamente en clínicas y ortopedias — conozco el rubro, sus procesos y sus problemas reales.
            </p>
            <p className="text-lg text-stone-600 leading-relaxed mb-8">
              Trabajo de forma directa con cada cliente desde el primer contacto hasta la entrega y el soporte posterior. Sin equipo de ventas, sin tickets de soporte — atención personalizada de principio a fin.
            </p>

            <div className="flex items-center gap-2 text-stone-500 text-sm">
              <MapPin className="w-4 h-4 text-emerald-600 flex-shrink-0" />
              <span>Santa Fe, Argentina · Atención remota en todo el país</span>
            </div>
          </motion.div>

          {/* Right — avatar + valores */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-6"
          >
            {/* Avatar */}
            <div className="flex justify-center mb-4">
              <Avatar size={280} />
            </div>

            {/* Valores */}
            {VALORES.map((v, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 + 0.3 }}
                className="flex gap-4 p-5 rounded-2xl bg-stone-50 border border-stone-100 hover:border-emerald-200 hover:bg-emerald-50 transition-all duration-300"
              >
                <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <v.icon className="w-5 h-5 text-emerald-700" />
                </div>
                <div>
                  <h4 className="font-bold text-stone-900 mb-1">{v.title}</h4>
                  <p className="text-sm text-stone-600 leading-relaxed">{v.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  )
}
