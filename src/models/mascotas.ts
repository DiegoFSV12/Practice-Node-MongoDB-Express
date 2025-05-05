import dbClient from "../config/dbClient";

interface Mascota{
    nombre:string,
    especie:string,
    raza:string,
}


class mascotasModelo{
    async create(mascota:Mascota){
        const colMascotas = dbClient.db.collection('mascotas');
        await colMascotas.insertOne(mascota);
    }
}
export default new mascotasModelo();