export declare const medicineService: {
    createMedicine: (medicineData: any, sellerId: any) => Promise<{
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
    }>;
    getAllMedicine: ({ search, page, limit, skip, sortby, sortOrder }: {
        search: string | undefined;
        page: number;
        limit: number;
        skip: number;
        sortby: string;
        sortOrder: string;
    }) => Promise<{
        AllMedicine: {
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
        pagination: {
            total: number;
            page: number;
            limit: number;
            totalPage: number;
        };
    }>;
    getMedicineById: (MedicineId: string) => Promise<{
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
    } | null>;
    deleteMedicine: (MedicineId: string, sellerId: string) => Promise<{
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
    }>;
    updateMedicine: (MedicineId: string, sellerId: string, data: {
        name?: string;
        description?: string;
        price?: number;
        stock?: number;
        manufacturer?: string;
        image?: string;
    }) => Promise<{
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
    }>;
    getMedicineBySellerId: (sellerId: string) => Promise<{
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
    }[]>;
};
//# sourceMappingURL=medicine.service.d.ts.map