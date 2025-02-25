import React from "react";
import Marquee from "react-fast-marquee";
import html from "../assets/skills/html.svg";
import css from "../assets/skills/css.svg";
import javascript from "../assets/skills/javascript.svg";
import tailwindcss from "../assets/skills/tailwindcss.svg";
import mongodb from "../assets/skills/mongodb.svg";
import express from "../assets/skills/express.svg";
import react from "../assets/skills/react.svg";
import nodejs from "../assets/skills/nodejs.svg";
import redux from "../assets/skills/redux.svg";
import postgresql from "../assets/skills/postgresql.svg";
import git from "../assets/skills/git.svg";
import github from "../assets/skills/github.svg";
import java from "../assets/skills/java.svg";
import figma from "../assets/skills/figma.svg";
import python from "../assets/skills/python.svg";
import linux from "../assets/skills/linux.svg";

export default function Skills() {
  const skillsData = [
    { name: "HTML", image: html },
    { name: "CSS", image: css },
    { name: "Javascript", image: javascript },
    { name: "TailwindCSS", image: tailwindcss },
    { name: "MongoDB", image: mongodb },
    { name: "ExpressJs", image: express },
    { name: "ReactJs", image: react },
    { name: "NodeJs", image: nodejs },
    { name: "Redux", image: redux },
    { name: "PostgreSQL", image: postgresql },
    { name: "Git", image: git },
    { name: "GitHub", image: github },
    { name: "Java", image: java },
    { name: "Figma", image: figma },
    { name: "Python", image: python },
    { name: "Linux", image: linux },
  ];

  return (
    <div id="skills" className="pt-10">
      <h1 className="w-[80%] mx-auto text-clamp3 font-poppins font-bold text-white">
        <div>Skills</div>
        <div className="h-2 rounded-full w-[2em] bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500" />
      </h1>
      <div className="relative w-[90%] sm:w-[80%] mx-auto z-20 border-[#25213b]">
        <div className="w-full my-14">
          <Marquee
            gradient={true}
            gradientColor="#212040"
            gradientWidth={20}
            speed={100}
            pauseOnHover={false}
            pauseOnClick={false}
            delay={0}
            play={true}
            direction="left"
          >
            {skillsData.map((skill, id) => (
              <div
                className="w-36 min-w-fit h-fit flex flex-col items-center justify-center transition-all duration-500 m-3 sm:m-5 rounded-lg group relative hover:scale-[1.05] cursor-pointer"
                key={id}
              >
                <div className="h-full rounded-lg border border-[#2e2c5c] bg-[#212040]/80 shadow-none shadow-gray-50 group-hover:border-indigo-300/40 transition-all duration-500">
                  <div className="flex -translate-y-[1px] justify-center">
                    <div className="w-3/4">
                      <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#514eba] to-transparent" />
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-center gap-3 h-32 w-32 sm:h-44 sm:w-44 cursor-default">
                    <div className="h-12 sm:h-16">
                      <img
                        src={skill.image}
                        alt={skill.name}
                        className="h-full w-auto rounded-lg"
                      />
                    </div>
                    <p className="text-white text-xs font-poppins sm:text-base">
                      {skill.name}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
}
