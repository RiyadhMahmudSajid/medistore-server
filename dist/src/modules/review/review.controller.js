"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reviewController = void 0;
const review_service_1 = require("./review.service");
const createReview = async (req, res) => {
    try {
        const medicineId = req.params.medicineId;
        const customerId = req.user?.id;
        const result = await review_service_1.reviewService.createReview(req.body, medicineId, customerId);
        res.status(201).json(result);
    }
    catch (err) {
        res.status(400).json({
            error: "Category creation failed",
            details: err
        });
    }
};
const getReview = async (req, res) => {
    try {
        const userId = req.user?.id;
        const result = await review_service_1.reviewService.getReview(userId);
        res.status(201).json(result);
    }
    catch (err) {
        res.status(400).json({
            error: "Category creation failed",
            details: err
        });
    }
};
const getReviewForSeller = async (req, res) => {
    try {
        const userId = req.user?.id;
        const result = await review_service_1.reviewService.getReviewForSeller(userId);
        res.status(201).json(result);
    }
    catch (err) {
        res.status(400).json({
            error: "Category creation failed",
            details: err
        });
    }
};
exports.reviewController = {
    createReview, getReview, getReviewForSeller
};
//# sourceMappingURL=review.controller.js.map