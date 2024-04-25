
import { NextResponse } from "next/server"
import prisma from '@/lib/prisma'
import {SHA256 as sha256 } from "crypto-js"

const alg="HS256";
export async function POST(req: any) {
const res = req.json()
const { email, password } = res

const admin = await prisma.admin.create({
    data: {
        email: "admin@mastore.fr",
        password: sha256("m@store42").toString(),
    }
})
  return NextResponse.json({
    admin,
  })
}