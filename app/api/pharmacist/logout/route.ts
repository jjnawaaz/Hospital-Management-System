import { NextRequest, NextResponse } from "next/server"
import 'dotenv/config'


// Logout as pharmacist
export async function POST(request: NextRequest){
   const cookie = request.cookies.get(process.env.COOKIE_NAME as string)
   if(!cookie) return NextResponse.json({
    message:"User isnt logged in or session expired",
    success: false
   },{
    status: 403
   })
   
   const response = NextResponse.json({
      success: true,
      message: "Logged out successfully"
   })
   response.cookies.delete(process.env.COOKIE_NAME as string)
   return response
}

