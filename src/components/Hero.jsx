export default function Hero({ title = 'Welcome', subtitle = '', cta = null }) {
  return (
    <section className="hero">
      <div className="hero-inner">
        <h1>{title}</h1>
        {subtitle && <p className="subtitle">{subtitle}</p>}
        {cta && (
          <div className="hero-cta">
            <a href={cta.href} className="btn">
              {cta.label}
            </a>
          </div>
        )}
      </div>
    </section>
  )
}
