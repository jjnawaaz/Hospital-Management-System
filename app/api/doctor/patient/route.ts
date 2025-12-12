//Get all patients

import { prisma } from "@/app/lib/prisma"
import { doctorMiddleware } from "@/app/utils/doctorMiddleware"
import { NextRequest, NextResponse } from "next/server"

// Get Patients
export async function GET(request: NextRequest){
    // check if the user is doctor
    const doctorData = await doctorMiddleware(request)
    if(!doctorData) return NextResponse.json({
        message:"Unauthorized user",
        success: false
    },
    {
        status: 401
    })
    try{
    const patients = await prisma.patient.findMany()
    return NextResponse.json({
        message:"Successfully fetched all patients",
        success: true,
        patients: patients
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
