import React from "react";
import css from "../../public/css.png";
import html from "../../public/html.png";
import nodejs from "../../public/nodejs.png";
import react from "../../public/react.png";
import mongodb from "../../public/mongodb.png";
import expressjs from "../../public/expressjs.png";
import js from "../../public/js.png";

const Portfolio = () => {
  const cardItems = [
    { id: 1, logo: css, name: "CSS" },
    { id: 2, logo: html, name: "HTML" },
    { id: 3, logo: js, name: "JavaScript" },
    { id: 4, logo: expressjs, name: "Express.js" },
    { id: 5, logo: nodejs, name: "Node.js" },
    { id: 6, logo: mongodb, name: "MongoDB" },
    { id: 7, logo: react, name: "React" },
  ];

  return (
    <>
      <div
        id="Portfolio"
        className="max-w-screen-2xl container mx-auto px-4 my-10"
      >
        <div>
          <h1 className="text-3xl font-semibold mb-5">Portfolio</h1>
          <span className="underline cursor-pointer font-semibold text-blue-700">
            Featured Projects
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-4 mt-5">
            {cardItems.map(({ id, logo, name }) => (
              <div
                key={id}
                className="md:w-[250px] md:h-[250px] p-3 rounded-lg shadow-lg border-[2px] hover:scale-110 duration-300 cursor-pointer"
              >
                <img
                  src={logo}
                  alt={name}
                  className="w-[120px] h-[120px] rounded-full border border-green-700 border-[2px]"
                />
                <div>
                  <h1 className="font-bold mt-1">{name}</h1>
                  <p className="text-sm">
                    Full Stack Developer Design both Server and UI{" "}
                  </p>
                </div>
                <div>
                  <button className="bg-blue-600 space-x-2 rounded p-1 text-white mt-1">
                    Video
                  </button>
                  <button className="bg-green-600 space-x-2 rounded p-1 text-white mt-1 ml-3">
                    Source Code
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <br /> <br />
      <hr />
    </>
  );
};

export default Portfolio;
