import { Categories } from "../../../generated/prisma/client";
import { prisma } from "../../lib/prisma";

const createCategory = async (data: Omit<Categories, "id">) => {
    const result = await prisma.categories.create({
        data
    })
    return result
}
export const categoryService = {
    createCategory
}