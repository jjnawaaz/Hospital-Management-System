import { prisma } from "@/app/lib/prisma";
import { parseAppointmentTime } from "@/app/utils/helpers";
import { receptionistMiddleware } from "@/app/utils/receptionistMiddleware";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest){
    // get receptionist id from token
    const receptionistData = await receptionistMiddleware(request)
    if(!receptionistData) return NextResponse.json({
        message:"Unauthorized user",
        success: false
    },
    {
        status: 401
    })
    try{
    // get fields from req body
    const {doctorId, patientId, appointmentTime} = await request.json()
    const date = parseAppointmentTime(appointmentTime);
    const report = await prisma.report.create({
        data:{
            doctorId: doctorId,
            patientId: patientId,
            prescription:"",
            receptionistId: receptionistData.id,
            appointmentTime: date
        }
    })

    return NextResponse.json({
        success: true,
        message:"Succesfully created report",
        report: report
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


// Get Appointments
export async function GET(request: NextRequest){
    // get receptionist id from token
    const receptionistData = await receptionistMiddleware(request)
    if(!receptionistData) return NextResponse.json({
        message:"Unauthorized user",
        success: false
    },
    {
        status: 401
    })

    try{
        const reports = await prisma.report.findMany()
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