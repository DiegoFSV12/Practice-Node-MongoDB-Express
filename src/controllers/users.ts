import usuarioModelo from '../models/users'
import { Request, Response } from "express";

export class usuarioController{
    constructor(){}

    async create(req:Request,res:Response){
        try {
            const data = await usuarioModelo.create(req.body);
            res.status(201).json(data);
        } catch (error) {
            res.status(500).send(error);
        }
    }

    async update(req:Request,res:Response){
        try {
            const {id} = req.params;
            const data = await usuarioModelo.update(id,req.body)
            res.status(200).json(data);
        } catch (error) {
            res.status(500).send(error);
        }
    }

    async delete(req:Request,res:Response){
        try {
            const {id} = req.params;
            const data = await usuarioModelo.delete(id)
            res.status(201).json(data);
        } catch (error) {
            res.status(500).send(error);
        }
    }

    async getOne(req:Request,res:Response){
        try {
            const {id} = req.params;
            const data = await usuarioModelo.getOne(id);
            res.status(201).json(data);
        } catch (error) {
            res.status(500).send(error);
        }
    }
    
    async getAll(req:Request,res:Response){
        try {
            const data = await usuarioModelo.getAll();
            res.status(201).json(data);
        } catch (error) {
            res.status(500).send(error);
        }
    }
}
export default new usuarioController();