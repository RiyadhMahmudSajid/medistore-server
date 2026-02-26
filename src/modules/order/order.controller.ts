import { NextFunction, Request, Response } from "express"
import { orderService } from "./order.service"

const createOrder = async (req: Request, res: Response, next: NextFunction) => {
    try {

        if (req.user?.id && req.user.role !== "CUSTOMER" as string) {

            return res.status(400).json({ message: `this is  ${req.user.role}` })
        }
        const result = await orderService.createOrder(req.body, req.user?.id as string)
        res.status(201).json(result)
    } catch (err) {
        console.log(err);
        next(err)
    }
}

const updateOrderStatus = async (req: Request, res: Response) => {
    try {

        const orderId = req.params.orderId as string
        const { status } = req.body
        const result = await orderService.updateOrderStatus(orderId, status)
        console.log(result);
        res.status(201).json(result)

    } catch (err) {
        console.log(err);
    }
}
const paymentSuccess = async (req: Request, res: Response) => {
    try {
        await orderService.handleSuccess(req.params.orderId as string);

        res.redirect("http://localhost:3000");
    } catch (error: any) {
        res.redirect("http://localhost:3000");
    }
};

const paymentFail = async (req: Request, res: Response) => {
    try {
        await orderService.handleFail(req.params.orderId as string);

        res.redirect("http://localhost:3000");
    } catch (error: any) {
        res.redirect("http://localhost:3000");
    }
};

const paymentCancel = async (req: Request, res: Response) => {
    try {
        await orderService.handleCancel(req.params.orderId as string);

        res.redirect("http://localhost:3000");
    } catch (error: any) {
        res.redirect("http://localhost:3000");
    }
};

const getMyOrder = async (req: Request, res: Response) => {
    try {
        if (req.user?.id && req.user.role !== "CUSTOMER" as string) {

            return res.status(400).json({ message: `this is  ${req.user.role}` })
        }
        const result = await orderService.getMyOrder(req.user?.id as string)
        res.status(201).json(result)

    } catch (err) {
        console.log(err);
        res.status(400).json({
            error: "Can Not find Medicine",

            details: err

        })
        console.log(err);
    }
};
const getMyMedicineOrder = async (req: Request, res: Response) => {
    try {
        if (req.user?.id && req.user.role !== "SELLER" as string) {

            return res.status(400).json({ message: `this is  ${req.user.role}` })
        }
        const result = await orderService.getMyMedicineOrder(req.user?.id as string)
        res.status(201).json(result)

    } catch (err) {
        console.log(err);
        res.status(400).json({
            error: "Can Not find your medicine that already order",

            details: err

        })
        console.log(err);
    }
}


export const orderController = {
    createOrder, updateOrderStatus, paymentSuccess,
    paymentFail,
    paymentCancel, getMyOrder, getMyMedicineOrder
}