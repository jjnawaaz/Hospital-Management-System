import { prisma } from "@/app/lib/prisma"
import { NextResponse } from "next/server"
import bcrypt from 'bcrypt'
// Get admins by admin
export async function GET(){
    try{
    const data = await prisma.admin.findMany()
    if(!data) return NextResponse.json({
        message:"Cant fetch Admins",
        success:false
    }) 

    return NextResponse.json({
        message:"Admins Fetched",
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



// create admin by admin
export async function POST(request: Request){
    const {email, password, name} = await request.json()
    if(!email || !password || !name) return NextResponse.json({
        message:"Enter email, password and name",
        success: false
    })

    try{
        const hashedPassword = await bcrypt.hash(password,10)
    // create admin 
    const admin = await prisma.admin.create({
        data: {
            email: email,
            password: hashedPassword,
            name: name,
        }
    })

    return NextResponse.json({
        success: true,
        message: 'Admin Created Successfully',
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