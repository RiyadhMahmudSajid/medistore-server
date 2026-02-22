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
const getAllMedicine = async ({ search, page, limit, skip, sortby, sortOrder }: { search: string | undefined, page: number, limit: number, skip: number, sortby: string, sortOrder: string }) => {

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

    const AllMedicine = await prisma.medicines.findMany({
        where: whereCondition,
        orderBy: {
            [sortby]: sortOrder
        },
        take: limit,
        skip


    })

    const total = await prisma.medicines.count({
        where: whereCondition
    })
    return {
        AllMedicine,
        pagination: {
            total,
            page,
            limit,
            totalPage: Math.ceil(total / limit)
        }
    }

}
const getMedicineById = async (MedicineId: string) => {

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
        })

        const result = await tx.medicines.findUnique({

            where: {
                id: MedicineId
            }
        })

        return result

    })

    return medicine


}

const getMedicineBySellerId = async (sellerId: string) => {
  
  const sellerMedicine = await prisma.medicines.findMany({
    where: {
      sellerId: sellerId,
    },
  });

  return sellerMedicine;
};

const deleteMedicine = async (MedicineId: string, sellerId: string) => {
    const medicineData = await prisma.medicines.findFirst({
        where: {
            id: MedicineId,
            sellerId
        }
    })
    if (!medicineData) {
        throw new Error('Your Provide input is invalid')
    }

    return await prisma.medicines.delete({
        where: {
            id: medicineData.id
        }
    })

}
const updateMedicine = async (MedicineId: string, sellerId: string, data: { name?: string, description?: string, price?: number, stock?: number, manufacturer?: string, image?: string }) => {
   
    const medicineData = await prisma.medicines.findFirst({
        where:{
            id:MedicineId,
            sellerId
        }
    })
    if (!medicineData) {
        throw new Error('Your Provide input is invalid')
    }

    return await prisma.medicines.update({
        where:{
            id:medicineData.id
        },data
    })

}

export const medicineService = {
    createMedicine,
    getAllMedicine,
    getMedicineById,
    deleteMedicine,
    updateMedicine,
    getMedicineBySellerId
}


// model Medicines {
//   id           String     @id @default(uuid())
//   name         String     @db.VarChar(50)
//   description  String     @db.VarChar(200)
//   price        Float
//   stock        Int        @default(0)
//   manufacturer String
//   image        String
//   categoryId   String
//   views        Int        @default(0)
//   category     Categories @relation(fields: [categoryId], references: [id])
//   sellerId     String
//   seller       User       @relation(fields: [sellerId], references: [id])
//   reviews      Reviews[]
// }
