import React, { useState } from "react";
import { BsArrowRightCircleFill } from "react-icons/bs";
import { toast } from "react-hot-toast";
import ShinyText from "./ui/ShinyText";

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
    <div className="w-fit mx-auto my-20">
      <h1 className="font-poppins font-medium text-clamp1 text-white mb-10">
        <ShinyText
          text="Let's Work Together"
          disabled={false}
          speed={3}
          className="custom-class"
        />
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
  );
}
