"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pagination = (option) => {
    const page = Number(option.page ?? 1);
    const limit = Number(option.limit ?? 10);
    const skip = (page - 1) * limit;
    const sortby = option.sortby || "price";
    const sortOrder = option.sortOrder || 'asc';
    return {
        page, limit, skip, sortby, sortOrder
    };
};
exports.default = pagination;
//# sourceMappingURL=pagination.js.map