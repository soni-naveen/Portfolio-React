import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Aboutme from "./components/Aboutme";
import background from "./assets/background.svg";
import SocialLinks from "./components/SocialLinks";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {loading ? (
        <div className="flex justify-center items-center min-h-screen">
          <Loader />
        </div>
      ) : (
        <>
          <Navbar />
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="min-h-screen backdrop-blur-[2px]"
          >
            <Intro />
            <div id="skills">
              <Skills />
            </div>
            <div id="projects">
              <Projects />
            </div>
            <div id="about">
              <Aboutme />
            </div>
            <div id="contact">
              <Contact />
            </div>

            {/*=========== FOOTER LINKS ===========*/}
            <div className="h-[1px] bg-white/30 w-[90%] mx-auto mb-5" />
            <div className=" mb-7">
              <SocialLinks />
            </div>
          </motion.div>
        </>
      )}
    </div>
  );
}
