import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  console.log("middleware running");
  return NextResponse.redirect(new URL("/dashboard/users", request.url));
}

export const config = {
  matcher: "/",
};
