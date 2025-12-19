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
 
      <div className="fixed inset-0 z-0">
 
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
        

        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/15 to-blue-500/10 animate-pulse"></div>
        
  
        {/* Geometric Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-25"
          style={{
            backgroundImage: `
              repeating-linear-gradient(0deg, transparent, transparent 40px, rgba(59, 130, 246, 0.15) 40px, rgba(59, 130, 246, 0.15) 41px),
              repeating-linear-gradient(90deg, transparent, transparent 40px, rgba(59, 130, 246, 0.15) 40px, rgba(59, 130, 246, 0.15) 41px)
            `
          }}
        ></div>
        
        {/* Geometric Shapes Pattern */}
        <div 
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage: `
              radial-gradient(circle at 20% 30%, rgba(59, 130, 246, 0.2) 3px, transparent 3px),
              radial-gradient(circle at 80% 70%, rgba(147, 51, 234, 0.2) 3px, transparent 3px),
              radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.1) 4px, transparent 4px)
            `,
            backgroundSize: '100px 100px, 120px 120px, 150px 150px',
            backgroundPosition: '0 0, 50px 50px, 25px 25px'
          }}
        ></div>
        
        {/* Geometric Polygons */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              repeating-conic-gradient(from 0deg at 50% 50%, transparent 0deg, rgba(59, 130, 246, 0.1) 10deg, transparent 20deg),
              repeating-conic-gradient(from 45deg at 50% 50%, transparent 0deg, rgba(147, 51, 234, 0.1) 10deg, transparent 20deg)
            `,
            backgroundSize: '200px 200px'
          }}
        ></div>
        
      
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-400/15 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-48 h-48 bg-purple-400/15 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-1/3 w-40 h-40 bg-blue-300/15 rounded-full blur-xl animate-bounce delay-500"></div>
        <div className="absolute bottom-1/4 left-1/3 w-56 h-56 bg-purple-300/15 rounded-full blur-2xl animate-pulse delay-700"></div>
     
        <div className="absolute top-1/6 right-1/6 w-32 h-32 bg-cyan-400/12 rounded-full blur-2xl animate-pulse delay-300"></div>
        <div className="absolute bottom-1/6 right-1/5 w-40 h-40 bg-indigo-400/12 rounded-full blur-xl animate-bounce delay-900"></div>
        <div className="absolute top-2/3 left-1/6 w-48 h-48 bg-violet-400/12 rounded-full blur-2xl animate-pulse delay-1200"></div>
        <div className="absolute top-1/3 left-1/2 w-36 h-36 bg-emerald-400/10 rounded-full blur-xl animate-pulse delay-1500"></div>
        
  
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-500/8 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-purple-500/8 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-bl from-cyan-500/8 to-transparent rounded-full blur-2xl"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-gradient-to-tr from-violet-500/8 to-transparent rounded-full blur-2xl"></div>
        
      
        {/* Geometric Shapes - Triangles and Polygons */}
        <div className="absolute inset-0 opacity-20">
          {/* Triangle shapes */}
          <div className="absolute top-1/4 left-1/4 w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-b-[35px] border-b-blue-400/30 animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-t-[35px] border-t-purple-400/30 animate-pulse delay-1000"></div>
          {/* Hexagon shapes */}
          <div className="absolute top-1/2 left-1/3 w-16 h-16 border-2 border-cyan-400/30 transform rotate-45 animate-pulse delay-500" style={{clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'}}></div>
          <div className="absolute top-1/3 right-1/3 w-12 h-12 border-2 border-violet-400/30 transform -rotate-45 animate-pulse delay-700" style={{clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'}}></div>
        </div>
        
        {/* Geometric Patterns */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-24 h-24 border-2 border-blue-400/30 transform rotate-45 geom-rotate"></div>
          <div className="absolute bottom-1/4 right-1/4 w-20 h-20 border-2 border-purple-400/30 transform -rotate-45 geom-rotate" style={{animationDirection: 'reverse'}}></div>
        </div>
        
  
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