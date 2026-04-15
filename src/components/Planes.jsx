// Planes.jsx — MIT Sistemas
// Reemplaza la sección de precios con 3 planes fijos
// Mantiene la paleta: verde oscuro #1a4a3a, verde medio #2d7a5a, crema #f5f0e8

const WHATSAPP_NUMBER = "5493426264360"; // ← Reemplazá con tu número real
const WHATSAPP_MSG = encodeURIComponent(
  "Hola Matías, quiero saber más sobre los planes de MIT Sistemas para mi clínica/ortopedia."
);

const incluidos = [
  {
    icon: "🖥️",
    titulo: "Página web profesional",
    desc: "Diseño moderno, carga rápida y posicionada en Google.",
  },
  {
    icon: "📦",
    titulo: "Sistema Odoo personalizado",
    desc: "Gestión de turnos, pacientes, stock y facturación integrados.",
  },
  {
    icon: "📋",
    titulo: "Implementación en 30 días",
    desc: "Configuro todo con los datos reales de tu clínica.",
  },
  {
    icon: "🎓",
    titulo: "Capacitación incluida",
    desc: "2 horas de entrenamiento en vivo. Grabado para tu equipo.",
  },
  {
    icon: "💬",
    titulo: "Soporte por WhatsApp",
    desc: "Respuesta en menos de 2 horas, de lunes a viernes.",
  },
  {
    icon: "📈",
    titulo: "Reportes automáticos",
    desc: "Facturación, obras sociales y stock en tiempo real.",
  },
];

export default function Planes() {
  return (
    <section id="planes" className="py-24 bg-[#f9f8f5]">
      <div className="max-w-5xl mx-auto px-6">

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
            Cada clínica es diferente. Por eso armamos propuestas a medida —{" "}
            <span className="font-semibold text-gray-700">
              proyectos desde $300 USD
            </span>
            , con pagos en pesos argentinos.
          </p>
        </div>

        {/* Card principal */}
        <div className="bg-white rounded-3xl shadow-lg overflow-hidden border border-gray-100 mb-10">
          {/* Banner superior */}
          <div className="bg-[#1a4a3a] px-8 py-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <p className="text-[#7dcea0] text-sm font-semibold uppercase tracking-widest mb-1">
                Precio de referencia
              </p>
              <div className="flex items-baseline gap-3">
                <span className="text-white text-5xl font-black">desde $300</span>
                <span className="text-[#7dcea0] text-lg font-medium">USD</span>
              </div>
              <p className="text-[#7dcea0] text-sm mt-1">
                Pagos en pesos argentinos · Sin letra chica
              </p>
            </div>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#2d7a5a] hover:bg-[#3a9470] text-white font-bold py-4 px-8 rounded-2xl transition-colors text-lg whitespace-nowrap"
            >
              Pedir cotización gratis →
            </a>
          </div>

          {/* Qué incluye */}
          <div className="px-8 py-8">
            <p className="text-xs font-bold tracking-widest text-gray-400 uppercase mb-6">
              Qué incluye tu proyecto
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
              {incluidos.map((item) => (
                <div key={item.titulo} className="flex items-start gap-3">
                  <span className="text-2xl mt-0.5">{item.icon}</span>
                  <div>
                    <p className="font-semibold text-gray-800 text-sm">
                      {item.titulo}
                    </p>
                    <p className="text-gray-500 text-sm leading-snug">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Separador */}
          <div className="border-t border-gray-100 mx-8" />

          {/* Nota de pagos */}
          <div className="px-8 py-5 flex flex-col sm:flex-row sm:items-center gap-3">
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <span className="text-[#2d7a5a] font-bold text-base">✓</span>
              Pagos en pesos al tipo de cambio del día
            </div>
            <div className="hidden sm:block text-gray-200">|</div>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <span className="text-[#2d7a5a] font-bold text-base">✓</span>
              Sin contratos de permanencia obligatoria
            </div>
            <div className="hidden sm:block text-gray-200">|</div>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <span className="text-[#2d7a5a] font-bold text-base">✓</span>
              Cotización personalizada sin compromiso
            </div>
          </div>
        </div>

        {/* CTA secundario */}
        <p className="text-center text-gray-400 text-sm">
          ¿No sabés qué necesitás?{" "}
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
