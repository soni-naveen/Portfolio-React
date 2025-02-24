import React from "react";
import AboutmeAnimate from "./AboutmeAnimate";

export default function Aboutme() {
  return (
    <div id="about" className="py-10">
      <div className="w-[80%] mx-auto">
        <h1 className="text-clamp3 font-bold font-poppins text-white">
          <div>About Me</div>
          <div className="h-2 rounded-full w-[2em] bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500" />
        </h1>
        <AboutmeAnimate />
      </div>
    </div>
  );
}
