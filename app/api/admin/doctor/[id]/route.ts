import { prisma } from "@/app/lib/prisma"
import { NextRequest, NextResponse } from "next/server"
import bcrypt from 'bcrypt'
import { adminMiddleware } from "@/app/utils/adminMiddleware"


// Get Doctor by ID --admin
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
            const data = await prisma.doctor.findUnique({
                where:{
                    id: id
                }
            })
            if(!data) return NextResponse.json({
            message:"Invalid DoctorId",
            success:false
            }) 

        return NextResponse.json({
            message:"Doctor Fetched",
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
}

// Update Doctor by ID -- admin
export async function PUT(request: NextRequest,{params}:{params: {id: string}}){
    // check if the user is admin here 
    const isChecked = await adminMiddleware(request)
    if(!isChecked) return NextResponse.json({
        message:'Unauthorized user',
        success: true
    })
    const {email, password, name, specialization} = await request.json()
    const {id} = await params
    if(!id) return NextResponse.json({
        message:"Enter DoctorId to update",
        success: false
    })

    try{
    let hashedPassword = ''
    if(password){
    hashedPassword = await bcrypt.hash(password,10)
    }
    console.log("here")
    // get previous fields 
    const data = await prisma.doctor.findFirst({
        where:{
            id:id
        }
    })
    if(!data) return NextResponse.json({
        message:"Invalid Id please check it again",
        success: false
    })

    // update doctor 
    const doctor = await prisma.doctor.update({
        where:{
            id: id
        },
        data: {
            email: email || data.email,
            password: hashedPassword || data.password,
            name: `Dr. ${name}` || data.name,
            specialization: specialization || data.specialization
        }
    })

    return NextResponse.json({
        success: true,
        message: 'Doctor Updated Successfully',
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

// Delete Doctor by ID -- admin
export async function DELETE(request: NextRequest,{params}:{params: {id: string}}){
    // check if the user is admin here 
    const isChecked = await adminMiddleware(request)
    if(!isChecked) return NextResponse.json({
        message:'Unauthorized user',
        success: true
    })
    const {id} = await params
    if(!id) return NextResponse.json({
        message:"Enter DoctorId to delete",
        success: false
    })

    try{
            // find user 
    const doctor = await prisma.doctor.findFirst({
        where:{
            id: id
        }
    })

    if(!doctor) return NextResponse.json({
        message:"DoctorId is invalid",
        success: false
    })

    // delete the doctor
   await prisma.doctor.delete({
        where: {
            id: id
        }
    })

    return NextResponse.json({
        message:"Doctor deleted Successfully",
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