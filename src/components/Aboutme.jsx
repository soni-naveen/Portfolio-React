import React from "react";
import AnimatedContent from "../components/ui/Animate";
import AboutmeAnimate from "./AboutmeAnimate";

export default function Aboutme() {
  return (
    <div className="my-20">
      <div className="w-[80%] mx-auto">
        <h1 className="text-clamp3 font-bold font-poppins text-white">
          <AnimatedContent
            distance={150}
            direction="horizontal"
            reverse={false}
            config={{ tension: 80, friction: 20 }}
            initialOpacity={0.2}
            animateOpacity
            scale={1.1}
            threshold={0.2}
          >
            <div>About Me</div>
          </AnimatedContent>
          <AnimatedContent
            distance={200}
            direction="horizontal"
            reverse={false}
            config={{ tension: 80, friction: 20 }}
            initialOpacity={0.2}
            animateOpacity
            scale={1.1}
            threshold={0.2}
          >
            <div className="h-2 rounded-full w-[2em] bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500" />
          </AnimatedContent>
        </h1>
        <AboutmeAnimate />
      </div>
    </div>
  );
}
