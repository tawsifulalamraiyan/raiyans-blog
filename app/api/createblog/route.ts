import Connectdb from "@/libs/db";
import BlogModel from "@/models/BlogSchema";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const blog = await req.json();

    await Connectdb();

    const newblog = new BlogModel({
      title: blog.title,
      desc: blog.desc,
      image: blog.image,
      teg: blog.teg,
    });

    await newblog.save();

    return NextResponse.json(
      { message: "Blog created successfully", blog: newblog },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating blog:", error);

    return NextResponse.json(
      { error: "Failed to create blog" },
      { status: 500 }
    );
  }
}
