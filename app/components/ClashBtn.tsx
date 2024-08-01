import React from "react";
import { cn } from "../utils/cn";

interface props {
  width: number;
  height: number;
  color: string | number;
  children: any;
  type: string;
  props: any;
  onClick?: any;
  className: string;
}

const bar = "from-[#fffffff5] to-[#ffffff3b]";

const green = {
  layer1: "from-white from-5% via-[#8BBC48] via-20% to-[#578F17] to-90%",
  layer2: "from-[#CCF26B] to-[#70BC20]",
  layer3: bar,
};

const red = {
  layer1: "from-white from-5% via-[#af0c12] via-20% to-[#7a080c] to-90% ",
  layer2: "from-[#EA1019] to-[#EA1019]",
  layer3: bar,
};

const orange = {
  layer1: "from-white from-5% via-[#d48a00] via-20% to-[#7d5200] to-90%",
  layer2: "from-[#ffb835] to-[#FFA500]",
  layer3: bar,
};

const transparent = {
  layer1: "",
  layer2: "",
  layer3: bar,
};

export default function ClashBtn({
  width,
  height,
  color,
  children,
  type,
  onClick,
  className,
  props,
}: props) {
  return (
    <button
      className={cn(
        ` w-[30%] max-w-[120px] max-h-[35px] h-[35px] 
        xxs:w-[100%] xxs:max-w-[70px] xxs:ml-2 xxs:h-7 
        xs:w-[100%] xs:max-w-[80px] xs:ml-2 xs:h-7
        sm:w-[100%] sm:max-w-[100px] sm:ml-2 sm:h-8
        select-none flex justify-center content-center cursor-pointer rounded-lg  border-black border-[0.05rem] bg-gradient-to-b shadow-[0px_2px_0.5px_#0000008d] hover:shadow-[0px_1px_0.5px_#0000008d] hover:translate-y-[2px] ${className}`,
        {
          [orange.layer1]: color === "orange",
          [red.layer1]: color === "red",
          [green.layer1]: color === "green",
        }
      )}
      {...props}
      type={type}
      onClick={onClick}
    >
      <div
        className={cn(
          `relative text-center my-auto rounded-md w-[97%] h-[94%] bg-gradient-to-b`,
          {
            [orange.layer2]: color === "orange",
            [red.layer2]: color === "red",
            [green.layer2]: color === "green",
          }
        )}
      >
        <div
          className={cn(
            `relative h-[47%] m-[4%] mt-[3%] rounded-[0.3rem] bg-gradient-to-b`,
            {
              [orange.layer3]: color === "orange",
              [red.layer3]: color === "red",
              [green.layer3]: color === "green",
              [transparent.layer3]: color === "transparent",
            }
          )}
        ></div>
        <div
          className=" drop-shadow-[1px_2px_0.1px_#000000] text-white absolute top-[50%] -translate-y-2/4 left-0 right-0
         text-xs xxs:text-[0.6rem] xs:text-[0.7rem]"
        >
          {children}
        </div>
      </div>
    </button>
  );
}
