import React from "react";
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";

export default function App() {
  return (
    <div className="bg-background bg-fixed bg-cover bg-no-repeat bg-center min-h-screen">
      <Navbar />
      <Intro />
    </div>
  );
}
