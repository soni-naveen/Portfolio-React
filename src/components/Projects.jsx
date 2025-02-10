import React from "react";
import AnimatedContent from "../components/ui/Animate";

export default function Projects() {
  return (
    <div className="w-[70%] mx-auto">
      <h1 className="text-clamp1 font-bold font-poppins text-white">
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
          <div>Projects</div>
        </AnimatedContent>
      </h1>
    </div>
  );
}
