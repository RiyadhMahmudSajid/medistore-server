import { Categories } from "../../../generated/prisma/client";
import { prisma } from "../../lib/prisma";

const createCategory = async (data: Omit<Categories, "id">) => {
    const result = await prisma.categories.create({
        data
    })
    return result
}

const getCategory = async () => {

    const result = await await prisma.categories.findMany()
    return result


}
export const categoryService = {
    createCategory,
    getCategory
}