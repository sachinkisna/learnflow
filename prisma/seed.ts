import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function createAdmin() {
  const email = "businesssachininfo@gmail.com";
  const password = "Sachin@4321";

  const existingUser = await prisma.user.findUnique({ where: { email } });

  if (existingUser) {
    console.log("Admin already exists.");
    return;
  }

  const hashedPassword = await bcrypt.hash(password, 12);

  const user = await prisma.user.create({
    data: {
      email,
      password: hashedPassword,
      name: "Admin",
      settings: {
        create: { timezone: "UTC" },
      },
    },
  });

  console.log("Admin created successfully:", user.email);
}

createAdmin()
  .catch((e) => console.error(e))
  .finally(() => prisma.$disconnect());
