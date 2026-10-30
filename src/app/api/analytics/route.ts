import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const session = await getServerSession(authOptions);

  // Cast user to include id
  const user = session?.user as { id?: string } | undefined;

  if (!user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const userId = user.id;

  const tasksCount = await prisma.task.count({ where: { userId } });
  const pathsCount = await prisma.learningPath.count({ where: { userId } });
  const projectsCount = await prisma.project.count({ where: { userId } });

  return NextResponse.json({
    tasksCount,
    pathsCount,
    projectsCount,
  });
}