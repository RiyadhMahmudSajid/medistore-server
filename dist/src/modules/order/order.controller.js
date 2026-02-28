"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderController = void 0;
const order_service_1 = require("./order.service");
const createOrder = async (req, res, next) => {
    try {
        if (req.user?.id && req.user.role !== "CUSTOMER") {
            return res.status(400).json({ message: `this is  ${req.user.role}` });
        }
        const result = await order_service_1.orderService.createOrder(req.body, req.user?.id);
        res.status(201).json(result);
    }
    catch (err) {
        next(err);
    }
};
const updateOrderStatus = async (req, res) => {
    try {
        const orderId = req.params.orderId;
        const { status } = req.body;
        const result = await order_service_1.orderService.updateOrderStatus(orderId, status);
        res.status(201).json(result);
    }
    catch (err) {
    }
};
const paymentSuccess = async (req, res) => {
    try {
        await order_service_1.orderService.handleSuccess(req.params.orderId);
        res.redirect(`${process.env.BETTER_APP_URL}`);
    }
    catch (error) {
        res.redirect(`${process.env.BETTER_APP_URL}`);
    }
};
const paymentFail = async (req, res) => {
    try {
        await order_service_1.orderService.handleFail(req.params.orderId);
        res.redirect(`${process.env.BETTER_APP_URL}`);
    }
    catch (error) {
        res.redirect(`${process.env.BETTER_APP_URL}`);
    }
};
const paymentCancel = async (req, res) => {
    try {
        await order_service_1.orderService.handleCancel(req.params.orderId);
        res.redirect(`${process.env.BETTER_APP_URL}`);
    }
    catch (error) {
        res.redirect(`${process.env.BETTER_APP_URL}`);
    }
};
const getMyOrder = async (req, res) => {
    try {
        if (req.user?.id && req.user.role !== "CUSTOMER") {
            return res.status(400).json({ message: `this is  ${req.user.role}` });
        }
        const result = await order_service_1.orderService.getMyOrder(req.user?.id);
        res.status(201).json(result);
    }
    catch (err) {
        res.status(400).json({
            error: "Can Not find Medicine",
            details: err
        });
    }
};
const getMyMedicineOrder = async (req, res) => {
    try {
        if (req.user?.id && req.user.role !== "SELLER") {
            return res.status(400).json({ message: `this is  ${req.user.role}` });
        }
        const result = await order_service_1.orderService.getMyMedicineOrder(req.user?.id);
        res.status(201).json(result);
    }
    catch (err) {
        res.status(400).json({
            error: "Can Not find your medicine that already order",
            details: err
        });
    }
};
exports.orderController = {
    createOrder, updateOrderStatus, paymentSuccess,
    paymentFail,
    paymentCancel, getMyOrder, getMyMedicineOrder
};
//# sourceMappingURL=order.controller.js.map