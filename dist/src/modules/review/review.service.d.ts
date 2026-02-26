type review = {
    rating: number;
    comment: string;
};
export declare const reviewService: {
    createReview: (payload: review, medicineId: string, customerId: string) => Promise<{
        id: string;
        customerId: string;
        medicineId: string;
        rating: number;
        comment: string;
    }>;
    getReview: (userID: string) => Promise<({
        medicine: {
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
        };
    } & {
        id: string;
        customerId: string;
        medicineId: string;
        rating: number;
        comment: string;
    })[]>;
    getReviewForSeller: (userID: string) => Promise<({
        reviews: ({
            customer: {
                name: string;
                id: string;
                role: string | null;
                createdAt: Date;
                updatedAt: Date;
                email: string;
                emailVerified: boolean;
                image: string | null;
            };
        } & {
            id: string;
            customerId: string;
            medicineId: string;
            rating: number;
            comment: string;
        })[];
    } & {
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
    })[]>;
};
export {};
//# sourceMappingURL=review.service.d.ts.map