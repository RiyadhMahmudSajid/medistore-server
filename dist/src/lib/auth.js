"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.auth = void 0;
const better_auth_1 = require("better-auth");
const prisma_1 = require("better-auth/adapters/prisma");
const prisma_2 = require("./prisma");
const nodemailer_1 = __importDefault(require("nodemailer"));
const transporter = nodemailer_1.default.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.APP_USER,
        pass: process.env.APP_PASS,
    },
    // টাইমআউট হ্যান্ডেল করার জন্য
    pool: true,
    maxConnections: 1,
    connectionTimeout: 20000,
});
exports.auth = (0, better_auth_1.betterAuth)({
    database: (0, prisma_1.prismaAdapter)(prisma_2.prisma, {
        provider: "postgresql",
    }),
    trustedOrigins: [process.env.BETTER_APP_URL],
    user: {
        additionalFields: {
            role: {
                type: "string",
                defaultValue: "CUSTOMER",
                required: false
            },
        }
    },
    emailAndPassword: {
        enabled: true,
        autoSignIn: true,
        requireEmailVerification: true,
    },
    emailVerification: {
        sendOnSignUp: true,
        autoSignInAfterVerification: true,
        sendVerificationEmail: async ({ user, url, token }, request) => {
            try {
                console.log({ user, url, token });
                const verificationUrl = `${process.env.BETTER_APP_URL}/verify-email?token=${token}`;
                const info = await transporter.sendMail({
                    from: `"MedeStore" <rdh@gmail.com>`,
                    to: user.email,
                    subject: "Verify your email",
                    text: "Medi Store",
                    html: `
            <div style="font-family: sans-serif; padding: 20px;">
                <h2>Welcome to Our Platform!</h2>
                <p>Hi ${user.name},</p>
                <p>Please click the button below to verify your email address:</p>
                <a href="${verificationUrl}" style="background: #007bff; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px;">Verify Email</a>
                <p>If the button doesn't work, copy this link: ${verificationUrl}</p>
            </div>
            `,
                });
            }
            catch (err) {
                console.log(err);
            }
        },
    },
    socialProviders: {
        google: {
            accessType: "offline",
            prompt: "select_account consent",
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        },
    },
});
//# sourceMappingURL=auth.js.map