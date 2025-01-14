import React from "react";

export default function Navbar() {
  return (
    <nav className="sticky top-4">
      <div className="w-fit mx-auto px-7 sm:px-10 rounded-full backdrop-blur-[30px] shadow-[0px_0px_15px_0_rgba(227,228,237,0.37)]">
        <div className="flex justify-center items-center h-12 sm:h-16">
          {/* Navigation Links */}
          <div className="font-poppins text-[13px] sm:text-base space-x-4 sm:flex sm:space-x-6">
            <a
              href="https://naveensoni.netlify.app/#skills"
              className="text-white relative after:content-[''] after:block after:h-[1px] after:absolute after:left-0 after:w-0 after:bg-white after:transition-all after:duration-300 after:ease-linear hover:after:w-full hover:after:left-0"
            >
              Skills
            </a>
            <a
              href="https://naveensoni.netlify.app/#projects"
              className="text-white relative after:content-[''] after:block after:h-[1px] after:absolute after:left-0 after:w-0 after:bg-white after:transition-all after:duration-300 after:ease-linear hover:after:w-full hover:after:left-0"
            >
              Projects
            </a>
            <a
              href="https://naveensoni.netlify.app/#education"
              className="text-white relative after:content-[''] after:block after:h-[1px] after:absolute after:left-0 after:w-0 after:bg-white after:transition-all after:duration-300 after:ease-linear hover:after:w-full hover:after:left-0"
            >
              Education
            </a>
            <a
              href="https://naveensoni.netlify.app/#contact"
              className="text-white relative after:content-[''] after:block after:h-[1px] after:absolute after:left-0 after:w-0 after:bg-white after:transition-all after:duration-300 after:ease-linear hover:after:w-full hover:after:left-0"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
