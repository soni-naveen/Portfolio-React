import React from "react";
import Lottie from "lottie-react";
import Animation from "../assets/Aboutme.json";

const AboutmeAnimate = () => {
  return (
    <Lottie
      animationData={Animation}
      className="mt-5 h-60 w-60 sm:h-72 sm:w-72 md:h-[300px] md:w-[300px] lg:w-[400px] lg:h-[400px] xl:h-[500px] xl:w-[500px]"
    />
  );
};

export default AboutmeAnimate;
