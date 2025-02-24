import React from "react";
import SpotlightCard from "./ui/SpotlightCard";

export default function Projects() {
  return (
    <div id="projects" className="py-10">
      <div className="w-[80%] mx-auto">
        <h1 className="text-clamp3 font-bold font-poppins text-white">
          <div>Projects</div>
          <div className="h-2 rounded-full w-[2em] bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500" />
        </h1>
        <div className="py-16">
          <SpotlightCard
            className="custom-spotlight-card"
            spotlightColor="rgba(100, 100, 200, 0.3)"
          >
            // Content goes here
          </SpotlightCard>
        </div>
      </div>
    </div>
  );
}
