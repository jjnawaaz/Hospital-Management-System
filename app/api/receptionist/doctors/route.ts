import { prisma } from "@/app/lib/prisma"
import { receptionistMiddleware } from "@/app/utils/receptionistMiddleware"
import { NextRequest, NextResponse } from "next/server"

// Get Doctors
export async function GET(request: NextRequest){
    // check if the user is receptionist
    const receptionistData = await receptionistMiddleware(request)
    if(!receptionistData) return NextResponse.json({
        message:"Unauthorized user",
        success: false
    },
    {
        status: 401
    })
    try{
    const doctors = await prisma.doctor.findMany()
    return NextResponse.json({
        message:"Successfully fetched all doctors",
        success: true,
        doctors: doctors
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