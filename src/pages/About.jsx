import Footer from '../components/Footer';
import Navbar from '../components/NavBar';

function About() {
  return (
    <>
      <div className="relative min-h-screen text-white overflow-x-hidden">
        {/* Background Glows */}
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px] -z-10 pointer-events-none"></div>

        <div className="box mx-auto max-w-7xl relative z-10">
          <Navbar />

          <div className="mt-10 mb-16 text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-cyan-400">
                About Me
              </span>
            </h1>
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-12 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
            {/* Image Section */}
            <div className="w-full lg:w-1/3 flex justify-center relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-2xl blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
              <img
                src="images/Profile Pic.png"
                alt="Alex Peter Onoja"
                className="w-64 lg:w-full relative z-10 rounded-2xl border border-white/10 shadow-2xl transition-transform duration-500 group-hover:scale-105 object-cover"
              />
            </div>

            {/* Content Section */}
            <div className="w-full lg:w-2/3 glass-panel p-8 md:p-12 rounded-3xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl -z-10"></div>
              
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400">
                  Web Developer
                </span>
              </h2>

              <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
                <p>
                  My name is Alex Peter Onoja, I am a Full-Stack Web Developer
                  specializing in building clean, responsive, and user-friendly
                  web applications. Experienced in developing modern interfaces
                  and scalable backend systems using React, TypeScript, Node.js,
                  and MongoDB.
                </p>

                <p>
                  I am deeply passionate about coding and solving complex problems,
                  constantly striving to deliver high-performance digital solutions 
                  and seamless user experiences that leave a lasting impact.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mt-10">
                <a href="/contact" className="w-full sm:w-auto text-center px-8 py-3 rounded-full bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-semibold hover:from-purple-500 hover:to-cyan-500 transition-all duration-300 shadow-[0_0_20px_rgba(168,85,247,0.4)] hover:shadow-[0_0_30px_rgba(168,85,247,0.6)] transform hover:-translate-y-1">
                  Contact Me
                </a>
                <a href="Web dev CV.pdf" target="_blank" rel="noreferrer" className="w-full sm:w-auto text-center px-8 py-3 rounded-full border border-purple-500/50 text-white font-semibold hover:bg-purple-500/10 transition-all duration-300 transform hover:-translate-y-1 glass-panel">
                  Download CV
                </a>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default About;
