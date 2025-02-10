import React from "react";

export default function Navbar() {
  const navLinks = [
    { name: "Skills", href: "https://naveensoni.netlify.app/#skills" },
    { name: "Projects", href: "https://naveensoni.netlify.app/#projects" },
    { name: "Education", href: "https://naveensoni.netlify.app/#education" },
    { name: "Contact", href: "https://naveensoni.netlify.app/#contact" },
  ];

  return (
    <nav className="sticky top-5">
      <div className="w-fit mx-auto px-7 sm:px-10 rounded-full backdrop-blur-[30px] shadow-[0px_0px_15px_0_rgba(227,228,237,0.3)]">
        <div className="flex justify-center items-center h-10 sm:h-12 md:h-14 lg:h-16">
          {/* Navigation Links */}
          <div className="font-poppins text-[11px] xxs:text-xs sm:text-sm lg:text-base space-x-4 xxs:space-x-6 xs:space-x-8 sm:flex sm:space-x-10 lg:space-x-14">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-white relative after:content-[''] after:block after:h-[1px] after:absolute after:left-0 after:w-0 after:bg-white after:transition-all after:duration-300 after:ease-linear hover:after:w-full hover:after:left-0"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
