import "./globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";
import { getLangs } from "./components/_server/GetLangs";

// Font files can be colocated inside of `app`
const myFont = localFont({
  src: "./font/coc.otf",
  display: "swap",
});

const url = process.env.NEXT_PUBLIC_URL;
const google = "324234";
if (!url) {
  throw new Error("NEXT_PUBLIC_URL is not defined.");
}

if (!google) {
  throw new Error("GOOGLE environment variable is not defined.");
}
export const metadata: Metadata = {
  metadataBase: new URL(url),
  title: {
    default: "Clash of CLans Gems Giveaway", // The default title used when a specific page doesn't provide its own title.
    template: "%s",
    //     Page Title: "About Us"
    //     Template: "%s | Gems"
    //     Resulting Title: "About Us | Gems"
  },
  verification: {
    google: `google-site-verification=${google}`, // update
  },
};

export async function generateStaticParams() {
  const languages = ["en", "ru", "ar", "uz"]; // List of languages

  const paths = languages.map((lang) => ({
    lang, // This should match the dynamic [lang] parameter
  }));

  return paths.map((path) => ({
    params: path,
  }));
}

// export const generateStaticParams = () => {
//   // dynamic is above
//   const paths = [
//     { lang: "en" },
//     { lang: "ru" },
//     { lang: "ar" },
//     { lang: "uz" },
//   ];

//   return paths.map((path) => ({
//     params: path,
//   }));
// };

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  const langValue = params.lang || "en";
  // // Log the `langValue` to see what is being rendered
  // console.log("Lang value in RootLayout:", langValue);

  // // Also log whether this is server-side or client-side
  // if (typeof window === "undefined") {
  //   console.log("Rendering on the server with lang:", langValue);
  // } else {
  //   console.log("Rendering on the client with lang:", langValue);
  // }
  return (
    <html lang={langValue}>
      <body className={myFont.className}>
        <div className="bg-bg">{children}</div>
      </body>
    </html>
  );
}
