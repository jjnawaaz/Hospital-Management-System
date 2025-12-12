import { prisma } from "@/app/lib/prisma"
import { doctorMiddleware } from "@/app/utils/doctorMiddleware"
import { NextRequest, NextResponse } from "next/server"
import bcrypt from 'bcrypt'
// Get details for profile Page
export async function GET(request: NextRequest){
    // check doctor 
    const doctorData = await doctorMiddleware(request)
        if(!doctorData) return NextResponse.json({
            message:"Unauthorized user",
            success: false
        },
        {
            status: 401
        })

        try{
            const doctor = await prisma.doctor.findFirst({
                where:{
                    id: doctorData.id
                },
                select:{
                    name: true,
                    id: true,
                    email: true,
                    specialization: true
                }
            })
            return NextResponse.json({
                message: "Fetched doctor details",
                success: true,
                doctor: doctor
            })
        } catch(err){
            return NextResponse.json({
            err: err,
            success: false
            },{
            status: 500
        })
        }
}


// Update details in profile page 
export async function PUT(request: NextRequest){
        // check doctor 
    const doctorData = await doctorMiddleware(request)
        if(!doctorData) return NextResponse.json({
            message:"Unauthorized user",
            success: false
        },
        {
            status: 401
        })
    const {email,password,name} =  await request.json()
    
    // get doctor details here 
    const doctor = await prisma.doctor.findFirst({
        where:{
            id: doctorData.id
        }
    })
    if(password){
        const hashedPassword = await bcrypt.hash(password,10)
        try{
            const updatedDoctor = await prisma.doctor.update({
            where:{
                id: doctorData.id
            },
            data:{
                password: hashedPassword,
                email: email || doctor?.email,
                name: name || doctor?.name
            },
            select:{
                    name: true,
                    id: true,
                    email: true,
                    specialization: true
            }
        })
        return NextResponse.json({
            message: "Updated fields successfully",
            success: true,
            updatedDoctor: updatedDoctor
        })
        }catch(err){
            return NextResponse.json({
            err: err,
            success: false
            },{
            status: 500
        })
        }
    }
    try{
            const updatedDoctor = await prisma.doctor.update({
            where:{
                id: doctorData.id
            },
            data:{
                password: doctorData.password,
                email: email || doctor?.email,
                name: name || doctor?.name
            },
            select:{
                    name: true,
                    id: true,
                    email: true,
                    specialization: true
                }
        })
        return NextResponse.json({
            message: "Updated fields successfully",
            success: true,
            updatedDoctor: updatedDoctor
        })
        }catch(err){
            return NextResponse.json({
            err: err,
            success: false
            },{
            status: 500
        })
        }

}