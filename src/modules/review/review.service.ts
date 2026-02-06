import { prisma } from "../../lib/prisma"

type review = {
    rating: number,
    comment: string
}

const createReview = async (payload: review, medicineId: string, customerId: string) => {


    const deliveredOrder = await prisma.orders.findFirst({
        where: {
            customerId,
            status: "DELIVERED",
        }
    })
    console.log(deliveredOrder);

    if (!deliveredOrder) {
        throw new Error("Order not found")
    }

    if (deliveredOrder.status !== "DELIVERED") {
        throw new Error("You can only submit a review after delivery")
    }



    const result = await prisma.reviews.create({
        data: {
            ...payload,
            medicineId,
            customerId
        }
    })
    return result
}

const getReview = async (userID: string) => {

    if (!userID) {
        throw new Error("You have no permission")
    }
    const result = await prisma.reviews.findMany()
    return result
}

const getReviewForSeller = async (userID: string) => {

    console.log(userID);
    if (!userID) {
        throw new Error("You have no permission")
    }
    
    const result = await prisma.medicines.findMany({
        where:{
            sellerId:userID
        },
       
        include:{
            reviews:true
            
        },
        


    })
   


    return result
}
export const reviewService = {
    createReview, getReview, getReviewForSeller
}

