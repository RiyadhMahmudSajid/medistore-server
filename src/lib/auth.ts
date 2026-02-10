import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { prisma } from "./prisma";
import nodemailer from "nodemailer"
const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
        user: process.env.APP_USER,
        pass: process.env.APP_PASS,
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
                defaultValue: "USER",
                required: false
            },
        }
    },
    emailAndPassword: {
        enabled: true,
        autoSignIn: false,
        requireEmailVerification: true
    },
    emailVerification: {
        sendOnSignUp: true,
        autoSignInAfterVerification: true,
        sendVerificationEmail: async ({ user, url, token }, request) => {
            try {
                console.log({ user, url, token });
                const verificationUrl = `${process.env.BETTER_APP_URL}/verify-email?token=${token}`
                const info = await transporter.sendMail({
                    from: '"MedeStore" <maddison53@me.email>',
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