import 'dotenv/config';
import jsonwebtoken from 'jsonwebtoken'

function generateToken(email:string){
    return jsonwebtoken.sign({email},`${process.env.JWT_SECRET}`,{expiresIn: '1hr'});
}

export {generateToken}