import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import Contact from "./components/Contact";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Aboutme from "./components/Aboutme";
import background from "./assets/background.svg";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <div>
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
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="min-h-screen"
          >
            <Navbar />
            <Intro />
            <Skills />
            <Projects />
            <Aboutme />
            <Contact />

            {/*=========== FOOTER LINKS ===========*/}
            <div className="h-[1px] bg-white/30 w-[90%] mx-auto mb-5" />
            <div className="text-gray-400 flex justify-center items-center gap-5 mb-7">
              <a href="https://www.linkedin.com/in/soni-naveen" target="_blank">
                <FaLinkedin className="text-xl sm:text-2xl hover:cursor-pointer hover:drop-shadow-my hover:text-white" />
              </a>
              <a href="https://www.instagram.com/naveenn.soni" target="_blank">
                <FaInstagram className="text-xl sm:text-2xl hover:cursor-pointer hover:drop-shadow-my hover:text-white" />
              </a>
              <a href="https://github.com/soni-naveen" target="_blank">
                <FaGithub className="text-xl sm:text-2xl hover:cursor-pointer hover:drop-shadow-my hover:text-white" />
              </a>
              <a href="https://twitter.com/naveennsoni" target="_blank">
                <FaXTwitter className="text-xl sm:text-2xl hover:cursor-pointer hover:drop-shadow-my hover:text-white" />
              </a>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
