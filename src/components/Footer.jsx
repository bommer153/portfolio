const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="geom-card bg-slate-900/80 backdrop-blur-md border-t border-blue-500/20 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-8">   
          <p className="text-gray-400 mb-6 text-lg">
            Connect with me on social media
            <span className="mx-2 text-blue-400/60 font-mono text-sm">
              <span className="geom-symbol">◢</span>
              <span className="geom-notation"> Social</span>
              <span className="mx-1">=</span>
              <span className="geom-shape">△</span>
              <span className="geom-notation"> GitHub</span>
              <span className="mx-1">+</span>
              <span className="geom-shape">○</span>
              <span className="geom-notation"> LinkedIn</span>
              <span className="mx-1">+</span>
              <span className="geom-shape">□</span>
              <span className="geom-notation"> Facebook</span>
              <span className="geom-symbol">◣</span>
            </span>
          </p>
          <div className="flex justify-center gap-6 mb-8">
            <a
              href="https://github.com/bommer153"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-slate-800/30 backdrop-blur-sm transition-all duration-300 hover:bg-blue-500/20 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/20"
              style={{
                clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 100%, 8px 100%)'
              }}
            >
              <img src="./image/github.svg" alt="GitHub" className="w-5 h-5 filter brightness-0 invert" />
            </a>
            <a
              href="https://linkedin.com/in/jefferson-jalandoon-61669427a/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-slate-800/30 backdrop-blur-sm transition-all duration-300 hover:bg-blue-500/20 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/20"
              style={{
                clipPath: 'polygon(8px 0, 100% 0, calc(100% - 8px) 100%, 0 100%)'
              }}
            >
              <img src="./image/linkedin.svg" alt="LinkedIn" className="w-5 h-5 filter brightness-0 invert" />
            </a>
            <a
              href="https://facebook.com/aow.cc"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-slate-800/30 backdrop-blur-sm transition-all duration-300 hover:bg-blue-500/20 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/20"
              style={{
                clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 100%, 8px 100%)'
              }}
            >
              <img src="./image/facebook.svg" alt="Facebook" className="w-5 h-5 filter brightness-0 invert" />
            </a>
          </div>
        </div>

        <div className="border-t border-slate-700/50 pt-6 text-center">
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} Jefferson's Portfolio. All rights reserved.
          </p>        
        </div>
      </div>
    </footer>
  )
}

export default Footer