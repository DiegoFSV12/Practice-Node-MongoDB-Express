import 'dotenv/config';
import { NextFunction, Request, Response } from 'express';
import jsonwebtoken from 'jsonwebtoken'

export function generateToken(email:string){
    return jsonwebtoken.sign({email},`${process.env.JWT_SECRET}`,{expiresIn: '1hr'});
}

export function validateToken(req:Request, res:Response, next:NextFunction){
    const token = req.header('Authorization')?.replace('Bearer ','');
    if(!token){
        res.status(401).json({error:"Token requerido"});
        return;
    }
    try {
        const datatoken = jsonwebtoken.verify(token,`${process.env.JWT_SECRET}`);
        if(typeof(datatoken) == "string"){
            res.status(401).json({error:"Token no valido"});
            return;
        }
        console.log(datatoken.email);
        req.emailConected = datatoken.email;
        next(); //Esto hace que tras ejecutar la validación, pase a la siguiente función
    } catch (error) {
        res.status(401).json({error:"Token invalido"});
        return;
    }
}