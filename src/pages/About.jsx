import { useEffect, useRef } from 'react'

const About = () => {
  const sectionRef = useRef(null)

  const keyInterests = [
    {
      icon: './image/coding.png',
      title: 'Full-Stack Development',
      description: 'Building end-to-end web applications with modern technologies'
    },
    {
      icon: './image/problem-solving.png',
      title: 'Problem Solving',
      description: 'Solving complex challenges on LeetCode and CodeWars'
    },
    {
      icon: './image/tech-reading.png',
      title: 'Continuous Learning',
      description: 'Staying updated with latest technologies and best practices'
    }
  ]

  useEffect(() => {
    const all = sectionRef.current?.querySelectorAll('.reveal')
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          setTimeout(() => entry.target.classList.add('visible'), i * 100)
          obs.unobserve(entry.target)
        }
      })
    }, { threshold: 0.05 })
    all?.forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="about" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', padding: '80px 24px' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', width: '100%' }}>

        <div className="a-header reveal" style={{ marginBottom: '60px' }}>
          <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '11px', color: '#f72585', letterSpacing: '0.3em', textTransform: 'uppercase' }}>
            01 / About
          </span>
          <h2 style={{ fontSize: 'clamp(32px, 5vw, 56px)', fontWeight: 200, color: '#ffffff', letterSpacing: '0.08em', textTransform: 'uppercase', marginTop: '8px', marginBottom: '16px' }}>
            About Me
          </h2>
          <div style={{ width: '40px', height: '1px', background: '#f72585' }} />
        </div>

        <div className="a-text reveal" style={{ maxWidth: '700px', marginBottom: '60px' }}>
          <p style={{ fontSize: '15px', color: '#888', lineHeight: 1.8, marginBottom: '16px' }}>
            I'm a passionate Full Stack Developer with a love for creating innovative digital solutions.
            With experience in both frontend and backend technologies, I enjoy building applications
            that solve real-world problems and provide exceptional user experiences.
          </p>
          <p style={{ fontSize: '14px', color: '#666', lineHeight: 1.8 }}>
            When I'm not coding, you'll find me solving algorithmic challenges, exploring new technologies,
            and continuously learning to stay at the forefront of web development.
          </p>
        </div>

        <div className="a-cards" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1px', background: '#1a1a1a' }}>
          {keyInterests.map((interest, index) => (
            <div
              key={index}
              className="a-card reveal"
              style={{ background: '#0f0f0f', padding: '32px', borderTop: '2px solid transparent', transition: 'all 0.3s ease' }}
              onMouseEnter={e => { e.currentTarget.style.borderTopColor = '#f72585'; e.currentTarget.style.background = '#111' }}
              onMouseLeave={e => { e.currentTarget.style.borderTopColor = 'transparent'; e.currentTarget.style.background = '#0f0f0f' }}
            >
              <div style={{ width: '40px', height: '40px', marginBottom: '16px', border: '1px solid #222', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img src={interest.icon} alt={interest.title} style={{ width: '20px', height: '20px', filter: 'brightness(0) saturate(100%) invert(27%) sepia(100%) saturate(3000%) hue-rotate(290deg)' }} />
              </div>
              <h4 style={{ fontSize: '14px', fontWeight: 500, color: '#f0f0f0', marginBottom: '10px' }}>
                {interest.title}
              </h4>
              <p style={{ fontSize: '13px', color: '#555', lineHeight: 1.7 }}>
                {interest.title === 'Problem Solving' ? (
                  <>
                    Solving challenges on{' '}
                    <a href="https://leetcode.com/u/tyAXuZD5c8/" target="_blank" rel="noopener noreferrer" style={{ color: '#f72585', textDecoration: 'none' }}>LeetCode</a>
                    {' '}and{' '}
                    <a href="https://www.codewars.com/users/bommer153" target="_blank" rel="noopener noreferrer" style={{ color: '#f72585', textDecoration: 'none' }}>CodeWars</a>
                  </>
                ) : interest.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About