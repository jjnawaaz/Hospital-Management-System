import { prisma } from "@/app/lib/prisma"
import { NextResponse } from "next/server"
import bcrypt from 'bcrypt'


// Get receptionist by ID --admin
export async function GET(request: Request,{params}:{params: {id: string}}){
    const {id} = await params
    if(id){
        try{
            const data = await prisma.receptionist.findUnique({
                where:{
                    id: id
                }
            })
            if(!data) return NextResponse.json({
            message:"Invalid ReceptionistId",
            success:false
            }) 

        return NextResponse.json({
            message:"Receptionist Fetched",
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
}

// Update receptionist by ID -- admin
export async function PUT(request: Request,{params}:{params: {id: string}}){
    const {email, password, name } = await request.json()
    const {id} = await params
    if(!id) return NextResponse.json({
        message:"Enter ReceptionistId to update",
        success: false
    })
   
    try{
    let hashedPassword = ''
    if(password){
    hashedPassword = await bcrypt.hash(password,10)
    }
    
    // get previous fields 
    const data = await prisma.receptionist.findFirst({
        where:{
            id:id
        }
    })
    
    if(!data) return NextResponse.json({
        message:"Invalid Id please check it again",
        success: false
    })

    // update receptionist 
    const receptionist = await prisma.receptionist.update({
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
        message: 'Receptionist Updated Successfully',
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

// Delete receptionist by ID -- admin
export async function DELETE(request: Request,{params}:{params: {id: string}}){
    const {id} = await params
    if(!id) return NextResponse.json({
        message:"Enter ReceptionistId to delete",
        success: false
    })

    try{
            // find user 
    const receptionist = await prisma.receptionist.findFirst({
        where:{
            id: id
        }
    })

    if(!receptionist) return NextResponse.json({
        message:"ReceptionistId is invalid",
        success: false
    })

    // delete the receptionist
   await prisma.receptionist.delete({
        where: {
            id: id
        }
    })

    return NextResponse.json({
        message:"Receptionist deleted Successfully",
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