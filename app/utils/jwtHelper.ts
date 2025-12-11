import jwt from 'jsonwebtoken'
import 'dotenv/config'



export const jwtSignin = (id : string)=>{
    const token = jwt.sign({id: id},process.env.JWT_SECRET as string, {expiresIn: '1h'})
    return token
}