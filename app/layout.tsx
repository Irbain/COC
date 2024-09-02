import "./globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";

interface Props {
  params: {
    lang: string;
  };
}

// Font files can be colocated inside of `app`
const myFont = localFont({
  src: "./font/coc.otf",
  display: "swap",
});

const url = process.env.NEXT_PUBLIC_URL || "http://www.localhost:3000/";
const google = process.env.GOOGLE;

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

// export default function Page({ params }: { params: { slug: string } }) {
//   return <div>My Post: {params.slug}</div>
// }

export default async function RootLayout({
  children,
  lang,
}: {
  children: React.ReactNode;
  lang: string;
}) {
  const langValue = lang || "en";
  return (
    <html lang={langValue}>
      <body className={myFont.className}>
        <div className="bg-bg">{children}</div>
      </body>
    </html>
  );
}
