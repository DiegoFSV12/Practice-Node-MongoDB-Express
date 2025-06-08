import mongoose from "mongoose";

const mascotaSchema = new mongoose.Schema(
    {
        nombre:{
            type:String,
            required:true
        },
        tipo:{
            type:String,
            required:true
        },
        raza:{
            type:String,
            required:true
        },
        edad:{
            type:Number,
            required:true,
            min: [0,"La edad no puede ser negativa"]
        },
        descripcion:{
            type:String
        },
        adoptado:{
            type:Boolean,
            default: false
        }
    },{timestamps:true}
);
export default mongoose.model('mascotas',mascotaSchema);