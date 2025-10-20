import { useState, useEffect, useRef, useCallback } from 'react'

const Projects = () => {
  const [currentProject, setCurrentProject] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [isLoading, setIsLoading] = useState(true)
  const [touchStart, setTouchStart] = useState(null)
  const [touchEnd, setTouchEnd] = useState(null)
  const carouselRef = useRef(null)
  const intervalRef = useRef(null)

  const handleProjectClick = (project) => {
    if (project.external) {
      window.open(project.link, '_blank', 'noopener,noreferrer')
    } else {
      window.location.href = project.link
    }
  }

  const projects = [
    {
      id: 1,
      title: 'ID Maker',
      description: 'An ID maker is a tool or service used to design and print professional identification cards quickly and easily.',
      image: './image/idgen.png',
      technologies: ['PHP', 'Laravel', 'JavaScript', 'MySQL'],
      link: 'https://github.com/bommer153',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      id: 2,
      title: 'Job Portal Website',
      description: 'A full-featured job portal with user authentication, job listings, and application management. Built with Laravel and MySQL.',
      image: './image/jobPortal.png',
      technologies: ['Laravel', 'PHP', 'MySQL', 'React', 'Inertia.js'],
      link: 'https://tcujobportal-main-4mukem.laravel.cloud/',
      external: true,
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      id: 3,
      title: 'Agrina Ecommerce',
      description: 'An agriculture e-commerce platform enables farmers and buyers to trade products like seeds, tools, and produce online, improving access and efficiency.',
      image: './image/agrina.png',
      technologies: ['PHP', 'Laravel', 'JavaScript', 'jQuery/AJAX', 'MySQL'],
      link: 'https://github.com/bommer153/agriNa',
      external: true,
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      id: 4,
      title: 'Pageant Tabulation System',
      description: 'A Pageant Tabulation System is a software used to record, calculate, and display scores in beauty pageants, ensuring accurate and efficient results.',
      image: './image/tabulation.png',
      technologies: ['PHP', 'Laravel', 'JavaScript', 'jQuery/AJAX', 'MySQL'],
      link: 'https://github.com/bommer153/foundation',
      external: true,
      gradient: 'from-orange-500 to-red-500'
    },
    {
      id: 5,
      title: 'Sober Living Website',
      description: 'A Florida-based sober house website providing information about recovery services, facilities, and support for individuals seeking a sober living environment. Features a clean, professional design with easy navigation and comprehensive information about the sober living community.',
      image: './image/sober-house.png',
      technologies: ['React', 'Tailwind CSS', 'JavaScript', 'HTML5'],
      link: 'https://sober-house.vercel.app/',
      external: true,
      gradient: 'from-teal-500 to-cyan-500'
    },
    {
      id: 7,
      title: 'PokeMatch Memory Game',
      description: 'Pokematch Memory Game is a fun and interactive card-matching game where players flip cards to find matching pairs of Pokémon. It\'s a great way to test your memory and enjoy your favorite Pokémon characters at the same time!',
      image: './image/pokematch.png',
      technologies: ['HTML', 'CSS', 'Vanilla JavaScript', 'JSON API'],
      link: 'https://pokemon-master-memory.onrender.com/',
      external: true,
      gradient: 'from-indigo-500 to-purple-500'
    },
    {
      id: 8,
      title: 'Bit9o',
      description: 'Bit9o is a real-time, web-based bingo game built with the MERN stack, reimagined for quick and exciting gameplay. It lets a host create a game room and players join instantly using a room code — no sign-ups, no hassle. Once the game starts, the host draws numbers live, and all players\' cards update in real time. With its clean UI, mobile-friendly design, and sound effects, Bit9o brings the classic bingo feel into a modern, interactive experience you can play anywhere.',
      image: './image/bit9o.png',
      technologies: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Pusher'],
      link: 'https://bit9o.com',
      external: true,
      gradient: 'from-cyan-500 to-blue-500'
    },
    {
      id: 9,
      title: 'WHO WANTS TO BE A QUADRILLIONAIRE?',
      description: 'A fun and challenging quiz game inspired by "Who Wants to Be a Millionaire" but with a twist - you\'re aiming for quadrillions! Test your knowledge across various categories with multiple-choice questions that get progressively harder. Features include lifelines (50/50, Phone a Friend, Ask the Audience), stunning animations, and an engaging UI that keeps you on the edge of your seat. Can you make it to the top and become a quadrillionaire?',
      image: './image/quad.png',
      technologies: ['React', 'JavaScript', 'Tailwind CSS', 'HTML5', 'JSON'],
      link: 'https://quadrilionaire-quiz.onrender.com/',
      external: true,
      gradient: 'from-yellow-500 to-orange-500'
    },
  ]


  useEffect(() => {
    if (isAutoPlaying) {
      intervalRef.current = setInterval(() => {
        setCurrentProject((prev) => (prev + 1) % projects.length)
      }, 50000) 
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [isAutoPlaying, projects.length])

  
  useEffect(() => {
    const imagePromises = projects.map(project => {
      return new Promise((resolve) => {
        const img = new Image()
        img.onload = () => resolve()
        img.onerror = () => resolve()
        img.src = project.image
      })
    })

    Promise.all(imagePromises).then(() => {
      setIsLoading(false)
    })
  }, [projects])


  // Touch gesture handlers
  const handleTouchStart = (e) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > 50
    const isRightSwipe = distance < -50

    if (isLeftSwipe) {
      swipeNext()
    } else if (isRightSwipe) {
      swipePrev()
    }
  }


  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') {
        e.preventDefault()
        swipePrev()
      } else if (e.key === 'ArrowRight') {
        e.preventDefault()
        swipeNext()
      } else if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault()
        handleProjectClick(projects[currentProject])
      } else if (e.key === 'Escape') {
        e.preventDefault()
        setIsAutoPlaying(!isAutoPlaying)
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [currentProject, isAutoPlaying])

  const nextProject = useCallback(() => {
    setCurrentProject((prev) => (prev + 1) % projects.length)
  }, [projects.length])

  const prevProject = useCallback(() => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length)
  }, [projects.length])

  // Shuffle animation effect
  const [isShuffling, setIsShuffling] = useState(false)
  
  const triggerShuffle = useCallback(() => {
    setIsShuffling(true)
    setTimeout(() => setIsShuffling(false), 300)
  }, [])

  const goToProject = useCallback((index) => {
    if (index !== currentProject) {
      triggerShuffle()
      setCurrentProject(index)
    }
  }, [currentProject, triggerShuffle])

  const toggleAutoPlay = useCallback(() => {
    setIsAutoPlaying(prev => !prev)
  }, [])


  const swipeNext = useCallback(() => {
    triggerShuffle()
    nextProject()
  }, [nextProject, triggerShuffle])

  const swipePrev = useCallback(() => {
    triggerShuffle()
    prevProject()
  }, [prevProject, triggerShuffle])

  return (
    <section id="projects" className="min-h-screen flex items-center justify-center px-4 sm:px-6 py-12 sm:py-20 relative">
      <div className="container mx-auto px-2 sm:px-6 w-full max-w-7xl py-4 sm:py-8">
        <div className="text-center mb-8 sm:mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-thin text-white mb-4 sm:mb-6 tracking-wider">
            PROJECTS
          </h2>
          
          <div className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6 sm:mb-8"></div>
          
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-2">
            A showcase of my recent work and side projects
          </p>
        </div>
        
      
        <div className="relative max-w-9xl mx-auto">
          <div 
            ref={carouselRef}
            className={`relative h-[500px] sm:h-[600px] md:h-[700px] lg:h-[800px] flex items-center justify-center transition-all duration-300 ${
              isShuffling ? 'scale-105' : 'scale-100'
            }`}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            {projects.map((project, index) => {
              const isActive = index === currentProject
              const isPrev = index === (currentProject - 1 + projects.length) % projects.length
              const isNext = index === (currentProject + 1) % projects.length
              const isSecondNext = index === (currentProject + 2) % projects.length
              const isSecondPrev = index === (currentProject - 2 + projects.length) % projects.length
              const isHidden = !isActive && !isPrev && !isNext && !isSecondNext && !isSecondPrev

              if (isHidden) return null

        
              const getShufflePosition = () => {
                const isMobile = window.innerWidth < 640
                const isTablet = window.innerWidth < 1024
                
                if (isActive) {
                  return {
                    z: 50,
                    scale: 1,
                    x: 0,
                    y: 0,
                    rotate: 0,
                    opacity: 1
                  }
                } else if (isPrev) {
                  return {
                    z: 40,
                    scale: isMobile ? 0.7 : isTablet ? 0.8 : 0.85,
                    x: isMobile ? -30 : isTablet ? -45 : -60,
                    y: isMobile ? -4 : isTablet ? -6 : -8,
                    rotate: isMobile ? -8 : isTablet ? -12 : -15,
                    opacity: 1
                  }
                } else if (isNext) {
                  return {
                    z: 40,
                    scale: isMobile ? 0.7 : isTablet ? 0.8 : 0.85,
                    x: isMobile ? 30 : isTablet ? 45 : 60,
                    y: isMobile ? -4 : isTablet ? -6 : -8,
                    rotate: isMobile ? 8 : isTablet ? 12 : 15,
                    opacity: 1
                  }
                } else if (isSecondNext) {
                  return {
                    z: 30,
                    scale: isMobile ? 0.5 : isTablet ? 0.6 : 0.7,
                    x: isMobile ? 45 : isTablet ? 70 : 90,
                    y: isMobile ? -6 : isTablet ? -9 : -12,
                    rotate: isMobile ? 12 : isTablet ? 20 : 25,
                    opacity: 1
                  }
                } else if (isSecondPrev) {
                  return {
                    z: 30,
                    scale: isMobile ? 0.5 : isTablet ? 0.6 : 0.7,
                    x: isMobile ? -45 : isTablet ? -70 : -90,
                    y: isMobile ? -6 : isTablet ? -9 : -12,
                    rotate: isMobile ? -12 : isTablet ? -20 : -25,
                    opacity: 1
                  }
                }
                return {
                  z: 10,
                  scale: 0.5,
                  x: 0,
                  y: 0,
                  rotate: 0,
                  opacity: 1
                }
              }

              const position = getShufflePosition()

              return (
                <div
                  key={project.id}
                  className={`absolute transition-all duration-1200 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] transform ${
                    isShuffling ? 'animate-pulse' : ''
                  }`}
                  style={{
                    zIndex: position.z,
                    transform: `translate(${position.x}px, ${position.y}px) scale(${position.scale}) rotate(${position.rotate}deg)`,
                    opacity: position.opacity,
                    transitionDelay: isShuffling ? `${index * 50}ms` : '0ms'
                  }}
                >
                  <div 
                    className="group bg-slate-800 overflow-hidden border border-slate-600 hover:border-blue-500 transition-all duration-700 ease-out hover:scale-110 hover:shadow-2xl hover:shadow-blue-500/20 w-[280px] sm:w-[320px] md:w-[360px] lg:w-[400px] h-[400px] sm:h-[450px] md:h-[500px] lg:h-[550px] cursor-pointer rounded-xl"
                    style={{
                      transform: isActive ? 'translateZ(0)' : 'translateZ(-10px)',
                      filter: isActive ? 'none' : 'blur(1px)',
                      boxShadow: isActive 
                        ? '0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(59, 130, 246, 0.1)' 
                        : '0 10px 25px -5px rgba(0, 0, 0, 0.3)'
                    }}
                    onClick={() => handleProjectClick(project)}
                  >
                 
                    <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
                      <div className="w-full h-full cursor-pointer touch-manipulation">
                        {isLoading ? (
                          <div className="w-full h-full bg-slate-700 animate-pulse flex items-center justify-center">
                            <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 border-4 border-emerald-400 border-t-transparent rounded-full animate-spin"></div>
                          </div>
                        ) : (
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                            onError={(e) => {
                              e.target.style.display = 'none'
                              e.target.nextSibling.style.display = 'flex'
                            }}
                          />
                        )}
                        <div className="w-full h-full bg-slate-700 items-center justify-center hidden">
                          <div className="text-center text-gray-400">
                            <svg className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            <p className="text-xs sm:text-sm">Image not available</p>
                          </div>
                        </div>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent pointer-events-none"></div>
                      <div className="absolute top-2 sm:top-4 right-2 sm:right-4 pointer-events-none">
                        <div className="w-2 h-2 sm:w-3 sm:h-3 bg-emerald-400 rounded-full shadow-lg"></div>
                      </div>
                      <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 right-2 sm:right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out transform translate-y-2 group-hover:translate-y-0 pointer-events-none">
                        <div className="inline-flex items-center gap-1 sm:gap-2 px-2 sm:px-4 py-1 sm:py-2 bg-emerald-600 text-white rounded-xl font-semibold text-xs sm:text-sm shadow-lg">
                          View Project
                          <svg className="w-3 h-3 sm:w-4 sm:h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </div>
                      </div>
                    </div>

                       
                        <div className="p-3 sm:p-4 md:p-6">
                      <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-3 group-hover:text-emerald-400 transition-all duration-500 ease-out group-hover:translate-x-1">
                        {project.title}
                      </h3>
                      <p className="text-gray-300 mb-3 sm:mb-4 leading-relaxed text-xs sm:text-sm line-clamp-3 sm:line-clamp-4 group-hover:text-gray-200 transition-all duration-500 ease-out group-hover:translate-x-1">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-1 sm:gap-1.5">
                        {project.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-1.5 sm:px-2 py-0.5 sm:py-1 bg-slate-700 text-emerald-400 rounded-full text-xs font-medium border border-slate-600 transition-all duration-300 ease-out group-hover:bg-emerald-500/20 group-hover:border-emerald-400 group-hover:scale-105"
                            style={{ transitionDelay: `${techIndex * 50}ms` }}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

   
          <div className="flex items-center justify-center mt-8 sm:mt-12 space-x-4 sm:space-x-6 md:space-x-8">
           
            <button
              onClick={swipePrev}
              className="group flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-slate-800 rounded-full border border-slate-700 hover:border-emerald-500 transition-all duration-500 ease-out hover:scale-110 hover:shadow-lg hover:shadow-emerald-500/20 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:ring-offset-2 focus:ring-offset-slate-900"
              title="Previous Project (← Arrow Key)"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white group-hover:text-emerald-400 transition-all duration-500 ease-out group-hover:translate-x-[-2px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

       
            <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToProject(index)}
                  className={`w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 rounded-full transition-all duration-500 ease-out focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:ring-offset-2 focus:ring-offset-slate-900 ${
                    index === currentProject
                      ? 'bg-emerald-400 scale-125 shadow-lg shadow-emerald-400/30'
                      : 'bg-slate-600 hover:bg-slate-500 hover:scale-110 hover:bg-emerald-500/50'
                  }`}
                  title={`Go to project ${index + 1}`}
                />
              ))}
            </div>

       
            <button
              onClick={swipeNext}
              className="group flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-slate-800 rounded-full border border-slate-700 hover:border-emerald-500 transition-all duration-500 ease-out hover:scale-110 hover:shadow-lg hover:shadow-emerald-500/20 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:ring-offset-2 focus:ring-offset-slate-900"
              title="Next Project (→ Arrow Key)"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white group-hover:text-emerald-400 transition-all duration-500 ease-out group-hover:translate-x-[2px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>


       
        </div>
      </div>
    </section>
  )
}

export default Projects
