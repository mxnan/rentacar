import React from "react";

const Navlinks = [
  {
    id: "1",
    name: "Home",
    link: "/#",
  },
  {
    id: "2",
    name: "Cars",
    link: "/#cars",
  },
  {
    id: "3",
    name: "About",
    link: "/#about",
  },
  {
    id: "4",
    name: "Booking",
    link: "/#booking",
  },
];

const Navbar = () => {
  return (
    <header className="shadow-lg">
      <div className="container">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-3xl font-bold">Rent-a-Car</h2>
          </div>
          <div className="hidden md:block">
            <ul className="flex items-center gap-8">
              {Navlinks.map((data) => (
                <li className="py-1" key={data.id}>
                  <a
                    className="inline-block text-lg py-2 hover:border-b-2
                     hover:text-purple hover:border-black transition-colors duration-500 font-medium"
                    href={data.link}
                  >
                    {data.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
