import { prisma } from "@/app/lib/prisma"
import { adminMiddleware } from "@/app/utils/adminMiddleware"
import { NextRequest, NextResponse } from "next/server"
import bcrypt from 'bcrypt'
// Get details for profile Page
export async function GET(request: NextRequest){
    // check admin 
    const adminData = await adminMiddleware(request)
        if(!adminData) return NextResponse.json({
            message:"Unauthorized user",
            success: false
        },
        {
            status: 401
        })

        try{
            const admin = await prisma.admin.findFirst({
                where:{
                    id: adminData.id
                },
                select:{
                    name: true,
                    id: true,
                    email: true
                }
            })
            return NextResponse.json({
                message: "Fetched admin details",
                success: true,
                admin: admin
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
        // check admin 
    const adminData = await adminMiddleware(request)
        if(!adminData) return NextResponse.json({
            message:"Unauthorized user",
            success: false
        },
        {
            status: 401
        })
    const {email,password,name} =  await request.json()
    
    // get admin details here 
    const admin = await prisma.admin.findFirst({
        where:{
            id: adminData.id
        }
    })
    if(password){
        const hashedPassword = await bcrypt.hash(password,10)
        try{
            const updatedAdmin = await prisma.admin.update({
            where:{
                id: adminData.id
            },
            data:{
                password: hashedPassword,
                email: email || admin?.email,
                name: name || admin?.name
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
            updatedAdmin: updatedAdmin
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
            const updatedAdmin = await prisma.admin.update({
            where:{
                id: adminData.id
            },
            data:{
                password: adminData.password,
                email: email || admin?.email,
                name: name || admin?.name
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
            updatedAdmin: updatedAdmin
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