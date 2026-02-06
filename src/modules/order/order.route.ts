import express, { Router } from "express"
import { orderController } from "./order.controller"
import authenticationMiddleware, { UserRole } from "../../middleware/authenticationMiddleware"
import { auth } from "../../lib/auth"


const router = express.Router()

router.post("/",authenticationMiddleware(UserRole.CUSTOMER), orderController.createOrder)
router.patch("/:orderId",authenticationMiddleware(UserRole.SELLER),orderController.updateOrderStatus)
// router.patch("/:orderId",authenticationMiddleware(UserRole.SELLER),orderController.updateOrderStatus)

export const orderRouter:Router = router