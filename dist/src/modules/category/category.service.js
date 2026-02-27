"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoryService = void 0;
const prisma_1 = require("../../lib/prisma");
const createCategory = async (data) => {
    const result = await prisma_1.prisma.categories.create({
        data
    });
    return result;
};
const getCategory = async ({ search }) => {
    const result = await prisma_1.prisma.categories.findMany({
        where: search
            ? {
                name: {
                    contains: search,
                    mode: "insensitive",
                },
            }
            : {},
    });
    return result;
};
const getCategoryById = async (categoryId) => {
    const result = await prisma_1.prisma.categories.findUnique({
        where: {
            id: categoryId
        },
        include: {
            medicines: true,
            _count: {
                select: {
                    medicines: true
                }
            }
        }
    });
    return result;
};
const deleteCategoryById = async (categoryId) => {
    const result = await prisma_1.prisma.categories.delete({
        where: {
            id: categoryId
        }
    });
    return result;
};
exports.categoryService = {
    createCategory,
    getCategory, getCategoryById, deleteCategoryById
};
//# sourceMappingURL=category.service.js.map