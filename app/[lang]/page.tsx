import React from "react";
import Home from "../components/_lang/Content";
import type { Metadata } from "next";
import { getLang } from "../components/_server/GetLang";

interface Props {
  params: {
    lang: string;
  };
}

export default function ServerComp({ params }: Props) {
  return (
    <>
      <Home currentLang={params.lang}></Home>
      {/* alldata={data[0]} */}
    </>
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // return {
  //   title: "Not Found",
  //   description: "The page is not found",
  // };
  const data = await getLang(params.lang);

  if (!data || !data[0]) {
    console.error(`Data is missing or empty: ${data}`); // Add this line
    return {
      title: "Not Found",
      description: "The page is not found",
    };
  }

  if (!data[0].title || !data[0].description) {
    console.error(
      `Data is missing expected properties: ${JSON.stringify(data[0])}`
    ); // Add this line
    return {
      title: "Metadata Error",
      description: "Unable to generate metadata",
    };
  }

  return {
    title: data[0].title,
    description: data[0].description,
    //keywords: Object.values(data[0].keywords), // must be mapped
    alternates: {
      canonical: `/en`,
      languages: {
        en: `/en`,
        ar: `/ar`,
        ru: `/ru`,
        uz: `/uz`,
      },
    },
  };
}
