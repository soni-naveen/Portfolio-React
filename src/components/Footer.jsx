import React from "react";
import { GoHeartFill } from "react-icons/go";

export default function Footer() {
  return (
    <div>
      <div className="h-[1px] bg-white/30 w-[90%] mx-auto mb-5" />
      <div className="mb-5 w-[90%] mx-auto flex justify-center">
        <p className="text-neutral-300 flex items-center gap-1.5 text-xs xs:text-sm sm:text-base font-poppins">
          Made with <GoHeartFill className="text-base sm:text-lg text-red-500" /> by Me
        </p>
      </div>
    </div>
  );
}
