import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const Experience = () => {
  const sectionRef = useRef(null)

  const experiences = [
     {
      title: 'Frontend Developer',
      company: 'Mary Grace Food',
      period: 'Jan 2026 - Present',
      responsibilities: [
        'Developed and maintained frontend features using React.js and other modern web technologies.',
        'Collaborated with backend developers to integrate APIs and ensure seamless data flow.',
        'Optimized web applications for maximum speed and scalability.',
        'Implemented responsive design principles to ensure the application is mobile-friendly and accessible across various devices.',
        'Work with these tools and technologies: SWR, HeroUI, Tailwind CSS, Vite, GitHub, Capacitor.',
        'Provide Software support and maintenance for existing applications, ensuring they remain up-to-date and functional.'
      ]
    },
    {
      title: 'Computer Operator III',
      company: 'Department of Science and Technology',
      period: 'Feb 2025 - Dec 31, Present',
      responsibilities: [
        'ICT equipment troubleshooting and maintenance.',
        'Conduct of preventive maintenance.',
        'Facilitate system development and customization for various systems.'
      ]
    },
    {
      title: 'Web Developer',
      company: 'Taguig City University',
      period: '2023 - 2024',
      responsibilities: [
        'Developed internal web applications using Laravel (Blade) and React.js, accelerating module delivery and improving user experience.',
        'Designed optimized MySQL schemas for student, faculty, and course data, ensuring fast queries and reliable performance.',
        'Implemented role-based authentication with Laravel Auth, enhancing security and access control across 3 distinct user groups',
        'Created middleware for route protection, session validation, and permission checks reducing unauthorized access and simplifying route logic.',
        'Built responsive UIs with Blade + React.js, improving mobile usability and reducing bug reports by 30%.'
      ]
    },
    {
      title: 'IT Support',
      company: 'Taguig City University',
      period: '2018 - 2022',
      responsibilities: [
        'Provided IT support and gained a strong technical foundation before transitioning into web development.'
      ]
    }
  ]

  const training = {
    title: 'Full Stack Development Training Course',
    institution: 'Uplift Code Camp',
    logo: './image/uplift.png',
    period: 'May 2025 — October 2025',
    highlights: [
      'Learned MERN stack: MongoDB, Express.js, React.js, and Node.js',
      'Learned Git and GitHub for collaborative development workflows',
      'Built projects using modern web technologies',
      'Developed responsive web applications with React.js',
      'Built RESTful APIs using Express.js and Node.js',
      'Implemented MongoDB database design and management',
      'Practiced version control and team collaboration with Git',
    ],
  }

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.ex-header', { opacity: 0, y: 30, duration: 0.7, ease: 'power2.out',
        scrollTrigger: { trigger: '.ex-header', start: 'top bottom', once: true } })
    }, sectionRef)

    const items = sectionRef.current?.querySelectorAll('.ex-item, .ex-training')
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
    <section ref={sectionRef} id="experience" style={{ minHeight: '100vh', padding: '80px 24px' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto', width: '100%' }}>

        <div className="ex-header" style={{ marginBottom: '60px' }}>
          <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '11px', color: '#f72585', letterSpacing: '0.3em', textTransform: 'uppercase' }}>
            04 / Experience
          </span>
          <h2 style={{ fontSize: 'clamp(32px, 5vw, 56px)', fontWeight: 200, color: '#ffffff', letterSpacing: '0.08em', textTransform: 'uppercase', marginTop: '8px', marginBottom: '16px' }}>
            Career
          </h2>
          <div style={{ width: '40px', height: '1px', background: '#f72585' }} />
        </div>

        <div className="ex-timeline" style={{ position: 'relative', paddingLeft: '28px' }}>
          <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '1px', background: 'linear-gradient(to bottom, #f72585, rgba(247,37,133,0.08))' }} />
          {experiences.map((exp, i) => (
            <div key={i} className="ex-item reveal" style={{ position: 'relative', marginBottom: '48px' }}>
              <div style={{ position: 'absolute', left: '-32px', top: '6px', width: '7px', height: '7px', borderRadius: '50%', background: '#f72585', boxShadow: '0 0 8px rgba(247,37,133,0.5)' }} />
              <div style={{ marginBottom: '6px' }}>
                <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '10px', color: '#555', letterSpacing: '0.15em', textTransform: 'uppercase' }}>{exp.period}</span>
              </div>
              <h3 style={{ fontSize: '16px', fontWeight: 500, color: '#f0f0f0', marginBottom: '4px' }}>{exp.title}</h3>
              <p style={{ fontSize: '13px', color: '#f72585', marginBottom: '14px' }}>{exp.company}</p>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {exp.responsibilities.map((r, ri) => (
                  <li key={ri} style={{ display: 'flex', gap: '10px', marginBottom: '7px', alignItems: 'flex-start' }}>
                    <span style={{ color: '#f72585', marginTop: '7px', fontSize: '5px', flexShrink: 0 }}>■</span>
                    <span style={{ fontSize: '13px', color: '#666', lineHeight: 1.7 }}>{r}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="ex-training reveal" style={{ marginTop: '60px', padding: '28px', background: '#0f0f0f', borderTop: '1px solid #f72585' }}>
          <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '10px', color: '#f72585', letterSpacing: '0.2em', textTransform: 'uppercase', display: 'block', marginBottom: '16px' }}>
            Professional Development
          </span>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '12px', marginBottom: '16px' }}>
            <div>
              <h3 style={{ fontSize: '15px', fontWeight: 500, color: '#f0f0f0', marginBottom: '8px' }}>{training.title}</h3>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <img src={training.logo} alt="Uplift" style={{ width: '24px', height: '24px', objectFit: 'contain' }} onError={e => e.currentTarget.style.display='none'} />
                <span style={{ fontSize: '13px', color: '#f72585' }}>{training.institution}</span>
              </div>
            </div>
            <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '11px', color: '#555', letterSpacing: '0.05em' }}>{training.period}</span>
          </div>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {training.highlights.map((h, hi) => (
              <li key={hi} style={{ display: 'flex', gap: '10px', marginBottom: '6px', alignItems: 'flex-start' }}>
                <span style={{ color: '#f72585', marginTop: '7px', fontSize: '5px', flexShrink: 0 }}>■</span>
                <span style={{ fontSize: '13px', color: '#666', lineHeight: 1.7 }}>{h}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Experience