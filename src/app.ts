import express, { Application } from "express";
import { categoryRouter } from "./modules/category/category.router";
import { toNodeHandler } from "better-auth/node";
import { auth } from "./lib/auth";
import cors from "cors";
import { medicineRouter } from "./modules/medicines/medicine.router";
import { orderRouter } from "./modules/order/order.route";
import { addressRouter } from "./modules/address/address.router";
import errorHandler from "./middleware/globalErrorHandler";
import { notFound } from "./middleware/notFound";
import { reviewRouter } from "./modules/review/review.route";

const app:Application = express()
app.use(cors({
    origin: process.env.BETTER_APP_URL || "http://localhost:4000 ",
    // methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    credentials: true, 
}));
app.all("/api/auth/*splat", toNodeHandler(auth));
app.use(express.json())
app.use('/categoryPost',categoryRouter)
app.use('/medicine',medicineRouter)
app.use('/address',addressRouter)
app.use('/order',orderRouter)
app.use("/review",reviewRouter)
app.get("/",(req,res)=>{
    res.send("Hello world")
})

app.use(errorHandler)
app.use(notFound)

export default app