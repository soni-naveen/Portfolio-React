import React from "react";
import Lottie from "lottie-react";
import Animation from "../../assets/Aboutme.json";

const AboutmeAnimate = () => {
  return (
    <Lottie
      animationData={Animation}
      className="mt-5 md:-ml-12 lg:-ml-14 xl:-ml-20 md:h-[400px] md:w-[400px] lg:w-[500px] lg:h-[500px] xl:h-[600px] xl:w-[600px]"
    />
  );
};

export default AboutmeAnimate;
