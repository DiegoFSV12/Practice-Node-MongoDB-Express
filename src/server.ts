import 'dotenv/config';
import express from 'express';
import routesMascotas from "./routes/mascotas";
import bodyParser from 'body-parser';
import dbClient from './config/dbClient';

export class Server{
    private app = express();
    async start(PORT:number){
        this.app.listen(process.env.PORT || 3000,()=>{
            console.log(`Conectado al puerto ${PORT}`);
        })

        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({extended:true}));
        this.app.use("/mascotas", routesMascotas);

        process.on('SIGINT',async()=>{
            dbClient.disconnect();
            process.exit(0);
        })
    }
}