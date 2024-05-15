import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function POST(request: any) {
    try {
        const data = await request.json();
        const { title, content, imgUrls, url } = data;

        if (!title || !content || !imgUrls || !url) {
            return NextResponse.json(
                { message: "Title, content, and imgUrls are required" },
                { status: 400 }
            );
        }

        const newPost = await prisma.post.create({
            data: { title, content, imgUrls, url },
        });

        return NextResponse.json(newPost, { status: 201 });
    } catch (error) {
        return NextResponse.json(
            { message: "An unexpected error occurred." },
            { status: 500 }
        );
    }
}


