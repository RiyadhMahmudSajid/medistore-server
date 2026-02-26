import express, { NextFunction, Request, Response } from "express";
export declare enum UserRole {
    ADMIN = "ADMIN",
    USER = "USER",
    CUSTOMER = "CUSTOMER",
    SELLER = "SELLER"
}
declare global {
    namespace Express {
        interface Request {
            user?: {
                id: string;
                email: string;
                name: string;
                role: string;
                emailVerified: boolean;
            };
        }
    }
}
declare const authenticationMiddleware: (...roles: UserRole[]) => (req: Request, res: Response, next: NextFunction) => Promise<express.Response<any, Record<string, any>> | undefined>;
export default authenticationMiddleware;
//# sourceMappingURL=authenticationMiddleware.d.ts.map