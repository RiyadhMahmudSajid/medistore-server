"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const category_router_1 = require("./modules/category/category.router");
const node_1 = require("better-auth/node");
const auth_1 = require("./lib/auth");
const cors_1 = __importDefault(require("cors"));
const medicine_router_1 = require("./modules/medicines/medicine.router");
const order_route_1 = require("./modules/order/order.route");
const address_router_1 = require("./modules/address/address.router");
const globalErrorHandler_1 = __importDefault(require("./middleware/globalErrorHandler"));
const notFound_1 = require("./middleware/notFound");
const review_route_1 = require("./modules/review/review.route");
const app = (0, express_1.default)();
app.use((0, cors_1.default)({
    origin: [
        "http://localhost:3000",
        "https://medistore-client-beta.vercel.app"
    ],
    credentials: true
}));
app.use(express_1.default.json());
app.all("/api/auth/*splat", (0, node_1.toNodeHandler)(auth_1.auth));
app.use('/categoryPost', category_router_1.categoryRouter);
app.use('/medicine', medicine_router_1.medicineRouter);
app.use('/address', address_router_1.addressRouter);
app.use('/order', order_route_1.orderRouter);
app.use("/review", review_route_1.reviewRouter);
app.get("/", (req, res) => {
    res.send("Hello world");
});
app.use(globalErrorHandler_1.default);
app.use(notFound_1.notFound);
exports.default = app;
//# sourceMappingURL=app.js.map