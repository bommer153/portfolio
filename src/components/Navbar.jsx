import { useState, useEffect } from 'react'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [clickedSection, setClickedSection] = useState(null)

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
  
      setClickedSection(sectionId)
      element.scrollIntoView({ behavior: 'smooth' })      

      setTimeout(() => {
        setClickedSection(null)
      }, 1000)
    }
    setIsMenuOpen(false)
  }

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map(link => document.getElementById(link.id))
      const scrollPosition = window.scrollY + 100

      for (let i = sections.length - 1; i >= 0; i--) {
        if (sections[i] && sections[i].offsetTop <= scrollPosition) {
          setActiveSection(navLinks[i].id)
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
        <nav className="fixed top-0 w-full z-50 bg-slate-900/90 backdrop-blur-md border-b border-blue-500/20">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex justify-between items-center h-16">
              {/* Logo */}
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
                  <div className="relative w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-xl font-bold text-white shadow-lg group-hover:scale-105 transition-all duration-300"
                    style={{
                      clipPath: 'polygon(0 0, calc(100% - 6px) 0, 100% 100%, 6px 100%)'
                    }}
                  >
                    J
                  </div>
                </div>
              </button>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-2">
                {navLinks.map((link) => (
                  <button
                    key={link.name}
                    onClick={() => scrollToSection(link.id)}
                    className={`px-6 py-3 text-sm font-semibold transition-all duration-300 relative group ${
                      activeSection === link.id || clickedSection === link.id
                        ? 'text-white bg-blue-500/20'
                        : 'text-gray-300 hover:text-white hover:bg-slate-800/50'
                    } ${
                      clickedSection === link.id
                        ? 'scale-105 shadow-lg shadow-blue-500/30'
                        : ''
                    }`}
                    style={{
                      clipPath: activeSection === link.id || clickedSection === link.id
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
              className="p-2 text-gray-300 hover:text-white transition-colors duration-200"
            >
              <div className="w-6 h-6 flex flex-col justify-center">
                <span className={`block h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1' : ''}`}></span>
                <span className={`block h-0.5 bg-current transition-all duration-300 mt-1 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`block h-0.5 bg-current transition-all duration-300 mt-1 ${isMenuOpen ? '-rotate-45 -translate-y-1' : ''}`}></span>
              </div>
            </button>
          </div>
        </div>

            {/* Mobile Navigation */}
            <div className={`md:hidden transition-all duration-300 ${isMenuOpen ? 'block' : 'hidden'}`}>
              <div className="mt-4 p-6 bg-slate-800/30 backdrop-blur-md border border-blue-500/20"
                style={{
                  clipPath: 'polygon(0 0, calc(100% - 15px) 0, 100% 100%, 15px 100%)'
                }}
              >
                <div className="space-y-3">
                  {navLinks.map((link) => (
                    <button
                      key={link.name}
                      onClick={() => scrollToSection(link.id)}
                      className={`block w-full text-left px-6 py-4 text-base font-semibold transition-all duration-300 relative group ${
                        activeSection === link.id || clickedSection === link.id
                          ? 'text-white bg-blue-500/20'
                          : 'text-gray-300 hover:text-white hover:bg-slate-700/50'
                      } ${
                        clickedSection === link.id
                          ? 'scale-105 shadow-lg shadow-blue-500/30'
                          : ''
                      }`}
                      style={{
                        clipPath: activeSection === link.id || clickedSection === link.id
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