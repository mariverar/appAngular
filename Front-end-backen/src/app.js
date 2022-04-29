import express  from "express";
import morgan from "morgan";
import router from "./Router/router.js";
import cors from "cors"

const app = new express()

//setting
app.set('port', process.env.PORT || 4000)


//midellware
app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended:false}))


//router
app.use(router)

export default app;