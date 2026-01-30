import express, { Application } from "express";
import { categoryRouter } from "./modules/category/category.router";

const app:Application = express()

app.use(express.json())
app.use('/categoryPost',categoryRouter)
app.get("/",(req,res)=>{
    res.send("Hello world")
})

export default app