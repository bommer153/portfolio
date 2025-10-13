const Contact = () => {
  const contactInfo = [
    {
      icon: '/image/email.png',
      title: 'Email',
      content: 'jaxjalandoon@gmail.com',
      link: 'mailto:jaxjalandoon@gmail.com'
    },
    {
      icon: '/image/location.png',
      title: 'Location',
      content: 'Taguig City, Philippines',
      link: null
    },
    {
      icon: '/image/contact.png',
      title: 'Phone',
      content: '(+63)966-400-5231',
      link: 'tel:+639664005231'
    }
  ]

  return (
        <section id="contact" className="min-h-screen flex items-center justify-center px-6 py-20 relative">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-6xl md:text-7xl font-thin text-white mb-6 tracking-wider">
                CONTACT
              </h2>
              
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8"></div>
              
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Ready to bring your ideas to life? Let's discuss your next project
              </p>
            </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">    
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-white">Get In Touch</h3>
              <p className="text-base text-gray-300 leading-relaxed">
                I'm always interested in new opportunities and exciting projects.
                Whether you have a question or just want to say hi, I'll try my best to get back to you!
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((contact, index) => (
                <div
                  key={index}
                  className="flex items-center gap-6 p-20 bg-slate-800/30 backdrop-blur-sm hover:bg-slate-800/50 transition-all duration-300 border border-slate-700/30 hover:border-blue-500/30 hover:shadow-2xl hover:shadow-blue-500/10 rounded-xl"
                  style={{
                    transform: `translateY(${index * 5}px)`
                  }}
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500/30 to-purple-600/30 flex items-center justify-center group-hover:shadow-2xl group-hover:shadow-blue-500/30 transition-all duration-300 rounded-lg">
                    <img
                      src={contact.icon}
                      alt={contact.title}
                      className="w-8 h-8 filter brightness-0 invert"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-lg mb-2">
                      {contact.title}
                    </h4>
                    {contact.link ? (
                      <a
                        href={contact.link}
                        className="text-blue-400 hover:text-blue-300 transition-colors duration-200 text-lg"
                      >
                        {contact.content}
                      </a>
                    ) : (
                      <p className="text-blue-400 text-lg">
                        {contact.content}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

      
          <div className="space-y-8">
            <div className="bg-slate-800/30 backdrop-blur-sm p-20 border border-slate-700/30 hover:border-blue-500/30 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 rounded-xl">
              <h3 className="text-2xl font-semibold text-white mb-6">Ready to start?</h3>
              <p className="text-gray-300 mb-8 leading-relaxed text-lg">
                Let's discuss your project and see how we can work together to create something amazing.
              </p>

              <div className="flex flex-col sm:flex-row gap-6">
                <a
                  href="mailto:jaxjalandoon@gmail.com"
                  className="flex-1 flex items-center justify-center gap-3 px-12 py-6 bg-gradient-to-r from-blue-600 to-purple-700 text-white font-semibold text-lg transition-all duration-300 hover:from-blue-500 hover:to-purple-600 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25"
                  style={{
                    clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 100%, 8px 100%)'
                  }}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Send Email
                </a>

                <a
                  href="tel:+639664005231"
                  className="flex-1 flex items-center justify-center gap-3 px-12 py-6 border-2 border-blue-500/30 text-blue-400 font-semibold text-lg transition-all duration-300 hover:bg-blue-500/10 hover:border-blue-400 hover:scale-105 backdrop-blur-sm"
                  style={{
                    clipPath: 'polygon(8px 0, 100% 0, calc(100% - 8px) 100%, 0 100%)'
                  }}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Call Me
                </a>
              </div>
            </div>

       
            <div className="text-center">
              <p className="text-gray-400 mb-6 text-lg">Or connect with me on social media</p>
              <div className="flex justify-center gap-6">
                <a
                  href="https://github.com/bommer153"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-6 bg-slate-800/30 backdrop-blur-sm transition-all duration-300 hover:bg-blue-500/20 hover:scale-125 hover:shadow-lg hover:shadow-blue-500/20"
                  style={{
                    clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 100%, 8px 100%)'
                  }}
                >
                  <img src="/image/github.svg" alt="GitHub" className="w-6 h-6 filter brightness-0 invert" />
                </a>
                <a
                  href="https://linkedin.com/in/jefferson-jalandoon-61669427a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-6 bg-slate-800/30 backdrop-blur-sm transition-all duration-300 hover:bg-blue-500/20 hover:scale-125 hover:shadow-lg hover:shadow-blue-500/20"
                  style={{
                    clipPath: 'polygon(8px 0, 100% 0, calc(100% - 8px) 100%, 0 100%)'
                  }}
                >
                  <img src="/image/linkedin.svg" alt="LinkedIn" className="w-6 h-6 filter brightness-0 invert" />
                </a>
                <a
                  href="https://facebook.com/aow.cc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-6 bg-slate-800/30 backdrop-blur-sm transition-all duration-300 hover:bg-blue-500/20 hover:scale-125 hover:shadow-lg hover:shadow-blue-500/20"
                  style={{
                    clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 100%, 8px 100%)'
                  }}
                >
                  <img src="/image/facebook.svg" alt="Facebook" className="w-6 h-6 filter brightness-0 invert" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact