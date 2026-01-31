import express, { NextFunction, Request, Response, Router } from "express"
import { categoryController } from "./category.controller"
import { auth } from "../../lib/auth"
import { success } from "better-auth"


const router = express.Router()

const authenticationMiddleware = (...rols:any)=>{
    return async(req:Request,res:Response,next:NextFunction)=>{
        const session = auth.api.getSession({
             headers: req.headers as any
        })
        console.log(session);
        if(!session){
            return res.status(401).json({
                success:true,
                message:"Yor are unauthorized"
            })
        }
        

        next()
       
    }

}

router.post("/",authenticationMiddleware ('USER'),categoryController.createCategory)

export const categoryRouter:Router = router