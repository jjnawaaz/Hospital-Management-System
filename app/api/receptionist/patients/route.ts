import { prisma } from "@/app/lib/prisma";
import { receptionistMiddleware } from "@/app/utils/receptionistMiddleware";
import { NextRequest, NextResponse } from "next/server";



// create patient
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
    const {phonenumber, name, age, location} = await request.json()
    if(!phonenumber || !name || !age || !location) return NextResponse.json({
        message:"Enter all fields",
        success: false
    })

    try{
        const patient = await prisma.patient.create({
            data:{
                name: name,
                phonenumber: phonenumber,
                age: age,
                location: location
            }
        })
        return NextResponse.json({
            message:"Successfully created patient",
            success: true,
            patient: patient
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


// Get Patients
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



