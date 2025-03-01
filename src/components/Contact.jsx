import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import ShinyText from "./ui/ShinyText";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const scriptURL =
      "https://script.google.com/macros/s/AKfycbz8qOzPnJsPD_Pl2bMDF2ZCgOf6WQn1_yXByNabnSuLPPxOacUVLtLlOxr6SqaYyBaYSg/exec";
    const formData = new FormData();
    formData.append("Name", name);
    formData.append("E-mail", email);
    formData.append("Message", message);

    // const toastId = toast.loading("Sending...");
    try {
      setLoading(true);
      const response = await fetch(scriptURL, {
        method: "POST",
        body: formData,
      });
      if (response.ok) {
        setName("");
        setEmail("");
        setMessage("");
        setLoading(false);
        toast.success("Sent Successfully");
      } else {
        toast.error("Failed to send!");
        console.error("Failed to send message.");
      }
    } catch (error) {
      console.error("Error: ", error);
      setLoading(false);
    }
    // toast.dismiss(toastId);
  };

  return (
    <div id="contact" className="mt-10 lg:mb-20">
      <h1 className="font-poppins font-bold text-clamp3 text-white mb-16 w-[80%] mx-auto">
        <ShinyText
          text="Let's Work Together"
          disabled={false}
          speed={3}
          className="custom-class"
        />
        <div className="h-2 rounded-full w-[2em] bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500" />
      </h1>
      <div className="flex flex-col gap-14 lg:gap-24 xl:gap-80 lg:flex-row items-center justify-between xl:justify-normal w-[80%] mx-auto">
        <div className="w-fit">
          <form
            onSubmit={handleSubmit}
            className="flex font-poppins flex-col gap-5"
          >
            <input
              required
              placeholder="Full Name"
              type="text"
              name="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-[calc(100vw-70px)] xs:w-[calc(100vw-100px)] sm:w-[500px] backdrop-blur-sm bg-gray-700/40 py-3 sm:py-3.5 px-4 outline-none rounded text-white placeholder:text-white/30"
            />
            <input
              required
              placeholder="Email address"
              type="email"
              name="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-[calc(100vw-70px)] xs:w-[calc(100vw-100px)] sm:w-[500px] backdrop-blur-sm bg-gray-700/40 py-3 sm:py-3.5 px-4 outline-none rounded text-white placeholder:text-white/30"
            />
            <textarea
              required
              placeholder="Your Message"
              rows={4}
              name="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-[calc(100vw-70px)] xs:w-[calc(100vw-100px)] sm:w-[500px] backdrop-blur-sm bg-gray-700/40 py-3 sm:py-3.5 px-4 outline-none rounded resize-none text-white placeholder:text-white/30"
            ></textarea>
            <button
              type="submit"
              className="mt-3 flex items-center bg-slate-300/90 w-full justify-center py-2 rounded-md cursor-pointer active:scale-95 transition-all"
            >
              <span className="text-black font-semibold">
                {loading ? "Sending..." : "Send Message"}
              </span>
            </button>
          </form>
        </div>
        <div className="flex flex-col gap-6 sm:gap-8 pt-3 sm:pt-5 pb-10 w-[calc(100vw-70px)] xs:w-[calc(100vw-100px)] sm:w-[500px] lg:w-auto">
          <a
            href="mailto:naveennsonii@gmail.com"
            target="_blank"
            className="w-fit"
          >
            <div className="group hover:cursor-pointer flex gap-5">
              <SiGmail className="text-2xl sm:text-3xl text-gray-300 transition-all group-hover:text-white" />
              <p className="text-gray-300 text-sm sm:text-base font-poppins hover:underline hover:text-white">
                naveennsonii@gmail.com
              </p>
            </div>
          </a>
          <a
            href="https://www.linkedin.com/in/soni-naveen"
            target="_blank"
            className="w-fit"
          >
            <div className="group hover:cursor-pointer flex gap-5">
              <FaLinkedin className="text-2xl sm:text-3xl text-gray-300 transition-all group-hover:text-white" />
              <p className="text-gray-300 text-sm sm:text-base font-poppins hover:underline hover:text-white">
                soni-naveen
              </p>
            </div>
          </a>
          <a
            href="https://www.instagram.com/naveenn.soni"
            target="_blank"
            className="w-fit"
          >
            <div className="group hover:cursor-pointer flex gap-5">
              <FaInstagram className="text-2xl sm:text-3xl text-gray-300 transition-all group-hover:text-white" />
              <p className="text-gray-300 text-sm sm:text-base font-poppins hover:underline hover:text-white">
                naveenn.soni
              </p>
            </div>
          </a>
          <a
            href="https://github.com/soni-naveen"
            target="_blank"
            className="w-fit"
          >
            <div className="group hover:cursor-pointer flex gap-5">
              <FaGithub className="text-2xl sm:text-3xl text-gray-300 transition-all group-hover:text-white" />
              <p className="text-gray-300 text-sm sm:text-base font-poppins hover:underline hover:text-white">
                soni-naveen
              </p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
