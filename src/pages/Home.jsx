const Home = () => {
  return (
    <section id="home" className="h-screen flex items-center justify-center relative overflow-hidden">
    
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
        
     
         <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/image/hero.jpg)',
            opacity: 0.01
          }}
        ></div> 
        
       
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-500/8 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-purple-500/8 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-bl from-cyan-500/8 to-transparent rounded-full blur-2xl"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-gradient-to-tr from-violet-500/8 to-transparent rounded-full blur-2xl"></div>
        
   
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-48 h-48 bg-purple-500/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-1/3 w-40 h-40 bg-cyan-500/10 rounded-full blur-xl animate-bounce delay-500"></div>
        <div className="absolute bottom-1/4 left-1/3 w-56 h-56 bg-violet-500/10 rounded-full blur-2xl animate-pulse delay-700"></div>
        

        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 border-2 border-blue-500/30 rounded-full animate-spin-slow"></div>
        <div className="absolute top-1/3 right-1/4 w-32 h-32 border-2 border-purple-500/30 rounded-full animate-spin-reverse"></div>
        <div className="absolute bottom-1/3 left-1/4 w-24 h-24 border-2 border-cyan-500/30 rounded-full animate-spin-slow"></div>
        
 
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-blue-400/20 to-transparent animate-pulse"></div>
        <div className="absolute top-0 left-3/4 w-px h-full bg-gradient-to-b from-transparent via-purple-400/20 to-transparent animate-pulse delay-1000"></div>
        <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-cyan-400/20 to-transparent animate-pulse delay-500"></div>
        <div className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-transparent via-violet-400/20 to-transparent animate-pulse delay-1500"></div>
        
 
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px'
          }}
        ></div>
      </div>

      <div className="w-full px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
    
          <div className="text-center">         

          
            <div className="flex justify-center mb-8">
              <div className="relative">
                <img 
                  src="/image/hero-transparen.png" 
                  alt="Jefferson Jalandoon" 
                  className="w-50 h-50 object-cover"
                />
                
              </div>
            </div>

         
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-thin text-white mb-4 tracking-wider break-words">
              JEFFERSON
            </h1>
            
            <h2 className="text-lg sm:text-xl md:text-2xl text-gray-400 mb-6 sm:mb-8 font-light">
              Full Stack Developer
            </h2>
            
            <p className="text-sm sm:text-base md:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed mb-8 sm:mb-12 px-2">
              <span className="text-blue-400">I Love to Code.</span> I Live to Learn. <span className="text-blue-400">Let's Build Something Awesome.</span>
            </p>

         
            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-6 md:gap-8">
              <button
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="group relative px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 bg-gradient-to-r from-blue-600 to-purple-700 text-white rounded-none font-semibold text-sm sm:text-base md:text-lg transition-all duration-300 hover:from-blue-500 hover:to-purple-600 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25"
                style={{
                  clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 100%, 8px 100%)'
                }}
              >
                <span className="relative z-10 flex items-center gap-2 sm:gap-3">
                  View My Work
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>

              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 border-2 border-blue-500/40 text-blue-400 rounded-none font-semibold text-sm sm:text-base md:text-lg transition-all duration-300 hover:bg-blue-500/10 hover:border-blue-400 hover:scale-105 backdrop-blur-sm"
                style={{
                  clipPath: 'polygon(8px 0, 100% 0, calc(100% - 8px) 100%, 0 100%)'
                }}
              >
                Get In Touch
              </button>
            </div>

         
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 md:gap-8 mt-12 sm:mt-16">
              <span className="text-gray-300 font-semibold text-sm sm:text-base md:text-lg">Connect:</span>
              <div className="flex gap-4 sm:gap-6">
                <a
                  href="https://github.com/bommer153"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-3 sm:p-4 bg-slate-800/30 backdrop-blur-sm transition-all duration-300 hover:bg-blue-500/20 hover:scale-125 hover:shadow-lg hover:shadow-blue-500/20"
                  style={{
                    clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 100%, 8px 100%)'
                  }}
                >
                  <img src="/image/github.svg" alt="GitHub" className="w-5 h-5 sm:w-6 sm:h-6 filter brightness-0 invert group-hover:filter-none transition-all duration-300" />
                </a>
                <a
                  href="https://linkedin.com/in/jefferson-jalandoon-61669427a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-3 sm:p-4 bg-slate-800/30 backdrop-blur-sm transition-all duration-300 hover:bg-blue-500/20 hover:scale-125 hover:shadow-lg hover:shadow-blue-500/20"
                  style={{
                    clipPath: 'polygon(8px 0, 100% 0, calc(100% - 8px) 100%, 0 100%)'
                  }}
                >
                  <img src="/image/linkedin.svg" alt="LinkedIn" className="w-5 h-5 sm:w-6 sm:h-6 filter brightness-0 invert group-hover:filter-none transition-all duration-300" />
                </a>
                <a
                  href="https://facebook.com/aow.cc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-3 sm:p-4 bg-slate-800/30 backdrop-blur-sm transition-all duration-300 hover:bg-blue-500/20 hover:scale-125 hover:shadow-lg hover:shadow-blue-500/20"
                  style={{
                    clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 100%, 8px 100%)'
                  }}
                >
                  <img src="/image/facebook.svg" alt="Facebook" className="w-5 h-5 sm:w-6 sm:h-6 filter brightness-0 invert group-hover:filter-none transition-all duration-300" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home