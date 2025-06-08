import 'dotenv/config';
import express from 'express';
import {routesMascotas,routesUsers} from "./routes/index";
import bodyParser from 'body-parser';
import dbClient from './config/dbClient';

export class Server{
    private app = express();
    async start(PORT:number){
        this.app.listen(process.env.PORT || 3000,()=>{
            console.log(`Conectado al puerto ${PORT}`);
        })
        //Middlewares
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({extended:true}));
        
        this.app.use("/mascotas", routesMascotas);
        this.app.use("/users", routesUsers);

        process.on('SIGINT',async()=>{
            dbClient.disconnect();
            process.exit(0);
        })
    }
}