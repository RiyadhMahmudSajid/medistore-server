import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { prisma } from "./prisma";
import nodemailer from "nodemailer";

// Resend SMTP কনফিগারেশন
const transporter = nodemailer.createTransport({
    host: "smtp.resend.com",
    port: 465,
    secure: true,
    auth: {
        user: "resend", 
        pass: process.env.RESEND_API_KEY, // Render-এ এই ভেরিয়েবলটি সেভ করবেন
    },
});

export const auth = betterAuth({
    database: prismaAdapter(prisma, {
        provider: "postgresql",
    }),
    trustedOrigins: [process.env.BETTER_APP_URL!],

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
            } catch (err) {
                console.error("Resend Sending Error:", err);
            }
        },
    },
    
    socialProviders: {
        google: {
            accessType: "offline",
            prompt: "select_account consent",
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        },
    },
});