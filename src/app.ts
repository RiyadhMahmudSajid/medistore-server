import express, { Application } from "express";
import { categoryRouter } from "./modules/category/category.router";
import { toNodeHandler } from "better-auth/node";
import { auth } from "./lib/auth";
import cors from "cors";

const app:Application = express()
app.use(cors({
    origin: process.env.BETTER_APP_URL || "http://localhost:4000 ",
    // methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    credentials: true, 
}));
app.all("/api/auth/*splat", toNodeHandler(auth));
app.use(express.json())
app.use('/categoryPost',categoryRouter)
app.get("/",(req,res)=>{
    res.send("Hello world")
})

export default app