import { Categories } from "@prisma/client";
export declare const categoryService: {
    createCategory: (data: Omit<Categories, "id">) => Promise<{
        name: string;
        id: string;
    }>;
    getCategory: ({ search }: {
        search: string | undefined;
    }) => Promise<{
        name: string;
        id: string;
    }[]>;
    getCategoryById: (categoryId: string) => Promise<({
        medicines: {
            name: string;
            id: string;
            image: string;
            categoryId: string;
            description: string;
            price: number;
            stock: number;
            manufacturer: string;
            views: number;
            sellerId: string;
        }[];
        _count: {
            medicines: number;
        };
    } & {
        name: string;
        id: string;
    }) | null>;
    deleteCategoryById: (categoryId: string) => Promise<{
        name: string;
        id: string;
    }>;
};
//# sourceMappingURL=category.service.d.ts.map