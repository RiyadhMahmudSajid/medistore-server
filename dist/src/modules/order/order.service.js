"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderService = void 0;
const client_1 = require("@prisma/client");
const prisma_1 = require("../../lib/prisma");
const sslcommerz_lts_1 = __importDefault(require("sslcommerz-lts"));
const store_id = process.env.STORE_ID;
const store_passwd = process.env.STORE_PASS;
const is_live = false;
const createOrder = async (payload, customerId) => {
    const orderResult = await prisma_1.prisma.$transaction(async (tx) => {
        const medicineIds = payload.items.map(item => item.medicineId);
        const medicinesInDb = await tx.medicines.findMany({
            where: { id: { in: medicineIds } }
        });
        let calculatedTotalPrice = 0;
        const orderItemsData = payload.items.map(item => {
            const medicine = medicinesInDb.find((m) => m.id === item.medicineId);
            if (!medicine) {
                throw new Error(`Medicine ID ${item.medicineId} not found`);
            }
            const itemTotal = medicine.price * item.quantity;
            calculatedTotalPrice += itemTotal;
            return {
                medicineId: item.medicineId,
                quantity: item.quantity,
                price: medicine.price
            };
        });
        const result = await tx.orders.create({
            data: {
                status: payload.status ?? "PLACED",
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
                address: true,
                customer: true
            }
        });
        return result;
    });
    const sslcz = new sslcommerz_lts_1.default(store_id, store_passwd, is_live);
    const paymentData = {
        total_amount: orderResult.totalPrice,
        currency: "BDT",
        tran_id: orderResult.id,
        success_url: `${process.env.BETTER_AUTH_URL}/order/success/${orderResult.id}`,
        fail_url: `${process.env.BETTER_AUTH_URL}/order/fail/${orderResult.id}`,
        cancel_url: `${process.env.BETTER_AUTH_URL}/order/cancel/${orderResult.id}`,
        ipn_url: "",
        shipping_method: 'Courier',
        product_name: 'Medicine Bundle',
        product_category: 'Healthcare',
        product_profile: 'general',
        cus_name: 'Customer',
        cus_email: 'customer@test.com',
        cus_add1: 'Dhaka',
        cus_phone: '01700000000',
        ship_name: 'Customer',
        ship_add1: 'Dhaka',
        ship_city: 'Dhaka',
        ship_state: 'Dhaka',
        ship_postcode: 1000,
        ship_country: 'Bangladesh',
    };
    const apiResponse = await sslcz.init(paymentData);
    return {
        order: orderResult,
        paymentUrl: apiResponse.GatewayPageURL
    };
};
const updateOrderStatus = async (orderId, statusUpdate) => {
    let fromStatus;
    if (statusUpdate === 'PROCESSING' || statusUpdate === 'CANCELLED') {
        fromStatus = 'PLACED';
    }
    else if (statusUpdate === 'SHIPPING') {
        fromStatus = 'PROCESSING';
    }
    else if (statusUpdate === 'DELIVERED') {
        fromStatus = 'SHIPPING';
    }
    else {
        throw new Error('Invalid target status');
    }
    const result = await prisma_1.prisma.orders.updateMany({
        where: {
            id: orderId,
            status: fromStatus,
        },
        data: {
            status: statusUpdate,
        },
    });
    return result;
};
const handleSuccess = async (orderId) => {
    if (!orderId) {
        throw new Error("Order ID is missing");
    }
    await prisma_1.prisma.orders.update({
        where: { id: orderId },
        data: {
            status: client_1.OrderStatus.PROCESSING,
        },
    });
    return {
        message: "Payment successful! Order is now processing.",
    };
};
const handleFail = async (orderId) => {
    if (orderId) {
        await prisma_1.prisma.orders.update({
            where: { id: orderId },
            data: {
                status: client_1.OrderStatus.CANCELLED,
            },
        });
    }
    return {
        message: "Payment failed!",
    };
};
const handleCancel = async (orderId) => {
    if (orderId) {
        await prisma_1.prisma.orders.update({
            where: { id: orderId },
            data: {
                status: client_1.OrderStatus.CANCELLED,
            },
        });
    }
    return {
        message: "Payment cancelled by user!",
    };
};
const getMyOrder = async (customerId) => {
    const customerMedicine = await prisma_1.prisma.orders.findMany({
        where: {
            customerId: customerId,
        },
        include: {
            address: true,
            order: {
                include: {
                    medicine: true,
                },
            },
        },
    });
    return customerMedicine;
};
const getMyMedicineOrder = async (sellerId) => {
    const sellerOrders = await prisma_1.prisma.orders.findMany({
        where: {
            order: {
                some: {
                    medicine: {
                        sellerId: sellerId
                    }
                }
            }
        },
        orderBy: {
            createdAt: "desc",
        },
        include: {
            address: true,
            customer: true,
            order: {
                include: {
                    medicine: true
                }
            }
        }
    });
    return sellerOrders;
};
exports.orderService = {
    createOrder, updateOrderStatus, handleSuccess,
    handleFail,
    handleCancel,
    getMyOrder, getMyMedicineOrder
};
//# sourceMappingURL=order.service.js.map