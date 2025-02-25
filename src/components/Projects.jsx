import React from "react";
import SpotlightCard from "./ui/SpotlightCard";
import ecoride from "../assets/projects/ecoride.jpg";
import haze from "../assets/projects/haze.jpg";
import unico from "../assets/projects/unico.jpg";
import tictactoe from "../assets/projects/tictactoe.jpg";
import esocial from "../assets/projects/esocial.jpg";
import tailwindcss from "../assets/skills/tailwindcss.svg";
import mongodb from "../assets/skills/mongodb.svg";
import express from "../assets/skills/express.svg";
import react from "../assets/skills/react.svg";
import nodejs from "../assets/skills/nodejs.svg";
import redux from "../assets/skills/redux.svg";

export default function Projects() {
  return (
    <div id="projects" className="py-10">
      <div className="w-[80%] mx-auto">
        <h1 className="text-clamp3 font-bold font-poppins text-white">
          <div>Projects</div>
          <div className="h-2 rounded-full w-[2em] bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500" />
        </h1>
        <div className="py-10 sm:py-16 max-w-6xl mx-auto w-fit">
          <SpotlightCard
            className="custom-spotlight-card"
            spotlightColor="rgba(100, 100, 200, 0.3)"
          >
            <div className="text-white font-poppins flex flex-col xl:flex-row gap-4 sm:gap-8 xl:gap-16 cursor-default">
              <div>
                <img
                  src={ecoride}
                  alt="ecoride"
                  className="w-full md:max-w-lg lg:max-w-xl xl:max-w-[400px] h-[150px] xs:h-[200px] sm:h-[250px] xl:h-[300px] rounded-md sm:rounded-lg object-left xl:object-center object-cover"
                />
              </div>
              <div className="flex flex-col gap-5 xl:gap-0 justify-between py-2 max-w-lg lg:max-w-xl">
                <div className="font-light">
                  <h1 className="text-xl xs:text-2xl sm:text-3xl mb-3">
                    Ecoride Carpooling
                  </h1>
                  <p className="text-xs xs:text-sm sm:text-base">
                    Developed a carpooling platform with ride management,
                    authentication, authorization, profile management, and mail
                    notifications. Integrated real-time chat and interactive
                    maps for route planning using Leaflet & OpenStreetMap.
                    Ensured a fully responsive design for seamless user
                    experience across all devices.
                  </p>
                </div>
                <div className="flex gap-2 xs:gap-3">
                  {[react, tailwindcss, redux, nodejs, express, mongodb].map(
                    (tech, index) => (
                      <img
                        key={index}
                        src={tech}
                        alt={tech}
                        className="h-6 xs:h-8 sm:h-9 2xl:h-10"
                      />
                    )
                  )}
                </div>
              </div>
            </div>
          </SpotlightCard>
        </div>
      </div>
    </div>
  );
}
