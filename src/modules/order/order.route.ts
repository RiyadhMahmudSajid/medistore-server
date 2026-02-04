import express, { Router } from "express"
import { orderController } from "./order.controller"
import authenticationMiddleware, { UserRole } from "../../middleware/authenticationMiddleware"


const router = express.Router()

router.post("/",authenticationMiddleware(UserRole.CUSTOMER), orderController.createOrder)

export const orderRouter:Router = router