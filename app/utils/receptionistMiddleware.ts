import { NextRequest } from "next/server";
import 'dotenv/config'
import jwt, { JwtPayload } from 'jsonwebtoken'
import { prisma } from "../lib/prisma";



export async function receptionistMiddleware(request: NextRequest){
    // get token here 
    const cookie = request.cookies.get(process.env.COOKIE_NAME as string)
    if(!cookie) return false
    const decoded = await jwt.verify(cookie.value ,process.env.JWT_SECRET as string) as JwtPayload
    if(!decoded) return false
    const receptionist = await prisma.receptionist.findFirst({
        where: {
            id: decoded.id
        }
    })
    if(!receptionist){
        return false
    }
    return receptionist
}