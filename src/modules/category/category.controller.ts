import { Request, Response } from "express";
import { categoryService } from "./category.service";
import { Categories } from "../../../generated/prisma/client";

const createCategory = async (req:Request,res:Response)=>{
    try{
        const result = await categoryService.createCategory(req.body)
        res.status(201).json(result)
    }catch(err){
        res.status(400).json({
            error:"Category creation failed",
            details:err
        })
    }
}

const getCategory = async (req:Request,res:Response)=>{
    try{
        const result = await categoryService.getCategory()
        res.status(201).json(result)
    }catch(err){
        res.status(400).json({
            error:"Category creation failed",
            details:err
        })
    }
}

export const categoryController = {
    createCategory,
    getCategory
}