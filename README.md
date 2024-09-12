# API Documentation

## Posting content via REST client:

- Create a .rest file on the root of the folder
- Use the following format to update data
  PATCH http://localhost:3000/api/lang/656f462e4cb0e05cde00392d  
  656f462e4cb0e05cde00392d = en id
  Content-Type: application/json

  {
  "id": "656f462e4cb0e05cde00392d",
  "lang": "en",
  "title": "Clash Of Clans Gems Giveaway",
  "description": "To edit later",
  "buttons": {
  "next": "Next",
  "back": "Back",
  "submit": "Submit"
  },
  "labels": {
  "name": "Name",
  "username": "Username",
  "device": "Device",
  "email": "Email Address",
  "wait": "Please Wait",
  "emailNotice": "Note: You will recieve your gift on your email"
  },
  "h1": {
  "one": "GEMS GIVEAWAY",
  "two": "Second Empty"
  },
  "radio": {
  "device": {
  "android": "Android",
  "ios": "iOS",
  "other": "Other"
  },
  "card": {
  "first": {
  "title": "Pile of Gems",
  "amount": "1200",
  "image": "path",
  "alt": "Pile of Gems"
  },
  "second": {
  "title": "Sack of Gems",
  "amount": "2500",
  "image": "path",
  "alt": "Sack of Gems"
  },
  "third": {
  "title": "Box of Gems",
  "amount": "6500",
  "image": "path",
  "alt": "Box of Gems"
  }
  }
  },
  "section": {
  "howTo": {
  "title": "How to Get Clash of Clans Gems ?",
  "description": "If you are looking to get some Clash of Clans gems, there are several ways to do that for free, using these methods on this article. /nBut if today is your lucky day, you will get an extra way to end up one of the winners of the green diamonds that everyone is looking for, many players have gotten lucky already and there are still unlimited chances for others in the future. \nThe more players who participate in our survey, the more opportunities there will be to earn unlimited gems, and by sharing the giveaway with your friend you will be able to increase your chance to be a winner.",
  "step": {
  "one": {
  "title": "Submit Your Informations",
  "description": "Add your name and your personal email"
  },
  "two": {
  "title": "Winners Selection",
  "description": "Lucky winners get selected every week, you might be one of them"
  },
  "three": {
  "title": "Get Your Gift",
  "description": "The redemption code will be sent via email"
  }
  }
  },
  "about": {
  "title": "How to Apply For The Giveaway?",
  "description": "It will not take you more than some few minutes to get a chance to earn Coc gems to improve your village and your army faster and become the strongest member of your clan and to get your favorite Clash of Clans skins, all you have to do is to fill out your information, complete a few simple tasks, and then wait to receive the notification containing the result on your email."
  },
  "steps": {
  "one": {
  "title": "Step One: Fill Your Informations",
  "description": "Add your name and your personal email"
  },
  "two": {
  "title": "Step Two: Wait For The Selection",
  "description": "We select 10 winners everyweek, you might be one of them"
  },
  "three": {
  "title": "Step Three: Get You Redemption Code",
  "description": "Winners will recieve and email to get their gift"
  }
  }
  },
  "footer": {
  "copyrights": {
  "one": "Copyright",
  "two": "All Right Reserved"
  },
  "home": "Home",
  "terms": "Terms of Service",
  "policy": "Privacy Policy"
  },
  "other": {
  "title": {
  "agreement": "I Agree To Terms and Conditions of the Giveaway"
  },
  "cta": {
  "selectgift": "Select Your Gift"
  },
  "nav": "How to use ?"
  },
  "errors": {
  "gems": "Please Select An Option",
  "devices": "",s
  "input": {
  "name": "• Name is required",
  "shortname": "• Too Short Name",
  "terms": "• Accept Terms",
  "device": "• Select Your Device"
  },
  "email": {
  "required": "• Email is required",
  "invalid": "• Enter a valid email"
  },
  "verification": "Please finish the tasks to move on"
  },
  "opengraph": {
  "title": "FREE GEMS",
  "alt": "coc diamonds"
  }
  }

## Adding Data:

- Update the Prisma Schema
- update on app/api/lang/[id]/route.js PATCH function
- update on app/api/lang/route.js PATCH function
- npx prisma generate
- npx prisma bd push

## Adding Languages:

After adding a language it must be added on the following places :

- app/[lang]/page on alternates.lagnauges

## Url:

- Add production url into const url = proccess.en.NEXT || "here"

TODO:

- Add map to Keywords app/[lang]/page o
- google verification
- add env "google" to vercel

# app/[lang]/opengraph-image.tsx

// // import { getPostBySlug } from "@/lib/getData";
// import { ImageResponse } from "next/server";
// import Banner from "@/public/clash-of-clans-giants.jpg";
// import Image from "next/image";

// export const size = {
// width: 900,
// height: 450,
// };

// export const contentType = "image/jpeg";

// interface Props {
// params: {
// slug: string;
// };
// }

// export default async function og({ params }: Props) {
// // const post = await getPostBySlug(params.slug);

// const date = new Date();

// return new ImageResponse(
// (
// <div tw="relative flex items-center justify-center">
// <Image
// src={Banner}
// alt={"finsk"}
// // src={post?.bannerUrl} alt={post?.title}
// />
// <div tw="absolute flex bg-black opacity-50 inset-0 " />
// <div tw="absolute flex items-center top-2 w-full ">
// <p tw="text-white text-4xl flex font-bold m-5">
// {/_ {post?.title} _/}
// title
// </p>
// <p tw="text-indigo-200 text-xl flex font-bold m-5">
// {/_ {post?.author.name} _/}
// Irbaine med
// </p>
// <p tw="text-purple-200 text-xl flex font-bold m-5">
// {/_ {post?.updatedAt?.toDateString()} _/}
// {date.toDateString()}
// </p>
// </div>
// </div>
// ),
// size
// );
// }

/_ THE CODE BELLOW IS WROKING PERFECTLY _/

// import { ImageResponse } from "next/server";

// export const size = {
// width: 900,
// height: 450,
// };

// export const contentType = "image/jpeg";

// // current land on route, EN, AR..
// // TUMBNAIL picture from public
// // getting TITLE, ALT on the picture with each language

// export default async function og() {
// const BannerUrl = new URL("http://localhost:3000/clash-of-clans-giants.jpg");
// console.log();

// return new ImageResponse(
// (
// <div
// style={{
//           width: "100%",
//           height: "100%",
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//           backgroundImage: `url(${BannerUrl})`,
//           backgroundSize: "cover",
//         }}
// >
// {/_ You can add text or other content here _/}
// </div>
// ),
// size
// );
// }
