import { prisma } from "@/app/lib/prisma"
import { NextRequest, NextResponse } from "next/server"
import bcrypt from 'bcrypt'
import { adminMiddleware } from "@/app/utils/adminMiddleware"
// Get Receptionists by admin
export async function GET(request: NextRequest){
    // check if the user is admin here 
        const isChecked = await adminMiddleware(request)
        if(!isChecked) return NextResponse.json({
            message:'Unauthorized user',
            success: true
        })
    try{
    const data = await prisma.receptionist.findMany()
    if(!data) return NextResponse.json({
        message:"Cant fetch Receptionists",
        success:false
    }) 

    return NextResponse.json({
        message:"Receptionists Fetched",
        receptionists: data
    })
    }catch(err){
        return NextResponse.json({
            err: err
        },{
            status: 500
        })
    }
}



// create receptionist by admin
export async function POST(request: NextRequest){
    // check if the user is admin here 
    const isChecked = await adminMiddleware(request)
    if(!isChecked) return NextResponse.json({
        message:'Unauthorized user',
        success: true
    })
    const {email, password, name} = await request.json()
    if(!email || !password || !name) return NextResponse.json({
        message:"Enter email, password and name",
        success: false
    })

    try{
        const hashedPassword = await bcrypt.hash(password,10)
    // create receptionist 
    const receptionist = await prisma.receptionist.create({
        data: {
            email: email,
            password: hashedPassword,
            name: name,
        }
    })

    return NextResponse.json({
        success: true,
        message: 'Receptionist Created Successfully',
        receptionist: receptionist
    })
    }catch(err){
        return NextResponse.json({
            error: err
        },{
            status: 500
        })
    }
} 