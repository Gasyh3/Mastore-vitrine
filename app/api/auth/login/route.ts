import { NextResponse } from "next/server";
import { SignJWT } from "jose";
import { cookies } from "next/headers";
import { SHA256 as sha256 } from "crypto-js";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const alg = "HS256";
const secret = new TextEncoder().encode(process.env.JWT_KEY as string);

const createToken = async (email: string, userId: number) => {
  return await new SignJWT({ email, userId, isAdmin: true })
    .setProtectedHeader({ alg })
    .setExpirationTime("48h")
    .sign(secret);
};


export async function POST(request: any) {
  try {
    const data = await request.json();
    const { email, password } = data;
    
    if (!email || !password) {
      return NextResponse.json(
        { message: "Email and password are required" },
        { status: 400 }
      );
    }

    const logAdmin = await prisma.admin.findUnique({
      where: { email, password: sha256(password).toString() }
    });

    if (!logAdmin) {
      return NextResponse.json(
        { message: "Invalid email or password" },
        { status: 404 }
      );
    } else {
      const token = await createToken(logAdmin.email, logAdmin.id);
      cookies().set("access_token", token);
      return NextResponse.json({
        message: "Login successful",
        token
      });
    }

  } catch (error) {
    console.error("Problème à la création d'admin", error);
    return NextResponse.error();
  }
}