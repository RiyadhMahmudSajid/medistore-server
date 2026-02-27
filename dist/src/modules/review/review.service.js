"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reviewService = void 0;
const prisma_1 = require("../../lib/prisma");
const createReview = async (payload, medicineId, customerId) => {
    const deliveredOrder = await prisma_1.prisma.orders.findFirst({
        where: {
            customerId,
            status: "DELIVERED",
            order: { some: { medicineId } }
        }
    });
    console.log(deliveredOrder);
    if (!deliveredOrder) {
        throw new Error("Order not found");
    }
    if (deliveredOrder.status !== "DELIVERED") {
        throw new Error("You can only submit a review after delivery");
    }
    const result = await prisma_1.prisma.reviews.create({
        data: {
            ...payload,
            medicineId,
            customerId
        }
    });
    return result;
};
const getReview = async (userID) => {
    if (!userID) {
        throw new Error("You have no permission");
    }
    const result = await prisma_1.prisma.reviews.findMany({
        include: {
            medicine: true
        }
    });
    return result;
};
const getReviewForSeller = async (userID) => {
    console.log(userID);
    if (!userID) {
        throw new Error("You have no permission");
    }
    const result = await prisma_1.prisma.medicines.findMany({
        where: {
            sellerId: userID,
            reviews: {
                some: {}
            }
        },
        include: {
            reviews: {
                include: {
                    customer: true
                }
            }
        },
    });
    return result;
};
exports.reviewService = {
    createReview, getReview, getReviewForSeller
};
//# sourceMappingURL=review.service.js.map