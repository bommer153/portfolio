import { useState, useRef, useEffect, useCallback } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronRight, HelpCircle, X, Home, User, FolderOpen, Code2, Briefcase, MessageSquare } from 'lucide-react'

/* Icon map keyed by view id */
const NAV_ICONS = {
  home:       Home,
  about:      User,
  projects:   FolderOpen,
  skills:     Code2,
  experience: Briefcase,
  contact:    MessageSquare,
}

/* ── Command registry ───────────────────────────────────────── */
const VIEW_IDS = ['home', 'about', 'projects', 'skills', 'experience', 'contact']

const CMDS = {
  help: {
    lines: [
      '  ─── STELLAR-CLI COMMANDS ───────────────────────',
      '  home / about / projects / skills   → navigate',
      '  experience / contact               → navigate',
      '  cd <view>                          → same as above',
      '  whoami                             → identity info',
      '  ls                                 → list views',
      '  clear                              → clear output',
      '  ─────────────────────────────────────────────────',
    ],
    type: 'info',
  },
  whoami: {
    lines: [
      '  Jefferson Jalandoon',
      '  Full Stack Developer  ·  Taguig City, PH',
      '  jaxjalandoon@gmail.com  ·  github.com/bommer153',
    ],
    type: 'success',
  },
  ls: {
    lines: [`  ${VIEW_IDS.map(v => `./${v}`).join('   ')}`],
    type: 'info',
  },
}

const TYPE_COLOR = {
  info:    'rgba(181,174,196,0.65)',
  success: 'rgba(74,222,128,0.8)',
  error:   'rgba(248,113,113,0.8)',
  nav:     'rgba(255,0,127,0.75)',
}

