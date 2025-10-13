import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Skills from './pages/Skills'
import Experience from './pages/Experience'
import Contact from './pages/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-x-hidden w-full max-w-full">
      {/* Hero-Inspired Background */}
      <div className="fixed inset-0 z-0">
        {/* Main Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
        
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/15 to-blue-500/10 animate-pulse"></div>
        
        {/* Grid Pattern Overlay */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        ></div>
        
        {/* Floating Orbs */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-400/15 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-48 h-48 bg-purple-400/15 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-1/3 w-40 h-40 bg-blue-300/15 rounded-full blur-xl animate-bounce delay-500"></div>
        <div className="absolute bottom-1/4 left-1/3 w-56 h-56 bg-purple-300/15 rounded-full blur-2xl animate-pulse delay-700"></div>
        
        {/* Additional Floating Elements */}
        <div className="absolute top-1/6 right-1/6 w-32 h-32 bg-cyan-400/12 rounded-full blur-2xl animate-pulse delay-300"></div>
        <div className="absolute bottom-1/6 right-1/5 w-40 h-40 bg-indigo-400/12 rounded-full blur-xl animate-bounce delay-900"></div>
        <div className="absolute top-2/3 left-1/6 w-48 h-48 bg-violet-400/12 rounded-full blur-2xl animate-pulse delay-1200"></div>
        <div className="absolute top-1/3 left-1/2 w-36 h-36 bg-emerald-400/10 rounded-full blur-xl animate-pulse delay-1500"></div>
        
        {/* Corner Accents */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-500/8 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-purple-500/8 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-bl from-cyan-500/8 to-transparent rounded-full blur-2xl"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-gradient-to-tr from-violet-500/8 to-transparent rounded-full blur-2xl"></div>
        
        {/* Floating Particles */}
        <div className="absolute inset-0 opacity-15">
          <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-blue-400 to-transparent animate-pulse"></div>
          <div className="absolute top-0 left-3/4 w-px h-full bg-gradient-to-b from-transparent via-purple-400 to-transparent animate-pulse delay-1000"></div>
          <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-blue-400 to-transparent animate-pulse delay-500"></div>
          <div className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-transparent via-cyan-400 to-transparent animate-pulse delay-1500"></div>
          <div className="absolute top-0 left-1/6 w-px h-full bg-gradient-to-b from-transparent via-indigo-400 to-transparent animate-pulse delay-2000"></div>
          <div className="absolute top-0 right-1/6 w-px h-full bg-gradient-to-b from-transparent via-violet-400 to-transparent animate-pulse delay-2500"></div>
        </div>
        
        {/* Radial Gradient Overlay */}
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-slate-800/20 to-slate-900/40"></div>
      </div>

      <Navbar />
      <main className="relative z-10 w-full max-w-full overflow-x-hidden">
        <Home />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App