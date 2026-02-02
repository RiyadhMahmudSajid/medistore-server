import { Request, Response } from "express"
import { medicineService } from "./medicine.service"

const createMedicine = async (req: Request, res: Response) => {
    try {

        if (req.user?.id && req.user.role !== "SELLER" as string) {

            return res.status(400).json({ message: `this is  ${req.user.role}` })
        }
        const result = await medicineService.createMedicine(req.body, req.user?.id as string)
        res.status(201).json(result)
    } catch (err) {
        res.status(400).json({
            error: "Category creation failed",
            details: err
        })
    }
}

const getAllMedicine = async (req: Request, res: Response) => {
    try {
        const { search } = req.query
        const page = Number(req.query.page)
        const limit= Number(req.query.limit)

        const skip = (page - 1) * limit 

        const searchMedicine = typeof search == 'string' ? search : undefined

        const result = await medicineService.getAllMedicine({ search: searchMedicine,page,limit,skip })
        res.status(201).json(result)
    } catch (err) {
        res.status(400).json({
            error: "Category creation failed",

            details: err

        })
        console.log(err);
    }
}

const getMedicineById = async (req: Request, res: Response) => {
    try {

        const MedicineId  = req.params.MedicineId as string
        console.log(MedicineId);

        const result = await medicineService.getMedicineById(MedicineId)
        res.status(201).json(result)

    } catch (err) {
        res.status(400).json({
            error: "Can Not find description",

            details: err

        })
        console.log(err);
    }
}

export const medicineController = {
    createMedicine, getAllMedicine,getMedicineById
}