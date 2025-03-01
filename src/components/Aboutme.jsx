import React from "react";
import AboutmeAnimate from "./ui/AboutmeAnimate";
import Stepper, { Step } from "./ui/Stepper";
import Card from "./ui/Card";

export default function Aboutme() {
  return (
    <div id="about" className="py-16">
      <div className="w-[80%] mx-auto">
        <h1 className="text-clamp3 font-bold font-poppins text-white">
          <div>About Me</div>
          <div className="h-2 rounded-full w-[2em] bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500" />
        </h1>
      </div>
      <div className="w-[80%] mx-auto flex flex-col xl:flex-row justify-between items-center">
        <div>
          <AboutmeAnimate />
        </div>
        <div className="flex flex-col gap-16 2xl:gap-20">
          <div className="text-white font-poppins md:text-center max-w-3xl xl:max-w-full sm:text-lg">
            I'm a dedicated MERN Stack Developer with a focus on building
            scalable, high-performance web applications. Creative and
            detail-oriented, I specialize in responsive design, crafting
            intuitive, engaging web experiences using MERN and Tailwind CSS.
          </div>
          <div>
            <Stepper
              initialStep={1}
              backButtonText="Back"
              nextButtonText="Next"
            >
              <Step>
                <Card
                  p1={"Class 10th"}
                  p2={"S.M Little Angel's Middle School, Haryana"}
                  p3={"75.8%"}
                  p4={"Central Board of Secondary Education"}
                />
              </Step>
              <Step>
                <Card
                  p1={"Class 12th"}
                  p2={"Golden Public School, Haryana"}
                  p3={"76% (Non-medical)"}
                  p4={"Central Board of Secondary Education"}
                />
              </Step>
              <Step>
                <Card
                  p1={"COMPUTER SCIENCE ENGINEERING"}
                  p2={"Chitkara University (CUIET), Punjab"}
                  p3={"CGPA : 9.33"}
                  p4={"sept 2021 - July 2025"}
                />
              </Step>
              <Step>
                <Card p1={"Stay tuned for what's next!"} />
              </Step>
            </Stepper>
          </div>
        </div>
      </div>
    </div>
  );
}
