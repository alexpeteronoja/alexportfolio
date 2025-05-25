import ProjectData from '../data/ProjectData';

function Project() {
  return (
    <>
      <div id="project-section">
        <div className="my-15">
          <p className="text-center text-3xl md:text-5xl font-bold text-emerald-400 tracking-tight  my-5">
            Project
          </p>
          <p className="text-center">Things I have built</p>
        </div>

        <div className=" mx-auto w-max grid md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-7">
          {ProjectData.map((item, index) => (
            <div
              key={index}
              className="w-[23.438rem] lg:w-[300px] shadow-xl shadow-slate-700 pb-7 rounded-2xl bg-gray-900 flex flex-col h-full"
            >
              <div>
                <img
                  className="w-[375px] lg:w-[300px] rounded-t-2xl"
                  src={item.img}
                  alt=""
                />{' '}
              </div>

              <div className="px-5 flex flex-col flex-grow">
                <p className="my-4 font-bold">{item.title}</p>
                <p className="mb-4">{item.description}</p>

                <div className=" flex justify-between mt-auto">
                  <div className="flex space-x-2">
                    <img src="images/Logo/akar-icons_link-chain.svg" alt="" />
                    <p className="underline">
                      <a href={item.previewURL} target="_blank">
                        Preview
                      </a>
                    </p>
                  </div>

                  <div className="flex space-x-2">
                    <img
                      src="images/Logo/akar-icons_github-fill.svg"
                      alt=""
                      width="20px"
                    />
                    <p className="underline">
                      <a href={item.githubURL} target="_blank">
                        View Code
                      </a>
                    </p>
                  </div>
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
