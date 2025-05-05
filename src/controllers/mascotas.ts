import mascotasModelo from "../models/mascotas";
import { Request, Response } from "express";

export class mascotaController{
    constructor(){}

    async create(req:Request,res:Response){
        try {
            const data = mascotasModelo.create(req.body);
            res.status(201).json(data);
        } catch (error) {
            res.status(500).send(error);
        }
    }

    async update(req:Request,res:Response){
        try {
            res.status(201).json({status:"update-ok"});
        } catch (error) {
            res.status(500).send(error);
        }
    }

    async delete(req:Request,res:Response){
        try {
            res.status(201).json({status:"delete-ok"});
        } catch (error) {
            res.status(500).send(error);
        }
    }

    async getOne(req:Request,res:Response){
        try {
            res.status(201).json({status:"getOne-ok"});
        } catch (error) {
            res.status(500).send(error);
        }
    }
    
    async getAll(req:Request,res:Response){
        try {
            res.status(201).json({status:"getAll-ok"});
        } catch (error) {
            res.status(500).send(error);
        }
    }
}
export default new mascotaController();