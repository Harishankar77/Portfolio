import React from "react";
import { FaSquareFacebook } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaInstagramSquare } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa6";
import { FaNodeJs } from "react-icons/fa";
import { ReactTyped } from "react-typed";

const Home = () => {
  return (
    <>
      <div id="Home" className="max-w-screen-2xl container mx-auto px-4 my-20">
        <div className="flex flex-col-reverse md:flex-row">
          {/* Text Section */}
          <div className="md:w-1/2 md:mt-24 mt-12 space-y-2">
            <span className="text-xl">Welcome In My Feed</span>
            <div className="flex space-x-1 text-2xl md:text-4xl">
              <h1>Hello, I'm a </h1>
              <ReactTyped
                className="text-red-700 font-bold"
                strings={["Developer", "Programer", "Coder"]}
                typeSpeed={100}
                backSpeed={70}
                loop={true}
              />
            </div>
            <br />
            <p className="text-sm md:text-md text-justify">
              Hello, I am Harishankar Banjare, currently working at Wes
              Consultancy Private Limited, Raipur. I am a MERN Stack developer
              skilled in Node.js, Express.js, MongoDB, and the React frontend
              library.
            </p>
            <br />
            {/* Social Media Icons */}
            <div className="flex  flex-col sm:space-y-2 md:flex-row justify-between">
              <div className="space-y-2">
                <h1 className="font-bold">Available on</h1>
                <ul className="flex space-x-5">
                  <a href="https://www.facebook.com/">
                    {" "}
                    <li className="text-2xl cursor-pointer">
                      <FaSquareFacebook />
                    </li>{" "}
                  </a>
                  <a href="https://www.linkedin.com/feed/">
                    {" "}
                    <li className="text-2xl cursor-pointer">
                      <IoLogoLinkedin />
                    </li>{" "}
                  </a>
                  <a href="https://www.instagram.com/">
                    {" "}
                    <li className="text-2xl cursor-pointer">
                      <FaInstagramSquare />
                    </li>
                  </a>
                  <a href="https://github.com/">
                    {" "}
                    <li className="text-2xl cursor-pointer">
                      <FaGithubSquare />
                    </li>{" "}
                  </a>
                </ul>
              </div>
              <div className="space-y-2">
                <h1 className="font-bold">Currently Working On</h1>
                <div className="flex space-x-5">
                  <SiMongodb className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border[2px]" />
                  <SiExpress className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border[2px]" />
                  <FaReact className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border[2px]" />
                  <FaNodeJs className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border[2px]" />
                </div>
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="md:w-1/2 md:ml-60 md:mt-20 mt-8">
            <img
              src="/hari1.jpg"
              alt="hero_img"
              className="md:h-[350px] md:w-[350px] w-48 h-48 rounded-full mx-auto md:mx-0"
            />
          </div>
        </div>
      </div>
      <hr />
    </>
  );
};

export default Home;
