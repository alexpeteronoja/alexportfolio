function Footer() {
  function getDate() {
    const date = new Date();
    const year = date.getFullYear();
    return year;
  }
  return (
    <div className="bg-black text-white text-center p-3 ">
      <div className="flex justify-center gap-x-4 my-3">
        <div>
          <a
            href="https://api.whatsapp.com/send?phone=+2348162513936&text=Hello.%20I%20need%20a%20Web%20Development%20Service.%20Got%20your%20contact%20from%20your%20portfolio"
            target="_blank"
            aria-label="WhatsApp"
            className="hover:text-emerald-500"
          >
            <i class="fa-brands fa-whatsapp fa-xl"></i>
          </a>
        </div>

        <div>
          <a
            href="mailto:alexpeteronoja@gmail.com"
            aria-label="Email"
            className="hover:text-emerald-500"
            target="_blank"
          >
            <i class="fas fa-envelope fa-xl"></i>
          </a>
        </div>

        <div>
          <a
            href="https://www.linkedin.com/in/alex-peter-onoja/"
            target="_blank"
            aria-label="LinkedIn"
            className="hover:text-emerald-500"
          >
            <i class="fa-brands fa-linkedin fa-xl"></i>
          </a>
        </div>

        <div>
          <a
            href="tel:+2348162513936"
            aria-label="Phone"
            target="_blank"
            className="hover:text-emerald-500"
          >
            <i class="fas fa-phone fa-xl"></i>
          </a>
        </div>
      </div>

      <div>© Copyright {getDate()}, All Rights Reserved</div>
    </div>
  );
}

export default Footer;
