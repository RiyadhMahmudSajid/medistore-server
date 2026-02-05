import { OrderStatus } from "../../../generated/prisma/enums"
import { prisma } from "../../lib/prisma"

type OrderItemInput = {
    medicineId: string
    quantity: number
    price: number
}

type CreateOrderPayload = {
    status?: OrderStatus
    totalPrice: number
    addressId: string
    items: OrderItemInput[]
}
const createOrder = async (payload: CreateOrderPayload, customerId: string) => {


     return prisma.$transaction(async (tx) => {
        

        const medicineIds = payload.items.map(item => item.medicineId);
        console.log("medicineIds is",medicineIds);
        const medicinesInDb = await tx.medicines.findMany({
            where:{id:{in:medicineIds}}
        })
        console.log("medicinesInDb is",medicinesInDb);
        let calculatedTotalPrice = 0;

        const orderItemsData = payload.items.map(item =>{
            const medicine = medicinesInDb.find(m => m.id === item.medicineId)
            console.log("medicine is", medicine);
             if (!medicine) throw new Error(`Medicine ID ${item.medicineId} not found`);
             const itemTotal = medicine.price * item.quantity
             calculatedTotalPrice += itemTotal
        
         return {
                medicineId: item.medicineId,
                quantity: item.quantity,
                price: medicine.price 
            };
            })
console.log( calculatedTotalPrice);
             const result = await tx.orders.create({
            data: {
                status: payload.status ?? 'PLACED',
                totalPrice: calculatedTotalPrice,
                address: { connect: { id: payload.addressId } },
                customer: { connect: { id: customerId } },
                order: {
                    create: orderItemsData.map(item => ({
                        medicine: { connect: { id: item.medicineId } },
                        quantity: item.quantity,
                        price: item.price
                    }))
                },
            },
            include: {
                order: true,
                address: true
            }
        });

        return result;

     })
}

export const orderService = {
    createOrder
}


   