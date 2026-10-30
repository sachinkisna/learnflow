import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

const DEFAULT_CATEGORIES = [
  { name: "Programming & Development", color: "#3B82F6" },
  { name: "Artificial Intelligence", color: "#8B5CF6" },
  { name: "AI Tools & Automation", color: "#EC4899" },
  { name: "Website Development", color: "#10B981" },
  { name: "Digital Marketing & SEO", color: "#F59E0B" },
  { name: "Business & Entrepreneurship", color: "#EF4444" },
  { name: "Sales & Communication", color: "#6366F1" },
  { name: "Productivity & Personal Growth", color: "#14B8A6" },
  { name: "Other", color: "#6B7280" },
];

export async function POST(req: Request) {
  try {
    const { email, password, name } = await req.json();

    if (!email || !password) {
      return NextResponse.json(
        { error: "Email and password are required" },
        { status: 400 }
      );
    }

    const userCount = await prisma.user.count();
    if (userCount > 0) {
      return NextResponse.json(
        { error: "Admin setup has already been completed" },
        { status: 400 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        name: name || "Admin",
        settings: {
          create: {
            timezone: "UTC",
          },
        },
      },
    });

    for (const cat of DEFAULT_CATEGORIES) {
      await prisma.category.create({
        data: {
          name: cat.name,
          color: cat.color,
          userId: user.id,
        },
      });
    }

    return NextResponse.json({
      message: "First admin user created successfully",
      userId: user.id,
    });
  } catch (error) {
    console.error("First-admin setup error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
