import React, { useState, useEffect } from "react";

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        setIsVisible(false); // Hide navbar when scrolling down
      } else {
        setIsVisible(true); // Show navbar when scrolling up
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const navLinks = [
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`sticky z-50 transition-all duration-300 ${
      isVisible ? "top-5" : "-top-20"
      }`}
    >
      <div className="w-fit mx-auto px-7 xs:px-10 sm:px-14 rounded-full bg-gray-700/40 backdrop-blur-2xl shadow-[0px_0px_10px_0_rgba(227,228,237,0.4)]">
        <div className="flex justify-center items-center h-10 sm:h-12 md:h-14">
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
