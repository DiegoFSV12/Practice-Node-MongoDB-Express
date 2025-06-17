import express from "express";
import productsController from "../controllers/products";
import { validateToken } from "../helpers/autenticacion";


export const productRoutes = express.Router();


productRoutes.get("/",productsController.getAll);
productRoutes.get("/:id",productsController.getOne);
productRoutes.post("/",validateToken,productsController.create);
productRoutes.put("/:id",validateToken,productsController.update);
productRoutes.delete("/:id", validateToken, productsController.delete);