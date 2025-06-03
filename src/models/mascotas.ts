import Mascotas from "../schemas/mascotas"

interface Mascota{
    nombre:string,
    especie:string,
    raza:string,
}


class mascotasModelo{
    async create(mascota:Mascota){
        return await Mascotas.create(mascota);
    }
    async getOne(id:string){
        return await Mascotas.findById(id);
    }
    async getAll(){
        return await Mascotas.find();
    }
    async update(id:string,mascota:Mascota){
        return await Mascotas.findOneAndUpdate({_id:id},{$set:mascota},{new:true});
    }
    async delete(id:string){
        return await Mascotas.findOneAndDelete({_id:id});
    }
}
export default new mascotasModelo();