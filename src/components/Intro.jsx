import React from "react";
import Naveenphoto from "../assets/naveensoni.png";
import Resume from "../assets/Naveen_Resume.pdf";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { MdOutlineFileDownload } from "react-icons/md";

export default function Intro() {
  return (
    <>
      <div className="mt-2 lg:mt-10 flex flex-col lg:flex-row items-center justify-evenly xs:mx-[2%]">
        <div>
          <svg
            className="h-[20rem] xs:h-[24rem] sm:h-[32rem] lg:h-[35rem]"
            id="sw-js-blob-svg"
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
                <stop id="stop1" stopColor="rgba(25, 1, 50)" offset="0%" />
                <stop id="stop2" stopColor="rgba(25, 1, 50)" offset="100%" />
              </linearGradient>
            </defs>
            <mask id="mask1" mask-type="alpha">
              <path
                fill="url(#sw-gradient)"
                d="M17.4,-26.7C21.6,-20.9,23.4,-14.5,27.3,-7.6C31.3,-0.7,37.4,6.7,35.6,11.4C33.9,16.2,24.3,18.2,17.1,23.5C9.8,28.8,4.9,37.3,-1.7,39.6C-8.4,42,-16.7,38.3,-22.2,32.4C-27.7,26.6,-30.4,18.7,-33.5,10.5C-36.7,2.4,-40.3,-5.9,-37.7,-11.7C-35,-17.4,-26,-20.4,-18.7,-25.2C-11.4,-30,-5.7,-36.6,0.5,-37.2C6.6,-37.8,13.2,-32.5,17.4,-26.7Z"
                width="100%"
                height="100%"
                transform="translate(50 50)"
                strokeWidth="0"
                style={{ transition: "all 0.3s ease 0s" }}
                stroke="url(#sw-gradient)"
              />
            </mask>
            <g mask="url(#mask1)">
              <path
                fill="url(#sw-gradient)"
                d="M16.6,-26.6C21.8,-22.6,26.4,-18.4,31.5,-12.7C36.6,-7.1,42.2,-0.1,40.8,5.5C39.4,11.1,31,15.3,25,21C19.1,26.7,15.5,33.8,9.7,37.7C3.8,41.6,-4.4,42.2,-11.1,39.5C-17.8,36.7,-23,30.6,-28.6,24.6C-34.1,18.5,-39.9,12.5,-41.3,5.7C-42.7,-1.2,-39.6,-8.9,-35.2,-15C-30.7,-21,-24.9,-25.4,-18.8,-29C-12.8,-32.7,-6.4,-35.5,-0.3,-35C5.7,-34.5,11.5,-30.7,16.6,-26.6Z"
                width="100%"
                height="100%"
                transform="translate(50 50)"
                strokeWidth="0"
                style={{ transition: "all 0.3s ease 0s" }}
                stroke="url(#sw-gradient)"
              />
              <image x="20" y="15" className="h-20" href={Naveenphoto} />
            </g>
          </svg>
        </div>
        <div>
          <p className="text-white text-center font-poppins text-clamp1 font-bold tracking-wide mb-5 sm:mb-10">
            MERN STACK DEVELOPER
          </p>
          <p className="text-white font-poppins text-center text-clamp2 mb-5">
            Connect with me!
          </p>
          <div className="text-gray-400 flex justify-center items-center gap-5 mb-7 sm:mb-10">
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
          <a href={Resume} download>
            <button className="group text-gray-300 mx-auto font-poppins flex gap-2 border-2 border-gray-400 rounded-full text-sm sm:text-base px-4 py-2 sm:px-5 sm:py-3 hover:text-white hover:border-white duration-300 hover:drop-shadow-my">
              <MdOutlineFileDownload className="text-gray-300 text-xl sm:text-2xl group-hover:text-white" />
              Resume
            </button>
          </a>
        </div>
      </div>
    </>
  );
}
