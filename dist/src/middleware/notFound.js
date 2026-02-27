"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.notFound = notFound;
function notFound(req, res) {
    res.status(404).json({
        message: "Router not found",
        path: req.originalUrl,
        data: Date()
    });
}
//# sourceMappingURL=notFound.js.map