import usuarioModelo from '../models/users'
import { Request, Response } from "express";
import bcrypt from 'bcrypt'

export class usuarioController{
    constructor(){}

    
    async register(req:Request,res:Response){
        try {
            const {email,name,phone,pass} = req.body;
            const userExist = await usuarioModelo.getOne({email});
            if(userExist){
                res.status(400).json({error: "El usuario ya existe"});
                return;
            }
            const passEncrypt = await bcrypt.hash(pass,10);
            const data = await usuarioModelo.create({
                name,
                email,
                pass: passEncrypt,
                phone
            });
            res.status(201).json(data);
        } catch (error) {
            res.status(500).send(error);
        }
    }

    async login(req:Request,res:Response){
        try {
            const {email,pass} = req.body;
            const userExist = await usuarioModelo.getOne({email});
            if(!userExist){
                res.status(400).json({error: "El usuario ya existe"});
                return;
            }
            const validPass = await bcrypt.compare(pass,userExist.pass);
            if(!validPass){
                res.status(400).json({error: "Clave incorrecta"});
                return;
            }
            res.status(201).json({msg: "Usuario validado"});
        } catch (error) {
            res.status(500).send(error);
        }
    }
}
export default new usuarioController();