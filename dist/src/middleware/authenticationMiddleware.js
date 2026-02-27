"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRole = void 0;
const auth_1 = require("../lib/auth");
var UserRole;
(function (UserRole) {
    UserRole["ADMIN"] = "ADMIN";
    UserRole["USER"] = "USER";
    UserRole["CUSTOMER"] = "CUSTOMER";
    UserRole["SELLER"] = "SELLER";
})(UserRole || (exports.UserRole = UserRole = {}));
const authenticationMiddleware = (...roles) => {
    return async (req, res, next) => {
        try {
            const session = await auth_1.auth.api.getSession({
                headers: req.headers
            });
            console.log(session);
            if (!session) {
                return res.status(401).json({
                    success: true,
                    message: "Yor are unauthorized"
                });
            }
            if (!session.user.emailVerified) {
                return res.status(403).json({
                    success: false,
                    message: "Email Verification required"
                });
            }
            req.user = {
                id: session.user.id,
                email: session.user.email,
                name: session.user.name,
                role: session.user.role,
                emailVerified: session.user.emailVerified
            };
            if (roles.length && !roles.includes(req.user.role)) {
                return res.status(403).json({
                    success: false,
                    message: "Forbidden ! You Don't have permission"
                });
            }
            next();
        }
        catch (err) {
            next(err);
        }
    };
};
exports.default = authenticationMiddleware;
//# sourceMappingURL=authenticationMiddleware.js.map