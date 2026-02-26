import { Request, Response } from "express";
export declare const medicineController: {
    createMedicine: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
    getAllMedicine: (req: Request, res: Response) => Promise<void>;
    getMedicineById: (req: Request, res: Response) => Promise<void>;
    deleteMedicine: (req: Request, res: Response) => Promise<void>;
    updateMedicine: (req: Request, res: Response) => Promise<void>;
    getMedicineBySellerId: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
};
//# sourceMappingURL=medicine.controller.d.ts.map