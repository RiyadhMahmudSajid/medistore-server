import express, { Router } from 'express'
import { categoryController } from "./category.controller"
import authenticationMiddleware, { UserRole } from '../../middleware/authenticationMiddleware'



const router = express.Router()



router.post("/",authenticationMiddleware (UserRole.ADMIN),categoryController.createCategory)
router.get("/",categoryController.getCategory)

export const categoryRouter:Router = router