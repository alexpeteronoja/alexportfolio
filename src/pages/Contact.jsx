import Footer from '../components/Footer';
import Navbar from '../components/NavBar';
import ContactData from '../data/ContactData';

function Contact() {
  return (
    <>
      <div className="bg-gray-900 text-white min-h-screen">
        <div className="box">
          <Navbar />

          <h1 className="mt-5 mb-5 text-3xl md:text-5xl font-bold text-purple-500  tracking-tight ">
            Contact
          </h1>

          <div className="mb-10">
            <p>You can contact me by clicking on any of the buttons</p>
          </div>

          <div className="flex flex-wrap justify-center gap-10">
            {ContactData.map((item, index) => (
              <div key={index}>
                <a href={item.link}>
                  <div className="flex justify-between w-[300px] bg-emerald-500 hover:bg-emerald-600 text-black cursor-pointer py-3 px-4 rounded-xl transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
                    <div className="flex gap-x-2">
                      <img className="w-[30px]" src={item.img} alt="" />
                      {item.name}
                    </div>
                    <div>
                      <img
                        className="w-[30px]"
                        src="images\Logo\apps.png"
                        alt=""
                      />
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Contact;
