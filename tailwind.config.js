/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // every original key is preserved: index.css and untouched components @apply these
        navy: '#0E1A22',
        'navy-dark': '#0A1319',
        'navy-soft': '#16242E',
        teal: '#4A9E8E',
        'teal-mid': '#3D8B7D',
        'teal-dark': '#2F7A6D',
        'teal-deep': '#1F5C52',
        'teal-bright': '#7FD3C0',
        'teal-light': '#ECF5F2',
        'teal-tint': '#DCEEE8',
        light: '#F7FAF9',
        'light-alt': '#F1F5F4',
        text: {
          DEFAULT: '#22303A',
          light: '#6B7A83',
          muted: '#98A5AC',
        },
        border: '#E3EBE8',
        'border-soft': '#EEF3F1',
      },
      fontFamily: {
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
        heading: ['Poppins', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        // fluid: no jump between mobile and desktop, no breakpoint variants needed
        display: ['clamp(2.3rem, 6.4vw, 4.125rem)', { lineHeight: '1.03', letterSpacing: '-0.035em' }],
        h2: ['clamp(1.875rem, 4.4vw, 2.875rem)', { lineHeight: '1.09', letterSpacing: '-0.03em' }],
        h3: ['clamp(1.1875rem, 2.2vw, 1.4375rem)', { lineHeight: '1.25', letterSpacing: '-0.02em' }],
        lead: ['clamp(0.97rem, 1.7vw, 1.09rem)', { lineHeight: '1.65' }],
        eyebrow: ['0.719rem', { lineHeight: '1', letterSpacing: '0.24em' }],
        price: ['clamp(2.625rem, 5.4vw, 3.25rem)', { lineHeight: '1', letterSpacing: '-0.04em' }],
      },
      spacing: {
        section: 'clamp(4.375rem, 9vw, 7rem)',
        gutter: 'clamp(1.125rem, 4vw, 2.5rem)',
      },
      maxWidth: {
        shell: '1240px',
      },
      borderRadius: {
        card: '1.375rem',
        control: '0.8125rem',
      },
      boxShadow: {
        lift: '0 32px 60px -30px rgba(14,26,34,.35)',
        cta: '0 18px 38px -18px rgba(31,92,82,.7)',
        'cta-hover': '0 24px 46px -18px rgba(31,92,82,.75)',
        feature: '0 34px 60px -30px rgba(14,26,34,.65)',
        nav: '0 10px 30px -22px rgba(14,26,34,.5)',
        badge: '0 16px 28px -18px rgba(31,92,82,.45)',
      },
      transitionTimingFunction: {
        premium: 'cubic-bezier(.16,1,.3,1)',
      },
      keyframes: {
        glow: { '0%,100%': { opacity: '.35' }, '50%': { opacity: '.75' } },
        marquee: { from: { transform: 'translateX(0)' }, to: { transform: 'translateX(-50%)' } },
        ping2: { '0%': { transform: 'scale(1)', opacity: '.55' }, '70%,100%': { transform: 'scale(2.4)', opacity: '0' } },
        shimmer: { from: { backgroundPosition: '-220% 0' }, to: { backgroundPosition: '220% 0' } },
      },
      animation: {
        glow: 'glow 9s ease-in-out infinite',
        marquee: 'marquee 46s linear infinite',
        'marquee-slow': 'marquee 52s linear infinite reverse',
        ping2: 'ping2 2.4s ease-out infinite',
        shimmer: 'shimmer 900ms ease-out',
      },
    },
  },
  plugins: [],
}
