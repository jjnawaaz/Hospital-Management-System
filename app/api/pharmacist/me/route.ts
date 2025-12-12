import { prisma } from "@/app/lib/prisma"
import { pharmacistMiddleware } from "@/app/utils/pharmacistMiddleware"
import { NextRequest, NextResponse } from "next/server"
import bcrypt from 'bcrypt'
// Get details for profile Page
export async function GET(request: NextRequest){
    // check pharmacist 
    const pharmacistData = await pharmacistMiddleware(request)
        if(!pharmacistData) return NextResponse.json({
            message:"Unauthorized user",
            success: false
        },
        {
            status: 401
        })

        try{
            const pharmacist = await prisma.pharmacist.findFirst({
                where:{
                    id: pharmacistData.id
                },
                select:{
                    name: true,
                    id: true,
                    email: true
                }
            })
            return NextResponse.json({
                message: "Fetched pharmacist details",
                success: true,
                pharmacist: pharmacist
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
        // check pharmacist 
    const pharmacistData = await pharmacistMiddleware(request)
        if(!pharmacistData) return NextResponse.json({
            message:"Unauthorized user",
            success: false
        },
        {
            status: 401
        })
    const {email,password,name} =  await request.json()
    
    // get pharmacist details here 
    const pharmacist = await prisma.pharmacist.findFirst({
        where:{
            id: pharmacistData.id
        }
    })
    if(password){
        const hashedPassword = await bcrypt.hash(password,10)
        try{
            const updatedPharmacist = await prisma.pharmacist.update({
            where:{
                id: pharmacistData.id
            },
            data:{
                password: hashedPassword,
                email: email || pharmacist?.email,
                name: name || pharmacist?.name
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
            updatedPharmacist: updatedPharmacist
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
            const updatedPharmacist = await prisma.pharmacist.update({
            where:{
                id: pharmacistData.id
            },
            data:{
                password: pharmacistData.password,
                email: email || pharmacist?.email,
                name: name || pharmacist?.name
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
            updatedPharmacist: updatedPharmacist
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