// testPrisma.js
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function testPrisma() {
  try {
    const posts = await prisma.post.findMany();
    console.log(posts); // Log the result

    await prisma.$disconnect(); // Close the Prisma client connection
  } catch (err) {
    console.error("Error querying Prisma:", err);
  }
}

testPrisma();
