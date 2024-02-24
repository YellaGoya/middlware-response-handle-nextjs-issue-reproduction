import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  if (req.method === "POST") {
    return Response.json(
      { message: "Too Many Requests." },
      {
        status: 429,
      }
    );
  }

  return NextResponse.next();
}