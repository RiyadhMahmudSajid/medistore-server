import express from "express";
import { medicineController } from "./medicine.controller";
import authenticationMiddleware, { UserRole } from "../../middleware/authenticationMiddleware";
const router = express.Router();
router.post("/", authenticationMiddleware(UserRole.SELLER), medicineController.createMedicine);
router.get("/", medicineController.getAllMedicine);
router.get("/once", authenticationMiddleware(UserRole.SELLER), medicineController.getMedicineBySellerId);
router.get("/:MedicineId", medicineController.getMedicineById);
router.delete("/:MedicineId", authenticationMiddleware(UserRole.SELLER), medicineController.deleteMedicine);
router.patch("/:MedicineId", authenticationMiddleware(UserRole.SELLER), medicineController.updateMedicine);
export const medicineRouter = router;
//# sourceMappingURL=medicine.router.js.map