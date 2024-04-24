import { NextResponse } from "next/server";
import { Prisma } from "@prisma/client";
import prisma from "../../../lib/prisma";

export async function GET(request: Request) {
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
                return NextResponse.json({ msg: "Post not found." }, { status: 404 });
            }
        } else {
            return NextResponse.json({ msg: "id is required." }, { status: 400 });
        }
    } catch (error) {
        if (error instanceof Prisma.PrismaClientKnownRequestError) {
            if (error.code === "P2002") {
                return NextResponse.json({ message: error.message }, { status: 400 });
            }
            return NextResponse.json({ message: error.message }, { status: 400 });
        }
        return NextResponse.json(
            { message: "An unexpected error occurred." },
            { status: 500 }
        );
    }
}
