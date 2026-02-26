import { orderService } from "./order.service";
const createOrder = async (req, res, next) => {
    try {
        if (req.user?.id && req.user.role !== "CUSTOMER") {
            return res.status(400).json({ message: `this is  ${req.user.role}` });
        }
        const result = await orderService.createOrder(req.body, req.user?.id);
        res.status(201).json(result);
    }
    catch (err) {
        console.log(err);
        next(err);
    }
};
const updateOrderStatus = async (req, res) => {
    try {
        const orderId = req.params.orderId;
        const { status } = req.body;
        const result = await orderService.updateOrderStatus(orderId, status);
        console.log(result);
        res.status(201).json(result);
    }
    catch (err) {
        console.log(err);
    }
};
const paymentSuccess = async (req, res) => {
    try {
        await orderService.handleSuccess(req.params.orderId);
        res.redirect("http://localhost:3000");
    }
    catch (error) {
        res.redirect("http://localhost:3000");
    }
};
const paymentFail = async (req, res) => {
    try {
        await orderService.handleFail(req.params.orderId);
        res.redirect("http://localhost:3000");
    }
    catch (error) {
        res.redirect("http://localhost:3000");
    }
};
const paymentCancel = async (req, res) => {
    try {
        await orderService.handleCancel(req.params.orderId);
        res.redirect("http://localhost:3000");
    }
    catch (error) {
        res.redirect("http://localhost:3000");
    }
};
const getMyOrder = async (req, res) => {
    try {
        if (req.user?.id && req.user.role !== "CUSTOMER") {
            return res.status(400).json({ message: `this is  ${req.user.role}` });
        }
        const result = await orderService.getMyOrder(req.user?.id);
        res.status(201).json(result);
    }
    catch (err) {
        console.log(err);
        res.status(400).json({
            error: "Can Not find Medicine",
            details: err
        });
        console.log(err);
    }
};
const getMyMedicineOrder = async (req, res) => {
    try {
        if (req.user?.id && req.user.role !== "SELLER") {
            return res.status(400).json({ message: `this is  ${req.user.role}` });
        }
        const result = await orderService.getMyMedicineOrder(req.user?.id);
        res.status(201).json(result);
    }
    catch (err) {
        console.log(err);
        res.status(400).json({
            error: "Can Not find your medicine that already order",
            details: err
        });
        console.log(err);
    }
};
export const orderController = {
    createOrder, updateOrderStatus, paymentSuccess,
    paymentFail,
    paymentCancel, getMyOrder, getMyMedicineOrder
};
//# sourceMappingURL=order.controller.js.map