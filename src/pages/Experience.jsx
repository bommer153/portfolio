const Experience = () => {
  const experiences = [
    {
      title: 'Computer Operator III',
      company: 'Department of Science and Technology',
      period: '2025 - Present',
      responsibilities: [
        'ICT equipment troubleshooting and maintenance.',
        'Conduct of preventive maintenance.',
        'Facilitate system development and customization for various systems.'
      ]
    },
    {
      title: 'Web Developer',
      company: 'Taguig City University',
      period: '2023 - 2024',
      responsibilities: [
        'Developed internal web applications using Laravel (Blade) and React.js, accelerating module delivery and improving user experience.',
        'Designed optimized MySQL schemas for student, faculty, and course data, ensuring fast queries and reliable performance.',
        'Implemented role-based authentication with Laravel Auth, enhancing security and access control across 3 distinct user groups',
        'Created middleware for route protection, session validation, and permission checks reducing unauthorized access and simplifying route logic.',
        'Built responsive UIs with Blade + React.js, improving mobile usability and reducing bug reports by 30%.'
      ]
    },
    {
      title: 'IT Support',
      company: 'Taguig City University',
      period: '2018 - 2022',
      responsibilities: [
        'Provided IT support and gained a strong technical foundation before transitioning into web development.'
      ]
    }
  ]

  return (
    <section id="experience" className="min-h-screen flex items-center justify-center px-6 py-20 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-6xl md:text-7xl font-thin text-white mb-6 tracking-wider">
            EXPERIENCE
          </h2>

          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8"></div>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            My professional experience and career milestones
          </p>
        </div>

        <div className="relative">
       
          <div className="hidden sm:block absolute left-8 top-0 bottom-0">
            {/* Enhanced Milestone Timeline */}
            <div className="relative w-1 h-full">
              {/* Main timeline line with gradient */}
              <div className="absolute inset-0 bg-gradient-to-b from-blue-500 via-purple-500 to-emerald-500 rounded-full shadow-lg shadow-blue-500/30"></div>
              
              {/* Animated pulse effect */}
              <div className="absolute inset-0 bg-gradient-to-b from-blue-500 via-purple-500 to-emerald-500 rounded-full animate-pulse opacity-60"></div>
              
              {/* Timeline dots pattern */}
              <div className="absolute inset-0" 
                   style={{
                     backgroundImage: 'radial-gradient(circle, rgba(255, 255, 255, 0.8) 2px, transparent 2px)',
                     backgroundSize: '4px 20px',
                     backgroundRepeat: 'repeat-y',
                     backgroundPosition: 'center'
                   }}>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            {experiences.map((experience, index) => (
              <div key={index} className="relative flex items-start gap-6">
          
                {/* Milestone number positioned on timeline */}
                <div className="hidden sm:block relative z-10 flex-shrink-0">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg border-2 border-white/30">
                    <span className="text-white font-bold text-sm">{experiences.length - index}</span>
                  </div>
                </div>

          
                <div className="flex-1 bg-slate-800/30 backdrop-blur-sm p-20 hover:bg-slate-800/50 transition-all duration-300 border border-slate-700/30 hover:border-blue-500/30 hover:shadow-2xl hover:shadow-blue-500/10 rounded-xl">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-1">
                        {experience.title}
                      </h3>
                      <p className="text-blue-400 font-semibold">
                        {experience.company}
                      </p>
                    </div>
                    <span className="text-blue-400 font-semibold text-sm bg-blue-500/10 px-3 py-1 rounded-full self-start">
                      {experience.period}
                    </span>
                  </div>

                  <div className="space-y-3">
                    {experience.responsibilities.map((responsibility, respIndex) => (
                      <div
                        key={respIndex}
                        className="group flex items-center gap-4 p-4 bg-slate-700/30 hover:bg-slate-700/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20 border-b-2 border-slate-500/70 hover:border-blue-400/80"
                        style={{
                          animationDelay: `${respIndex * 100}ms`,
                          animation: 'fadeInUp 0.6s ease-out forwards',
                          clipPath: 'polygon(0 0, calc(100% - 16px) 0, 100% 100%, 0px 100%)',
                          borderBottomColor: 'rgba(156, 163, 175, 0.6)'
                        }}
                      >
                        <div className="w-2 h-2 bg-blue-400 rounded-full flex-shrink-0 mt-2"></div>
                        <p className="text-white leading-relaxed text-sm">
                          {responsibility}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      
        <div className="mt-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-semibold text-white mb-2">Professional Development</h3>
            <p className="text-gray-400">Continuous learning and skill enhancement</p>
          </div>

          <div className="bg-slate-800/30 backdrop-blur-sm p-20 hover:bg-slate-800/50 transition-all duration-300 border border-slate-700/30 hover:border-emerald-500/30 hover:shadow-2xl hover:shadow-emerald-500/10 rounded-xl">
            <div className="flex items-start gap-6">     
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-2xl font-semibold text-white mb-2">
                      Full Stack Development Training Course
                    </h3>
                    <div className="flex items-center gap-4">
                      <div className="relative group">
                        <img 
                          src="./image/uplift.png" 
                          alt="Uplift Code Camp Logo" 
                          className="w-12 h-12 object-contain transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 drop-shadow-lg"
                        />
                        <div className="absolute inset-0 bg-emerald-400/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                      <p className="text-emerald-400 font-semibold text-lg">
                        Uplift Code Camp
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col sm:items-end gap-2">
                    <span className="text-emerald-400 font-semibold text-sm bg-emerald-500/10 px-3 py-1 rounded-full">
                      May 2025 - October 2025
                    </span>
                    <span className="text-gray-400 text-sm">
                      Professional Development
                    </span>
                  </div>
                </div>

                <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                  Intensive 6-month Full stack development training course
                </p>

                <div className="space-y-3">
                  <h4 className="text-white font-semibold text-lg mb-3 text-left">Key Highlights:</h4>
                  <div className="space-y-3">
                    <div
                      className="group flex items-center gap-4 p-4 bg-slate-700/30 hover:bg-slate-700/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/20 border-b-2 border-slate-500/70 hover:border-emerald-400/80"
                      style={{
                        animationDelay: '0ms',
                        animation: 'fadeInUp 0.6s ease-out forwards',
                        clipPath: 'polygon(0 0, calc(100% - 16px) 0, 100% 100%, 0px 100%)',
                        borderBottomColor: 'rgba(156, 163, 175, 0.6)'
                      }}
                    >
                      <div className="w-2 h-2 bg-emerald-400 rounded-full flex-shrink-0"></div>
                      <p className="text-white text-sm leading-relaxed">
                        Learned MERN stack: MongoDB, Express.js, React.js, and Node.js
                      </p>
                    </div>
                    <div
                      className="group flex items-center gap-4 p-4 bg-slate-700/30 hover:bg-slate-700/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/20 border-b-2 border-slate-500/70 hover:border-emerald-400/80"
                      style={{
                        animationDelay: '100ms',
                        animation: 'fadeInUp 0.6s ease-out forwards',
                        clipPath: 'polygon(0 0, calc(100% - 16px) 0, 100% 100%, 0px 100%)'
                      }}
                    >
                      <div className="w-2 h-2 bg-emerald-400 rounded-full flex-shrink-0"></div>
                      <p className="text-white text-sm leading-relaxed">
                        Learned Git and GitHub for collaborative development workflows
                      </p>
                    </div>
                    <div
                      className="group flex items-center gap-4 p-4 bg-slate-700/30 hover:bg-slate-700/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/20 border-b-2 border-slate-500/70 hover:border-emerald-400/80"
                      style={{
                        animationDelay: '200ms',
                        animation: 'fadeInUp 0.6s ease-out forwards',
                        clipPath: 'polygon(0 0, calc(100% - 16px) 0, 100% 100%, 0px 100%)',
                        borderBottomColor: 'rgba(156, 163, 175, 0.6)'
                      }}
                    >
                      <div className="w-2 h-2 bg-emerald-400 rounded-full flex-shrink-0"></div>
                      <p className="text-white text-sm leading-relaxed">
                        Built projects using modern web technologies
                      </p>
                    </div>

                    <div
                      className="group flex items-center gap-4 p-4 bg-slate-700/30 hover:bg-slate-700/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/20 border-b-2 border-slate-500/70 hover:border-emerald-400/80"
                      style={{
                        animationDelay: '300ms',
                        animation: 'fadeInUp 0.6s ease-out forwards',
                        clipPath: 'polygon(0 0, calc(100% - 16px) 0, 100% 100%, 0px 100%)',
                        borderBottomColor: 'rgba(156, 163, 175, 0.6)'
                      }}
                    >
                      <div className="w-2 h-2 bg-emerald-400 rounded-full flex-shrink-0"></div>
                      <p className="text-white text-sm leading-relaxed">
                        Developed responsive web applications with React.js frontend
                      </p>
                    </div>
                    <div
                      className="group flex items-center gap-4 p-4 bg-slate-700/30 hover:bg-slate-700/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/20 border-b-2 border-slate-500/70 hover:border-emerald-400/80"
                      style={{
                        animationDelay: '400ms',
                        animation: 'fadeInUp 0.6s ease-out forwards',
                        clipPath: 'polygon(0 0, calc(100% - 16px) 0, 100% 100%, 0px 100%)',
                        borderBottomColor: 'rgba(156, 163, 175, 0.6)'
                      }}
                    >
                      <div className="w-2 h-2 bg-emerald-400 rounded-full flex-shrink-0"></div>
                      <p className="text-white text-sm leading-relaxed">
                        Built RESTful APIs using Express.js and Node.js backend
                      </p>
                    </div>
                    <div
                      className="group flex items-center gap-4 p-4 bg-slate-700/30 hover:bg-slate-700/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/20 border-b-2 border-slate-500/70 hover:border-emerald-400/80"
                      style={{
                        animationDelay: '500ms',
                        animation: 'fadeInUp 0.6s ease-out forwards',
                        clipPath: 'polygon(0 0, calc(100% - 16px) 0, 100% 100%, 0px 100%)',
                        borderBottomColor: 'rgba(156, 163, 175, 0.6)'
                      }}
                    >
                      <div className="w-2 h-2 bg-emerald-400 rounded-full flex-shrink-0"></div>
                      <p className="text-white text-sm leading-relaxed">
                        Implemented MongoDB database design and management
                      </p>
                    </div>
                    <div
                      className="group flex items-center gap-4 p-4 bg-slate-700/30 hover:bg-slate-700/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/20 border-b-2 border-slate-500/70 hover:border-emerald-400/80"
                      style={{
                        animationDelay: '600ms',
                        animation: 'fadeInUp 0.6s ease-out forwards',
                        clipPath: 'polygon(0 0, calc(100% - 16px) 0, 100% 100%, 0px 100%)',
                        borderBottomColor: 'rgba(156, 163, 175, 0.6)'
                      }}
                    >
                      <div className="w-2 h-2 bg-emerald-400 rounded-full flex-shrink-0"></div>
                      <p className="text-white text-sm leading-relaxed">
                        Practiced version control and team collaboration with Git
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience