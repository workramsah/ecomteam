import { PrismaClient } from "@prisma/client";

const globalForPrisma = global;

// Ensure PrismaClient is only instantiated once
if (!globalForPrisma.prisma) {
  try {
    globalForPrisma.prisma = new PrismaClient({
      log: ["query"],
    });
  } catch (error) {
    console.error("Failed to initialize Prisma Client:", error);
    throw new Error("Prisma Client initialization failed. Ensure 'prisma generate' has been run.");
  }
}

export const prisma = globalForPrisma.prisma;
