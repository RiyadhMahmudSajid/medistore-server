import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { prisma } from "./prisma";

export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: "postgresql",
  }),

  // আপনার frontend url
  trustedOrigins: [process.env.BETTER_APP_URL!],

  // cookie settings
  cookie: {
    httpOnly: true,
    secure: true,
    sameSite: "none",
  },

  // user extra fields
  user: {
    additionalFields: {
      role: {
        type: "string",
        defaultValue: "CUSTOMER",
        required: false,
        input: true, // form input allowed
      },
    },
  },

  // email/password login
  emailAndPassword: {
    enabled: true,
    autoSignIn: true,
    requireEmailVerification: false, // ✅ Skip verification for dev portfolio
  },

  // email verification settings (skip sending)
  emailVerification: {
    sendOnSignUp: false, // nodemailer skip
    autoSignInAfterVerification: true,
    sendVerificationEmail: async () => {
      // do nothing
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

  advanced: {
    crossSubDomainCookies: {
      enabled: true,
    },
  },
});