import { prisma } from "@/app/lib/prisma";
import { pharmacistMiddleware } from "@/app/utils/pharmacistMiddleware";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest){
    // check if the user is receptionist
    const pharmacistData = await pharmacistMiddleware(request)
    if(!pharmacistData) return NextResponse.json({
        message:"Unauthorized user",
        success: false
    },
    {
        status: 401
    })
    try{
        const reports = await prisma.report.findMany()
        return NextResponse.json({
            message:'Successfully fetched all the reports',
            success: true,
            reports: reports
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