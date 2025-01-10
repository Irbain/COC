import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Define the allowed origins
const allowedOrigins = ["https://clash-gems.com", "https://www.clash-gems.com"];

export function middleware(request: NextRequest) {
  const origin = request.headers.get("origin");

  if (origin && allowedOrigins.includes(origin)) {
    // Handle OPTIONS request (CORS preflight)
    if (request.method === "OPTIONS") {
      const response = new NextResponse(null, { status: 204 });
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

    const response = NextResponse.next();
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
