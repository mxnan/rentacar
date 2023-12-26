import { bannercar, car } from "../assets/images";

// eslint-disable-next-line react/prop-types
const Hero = ({ theme }) => {

  const handleLearnMore = () => {
    const element = document.querySelector("#aboutsec");
    window.scrollTo({
      top: element?.getBoundingClientRect().top,
      left: 0,
      behavior: 'smooth'
    })
  }

  return (
    <section className=" bg-black text-white dark:bg-silver dark:text-black duration-300 relative z-10">
      <div className="container h-[90vh] z-3 ">
        <div className="flex flex-col md:flex-row-reverse md:pt-32 md:px-10 sm:items-center gap-20 h-[500px]  ">
          <div
            data-aos="zoom-in"
            data-aos-duration="2000"
            className="flex items-center z-2 "
          >
            <img
              src={theme === "light" ? car : bannercar}
              alt="car"
              className="relative md:object-scale-down z-2 max-h-[500px] md:scale-125 drop-shadow-[2px_20px_6px_rgba(0,0,0,0.50)]"
            />
          </div>
          <div className="flex flex-col sm:gap-8 items-start gap-4">
            <p
              data-aos="fade-down"
              data-aos-delays="600"
              className="text-gold dark:text-purple text-4xl font-semibold"
            >
              Effortless
            </p>
            <h2
              data-aos="fade-down"
              data-aos-delays="800"
              className="text-6xl font-bold lg:text-7xl"
            >
              Rent A Car
            </h2>
            <p data-aos="fade-down" data-aos-delays="1000" className="">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
              possimus maiores dignissimos praesentium .
            </p>
            <button
              data-aos="fade-down"
              data-aos-duration="600"
              onClick={handleLearnMore}
              className="smky-btn3 relative dark:hover:text-black dark:text-black 
              text-lg hover:text-purple py-2 px-6 after:absolute after:h-1 
              after:hover:h-[200%] transition-all duration-500 hover:transition-all
               hover:duration-500 after:transition-all after:duration-500 
               after:hover:transition-all after:hover:duration-500 overflow-hidden
                z-20 after:z-[-20] dark:after:bg-purple after:bg-gold 
                after:rounded-t-full after:w-full after:bottom-0 after:left-0
                 text-white"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
