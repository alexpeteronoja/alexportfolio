import { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/NavBar';
import Project from '../components/Project';
import TechStack from '../data/TechStack';
import { Link, useLocation, useNavigate } from 'react-router-dom';

function Home() {
  const [animationClass, setAnimationClass] = useState('opacity-0 translate-y-10');

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const element = document.getElementById(location.state.scrollTo);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
      // Reset location state after scrolling to prevent infinite loop
      navigate(location.pathname, { replace: true, state: {} });
    }
  }, [location, navigate]);

  useEffect(() => {
    // Slight delay for animation entry
    const timer = setTimeout(() => {
      setAnimationClass('opacity-100 translate-y-0');
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="relative min-h-screen text-white overflow-x-hidden">
        {/* Glowing Background Orbs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-600/20 rounded-full blur-[120px] -z-10 pointer-events-none"></div>

        <div className="box mx-auto max-w-7xl relative z-10">
          <Navbar />

          {/* Hero Section */}
          <div id="profile-details" className="mt-10 mb-20 px-4 sm:px-6 lg:px-8">
            <div className={`flex flex-col-reverse md:flex-row items-center justify-between gap-12 transition-all duration-1000 ease-out ${animationClass}`}>

              <div className="flex-1 text-center md:text-left space-y-6">
                <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
                  Hi, I’m <br className="hidden md:block" />
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400 glow-text">
                    Alex Peter Onoja
                  </span>
                </h1>

                <p className="text-lg md:text-xl text-gray-400 leading-relaxed max-w-2xl">
                  Full-Stack Web Developer specializing in building clean, responsive, and user-friendly web applications. Experienced in developing modern interfaces and scalable backend systems using React, TypeScript, Node.js, and MongoDB. Passionate about delivering high-performance digital solutions.
                </p>

                <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 pt-4">
                  <Link to="/contact">
                    <button className="w-full sm:w-auto relative px-8 py-3 rounded-full bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-semibold hover:from-purple-500 hover:to-cyan-500 transition-all duration-300 shadow-[0_0_20px_rgba(168,85,247,0.4)] hover:shadow-[0_0_30px_rgba(168,85,247,0.6)] transform hover:-translate-y-1">
                      Contact Me
                    </button>
                  </Link>
                  <a href="Web dev CV.pdf" target="_blank" rel="noreferrer">
                    <button className="w-full sm:w-auto px-8 py-3 rounded-full border border-purple-500/50 text-white font-semibold hover:bg-purple-500/10 transition-all duration-300 transform hover:-translate-y-1 glass-panel">
                      Download CV
                    </button>
                  </a>
                </div>
              </div>

              <div className="flex-1 flex justify-center md:justify-end relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
                <img
                  src="images/Profile Pic.png"
                  alt="Alex Peter Onoja"
                  className="w-64 md:w-80 relative z-10 rounded-full border-2 border-purple-500/30 p-2 shadow-2xl transition-transform duration-500 group-hover:scale-105"
                />
              </div>

            </div>
          </div>

          {/* Tech Stack Section */}
          <div className="py-20 border-t border-white/5">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-cyan-400">
                My Tech Stack
              </h2>
              <p className="text-gray-400 text-lg">Tools & Technologies I Use</p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 px-4">
              {TechStack.map((item, index) => (
                <div
                  key={index}
                  className="glass-panel p-6 rounded-2xl flex flex-col items-center justify-center gap-4 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_20px_rgba(52,211,153,0.2)] hover:border-emerald-500/30 group"
                >
                  <img
                    className="w-16 h-16 object-contain filter drop-shadow-md group-hover:scale-110 transition-transform duration-300"
                    src={item.img}
                    alt={item.name}
                  />
                  <p className="text-sm font-medium text-gray-300 group-hover:text-emerald-400 transition-colors">{item.name}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Project Section */}
          <Project />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Home;
