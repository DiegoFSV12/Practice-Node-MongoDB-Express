import mascotasModelo from "../models/mascotas";
import { Request, Response } from "express";

export class mascotaController{
    constructor(){}

    async create(req:Request,res:Response){
        try {
            const data = await mascotasModelo.create(req.body);
            res.status(201).json(data);
        } catch (error) {
            res.status(500).send(error);
        }
    }

    async update(req:Request,res:Response){
        try {
            const {id} = req.params;
            const data = await mascotasModelo.update(id,req.body)
            res.status(200).json(data);
        } catch (error) {
            res.status(500).send(error);
        }
    }

    async delete(req:Request,res:Response){
        try {
            const {id} = req.params;
            const data = await mascotasModelo.delete(id)
            res.status(201).json(data);
        } catch (error) {
            res.status(500).send(error);
        }
    }

    async getOne(req:Request,res:Response){
        try {
            const {id} = req.params;
            const data = await mascotasModelo.getOne(id);
            res.status(201).json(data);
        } catch (error) {
            res.status(500).send(error);
        }
    }
    
    async getAll(req:Request,res:Response){
        try {
            const data = await mascotasModelo.getAll();
            res.status(201).json(data);
        } catch (error) {
            res.status(500).send(error);
        }
    }
}
export default new mascotaController();