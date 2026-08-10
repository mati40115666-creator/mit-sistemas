export default function Logo({ size = 40, white = false }) {
  const textCol  = white ? '#ffffff' : '#1c1917'
  const mutedCol = white ? 'rgba(255,255,255,0.6)' : '#78716c'
  const brandCol = white ? '#6ee7b7' : '#1F4A36'

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
      {/* Marca: cruz + corchetes + ECG */}
      <img
        src={white ? '/logo-cruz-blanco.png' : '/logo-cruz.png'}
        alt="MIT Sistemas"
        width={size}
        height={size}
        style={{ display: 'block', width: size, height: size, objectFit: 'contain' }}
      />

      <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.15 }}>
        <span style={{
          fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
          fontWeight: 800,
          fontSize: size * 0.45,
          color: textCol,
          letterSpacing: '-0.5px',
        }}>
          MIT <span style={{ color: brandCol }}>Sistemas</span>
        </span>
        <span style={{
          fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
          fontWeight: 400,
          fontSize: size * 0.2,
          color: mutedCol,
          letterSpacing: '1px',
          textTransform: 'uppercase',
          marginTop: 1,
        }}>
          Gestión Digital
        </span>
      </div>
    </div>
  )
}
