//@ts-nocheck

import { PrismaClient } from "@prisma/client";

let prisma: PrismaClient;
declare global {
  namespace NodeJS {
    interface Global {
      prisma: PrismaClient;
    }
  }
}

if (process.env.NODE_ENV === "production") {
  prisma = new PrismaClient();
} else {
  if (!global.prisma) {
    global.prisma = new PrismaClient();
  }
  prisma = global.prisma;
}

const prisma = new PrismaClient({
  log: ["query", "info", "warn", "error"],
});

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

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
