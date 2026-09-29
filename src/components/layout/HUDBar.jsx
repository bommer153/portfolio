import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Zap, Circle } from 'lucide-react'

const fmt = (n) => String(n).padStart(2, '0')

/* Thin sliding underline for active tab — uses layout animation */
const ActivePip = () => (
  <motion.span
    layoutId="hud-active-pip"
    className="absolute bottom-0 left-0 right-0 h-px bg-accent"
    transition={{ duration: 0.22, ease: [0.4, 0, 0.2, 1] }}
  />
)

const HUDBar = ({ views, active, navigate }) => {
  const [time, setTime] = useState(() => new Date())

  useEffect(() => {
    const t = setInterval(() => setTime(new Date()), 1000)
    return () => clearInterval(t)
  }, [])

  return (
    <motion.header
      initial={{ y: -36, opacity: 0 }}
      animate={{ y: 0,   opacity: 1 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
      className="fixed top-0 left-0 right-0 z-50 h-9 flex items-center gap-4 px-4"
      style={{
        background:     'rgba(4, 4, 7, 0.96)',
        borderBottom:   '1px solid rgba(43, 33, 58, 0.85)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
      }}
    >
      {/* ── Brand mark ── */}
      <div className="flex items-center gap-2 flex-shrink-0 font-mono text-xs select-none">
        <Zap size={12} className="text-accent accent-pulse" fill="currentColor" />
        <span className="text-accent font-bold tracking-[0.18em] text-[11px] uppercase">
          Stellar
        </span>
      </div>

      {/* ── Separator ── */}
      <span className="text-dust/60 select-none flex-shrink-0">│</span>

      {/* ── View tabs (desktop only — mobile nav is in bottom bar) ── */}
      <nav className="hidden md:flex items-stretch gap-0.5 h-full flex-1 font-mono text-[11px]">
        {views.map(view => {
          const isActive = active === view.id
          return (
            <button
              key={view.id}
              onClick={() => navigate(view.id)}
              className="relative flex items-center gap-1 px-3 transition-colors duration-150 outline-none cursor-pointer border-none"
              style={{
                background: isActive ? 'rgba(255, 0, 127, 0.06)' : 'transparent',
                color:      isActive ? '#FF007F' : 'rgba(181,174,196,0.4)',
              }}
              onMouseEnter={e => { if (!isActive) e.currentTarget.style.color = 'rgba(181,174,196,0.72)' }}
              onMouseLeave={e => { if (!isActive) e.currentTarget.style.color = 'rgba(181,174,196,0.4)' }}
            >
              <span className="opacity-40">./</span>
              <span>{view.id}</span>
              {isActive && <ActivePip />}
            </button>
          )
        })}
      </nav>

      {/* ── Right telemetry ── */}
      <div className="flex items-center gap-3 flex-shrink-0 font-mono text-[11px] text-star/35 select-none">

        {/* Ping indicator */}
        <span className="hidden sm:flex items-center gap-1.5 text-accent/50">
          <span className="w-1 h-1 rounded-full bg-accent inline-block accent-pulse" />
          <span className="text-[10px]">2ms</span>
        </span>

        {/* Live status */}
        <span className="hidden md:flex items-center gap-1.5 text-emerald-400/55">
          <Circle size={5} fill="currentColor" className="text-emerald-400 accent-pulse" style={{ animationDelay: '0.4s' }} />
          <span className="text-[10px] tracking-wider">LIVE</span>
        </span>

        {/* Clock */}
        <span className="tabular-nums text-star/50 tracking-wide">
          <span>{fmt(time.getHours())}</span>
          <span className="text-dust/80">:</span>
          <span>{fmt(time.getMinutes())}</span>
          <span className="text-accent/70 cursor-blink">:{fmt(time.getSeconds())}</span>
        </span>
      </div>
    </motion.header>
  )
}

export default HUDBar
