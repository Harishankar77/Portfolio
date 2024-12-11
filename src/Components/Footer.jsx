import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
const Footer = () => {
  return (
    <>
      <hr />
      <footer className="py-10">
        <div
          id="Footer"
          className="max-w-screen-2xl bg-white container mx-auto px-4 md:20px"
        >
          <div className="flex flex-col items-center justify-center">
            <div className="flex space-x-4 text-2xl cursor-pointer">
              <FaFacebook className="hover:scale-110 duration-300" />
              <FaTwitter className="hover:scale-110 duration-300" />
              <FaLinkedin className="hover:scale-110 duration-300" />
              <FaInstagram className="hover:scale-110 duration-300" />
            </div>
            <div className="mt-8 border-t border-gray-700 pt-8 flex flex-col items-center">
              <p className="text-sm">
                &copy;2024 Your Company. All Rights Reservied
              </p>
              <p className="text-sm">Company Owner Harishankar Banjare!!</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
