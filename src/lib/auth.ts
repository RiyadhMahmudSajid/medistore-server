import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { prisma } from "./prisma";
import nodemailer from "nodemailer"
const transporter = nodemailer.createTransport({
    service: 'gmail', // হোয়াইটলিস্টেড হওয়ার জন্য service ব্যবহার করা ভালো
    auth: {
        user: process.env.APP_USER,
        pass: process.env.APP_PASS,
    },
    // এই নিচের অংশটুকু Render এর জন্য খুব জরুরি
    pool: true, // কানেকশন ধরে রাখার জন্য
    maxConnections: 1,
    connectionTimeout: 20000, // ২০ সেকেন্ড সময় দিন কানেক্ট হতে
    greetingTimeout: 20000,
    socketTimeout: 20000,
    tls: {
        rejectUnauthorized: false // সেলফ-সাইনড সার্টিফিকেট এরর এড়াতে
    }
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
                console.log({ user, url, token });
                const verificationUrl = `${process.env.BETTER_APP_URL}/verify-email?token=${token}`
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
            } catch (err) {
                console.log(err);
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