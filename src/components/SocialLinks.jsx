import React from "react";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";

export default function SocialLinks() {
  return (
    <div className="text-gray-400 flex justify-center items-center gap-5">
      <a href="https://www.linkedin.com/in/soni-naveen" target="_blank">
        <FaLinkedin className="text-xl sm:text-2xl hover:cursor-pointer hover:drop-shadow-my hover:text-white" />
      </a>
      <a href="https://www.instagram.com/naveenn.soni" target="_blank">
        <FaInstagram className="text-xl sm:text-2xl hover:cursor-pointer hover:drop-shadow-my hover:text-white" />
      </a>
      <a href="https://github.com/soni-naveen" target="_blank">
        <FaGithub className="text-xl sm:text-2xl hover:cursor-pointer hover:drop-shadow-my hover:text-white" />
      </a>
      <a href="https://twitter.com/naveennsoni" target="_blank">
        <FaXTwitter className="text-xl sm:text-2xl hover:cursor-pointer hover:drop-shadow-my hover:text-white" />
      </a>
    </div>
  );
}
