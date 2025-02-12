import React, { useState } from "react";
import { BsArrowRightCircleFill } from "react-icons/bs";
import { toast } from "react-hot-toast";
import AnimatedContent from "./ui/Animate";
import contact from "../assets/contact.svg";

export default function Contact() {
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

    const toastId = toast.loading("Sending...");
    try {
      const response = await fetch(scriptURL, {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setName("");
        setEmail("");
        setMessage("");
        toast.success("Sent Successfully");
      } else {
        toast.error("Failed to send!");
        console.error("Failed to send message.");
      }
    } catch (error) {
      console.error("Error: ", error);
    }
    toast.dismiss(toastId);
  };

  return (
    <div className="flex flex-col-reverse lg:flex-row items-center justify-around">
      <div className="w-fit my-20">
        <h1 className="font-poppins font-bold text-clamp1 text-white mb-14">
          Let's Work Together
          <AnimatedContent
            distance={300}
            direction="horizontal"
            reverse={false}
            config={{ tension: 80, friction: 20 }}
            initialOpacity={0.2}
            animateOpacity
            scale={1.1}
            threshold={0.2}
          >
            <div className="h-2 rounded-full w-[2em] bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500" />
          </AnimatedContent>
        </h1>
        <form
          onSubmit={handleSubmit}
          className="flex font-poppins flex-col space-y-5"
        >
          <input
            required
            placeholder="Full Name"
            type="text"
            name="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-[calc(100vw-70px)] xs:w-[calc(100vw-100px)] sm:w-[500px] bg-white/10 backdrop-blur-xl py-3 md:py-4 px-5 outline-none rounded text-white placeholder:text-white/30"
          />
          <input
            required
            placeholder="Email address"
            type="email"
            name="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-[calc(100vw-70px)] xs:w-[calc(100vw-100px)] sm:w-[500px] bg-white/10 backdrop-blur-xl py-3 md:py-4 px-5 outline-none rounded text-white placeholder:text-white/30"
          />
          <textarea
            required
            placeholder="Message"
            rows={4}
            name="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-[calc(100vw-70px)] xs:w-[calc(100vw-100px)] sm:w-[500px] bg-white/10 backdrop-blur-xl py-3 md:py-4 px-5 outline-none rounded resize-none text-white placeholder:text-white/30"
          ></textarea>
          <button
            type="submit"
            className="mt-3 flex justify-between items-center bg-white/80 w-32 px-2 py-1 rounded-full cursor-pointer"
          >
            <span className="text-black font-medium ml-2">SEND</span>
            <BsArrowRightCircleFill className="text-blue-700 text-2xl" />
          </button>
        </form>
      </div>
      <div>
        <img
          src={contact}
          alt="contact"
          className="h-[250px] xs:h-[300px] sm:h-[360px] xl:h-[400px]"
        />
      </div>
    </div>
  );
}
