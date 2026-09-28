import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const Skills = () => {
  const sectionRef = useRef(null)

  const skillCategories = [
    {
      title: 'Frontend',
      color: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'HTML5', icon: './image/html.svg', fallback: '🌐' },
        { name: 'CSS3', icon: './image/css3.svg', fallback: '🎨' },
        { name: 'Tailwind CSS', icon: './image/tailwind.svg', fallback: '🎨' },
        { name: 'Bootstrap', icon: './image/bootstrap.svg', fallback: '📱' },
        { name: 'JavaScript', icon: './image/javascript.svg', fallback: '⚡' },
        { name: 'React', icon: './image/reactjs.svg', fallback: '⚛️' },
        { name: 'Inertia.js', icon: './image/inertia.svg', fallback: '🔄' }
      ]
    },
    {
      title: 'Backend',
      color: 'from-green-500 to-emerald-500',
      skills: [
        { name: 'PHP', icon: './image/php.svg', fallback: '🐘' },
        { name: 'Laravel', icon: './image/laravel.svg', fallback: '🔴' },
        { name: 'Mongoose', icon: './image/mongodb.svg', fallback: '🍃' },
        { name: 'Express.js', icon: './image/express.svg', fallback: '🚀' },
        { name: 'Node.js', icon: './image/node.svg', fallback: '🟢' }
      ]
    },
    {
      title: 'Database',
      color: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'MySQL', icon: './image/mysql.png', fallback: '🐬' },
        { name: 'MongoDB', icon: './image/mongodb.svg', fallback: '🍃' }
      ]
    },
    {
      title: 'Real-time',
      color: 'from-orange-500 to-red-500',
      skills: [
        { name: 'Pusher', icon: './image/pusher.svg', fallback: '📡' },
        { name: 'Socket.io', icon: './image/socket.svg', fallback: '🔌' }
      ]
    },
    {
      title: 'Tools',
      color: 'from-gray-500 to-gray-700',
      skills: [
        { name: 'Git', icon: './image/git.svg', fallback: '📝' },
        { name: 'GitHub', icon: './image/github.svg', fallback: '🐙' },
        { name: 'GitLab', icon: './image/gitlab.svg', fallback: '🦊' },
        { name: 'Render', icon: './image/render.svg', fallback: '🚀' },
        { name: 'Postman', icon: './image/postman.svg', fallback: '📮' },
        { name: 'VS Code', icon: './image/vscode.svg', fallback: '💻' }
      ]
    }
  ]

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.sk-header', { opacity: 0, y: 30, duration: 0.7, ease: 'power2.out',
        scrollTrigger: { trigger: '.sk-header', start: 'top bottom', once: true } })
    }, sectionRef)

    const cols = sectionRef.current?.querySelectorAll('.sk-col')
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          setTimeout(() => entry.target.classList.add('visible'), i * 80)
          obs.unobserve(entry.target)
        }
      })
    }, { threshold: 0.05 })
    cols?.forEach(c => obs.observe(c))

    return () => { ctx.revert(); obs.disconnect() }
  }, [])

  return (
    <section ref={sectionRef} id="skills" style={{ minHeight: '100vh', padding: '80px 24px' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', width: '100%' }}>

        <div className="sk-header" style={{ marginBottom: '60px' }}>
          <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '11px', color: '#f72585', letterSpacing: '0.3em', textTransform: 'uppercase' }}>
            03 / Skills
          </span>
          <h2 style={{ fontSize: 'clamp(32px, 5vw, 56px)', fontWeight: 200, color: '#ffffff', letterSpacing: '0.08em', textTransform: 'uppercase', marginTop: '8px', marginBottom: '16px' }}>
            Tech Stack
          </h2>
          <div style={{ width: '40px', height: '1px', background: '#f72585' }} />
        </div>

        <div className="sk-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(190px, 1fr))', gap: '1px', background: '#1a1a1a' }}>
          {skillCategories.map((cat, ci) => (
            <div key={ci} className="sk-col reveal" style={{ background: '#0f0f0f', padding: '24px' }}>
              <h3 style={{ fontSize: '10px', fontFamily: "'JetBrains Mono', monospace", color: '#f72585', letterSpacing: '0.25em', textTransform: 'uppercase', marginBottom: '20px' }}>
                {cat.title}
              </h3>
              <div>
                {cat.skills.map((skill, si) => (
                  <div
                    key={si}
                    style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '8px 0', borderBottom: '1px solid #141414', transition: 'padding-left 0.2s ease' }}
                    onMouseEnter={e => { e.currentTarget.style.paddingLeft = '6px' }}
                    onMouseLeave={e => { e.currentTarget.style.paddingLeft = '0px' }}
                  >
                    <img src={skill.icon} alt={skill.name} style={{ width: '15px', height: '15px', filter: 'brightness(0) invert(1)', opacity: 0.55, flexShrink: 0 }} onError={e => e.currentTarget.style.display='none'} />
                    <span style={{ fontSize: '13px', color: '#777', letterSpacing: '0.01em' }}>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills