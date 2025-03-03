import React from "react";
import SpotlightCard from "./ui/SpotlightCard";
import Animate from "./ui/Animate";
import ecoride from "../assets/projects/ecoride.jpg";
import haze from "../assets/projects/haze.jpg";
import tictactoe from "../assets/projects/tictactoe.jpg";
import esocial from "../assets/projects/esocial.jpg";
import tailwindcss from "../assets/skills/tailwindcss.svg";
import mongodb from "../assets/skills/mongodb.svg";
import express from "../assets/skills/express.svg";
import react from "../assets/skills/react.svg";
import nodejs from "../assets/skills/nodejs.svg";
import redux from "../assets/skills/redux.svg";
import html from "../assets/skills/html.svg";
import css from "../assets/skills/css.svg";
import javascript from "../assets/skills/javascript.svg";
import { FiExternalLink } from "react-icons/fi";

export default function Projects() {
  return (
    <div id="projects" className="pt-10">
      <div className="w-[80%] mx-auto">
        <h1 className="text-clamp3 font-bold font-poppins text-white">
          <div>Projects</div>
          <div className="h-2 rounded-full w-[2em] bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500" />
        </h1>
        <div className="pt-10 sm:pt-16 pb-6 sm:pb-8 max-w-6xl mx-auto w-fit space-y-14">
          <Animate
            distance={150}
            direction="vertical"
            reverse={false}
            config={{ tension: 100, friction: 20 }}
            initialOpacity={0.2}
            animateOpacity
            scale={1.1}
            threshold={0.2}
          >
            <SpotlightCard
              className="custom-spotlight-card"
              spotlightColor="rgba(100, 100, 200, 0.3)"
            >
              <div className="text-white font-poppins flex flex-col xl:flex-row gap-4 sm:gap-8 xl:gap-16">
                <div>
                  <img
                    src={ecoride}
                    alt="ecoride"
                    className="w-full md:max-w-lg lg:max-w-xl xl:max-w-[400px] h-[150px] xs:h-[200px] sm:h-[250px] xl:h-[280px] rounded-md sm:rounded-lg object-left xl:object-center object-cover"
                  />
                </div>
                <div className="flex flex-col gap-7 xl:gap-0 justify-between py-2 max-w-lg lg:max-w-xl">
                  <div className="font-light">
                    <a href="https://theecoride.in" target="_blank">
                      <h1 className="font-medium text-xl xs:text-2xl sm:text-3xl mb-3 flex items-center gap-2 sm:gap-3 hover:underline">
                        EcoRide
                        <FiExternalLink className="text-lg xs:text-xl sm:text-2xl text-cyan-400" />
                      </h1>
                    </a>
                    <p className="text-xs xs:text-sm sm:text-base">
                      Developed a carpooling platform with ride management,
                      authentication, authorization, profile management, and
                      mail notifications. Integrated real-time chat and
                      interactive maps for route planning using Leaflet &
                      OpenStreetMap. Ensured a fully responsive design for
                      seamless user experience across all devices.
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
          </Animate>
          <Animate
            distance={150}
            direction="vertical"
            reverse={false}
            config={{ tension: 100, friction: 20 }}
            initialOpacity={0.2}
            animateOpacity
            scale={1.1}
            threshold={0.2}
          >
            <SpotlightCard
              className="custom-spotlight-card"
              spotlightColor="rgba(100, 100, 200, 0.3)"
            >
              <div className="text-white font-poppins flex flex-col xl:flex-row gap-4 sm:gap-8 xl:gap-16">
                <div>
                  <img
                    src={esocial}
                    alt="esocial"
                    className="w-full md:max-w-lg lg:max-w-xl xl:max-w-[400px] h-[150px] xs:h-[200px] sm:h-[250px] xl:h-[280px] rounded-md sm:rounded-lg object-left object-cover"
                  />
                </div>
                <div className="flex flex-col gap-7 xl:gap-0 justify-between py-2 max-w-lg lg:max-w-xl">
                  <div className="font-light">
                    <a href="https://e-social.vercel.app" target="_blank">
                      <h1 className="font-medium text-xl xs:text-2xl sm:text-3xl mb-3 flex items-center gap-2 sm:gap-3 hover:underline">
                        E-Social
                        <FiExternalLink className="text-lg xs:text-xl sm:text-2xl text-cyan-400" />
                      </h1>
                    </a>
                    <p className="text-xs xs:text-sm sm:text-base">
                      Built a MERN stack social media app with Tailwind CSS,
                      implementing JWT-based authentication, interactive post
                      creation, deletion, commenting, likes, and a friend
                      request system. Designed scalable RESTful APIs with
                      Express.js and MongoDB for efficient user interactions and
                      smooth performance.
                    </p>
                  </div>
                  <div className="flex gap-2 xs:gap-3">
                    {[react, tailwindcss, nodejs, express, mongodb].map(
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
          </Animate>
          <Animate
            distance={150}
            direction="vertical"
            reverse={false}
            config={{ tension: 100, friction: 20 }}
            initialOpacity={0.2}
            animateOpacity
            scale={1.1}
            threshold={0.2}
          >
            <SpotlightCard
              className="custom-spotlight-card"
              spotlightColor="rgba(100, 100, 200, 0.3)"
            >
              <div className="text-white font-poppins flex flex-col xl:flex-row gap-4 sm:gap-8 xl:gap-16">
                <div>
                  <img
                    src={haze}
                    alt="haze"
                    className="w-full md:max-w-lg lg:max-w-xl xl:max-w-[400px] h-[150px] xs:h-[200px] sm:h-[250px] xl:h-[280px] rounded-md sm:rounded-lg object-cover"
                  />
                </div>
                <div className="flex flex-col gap-7 xl:gap-0 justify-between py-2 max-w-lg lg:max-w-xl">
                  <div className="font-light">
                    <a href="https://hazeuae.com" target="_blank">
                      <h1 className="font-medium text-xl xs:text-2xl sm:text-3xl mb-3 flex items-center gap-2 sm:gap-3 hover:underline">
                        Haze Production
                        <FiExternalLink className="text-lg xs:text-xl sm:text-2xl text-cyan-400" />
                      </h1>
                    </a>
                    <p className="text-xs xs:text-sm sm:text-base">
                      Developed a fully responsive website for Haze UAE from
                      scratch, incorporating smooth animations and a modern
                      design to enhance user experience. Implemented a Google
                      Sheet-integrated contact form for seamless data collection
                      and management. This project was completed as part of an
                      internship, demonstrating skills in frontend development
                      and responsiveness.
                    </p>
                  </div>
                  <div className="flex gap-3 xs:gap-4">
                    {[javascript, react, tailwindcss].map((tech, index) => (
                      <img
                        key={index}
                        src={tech}
                        alt={tech}
                        className="h-6 xs:h-8 sm:h-9 2xl:h-10"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </SpotlightCard>
          </Animate>
          <Animate
            distance={150}
            direction="vertical"
            reverse={false}
            config={{ tension: 100, friction: 20 }}
            initialOpacity={0.2}
            animateOpacity
            scale={1.1}
            threshold={0.2}
          >
            <SpotlightCard
              className="custom-spotlight-card"
              spotlightColor="rgba(100, 100, 200, 0.3)"
            >
              <div className="text-white font-poppins flex flex-col xl:flex-row gap-4 sm:gap-8 xl:gap-16">
                <div>
                  <img
                    src={tictactoe}
                    alt="tictactoe"
                    className="w-full md:max-w-lg lg:max-w-xl xl:max-w-[400px] h-[150px] xs:h-[200px] sm:h-[250px] xl:h-[280px] rounded-md sm:rounded-lg object-cover"
                  />
                </div>
                <div className="flex flex-col gap-7 xl:gap-0 justify-between py-2 max-w-lg lg:max-w-xl">
                  <div className="font-light">
                    <a
                      href="https://tictactoenaveen.onrender.com"
                      target="_blank"
                    >
                      <h1 className="font-medium text-xl xs:text-2xl sm:text-3xl mb-3 flex items-center gap-2 sm:gap-3 hover:underline">
                        Tic Tac Toe
                        <FiExternalLink className="text-lg xs:text-xl sm:text-2xl text-cyan-400" />
                      </h1>
                    </a>
                    <p className="text-xs xs:text-sm sm:text-base">
                      A real-time two-player game built using WebSockets,
                      ensuring smooth and interactive gameplay with minimal
                      latency. Designed with a fully responsive interface for an
                      optimal experience across all devices. Implemented a
                      room-based matchmaking system, allowing players to
                      seamlessly create and join game sessions, enhancing
                      accessibility and user engagement.
                    </p>
                  </div>
                  <div className="flex gap-2 xs:gap-3">
                    {[html, css, nodejs, express].map((tech, index) => (
                      <img
                        key={index}
                        src={tech}
                        alt={tech}
                        className="h-6 xs:h-8 sm:h-9 2xl:h-10"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </SpotlightCard>
          </Animate>
        </div>
        <p className="text-white mt-3 border w-fit mx-auto rounded-full py-1 px-5 border-gray-400 font-poppins text-xs xs:text-sm sm:text-base text-center font-light">
          <a
            href="https://github.com/soni-naveen?tab=repositories"
            target="_blank"
          >
            view more...
          </a>
        </p>
      </div>
    </div>
  );
}
