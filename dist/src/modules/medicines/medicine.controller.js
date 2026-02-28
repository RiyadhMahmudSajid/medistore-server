"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.medicineController = void 0;
const medicine_service_1 = require("./medicine.service");
const pagination_1 = __importDefault(require("../../helper/pagination"));
const createMedicine = async (req, res) => {
    try {
        if (req.user?.id && req.user.role !== "SELLER") {
            return res.status(400).json({ message: `this is  ${req.user.role}` });
        }
        const result = await medicine_service_1.medicineService.createMedicine(req.body, req.user?.id);
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
        const { page, limit, skip, sortby, sortOrder } = (0, pagination_1.default)(req.query);
        const searchMedicine = typeof search == 'string' ? search : undefined;
        const result = await medicine_service_1.medicineService.getAllMedicine({ search: searchMedicine, page, limit, skip, sortby, sortOrder });
        res.status(201).json(result);
    }
    catch (err) {
        res.status(400).json({
            error: "Category creation failed",
            details: err
        });
    }
};
const getMedicineById = async (req, res) => {
    try {
        const MedicineId = req.params.MedicineId;
        const result = await medicine_service_1.medicineService.getMedicineById(MedicineId);
        res.status(201).json(result);
    }
    catch (err) {
        res.status(400).json({
            error: "Can Not find description",
            details: err
        });
    }
};
const getMedicineBySellerId = async (req, res) => {
    try {
        if (req.user?.id && req.user.role !== "SELLER") {
            return res.status(400).json({ message: `this is  ${req.user.role}` });
        }
        const result = await medicine_service_1.medicineService.getMedicineBySellerId(req.user?.id);
        res.status(201).json(result);
    }
    catch (err) {
        res.status(400).json({
            error: "Can Not find Medicine",
            details: err
        });
    }
};
const deleteMedicine = async (req, res) => {
    try {
        const MedicineId = req.params.MedicineId;
        const sellerId = req.user?.id;
        const result = await medicine_service_1.medicineService.deleteMedicine(MedicineId, sellerId);
        res.status(201).json(result);
    }
    catch (err) {
        res.status(400).json({
            error: "Can Not find Medicine",
            details: err
        });
    }
};
const updateMedicine = async (req, res) => {
    try {
        const MedicineId = req.params.MedicineId;
        const sellerId = req.user?.id;
        const result = await medicine_service_1.medicineService.updateMedicine(MedicineId, sellerId, req.body);
        res.status(201).json(result);
    }
    catch (err) {
        res.status(400).json({
            error: "Can Not Update Medicine",
            details: err
        });
    }
};
exports.medicineController = {
    createMedicine, getAllMedicine, getMedicineById, deleteMedicine, updateMedicine, getMedicineBySellerId
};
//# sourceMappingURL=medicine.controller.js.map