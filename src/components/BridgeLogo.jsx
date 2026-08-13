const SIZES = {
  large: {
    icon: 80,
    title: '28px',
    sub: '13px',
    line: 44,
    layout: 'vertical',
    gap: 'gap-4',
  },
  medium: {
    icon: 50,
    title: '18px',
    sub: '9px',
    line: 30,
    layout: 'vertical',
    gap: 'gap-2.5',
  },
  small: {
    icon: 30,
    title: '14px',
    sub: '7px',
    line: 20,
    layout: 'horizontal',
    gap: 'gap-3',
  },
}

function BridgeIcon({ size }) {
  return (
    <svg
      width={size}
      height={size * 0.8}
      viewBox="0 0 100 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M22 78 V34 Q22 14 50 14 Q78 14 78 34 V78"
        stroke="#0f1923"
        strokeWidth="9"
        strokeLinecap="round"
        fill="none"
      />
      <rect x="14" y="10" width="16" height="68" rx="4" fill="#4a9e8e" />
      <rect x="70" y="10" width="16" height="68" rx="4" fill="#4a9e8e" />
    </svg>
  )
}

export default function BridgeLogo({ size = 'medium', dark = false }) {
  const cfg = SIZES[size] || SIZES.medium
  const titleColor = dark ? '#ffffff' : '#0f1923'

  if (cfg.layout === 'horizontal') {
    return (
      <div className={`flex items-center ${cfg.gap}`}>
        <BridgeIcon size={cfg.icon} />
        <div className="flex flex-col justify-center leading-none">
          <span
            className="font-heading font-bold uppercase"
            style={{ fontSize: cfg.title, color: titleColor, letterSpacing: '0.5px' }}
          >
            Horizon
          </span>
          <span
            className="font-heading font-semibold uppercase text-teal"
            style={{ fontSize: cfg.sub, letterSpacing: '2px' }}
          >
            Interpreters
          </span>
        </div>
      </div>
    )
  }

  return (
    <div className={`flex flex-col items-center ${cfg.gap}`}>
      <BridgeIcon size={cfg.icon} />
      <div className="flex flex-col items-center">
        <span
          className="font-heading font-bold uppercase"
          style={{ fontSize: cfg.title, color: titleColor, letterSpacing: '1px' }}
        >
          Horizon
        </span>
        <span
          className="bg-teal my-2"
          style={{ width: cfg.line, height: 2 }}
        />
        <span
          className="font-heading font-semibold uppercase text-teal"
          style={{ fontSize: cfg.sub, letterSpacing: '4px' }}
        >
          Interpreters
        </span>
      </div>
    </div>
  )
}
