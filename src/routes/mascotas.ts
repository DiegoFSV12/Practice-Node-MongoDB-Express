import express from "express";
import mascotaController from "../controllers/mascotas";

const routesMascotas = express.Router();

routesMascotas.get("/",mascotaController.getAll);
routesMascotas.get("/:id",mascotaController.getOne);
routesMascotas.post("/",mascotaController.create);
routesMascotas.put("/:id",mascotaController.update);
routesMascotas.delete("/:id",mascotaController.delete);

export default routesMascotas;