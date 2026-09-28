import { useEffect, useRef } from 'react'
import gsap from 'gsap'

const Home = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.timeline({ delay: 0.1 })
        .from('.h-img',   { opacity: 0, scale: 0.85, duration: 0.9, ease: 'power3.out' })
        .from('.h-tag',   { opacity: 0, y: 10, duration: 0.5, ease: 'power2.out' }, '-=0.4')
        .from('.h-name',  { opacity: 0, y: 40, duration: 0.8, ease: 'power3.out' }, '-=0.3')
        .from('.h-role',  { opacity: 0, y: 20, duration: 0.5, ease: 'power2.out' }, '-=0.4')
        .from('.h-desc',  { opacity: 0, y: 20, duration: 0.5, ease: 'power2.out' }, '-=0.3')
        .from('.h-btns',  { opacity: 0, y: 20, duration: 0.5, ease: 'power2.out' }, '-=0.2')
        .from('.h-social',{ opacity: 0, duration: 0.4, ease: 'power2.out' }, '-=0.2')
    }, containerRef)
    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={containerRef}
      id="home"
      style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '80px 24px 40px' }}
    >
      <div style={{ maxWidth: '720px', width: '100%', textAlign: 'center' }}>

        {/* Profile image with spinning pink ring */}
        <div className="h-img" style={{ marginBottom: '28px' }}>
          <div style={{ display: 'inline-block', position: 'relative' }}>
            <div style={{
              position: 'absolute', inset: '-3px', borderRadius: '50%',
              background: 'conic-gradient(from 0deg, #f72585, transparent 60%, #f72585)',
              animation: 'pkSpin 8s linear infinite',
            }} />
            <img
              src="./image/hero-transparen.png"
              alt="Jefferson Jalandoon"
              style={{ width: '130px', height: '130px', borderRadius: '50%', objectFit: 'cover', position: 'relative', border: '3px solid #0a0a0a' }}
            />
          </div>
        </div>

        <div className="h-tag" style={{ marginBottom: '14px' }}>
          <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '11px', color: '#f72585', letterSpacing: '0.3em', textTransform: 'uppercase' }}>
            Full Stack Developer
          </span>
        </div>

        <h1 className="h-name" style={{ fontSize: 'clamp(28px, 6vw, 64px)', fontWeight: 200, color: '#ffffff', letterSpacing: '0.06em', textTransform: 'uppercase', lineHeight: 1.1, marginBottom: '14px' }}>
          Jefferson Jalandoon
        </h1>

        <p className="h-role" style={{ fontSize: '15px', color: '#555555', marginBottom: '20px', letterSpacing: '0.04em' }}>
          I Love to Code.&nbsp;&nbsp;I Live to Learn.&nbsp;&nbsp;Let's Build Something Awesome.
        </p>

        <p className="h-desc" style={{ fontSize: '14px', color: '#777777', maxWidth: '480px', margin: '0 auto 40px', lineHeight: 1.8 }}>
          Building end-to-end web applications with modern technologies.
          Passionate about creating clean, performant digital experiences.
        </p>

        {/* CTA buttons */}
        <div className="h-btns" style={{ display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '48px' }}>
          <button
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            style={{ padding: '11px 28px', background: '#f72585', border: 'none', color: '#fff', cursor: 'pointer', fontSize: '13px', fontWeight: 500, letterSpacing: '0.05em', transition: 'all 0.2s ease' }}
            onMouseEnter={e => { e.currentTarget.style.background = '#d4006b'; e.currentTarget.style.transform = 'translateY(-1px)' }}
            onMouseLeave={e => { e.currentTarget.style.background = '#f72585'; e.currentTarget.style.transform = 'none' }}
          >
            View My Work
          </button>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            style={{ padding: '11px 28px', background: 'transparent', border: '1px solid rgba(247,37,133,0.35)', color: '#f72585', cursor: 'pointer', fontSize: '13px', fontWeight: 500, letterSpacing: '0.05em', transition: 'all 0.2s ease' }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = '#f72585'; e.currentTarget.style.background = 'rgba(247,37,133,0.06)' }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(247,37,133,0.35)'; e.currentTarget.style.background = 'transparent' }}
          >
            Get In Touch
          </button>
          <a
            href="./JeffersonJalandoon_Resume.pdf"
            download
            style={{ padding: '11px 28px', background: 'transparent', border: '1px solid #1e1e1e', color: '#666666', textDecoration: 'none', fontSize: '13px', fontWeight: 500, letterSpacing: '0.05em', transition: 'all 0.2s ease', display: 'inline-block' }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = '#333'; e.currentTarget.style.color = '#f0f0f0' }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = '#1e1e1e'; e.currentTarget.style.color = '#666666' }}
          >
            Download CV
          </a>
        </div>

        {/* Social links */}
        <div className="h-social" style={{ display: 'flex', gap: '16px', justifyContent: 'center', alignItems: 'center' }}>
          <span style={{ fontSize: '10px', color: '#333', letterSpacing: '0.25em', fontFamily: "'JetBrains Mono', monospace" }}>CONNECT</span>
          {[
            { href: 'https://github.com/bommer153', icon: './image/github.svg', label: 'GitHub' },
            { href: 'https://linkedin.com/in/jefferson-jalandoon-61669427a/', icon: './image/linkedin.svg', label: 'LinkedIn' },
            { href: 'https://facebook.com/aow.cc', icon: './image/facebook.svg', label: 'Facebook' },
          ].map(s => (
            <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
              style={{ width: '34px', height: '34px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid #1e1e1e', transition: 'all 0.2s ease' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = '#f72585'; e.currentTarget.style.background = 'rgba(247,37,133,0.07)' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = '#1e1e1e'; e.currentTarget.style.background = 'transparent' }}
            >
              <img src={s.icon} alt={s.label} style={{ width: '15px', height: '15px', filter: 'brightness(0) invert(1)', opacity: 0.6 }} />
            </a>
          ))}
        </div>
      </div>

      <style>{`@keyframes pkSpin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }`}</style>
    </section>
  )
}

export default Home