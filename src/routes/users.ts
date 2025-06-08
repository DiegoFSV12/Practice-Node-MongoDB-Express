import express from "express";
import usuarioController from "../controllers/users";

export const routesUsers = express.Router();

routesUsers.post('/register', usuarioController.register);
routesUsers.post('/login', usuarioController.login);

