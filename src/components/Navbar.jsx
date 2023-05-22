import { useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          // setActive is keep tracking of where we are currently on the page
          onClick={() => {
            setActive("");
            // Once click, it will scroll to the top of the page. That's what window.scrollTo(0, 0) does
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer">
            Amrindra{" "}
            <span className="sm:block hidden">| Frontend Developer</span>
          </p>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
