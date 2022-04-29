import "./database.js";
import app from "./app.js";


app.listen(app.get('port'),(req,res)=>{
    console.log(`Start serve in port ${app.get('port')}`)
})
