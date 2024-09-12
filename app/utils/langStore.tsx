import { create } from "zustand";
import { cache } from "react";

const URL = process.env.NEXT_PUBLIC_URL;

export type GenerationState = {
  langs: {};
  //   langs: { en: string; fr: string  };
  setLangs: (isLoading: boolean) => void;
  getLang: (lang: string) => Promise<any>;
};

export const useLangStore = create<GenerationState>((set) => ({
  langs: { en: "en", fr: "fr", ru: "ru", ar: "ar", uz: "uz" }, // langs to be added here
  setLangs: (langs: {
    /** Might give an error */
  }) => set(langs),
  getLang: cache(async (lang: string) => {
    const res = await fetch(
      `${URL}api/lang/${lang}`
      //, {
      // cache: "no-store",

      // https://www.youtube.com/watch?v=cacys-rrQN8 14:45 for cache
    );

    //   await new Promise((resolve) => setTimeout(resolve, 3000));

    console.log(`${URL}api/lang/${lang}`);

    if (!res.ok) {
      throw new Error("Failed!!!!!");
    }

    return res.json();
  }),
}));
