const Skills = () => {

  const skillCategories = [
    {
      title: 'Frontend',
      color: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'HTML5', icon: './image/html.png', fallback: '🌐' },
        { name: 'CSS3', icon: './image/css.png', fallback: '🎨' },
        { name: 'JavaScript', icon: './image/javascript.png', fallback: '⚡' },
        { name: 'React', icon: './image/react.png', fallback: '⚛️' },
        { name: 'Inertia.js', icon: './image/inertia.png', fallback: '🔄' }
      ]
    },
    {
      title: 'Backend',
      color: 'from-green-500 to-emerald-500',
      skills: [
        { name: 'PHP', icon: './image/php.png', fallback: '🐘' },
        { name: 'Laravel', icon: './image/laravel.png', fallback: '🔴' },
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
        { name: 'Pusher', icon: './image/pusher.png', fallback: '📡' },
        { name: 'Socket.io', icon: './image/Socket-io.svg', fallback: '🔌' }
      ]
    },
    {
      title: 'Tools',
      color: 'from-gray-500 to-gray-700',
      skills: [
        { name: 'Git', icon: './image/gitL.png', fallback: '📝' },
        { name: 'Postman', icon: './image/postman-icon.svg', fallback: '📮' },
        { name: 'VS Code', icon: './image/vscode.png', fallback: '💻' }
      ]
    }
  ]

  return (
        <section id="skills" className="min-h-screen flex items-center justify-center px-6 py-20 relative">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-6xl md:text-7xl font-thin text-white mb-6 tracking-wider">
                SKILLS
              </h2>
              
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8"></div>
              
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                A comprehensive toolkit for building modern web applications
              </p>
            </div>
        
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
              {skillCategories.map((category, categoryIndex) => (
                <div 
                  key={categoryIndex} 
                  className="bg-slate-800/30 backdrop-blur-sm p-20 hover:bg-slate-800/50 transition-all duration-300 border border-slate-700/30 hover:border-blue-500/30 hover:shadow-2xl hover:shadow-blue-500/10 rounded-xl"
                  style={{
                    transform: `translateY(${categoryIndex * 10}px)`
                  }}
                >
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-semibold text-white mb-4">{category.title}</h3>
                    <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
                  </div>
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div 
                        key={skillIndex} 
                        className="group flex items-center gap-4 p-16 bg-slate-700/30 hover:bg-slate-700/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20 border border-slate-600/30 hover:border-blue-500/30"
                        style={{ 
                          animationDelay: `${skillIndex * 100}ms`,
                          animation: 'fadeInUp 0.6s ease-out forwards',
                          clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 100%, 8px 100%)'
                        }}
                      >
                        <div className="w-8 h-8 flex items-center justify-center relative">
                          <span className="text-lg group-hover:scale-110 transition-transform duration-300">{skill.fallback}</span>
                          <img 
                            src={skill.icon} 
                            alt={skill.name} 
                            className="absolute w-6 h-6 group-hover:scale-110 transition-transform duration-300 opacity-0"
                            style={{
                              filter: skill.icon.includes('.svg') ? 'none' : 'brightness(0) invert(1)'
                            }}
                            onLoad={(e) => {
                              console.log('Image loaded successfully:', skill.icon);
                              e.target.style.opacity = '1';
                              e.target.previousSibling.style.opacity = '0';
                            }}
                            onError={(e) => {
                              console.log('Image failed to load:', skill.icon);
                              e.target.style.opacity = '0';
                              e.target.previousSibling.style.opacity = '1';
                            }}
                          />
                        </div>
                        <span className="text-white font-medium text-base group-hover:font-semibold transition-all duration-300">{skill.name}</span>
                        <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
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