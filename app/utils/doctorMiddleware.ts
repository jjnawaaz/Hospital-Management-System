import { NextRequest } from "next/server";
import 'dotenv/config'
import jwt, { JwtPayload } from 'jsonwebtoken'
import { prisma } from "../lib/prisma";



export async function doctorMiddleware(request: NextRequest){
    // get token here 
    const cookie = request.cookies.get(process.env.COOKIE_NAME as string)
    if(!cookie) return false
    const decoded = await jwt.verify(cookie.value ,process.env.JWT_SECRET as string) as JwtPayload
    const doctor = await prisma.doctor.findFirst({
        where: {
            id: decoded.id
        }
    })
    if(!doctor){
        return false
    }
    return doctor
}