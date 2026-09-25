// Planes.jsx — MIT Sistemas
// 3 planes fijos, en pesos argentinos. Actualizado 25/9/2026 junto con el
// marco de precios oficial (ver PRECIOS-MIT-Sistemas.md).
// Mantiene la paleta: verde oscuro #1a4a3a, verde medio #2d7a5a, crema #f5f0e8

const WHATSAPP_NUMBER = "5493425500020";
const WHATSAPP_MSG = encodeURIComponent(
  "Hola Matías, quiero saber más sobre los planes de MIT Sistemas para mi clínica."
);

const PLANES = [
  {
    nombre: "Web",
    implementacion: "$300.000",
    mensual: "$30.000",
    desc: "Página web profesional para tu clínica o consultorio.",
    incluye: [
      "Diseño moderno, carga rápida y posicionada en Google",
      "Información de profesionales, horarios y contacto",
      "Hosting, dominio y mantenimiento incluidos",
    ],
    destacado: false,
  },
  {
    nombre: "Turnos",
    implementacion: "$500.000",
    mensual: "$100.000",
    desc: "Portal de turnos online + panel interno de gestión.",
    incluye: [
      "Reserva de turnos online, 24hs, hasta 10 profesionales",
      "Panel para el equipo: agenda, pacientes, obras sociales",
      "Capacitación en vivo, grabada para el equipo",
      "Soporte por WhatsApp en horario hábil",
    ],
    destacado: true,
  },
  {
    nombre: "Completo",
    implementacion: "$650.000",
    mensual: "$120.000",
    desc: "Web institucional + portal de turnos + panel interno.",
    incluye: [
      "Todo lo del plan Turnos",
      "Página web profesional incluida",
      "Un solo proveedor para toda tu presencia online",
    ],
    destacado: false,
  },
];

export default function Planes() {
  return (
    <section id="planes" className="py-24 bg-[#f9f8f5]">
      <div className="max-w-6xl mx-auto px-6">

        {/* Encabezado */}
        <div className="text-center mb-16">
          <span className="text-base font-bold tracking-widest text-[#2d7a5a] uppercase mb-4 block">
            Planes y Precios
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight mb-5">
            Invertí en el sistema que tu <br className="hidden md:block" />
            clínica necesita
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Tres planes fijos, en pesos argentinos. Si tenés más de 10 profesionales
            con agenda, te armamos una cotización a medida.
          </p>
        </div>

        {/* Cards de planes */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {PLANES.map((plan) => (
            <div
              key={plan.nombre}
              className={`bg-white rounded-3xl shadow-lg overflow-hidden border ${
                plan.destacado ? "border-[#2d7a5a] border-2" : "border-gray-100"
              } flex flex-col`}
            >
              {plan.destacado && (
                <div className="bg-[#2d7a5a] text-white text-center text-xs font-bold uppercase tracking-widest py-2">
                  Más elegido
                </div>
              )}
              <div className="bg-[#1a4a3a] px-6 py-6">
                <p className="text-[#7dcea0] text-sm font-semibold uppercase tracking-widest mb-1">
                  Plan {plan.nombre}
                </p>
                <div className="flex items-baseline gap-2">
                  <span className="text-white text-3xl font-black">{plan.implementacion}</span>
                </div>
                <p className="text-[#7dcea0] text-sm mt-1">implementación</p>
                <p className="text-white text-lg font-bold mt-2">{plan.mensual} <span className="text-[#7dcea0] text-sm font-normal">/ mes</span></p>
              </div>

              <div className="px-6 py-6 flex-1 flex flex-col">
                <p className="text-gray-600 text-sm mb-5">{plan.desc}</p>
                <ul className="space-y-3 mb-6 flex-1">
                  {plan.incluye.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                      <span className="text-[#2d7a5a] font-bold mt-0.5">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Hola Matías, quiero saber más sobre el plan ${plan.nombre} de MIT Sistemas.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center justify-center gap-2 font-bold py-3 px-6 rounded-2xl transition-colors text-sm ${
                    plan.destacado
                      ? "bg-[#2d7a5a] hover:bg-[#3a9470] text-white"
                      : "bg-gray-100 hover:bg-gray-200 text-gray-800"
                  }`}
                >
                  Pedir cotización →
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Notas generales */}
        <div className="bg-white rounded-2xl border border-gray-100 px-8 py-5 flex flex-col sm:flex-row sm:items-center gap-3 justify-center mb-10">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <span className="text-[#2d7a5a] font-bold text-base">✓</span>
            Implementación en hasta 3 cuotas
          </div>
          <div className="hidden sm:block text-gray-200">|</div>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <span className="text-[#2d7a5a] font-bold text-base">✓</span>
            Todos los precios en pesos argentinos
          </div>
          <div className="hidden sm:block text-gray-200">|</div>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <span className="text-[#2d7a5a] font-bold text-base">✓</span>
            Cotización personalizada sin compromiso
          </div>
        </div>

        {/* CTA secundario */}
        <p className="text-center text-gray-400 text-sm">
          ¿No sabés qué plan necesitás?{" "}
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#2d7a5a] font-semibold hover:underline"
          >
            Hablemos 20 minutos y te oriento gratis.
          </a>
        </p>
      </div>
    </section>
  );
}
