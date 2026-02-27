import { OrderStatus, Prisma } from "@prisma/client";
type OrderItemInput = {
    medicineId: string;
    quantity: number;
    price: number;
};
type CreateOrderPayload = {
    status?: OrderStatus;
    totalPrice: number;
    addressId: string;
    items: OrderItemInput[];
};
export declare const orderService: {
    createOrder: (payload: CreateOrderPayload, customerId: string) => Promise<{
        order: {
            address: {
                id: string;
                userId: string;
                fullName: string;
                phone: string;
                city: string;
                area: string;
            };
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
            order: {
                id: string;
                price: number;
                quantity: number;
                medicineId: string;
                orderId: string;
            }[];
        } & {
            id: string;
            createdAt: Date;
            status: import("@prisma/client").$Enums.OrderStatus;
            totalPrice: number;
            updateAt: Date;
            addressId: string;
            customerId: string;
        };
        paymentUrl: any;
    }>;
    updateOrderStatus: (orderId: string, statusUpdate: OrderStatus) => Promise<Prisma.BatchPayload>;
    handleSuccess: (orderId: string) => Promise<{
        message: string;
    }>;
    handleFail: (orderId?: string) => Promise<{
        message: string;
    }>;
    handleCancel: (orderId?: string) => Promise<{
        message: string;
    }>;
    getMyOrder: (customerId: string) => Promise<({
        address: {
            id: string;
            userId: string;
            fullName: string;
            phone: string;
            city: string;
            area: string;
        };
        order: ({
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
            price: number;
            quantity: number;
            medicineId: string;
            orderId: string;
        })[];
    } & {
        id: string;
        createdAt: Date;
        status: import("@prisma/client").$Enums.OrderStatus;
        totalPrice: number;
        updateAt: Date;
        addressId: string;
        customerId: string;
    })[]>;
    getMyMedicineOrder: (sellerId: string) => Promise<({
        address: {
            id: string;
            userId: string;
            fullName: string;
            phone: string;
            city: string;
            area: string;
        };
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
        order: ({
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
            price: number;
            quantity: number;
            medicineId: string;
            orderId: string;
        })[];
    } & {
        id: string;
        createdAt: Date;
        status: import("@prisma/client").$Enums.OrderStatus;
        totalPrice: number;
        updateAt: Date;
        addressId: string;
        customerId: string;
    })[]>;
};
export {};
//# sourceMappingURL=order.service.d.ts.map