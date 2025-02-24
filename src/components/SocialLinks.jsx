import React from "react";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";

export default function SocialLinks() {
  return (
    <div className="text-gray-400 flex justify-center items-center gap-5">
      <a href="https://www.linkedin.com/in/soni-naveen" target="_blank">
        <FaLinkedin className="text-xl sm:text-2xl hover:cursor-pointer hover:drop-shadow-my hover:text-white transition-all duration-200" />
      </a>
      <a href="mailto:naveennsonii@gmail.com" target="_blank">
        <SiGmail className="text-xl sm:text-2xl hover:cursor-pointer hover:drop-shadow-my hover:text-white transition-all duration-200" />
      </a>
      <a href="https://www.instagram.com/naveenn.soni" target="_blank">
        <FaInstagram className="text-xl sm:text-2xl hover:cursor-pointer hover:drop-shadow-my hover:text-white transition-all duration-200" />
      </a>
      <a href="https://github.com/soni-naveen" target="_blank">
        <FaGithub className="text-xl sm:text-2xl hover:cursor-pointer hover:drop-shadow-my hover:text-white transition-all duration-200" />
      </a>
    </div>
  );
}
