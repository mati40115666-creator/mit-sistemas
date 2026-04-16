import { motion } from 'framer-motion'
import { Phone, Mail, Shield, Clock, MapPin } from 'lucide-react'

export default function FinalCTA() {
  return (
    <section id="contacto" className="py-24 lg:py-32 bg-emerald-900 text-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-emerald-800 rounded-full blur-3xl opacity-50" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-emerald-950 rounded-full blur-3xl opacity-50" />
      </div>

      <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Agendá tu demo gratuita hoy
          </h2>
          <p className="text-xl text-emerald-100 mb-10 max-w-2xl mx-auto leading-relaxed">
            20 minutos por videollamada. Te muestro el sistema funcionando con datos reales de una clínica similar a la tuya. Sin letra chica, sin compromisos.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <a
              href="https://wa.me/5493425500020?text=Hola%20Mat%C3%ADas%2C%20quiero%20agendar%20una%20demo%20gratuita%20de%20MIT%20Sistemas."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-emerald-900 font-semibold rounded-xl hover:bg-emerald-50 transition-colors shadow-lg"
            >
              <Phone className="w-5 h-5" />
              Hablar por WhatsApp
            </a>
            <a
              href="mailto:matiastasi97@gmail.com"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-emerald-800 text-white font-semibold rounded-xl hover:bg-emerald-700 transition-colors border border-emerald-700"
            >
              <Mail className="w-5 h-5" />
              Enviar email
            </a>
          </div>

          <div className="flex items-center justify-center gap-2 text-emerald-300 text-sm mb-12">
            <Shield className="w-4 h-4" />
            <span>Demo 100% gratuita — Sin compromiso de compra</span>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 text-emerald-300 text-sm pt-8 border-t border-emerald-800">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>Santa Fe, Argentina · Trabajo remoto en todo el país</span>
            </div>
            <div className="hidden md:block w-px h-4 bg-emerald-800" />
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>Respuesta en menos de 2 horas</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}