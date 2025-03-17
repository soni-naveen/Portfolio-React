import React from "react";
import Naveenphoto from "../assets/naveensoni.png";
import Resume from "../assets/Naveen_Resume_New.pdf";
import { MdOutlineFileDownload } from "react-icons/md";
import BlurText from "./ui/BlurText";
import SocialLinks from "./SocialLinks";
import Animate from "./ui/Animate";

export default function Intro() {
  return (
    <>
      <div className="py-5 flex flex-col lg:flex-row items-center justify-evenly xs:mx-[2%] sm:mx-0">
        <Animate
          distance={200}
          direction="vertical"
          reverse={false}
          config={{ tension: 50, friction: 20 }}
          initialOpacity={0.2}
          animateOpacity
          scale={1.1}
          threshold={0.2}
        >
          <div>
            <svg
              className="h-[20rem] xs:h-[23rem] sm:h-[26rem] lg:h-[32rem] xl:h-[35rem]"
              id="sw-js-blob-svg"
              viewBox="0 0 100 100"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
                  <stop id="stop1" stopColor="rgba(40, 10, 50)" offset="0%" />
                  <stop id="stop2" stopColor="rgba(33, 32, 64)" offset="100%" />
                </linearGradient>
              </defs>
              <mask id="mask1" mask-type="alpha">
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
                <image x="10" y="18" className="h-[75px]" href={Naveenphoto} />
              </g>
            </svg>
          </div>
        </Animate>
        <div>
          <div className="text-white text-center font-poppins px-3 text-clamp1 font-medium tracking-wide mb-5 sm:mb-7">
            Hi, I'm{" "}
            <span className="font-bold text-purple-300">NAVEEN SONI</span>{" "}
            <br />{" "}
            <BlurText
              text="MERN Stack Developer"
              delay={500}
              animateBy="words"
              direction="top"
            />
          </div>
          <p className="text-white font-poppins text-center text-clamp2 mb-5">
            Connect with me!
          </p>
          <div className="mb-7 sm:mb-10">
            <SocialLinks />
          </div>
          <a href={Resume} target="_blank" className="flex justify-center">
            <div className="group relative w-fit transition-transform duration-300 active:scale-95">
              <button className="relative z-10 rounded-full bg-gradient-to-br from-indigo-500 to-fuchsia-500 p-0.5 duration-300 group-hover:scale-105">
                <p className="block rounded-full bg-slate-950 px-4 py-2 text-slate-100 duration-300 flex items-center gap-2 group-hover:bg-slate-950/50 group-hover:text-slate-50 group-active:bg-slate-950/80">
                  <MdOutlineFileDownload className="text-gray-200 text-lg sm:text-xl md:text-2xl group-hover:text-white" />
                  <span className="text-sm sm:text-base font-poppins">Resume</span>
                </p>
              </button>
              <span className="pointer-events-none absolute -inset-4 z-0 transform-gpu rounded-2xl bg-gradient-to-br from-indigo-500 to-fuchsia-500 opacity-30 blur-xl transition-all duration-300 group-hover:opacity-40 group-active:opacity-50" />
            </div>
          </a>
        </div>
      </div>
    </>
  );
}
