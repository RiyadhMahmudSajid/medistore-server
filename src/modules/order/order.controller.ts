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

const updateOrderStatus = async (req: Request, res: Response)=>{
    try{

        const orderId = req.params.orderId as string
        const {status} = req.body
        const result = await orderService.updateOrderStatus(orderId,status)
        console.log(result);
        res.status(201).json(result)

    }catch(err){
        console.log(err);
    }
}
const paymentSuccess = async (req: Request, res: Response) => {
    try {
        const result = await orderService.handleSuccess(req.params.orderId as string);
        res.send(result.message);
    } catch (error: any) {
        res.status(500).send(error.message);
    }
};

const paymentFail = async (req: Request, res: Response) => {
    try {
        const result = await orderService.handleFail(req.params.orderId as string);
        res.send(result.message);
    } catch (error: any) {
        res.status(500).send(error.message);
    }
};

const paymentCancel = async (req: Request, res: Response) => {
    try {
        const result = await orderService.handleCancel(req.params.orderId as string);
        res.send(result.message);
    } catch (error: any) {
        res.status(500).send(error.message);
    }
};

export const orderController = {
    createOrder,updateOrderStatus, paymentSuccess,
    paymentFail,
    paymentCancel,
}