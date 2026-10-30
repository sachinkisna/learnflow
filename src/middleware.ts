import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(req: NextRequest) {
  const token = await getToken({ req, secret: process.env.AUTH_SECRET });
  const { pathname } = req.nextUrl;

  const isAuthRoute = pathname.startsWith("/auth");
  const isApiAuthRoute = pathname.startsWith("/api/auth");
  const isPublicRoute = isAuthRoute || isApiAuthRoute;

  if (!token && !isPublicRoute) {
    return NextResponse.redirect(new URL("/auth/signin", req.url));
  }

  if (token && isAuthRoute) {
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
