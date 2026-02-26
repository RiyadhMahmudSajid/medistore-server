import express from "express";
import { addressController } from "./address.controller";
import authenticationMiddleware, { UserRole } from "../../middleware/authenticationMiddleware";
const router = express.Router();
router.post("/", authenticationMiddleware(UserRole.CUSTOMER), addressController.createAddress);
export const addressRouter = router;
//# sourceMappingURL=address.router.js.map