import { Request, Response } from "express";
import productsModelo from "../models/products";


export class productsController{
    constructor(){}

    async create(req:Request,res:Response){
        try {
            const data = await productsModelo.create(req.body);
            res.status(201).json(data);
        } catch (error) {
            res.status(500).send(error);
        }
    }

    async update(req:Request,res:Response){
        try {
            const {id} = req.params;
            const data = await productsModelo.update(id,req.body)
            res.status(200).json(data);
        } catch (error) {
            res.status(500).send(error);
        }
    }

    async delete(req:Request,res:Response){
        try {
            const {id} = req.params;
            const data = await productsModelo.delete(id)
            res.status(201).json(data);
        } catch (error) {
            res.status(500).send(error);
        }
    }

    async getOne(req:Request,res:Response){
        try {
            const {id} = req.params;
            const data = await productsModelo.getOne(id);
            res.status(201).json(data);
        } catch (error) {
            res.status(500).send(error);
        }
    }
    
    async getAll(req:Request,res:Response){
        try {
            const data = await productsModelo.getAll();
            res.status(201).json(data);
        } catch (error) {
            res.status(500).send(error);
        }
    }
}
export default new productsController();