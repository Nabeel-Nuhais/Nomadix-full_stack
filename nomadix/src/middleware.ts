import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const token = req.cookies.get("session_access_token"); // Check if user is logged in
  const { pathname } = req.nextUrl;

  // Allow public access everywhere except protected APIs
  if (!pathname.startsWith("/api")) {
    return NextResponse.next();
  }

  // Protect API routes that require authentication
  if (!token) {
    return new NextResponse(JSON.stringify({ error: "Unauthorized" }), {
      status: 401,
      headers: { "Content-Type": "application/json" },
    });
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/api/:path*"], // Only apply middleware to API routes
};
