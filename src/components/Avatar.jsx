export default function Avatar({ size = 300 }) {
  return (
    <div style={{ position: 'relative', width: size, height: size, margin: '0 auto' }}>

      {/* Main circle with image */}
      <div style={{
        width: size,
        height: size,
        borderRadius: '50%',
        overflow: 'hidden',
        border: '4px solid #047857',
        boxShadow: '0 24px 80px rgba(4,120,87,0.35)',
        position: 'relative',
        background: '#d1fae5',
      }}>
        <img
          src="/avatar.png"
          alt="Matías - MIT Sistemas"
          style={{
            
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  objectPosition: 'center -2%',
  transform: 'scale(1)',
  transformOrigin: 'center top',
}}
        />
      </div>

      {/* Decorative ring */}
      <div style={{
        position: 'absolute',
        inset: -8,
        borderRadius: '50%',
        border: '1.5px dashed #047857',
        opacity: 0.2,
        animation: 'spin 20s linear infinite',
      }} />

      {/* Badge - Disponible */}
      <div style={{
        position: 'absolute',
        top: 16,
        right: -8,
        background: '#047857',
        borderRadius: 20,
        padding: '6px 14px',
        display: 'flex',
        alignItems: 'center',
        gap: 6,
        boxShadow: '0 4px 16px rgba(4,120,87,0.3)',
      }}>
        <div style={{
          width: 8,
          height: 8,
          borderRadius: '50%',
          background: '#34d399',
          animation: 'pulse 2s infinite',
        }} />
        <span style={{
          color: 'white',
          fontSize: 11,
          fontWeight: 600,
          fontFamily: 'system-ui',
          whiteSpace: 'nowrap',
        }}>
          Disponible
        </span>
      </div>

      {/* Badge - React + Odoo */}
      <div style={{
        position: 'absolute',
        bottom: 24,
        left: -16,
        background: 'white',
        borderRadius: 12,
        padding: '8px 14px',
        boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
        border: '1px solid #e7e5e4',
      }}>
        <div style={{
          fontFamily: 'system-ui',
          fontWeight: 700,
          fontSize: 11,
          color: '#047857',
        }}>React + Vite</div>
        <div style={{
          fontFamily: 'system-ui',
          fontWeight: 500,
          fontSize: 10,
          color: '#78716c',
          marginTop: 1,
        }}>+ Odoo</div>
      </div>

      {/* Badge - Santa Fe */}
      <div style={{
        position: 'absolute',
        bottom: 32,
        right: -12,
        background: 'white',
        borderRadius: 12,
        padding: '8px 14px',
        boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
        border: '1px solid #e7e5e4',
      }}>
       <div style={{
        fontFamily: 'system-ui',
        fontWeight: 700,
        fontSize: 11,
        color: '#1c1917',
      }}>📍 Santa Fe</div>
       <div style={{
        fontFamily: 'system-ui',
        fontWeight: 500,
        fontSize: 10,
        color: '#78716c',
        marginTop: 1,
        paddingLeft: 16,
      }}>Argentina</div>
      </div>

      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.2); }
        }
      `}</style>
    </div>
  )
}
