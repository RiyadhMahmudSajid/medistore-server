import express, { Router } from "express"
import { orderController } from "./order.controller"
import authenticationMiddleware, { UserRole } from "../../middleware/authenticationMiddleware"
import { auth } from "../../lib/auth"


const router = express.Router()

router.post("/",authenticationMiddleware(UserRole.CUSTOMER), orderController.createOrder)
router.patch("/:orderId",authenticationMiddleware(UserRole.SELLER),orderController.updateOrderStatus)
// router.patch("/:orderId",authenticationMiddleware(UserRole.SELLER),orderController.updateOrderStatus)
router.post("/success/:orderId", orderController.paymentSuccess);
router.post("/fail/:orderId", orderController.paymentFail);
router.post("/cancel/:orderId", orderController.paymentCancel);

export const orderRouter:Router = router