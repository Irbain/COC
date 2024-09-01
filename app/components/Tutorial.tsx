import {
  PiBracketsCurlyFill,
  PiPlusCircleFill,
  PiGiftLight,
  PiAddressBookLight,
} from "react-icons/pi";
import { FaCloudDownloadAlt, FaGem } from "react-icons/fa";
import { GiGems } from "react-icons/gi";
import React from "react";

export default function Tutorial({ scrolToRef, content }: any, ref: any) {
  return (
    <section
      ref={scrolToRef}
      className="flex flex-col justify-around gap-10 w-screen mt-[8vh]"
    >
      <div></div>

      <div className="flex flex-col items-center justify-center ">
        <h2 className="text-2xl text-success">{content.title}</h2>
        <p className="w-4/5 md:w-4/5 sm:w-4/5 xs:w-4/5 xxs:5/5">
          {content.description}
        </p>
      </div>
      <div className="flex justify-between w-full sm:flex-col sm:gap-6 overflow-hidden">
        <div className="flex flex-col justify-between text-center">
          <div className="flex self-center">
            <PiAddressBookLight className="w-[64px] h-[64px]  text-success" />
          </div>
          <h2 className="font-bold text-xl">{content.step.one.title}</h2>
          <p className="mx-[3%]">{content.step.one.description}</p>
        </div>

        <div className="flex flex-col justify-between text-center">
          <div className="flex self-center">
            <GiGems className="w-[64px] h-[64px] text-success" />
          </div>
          <h2 className="font-bold text-xl ">{content.step.two.title}</h2>
          <p className="mx-[3%]">{content.step.two.description}</p>
        </div>

        <div className="flex flex-col justify-between text-center">
          <div className="flex self-center">
            <PiGiftLight className="w-[64px] h-[64px] text-success" />
          </div>
          <h2 className="font-bold text-xl ">{content.step.three.title}</h2>
          <p className="mx-[3%]">{content.step.three.description}</p>
        </div>
      </div>
    </section>
  );
}
