import { ImageResponse } from "next/og";
import { getLang } from "../components/_server/GetLang";
import localFont from "next/font/local";

const myFont = localFont({
  src: "../font/coc.otf",
  display: "swap",
});

export const size = {
  width: 870,
  height: 450,
};

interface Props {
  params: {
    lang: string;
  };
}

export const contentType = "image/jpeg";
const url = process.env.NEXT_PUBLIC_URL;

// current land on route, EN, AR..
// TUMBNAIL picture from public
// getting TITLE, ALT on the picture with each language

export default async function og({ params }: Props) {
  const data = await getLang(params.lang); // return: en || lang
  if (!data || !data[0]) {
    console.error(`Data is missing or empty: ${data}`); // Add this line
    return {
      title: "Not Found",
      description: "The page is not found",
    };
  }

  const BannerUrl = new URL(`${url}/coc_here.jpg`);
  console.log();

  return new ImageResponse(
    (
      <div
        className={myFont.className}
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          //   fontFamily: myFont,
          justifyContent: "center",
          backgroundImage: `url(${BannerUrl})`,
          backgroundSize: "cover",
          color: "green",
          fontSize: "5rem",
        }}
      >
        {data[0].opengraph.title}
        {/* <div>{data[0].keywords.three}</div> */}
      </div>
    ),
    size
  );
}
