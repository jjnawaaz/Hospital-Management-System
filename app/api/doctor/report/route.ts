import { prisma } from "@/app/lib/prisma"
import { doctorMiddleware } from "@/app/utils/doctorMiddleware"
import { NextRequest, NextResponse } from "next/server"

// Get Appointments
export async function GET(request: NextRequest){
    // get doctor id from token
    const doctorData = await doctorMiddleware(request)
    if(!doctorData) return NextResponse.json({
        message:"Unauthorized user",
        success: false
    },
    {
        status: 401
    })

    try{
        const reports = await prisma.report.findMany({
            where:{
                doctorId: doctorData.id
            }
        })
        return NextResponse.json({
            message:"Successfully fetched reports",
            success: true,
            report: reports
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



