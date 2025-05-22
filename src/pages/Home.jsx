import { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/NavBar';
import Project from '../components/Project';
import TechStack from '../data/TechStack';
import { useLocation } from 'react-router-dom';

function Home() {
  const [animationX, setAnimationX] = useState('translate-x-full opacity-0 ');
  const [animationY, setAnimationY] = useState('translate-y-full opacity-0 ');

  const location = useLocation();
  useEffect(() => {
    if (location.state?.scrollTo) {
      const element = document.getElementById(location.state.scrollTo);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location.state]);

  useEffect(() => {
    setAnimationX('translate-x-0', 'opacity-100');
    setAnimationY('translate-x-0', 'opacity-100');
  }, [animationX, animationY]);

  return (
    <>
      <div className="bg-gray-900 text-white">
        <div className="box">
          <Navbar />
          <div id="profile-details" className="mt-5 mb-10 mx-3 md:mx-0 ">
            <div className="mx-auto grid md:grid-cols-[60%_40%]  md:w-9/10 ">
              <div
                className={`dark:bg-black order-2 md:order-1 md:my-auto ${animationY} transition-all duration-800 ease-in`}
              >
                <div className="font-bold text-center md:text-start text-2xl md:text-4xl my-5">
                  Hi, I’m{' '}
                  <span className="text-purple-400">Alex Peter Onoja</span>
                </div>
                <div className="mb-5 ">
                  A Frontend Developer who crafts clean, responsive, and
                  user-friendly websites. I design and build engaging digital
                  experiences for the web.
                  <div className="flex justify-center md:justify-start mt-4 space-x-3.5">
                    <button
                      type="button"
                      className="duration-300 ease-in bg-purple-500 hover:scale-110 hover:bg-purple-600 text-black cursor-pointer py-2 px-4 rounded-xl"
                    >
                      <a href="/contact">Contact Me</a>
                    </button>
                    <button
                      type="button"
                      className="duration-300 ease-in bg-purple-500 hover:scale-110 text-black cursor-pointer py-2 px-4 rounded-xl"
                    >
                      <a href="Web dev CV.pdf" target="_blank" className="">
                        Download CV
                      </a>
                    </button>
                  </div>
                </div>
              </div>

              <div
                className={`flex justify-center md:justify-end order-1 md:order-2 ${animationX} transition-all duration-800 ease-in`}
              >
                <img src="images/Profile Pic.png" alt="" width="250px" />
              </div>
            </div>
          </div>

          {/* Tech Stack Section */}

          <div className="mb-6 md:mb-10">
            <p className="text-center text-3xl md:text-5xl font-bold text-emerald-400 tracking-tight my-5">
              My Tech Stack
            </p>
            <p className="text-center">Tools & Technologies I Use</p>
          </div>
          <div className="flex flex-wrap justify-center gap-10 my-13">
            {TechStack.map((item, index) => (
              <div key={index} className="">
                <img
                  className="tech-img mx-auto"
                  src={item.img}
                  alt={item.alt}
                />
                <p className="text-center pt-1.5">{item.name}</p>
              </div>
            ))}
          </div>
          {/* Project Setion */}
          <Project />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Home;
