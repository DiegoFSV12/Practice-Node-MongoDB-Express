import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    email:{
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    name:{
        type: String,
        required: true,
        trim: true
    },
    phone:{
        type: String,
        required: false,
        trim: true
    },
    pass:{
        type: String,
        required: true
    }
});

export default mongoose.model("usuarios",userSchema);