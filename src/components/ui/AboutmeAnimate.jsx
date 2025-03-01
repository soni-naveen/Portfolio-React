import React from "react";
import Lottie from "lottie-react";
import Animation from "../../assets/Aboutme.json";

const AboutmeAnimate = () => {
  return (
    <Lottie
      animationData={Animation}
      className="-mt-10 -mb-16 xs:mt-0 xs:-mb-10 sm:mb-0 md:-ml-12 lg:-ml-14 xl:-ml-20 h-[400px] md:h-[450px] md:w-[450px] lg:w-[550px] lg:h-[550px] xl:h-[600px] xl:w-[600px]"
    />
  );
};

export default AboutmeAnimate;
