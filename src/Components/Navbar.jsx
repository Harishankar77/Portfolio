import React, { useState } from "react";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { IoClose } from "react-icons/io5";
import { Link } from "react-scroll";
const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const navItems = [
    {
      id: 1,
      text: "Home",
    },
    {
      id: 2,
      text: "About",
    },
    {
      id: 3,
      text: "Portfolio",
    },
    {
      id: 4,
      text: "Experiance",
    },
    {
      id: 5,
      text: "Contact",
    },
  ];

  return (
    <>
      <div className="max-w-screen-2xl bg-white container mx-auto px-4 md:20px shadow-md h-16 fixed top-0 left-0 right-0">
        <div className="flex justify-between items-center h-16 p-3">
          <div className="flex space-x-2">
            <img
              className="h-12 w-12 rounded-full"
              src="/hari1.jpg"
              alt="logo_img"
            />
            <h1 className="font-semibold text-xl cursor-pointer">
              Har<span className="text-green-500 text-2xl">i</span>shanka
              <span className="text-yellow-500 text-2xl">r</span>
              <p className="text-sm">Web Developer</p>
            </h1>
          </div>
          {/* Desktop Navbar */}
          <div>
            <ul className="hidden md:flex space-x-8">
              {navItems.map(({ id, text }) => (
                <li
                  key={id}
                  className="hover:scale-105 duration-200 cursor-pointer"
                >
                  {text}
                </li>
              ))}
            </ul>

            <div onClick={() => setMenu(!menu)} className="md:hidden">
              {menu ? (
                <IoClose size={"24"} />
              ) : (
                <AiOutlineMenuUnfold size={"24"} />
              )}
            </div>
          </div>
        </div>
        {/* Mobile Navbar */}
        {menu && (
          <div>
            <ul className="md:hidden flex flex-col h-screen items-center justify-center space-y-3 mt-10 font-semibold text-xl">
              {navItems.map(({ id, text }) => (
                <li
                  key={id}
                  className=" hover:scale-105 duration-200 cursor-pointer"
                >
                  <Link
                    to={text}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    activeClass="active"
                  >
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
