import { NavLink } from "react-router-dom";
import AnimatedComponent from "./AnimatedComponent";
import { fadeInUp } from "../utils/animatedVariants";
import { logo } from "../assets/images";

const links = ["about", "facts", "contact"];

const Navbar = () => {
  return (
    <AnimatedComponent tag="header" variants={fadeInUp} className="header mr-11">
      <NavLink
        to="/"
        className="flex h-10 w-10 items-center justify-center rounded-lg bg-offwhite font-bold shadow-md">
        <img src={logo} alt="Fox island" className="w-6" />
      </NavLink>
      <nav className="flex gap-7 font-amatic text-lg font-bold sm:text-[1.65rem]">
        {links.map((link) => (
          <NavLink
            key={link}
            to={`/${link}`}
            className={({ isActive }) =>
              isActive ? "text-orange-600" : "text-brown-600 transition hover:text-orange-600"
            }>
            {link.charAt(0).toUpperCase() + link.slice(1)}
          </NavLink>
        ))}
      </nav>
    </AnimatedComponent>
  );
};

export default Navbar;
