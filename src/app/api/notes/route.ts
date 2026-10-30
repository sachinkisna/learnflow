import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const session = await getServerSession(authOptions);
  const user = session?.user as { id?: string } | undefined;
  if (!user?.id) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const body = await req.json();
  const note = await prisma.note.create({
    data: { ...body, userId: user.id },
  });
  return NextResponse.json(note);
}
