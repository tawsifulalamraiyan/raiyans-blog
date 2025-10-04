import Connectdb from "@/libs/db"; // your db connection file
import BlogModel from "@/models/BlogSchema";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    // Connect to DB
    await Connectdb();

    // Fetch blogs
    const blogs = await BlogModel.find();

    return NextResponse.json(blogs, { status: 200 });
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return NextResponse.json(
      { message: "Failed to fetch blogs", error: error.message },
      { status: 500 }
    );
  }
}
