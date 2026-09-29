import { useState, useEffect } from 'react'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [scrolled, setScrolled] = useState(false)

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Projects', id: 'projects' },
    { name: 'Skills', id: 'skills' },
    { name: 'Experience', id: 'experience' },
    { name: 'Contact', id: 'contact' },
  ]

  const scrollToSection = (sectionId) => {
    const el = document.getElementById(sectionId)
    if (el) {
      setActiveSection(sectionId)
      el.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30)
      const sections = navLinks.map(l => document.getElementById(l.id))
      const sp = window.scrollY + 100
      if (window.scrollY < 100) { setActiveSection('home'); return }
      for (let i = sections.length - 1; i >= 0; i--) {
        if (sections[i] && sections[i].offsetTop <= sp) {
          setActiveSection(navLinks[i].id)
          break
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
      borderBottom: scrolled ? '1px solid #1a1a1a' : '1px solid transparent',
      background: scrolled ? 'rgba(10,10,10,0.95)' : 'transparent',
      backdropFilter: scrolled ? 'blur(20px)' : 'none',
      WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
      transition: 'all 0.4s ease',
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '64px' }}>

          <button onClick={() => scrollToSection('home')} style={{
            background: 'none', border: 'none', cursor: 'pointer',
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '18px', fontWeight: 500, color: '#f72585', letterSpacing: '0.05em',
          }}>
            JJ_
          </button>

          {/* Desktop links */}
          <div style={{ display: 'flex', gap: '2px', alignItems: 'center' }}
               className="hidden md:flex">
            {navLinks.map(link => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                style={{
                  background: activeSection === link.id ? 'rgba(247,37,133,0.08)' : 'none',
                  border: 'none', cursor: 'pointer',
                  padding: '8px 16px', fontSize: '13px',
                  fontWeight: activeSection === link.id ? 500 : 400,
                  color: activeSection === link.id ? '#f72585' : '#666666',
                  letterSpacing: '0.03em', transition: 'all 0.2s ease',
                  fontFamily: "'Inter', sans-serif",
                  borderBottom: activeSection === link.id ? '1px solid #f72585' : '1px solid transparent',
                }}
                onMouseEnter={e => { if (activeSection !== link.id) e.currentTarget.style.color = '#f0f0f0' }}
                onMouseLeave={e => { if (activeSection !== link.id) e.currentTarget.style.color = '#666666' }}
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '8px' }}
          >
            <div style={{ width: '22px', height: '16px', position: 'relative' }}>
              {[0, 7, 14].map((top, i) => (
                <span key={i} style={{
                  display: 'block', position: 'absolute', height: '1.5px', width: '100%',
                  background: i === 1 && isMenuOpen ? 'transparent' : (i === 0 && isMenuOpen ? '#f72585' : (i === 2 && isMenuOpen ? '#f72585' : '#f0f0f0')),
                  top: i === 0 && isMenuOpen ? '7px' : (i === 2 && isMenuOpen ? '7px' : `${top}px`),
                  transform: i === 0 && isMenuOpen ? 'rotate(45deg)' : (i === 2 && isMenuOpen ? 'rotate(-45deg)' : 'none'),
                  transition: 'all 0.3s ease',
                }} />
              ))}
            </div>
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden" style={{
            borderTop: '1px solid #1a1a1a',
            background: 'rgba(10,10,10,0.98)',
            padding: '8px 0 16px',
          }}>
            {navLinks.map(link => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                style={{
                  display: 'block', width: '100%', textAlign: 'left',
                  background: 'none', border: 'none', cursor: 'pointer',
                  padding: '12px 24px', fontSize: '14px',
                  color: activeSection === link.id ? '#f72585' : '#888888',
                  borderLeft: activeSection === link.id ? '2px solid #f72585' : '2px solid transparent',
                  transition: 'all 0.2s ease',
                  fontFamily: "'Inter', sans-serif",
                }}
                onMouseEnter={e => { if (activeSection !== link.id) e.currentTarget.style.color = '#f0f0f0' }}
                onMouseLeave={e => { if (activeSection !== link.id) e.currentTarget.style.color = '#888888' }}
              >
                {link.name}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar