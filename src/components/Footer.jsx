const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <footer style={{ borderTop: '1px solid #1a1a1a', padding: '32px 24px', background: '#080808' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
        <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '16px', color: '#f72585', fontWeight: 500 }}>
          JJ_
        </span>
        <p style={{ fontSize: '12px', color: '#333', fontFamily: "'JetBrains Mono', monospace", letterSpacing: '0.05em' }}>
          © {year} Jefferson Jalandoon
        </p>
        <div style={{ display: 'flex', gap: '10px' }}>
          {[
            { href: 'https://github.com/bommer153', icon: './image/github.svg', label: 'GitHub' },
            { href: 'https://linkedin.com/in/jefferson-jalandoon-61669427a/', icon: './image/linkedin.svg', label: 'LinkedIn' },
            { href: 'https://facebook.com/aow.cc', icon: './image/facebook.svg', label: 'Facebook' },
          ].map(s => (
            <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
              style={{ width: '32px', height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid #1a1a1a', transition: 'border-color 0.2s ease' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = '#f72585' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = '#1a1a1a' }}
            >
              <img src={s.icon} alt={s.label} style={{ width: '14px', height: '14px', filter: 'brightness(0) invert(1)', opacity: 0.5 }} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer