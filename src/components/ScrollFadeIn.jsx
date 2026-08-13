import useInView from '../hooks/useInView'

export default function ScrollFadeIn({ children, className = '', delay = 0, as: Tag = 'div' }) {
  const [ref, isInView] = useInView()

  return (
    <Tag
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      } ${className}`}
      style={{ transitionDelay: isInView ? `${delay}ms` : '0ms' }}
    >
      {children}
    </Tag>
  )
}
