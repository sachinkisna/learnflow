import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const session = await getServerSession(authOptions);
  const user = session?.user as { id?: string } | undefined;
  if (!user?.id) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const paths = await prisma.learningPath.findMany({
    where: { userId: user.id },
    include: { chapters: true },
  });
  return NextResponse.json(paths);
}

export async function POST(req: Request) {
  const session = await getServerSession(authOptions);
  const user = session?.user as { id?: string } | undefined;
  if (!user?.id) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const body = await req.json();
  const path = await prisma.learningPath.create({
    data: {
      ...body,
      userId: user.id,
    },
  });
  return NextResponse.json(path);
}
