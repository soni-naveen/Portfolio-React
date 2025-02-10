import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import loadingAnimation from "../assets/Loader.json";

export default function Loader() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex justify-center items-center h-screen w-full bg-black">
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 1 }}
        className="transition-opacity duration-1000"
      >
        <Lottie
          animationData={loadingAnimation}
          className="h-60 w-60 sm:h-80 sm:w-80"
        />
      </motion.div>
    </div>
  );
}
