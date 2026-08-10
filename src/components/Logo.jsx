/**
 * Logo de MIT Sistemas: cruz + wordmark + eslogan.
 * Fuente unica de la marca — si cambia el logo, se cambia solo acá.
 *
 *   <Logo />                                  header (fondo claro)
 *   <Logo size={40} white textClass="text-lg" />   footer (fondo oscuro)
 *
 * Se renderiza con <span> porque siempre va dentro de un <a>.
 */
export default function Logo({ size = 44, white = false, textClass = 'text-xl' }) {
  return (
    <span className="flex items-center gap-3">
      <img
        src={white ? '/logo-cruz-blanco.png' : '/logo-cruz.png'}
        alt="MIT Sistemas"
        width={size}
        height={size}
        style={{ width: size, height: size }}
        className="block object-contain shrink-0"
      />
      <span className="flex flex-col leading-tight">
        <span className={`${textClass} font-bold tracking-tight ${white ? 'text-white' : 'text-stone-900'}`}>
          MIT <span className={white ? 'text-emerald-400' : 'text-emerald-700'}>Sistemas</span>
        </span>
        <span className="text-xs text-stone-400 uppercase tracking-widest">
          Gestión Digital
        </span>
      </span>
    </span>
  )
}
