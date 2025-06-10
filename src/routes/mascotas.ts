import express from "express";
import mascotaController from "../controllers/mascotas";
import { validateToken } from "../helpers/autenticacion";

export const routesMascotas = express.Router();

routesMascotas.get("/",mascotaController.getAll);
routesMascotas.get("/:id",mascotaController.getOne);
routesMascotas.post("/",validateToken,mascotaController.create);
routesMascotas.put("/:id",validateToken,mascotaController.update);
routesMascotas.delete("/:id",validateToken,mascotaController.delete);
