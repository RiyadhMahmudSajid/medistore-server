import { NextFunction, Request, Response } from "express";
export declare const orderController: {
    createOrder: (req: Request, res: Response, next: NextFunction) => Promise<Response<any, Record<string, any>> | undefined>;
    updateOrderStatus: (req: Request, res: Response) => Promise<void>;
    paymentSuccess: (req: Request, res: Response) => Promise<void>;
    paymentFail: (req: Request, res: Response) => Promise<void>;
    paymentCancel: (req: Request, res: Response) => Promise<void>;
    getMyOrder: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
    getMyMedicineOrder: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
};
//# sourceMappingURL=order.controller.d.ts.map