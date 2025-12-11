import { NextResponse } from "next/server"
import bcrypt from 'bcrypt'
import { prisma } from "@/app/lib/prisma"
import { jwtSignin } from "@/app/utils/jwtHelper"

// Login as admin
export async function POST(request: Request){
    const {email, password} = await request.json()

    if(!email || !password) return NextResponse.json({
        message: 'Please enter email and password'
    },{
        status: 401
    })

    const admin = await prisma.admin.findUnique({
        where:{
            email: email
        }
    })

    if(!admin) return NextResponse.json({
        message:"Invalid admin. Admin doesnt exists"
    },{
        status: 401
    })

    // bcrypt check 
    const checkPassword = await bcrypt.compare(password,admin.password)
    if(checkPassword){
        const token = jwtSignin(admin.id)
        return NextResponse.json({
            success: true,
            message: 'Logged in successfully',
            token: token
        })
    }

}