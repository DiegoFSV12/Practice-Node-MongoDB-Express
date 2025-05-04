import express from 'express';
import routesMascotas from "./routes/mascotas";

export class Server{
    private app = express();
    async start(PORT:number){
        this.app.listen(PORT || 3000,()=>{
            console.log(`Conectado al puerto ${PORT}`);
        })

        this.app.use("/mascotas", routesMascotas);
    }
}