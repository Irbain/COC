import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Define the trusted origin
const allowedOrigin = "https://clash-gems.com";

// Middleware function
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const origin = request.headers.get("origin");

  // Check if the request is to an allowed API route
  if (
    pathname === "/api/lang" ||
    pathname === "/api/lang/" ||
    pathname.startsWith("/api/lang/")
  ) {
    // Validate the origin
    if (origin !== allowedOrigin) {
      return new NextResponse("CORS policy does not allow this origin.", {
        status: 403,
      });
    }

    // Set CORS headers for valid requests
    const response = NextResponse.next();
    response.headers.set("Access-Control-Allow-Origin", allowedOrigin);
    response.headers.set("Access-Control-Allow-Methods", "GET");
    response.headers.set(
      "Access-Control-Allow-Headers",
      "Content-Type, Authorization"
    );
    return response;
  }

  // Reject requests to other routes
  return new NextResponse("Access denied", { status: 403 });
}

// Middleware configuration to specify paths it applies to
export const config = {
  matcher: "/api/lang/:path*",
};
