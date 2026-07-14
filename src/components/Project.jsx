import ProjectData from '../data/ProjectData';

function Project() {
  return (
    <>
      <div id="project-section" className="py-20 border-t border-white/5">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-cyan-400">
            Projects
          </h2>
          <p className="text-gray-400 text-lg">Things I have built</p>
        </div>

        <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
          {ProjectData.map((item, index) => (
            <div
              key={index}
              className="glass-panel rounded-2xl flex flex-col h-full overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)] hover:border-purple-500/30 group"
            >
              <div className="overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 opacity-0 transition-opacity duration-300"></div>
                <img
                  className="w-full h-48 object-cover object-top transition-transform duration-500 hover:scale-110"
                  src={item.img}
                  alt={item.title}
                />
              </div>

              <div className="p-6 flex flex-col flex-grow relative z-20 bg-[#0a0a0a]/80 backdrop-blur-sm">
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-purple-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm mb-6 leading-relaxed flex-grow">
                  {item.description}
                </p>

                <div className="flex justify-between items-center mt-auto pt-4 border-t border-white/10">
                  <a
                    href={item.previewURL}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center space-x-2 text-sm text-gray-300 hover:text-cyan-400 transition-colors group/link"
                  >
                    <svg
                      className="w-5 h-5 group-hover/link:-rotate-12 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                      ></path>
                    </svg>
                    <span>Live Demo</span>
                  </a>

                  <a
                    href={item.githubURL}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center space-x-2 text-sm text-gray-300 hover:text-purple-400 transition-colors group/link"
                  >
                    <svg
                      className="w-5 h-5 group-hover/link:scale-110 transition-transform"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span>View Code</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Project;
