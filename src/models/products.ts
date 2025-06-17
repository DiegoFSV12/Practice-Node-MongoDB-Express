import Products from "../schemas/products"

interface Products{
    name:String,
    price:Number,
    stock:Number
}


class productsModelo{
    async create(producto:Products){
        return await Products.create(producto);
    }
    async getOne(id:string){
        return await Products.findById(id);
    }
    async getAll(){
        return await Products.find();
    }
    async update(id:string,producto:Products){
        return await Products.findOneAndUpdate({_id:id},{$set:producto},{new:true});//el new retorna el documento con los cambios
    }
    async delete(id:string){
        return await Products.findOneAndDelete({_id:id});
    }
}
export default new productsModelo();