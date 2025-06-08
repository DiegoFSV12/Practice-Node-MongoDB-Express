import express from "express";
import usuarioController from "../controllers/users";

export const routesUsers = express.Router();

routesUsers.get("/",usuarioController.getAll);
routesUsers.get("/:id",usuarioController.getOne);
routesUsers.post("/",usuarioController.create);
routesUsers.put("/:id",usuarioController.update);
routesUsers.delete("/:id",usuarioController.delete);
