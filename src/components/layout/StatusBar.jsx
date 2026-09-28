import { useState, useEffect } from 'react'
import { Wifi, Circle, Terminal } from 'lucide-react'

const NAV = [
  { label: 'home',       id: 'home' },
  { label: 'about',      id: 'about' },
  { label: 'projects',   id: 'projects' },
  { label: 'skills',     id: 'skills' },
  { label: 'experience', id: 'experience' },
  { label: 'contact',    id: 'contact' },
]

const StatusBar = () => {
  const [time, setTime]       = useState(() => new Date())
  const [active, setActive]   = useState('home')
  const [scrolled, setScrolled] = useState(false)

  /* Live clock */
  useEffect(() => {
    const t = setInterval(() => setTime(new Date()), 1000)
    return () => clearInterval(t)
  }, [])

  /* Active-section tracking */
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24)
      const offset = window.scrollY + 90
      for (let i = NAV.length - 1; i >= 0; i--) {
        const el = document.getElementById(NAV[i].id)
        if (el && el.offsetTop <= offset) { setActive(NAV[i].id); break }
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  const hh = time.getHours().toString().padStart(2, '0')
  const mm = time.getMinutes().toString().padStart(2, '0')
  const ss = time.getSeconds().toString().padStart(2, '0')

  return (
    <header
      className="status-bar fixed top-0 left-0 right-0 z-50 h-8 flex items-center justify-between px-4 transition-colors duration-300"
      style={{
        background: scrolled
          ? 'rgba(4, 4, 7, 0.97)'
          : 'rgba(4, 4, 7, 0.80)',
        borderBottom: '1px solid rgba(43, 33, 58, 0.85)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
      }}
    >
      {/* ── Left: brand + current path ── */}
      <div className="flex items-center gap-2 font-mono text-xs select-none min-w-0">
        <Terminal size={11} className="text-accent accent-pulse flex-shrink-0" />
        <span className="text-accent font-semibold tracking-widest uppercase">stellar-cli</span>
        <span className="text-dust mx-0.5">│</span>
        <span className="text-star/40 hidden sm:inline">~/portfolio/</span>
        <span className="text-star/75">{active}</span>
      </div>

      {/* ── Center: nav (desktop) ── */}
      <nav className="hidden md:flex items-center gap-0.5 font-mono text-xs absolute left-1/2 -translate-x-1/2">
        {NAV.map(link => (
          <button
            key={link.id}
            onClick={() => scrollTo(link.id)}
            className={`px-2.5 py-0.5 rounded-sm transition-all duration-150 outline-none ${
              active === link.id
                ? 'text-accent'
                : 'text-star/45 hover:text-star/80'
            }`}
            style={active === link.id ? {
              background: 'rgba(255,0,127,0.08)',
              boxShadow: 'inset 0 0 0 1px rgba(255,0,127,0.25)',
            } : {}}
          >
            {link.label}
          </button>
        ))}
      </nav>

      {/* ── Right: system status ── */}
      <div className="flex items-center gap-3 font-mono text-xs text-star/45 select-none">

        {/* Signal bars */}
        <div className="hidden sm:flex items-end gap-px h-3.5">
          {[2, 4, 6, 8].map((h, i) => (
            <span
              key={i}
              className="w-1 rounded-sm transition-opacity"
              style={{
                height: `${h}px`,
                background: i < 3 ? '#FF007F' : 'rgba(43,33,58,0.9)',
                opacity:   i < 3 ? 0.8 : 0.4,
              }}
            />
          ))}
        </div>

        {/* Online status */}
        <span className="flex items-center gap-1.5">
          <Circle
            size={6}
            fill="#4ade80"
            className="text-emerald-400 accent-pulse"
            style={{ animationDuration: '2s' }}
          />
          <span className="hidden sm:inline text-emerald-400/70">online</span>
        </span>

        {/* Clock */}
        <span className="tabular-nums tracking-wide">
          <span>{hh}:{mm}</span>
          <span className="text-accent cursor-blink">:{ss}</span>
        </span>
      </div>
    </header>
  )
}

export default StatusBar
