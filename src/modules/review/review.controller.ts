import { Request, Response } from "express"
import { reviewService } from "./review.service"

const createReview = async (req: Request, res: Response) => {
    try {
        const medicineId = req.params.medicineId as string
        const customerId = req.user?.id as string
        console.log("cust is ", customerId);
        console.log(req.body);
        const result = await reviewService.createReview(req.body, medicineId, customerId)
        res.status(201).json(result)
    } catch (err) {
        console.log(err);
        res.status(400).json({
            error: "Category creation failed",
            details: err
        })
    }
}

const getReview = async (req: Request, res: Response) => {
    try {
        const userId = req.user?.id as string
        console.log("cust is ", userId);
        const result = await reviewService.getReview(userId)
        res.status(201).json(result)

    } catch (err) {

        console.log(err);
        res.status(400).json({
            error: "Category creation failed",
            details: err
        })

    }
}

const getReviewForSeller = async (req: Request, res: Response) => {
    try {
        const userId = req.user?.id as string
        console.log(userId);
        const result = await reviewService.getReviewForSeller(userId)
        console.log(result);
        res.status(201).json(result)

    } catch (err) {

        console.log(err);
        res.status(400).json({
            error: "Category creation failed",
            details: err
        })

    }
}

export const reviewController = {
    createReview, getReview, getReviewForSeller
}