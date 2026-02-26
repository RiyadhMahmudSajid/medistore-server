import { medicineService } from "./medicine.service";
import pagination from "../../helper/pagination";
const createMedicine = async (req, res) => {
    try {
        if (req.user?.id && req.user.role !== "SELLER") {
            return res.status(400).json({ message: `this is  ${req.user.role}` });
        }
        const result = await medicineService.createMedicine(req.body, req.user?.id);
        res.status(201).json(result);
    }
    catch (err) {
        res.status(400).json({
            error: "Category creation failed",
            details: err
        });
    }
};
const getAllMedicine = async (req, res) => {
    try {
        const { search } = req.query;
        const { page, limit, skip, sortby, sortOrder } = pagination(req.query);
        const searchMedicine = typeof search == 'string' ? search : undefined;
        const result = await medicineService.getAllMedicine({ search: searchMedicine, page, limit, skip, sortby, sortOrder });
        res.status(201).json(result);
    }
    catch (err) {
        res.status(400).json({
            error: "Category creation failed",
            details: err
        });
        console.log(err);
    }
};
const getMedicineById = async (req, res) => {
    try {
        const MedicineId = req.params.MedicineId;
        console.log(MedicineId);
        const result = await medicineService.getMedicineById(MedicineId);
        res.status(201).json(result);
    }
    catch (err) {
        res.status(400).json({
            error: "Can Not find description",
            details: err
        });
        console.log(err);
    }
};
const getMedicineBySellerId = async (req, res) => {
    try {
        if (req.user?.id && req.user.role !== "SELLER") {
            return res.status(400).json({ message: `this is  ${req.user.role}` });
        }
        const result = await medicineService.getMedicineBySellerId(req.user?.id);
        res.status(201).json(result);
    }
    catch (err) {
        res.status(400).json({
            error: "Can Not find Medicine",
            details: err
        });
        console.log(err);
    }
};
const deleteMedicine = async (req, res) => {
    try {
        const MedicineId = req.params.MedicineId;
        console.log(MedicineId);
        const sellerId = req.user?.id;
        const result = await medicineService.deleteMedicine(MedicineId, sellerId);
        res.status(201).json(result);
    }
    catch (err) {
        res.status(400).json({
            error: "Can Not find Medicine",
            details: err
        });
        console.log(err);
    }
};
const updateMedicine = async (req, res) => {
    try {
        const MedicineId = req.params.MedicineId;
        console.log(MedicineId);
        const sellerId = req.user?.id;
        const result = await medicineService.updateMedicine(MedicineId, sellerId, req.body);
        res.status(201).json(result);
    }
    catch (err) {
        res.status(400).json({
            error: "Can Not Update Medicine",
            details: err
        });
        console.log(err);
    }
};
export const medicineController = {
    createMedicine, getAllMedicine, getMedicineById, deleteMedicine, updateMedicine, getMedicineBySellerId
};
//# sourceMappingURL=medicine.controller.js.map