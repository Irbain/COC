// // import { getPostBySlug } from "@/lib/getData";
// import { ImageResponse } from "next/server";
// import Banner from "@/public/clash-of-clans-giants.jpg";
// import Image from "next/image";

// export const size = {
//   width: 900,
//   height: 450,
// };

// export const contentType = "image/jpeg";

// interface Props {
//   params: {
//     slug: string;
//   };
// }

// export default async function og({ params }: Props) {
//   //   const post = await getPostBySlug(params.slug);

//   const date = new Date();

//   return new ImageResponse(
//     (
//       <div tw="relative flex items-center justify-center">
//         <Image
//           src={Banner}
//           alt={"finsk"}
//           // src={post?.bannerUrl} alt={post?.title}
//         />
//         <div tw="absolute flex bg-black opacity-50 inset-0 " />
//         <div tw="absolute flex items-center top-2 w-full ">
//           <p tw="text-white text-4xl flex font-bold m-5">
//             {/* {post?.title} */}
//             title
//           </p>
//           <p tw="text-indigo-200 text-xl flex font-bold m-5">
//             {/* {post?.author.name} */}
//             Irbaine med
//           </p>
//           <p tw="text-purple-200 text-xl flex font-bold m-5">
//             {/* {post?.updatedAt?.toDateString()} */}
//             {date.toDateString()}
//           </p>
//         </div>
//       </div>
//     ),
//     size
//   );
// }

/* THE CODE BELLOW IS WROKING PERFECTLY */

// import { ImageResponse } from "next/server";

// export const size = {
//   width: 900,
//   height: 450,
// };

// export const contentType = "image/jpeg";

// // current land on route, EN, AR..
// // TUMBNAIL picture from public
// // getting TITLE, ALT on the picture with each language

// export default async function og() {
//   const BannerUrl = new URL("http://localhost:3000/clash-of-clans-giants.jpg");
//   console.log();

//   return new ImageResponse(
//     (
//       <div
//         style={{
//           width: "100%",
//           height: "100%",
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//           backgroundImage: `url(${BannerUrl})`,
//           backgroundSize: "cover",
//         }}
//       >
//         {/* You can add text or other content here */}
//       </div>
//     ),
//     size
//   );
// }
