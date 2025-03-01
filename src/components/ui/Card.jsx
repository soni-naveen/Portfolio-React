import React from "react";

export default function Card({ p1, p2, p3, p4 }) {
  return (
    <div className="rounded-3xl text-white h-full">
      <div className="uppercase text-xs xs:text-sm">
        <p className="font-poppins font-medium">{p1}</p>
        <p className="font-poppins font-medium">{p2}</p>
        <p className="font-poppins font-light mt-2">{p3}</p>
        <p className="font-poppins font-light">{p4}</p>
      </div>
    </div>
  );
}
