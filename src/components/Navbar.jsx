import { useState, useEffect } from 'react'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Projects', id: 'projects' },
    { name: 'Skills', id: 'skills' },
    { name: 'Experience', id: 'experience' },
    { name: 'Contact', id: 'contact' }
  ]

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {    
      setActiveSection(sectionId)
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map(link => document.getElementById(link.id))
      const scrollPosition = window.scrollY + 100

      if (window.scrollY < 100) {
        setActiveSection('home')
        return
      }

      for (let i = sections.length - 1; i >= 0; i--) {
        if (sections[i] && sections[i].offsetTop <= scrollPosition) {
          setActiveSection(navLinks[i].id)
          break
        }
      }
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className="fixed top-0 w-full z-50 bg-slate-900/90 backdrop-blur-md border-b border-blue-500/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center h-14 sm:h-16">
          {/* Logo with Geometric Shape */}
          <button 
            onClick={() => scrollToSection('home')}
            className="group"
          >
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-blue-500/30 blur opacity-75 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 100%, 8px 100%)'
                }}
              ></div>
              <div className="relative w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-lg sm:text-xl font-bold text-white shadow-lg group-hover:scale-105 transition-all duration-300 geom-transform"
                style={{
                  clipPath: 'polygon(0 0, calc(100% - 6px) 0, 100% 100%, 6px 100%)'
                }}
              >
                <span className="geom-symbol">J</span>
              </div>
            </div>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.id)}
                className={`geom-card px-3 lg:px-6 py-2 lg:py-3 text-xs lg:text-sm font-semibold transition-all duration-300 relative group ${
                  activeSection === link.id
                    ? 'text-white bg-blue-500/20'
                    : 'text-gray-300 hover:text-white hover:bg-slate-800/50'
                }`}
                style={{
                  clipPath: activeSection === link.id
                    ? 'polygon(0 0, calc(100% - 10px) 0, 100% 100%, 10px 100%)'
                    : 'polygon(0 0, calc(100% - 8px) 0, 100% 100%, 8px 100%)'
                }}
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-1.5 sm:p-2 text-gray-300 hover:text-white transition-colors duration-300"
            >
              <div className="w-5 h-5 sm:w-6 sm:h-6 flex flex-col justify-center items-center">
                <span className={`block w-5 h-0.5 sm:w-6 sm:h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1' : ''}`}></span>
                <span className={`block w-5 h-0.5 sm:w-6 sm:h-0.5 bg-current transition-all duration-300 mt-1 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`block w-5 h-0.5 sm:w-6 sm:h-0.5 bg-current transition-all duration-300 mt-1 ${isMenuOpen ? '-rotate-45 -translate-y-1' : ''}`}></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-300 ${isMenuOpen ? 'block' : 'hidden'}`}>
          <div className="mt-3 sm:mt-4 p-4 sm:p-6 bg-slate-800/30 backdrop-blur-md border border-blue-500/20"
            style={{
              clipPath: 'polygon(0 0, calc(100% - 15px) 0, 100% 100%, 15px 100%)'
            }}
          >
            <div className="space-y-2 sm:space-y-3">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.id)}
                  className={`block w-full text-left px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-base font-semibold transition-all duration-300 relative group ${
                    activeSection === link.id
                      ? 'text-white bg-blue-500/20'
                      : 'text-gray-300 hover:text-white hover:bg-slate-700/50'
                  }`}
                  style={{
                    clipPath: activeSection === link.id
                      ? 'polygon(0 0, calc(100% - 12px) 0, 100% 100%, 12px 100%)'
                      : 'polygon(0 0, calc(100% - 10px) 0, 100% 100%, 10px 100%)'
                  }}
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar