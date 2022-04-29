import  mongoose from "mongoose";


const schemaProtocol = new mongoose.Schema({
        http: {type: String,
               trem: true},
        dot:{type:String,
            trem:true}
},
{
    versionKey:false
}
)
export default mongoose.model('protocol', schemaProtocol)


