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
export default pagination;
//# sourceMappingURL=pagination.js.map