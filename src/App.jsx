import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Aboutme from "./components/Aboutme";
import background from "./assets/hero.svg";
import Footer from "./components/Footer";
import Cursor from "./components/ui/Cursor";

function HashRedirect() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === "/" && location.hash) {
      navigate(location.pathname, { replace: true }); // Removes any hash
    }
  }, [location, navigate]);
  return null;
}

function ScrollToTop() {
  const location = useLocation();
  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);
  return null;
}

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
        <div className="flex justify-center items-center text-white bg-[#06021d] h-[calc(100vh-50px)]">
          <Loader />
        </div>
      ) : (
        <div className="min-h-screen relative before:absolute before:inset-0 before:backdrop-blur-[2px]">
          <div className="relative">
            <ScrollToTop />
            <Cursor />
            <HashRedirect />
            <Navbar />
            <Intro />
            <Skills />
            <Projects />
            <Certifications />
            <Aboutme />
            <Contact />
            <Footer />
          </div>
        </div>
      )}
    </div>
  );
}
