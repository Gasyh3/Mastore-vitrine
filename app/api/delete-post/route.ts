import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function DELETE(request: any) {
    try {
        const { searchParams } = new URL(request.url);
        const id = searchParams.get("id");
        if (id) {
            await prisma.post.delete({
                where: { id },
            });
        }

        return NextResponse.json(
            { message: "Le post à bien été supprimer." },
            { status: 200 }
        );
    } catch (error) {
        return NextResponse.json(
            { message: "An unexpected error occurred." },
            { status: 500 }
        );
    }
}