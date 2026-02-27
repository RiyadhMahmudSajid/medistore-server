"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addressService = void 0;
const prisma_1 = require("../../lib/prisma");
// interface addressInfo {
//     fullName: String
//     phone: String
//     city: String
//     area: String
// }
const createAddress = async (userId, payload) => {
    const result = await prisma_1.prisma.address.create({
        data: {
            userId,
            ...payload
        }
    });
    return result;
};
exports.addressService = {
    createAddress
};
//# sourceMappingURL=address.service.js.map