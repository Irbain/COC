import { cache } from "react";

const URL = process.env.NEXT_PUBLIC_URL;

export const getLang = async (lang: string) => {
  const res = await fetch(
    `${URL}api/lang/${lang}`
    // , {
    // cache: "no-store",
    // }

    // https://www.youtube.com/watch?v=cacys-rrQN8 14:45 for cache
  );

  //   await new Promise((resolve) => setTimeout(resolve, 3000));

  if (!res.ok) {
    throw new Error("GetLang Failed !");
  } else if (!URL) {
    throw new Error("The next public URL is not here");
  }

  return res.json();
};
