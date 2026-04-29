import Footer from '../components/Footer';
import Navbar from '../components/NavBar';

function About() {
  return (
    <>
      <div className="bg-gray-900 text-white min-h-screen ">
        <div className="box ">
          <Navbar />

          <h1 className="mt-5 mb-5 text-3xl md:text-5xl font-bold text-purple-500  tracking-tight">
            About
          </h1>

          <div>
            <div>
              <img
                src="images/Profile Pic.png"
                alt=""
                width="250px"
                className="block mx-auto "
              />
            </div>

            <div>
              <h2 className="text-2xl md:text-4xl font-bold text-purple-500  tracking-tight text-center">
                Web Developer
              </h2>

              <div className="text-center my-5">
                <p>
                  My name is Alex Peter Onoja, I am a Full-Stack Web Developer
                  specializing in building clean, responsive, and user-friendly
                  web applications. Experienced in developing modern interfaces
                  and scalable backend systems using React, TypeScript, Node.js,
                  and MongoDB. Passionate about delivering high-performance
                  digital solutions and seamless user experiences.
                </p>

                <p className="my-4">
                  I am passionate about coding and solving problems
                </p>
              </div>
              <div className="flex justify-center mt-4 space-x-3.5">
                <button
                  type="button"
                  className="duration-300 ease-in hover:scale-110 bg-purple-500 hover:bg-purple-600 text-black cursor-pointer py-2 px-4 rounded-xl"
                >
                  <a href="/contact">Contact Me</a>
                </button>
                <button
                  type="button"
                  className="duration-300 ease-in hover:scale-110 bg-purple-500 hover:bg-purple-600 text-black cursor-pointer py-2 px-4 rounded-xl"
                >
                  <a href="Web dev CV.pdf" rel="_blank">
                    Download CV
                  </a>
                </button>
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
