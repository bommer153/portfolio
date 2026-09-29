import { useState, useCallback } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import HUDBar    from './components/layout/HUDBar'
import CLIPrompt from './components/layout/CLIPrompt'
import Home       from './pages/Home'
import About      from './pages/About'
import Projects   from './pages/Projects'
import Skills     from './pages/Skills'
import Experience from './pages/Experience'
import Contact    from './pages/Contact'

/* ── All six views (exported so CLIPrompt can import) ───────── */
export const VIEWS = [
  { id: 'home',       label: 'home',       short: 'home'    },
  { id: 'about',      label: 'about',      short: 'about'   },
  { id: 'projects',   label: 'projects',   short: 'work'    },
  { id: 'skills',     label: 'skills',     short: 'skills'  },
  { id: 'experience', label: 'experience', short: 'exp'     },
  { id: 'contact',    label: 'contact',    short: 'contact' },
]

/* Lazy map — avoids stale closures; components mount fresh on every view change */
const VIEW_MAP = {
  home:       Home,
  about:      About,
  projects:   Projects,
  skills:     Skills,
  experience: Experience,
  contact:    Contact,
}

/* ── Page transition variants ───────────────────────────────── */
const pageVariants = {
  initial: (dir) => ({
    x:       dir > 0 ? '6%' : '-6%',
    opacity: 0,
    filter:  'blur(10px)',
  }),
  animate: {
    x:       '0%',
    opacity: 1,
    filter:  'blur(0px)',
    transition: { duration: 0.42, ease: [0.22, 1, 0.36, 1] },
  },
  exit: (dir) => ({
    x:       dir > 0 ? '-4%' : '4%',
    opacity: 0,
    filter:  'blur(8px)',
    transition: { duration: 0.26, ease: [0.4, 0, 1, 1] },
  }),
}

/* ── App shell ──────────────────────────────────────────────── */
function App() {
  const [activeView, setActiveView] = useState('home')
  const [direction,  setDirection]  = useState(1)

  const navigate = useCallback((targetId) => {
    if (targetId === activeView) return
    const fromIdx = VIEWS.findIndex(v => v.id === activeView)
    const toIdx   = VIEWS.findIndex(v => v.id === targetId)
    setDirection(toIdx > fromIdx ? 1 : -1)
    setActiveView(targetId)
  }, [activeView])

  const PageComponent = VIEW_MAP[activeView]

  return (
    <div style={{ height: '100vh', background: '#040407', display: 'flex', flexDirection: 'column', overflow: 'hidden', position: 'relative' }}>
      <div className="stellar-bg" aria-hidden="true" />

      {/* ── HUD ── */}
      <HUDBar views={VIEWS} active={activeView} navigate={navigate} />

      {/* ── Content area — bottom offset differs mobile vs desktop ── */}
      <main
        className="app-main"
        style={{ flex: 1, position: 'relative', overflow: 'hidden', marginTop: '36px' }}
      >
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={activeView}
            custom={direction}
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="view-frame"
          >
            <PageComponent />
          </motion.div>
        </AnimatePresence>
      </main>

      {/* ── CLI + mobile nav ── */}
      <CLIPrompt active={activeView} navigate={navigate} views={VIEWS} />
    </div>
  )
}

export default App