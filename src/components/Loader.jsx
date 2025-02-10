import React, { useState, useEffect } from "react";
import Lottie from "lottie-react";
import loadingAnimation from "../assets/Loader.json";

const Loader = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 4000); // Hide after 5 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`transition-opacity duration-1000 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <Lottie
        animationData={loadingAnimation}
        className="h-60 w-60 sm:h-80 sm:w-80"
      />
    </div>
  );
};

export default Loader;
