import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const Contact = () => {
  const sectionRef = useRef(null)

  const contactInfo = [
    {
      icon: './image/email.png',
      title: 'Email',
      content: 'jaxjalandoon@gmail.com',
      link: 'mailto:jaxjalandoon@gmail.com'
    },
    {
      icon: './image/location.png',
      title: 'Location',
      content: 'Taguig City, Philippines',
      link: null
    },
    {
      icon: './image/contact.png',
      title: 'Phone',
      content: '(+63)966-400-5231',
      link: 'tel:+639664005231'
    }
  ]

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.ct-header', { opacity: 0, y: 30, duration: 0.7, ease: 'power2.out',
        scrollTrigger: { trigger: '.ct-header', start: 'top bottom', once: true } })
    }, sectionRef)

    const items = sectionRef.current?.querySelectorAll('.ct-item')
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          setTimeout(() => entry.target.classList.add('visible'), i * 100)
          obs.unobserve(entry.target)
        }
      })
    }, { threshold: 0.1 })
    items?.forEach(c => obs.observe(c))

    return () => { ctx.revert(); obs.disconnect() }
  }, [])

  return (
    <section ref={sectionRef} id="contact" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', padding: '80px 24px' }}>
      <div style={{ maxWidth: '700px', margin: '0 auto', width: '100%' }}>

        <div className="ct-header" style={{ marginBottom: '60px' }}>
          <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '11px', color: '#f72585', letterSpacing: '0.3em', textTransform: 'uppercase' }}>
            05 / Contact
          </span>
          <h2 style={{ fontSize: 'clamp(32px, 5vw, 56px)', fontWeight: 200, color: '#ffffff', letterSpacing: '0.08em', textTransform: 'uppercase', marginTop: '8px', marginBottom: '16px' }}>
            Get In Touch
          </h2>
          <div style={{ width: '40px', height: '1px', background: '#f72585', marginBottom: '24px' }} />
          <p style={{ fontSize: '15px', color: '#666', lineHeight: 1.8 }}>
            I'm always interested in new opportunities and exciting projects.
            Whether you have a question or just want to say hi, I'll try my best to get back to you.
          </p>
        </div>

        <div className="ct-list" style={{ display: 'flex', flexDirection: 'column', gap: '1px', background: '#1a1a1a', marginBottom: '48px' }}>
          {contactInfo.map((contact, i) => (
            <div
              key={i}
              className="ct-item reveal"
              style={{ display: 'flex', alignItems: 'center', gap: '20px', padding: '24px', background: '#0f0f0f', transition: 'all 0.25s ease', borderLeft: '2px solid transparent' }}
              onMouseEnter={e => { e.currentTarget.style.borderLeftColor = '#f72585'; e.currentTarget.style.paddingLeft = '28px'; e.currentTarget.style.background = '#111' }}
              onMouseLeave={e => { e.currentTarget.style.borderLeftColor = 'transparent'; e.currentTarget.style.paddingLeft = '24px'; e.currentTarget.style.background = '#0f0f0f' }}
            >
              <div style={{ width: '40px', height: '40px', border: '1px solid #222', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <img src={contact.icon} alt={contact.title} style={{ width: '18px', height: '18px', filter: 'brightness(0) invert(1)', opacity: 0.6 }} />
              </div>
              <div>
                <div style={{ fontSize: '10px', fontFamily: "'JetBrains Mono', monospace", color: '#444', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '4px' }}>
                  {contact.title}
                </div>
                {contact.link ? (
                  <a href={contact.link} style={{ fontSize: '15px', color: '#f0f0f0', textDecoration: 'none', transition: 'color 0.2s ease' }}
                    onMouseEnter={e => e.currentTarget.style.color = '#f72585'}
                    onMouseLeave={e => e.currentTarget.style.color = '#f0f0f0'}
                  >
                    {contact.content}
                  </a>
                ) : (
                  <span style={{ fontSize: '15px', color: '#f0f0f0' }}>{contact.content}</span>
                )}
              </div>
            </div>
          ))}
        </div>

        <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
          <span style={{ fontSize: '10px', color: '#333', letterSpacing: '0.25em', fontFamily: "'JetBrains Mono', monospace" }}>SOCIAL</span>
          {[
            { href: 'https://github.com/bommer153', icon: './image/github.svg', label: 'GitHub' },
            { href: 'https://linkedin.com/in/jefferson-jalandoon-61669427a/', icon: './image/linkedin.svg', label: 'LinkedIn' },
            { href: 'https://facebook.com/aow.cc', icon: './image/facebook.svg', label: 'Facebook' },
          ].map(s => (
            <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
              style={{ width: '36px', height: '36px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid #1e1e1e', transition: 'all 0.2s ease' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = '#f72585'; e.currentTarget.style.background = 'rgba(247,37,133,0.07)' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = '#1e1e1e'; e.currentTarget.style.background = 'transparent' }}
            >
              <img src={s.icon} alt={s.label} style={{ width: '15px', height: '15px', filter: 'brightness(0) invert(1)', opacity: 0.7 }} />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Contact