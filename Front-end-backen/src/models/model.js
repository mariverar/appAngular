import mongoose from "mongoose";

const dataBase = new mongoose.Schema({
    xve:{type:String},
        //require:true},
    ioc:{type:String,
        trem: true,
        },
    comentario:{type:String,
                trem: true},
    status:{type:Boolean,
            default: false},
},{
    timestamps:true,
    versionKey: false
})

export default mongoose.model('iocdatabase',dataBase)