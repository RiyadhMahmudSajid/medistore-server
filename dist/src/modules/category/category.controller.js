"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoryController = void 0;
const category_service_1 = require("./category.service");
const authenticationMiddleware_1 = require("../../middleware/authenticationMiddleware");
const createCategory = async (req, res) => {
    try {
        const result = await category_service_1.categoryService.createCategory(req.body);
        res.status(201).json(result);
    }
    catch (err) {
        res.status(400).json({
            error: "Category creation failed",
            details: err
        });
    }
};
const getCategory = async (req, res) => {
    try {
        const { search } = req.query;
        const searchString = typeof search === 'string' ? search : undefined;
        const result = await category_service_1.categoryService.getCategory({ search: searchString });
        res.status(201).json(result);
    }
    catch (err) {
        res.status(400).json({
            error: "can not find all category",
            details: err
        });
    }
};
const getCategoryById = async (req, res) => {
    try {
        const categoryId = req.params.categoryId;
        const result = await category_service_1.categoryService.getCategoryById(categoryId);
        res.status(201).json(result);
    }
    catch (err) {
        res.status(400).json({
            error: "Can not find unique category",
            details: err
        });
    }
};
const deleteCategoryById = async (req, res) => {
    try {
        const categoryId = req.params.categoryId;
        const UserIdentity = req.user?.role;
        if (UserIdentity !== authenticationMiddleware_1.UserRole.ADMIN) {
            throw new Error('You Have No permission');
        }
        const result = await category_service_1.categoryService.deleteCategoryById(categoryId);
        res.status(201).json(result);
    }
    catch (err) {
        res.status(400).json({
            error: "Can not delete category",
            details: err
        });
    }
};
exports.categoryController = {
    createCategory,
    getCategory,
    getCategoryById,
    deleteCategoryById
};
//# sourceMappingURL=category.controller.js.map