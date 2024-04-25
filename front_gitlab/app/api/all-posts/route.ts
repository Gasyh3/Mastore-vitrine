import { prisma } from "@/lib";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const posts = await prisma.post.findMany(
    );
    return NextResponse.json({ posts });
  } catch (error) {
    return NextResponse.json(
      { message: "An unexpected error occurred." },
      { status: 500 }
    );
  }
}