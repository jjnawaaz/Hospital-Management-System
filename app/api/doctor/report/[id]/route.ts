import { prisma } from "@/app/lib/prisma"
import { doctorMiddleware } from "@/app/utils/doctorMiddleware"
import { NextRequest, NextResponse } from "next/server"

// Update report and write prescription
export async function PUT(request: NextRequest, {params}: {params: {id: string}}){
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
        const {prescription} = await request.json()
        const {id} = await params
        const reports = await prisma.report.update({
            where:{
                id: id
            },
            data:{
                prescription: prescription
            }
        })
        // check if the doctor id and doctor id in report is same 
        if(doctorData.id === reports.doctorId){
            return NextResponse.json({
            message:"Successfully fetched reports",
            success: true,
            report: reports
        })
        }
        return NextResponse.json({
            message:"Unauthorized Doctor",
            success: false
        },{
            status: 401
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