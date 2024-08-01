import React from "react";
import Home from "../components/_lang/Content";
import type { Metadata } from "next";
import { cache } from "react";
import { getLang } from "../components/_server/GetLang";

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
  const data = await getLang(params.lang);

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
    alternates: {
      canonical: `${params.lang}`, //to edit
      languages: {
        en: `/${params.lang}`, // multiple one ?  /${params.lang} does not make sense
      },
    },
  };
}

// export const metadata = {
//   title: `${"fromgergordmgf"}`,
//   description: "hello this is desc",
//   keywords: ["Clash of Clans", "Gems"],
// };

// export const getOffers = cache(async () => {
//   const CPABuild =
//     "https://dqfldwpdfckt2.cloudfront.net/public/offers/feed.php?user_id=321099&api_key=cacfc4bbbaa9a3c38e239856f17ca423&s1=&s2=";

//   const res = await fetch(CPABuild);

//   if (!res.ok) {
//     throw new Error("failed to fetch");
//   }

//   return res.json();
// });

// console.log("hello");

//   const content = (
//     <div className="font-sans">
//       <h2>
//         {offers.map((offer) => {
//           return (
//             <div
//               className="flex flex-col space-between justify-center mb-5"
//               key={offer.id}
//             >
//               <h1>{offer.name}</h1>
//               <p>please : {offer.conversion}</p>
//               <a href={offer.url} target="_blank">
//                 Go to Offer
//               </a>
//               {/* <img className="w-[40px] h-[40px]" src={offer.network_icon}></img> */}

//               {/* <p>description: {offer.anchor}</p>
//               <p>Payout: {offer.user_payout}</p> */}
//             </div>
//           );
//         })}
//       </h2>
//     </div>
//   );

//   return <>{content}</>;
// }

//export const allOffers = async () => {};
