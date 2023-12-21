import { GoSun } from "react-icons/go";
import { HiMoon } from "react-icons/hi2";

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

// eslint-disable-next-line react/prop-types
const Navbar = ({ theme, setTheme }) => {
  return (
    <header className="shadow-md bg-silver dark:bg-black dark:text-white duration-300 ease-linear">
      <div className="container ">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-3xl font-bold">Rent-a-Car</h2>
          </div>
          <div className="hidden md:block">
            <ul className="flex items-center gap-8">
              {Navlinks.map((data) => (
                <li className="py-1" key={data.id}>
                  <a
                    className="inline-block text-lg py-1 hover:border-b-2
                     hover:text-purple hover:border-black transition-colors duration-500 font-medium"
                    href={data.link}
                  >
                    {data.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="cursor-pointer">
            {theme === "light" ? (
              <GoSun onClick={() => setTheme("dark")} className="h-6 w-6" />
            ) : (
              <HiMoon onClick={() => setTheme("light")} className="h-6 w-6" />
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
