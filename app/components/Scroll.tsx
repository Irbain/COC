"use client";
import React, { useRef, forwardRef, ComponentElement } from "react";
import { IoInformationCircle } from "react-icons/io5";

interface props {
  text: string;
  scrolToRef: any;
}

export const Skroll = forwardRef(function Hea(
  { scrolToRef, text }: props,
  ref
) {
  const scroll = () => {
    console.log("hello");
    scrolToRef.current.scrollIntoView({
      behavior: "smooth",
      //block: "end",
      inline: "nearest",
    });
  };

  return (
    <button
      className=" text-white absolute top-0 right-0 mr-[1vw]  mt-[2vh] z-10 xxs:hidden xs:hidden sm:hidden"
      onClick={scroll}
    >
      {text}
    </button>
  );
});

export default Skroll;
