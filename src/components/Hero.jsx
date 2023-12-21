
import { bannercar, car } from "../assets/images";

// eslint-disable-next-line react/prop-types
const Hero = ({ theme }) => {
  return (
    <section className=" bg-black text-white dark:bg-silver dark:text-black duration-300 relative -z-20">
      <div className="container h-[90vh] flex">
        <div className="grid place-items-center grid-cols-1 sm:text-center sm:grid-cols-2">
          <div
            data-aos="zoom-in"
            data-aos-duration="1500"
            className="order-1 sm:order-2"
          >
            <img
              src={theme === "light" ? car : bannercar}
              alt="car"
              className="relative -z-10 max-h-[600px] sm:scale-125 drop-shadow-[2px_20px_6px_rgba(0,0,0,0.50)]"
            />
          </div>
          <div className="order-2 sm:order-1 space-y-5 sm:pr-32">
            <p
              data-aos="fade-up"
              data-aos-delays="600"
              className="text-gold dark:text-purple text-4xl font-semibold"
            >
              Effortless
            </p>
            <h2
              data-aos="fade-up"
              data-aos-delays="800"
              className="text-6xl font-bold lg:text-7xl"
            >
              Car Rental
            </h2>
            <p 
            data-aos="fade-up" 
            data-aos-delays="1000" 
            className="">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
              possimus maiores dignissimos praesentium .
            </p>
            <button
            data-aos="fade-up"
            data-aos-duration="800"
            
            className="bg-gold text-black text-lg px-6 py-2 rounded-lg border-2 border-black hover:border-purple  duration-300">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
