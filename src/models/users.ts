import Users from "../schemas/users"

interface User{
    name?:string,
    email?:string,
    phone?:string,
    pass?:string
}


class usuarioModelo{
    async create(user:User){
        return await Users.create(user);
    }
    async getOne(user:User){
        return await Users.findOne(user)
    }
    async getAll(){
        return await Users.find();
    }
    async update(id:string,user:User){
        return await Users.findOneAndUpdate({_id:id},{$set:user},{new:true});
    }
    async delete(id:string){
        return await Users.findOneAndDelete({_id:id});
    }
}
export default new usuarioModelo();