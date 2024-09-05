import React from "react";
import Home from "../components/_lang/Content";
import type { Metadata } from "next";
import { getLang } from "../components/_server/GetLang";

// FOR CONSTANT METADATA
// export const metadata: Metadata = {
//   title: "This is title",
//   description: "Description section i this one",
// };

interface Props {
  params: {
    lang: string;
  };
}

export default function ServerComp({ params }: Props) {
  // removed async
  //const data = await getLang(params.lang); // params.lang prints: en

  //const offers = await getOffers();
  //console.log(offers);
  //const [posts, users] = await Promise.all([getLangs(), getOffers()]);

  return (
    <>
      <Home currentLang={params.lang}></Home>
      {/* alldata={data[0]} */}
    </>
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
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
    keywords: ["Clash of Clans", "Gems"],
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
