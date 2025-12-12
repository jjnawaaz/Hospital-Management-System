import { prisma } from "@/app/lib/prisma"
import { receptionistMiddleware } from "@/app/utils/receptionistMiddleware"
import { NextRequest, NextResponse } from "next/server"
import bcrypt from 'bcrypt'
// Get details for profile Page
export async function GET(request: NextRequest){
    // check receptionist 
    const receptionistData = await receptionistMiddleware(request)
        if(!receptionistData) return NextResponse.json({
            message:"Unauthorized user",
            success: false
        },
        {
            status: 401
        })

        try{
            const receptionist = await prisma.receptionist.findFirst({
                where:{
                    id: receptionistData.id
                },
                select:{
                    name: true,
                    id: true,
                    email: true
                }
            })
            return NextResponse.json({
                message: "Fetched receptionist details",
                success: true,
                receptionist: receptionist
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
        // check receptionist 
    const receptionistData = await receptionistMiddleware(request)
        if(!receptionistData) return NextResponse.json({
            message:"Unauthorized user",
            success: false
        },
        {
            status: 401
        })
    const {email,password,name} =  await request.json()
    
    // get receptionist details here 
    const receptionist = await prisma.receptionist.findFirst({
        where:{
            id: receptionistData.id
        }
    })
    if(password){
        const hashedPassword = await bcrypt.hash(password,10)
        try{
            const updatedReceptionist = await prisma.receptionist.update({
            where:{
                id: receptionistData.id
            },
            data:{
                password: hashedPassword,
                email: email || receptionist?.email,
                name: name || receptionist?.name
            },
            select:{
                    name: true,
                    id: true,
                    email: true
            }
        })
        return NextResponse.json({
            message: "Updated fields successfully",
            success: true,
            updatedReceptionist: updatedReceptionist
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
            const updatedReceptionist = await prisma.receptionist.update({
            where:{
                id: receptionistData.id
            },
            data:{
                password: receptionistData.password,
                email: email || receptionist?.email,
                name: name || receptionist?.name
            },
            select:{
                    name: true,
                    id: true,
                    email: true
                }
        })
        return NextResponse.json({
            message: "Updated fields successfully",
            success: true,
            updatedReceptionist: updatedReceptionist
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