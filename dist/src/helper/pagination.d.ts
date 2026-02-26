type Ioption = {
    limit?: number | string;
    page?: number | string;
    skip?: number | string;
    sortby?: string;
    sortOrder?: string;
};
declare const pagination: (option: Ioption) => {
    page: number;
    limit: number;
    skip: number;
    sortby: string;
    sortOrder: string;
};
export default pagination;
//# sourceMappingURL=pagination.d.ts.map