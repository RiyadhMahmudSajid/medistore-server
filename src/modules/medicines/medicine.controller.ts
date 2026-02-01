import { Request, Response } from "express"
import { medicineService } from "./medicine.service"

const createMedicine = async (req: Request, res: Response) => {
    try {
        
        if( req.user?.id && req.user.role !== "SELLER" as string){
           
            return res.status(400).json({message:`this is  ${req.user.role}`})
        }
        const result = await medicineService.createMedicine(req.body,req.user?.id as string)
        res.status(201).json(result)
    } catch (err) {
        res.status(400).json({
            error: "Category creation failed",
            details: err
        })
    }
}

export const medicineController = {
    createMedicine
}