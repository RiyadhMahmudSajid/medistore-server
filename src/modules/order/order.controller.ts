import { NextFunction, Request, Response } from "express"
import { orderService } from "./order.service"

const createOrder = async (req: Request, res: Response,next:NextFunction) => {
    try {

        if (req.user?.id && req.user.role !== "CUSTOMER" as string) {

            return res.status(400).json({ message: `this is  ${req.user.role}` })
        }
        const result = await orderService.createOrder(req.body, req.user?.id as string)
        res.status(201).json(result)
    } catch (err) {
        next(err)
    }
}

export const orderController = {
    createOrder
}