"use client";

import Image from "next/image";
import { Formik, Field, FormikProps, useFormikContext } from "formik";
import { dataObject, props } from "../../props";
import * as yup from "yup";
import MultiStepForm, { FormStep } from "../../utils/MultiStepForm";
import InputField from "../../utils/InputField";
import Tutorial from "../Tutorial";
import Steps from "../Steps";
import Footer from "../Footer";
import { useRef, forwardRef, useState, useEffect } from "react";
import Skroll from "../Scroll";
import Verification from "../verification";
import { useLangStore } from "@/app/utils/langStore";

interface HomeProps {
  currentLang: string;
}

export default function Home({ currentLang }: HomeProps) {
  const [alldata, setAllData] = useState<Partial<dataObject> | undefined>({
    lang: "",
    title: "",
    description: "",
    buttons: "", // Specify a more appropriate type if known
    labels: "", // Specify a more appropriate type if known
    h1: {
      one: "",
      two: "",
      three: "",
    },
    radio: {
      card: {
        first: { amount: "", title: "" },
        second: { amount: "", title: "" },
        third: { amount: "", title: "" },
      },
      device: {
        ios: "",
        android: "",
        other: "",
      },
    },
    section: {
      about: {
        title: "",
        description: "",
      },
      steps: {
        one: {
          title: "",
          description: "",
        },
        two: {
          title: "",
          description: "",
        },
        three: {
          title: "",
          description: "",
        },
      },
      howTo: {
        title: "",
        description: "",
        step: {
          one: {
            title: "",
            description: "",
          },
          two: {
            title: "",
            description: "",
          },
          three: {
            title: "",
            description: "",
          },
        },
      },
    },
    footer: {
      copyrights: {
        one: "",
        two: "",
      },
    },
    other: {
      nav: "",
      cta: {
        selectgift: "",
      },
      title: {
        agreement: "",
      },
    },
    errors: {
      input: { name: "", shortname: "", terms: "", device: "" },
      email: {
        invalid: "",
        required: "",
      },
      gems: "",
      verification: "",
    },
    opengraph: {
      title: "",
      alt: "",
    },
    keywords: {
      one: "",
      two: "",
      three: "",
      four: "",
      five: "",
      six: "",
    },
  });
  const { langs, setLangs, getLang } = useLangStore();

  useEffect(() => {
    // Directly set the `lang` attribute of the HTML tag
    document.documentElement.lang = currentLang || "en"; // Default to 'en' if no lang provided
  }, []); // The effect will run every time the `lang` prop changes

  useEffect(() => {
    //zuztand
    const fetchLang = async () => {
      try {
        const data = await getLang(currentLang);

        // console.log("zustand:" + JSON.stringify(data)); //[{"id":"656f462e4cb0e05cde00392d"
        // console.log("zustand:" + JSON.stringify(data[0])); //{"id":"656f462e4cb0e05cde00392d"
        setAllData(data[0]);
      } catch (error) {
        console.error(error);
      }
    };

    fetchLang();
  }, [getLang, currentLang]);

  const CPA_URL =
    "https://d2p0pvtijhzwny.cloudfront.net/public/offers/feed.php?user_id=321099&api_key=cacfc4bbbaa9a3c38e239856f17ca423&s1=&s2=";
  const scrolToRef = useRef();
  const accent = "accent-[#898989d8]";
  const [show, setShow] = useState(false);
  const [offers, setOffers] = useState([]);
  const offersRef = useRef([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(CPA_URL);
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await res.json();

        if (data.length > 3) {
          setOffers(data.slice(0, 3));
          offersRef.current = data.slice(0, 3);
          console.log(offersRef.current, "sliced");
        } else {
          setOffers(data);
          offersRef.current = data || ""; // amplify
        }
      } catch (error) {
        console.error("Error fetching offers:", error);
      }
    };

    fetchData();
  }, [currentLang]); // Empty dependency array to run only once on the client-side

  return (
    <div className="w-screen p-0 m-0">
      <main className="z-10 flex min-h-screen flex-col items-center justify-between p-0 m-0 h-screen w-screen box-shadow shadow-2xl">
        <div>
          <Skroll
            scrolToRef={scrolToRef}
            text={alldata?.other?.nav ?? "how it work"}
          />
          <div className="select-none absolute top-0 left-0 right-0 w-screen h-screen z-1">
            <Image
              priority={false}
              className="pointer-events-none w-screen h-full"
              alt=""
              src="/clash-of-clans-giants.jpg"
              fill
              //objectFit="cover"
              //objectPosition="center"
              quality={40}
              loading="lazy"
            />
          </div>

          {/* center and edit h */}
          <div
            className="mt-[15%] sm:mt-[25%] w-[90vw] sm:h-[60vh] h-[70vh]
          min-h-[250px] max-w-3xl lg:max-w-6xl max-h-[800px] rounded-xl drop-shadow-[0_15px_15px_#000000] 
          bg-gradient-to-t from-[#C47D3A] via-[#FEC06B] to-[#FFEE61] p-[3px]"
          >
            <section
              className="flex flex-col
          text-center z-10 bg-bg
          w-full h-full rounded-xl border-black border-[0.3px]
          "
            >
              <div className=" flex justify-center">
                <Image
                  priority={false}
                  className="pointer-events-none select-none -translate-y-3/4 -mb-9 drop-shadow-[0_10px_5px_#000000] w-[15vw] md:w-[16vw] sm:w-[30vw] xs:w-[30vw] xxs:w-[30vw]
                   h-auto"
                  alt=""
                  src="/coc_logo.png"
                  width={300}
                  height={200}
                />
              </div>
              <h1
                className="select-none drop-shadow-[1px_2px_0.1px_#000000]
              text-white bg-clip-text bg-gradient-to-r from-[#C47D3A] via-[#FEC06B] to-[#FFEE61] "
              >
                {alldata?.h1?.one ?? ""}
              </h1>
              <MultiStepForm
                buttonsTitles={alldata?.buttons ?? ""}
                show={show}
                initialValues={{
                  email: "",
                  input: "",
                  agreement: false,
                  checked: [],
                  devices: "",
                  gems: "",
                  checkedGems: false,
                }}
                onSubmit={(values) => {
                  alert(JSON.stringify(values, null, 2));
                }}
              >
                {/* GEMS SELECTION   */}
                <FormStep
                  stepName="gems"
                  validationSchema={yup.object({
                    gems: yup
                      .string()
                      .required(
                        `${alldata?.errors?.gems ?? "Select An Option"}`
                      ),
                  })}
                >
                  {/* <div>{data[0].name}</div> */}
                  <h2 className=" select-none text-sm absolute top-[22%] left-0 right-0 goldMask">
                    {alldata?.other?.cta?.selectgift ?? ""}
                  </h2>
                  <div
                    className="mx-5 sm:mx-3 xs:mx-2 xxs:mx-0
                mt-[5%]"
                  >
                    {/* className="w-[calc(100%-60px)]" */}
                    <section className="grid grid-cols-3 gap-4 ">
                      {/* add flex-shrink-0  xs:mx-1 sm:mx-3 md:mx-9 lg:mx-20 
                xxs:flex-col xxs:gap-0 xxs:h-[10%]*/}
                      <label className="w-full h-full">
                        <Field
                          className="hidden peer"
                          type="radio"
                          name="gems"
                          value="1200"
                        />
                        <GemCard
                          amount={alldata?.radio?.card.first.amount ?? " "}
                          text={alldata?.radio?.card.first.title ?? " "}
                          img="/pile_of_gems.png"
                          className=" peer-checked:bg-gold"
                          quality={50}
                        />
                      </label>

                      <label className="w-full h-full">
                        <Field
                          className="hidden peer"
                          type="radio"
                          name="gems"
                          value="2500"
                        />
                        <GemCard
                          amount={alldata?.radio?.card?.second?.amount ?? ""}
                          text={alldata?.radio?.card?.second?.title ?? ""}
                          img="/sack_of_gems.png"
                          className="peer-checked:bg-gold"
                          quality={50}
                        />
                      </label>

                      <label
                        className="w-full h-full
                  "
                      >
                        <Field
                          className="hidden peer"
                          type="radio"
                          name="gems"
                          value="6500"
                        />
                        <GemCard
                          amount={alldata?.radio?.card?.third?.amount ?? ""}
                          text={alldata?.radio?.card?.third?.title ?? ""}
                          img="/box_of_gems.png"
                          className="peer-checked:bg-gold"
                          quality={50}
                        />
                      </label>
                    </section>
                  </div>
                </FormStep>

                {/* input step */}
                <FormStep
                  stepName="input"
                  onSubmit={() => {}}
                  validationSchema={yup.object({
                    input: yup
                      .string()
                      .required(
                        `${alldata?.errors?.input?.name ?? "Name is Required"}`
                      )
                      .min(
                        3,
                        `${alldata?.errors?.input?.shortname ?? "Short Name"}`
                      ),
                    agreement: yup
                      .bool()
                      .oneOf(
                        [true],
                        `${
                          alldata?.errors?.input?.terms ??
                          "Please Read The Guidelines"
                        }`
                      )
                      .required(),
                    devices: yup
                      .string()
                      .required(
                        `${
                          alldata?.errors?.input?.device ?? "Select Your Device"
                        }`
                      ),
                  })}
                >
                  <div
                    className="flex flex-col h-full w-full justify-center gap-3 md:gap-6 lg:gap-10  mt-[6%]
                "
                  >
                    <label className="select-none flex flex-col ">
                      <span className="select-none align-super goldMask">
                        {alldata?.labels?.name ?? ""}
                      </span>
                      <InputField name="input" label="input" />
                    </label>

                    {/* Devices */}
                    <div className="">
                      <label className="select-none align-super goldMask">
                        {alldata?.labels?.device ?? ""}
                      </label>
                      <div className="select-none flex justify-between items-center w-2/4 mx-auto">
                        <div className="flex items-center ">
                          <label className="cursor-pointer text-sm font-medium text-gray-900 ml-2 block">
                            <Field
                              type="radio"
                              name="devices"
                              value="iOS"
                              className={` cursor-pointer h-4 w-4 border-gray-300 align-text-top`}
                            />
                            <span className="ml-1">
                              {alldata?.radio?.device.ios ?? ""}
                            </span>
                          </label>
                        </div>

                        <div className="flex items-center ">
                          <label
                            className="select-none cursor-pointer text-sm font-medium text-gray-900
                         ml-2 block"
                          >
                            <Field
                              type="radio"
                              name="devices"
                              value="Android"
                              className={`cursor-pointer h-4 w-4 border-gray-300 align-text-top`}
                            />
                            <span className="ml-1">
                              {alldata?.radio?.device.android ?? ""}
                            </span>
                          </label>
                        </div>

                        <div className="flex items-center">
                          <label className="select-none cursor-pointer text-sm font-medium text-gray-900 ml-2 block">
                            <Field
                              type="radio"
                              name="devices"
                              value="Other"
                              className={`cursor-pointer h-4 w-4 border-gray-300 align-text-top`}
                            />
                            <span className="ml-1">
                              {/* {String.fromCharCode(65)}mine */}
                              {alldata?.radio?.device.other ?? ""}
                            </span>
                          </label>
                        </div>
                      </div>
                    </div>

                    {/* Checkbutton */}
                    <div className="flex justify-center">
                      <label className="select-none cursor-pointer text-sm font-medium text-gray-900 ">
                        <Field
                          type="checkbox"
                          name="agreement"
                          className={`cursor-pointer w-4 h-4 
            drop-shadow-[0.5px_3px_0px_#303030] rounded align-text-top `}
                        />
                        <span className="ml-2 z-10">
                          {alldata?.other?.title.agreement ?? ""}
                        </span>
                      </label>
                    </div>
                  </div>
                </FormStep>

                {/* Human Verification */}
                <FormStep
                  stepName="verification"
                  onSubmit={() => {
                    console.log("Step3");
                  }}
                >
                  <Verification
                    wait={alldata?.labels.wait ?? ""}
                    setShow={setShow} // true must be edited based on the leads Array
                    show={show}
                    offers={offersRef.current}
                    cta={alldata?.errors?.verification ?? ""}
                  />
                  {/* <Script src="/checkAdbLeads.js" /> */}
                </FormStep>

                {/* Email step */}
                <FormStep
                  stepName="email"
                  onSubmit={() => {
                    // console.log("Step2");
                  }}
                  validationSchema={yup.object({
                    email: yup
                      .string()
                      .email(`${alldata?.errors?.email?.invalid ?? ""}`)
                      .required(`${alldata?.errors?.email?.required ?? ""}`),
                  })}
                >
                  <div className="flex flex-col grow justify-center text-black">
                    <label className="flex flex-col justify-center basis-5/6">
                      <span className="goldMask">
                        {alldata?.labels?.email ?? ""}
                      </span>
                      <InputField label="label" name="email" />
                    </label>
                    <div className="flex basis-1/6 justify-center text-step grow-0">
                      {alldata?.labels?.emailNotice ?? ""}
                    </div>
                  </div>
                </FormStep>
              </MultiStepForm>
            </section>
          </div>
        </div>
      </main>

      <div className="w-screen">
        <Tutorial
          scrolToRef={scrolToRef}
          content={alldata?.section?.howTo ?? ""}
        />

        <div className="mt-[9vh] flex flex-col items-center text-center">
          <h2 className=" text-success text-2xl">
            {alldata?.section?.about?.title ?? ""}
          </h2>
          <p className="w-4/5 md:w-4/5 sm:w-4/5 xs:w-4/5 xxs:5/5">
            {alldata?.section?.about?.description ?? ""}
          </p>
          {/* <FaStarOfLife />
          <GiBeveledStar />
          <GiJusticeStar /> */}
        </div>
        <Steps content={alldata?.section ?? ""} />
        <Footer content={alldata?.footer ?? ""} />
      </div>
    </div>
  );
}

export function GemCard({ amount, text, img, quality, className }: props) {
  return (
    <div
      className={`
      select-none cursor-pointer
      flex flex-col items-center justify-center 
      !rounded-md  bg-[#4CB9D0] 
      w-full h-[100px]
      lg:h-[200px]
      min-h-[130px] max-h-[300px]
      shadow-[0_5px_5px_grey] transition ${className}

      hover:mt-[-5px] 
      hover:mb-[5px] 
      
      hover:mr-[5px] 
      hover:ml-[-5px] 
      
      hover:w-[calc(100%+10px)]
      hover:h-[calc(100%+10px)] 
    
    hover:shadow-white hover:shadow-lg
    active:bg-[#91edff]
   focus:bg-gold
    xs:w-[96%] 

     `}
    >
      {/* shadow-[inset_0_2px_0px_#00000060] */}
      <h3
        className="
        drop-shadow-one
         text-[0.8rem]
        text_shadow
       text-[#70BC20]
       
       
       xs:text-[0.7rem]
       sm:text-[0.8rem]
       md:text-[1.2rem]
       lg:text-[1.4rem]
       "
      >
        {text}
      </h3>
      <div className="flex text-white">
        <Image
          className="pointer-events-none drop-shadow-[0_1.8px_0px_#303030] w-[20px] sm:w-[15px] h-auto"
          alt=""
          src="/coc_gem_logo.png"
          height="20"
          width="30"
          quality={40}
          priority={false}
          loading="lazy"
        />
        <div
          className="drop-shadow-one
          
        xs:text-[0.7rem]
        sm:text-[0.8rem]
        md:text-[1.2rem]
        lg:text-[1.4rem]
        "
        >
          {amount}
        </div>
      </div>

      <Image
        className="pointer-events-none"
        alt=""
        src={img}
        height={90}
        width={90}
        // objectFit="cover"
        // objectPosition="center"
        quality={quality}
        priority={false}
        loading="lazy"
      />
    </div>
  );
}
