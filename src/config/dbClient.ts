import 'dotenv/config';
import { MongoClient, Db } from "mongodb";
import mongoose, { Mongoose } from 'mongoose';
class dbClient{
    constructor(){
        this.connect();
    }

    async connect(){
        const query:string=`mongodb+srv://${process.env.USER_DB}:${process.env.USER_PASS}@tutorialpets.18uveho.mongodb.net/adopcion?retryWrites=true&w=majority`;
        await mongoose.connect(query);
        console.log("Conectado a la BD");
    }

    async disconnect(){
        try {
            await mongoose.disconnect();
            console.log("Conexión a la BD cerrada");
        } catch (error) {
            console.log("Error al cerrar la conexión: ",error);
        }
    }
}

export default new dbClient();