"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addressController = void 0;
const address_service_1 = require("./address.service");
const createAddress = async (req, res) => {
    try {
        const userId = req.user?.id;
        const result = await address_service_1.addressService.createAddress(userId, req.body);
        res.status(201).json(result);
    }
    catch (err) {
        res.status(400).json({
            error: "Can  crete address",
            details: err
        });
    }
};
exports.addressController = {
    createAddress
};
//# sourceMappingURL=address.controller.js.map