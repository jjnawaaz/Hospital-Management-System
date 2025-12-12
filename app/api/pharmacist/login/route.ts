import { NextRequest, NextResponse } from "next/server"
import bcrypt from 'bcrypt'
import { prisma } from "@/app/lib/prisma"
import { jwtSignin } from "@/app/utils/jwtHelper"

import 'dotenv/config'


// Login as pharmacist
export async function POST(request: NextRequest){
    
    const {email, password} = await request.json()
    
    if(!email || !password) return NextResponse.json({
        message: 'Please enter email and password'
    },{
        status: 401
    })

    try{
    const pharmacist = await prisma.pharmacist.findFirst({
        where:{
            email: email
        }
    })

    if(!pharmacist) return NextResponse.json({
        message:"Invalid Pharmacist. Pharmacist doesnt exists"
    },{
        status: 401
    })

    // bcrypt check 
    const checkPassword = await bcrypt.compare(password,pharmacist.password)
    if(checkPassword){
        const token = jwtSignin(pharmacist.id)
        const response = NextResponse.json({
            success: true,
            message: 'Logged in successfully'
        })
        response.cookies.set({
            name: process.env.COOKIE_NAME as string,
            value: token,
            httpOnly: true,
            secure: true
         })
        return response
    }

    // password check fail 
    return NextResponse.json({
        success: false,
        message:"Invalid credentials"
    },{
        status: 401
    })
    } catch(err){
        return NextResponse.json({
            success: false,
            error: err
        },{
            status: 500
        })
    }
}

