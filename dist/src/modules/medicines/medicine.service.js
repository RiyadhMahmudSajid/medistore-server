import { prisma } from "../../lib/prisma";
const createMedicine = async (medicineData, sellerId) => {
    const result = await prisma.medicines.create({
        data: {
            ...medicineData,
            sellerId
        }
    });
    console.log(result);
    return result;
};
const getAllMedicine = async ({ search, page, limit, skip, sortby, sortOrder }) => {
    let whereCondition = {};
    if (search) {
        const isNumber = !isNaN(Number(search));
        whereCondition = {
            OR: [
                {
                    name: {
                        contains: search,
                        mode: "insensitive",
                    },
                },
                ...(isNumber
                    ? [
                        {
                            price: {
                                equals: Number(search),
                            },
                        },
                    ]
                    : []),
            ],
        };
    }
    const AllMedicine = await prisma.medicines.findMany({
        where: whereCondition,
        orderBy: {
            [sortby]: sortOrder
        },
        take: limit,
        skip
    });
    const total = await prisma.medicines.count({
        where: whereCondition
    });
    return {
        AllMedicine,
        pagination: {
            total,
            page,
            limit,
            totalPage: Math.ceil(total / limit)
        }
    };
};
const getMedicineById = async (MedicineId) => {
    const medicine = await prisma.$transaction(async (tx) => {
        const updatePosts = await tx.medicines.update({
            where: {
                id: MedicineId
            },
            data: {
                views: {
                    increment: 1,
                }
            },
        });
        const result = await tx.medicines.findUnique({
            where: {
                id: MedicineId
            }
        });
        return result;
    });
    return medicine;
};
const getMedicineBySellerId = async (sellerId) => {
    const sellerMedicine = await prisma.medicines.findMany({
        where: {
            sellerId: sellerId,
        },
    });
    return sellerMedicine;
};
const deleteMedicine = async (MedicineId, sellerId) => {
    const medicineData = await prisma.medicines.findFirst({
        where: {
            id: MedicineId,
            sellerId
        }
    });
    if (!medicineData) {
        throw new Error('Your Provide input is invalid');
    }
    return await prisma.medicines.delete({
        where: {
            id: medicineData.id
        }
    });
};
const updateMedicine = async (MedicineId, sellerId, data) => {
    const medicineData = await prisma.medicines.findFirst({
        where: {
            id: MedicineId,
            sellerId
        }
    });
    if (!medicineData) {
        throw new Error('Your Provide input is invalid');
    }
    return await prisma.medicines.update({
        where: {
            id: medicineData.id
        }, data
    });
};
export const medicineService = {
    createMedicine,
    getAllMedicine,
    getMedicineById,
    deleteMedicine,
    updateMedicine,
    getMedicineBySellerId
};
//# sourceMappingURL=medicine.service.js.map