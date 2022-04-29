const routers = {};

import schemaIoc from "../../models/model.js";
import schemaProtocol from "../../models/protocol.js"


//window for app 
routers.windowDashboard = async  (req,res)=>{
try {
    const view = await schemaIoc.find()
    res.send(view)
} catch (error) {
    res.json({error: "a ocurrido un error al pedir data"})
}}


//revisar ruta
routers.windowAddNewIOC= (req,res)=>{
    try {
        res.send('addIOC')
    } catch (error) {
        res.json({error: "a ocurrido un error al ingresar la nueva ventanilla"})
    }
    
}

routers.windowUpdateIOC = async (req,res)=>{
    try {
        const {id} = req.params
        const view = await schemaIoc.findById(id)
        res.send(view)
    } catch (error) {
        res.json({error: `a ocurrido un error al pedir informacion de la ioc buscada ${error}`})

    }}

//mechinism
routers.SaveIOC = async (req,res)=>{
try {
    const addIoc = await new schemaIoc(req.body)
    await addIoc.save()
    res.json({msg:"Ioc guardada"}) 
} catch (error) {
    res.json({error: `a ocurrido un error al momento de guardar la ioc ${error}`})
}}

routers.DeletIOC = async (req,res)=>{
    try {
        const {id} = req.params
    await schemaIoc.findByIdAndDelete(id)
    res.json({msg: 'ioc removed'})
    } catch (error) {
        res.json({error: `a ocurrido un error al momento de eliminar la ioc ${error}`})
    }}

routers.updateIOC = async (req,res)=>{
    try {
        const {id} = req.params
    await schemaIoc.findByIdAndUpdate(id,req.body)
    res.json({msg:"bien"}) 
    } catch (error) {
        res.json({error: `a ocurrido un error al momento de actualizar la ioc ${error}`})
    }}

routers.pedirProtocolo = async (req,res)=>{
    try {
        const protocolos = await schemaProtocol.find()
        res.send(protocolos)
    } catch (error) {
        res.json({error: `a ocurrido un error al momento de pedir el protocolo ${error}`}) 
    }
} 

routers.agregarProtocolo = (req,res)=>{
    try {
        const newProtocolo = new schemaProtocol(req.body)
        newProtocolo.save();
        res.json({msg: "protocolo creado y guardado"})
    } catch (error) {
        res.json({error: `a ocurrido un error al momento de salvar el protocolo ${error}`}) 
    }
}

routers.actualizarProtocolo = async (req,res)=>{
    try{
        await schemaProtocol.findByIdAndUpdate(req.params.id,req.body)
        res.json({msg:"el objeto fue actualizado"})
    }catch(erro){
        res.json({error:`el protocolo no pudo ser actualizado: ${erro}`})
    }
} 

export default routers;