import { NextResponse } from "next/server";
import { prisma } from "@/lib";

export async function POST(request: Request) {
    try {
        const { title, content, imgUrls, url } = await request.json();
        if (!title || !content || !imgUrls || !url) {
            return NextResponse.json(
                { message: "Title, content, and imgUrls are required" },
                { status: 400 }
            );
        }

        const post = await prisma.post.create({
            data: { title, content, imgUrls, url },
        });

        return NextResponse.json({
            post,
        });
    } catch (error) {
        return NextResponse.json(
            { message: "An unexpected error occurred." },
            { status: 500 }
        );
    }
}


