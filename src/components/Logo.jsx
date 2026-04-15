export default function Logo({ size = 40, white = false }) {
  const textCol  = white ? '#ffffff' : '#1c1917'
  const mutedCol = white ? 'rgba(255,255,255,0.6)' : '#78716c'

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
      {/* Icon mark */}
      <svg
        width={size}
        height={size}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Background rounded square */}
        <rect width="48" height="48" rx="12" fill="#047857" />

        {/* Subtle inner glow */}
        <rect width="48" height="48" rx="12" fill="url(#grad)" opacity="0.3" />
        <defs>
          <radialGradient id="grad" cx="30%" cy="20%" r="70%">
            <stop offset="0%" stopColor="white" stopOpacity="0.3" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* MIT letters */}
        <text
          x="24"
          y="26"
          textAnchor="middle"
          fontFamily="'Plus Jakarta Sans', system-ui, sans-serif"
          fontWeight="800"
          fontSize="16"
          fill="white"
          letterSpacing="1"
        >
          MIT
        </text>

        {/* ECG pulse line below text */}
        <path
          d="M6 34 L12 34 L15 28 L18 38 L21 30 L24 34 L27 34 L30 28 L33 38 L36 31 L39 34 L42 34"
          stroke="white"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          opacity="0.9"
        />

        {/* Corner dot accents */}
        <circle cx="8" cy="8" r="2" fill="white" opacity="0.25" />
        <circle cx="40" cy="40" r="2" fill="white" opacity="0.25" />
      </svg>

      {/* Wordmark */}
      <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.15 }}>
        <span style={{
          fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
          fontWeight: 800,
          fontSize: size * 0.45,
          color: textCol,
          letterSpacing: '-0.5px',
        }}>
          MIT <span style={{ color: '#047857' }}>Sistemas</span>
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
