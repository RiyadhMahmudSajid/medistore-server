// src/lib/auth.ts

import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { prisma } from "./prisma";

export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: "postgresql",
  }),

  // আপনার frontend URL (Vercel)
  trustedOrigins: [
    process.env.BETTER_APP_URL!,
    "http://localhost:3000",
  ],

  // =========================
  // Cookie Config (Cross-Origin Safe)
  // =========================
  cookie: {
    httpOnly: true,
    secure: true,        // production এ HTTPS দরকার
    sameSite: "none",    // cross-site cookie allow
  },

  advanced: {
    crossSubDomainCookies: {
      enabled: true,
    },
  },

  // =========================
  // User Extra Fields
  // =========================
  user: {
    additionalFields: {
      role: {
        type: "string",
        defaultValue: "CUSTOMER",
        required: false,
        input: true,
      },
    },
  },

  // =========================
  // Email + Password Auth
  // =========================
  emailAndPassword: {
    enabled: true,
    autoSignIn: true,
    requireEmailVerification: false, // 🔥 verification OFF
  },

  // =========================
  // Email Verification Disabled
  // =========================
  emailVerification: {
    sendOnSignUp: false,
  },

  // =========================
  // Google Login (Optional)
  // =========================
  socialProviders: {
    google: {
      accessType: "offline",
      prompt: "select_account consent",
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    },
  },
});