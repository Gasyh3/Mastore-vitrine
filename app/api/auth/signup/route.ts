
import { NextResponse } from "next/server"
import { PrismaClient } from "@prisma/client";
import {SHA256 as sha256 } from "crypto-js"
const prisma = new PrismaClient();

export async function POST(request: any) {
  try {
    const data = await request.json();

    const { email, password } = data;
    const newUser = await prisma.admin.create({
      data: {
        email,
        password: sha256(password).toString(),
      }
    });
    return NextResponse.json(newUser);
  } catch (error) {
    console.error("Problème à la création d'admin", error);
    return NextResponse.error();
  }
}