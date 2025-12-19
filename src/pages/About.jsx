const About = () => {
  const keyInterests = [
    {
      icon: './image/coding.png',
      title: 'Full-Stack Development',
      description: 'Building end-to-end web applications with modern technologies'
    },
    {
      icon: './image/problem-solving.png',
      title: 'Problem Solving',
      description: 'Solving complex challenges on LeetCode and CodeWars'
    },
    {
      icon: './image/tech-reading.png',
      title: 'Continuous Learning',
      description: 'Staying updated with latest technologies and best practices'
    }
  ]

  return (
        <section id="about" className="min-h-screen flex items-center justify-center px-2 sm:px-4 md:px-6 py-12 sm:py-20 relative overflow-x-hidden w-full">
          <div className="max-w-6xl mx-auto w-full max-w-full">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-thin text-white mb-4 sm:mb-6 tracking-wider break-words section-title-geom">
                ABOUT
              </h2>
              
              <div className="w-12 sm:w-16 md:w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6 sm:mb-8"></div>
              
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-3 sm:mb-4 px-1 sm:px-2 break-words">
                I'm a passionate Full Stack Developer with a love for creating innovative digital solutions. 
                With experience in both frontend and backend technologies, I enjoy building applications 
                that solve real-world problems and provide exceptional user experiences.
              </p>
              
              <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed px-1 sm:px-2 break-words">
                When I'm not coding, you'll find me solving algorithmic challenges, exploring new technologies, 
                and continuously learning to stay at the forefront of web development.
              </p>
              
             
            </div>

       
            <div className="space-y-3 sm:space-y-4 md:space-y-6 lg:space-y-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
                {keyInterests.map((interest, index) => (
                  <div
                    key={index}
                    className="geom-card bg-slate-800/30 backdrop-blur-sm p-3 sm:p-4 md:p-6 lg:p-8 hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20 group border border-slate-700/30 text-center w-full geom-transform"
                  >
                    <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16 bg-gradient-to-br from-blue-500/30 to-purple-600/30 flex items-center justify-center mx-auto mb-2 sm:mb-3 md:mb-4 lg:mb-6 group-hover:shadow-lg group-hover:shadow-blue-500/30 transition-all duration-300 rounded-lg">
                      <img
                        src={interest.icon}
                        alt={interest.title}
                        className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 xl:w-8 xl:h-8 filter brightness-0 invert"
                      />
                    </div>
                    <h4 className="text-sm sm:text-base md:text-lg font-semibold text-white mb-2 sm:mb-3 group-hover:text-blue-400 transition-colors duration-300 break-words">
                      {interest.title}
                    </h4>
                    <p className="text-gray-400 leading-relaxed text-xs sm:text-sm break-words">
                      {interest.title === 'Problem Solving' ? (
                        <>
                          Solving challenges on{' '}
                          <a
                            href="https://leetcode.com/u/tyAXuZD5c8/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-400 hover:text-blue-300 font-semibold hover:underline break-words"
                          >
                            LeetCode
                          </a>{' '}
                          and{' '}
                          <a
                            href="https://www.codewars.com/users/bommer153"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-400 hover:text-blue-300 font-semibold hover:underline break-words"
                          >
                            CodeWars
                          </a>
                        </>
                      ) : (
                        interest.description
                      )}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )
    }

export default About