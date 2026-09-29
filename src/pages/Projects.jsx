import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const Projects = () => {
  const sectionRef = useRef(null)

  const projects = [
    { id: 1, title: 'ID Maker', description: 'An ID maker tool for designing and printing professional identification cards quickly and easily.', image: './image/idgen.png', technologies: ['PHP', 'Laravel', 'JavaScript', 'MySQL'], link: 'https://github.com/bommer153', external: false },
    { id: 2, title: 'Job Portal Website', description: 'A full-featured job portal with user authentication, job listings, and application management built with Laravel.', image: './image/jobPortal.png', technologies: ['Laravel', 'PHP', 'MySQL', 'React', 'Inertia.js'], link: 'https://tcujobportal-main-4mukem.laravel.cloud/', external: true },
    { id: 3, title: 'Agrina Ecommerce', description: 'An agriculture e-commerce platform enabling farmers and buyers to trade products online, improving access and efficiency.', image: './image/agrina.png', technologies: ['PHP', 'Laravel', 'JavaScript', 'jQuery/AJAX', 'MySQL'], link: 'https://github.com/bommer153/agriNa', external: true },
    { id: 4, title: 'Pageant Tabulation System', description: 'Software for recording, calculating, and displaying scores in beauty pageants accurately and efficiently.', image: './image/tabulation.png', technologies: ['PHP', 'Laravel', 'JavaScript', 'jQuery/AJAX', 'MySQL'], link: 'https://github.com/bommer153/foundation', external: true },
    { id: 5, title: 'Sober Living Website', description: 'A Florida-based sober house website providing information about recovery services, facilities, and support.', image: './image/sober-house.png', technologies: ['React', 'Tailwind CSS', 'JavaScript', 'HTML5'], link: 'https://sober-house.vercel.app/', external: true },
    { id: 6, title: 'PokeMatch Memory Game', description: 'A fun card-matching game where players flip cards to find matching pairs of Pokémon.', image: './image/pokematch.png', technologies: ['HTML', 'CSS', 'Vanilla JavaScript', 'JSON API'], link: 'https://pokemon-master-memory.onrender.com/', external: true },
    { id: 7, title: 'Bit9o', description: 'A real-time web-based bingo game with host/player rooms and live number drawing via Pusher.', image: './image/bit9o.png', technologies: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Pusher'], link: 'https://bit9o.com', external: true },
    { id: 8, title: 'Who Wants to be a Quadrillionaire?', description: 'A quiz game inspired by "Who Wants to Be a Millionaire" with lifelines, animations, and progressive difficulty.', image: './image/quad.png', technologies: ['React', 'JavaScript', 'Tailwind CSS', 'HTML5', 'JSON'], link: 'https://quadrilionaire-quiz.onrender.com/', external: true },
  ]

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.p-header', { opacity: 0, y: 30, duration: 0.7, ease: 'power2.out',
        scrollTrigger: { trigger: '.p-header', start: 'top bottom', once: true } })
    }, sectionRef)

    const cards = sectionRef.current?.querySelectorAll('.p-card')
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          setTimeout(() => entry.target.classList.add('visible'), i * 60)
          obs.unobserve(entry.target)
        }
      })
    }, { threshold: 0.05 })
    cards?.forEach(c => obs.observe(c))

    return () => { ctx.revert(); obs.disconnect() }
  }, [])

  const handleClick = (p) => {
    if (p.external) window.open(p.link, '_blank', 'noopener,noreferrer')
    else window.location.href = p.link
  }

  return (
    <section ref={sectionRef} id="projects" style={{ minHeight: '100vh', padding: '80px 24px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%' }}>

        <div className="p-header" style={{ marginBottom: '60px' }}>
          <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '11px', color: '#f72585', letterSpacing: '0.3em', textTransform: 'uppercase' }}>
            02 / Projects
          </span>
          <h2 style={{ fontSize: 'clamp(32px, 5vw, 56px)', fontWeight: 200, color: '#ffffff', letterSpacing: '0.08em', textTransform: 'uppercase', marginTop: '8px', marginBottom: '16px' }}>
            Selected Work
          </h2>
          <div style={{ width: '40px', height: '1px', background: '#f72585' }} />
        </div>

        <div className="p-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1px', background: '#1a1a1a' }}>
          {projects.map(project => (
            <div
              key={project.id}
              className="p-card reveal"
              onClick={() => handleClick(project)}
              style={{ background: '#0f0f0f', cursor: 'pointer', transition: 'background 0.2s ease', overflow: 'hidden' }}
              onMouseEnter={e => e.currentTarget.style.background = '#121212'}
              onMouseLeave={e => e.currentTarget.style.background = '#0f0f0f'}
            >
              <div style={{ height: '190px', overflow: 'hidden', position: 'relative', background: '#161616' }}>
                <img
                  src={project.image}
                  alt={project.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease', display: 'block' }}
                  onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
                  onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                  onError={e => e.currentTarget.style.display = 'none'}
                />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(10,10,10,0.5), transparent)', pointerEvents: 'none' }} />
                <div style={{ position: 'absolute', top: '10px', right: '10px', width: '6px', height: '6px', borderRadius: '50%', background: '#f72585', boxShadow: '0 0 6px #f72585' }} />
              </div>
              <div
                style={{ padding: '18px 20px', borderTop: '2px solid transparent', transition: 'border-top-color 0.25s ease' }}
                onMouseEnter={e => e.currentTarget.style.borderTopColor = '#f72585'}
                onMouseLeave={e => e.currentTarget.style.borderTopColor = 'transparent'}
              >
                <h3 style={{ fontSize: '14px', fontWeight: 500, color: '#f0f0f0', marginBottom: '8px' }}>{project.title}</h3>
                <p style={{ fontSize: '12px', color: '#555', lineHeight: 1.7, marginBottom: '14px', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                  {project.description}
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
                  {project.technologies.map((tech, i) => (
                    <span key={i} style={{ padding: '2px 8px', border: '1px solid #1e1e1e', fontSize: '10px', color: '#555', fontFamily: "'JetBrains Mono', monospace", letterSpacing: '0.03em' }}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects