import Connectdb from "@/libs/db";
import BlogModel from "@/models/BlogSchema";
import { NextResponse } from "next/server";

interface Params {
  params: {
    id: string;
  };
}

await Connectdb();

export async function GET(request: Request, { params }: Params) {
  const { id } = params;

  const findblog = await BlogModel.findById(id);
  console.log(findblog);

  return NextResponse.json(findblog);
}
