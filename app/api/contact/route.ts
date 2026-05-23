import { sendMail } from "@/lib/mail";
import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const { name, email, subject, message } = body as Record<string, string>;

  if (!name || !email || !message) {
    return Response.json({ error: "Missing required fields" }, { status: 400 });
  }

  try {
    await sendMail({ name, email, subject, message });
    return Response.json({ ok: true });
  } catch (err) {
    console.error("sendMail error:", err);
    return Response.json({ error: "Failed to send email" }, { status: 500 });
  }
}
