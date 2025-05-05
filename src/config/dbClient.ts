import { MongoClient, Db } from "mongodb";
import dotenv from "dotenv";
dotenv.config();
class dbClient{
    client: MongoClient;
    db!: Db;
    constructor(){
        const query:string=`mongodb+srv://${process.env.USER_DB}:${process.env.USER_PASS}@tutorialpets.18uveho.mongodb.net/?retryWrites=true&w=majority&appName=TutorialPets`;
        this.client = new MongoClient(query);
        this.connectBD();
    }

    async connectBD(){
        try {
            await this.client.connect();
            this.db = this.client.db("adopcion");
            console.log("Conectado a la BD");
        } catch (error) {
            console.log(error);
        }
    }
}

export default new dbClient;