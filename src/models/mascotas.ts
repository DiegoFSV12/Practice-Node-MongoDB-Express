import { ObjectId } from "mongodb";
import dbClient from "../config/dbClient";

interface Mascota{
    nombre:string,
    especie:string,
    raza:string,
}


class mascotasModelo{
    async create(mascota:Mascota){
        const colMascotas = dbClient.db.collection('mascotas');
        return await colMascotas.insertOne(mascota);
    }
    async getOne(id:string){
        const colMascotas = dbClient.db.collection('mascotas');
        return await colMascotas.findOne({_id:new ObjectId(id)});
    }
    async getAll(){
        const colMascotas = dbClient.db.collection('mascotas');
        return await colMascotas.find({}).toArray();
    }
    async update(id:string,mascota:Mascota){
        const colMascotas = dbClient.db.collection('mascotas');
        return await colMascotas.updateOne({_id:new ObjectId(id)},{$set:mascota});
    }
    async delete(id:string){
        const colMascotas = dbClient.db.collection('mascotas');
        return await colMascotas.deleteOne({_id:new ObjectId(id)});
    }
}
export default new mascotasModelo();