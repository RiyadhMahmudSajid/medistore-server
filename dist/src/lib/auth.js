"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.auth = void 0;
const better_auth_1 = require("better-auth");
const prisma_1 = require("better-auth/adapters/prisma");
const prisma_2 = require("./prisma");
const resend_1 = require("resend"); // Nodemailer এর বদলে Resend SDK
const resend = new resend_1.Resend(process.env.RESEND_API_KEY);
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
        sendVerificationEmail: async ({ user, token }) => {
            try {
                const verificationUrl = `${process.env.BETTER_APP_URL}/api/auth/verify-email?token=${token}&callbackURL=/`;
                // SMTP এর বদলে API দিয়ে ইমেইল পাঠানো
                const { data, error } = await resend.emails.send({
                    from: "onboarding@resend.dev",
                    to: user.email,
                    subject: "Verify your email",
                    html: `
                        <div style="font-family: sans-serif; padding: 20px;">
                            <h2>Welcome to MediStore!</h2>
                            <p>Hi ${user.name || 'User'},</p>
                            <p>Please click the button below to verify your email:</p>
                            <a href="${verificationUrl}" style="background: #007bff; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px;">Verify Email</a>
                        </div>
                    `,
                });
                if (error) {
                    return console.error("Resend API Error:", error);
                }
                console.log("Email sent successfully via API!", data?.id);
            }
            catch (err) {
                console.error("Critical Sending Error:", err);
            }
        },
    },
    socialProviders: {
        google: {
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        },
    },
});
//# sourceMappingURL=auth.js.map