import { categoryService } from "./category.service";
import { UserRole } from "../../middleware/authenticationMiddleware";
const createCategory = async (req, res) => {
    try {
        const result = await categoryService.createCategory(req.body);
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
        console.log(search);
        const searchString = typeof search === 'string' ? search : undefined;
        const result = await categoryService.getCategory({ search: searchString });
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
        const result = await categoryService.getCategoryById(categoryId);
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
        if (UserIdentity !== UserRole.ADMIN) {
            throw new Error('You Have No permission');
        }
        const result = await categoryService.deleteCategoryById(categoryId);
        res.status(201).json(result);
    }
    catch (err) {
        res.status(400).json({
            error: "Can not delete category",
            details: err
        });
    }
};
export const categoryController = {
    createCategory,
    getCategory,
    getCategoryById,
    deleteCategoryById
};
//# sourceMappingURL=category.controller.js.map