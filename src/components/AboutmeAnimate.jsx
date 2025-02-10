import React from "react";
import Lottie from "lottie-react";
import Animation from "../assets/Aboutme.json";

const AboutmeAnimate = () => {
  return (
    <Lottie
      animationData={Animation}
      className="h-40 w-40 sm:h-52 sm:w-52 lg:h-[600px] lg:w-[600px]"
    />
  );
};

export default AboutmeAnimate;
