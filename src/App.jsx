import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import Loader from "./components/Loader";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="bg-background bg-fixed bg-cover bg-no-repeat bg-center min-h-screen">
      {loading ? (
        <div className="flex justify-center items-center bg-black min-h-screen">
          <Loader />
        </div>
      ) : (
        <>
          <Navbar />
          <Intro />
        </>
      )}
    </div>
  );
}
