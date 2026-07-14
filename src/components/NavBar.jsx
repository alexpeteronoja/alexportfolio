import { useState, useEffect } from 'react';
import { FaXmark } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Project', path: '/', state: { scrollTo: 'project-section' } },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? 'glass-panel shadow-lg shadow-purple-500/5'
            : 'bg-transparent'
        } border-b border-white/5`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="text-2xl font-bold tracking-tighter">
              <Link to="/">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400">
                  AlexPort
                </span>
                <span className="text-purple-500">.</span>
              </Link>
            </div>

            {/* Hamburger Button (Mobile) */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-white hover:text-purple-400 focus:outline-none cursor-pointer transition-colors"
                aria-label="Toggle menu"
              >
                <svg
                  className="w-7 h-7"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>

            {/* Navigation Links (Desktop) */}
            <div className="hidden md:flex space-x-8">
              {navLinks.map(link => (
                <Link
                  key={link.name}
                  to={link.path}
                  state={link.state}
                  className="relative group text-gray-300 hover:text-white transition-colors text-sm font-medium tracking-wide"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-cyan-500 transition-all group-hover:w-full"></span>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isOpen && (
          <div
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
          ></div>
        )}

        {/* Mobile Menu Panel */}
        <div
          className={`md:hidden fixed z-50 top-0 right-0 h-full w-72 glass-panel border-l border-white/10 shadow-2xl transform transition-transform duration-500 ease-in-out ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex justify-end px-6 pt-6 pb-2">
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-white transition-colors cursor-pointer"
            >
              <FaXmark className="w-7 h-7" />
            </button>
          </div>
          <div className="px-6 py-4 flex flex-col space-y-6">
            {navLinks.map(link => (
              <Link
                key={link.name}
                to={link.path}
                state={link.state}
                onClick={() => setIsOpen(false)}
                className="text-lg font-medium text-gray-300 hover:text-white transition-colors hover:translate-x-2 transform duration-300"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </nav>
      {/* Spacer to prevent content from hiding under fixed navbar */}
      <div className="h-20"></div>
    </>
  );
}

export default Navbar;
