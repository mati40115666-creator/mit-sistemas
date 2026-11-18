import { motion } from 'framer-motion'
import { Monitor, Smartphone } from 'lucide-react'

// Capturas del sistema real, tomadas sobre una clínica de demostración con datos inventados.
export default function AsiSeVe() {
  return (
    <section id="sistema" className="scroll-mt-20 py-24 lg:py-32 bg-stone-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14 lg:mb-16">
          <p className="text-emerald-700 font-semibold mb-4 tracking-wide text-base uppercase">Así se ve</p>
          <h2 className="font-display text-3xl lg:text-4xl xl:text-5xl font-bold text-stone-900 mb-6">
            Un portal para tus pacientes y un panel para tu equipo
          </h2>
          <p className="text-lg text-stone-600 leading-relaxed">
            El paciente elige profesional, día y horario desde el celular. Tu secretaría ve
            todos los turnos en un solo lugar, marca quién llegó y le avisa por WhatsApp con un clic.
            Lleva el nombre, el logo y los colores de tu clínica.
          </p>
        </div>

        <div className="grid lg:grid-cols-[1fr_auto] gap-8 lg:gap-12 items-center">
          <motion.figure
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="min-w-0"
          >
            <div className="rounded-2xl lg:rounded-3xl border border-stone-200 bg-white shadow-2xl shadow-stone-300/40 overflow-hidden">
              <div className="flex items-center gap-1.5 px-4 py-3 border-b border-stone-100 bg-stone-50" aria-hidden="true">
                <span className="w-3 h-3 rounded-full bg-stone-300" />
                <span className="w-3 h-3 rounded-full bg-stone-300" />
                <span className="w-3 h-3 rounded-full bg-stone-300" />
              </div>
              <img
                src="/captura-panel.webp"
                alt="Panel de turnos del día: lista de pacientes con profesional, obra social, si reservaron por el portal y si asistieron"
                width="1600" height="1000" loading="lazy"
                className="block w-full h-auto"
              />
            </div>
            <figcaption className="mt-4 flex items-center justify-center gap-2 text-sm text-stone-500">
              <Monitor className="w-4 h-4" /> Panel de la secretaría: los turnos de hoy
            </figcaption>
          </motion.figure>

          <motion.figure
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="mx-auto w-full max-w-[280px]"
          >
            <div className="rounded-[2.5rem] border-[10px] border-stone-900 bg-stone-900 shadow-2xl shadow-stone-400/40 overflow-hidden">
              <img
                src="/captura-portal.webp"
                alt="Portal de turnos en el celular: el paciente elige un horario disponible"
                width="780" height="1560" loading="lazy"
                className="block w-full h-auto rounded-[1.75rem]"
              />
            </div>
            <figcaption className="mt-4 flex items-center justify-center gap-2 text-sm text-stone-500">
              <Smartphone className="w-4 h-4" /> Portal del paciente: elige su horario
            </figcaption>
          </motion.figure>
        </div>

        <p className="mt-10 text-center text-xs text-stone-400">
          Capturas de una clínica de demostración. Los nombres y datos son inventados.
        </p>
      </div>
    </section>
  )
}
