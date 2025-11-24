const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      color: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'HTML5', icon: './image/html.svg', fallback: '🌐' },
        { name: 'CSS3', icon: './image/css3.svg', fallback: '🎨' },
        { name: 'Tailwind CSS', icon: './image/tailwind.svg', fallback: '🎨' },
        { name: 'Bootstrap', icon: './image/bootstrap.svg', fallback: '📱' },
        { name: 'JavaScript', icon: './image/javascript.svg', fallback: '⚡' },
        { name: 'React', icon: './image/reactjs.svg', fallback: '⚛️' },
        { name: 'Inertia.js', icon: './image/inertia.svg', fallback: '🔄' }
      ]
    },
    {
      title: 'Backend',
      color: 'from-green-500 to-emerald-500',
      skills: [
        { name: 'PHP', icon: './image/php.svg', fallback: '🐘' },
        { name: 'Laravel', icon: './image/laravel.svg', fallback: '🔴' },
        { name: 'Mongoose', icon: './image/mongodb.svg', fallback: '🍃' },
        { name: 'Express.js', icon: './image/express.svg', fallback: '🚀' },
        { name: 'Node.js', icon: './image/node.svg', fallback: '🟢' }
      ]
    },
    {
      title: 'Database',
      color: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'MySQL', icon: './image/mysql.png', fallback: '🐬' },
        { name: 'MongoDB', icon: './image/mongodb.svg', fallback: '🍃' }
      ]
    },
    {
      title: 'Real-time',
      color: 'from-orange-500 to-red-500',
      skills: [
        { name: 'Pusher', icon: './image/pusher.svg', fallback: '📡' },
        { name: 'Socket.io', icon: './image/socket.svg', fallback: '🔌' }
      ]
    },
    {
      title: 'Tools',
      color: 'from-gray-500 to-gray-700',
      skills: [
        { name: 'Git', icon: './image/git.svg', fallback: '📝' },
        { name: 'GitHub', icon: './image/github.svg', fallback: '🐙' },
        { name: 'GitLab', icon: './image/gitlab.svg', fallback: '🦊' },
        { name: 'Render', icon: './image/render.svg', fallback: '🚀' },
        { name: 'Postman', icon: './image/postman.svg', fallback: '📮' },
        { name: 'VS Code', icon: './image/vscode.svg', fallback: '💻' }
      ]
    }
  ]

  const maxSkills = Math.max(...skillCategories.map(category => category.skills.length));
  

  const calculatedHeight = 120 + (maxSkills * 60); 

  return (
    <section id="skills" className="min-h-screen flex items-center justify-center px-4 sm:px-6 py-12 sm:py-20 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-thin text-white mb-4 sm:mb-6 tracking-wider section-title-geom">
            SKILLS
          </h2>
          
          <div className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6 sm:mb-8"></div>
          
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-2">
            A comprehensive toolkit for building modern web applications
          </p>
          
          {/* Geometric Notation */}
          <div className="mt-4 text-blue-400/60 font-mono text-xs sm:text-sm">
            <span className="geom-symbol">◢</span>
            <span className="geom-notation"> Skills</span>
            <span className="mx-2">=</span>
            <span className="geom-shape">△</span>
            <span className="geom-notation"> Frontend</span>
            <span className="mx-1">+</span>
            <span className="geom-shape">○</span>
            <span className="geom-notation"> Backend</span>
            <span className="mx-1">+</span>
            <span className="geom-shape">□</span>
            <span className="geom-notation"> Tools</span>
            <span className="geom-symbol">◣</span>
          </div>
        </div>
    
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6 md:gap-8 justify-items-center">
          {skillCategories.map((category, categoryIndex) => (
              <div 
                key={categoryIndex} 
                className="geom-card bg-slate-800/20 backdrop-blur-sm p-3 sm:p-4 md:p-6 hover:bg-slate-800/40 transition-all duration-300 border-2 border-slate-600/60 hover:border-blue-500/80 hover:shadow-2xl hover:shadow-blue-500/20 w-full max-w-xs sm:max-w-sm relative flex flex-col"
                style={{ height: `auto`, minHeight: `${Math.min(calculatedHeight, 400)}px` }}
              >
              <div className="text-center mb-4 sm:mb-6">
                <h3 className="text-base sm:text-lg font-semibold text-white mb-2">{category.title}</h3>              
              </div>
              
              <div className="space-y-1.5 sm:space-y-2 flex-1 flex flex-col justify-start">
                {category.skills.map((skill, skillIndex) => (
                    <div 
                      key={skillIndex} 
                      className={`geom-cell group flex items-center gap-3 sm:gap-4 md:gap-5 p-2 sm:p-2.5 bg-gradient-to-r from-slate-700/20 to-slate-600/30 hover:from-blue-500/20 hover:to-purple-500/30 transition-all duration-300 border-b-2 border-slate-500/70 hover:border-blue-400/80 shadow-lg hover:shadow-2xl hover:shadow-blue-500/20 hover:scale-105 ${skillIndex === 0 ? 'border-t-2' : ''}`}
                      style={{ 
                        clipPath: 'polygon(0 0, calc(100% - 12px) 0, 100% 100%, 0px 100%)',
                        boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.1), 0 2px 4px rgba(0,0,0,0.3)',
                        borderTopColor: skillIndex === 0 ? 'rgba(59, 130, 246, 0.9)' : 'transparent',
                        borderBottomColor: 'rgba(156, 163, 175, 0.6)'
                      }}
                    >
                    <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 flex items-center justify-center relative flex-shrink-0 bg-slate-600/30 group-hover:bg-blue-500/20 rounded-md border-2 border-slate-400/60 group-hover:border-blue-300/70 transition-all duration-200 shadow-md group-hover:shadow-lg">
                      <span className="text-sm sm:text-base md:text-lg group-hover:scale-110 transition-transform duration-200 text-slate-300 group-hover:text-blue-300">{skill.fallback}</span>
                        <img 
                          src={skill.icon} 
                          alt={skill.name} 
                          className="absolute w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 group-hover:scale-110 transition-transform duration-200 opacity-0 group-hover:drop-shadow-lg"
                          style={{
                            filter: (skill.name === 'Inertia.js' || skill.name === 'Render') ? 'none' : 'brightness(0) saturate(100%) invert(1) contrast(1)',
                            width: '24px',
                            height: '24px',
                            fill: 'white',
                            color: 'white'
                          }}
                          onLoad={(e) => {                            
                            e.target.style.opacity = '1';
                            e.target.previousSibling.style.opacity = '0';
                          }}
                          onError={(e) => {                         
                            e.target.style.opacity = '0';
                            e.target.previousSibling.style.opacity = '1';
                          }}
                        />
                    </div>
                    <span className="text-white font-medium text-xs sm:text-sm group-hover:font-bold group-hover:text-blue-200 transition-all duration-300 flex-1">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
 }

export default Skills