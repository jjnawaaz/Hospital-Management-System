import { prisma } from "@/app/lib/prisma"
import { NextRequest, NextResponse } from "next/server"
import bcrypt from 'bcrypt'
import { adminMiddleware } from "@/app/utils/adminMiddleware"
// Get doctors by admin
export async function GET(request: NextRequest){
    // check if the user is admin here 
    const isChecked = await adminMiddleware(request)
    if(!isChecked) return NextResponse.json({
        message:'Unauthorized user',
        success: true
    })
    try{
    const data = await prisma.doctor.findMany()
    if(!data) return NextResponse.json({
        message:"Cant fetch doctors",
        success:false
    }) 

    return NextResponse.json({
        message:"Doctors Fetched",
        doctors: data
    })
    }catch(err){
        return NextResponse.json({
            err: err
        },{
            status: 500
        })
    }
}



// create doctor by admin
export async function POST(request: NextRequest){
    // check if the user is admin here 
    const isChecked = await adminMiddleware(request)
    if(!isChecked) return NextResponse.json({
        message:'Unauthorized user',
        success: true
    })
    const {email, password, name, specialization} = await request.json()
    if(!email || !password || !name || !specialization) return NextResponse.json({
        message:"Enter email, password, name and specialization",
        success: false
    })

    try{
        const hashedPassword = await bcrypt.hash(password,10)
    // create doctor 
    const doctor = await prisma.doctor.create({
        data: {
            email: email,
            password: hashedPassword,
            name: `Dr. ${name}`,
            specialization: specialization
        }
    })

    return NextResponse.json({
        success: true,
        message: 'Doctor Created Successfully',
        doctor: doctor
    })
    }catch(err){
        return NextResponse.json({
            error: err
        },{
            status: 500
        })
    }
} 