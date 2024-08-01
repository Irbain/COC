import React from "react";
import { IoSettingsSharp } from "react-icons/io5";
import { BiSolidCheckCircle } from "react-icons/bi";
import { useState, useEffect, useRef } from "react";
import LeadsComponent from "../cpa/adblue/LeadsComponent";
import { yupToFormErrors } from "formik";
import NoWorkResult from "postcss/lib/no-work-result";
import { doesNotThrow } from "assert";
import { FaGoodreads, FaTheRedYeti } from "react-icons/fa";
import { backdropClasses } from "@mui/material";

const delay = 90;

const Verification = ({ setShow, show, wait, offers, cta }: any) => {
  const conversionRef = useRef(null);
  // const [offers, setOffers] = useState({});

  // const isConversion = () => {
  //   fetch(
  //     `https://d1tjcziy9n8hnk.cloudfront.net/public/external/check2.php?testing=1&callback=?`
  //   )
  //     .then((res) => res.json())
  //     .then((data) => {
  //       conversionRef.current = data;

  //       console.log(conversionRef.current, "this have to show an array");
  //     });
  // };

  // useEffect(() => {
  //   isConversion();
  //   const intervalId = setInterval(isConversion, 60000);
  //   return () => clearInterval(intervalId);
  // }, []);

  useEffect(
    () => {
      let timer1 = setTimeout(() => setShow(true), delay * 1000); //shows the button next

      // this will clear Timeout
      // when component unmount like in willComponentUnmount
      // and show will not change to true
      return () => {
        clearTimeout(timer1);
      };
    },
    // useEffect will run only one time with empty []
    // if you pass a value to array,
    // like this - [data]
    // than clearTimeout will run every time
    // this value changes (useEffect re-run)

    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  return show ? (
    <>
      {/* ✔️ */}
      <div className="svg-container flex flex-col items-center justify-center mt-[10%]">
        <div className="">
          <svg
            className="ft-green-tick"
            xmlns="http://www.w3.org/2000/svg"
            height="100"
            width="100"
            viewBox="0 0 48 48"
            aria-hidden="true"
          >
            <circle className="circle" fill="#5bb543" cx="24" cy="24" r="22" />
            <path
              className="tick"
              fill="none"
              stroke="#FFF"
              stroke-width="6"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-miterlimit="10"
              d="M14 27l5.917 4.917L34 17"
            />
          </svg>
        </div>
      </div>
      {/* ✔️ */}
    </>
  ) : (
    <div>
      <div className="font-sans mt-10">
        {/* EDIT MARGIN TOP */}
        {offers.length != 0 ? (
          <div className="flex items-center justify-center pt-2">
            <h1>
              {cta} {/* ✔️  or*/}
            </h1>
            <LeadsComponent />
          </div>
        ) : null}

        <div>
          {offers.length != 0 ? (
            offers.map((offer: any) => {
              return (
                <div
                  className="flex flex-col hover:text-white space-between justify-center mt-4 mb-5 "
                  key={offer.id}
                >
                  <a
                    className="flex items-center justify-center p-2 mx-[6%] bg-white hover:bg-[#949494] active:bg-step rounded-md shadow-md"
                    href={offer.url}
                    target="_blank"
                  >
                    <h1>{offer.name}</h1>
                    <p className="ml-2">{offer.conversion}</p>
                  </a>
                  {/* <img className="w-[40px] h-[40px]" src={offer.network_icon}></img> */}
                  {/* <p>description: {offer.anchor}</p>
              <p>Payout: {offer.user_payout}</p> */}
                </div>
              );
            })
          ) : (
            <div className="flex flex-col items-center justify-center basis-4/6 spin mt-[6%]">
              <div className="animate-pulse">
                <IoSettingsSharp size={80} class="text-step shd" />
              </div>
              <p className="loading text-step">{wait}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Verification;
