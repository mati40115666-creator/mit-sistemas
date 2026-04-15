import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle } from 'lucide-react'

const RUBROS = [
  'centro médico',
  'Ortopedia y traumatología',
  'Consultorio odontológico',
  'Centro de diagnóstico',
  'Centro de rehabilitación',
  'Otro',
]

const PROBLEMAS = [
  'Gestión de turnos y pacientes',
  'Control de stock e insumos',
  'Facturación y finanzas',
  'Página web profesional',
  'Todo lo anterior',
  'No sé por dónde empezar',
]

export default function ContactForm() {
  const [form, setForm] = useState({
    nombre: '',
    telefono: '',
    rubro: '',
    problema: '',
  })
  const [enviado, setEnviado] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = () => {
    if (!form.nombre || !form.telefono || !form.rubro || !form.problema) {
      alert('Por favor completá todos los campos.')
      return
    }

    const mensaje = `Hola Matías! Quiero solicitar una cotización 👇

*Nombre:* ${form.nombre}
*Teléfono:* ${form.telefono}
*Rubro:* ${form.rubro}
*Problema a resolver:* ${form.problema}`

    const url = `https://wa.me/5493426264360?text=${encodeURIComponent(mensaje)}`
    window.open(url, '_blank')
    setEnviado(true)
  }

  return (
    <section id="planes" className="py-24 lg:py-32 bg-white">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-emerald-700 font-semibold mb-4 tracking-wide text-sm uppercase">
            Cotización gratuita
          </p>
          <h2 className="font-display text-3xl lg:text-4xl xl:text-5xl font-bold text-stone-900 mb-6">
            Contame sobre tu clínica y te armamos una propuesta a medida
          </h2>
          <p className="text-lg text-stone-600">
            Completá el formulario y en menos de 2 horas te contacto por WhatsApp con una cotización personalizada. Sin compromiso. Atiendo de Lunes a viernes de 9 a 18hs.
          </p>
        </div>

        {!enviado ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-stone-50 rounded-3xl p-8 lg:p-12 border border-stone-200"
          >
            <div className="grid md:grid-cols-2 gap-6">

              {/* Nombre */}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-stone-700">
                  Tu nombre *
                </label>
                <input
                  type="text"
                  name="nombre"
                  value={form.nombre}
                  onChange={handleChange}
                  placeholder="Ej: María García"
                  className="px-4 py-3 rounded-xl border border-stone-200 bg-white text-stone-900 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all text-sm"
                />
              </div>

              {/* Teléfono */}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-stone-700">
                  WhatsApp / Teléfono *
                </label>
                <input
                  type="tel"
                  name="telefono"
                  value={form.telefono}
                  onChange={handleChange}
                  placeholder="Ej: 3415 123456"
                  className="px-4 py-3 rounded-xl border border-stone-200 bg-white text-stone-900 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all text-sm"
                />
              </div>

              {/* Rubro */}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-stone-700">
                  Tipo de clínica / rubro *
                </label>
                <select
                  name="rubro"
                  value={form.rubro}
                  onChange={handleChange}
                  className="px-4 py-3 rounded-xl border border-stone-200 bg-white text-stone-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all text-sm appearance-none cursor-pointer"
                >
                  <option value="">Seleccioná una opción</option>
                  {RUBROS.map((r) => (
                    <option key={r} value={r}>{r}</option>
                  ))}
                </select>
              </div>

              {/* Problema */}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-stone-700">
                  ¿Qué problema querés resolver? *
                </label>
                <select
                  name="problema"
                  value={form.problema}
                  onChange={handleChange}
                  className="px-4 py-3 rounded-xl border border-stone-200 bg-white text-stone-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all text-sm appearance-none cursor-pointer"
                >
                  <option value="">Seleccioná una opción</option>
                  {PROBLEMAS.map((p) => (
                    <option key={p} value={p}>{p}</option>
                  ))}
                </select>
              </div>

            </div>

            {/* Submit */}
            <div className="mt-8 flex flex-col items-center gap-4">
              <button
                onClick={handleSubmit}
                className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-emerald-700 text-white font-semibold rounded-xl hover:bg-emerald-800 transition-all hover:shadow-lg hover:shadow-emerald-700/20 text-base"
              >
                Quiero mi cotización gratis
                <ArrowRight className="w-5 h-5" />
              </button>
              <p className="text-xs text-stone-400 text-center">
                Al enviar, se abrira WhatsApp con tu consulta lista para mandar. Sin spam, sin compromiso.
              </p>
            </div>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-emerald-50 rounded-3xl p-12 border border-emerald-200 text-center"
          >
            <CheckCircle className="w-16 h-16 text-emerald-600 mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-stone-900 mb-3">
              ¡Listo! Tu consulta está lista para enviar
            </h3>
            <p className="text-stone-600 mb-8">
              Se abrió WhatsApp con tu mensaje. Envialo y te respondemos en menos de 2 horas.
            </p>
            <button
              onClick={() => setEnviado(false)}
              className="text-emerald-700 font-semibold hover:underline text-sm"
            >
              Volver al formulario
            </button>
          </motion.div>
        )}

      </div>
    </section>
  )
}