/* ─────────────────────────────────────────────────────────────── */
const CLIPrompt = ({ active, navigate, views }) => {
  const [input,    setInput]    = useState('')
  const [log,      setLog]      = useState([])
  const [cmdStack, setCmdStack] = useState([])
  const [histIdx,  setHistIdx]  = useState(-1)

  const inputRef  = useRef(null)
  const logEndRef = useRef(null)

  useEffect(() => {
    logEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [log])

  /* Ctrl+K / Ctrl+` focuses prompt */
  useEffect(() => {
    const onKey = (e) => {
      if ((e.ctrlKey || e.metaKey) && (e.key === 'k' || e.key === '`')) {
        e.preventDefault()
        inputRef.current?.focus()
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const push = useCallback((cmd, lines, type) => {
    setLog(prev => [...prev, { id: Date.now() + Math.random(), cmd, lines, type }])
  }, [])

  const run = useCallback((raw) => {
    const cmd = raw.trim().toLowerCase()
    if (!cmd) return
    setCmdStack(prev => [cmd, ...prev.slice(0, 49)])
    setHistIdx(-1)

    if (VIEW_IDS.includes(cmd)) {
      navigate(cmd)
      push(raw, [`  ✦ view changed → ./${cmd}`], 'nav')
      return
    }
    if (cmd.startsWith('cd ')) {
      const target = cmd.slice(3).replace(/^\//, '').trim()
      if (VIEW_IDS.includes(target)) {
        navigate(target)
        push(raw, [`  ✦ view changed → ./${target}`], 'nav')
      } else {
        push(raw, [`  error: no such view "./${target}"`, `  valid: ${VIEW_IDS.join(', ')}`], 'error')
      }
      return
    }
    if (cmd === 'clear') { setLog([]); return }
    const def = CMDS[cmd]
    if (def) push(raw, def.lines, def.type)
    else     push(raw, [`  command not found: "${cmd}"  (type help)`], 'error')
  }, [navigate, push])

  const onKey = (e) => {
    if (e.key === 'Enter') { run(input); setInput('') }
    else if (e.key === 'ArrowUp') {
      e.preventDefault()
      const next = Math.min(histIdx + 1, cmdStack.length - 1)
      setHistIdx(next); setInput(cmdStack[next] ?? '')
    } else if (e.key === 'ArrowDown') {
      e.preventDefault()
      const next = histIdx - 1
      if (next < 0) { setHistIdx(-1); setInput(''); return }
      setHistIdx(next); setInput(cmdStack[next] ?? '')
    } else if (e.key === 'Escape') {
      setInput('')
    }
  }

  return (
    <motion.div
      initial={{ y: 44, opacity: 0 }}
      animate={{ y: 0,  opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.18 }}
      className="fixed bottom-0 left-0 right-0 z-50"
      style={{ borderTop: '1px solid rgba(43,33,58,0.85)' }}
    >
      {/* ── Log panel ── */}
      <AnimatePresence>
        {log.length > 0 && (
          <motion.div
            key="log"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{   height: 0, opacity: 0 }}
            transition={{ duration: 0.22, ease: [0.4, 0, 0.2, 1] }}
            style={{ overflow: 'hidden', background: 'rgba(8,7,12,0.97)', borderTop: '1px solid rgba(43,33,58,0.6)' }}
          >
            <div className="flex items-center justify-between px-4 py-1"
              style={{ borderBottom: '1px solid rgba(43,33,58,0.4)' }}>
              <span className="font-mono text-[10px] text-star/25 tracking-widest uppercase">output</span>
              <button onClick={() => setLog([])} className="text-star/25 hover:text-accent/70 transition-colors">
                <X size={10} />
              </button>
            </div>
            <div className="px-4 py-2 max-h-36 overflow-y-auto space-y-2 font-mono text-xs">
              {log.map(entry => (
                <div key={entry.id}>
                  <div className="flex items-center gap-1 mb-0.5" style={{ color: 'rgba(255,0,127,0.5)' }}>
                    <ChevronRight size={9} /><span>{entry.cmd}</span>
                  </div>
                  {entry.lines.map((line, i) => (
                    <div key={i} style={{ color: TYPE_COLOR[entry.type] ?? TYPE_COLOR.info, lineHeight: 1.7, whiteSpace: 'pre' }}>{line}</div>
                  ))}
                </div>
              ))}
              <div ref={logEndRef} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Mobile bottom nav (hidden on md+) ── */}
      <div
        className="flex md:hidden items-center justify-around"
        style={{ background: 'rgba(4,4,7,0.98)', borderTop: '1px solid rgba(43,33,58,0.7)', height: '52px' }}
      >
        {views.map(view => {
          const Icon  = NAV_ICONS[view.id] ?? Home
          const isAct = active === view.id
          return (
            <button
              key={view.id}
              onClick={() => navigate(view.id)}
              className="flex flex-col items-center justify-center gap-0.5 flex-1 h-full transition-colors"
              style={{ color: isAct ? '#FF007F' : 'rgba(181,174,196,0.38)', background: 'transparent', border: 'none', cursor: 'pointer' }}
            >
              <Icon size={15} strokeWidth={isAct ? 2 : 1.5} />
              <span style={{ fontSize: '8px', fontFamily: 'JetBrains Mono, monospace', letterSpacing: '0.05em' }}>
                {view.short}
              </span>
              {/* Pink dot under active tab */}
              {isAct && (
                <span style={{ width: '3px', height: '3px', borderRadius: '50%', background: '#FF007F', display: 'block' }} />
              )}
            </button>
          )
        })}
      </div>

      {/* ── CLI input bar (always visible) ── */}
      <div
        className="flex items-center gap-2 px-4 h-11 font-mono text-xs"
        style={{ background: 'rgba(4,4,7,0.98)' }}
        onClick={() => inputRef.current?.focus()}
      >
        <ChevronRight size={11} className="text-accent flex-shrink-0" />
        <span className="text-star/30 flex-shrink-0">stellar://</span>
        <span className="text-accent/60 flex-shrink-0">{active}</span>
        <span className="text-dust/70 flex-shrink-0 mx-0.5">›</span>
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={onKey}
          placeholder="command or view name…"
          className="flex-1 bg-transparent outline-none text-star/85 placeholder-star/20 min-w-0 text-xs"
          style={{ caretColor: '#FF007F', fontFamily: 'JetBrains Mono, monospace' }}
          spellCheck={false}
          autoComplete="off"
        />
        {!input && <span className="w-[7px] h-3.5 bg-accent/65 rounded-sm cursor-blink flex-shrink-0" aria-hidden />}
        <div className="hidden sm:flex items-center gap-3 text-star/20 flex-shrink-0 text-[10px]">
          <span>↑↓</span>
          <button onClick={e => { e.stopPropagation(); run('help') }} className="hover:text-accent/60 transition-colors" title="help">
            <HelpCircle size={11} />
          </button>
        </div>
      </div>
    </motion.div>
  )
}

export default CLIPrompt
