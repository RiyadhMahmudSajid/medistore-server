// src/lib/auth.ts
import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { prisma } from "./prisma";
import nodemailer from "nodemailer";

// Nodemailer transporter
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // TLS না, STARTTLS ব্যবহার করবে
  auth: {
    user: process.env.APP_USER,
    pass: process.env.APP_PASS,
  },
});

export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: "postgresql",
  }),
  trustedOrigins: [
    process.env.BETTER_APP_URL!,
    "http://localhost:3000"
  ],
  
  // ===============================
  // Cookie & session settings
  // ===============================
  cookie: {
    httpOnly: true,
    secure: true,        // production এ HTTPS থাকা উচিত
    sameSite: "none",    // cross-origin cookie allowed
  },
 advanced: {
  crossSubDomainCookies: {
    enabled: true,            // ✅ সক্রিয় করা হলো
  }
},

  // ===============================
  // User additional fields
  // ===============================
  user: {
    additionalFields: {
      role: {
        type: "string",
        defaultValue: "CUSTOMER",
        required: false,
        input: true, // UI/Signup থেকে field accept করার জন্য
      },
    },
  },

  // ===============================
  // Email & Password login
  // ===============================
  emailAndPassword: {
    enabled: true,
    autoSignIn: true,
    requireEmailVerification: true, // dev/test হলে false করতে পারেন
  },

  // ===============================
  // Email verification
  // ===============================
  emailVerification: {
    sendOnSignUp: true,
    autoSignInAfterVerification: true,
    sendVerificationEmail: async ({ user, url, token }, request) => {
      try {
        console.log({ user, url, token });
        const verificationUrl = `${process.env.BETTER_APP_URL}/verify-email?token=${token}`;

        await transporter.sendMail({
          from: `"MedeStore" <${process.env.APP_USER}>`,
          to: user.email,
          subject: "Verify your email",
          text: `Hi ${user.name}, please verify your email: ${verificationUrl}`,
          html: `
            <div style="font-family: sans-serif; padding: 20px;">
              <h2>Welcome to MediStore!</h2>
              <p>Hi ${user.name},</p>
              <p>Click the button below to verify your email address:</p>
              <a href="${verificationUrl}" style="background: #007bff; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px;">Verify Email</a>
              <p>If the button doesn't work, copy this link: ${verificationUrl}</p>
            </div>
          `,
        });
      } catch (err) {
        console.error("Email sending error:", err);
      }
    },
  },

  // ===============================
  // Social login
  // ===============================
  socialProviders: {
    google: {
      accessType: "offline",
      prompt: "select_account consent",
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    },
  },
});