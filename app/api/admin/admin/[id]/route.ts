import { prisma } from "@/app/lib/prisma"
import { NextRequest, NextResponse } from "next/server"
import bcrypt from 'bcrypt'
import { adminMiddleware } from "@/app/utils/adminMiddleware"


// Get admin by ID --admin
export async function GET(request: NextRequest,{params}:{params: {id: string}}){
    // check if the user is admin here 
        const isChecked = await adminMiddleware(request)
        if(!isChecked) return NextResponse.json({
            message:'Unauthorized user',
            success: true
        })
    const {id} = await params
    if(id){
        try{
            const data = await prisma.admin.findUnique({
                where:{
                    id: id
                }
            })
            if(!data) return NextResponse.json({
            message:"Invalid AdminId",
            success:false
            }) 

        return NextResponse.json({
            message:"Admin Fetched",
            admins: data
        })
        }catch(err){
             return NextResponse.json({
            err: err
        },{
            status: 500
        })
        }
    }
}

// Update admin by ID -- admin
export async function PUT(request: NextRequest,{params}:{params: {id: string}}){
    // check if the user is admin here 
    const isChecked = await adminMiddleware(request)
    if(!isChecked) return NextResponse.json({
        message:'Unauthorized user',
        success: true
    })
    const {email, password, name } = await request.json()
    const {id} = await params
    if(!id) return NextResponse.json({
        message:"Enter AdminId to update",
        success: false
    })
   
    try{
    let hashedPassword = ''
    if(password){
    hashedPassword = await bcrypt.hash(password,10)
    }
    
    // get previous fields 
    const data = await prisma.admin.findFirst({
        where:{
            id:id
        }
    })
    
    if(!data) return NextResponse.json({
        message:"Invalid Id please check it again",
        success: false
    })

    // update admin 
    const admin = await prisma.admin.update({
        where:{
            id: id
        },
        data: {
            email: email || data.email,
            password: hashedPassword || data.password,
            name: name || data.name,
        }
    })

    return NextResponse.json({
        success: true,
        message: 'Admin Updated Successfully',
        admin: admin
    })
    }catch(err){
        return NextResponse.json({
            error: err
        },{
            status: 500
        })
    }
}

// Delete admin by ID -- admin
export async function DELETE(request: NextRequest,{params}:{params: {id: string}}){
    // check if the user is admin here 
    const isChecked = await adminMiddleware(request)
    if(!isChecked) return NextResponse.json({
        message:'Unauthorized user',
        success: true
    })
    const {id} = await params
    if(!id) return NextResponse.json({
        message:"Enter AdminId to delete",
        success: false
    })

    try{
            // find user 
    const admin = await prisma.admin.findFirst({
        where:{
            id: id
        }
    })

    if(!admin) return NextResponse.json({
        message:"AdminId is invalid",
        success: false
    })

    // delete the admin
   await prisma.admin.delete({
        where: {
            id: id
        }
    })

    return NextResponse.json({
        message:"Admin deleted Successfully",
        success: true
    })
    }catch(err){
        return NextResponse.json({
            err: err
        },{
            status: 500
        })
    }

}