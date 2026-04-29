import { useState } from 'react';
import { FaXmark } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <nav className="bg-gray-900  border-b shadow ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="text-xl font-bold">
              <Link to="/">AlexPort</Link>
            </div>

            {/* Hamburger Button (Mobile) */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-white focus:outline-none cursor-pointer"
                aria-label="Toggle menu"
              >
                <svg
                  className="w-6 h-6"
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
            <div className="hidden md:flex space-x-6">
              <Link to="/" className=" hover:text-blue-500">
                Home
              </Link>
              <Link to="/about" className="hover:text-blue-500">
                About
              </Link>
              <Link
                to="/"
                state={{ scrollTo: 'project-section' }}
                className="hover:text-blue-500"
              >
                Project
              </Link>

              <Link to="/contact" className="hover:text-blue-500">
                Contact
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}

        {isOpen && (
          <div
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 z-10 bg-black opacity-50"
          ></div>
        )}
        <div
          className={`md:hidden fixed z-30 top-0 left-0 h-full bg-gray-900 text-white w-64  px-4 pb-4 space-y-2 transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
        >
          <div className="flex justify-end px-5 pt-6 pb-1">
            <button
              onClick={() => setIsOpen(false)}
              className="flex justify-end mb-2 cursor-pointer "
            >
              <FaXmark />
            </button>
          </div>
          <div className="md:hidden px-4 pb-4 space-y-2">
            <Link to="/" className="block  hover:text-blue-500">
              Home
            </Link>
            <Link to="/about" className="block  hover:text-blue-500">
              About
            </Link>
            <Link
              to="/"
              state={{ scrollTo: 'project-section' }}
              className="block  hover:text-blue-500"
            >
              Project
            </Link>
            <Link to="/contact" className="block  hover:text-blue-500">
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
