import { prisma } from "../../lib/prisma"



const createMedicine = async (medicineData: any, sellerId: any) => {
    const result = await prisma.medicines.create({
        data: {
            ...medicineData,
            sellerId
        }
    })
    console.log(result);
    return result
}
const getAllMedicine = async ({ search, page, limit, skip }: { search: string | undefined, page: number, limit: number, skip: number }) => {
    
    let whereCondition = {}

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

    const result = await prisma.medicines.findMany({
        take:limit,
        skip,
        where: whereCondition,
    })
    console.log(result);
    return result
}
const getMedicineById = async (MedicineId: string) => {

    const result = await prisma.medicines.findUnique({

        where: {
            id: MedicineId
        }
    })

    return result
}

export const medicineService = {
    createMedicine,
    getAllMedicine,
    getMedicineById
}