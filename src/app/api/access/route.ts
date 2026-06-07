import { createHash, timingSafeEqual } from "node:crypto";
import { NextResponse } from "next/server";

const COOKIE_NAME = "overwrite_os_access";

function digest(value: string) {
  return createHash("sha256").update(value).digest("hex");
}

export async function POST(request: Request) {
  const configuredPassword = process.env.OVERWRITE_OS_PASSWORD;
  if (!configuredPassword) {
    return NextResponse.json({ error: "Access password is not configured." }, { status: 503 });
  }

  const body = (await request.json().catch(() => ({}))) as { password?: string };
  const provided = Buffer.from(digest(body.password ?? ""));
  const expected = Buffer.from(digest(configuredPassword));

  if (!timingSafeEqual(provided, expected)) {
    return NextResponse.json({ error: "Invalid access key." }, { status: 401 });
  }

  const response = NextResponse.json({ ok: true });
  response.cookies.set(COOKIE_NAME, digest(configuredPassword), {
    httpOnly: true,
    sameSite: "strict",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 12,
  });
  return response;
}
