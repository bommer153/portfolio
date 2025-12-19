const Contact = () => {
  const contactInfo = [
    {
      icon: './image/email.png',
      title: 'Email',
      content: 'jaxjalandoon@gmail.com',
      link: 'mailto:jaxjalandoon@gmail.com'
    },
    {
      icon: './image/location.png',
      title: 'Location',
      content: 'Taguig City, Philippines',
      link: null
    },
    {
      icon: './image/contact.png',
      title: 'Phone',
      content: '(+63)966-400-5231',
      link: 'tel:+639664005231'
    }
  ]

  return (
        <section id="contact" className="min-h-screen flex items-center justify-center px-6 py-20 relative">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-6xl md:text-7xl font-thin text-white mb-6 tracking-wider section-title-geom">
                CONTACT
              </h2>
              
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8"></div>
              
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Ready to bring your ideas to life? Let's discuss your next project
              </p>
              
             
            </div>

        <div className="max-w-4xl mx-auto">    
          <div className="space-y-8">
            <div className="text-center space-y-4">
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
                  className="geom-card flex items-center gap-6 p-20 bg-slate-800/30 backdrop-blur-sm hover:bg-slate-800/50 transition-all duration-300 border border-slate-700/30 hover:border-blue-500/30 hover:shadow-2xl hover:shadow-blue-500/10 geom-transform"
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
        </div>
      </div>
    </section>
  )
}

export default Contact