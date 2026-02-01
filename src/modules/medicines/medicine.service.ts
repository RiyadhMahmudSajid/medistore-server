import { prisma } from "../../lib/prisma"

const createMedicine = async (medicineData:any, sellerId:any) =>{
    const result = await prisma.medicines.create({
        data: {
            ...medicineData,
            sellerId
        }
    })
    console.log(result);
    return result
}

export const medicineService = {
    createMedicine
}