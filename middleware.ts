import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Define the allowed origins
const allowedOrigins = ["https://clash-gems.com"];

export function middleware(request: NextRequest) {
  const origin = request.headers.get("origin");

  // Check if the request's origin is in the allowedOrigins array
  if (origin && allowedOrigins.includes(origin)) {
    const response = NextResponse.next();

    // Set CORS headers for valid origins
    response.headers.set("Access-Control-Allow-Origin", origin);
    response.headers.set(
      "Access-Control-Allow-Methods",
      "GET, POST, PUT, DELETE, OPTIONS"
    );
    response.headers.set(
      "Access-Control-Allow-Headers",
      "Content-Type, Authorization"
    );

    return response;
  }

  // Reject requests from disallowed origins
  return new NextResponse("CORS policy does not allow this origin.", {
    status: 403,
  });
}

// Middleware configuration
export const config = {
  matcher: "/api/:path*",
};
