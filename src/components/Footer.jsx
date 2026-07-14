function Footer() {
  function getDate() {
    const date = new Date();
    return date.getFullYear();
  }

  return (
    <footer className="bg-[#0a0a0a] text-gray-400 py-8 border-t border-white/5 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        
        {/* Social Icons */}
        <div className="flex justify-center gap-8 mb-6">
          <a
            href="https://api.whatsapp.com/send?phone=+2348162513936&text=Hello.%20I%20need%20a%20Web%20Development%20Service.%20Got%20your%20contact%20from%20your%20portfolio"
            target="_blank"
            rel="noreferrer"
            aria-label="WhatsApp"
            className="text-gray-400 hover:text-emerald-400 transform hover:scale-110 hover:-translate-y-1 transition-all duration-300"
          >
            <i className="fa-brands fa-whatsapp fa-2xl drop-shadow-md"></i>
          </a>

          <a
            href="mailto:alexpeteronoja@gmail.com"
            target="_blank"
            rel="noreferrer"
            aria-label="Email"
            className="text-gray-400 hover:text-cyan-400 transform hover:scale-110 hover:-translate-y-1 transition-all duration-300"
          >
            <i className="fas fa-envelope fa-2xl drop-shadow-md"></i>
          </a>

          <a
            href="https://www.linkedin.com/in/alex-peter-onoja/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="text-gray-400 hover:text-purple-400 transform hover:scale-110 hover:-translate-y-1 transition-all duration-300"
          >
            <i className="fa-brands fa-linkedin fa-2xl drop-shadow-md"></i>
          </a>

          <a
            href="tel:+2348162513936"
            target="_blank"
            rel="noreferrer"
            aria-label="Phone"
            className="text-gray-400 hover:text-emerald-400 transform hover:scale-110 hover:-translate-y-1 transition-all duration-300"
          >
            <i className="fas fa-phone fa-2xl drop-shadow-md"></i>
          </a>
        </div>

        {/* Copyright */}
        <div className="text-sm tracking-wide text-gray-500">
          <p>
            &copy; {getDate()} <span className="text-white font-medium">Alex Peter Onoja</span>. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
