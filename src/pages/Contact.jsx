import Footer from '../components/Footer';
import Navbar from '../components/NavBar';
import ContactData from '../data/ContactData';

function Contact() {
  return (
    <>
      <div className="relative min-h-screen text-white overflow-x-hidden">
        {/* Background Glows */}
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-cyan-600/20 rounded-full blur-[120px] -z-10 pointer-events-none"></div>

        <div className="box mx-auto max-w-7xl relative z-10">
          <Navbar />

          <div className="mt-10 mb-16 text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400">
                Let's Connect
              </span>
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions. Feel free to reach out through any of the channels below.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-8 px-4 pb-20">
            {ContactData.map((item, index) => (
              <a 
                key={index} 
                href={item.link} 
                target="_blank" 
                rel="noreferrer"
                className="group w-full sm:w-[320px]"
              >
                <div className="glass-panel p-6 rounded-2xl flex items-center justify-between transition-all duration-300 transform group-hover:-translate-y-2 group-hover:shadow-[0_0_30px_rgba(52,211,153,0.15)] group-hover:border-emerald-500/30">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-full bg-white/5 border border-white/10 group-hover:bg-emerald-500/20 transition-colors">
                      <img className="w-6 h-6 object-contain filter drop-shadow-md group-hover:scale-110 transition-transform" src={item.img} alt={item.name} />
                    </div>
                    <span className="text-lg font-medium text-gray-200 group-hover:text-emerald-400 transition-colors">
                      {item.name}
                    </span>
                  </div>
                  
                  <div className="text-gray-500 group-hover:text-emerald-400 transform group-hover:translate-x-1 transition-all">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Contact;
