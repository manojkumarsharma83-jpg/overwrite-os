import { NextRequest, NextResponse } from "next/server";

async function digest(value: string) {
  const data = new TextEncoder().encode(value);
  const hash = await crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(hash)).map((byte) => byte.toString(16).padStart(2, "0")).join("");
}

export async function middleware(request: NextRequest) {
  const password = process.env.OVERWRITE_OS_PASSWORD;
  const token = request.cookies.get("overwrite_os_access")?.value;

  if (password && token === await digest(password)) return NextResponse.next();

  return NextResponse.rewrite(new URL("/access", request.url));
}

export const config = {
  matcher: ["/os/:path*"],
};
