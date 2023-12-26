import {
  client1,
  client2,
  client3,
  pattern,
  appstore,
  playstore,
} from "../assets/images";

const testimonialData = [
  {
    name: "Dilshad",
    image: client1,
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    aosDelay: "0",
  },
  {
    name: "Satya",
    image: client2,
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    aosDelay: "500",
  },
  {
    name: "Sabir",
    image: client3,
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    aosDelay: "1000",
  },
];

const bannerImg = {
  backgroundImage: `url(${pattern})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

const Contact = () => {
  return (
    <section className="bg-black text-silver dark:bg-white dark:text-black duration-300 relative">
      <div id="contact" className="container">
        <div className=" py-4 flex flex-col gap-10">
          <div className="py-4">
            <div className="flex flex-col font-semibold text-gold dark:text-purple mx-4 sm:mx-16 md:mx-24 lg:mx-60 xl:mx-[380px] 3xl:mx-[450px] 2xl:mx-[500px] gap-2">
              <h2
                data-aos="fade-right"
                className="text-5xl capitalize text-start"
              >
                Hear what our
              </h2>
              <h2 data-aos="fade-left" className="text-5xl capitalize text-end">
                clients Say
              </h2>
            </div>
            <div className="pt-20  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 ">
              {testimonialData.map((item) => (
                <div
                  key={item.name}
                  data-aos="fade-up"
                  data-aos-delay={item.aosDelay}
                  className=" bg-[#1d1d1d] dark:bg-[#e2e1e1] dark:text-silver text-black border-2 border-gold dark:border-black 
                  p-4 rounded-xl flex flex-col gap-4"
                >
                  <div className="flex flex-row justify-between gap-4">
                    <img
                      src={item.image}
                      alt="client"
                      className="w-20 h-20 rounded-full object-cover border-2 border-black"
                    />
                    <div className="flex flex-col text-center gap-2">
                      <p className="text-2xl text-silver dark:text-black">
                        {item.name}
                      </p>
                      <div className=" text-sm">⭐⭐⭐⭐⭐</div>
                    </div>
                  </div>
                  <p className="text-xl text-start text-silver dark:text-black">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div
            className=" text-black py-10 sm:min-h-[400px] sm:grid sm:place-items-center rounded-xl"
            style={bannerImg}
          >
            <div>
              <div className="space-y-6 max-w-xl mx-auto">
                <h1
                  data-aos="fade-up"
                  className="text-2xl text-center sm:text-4xl font-semibold"
                >
                  Get Started with our app
                </h1>
                <p data-aos="fade-up" className="text-center sm:px-20">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Similique magnam harum accusantium odit?
                </p>
                <div
                  data-aos="fade-up"
                  className="flex flex-wrap justify-center items-center gap-4"
                >
                  <a href="#">
                    <img
                      src={playstore}
                      alt=""
                      className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]"
                    />
                  </a>
                  <a href="#">
                    <img
                      src={appstore}
                      alt=""
                      className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
