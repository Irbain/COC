// http://localhost:3000/api/lang/13123
import prisma from "@/prisma";
import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {
  try {
    const { id } = params;

    const post = await prisma.post.findMany({
      //findUnique
      where: {
        lang: id,
      },
    });
    return NextResponse.json(post);
  } catch (err) {
    return NextResponse.json({ message: "GET Error", err }, { status: 500 });
  }
};

export const PATCH = async (request, { params }) => {
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

    const { id } = params;

    const updatePost = await prisma.post.update({
      where: {
        id,
      },
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

    if (!updatePost) {
      return NextResponse.json(
        { message: "Update Error", err },
        { status: 404 }
      );
    }

    return NextResponse.json(updatePost);
  } catch (err) {
    return NextResponse.json({ message: "POST Error", err }, { status: 500 });
  }
};

export const DELETE = async (request, { params }) => {
  try {
    const { id } = params;

    await prisma.post.delete({
      where: {
        id: id,
      },
    });

    return NextResponse.json(" Deleted");
  } catch (err) {
    return NextResponse.json({ message: "Delete Error", err }, { status: 500 });
  }
};
