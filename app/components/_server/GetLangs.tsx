import { cache } from "react";

const URL = process.env.NEXT_PUBLIC_URL;

export const getLangs = cache(async () => {
  const res = await fetch(`${URL}/api/lang`);

  if (!res.ok) {
    throw new Error("Failed!!!!!");
  }

  return res.json();
});
