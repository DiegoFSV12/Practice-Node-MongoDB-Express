import express from "express";
import usuarioController from "../controllers/users";
import { validateToken } from "../helpers/autenticacion";

export const routesUsers = express.Router();

routesUsers.post('/register', usuarioController.register);
routesUsers.post('/login', usuarioController.login);
routesUsers.get('/profile', validateToken, usuarioController.getProfile);
