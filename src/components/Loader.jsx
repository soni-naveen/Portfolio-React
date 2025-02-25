import React, { useState, useEffect } from "react";
import SplitText from "./ui/SplitText";
import { motion } from "framer-motion";

export default function Loader() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 1 }}
      className="transition-opacity duration-1000 text-center px-5"
    >
      <SplitText
        text="Welcome to My Portfolio"
        className="text-2xl xxs:text-3xl xs:text-4xl md:text-5xl font-poppins font-semibold"
        delay={100}
        animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
        animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
        easing="easeOutCubic"
        threshold={0.2}
        rootMargin="-50px"
      />
    </motion.div>
  );
}
