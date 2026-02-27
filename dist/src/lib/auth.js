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
// Resend SMTP কনফিগারেশন
const transporter = nodemailer_1.default.createTransport({
    host: "smtp.resend.com",
    port: 465,
    secure: true,
    auth: {
        user: "resend",
        pass: process.env.RESEND_API_KEY, // Render-এ এই ভেরিয়েবলটি সেভ করবেন
    },
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
                // Rewrites ব্যবহার করলে লিঙ্কটি আপনার ফ্রন্টএন্ড ডোমেইন অনুযায়ী হবে
                const verificationUrl = `${process.env.BETTER_APP_URL}/api/auth/verify-email?token=${token}&callbackURL=/`;
                await transporter.sendMail({
                    from: "onboarding@resend.dev", // ডোমেইন ভেরিফাই না করা পর্যন্ত এটিই থাকবে
                    to: user.email,
                    subject: "Verify your email",
                    html: `
                        <div style="font-family: sans-serif; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
                            <h2 style="color: #333;">Welcome to MediStore!</h2>
                            <p>Hi ${user.name || 'User'},</p>
                            <p>Please click the button below to verify your email address and complete your registration:</p>
                            <div style="margin: 30px 0;">
                                <a href="${verificationUrl}" style="background: #007bff; color: white; padding: 12px 25px; text-decoration: none; border-radius: 5px; font-weight: bold;">Verify Email Address</a>
                            </div>
                            <p style="font-size: 12px; color: #777;">If the button doesn't work, copy this link: ${verificationUrl}</p>
                        </div>
                    `,
                });
                console.log("Verification email sent via Resend to:", user.email);
            }
            catch (err) {
                console.error("Resend Sending Error:", err);
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