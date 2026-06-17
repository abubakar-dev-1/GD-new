import { NextResponse } from "next/server";

// Kept server-side so the endpoint isn't exposed in client JS.
// Override with the SHEETDB_API_URL env var.
const SHEETDB_API_URL =
  process.env.SHEETDB_API_URL || "https://sheetdb.io/api/v1/e2ormwywhf12h";

const EMAIL_REGEX = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

export async function POST(request: Request) {
  let email = "";
  let name = "Newsletter Subscriber";

  try {
    const body = await request.json();
    if (typeof body?.email === "string") email = body.email.trim();
    if (typeof body?.name === "string" && body.name.trim()) name = body.name.trim();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  if (!EMAIL_REGEX.test(email)) {
    return NextResponse.json(
      { error: "A valid email is required." },
      { status: 400 }
    );
  }

  try {
    const res = await fetch(SHEETDB_API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ data: { User_name: name, Email: email } }),
    });

    if (!res.ok) {
      return NextResponse.json(
        { error: "Subscription service is unavailable." },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { error: "Subscription service is unavailable." },
      { status: 502 }
    );
  }
}
