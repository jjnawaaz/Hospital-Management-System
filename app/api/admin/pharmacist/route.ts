import { prisma } from "@/app/lib/prisma"
import { NextResponse } from "next/server"
import bcrypt from 'bcrypt'
// Get pharmacists by admin
export async function GET(){
    try{
    const data = await prisma.pharmacist.findMany()
    if(!data) return NextResponse.json({
        message:"Cant fetch pharmacists",
        success:false
    }) 

    return NextResponse.json({
        message:"Pharmacists Fetched",
        pharmacists: data
    })
    }catch(err){
        return NextResponse.json({
            err: err
        },{
            status: 500
        })
    }
}



// create pharmacist by admin
export async function POST(request: Request){
    const {email, password, name} = await request.json()
    if(!email || !password || !name) return NextResponse.json({
        message:"Enter email, password and name",
        success: false
    })

    try{
        const hashedPassword = await bcrypt.hash(password,10)
    // create pharmacist 
    const pharmacist = await prisma.pharmacist.create({
        data: {
            email: email,
            password: hashedPassword,
            name: name,
        }
    })

    return NextResponse.json({
        success: true,
        message: 'Pharmacist Created Successfully',
        pharmacist: pharmacist
    })
    }catch(err){
        return NextResponse.json({
            error: err
        },{
            status: 500
        })
    }
} 