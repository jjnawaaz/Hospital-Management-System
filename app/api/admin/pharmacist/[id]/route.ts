import { prisma } from "@/app/lib/prisma"
import { NextRequest, NextResponse } from "next/server"
import bcrypt from 'bcrypt'
import { adminMiddleware } from "@/app/utils/adminMiddleware"


// Get Pharmacist by ID --admin
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
            const data = await prisma.pharmacist.findUnique({
                where:{
                    id: id
                }
            })
            if(!data) return NextResponse.json({
            message:"Invalid pharmacistId",
            success:false
            }) 

        return NextResponse.json({
            message:"pharmacist Fetched",
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
}

// Update pharmacist by ID -- admin
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
        message:"Enter PharmacistId to update",
        success: false
    })

    try{
    let hashedPassword = ''
    if(password){
    hashedPassword = await bcrypt.hash(password,10)
    }
    // get previous fields 
    const data = await prisma.pharmacist.findFirst({
        where:{
            id:id
        }
    })
    if(!data) return NextResponse.json({
        message:"Invalid Id please check it again",
        success: false
    })

    // update pharmacist 
    const pharmacist = await prisma.pharmacist.update({
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
        message: 'Pharmacist Updated Successfully',
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

// Delete pharmacist by ID -- admin
export async function DELETE(request: NextRequest,{params}:{params: {id: string}}){
    // check if the user is admin here 
    const isChecked = await adminMiddleware(request)
    if(!isChecked) return NextResponse.json({
        message:'Unauthorized user',
        success: true
    })
    const {id} = await params
    if(!id) return NextResponse.json({
        message:"Enter PharmacistId to delete",
        success: false
    })

    try{
            // find user 
    const pharmacist = await prisma.pharmacist.findFirst({
        where:{
            id: id
        }
    })

    if(!pharmacist) return NextResponse.json({
        message:"PharmacistId is invalid",
        success: false
    })

    // delete the pharmacist
   await prisma.pharmacist.delete({
        where: {
            id: id
        }
    })

    return NextResponse.json({
        message:"Pharmacist deleted Successfully",
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