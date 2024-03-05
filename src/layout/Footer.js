const Footer = () => {
  return (
    <div className="cavani_tm_footer fixed inset-x-0 bottom-0 bg-white z-[10] h-[70px] leading-[70px] flex items-center justify-between py-0 px-[70px] middle:hidden">
      <div className="copyright">
        <p className="text-[#333] font-poppins">Copyright <a href="https://naramalhasani.com">NOM © 2023</a></p>
      </div>{
      <div className="social">
        <ul>
          <li className="mr-[35px] inline-block">
            <a className="text-[#333]" href="https://www.youtube.com/channel/UC5mb8llTAOiOLddX3S6DX3g">
              <img
                className="svg inline-block"
                src="assets/img/svg/social/youtube.svg"
                alt="image"
              />
            </a>
          </li>
          </ul>
      </div>

      /*
          <li className="mr-[15px] inline-block">
            <a className="text-[#333]" href="#">
              <img
                className="svg inline-block"
                src="assets/img/svg/social/twitter.svg"
                alt="image"
              />
            </a>
          </li>
          <li className="mr-[15px] inline-block">
            <a className="text-[#333]" href="#">
              <img
                className="svg inline-block"
                src="assets/img/svg/social/instagram.svg"
                alt="image"
              />
            </a>
          </li>
          <li className="mr-[15px] inline-block">
            <a className="text-[#333]" href="#">
              <img
                className="svg inline-block"
                src="assets/img/svg/social/dribbble.svg"
                alt="image"
              />
            </a>
          </li>
          <li className="inline-block">
            <a className="text-[#333]" href="#">
              <img
                className="svg inline-block"
                src="assets/img/svg/social/tik-tok.svg"
                alt="image"
              />
            </a>
          </li>
        */}
    </div>
  );
};
export default Footer;
