import React from "react";
import Home from "../components/_lang/Content";
import type { Metadata } from "next";
import { cache } from "react";
import { getLang } from "../components/_server/GetLang";
import RootLayout from "../layout";

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

export default async function ServerComp({ params }: Props) {
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

  if (!data)
    return {
      title: "Not Found",
      description: "The page is not found",
    };

  return {
    title: `${data[0].title}`,
    description: `${data[0].description}`,
    keywords: ["Clash of Clans", "Gems"], //data[0].keywords.array
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
