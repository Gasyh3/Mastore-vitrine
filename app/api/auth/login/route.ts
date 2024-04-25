import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { SignJWT } from "jose";
import { cookies } from "next/headers";
import {SHA256 as sha256 } from "crypto-js"

const alg="HS256";
const secret = new TextEncoder().encode(process.env.JWT_KEY as string)
const createToken = async (email: string, userId: number) => {
  return await new SignJWT({email, userId,isAdmin:true})
  .setProtectedHeader({ alg })
  .setExpirationTime("48h")
  .sign(secret);
}

export async function POST(req: any) {
const res = req.json()
const { email, password } = res

    if(!email || !password){
        return NextResponse.json(
            {message:"Email and password is required"},
            {status: 400}
            )
    }
    const admin = await prisma.admin.findUnique({
      where:{ email, password: sha256(password).toString() }
    });

    if(!admin){  
        return NextResponse.json(
            {message:"Invalid email or password"},
            {status: 404}
            );
    } else {
      const token = await createToken(admin.email, admin.id);
      cookies().set("access_token", token);
      return NextResponse.json({
        userInfo:{
          id:admin.id,
          email:admin.email,
        }
      })
    }
  }
