import { prisma } from "../../lib/prisma"

const createOrder = async (payload:any,customerId:string) => {
    const result = await prisma.orders.create({
        data:{
            ...payload,
            customerId
        }
    })
}

export const orderService = {
    createOrder
}