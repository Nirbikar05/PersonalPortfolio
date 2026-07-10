import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { navLinks } from "../constants";
import { HiMenuAlt4, HiX } from "react-icons/hi";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [active, setActive] = useState("");

  return (
    <nav className="fixed top-0 z-20 flex w-full items-center bg-primary px-6 py-5 sm:px-16">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <h1 className="orbitron-font flex cursor-pointer text-[28px] font-bold text-white">
            <span className="neon-text mr-1 text-neon-blue">Dev</span>
            Portfolio
          </h1>
        </Link>

        <ul className="hidden flex-row gap-10 sm:flex">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-neon-blue neon-text" : "text-secondary"
              } orbitron-font cursor-pointer text-[18px] font-medium hover:text-neon-blue transition-colors duration-200`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        <div className="flex flex-1 items-center justify-end sm:hidden">
          <div
            className="z-10 h-[28px] w-[28px] cursor-pointer object-contain"
            onClick={() => setToggle(!toggle)}
          >
            {toggle ? (
              <HiX className="h-[28px] w-[28px] text-white" />
            ) : (
              <HiMenuAlt4 className="h-[28px] w-[28px] text-white" />
            )}
          </div>

          {toggle && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95, x: 20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.95, x: 20 }}
              transition={{ duration: 0.25 }}
              className="black-gradient absolute right-0 top-20 z-10 mx-4 my-2 min-w-[140px] rounded-xl p-6"
            >
              <ul className="flex flex-col items-start justify-end gap-4">
                {navLinks.map((nav) => (
                  <li
                    key={nav.id}
                    className={`${
                      active === nav.title ? "text-neon-blue neon-text" : "text-secondary"
                    } orbitron-font cursor-pointer text-[16px] font-medium`}
                    onClick={() => {
                      setToggle(!toggle);
                      setActive(nav.title);
                    }}
                  >
                    <a href={`#${nav.id}`}>{nav.title}</a>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 