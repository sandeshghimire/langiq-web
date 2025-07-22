export default function Home() {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;500;600;700&display=swap"
        rel="stylesheet"
      />
      <div className="min-h-screen bg-white py-8 px-4" style={{ fontFamily: 'Lato, sans-serif' }}>
        <div className="max-w-4xl mx-auto bg-white">
          {/* Header Section */}
          <div className=" text-gray-800 p-8">
            <div className="text-center">
              <h1 className="text-3xl font-semibold mb-2">Sandesh Ghimire</h1>
              <p className="text-lg font-normal mb-4">Full Stack Developer</p>
              <div className="flex flex-wrap justify-center gap-4 text-sm font-light">
                <span>sandesh@example.com</span>
                <span>+1 (555) 123-4567</span>
                <span>linkedin.com/in/sandeshghimire</span>
                <span>github.com/sandeshghimire</span>
              </div>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="p-8 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-black mb-4 uppercase tracking-wide">Professional Summary</h2>
            <p className="text-gray-700 leading-relaxed font-normal">
              Experienced Full Stack Developer with 5+ years of expertise in React, Node.js, and cloud technologies.
              Proven track record of delivering scalable web applications and leading cross-functional teams.
              Passionate about clean code, user experience, and emerging technologies.
            </p>
          </div>

          {/* Experience Section */}
          <div className="p-8 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-black mb-6 uppercase tracking-wide">Experience</h2>

            <div className="space-y-6">
              <div>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-lg font-medium text-black">Senior Full Stack Developer</h3>
                    <p className="text-gray-600 font-normal">Tech Solutions Inc.</p>
                  </div>
                  <span className="text-gray-500 font-light text-sm">2022 - Present</span>
                </div>
                <ul className="text-gray-700 space-y-1 ml-4">
                  <li>• Led development of microservices architecture serving 1M+ users</li>
                  <li>• Implemented CI/CD pipelines reducing deployment time by 60%</li>
                  <li>• Mentored 3 junior developers and conducted code reviews</li>
                </ul>
              </div>

              <div>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-lg font-medium text-black">Full Stack Developer</h3>
                    <p className="text-gray-600 font-normal">StartupXYZ</p>
                  </div>
                  <span className="text-gray-500 font-light text-sm">2020 - 2022</span>
                </div>
                <ul className="text-gray-700 space-y-1 ml-4">
                  <li>• Built responsive web applications using React and TypeScript</li>
                  <li>• Developed RESTful APIs with Node.js and Express</li>
                  <li>• Optimized database queries improving performance by 40%</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Education Section */}
          <div className="p-8 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-black mb-6 uppercase tracking-wide">Education</h2>
            <div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-medium text-black">Bachelor of Science in Computer Science</h3>
                  <p className="text-gray-600 font-normal">University of Technology</p>
                </div>
                <span className="text-gray-500 font-light text-sm">2016 - 2020</span>
              </div>
              <p className="text-gray-700 mt-1 font-normal">GPA: 3.8/4.0, Magna Cum Laude</p>
            </div>
          </div>

          {/* Skills Section */}
          <div className="p-8 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-black mb-6 uppercase tracking-wide">Technical Skills</h2>
            <div className="grid grid-cols-4 gap-8 justify-items-start">
              <div>
                <h3 className="font-medium text-black mb-3">Frontend</h3>
                <div className="space-y-1">
                  {['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Vue.js'].map((skill) => (
                    <div key={skill} className="text-gray-700 text-sm font-normal">
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-medium text-black mb-3">Backend</h3>
                <div className="space-y-1">
                  {['Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'AWS'].map((skill) => (
                    <div key={skill} className="text-gray-700 text-sm font-normal">
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-medium text-black mb-3">Tools</h3>
                <div className="space-y-1">
                  {['Git', 'Docker', 'Kubernetes', 'Jenkins', 'Figma'].map((skill) => (
                    <div key={skill} className="text-gray-700 text-sm font-normal">
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-medium text-black mb-3">Other</h3>
                <div className="space-y-1">
                  {['Agile', 'Scrum', 'Testing', 'CI/CD', 'DevOps'].map((skill) => (
                    <div key={skill} className="text-gray-700 text-sm font-normal">
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Projects Section */}
          <div className="p-8">
            <h2 className="text-xl font-semibold text-black mb-6 uppercase tracking-wide">Key Projects</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium text-black">E-Commerce Platform</h3>
                <p className="text-gray-700 mb-2 font-normal">
                  Full-stack e-commerce solution with payment integration, inventory management, and real-time analytics.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-gray-100 text-black px-2 py-1 text-xs font-normal border border-gray-300">React</span>
                  <span className="bg-gray-100 text-black px-2 py-1 text-xs font-normal border border-gray-300">Node.js</span>
                  <span className="bg-gray-100 text-black px-2 py-1 text-xs font-normal border border-gray-300">Stripe API</span>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium text-black">Task Management SaaS</h3>
                <p className="text-gray-700 mb-2 font-normal">
                  Collaborative project management tool with real-time updates, file sharing, and team analytics.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-gray-100 text-black px-2 py-1 text-xs font-normal border border-gray-300">Next.js</span>
                  <span className="bg-gray-100 text-black px-2 py-1 text-xs font-normal border border-gray-300">WebSocket</span>
                  <span className="bg-gray-100 text-black px-2 py-1 text-xs font-normal border border-gray-300">AWS</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}


