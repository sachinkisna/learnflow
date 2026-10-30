import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { NextResponse } from "next/server";
import { writeFile } from "fs/promises";
import path from "path";

export async function POST(req: Request) {
  const session = await getServerSession(authOptions);
  const user = session?.user as { id?: string } | undefined;
  if (!user?.id) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const data = await req.formData();
  const file: File | null = data.get("file") as unknown as File;

  if (!file) return NextResponse.json({ error: "No file uploaded" }, { status: 400 });

  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  const uploadDir = process.env.UPLOAD_DIR || "./private-uploads";
  const filePath = path.join(uploadDir, `${Date.now()}-${file.name}`);

  await writeFile(filePath, buffer);

  return NextResponse.json({ message: "File uploaded successfully", filePath });
}
