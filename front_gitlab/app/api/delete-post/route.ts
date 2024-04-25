import { prisma } from "@/lib";
import { NextResponse } from "next/server";

export async function DELETE(request: Request) {
    try {
        const { id } = await request.json();
        if (!id) {
            return NextResponse.json(
                { message: "id is required" },
                { status: 400 }
            );
        }

        const post = await prisma.post.delete({
            where: { id },
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