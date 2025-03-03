import React from "react";
import { motion } from "framer-motion";
import Stack from "./ui/Stack";

export default function Certifications() {
  const certifications = [
    {
      id: "01",
      title: "Developing Front-End Apps with React",
      subtitle: "Coursera",
    },
    {
      id: "02",
      title: "Advanced Web Development",
      subtitle: "Coding Ninjas",
    },
    {
      id: "03",
      title: "Introduction to CyberSecurity",
      subtitle: "Cisco",
    },
    {
      id: "04",
      title: "Fundamental Algorithms : Design & Analysis",
      subtitle: "NPTEL",
    },
    {
      id: "05",
      title: "Python : Certificate of Excellence",
      subtitle: "Coding Ninjas",
    },
  ];
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };
  const certImage = [
    {
      id: 1,
      img: "https://res.cloudinary.com/dhrsf44wi/image/upload/w_1000,q_auto,f_auto/v1740948170/Portfolio%20certficates/46acd837-9fbc-4f7b-8032-f968eb2a8725.png",
    },
    {
      id: 2,
      img: "https://res.cloudinary.com/dhrsf44wi/image/upload/w_1000,q_auto,f_auto/v1740948133/Portfolio%20certficates/6fb06f7e-cc40-45c5-a938-22023f5dc469.png",
    },
    {
      id: 3,
      img: "https://res.cloudinary.com/dhrsf44wi/image/upload/w_1000,q_auto,f_auto/v1740948092/Portfolio%20certficates/27824ae1-0815-4174-aa51-9e7b009ed6fb.png",
    },
    {
      id: 4,
      img: "https://res.cloudinary.com/dhrsf44wi/image/upload/w_1000,q_auto,f_auto/v1740947985/Portfolio%20certficates/Fundamental_Algorithms__Design_and_Analysis_tzkjfm.jpg",
    },
    {
      id: 5,
      img: "https://res.cloudinary.com/dhrsf44wi/image/upload/w_1000,q_auto,f_auto/v1740948046/Portfolio%20certficates/2454587d-ed7d-42d4-8e3b-d2f1cfb2688f.png",
    },
  ];

  return (
    <div id="certifications" className="pt-16">
      <div className="w-[80%] mx-auto">
        <h1 className="text-clamp3 font-bold font-poppins text-white">
          <div>Certifications</div>
          <div className="h-2 rounded-full w-[2em] bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500" />
        </h1>
        <div className="font-poppins flex flex-col-reverse xl:flex-row xl:gap-32 2xl:justify-start 2xl:gap-40 items-center">
          <div className="flex flex-col justify-center space-y-8 pb-5 pt-8 sm:pt-14">
            {certifications.map((cert) => (
              <motion.div
                key={cert.id}
                className="flex items-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, margin: "-50px" }}
                variants={itemVariants}
                whileHover={{ scale: 1.01 }}
              >
                <div className="bg-indigo-950 rounded-full h-12 w-12 xs:h-14 xs:w-14 sm:w-16 sm:h-16 md:w-20 md:h-20 flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-base xs:text-lg sm:text-xl md:text-2xl font-bold">
                    {cert.id}
                  </span>
                </div>
                <div className="ml-4 md:ml-6">
                  <h3 className="text-white text-sm xs:text-base sm:text-lg md:text-xl font-medium">
                    {cert.title}
                  </h3>
                  {cert.subtitle && (
                    <p className="text-gray-400 text-xs xs:text-sm sm:text-base md:text-lg">
                      {cert.subtitle}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
          <div className="pt-14 pb-5 xl:pt-0 xl:pb-0 pr-20 2xl:pr-0">
            <Stack
              randomRotation={false}
              sensitivity={150}
              sendToBackOnClick={false}
              cardDimensions={{ width: 200, height: 200 }}
              cardsData={certImage}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
