import { Categories } from "../../../generated/prisma/client";
import { prisma } from "../../lib/prisma";

const createCategory = async (data: Omit<Categories, "id">) => {
    const result = await prisma.categories.create({
        data
    })
    return result
}

const getCategory = async ({search}:{search:string | undefined }) => {

    const result =  await prisma.categories.findMany({
        where:{
            name: {
                contains: search as string,
                mode:'insensitive'
            }
        }
    })
    
    return result


}
export const categoryService = {
    createCategory,
    getCategory
}