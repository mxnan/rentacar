import { FaCameraRetro } from "react-icons/fa";
import { GiNotebook } from "react-icons/gi";
import { SlNote } from "react-icons/sl";

const serviceData = [
  {
    name: "Best Price",
    icon: (
      <FaCameraRetro className="text-5xl text-primary group-hover:text-black duration-300" />
    ),
    link: "#",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    aosDelay: "0",
  },
  {
    name: "Fast and Safe",
    icon: (
      <GiNotebook className="text-5xl text-primary group-hover:text-black duration-300" />
    ),
    link: "#",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    aosDelay: "500",
  },
  {
    name: "Experience Drivers",
    icon: (
      <SlNote className="text-5xl text-primary group-hover:text-black duration-500" />
    ),
    link: "#",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    aosDelay: "1000",
  },
];
const About = () => {
  const handleKnowMore = () => {
    const element = document.querySelector("#footer");
    window.scrollTo({
      top: element?.getBoundingClientRect().top,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <section className="bg-silver text-black dark:bg-black dark:text-silver duration-300 relative">
      <div id="aboutsec" className="container ">
        <div className="py-2 pb-8">
          <div
            data-aos="fade-down"
            className="flex flex-col items-center gap-4 pt-12"
          >
            <h2 className="text-purple dark:text-gold text-5xl md:text-6xl">
              Why Choose Us ...
            </h2>
            <p className="text-2xl">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Suscipit, voluptates.
            </p>
            <p className="text-xl">Lorem ipsum dolor sit amet.</p>
            <button
              onClick={handleKnowMore}
              className="smky-btn3 relative 
              text-lg  py-2 px-6 after:absolute after:h-1 
              after:hover:h-[200%] transition-all duration-500 hover:transition-all
               hover:duration-500 after:transition-all after:duration-500 
               after:hover:transition-all after:hover:duration-500 overflow-hidden
                z-20 after:z-[-20]  
                after:rounded-t-full after:w-full after:bottom-0 after:left-0
                dark:hover:text-purple dark:text-white 
                text-black
                 hover:text-black
                 after:bg-purple
                 dark:after:bg-gold "
            >
              Know more
            </button>
          </div>
          <div className="pt-20  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 ">
            {serviceData.map((item) => (
              <div
                key={item.name}
                data-aos="fade-up"
                data-aos-delay={item.aosDelay}
                className=" bg-[#e2e1e1] dark:bg-[#1d1d1d] dark:text-silver text-black border-2 border-black dark:border-gold p-6 rounded-xl flex flex-col items-center text-center gap-6"
              >
                <div className="grid place-items-center dark:text-gold text-purple">
                  {item.icon}
                </div>
                <h1 className="text-3xl font-bold">{item.name}</h1>
                <p className="text-lg">{item.description}</p>
                <a
                  href={item.link}
                  className="text-black  dark:text-gold text-lg font-semibold"
                >
                  More .
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
