// http://localhost:3000/api/lang

import prisma from "@/app/utils/prismadb";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    const posts = await prisma.post.findMany();

    return NextResponse.json(posts);
  } catch (err) {
    return NextResponse.json({ message: "GET Error", err }, { status: 500 });
  }
};

export const POST = async (request) => {
  try {
    const body = await request.json();
    const {
      lang,
      title,
      description,
      buttons,
      labels,
      h1,
      radio,
      section,
      footer,
      other,
      errors,
      opengraph,
      keywords,
    } = body;

    const newPost = await prisma.post.create({
      data: {
        lang,
        title,
        description,
        buttons,
        labels,
        h1,
        radio,
        section,
        footer,
        other,
        errors,
        opengraph,
        keywords,
      },
    });

    return NextResponse.json(newPost);
  } catch (err) {
    return NextResponse.json({ message: "POST Error", err }, { status: 500 });
  }
};
