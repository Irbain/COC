//@ts-nocheck

import { PrismaClient, Prisma } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // ... you will write your Prisma Client queries here
  // export const getLangs = async (lang, title, description) => {
  //   const lange = await prisma.language.findMany({
  //     size: 3,
  //     skip: true,
  //   });
  //   // {
  //   //   orderBy: [
  //   //     {
  //   //       title: "desc",
  //   //     },
  //   //   ],
  //   // }
  //   return getLangs;
  // };
  // const language = await prisma.language.create({
  //   data: {
  //     lang: "en",
  //     title: "ths is english",
  //     description: "My first body",
  //   },
  // });
  // console.log(language);
  // export const deleteLang = async (id) => {
  //   await prisma.language.delete({
  //     where: {
  //       id: id,
  //     },
  //   });
  //   return deleteLang;
  // };
}

// In your prisma/index.ts file, the main() function is not necessary unless you have specific asynchronous tasks you want to execute when the Prisma client is initialized. Since your current main() function is empty, it can be safely removed.
//main();

// .then(async () => {
//   await prisma.$disconnect();
// })
// .catch(async (e) => {
//   console.error(e);
//   await prisma.$disconnect();
//   process.exit(1);
// });
export default prisma;
