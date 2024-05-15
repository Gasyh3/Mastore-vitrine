import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function GET(request: any) {
    try {
        const { searchParams } = new URL(request.url);
        const id = searchParams.get("id");
        if (id) {
            const post = await prisma.post.findUnique({ where: { id } });
            if (post) {
                return NextResponse.json(
                    {
                        ...post,
                    },
                    { status: 200 }
                );
            } else {
                return NextResponse.json({ messsage: "Post not found." }, { status: 404 });
            }
        } else {
            return NextResponse.json({ message: "id is required." }, { status: 400 });
        }
    } catch (error) {
        return NextResponse.json(
            { message: "An unexpected error occurred." },
            { status: 500 }
        );
    }
}
