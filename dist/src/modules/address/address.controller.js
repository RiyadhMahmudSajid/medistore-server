import { addressService } from "./address.service";
const createAddress = async (req, res) => {
    try {
        const userId = req.user?.id;
        const result = await addressService.createAddress(userId, req.body);
        res.status(201).json(result);
    }
    catch (err) {
        console.log(err);
        res.status(400).json({
            error: "Can  crete address",
            details: err
        });
        console.log(err);
    }
};
export const addressController = {
    createAddress
};
//# sourceMappingURL=address.controller.js.map