import { NextResponse } from "next/server";
import { resend } from "@/lib/resend";
import WaitlistConfirmation from "../../../../emails/waitlist-confirmation";

export const runtime = "nodejs";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type Payload = {
  name?: string;
  email?: string;
  company?: string;
  industry?: string;
  website?: string; // honeypot
};

export async function POST(request: Request) {
  let body: Payload;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const name = body.name?.trim() ?? "";
  const email = body.email?.trim() ?? "";
  const company = body.company?.trim() ?? "";
  const industry = body.industry?.trim() ?? "";
  const honey = body.website?.trim() ?? "";

  if (honey) {
    return NextResponse.json({ ok: true }, { status: 200 });
  }

  if (!name || !EMAIL_RE.test(email)) {
    return NextResponse.json({ error: "Name and valid email required" }, { status: 400 });
  }

  const from = process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev";
  const notifyTo = process.env.WAITLIST_NOTIFY_EMAIL || "edward@qplan.co.uk";

  if (!process.env.RESEND_API_KEY) {
    console.error("[waitlist] RESEND_API_KEY is not set; skipping send.");
    return NextResponse.json({ error: "Email service not configured" }, { status: 500 });
  }

  const timestamp = new Date().toISOString();
  const notificationText = [
    `New QPlan waitlist signup`,
    ``,
    `Name:      ${name}`,
    `Email:     ${email}`,
    `Company:   ${company || "—"}`,
    `Industry:  ${industry || "—"}`,
    `Submitted: ${timestamp}`,
  ].join("\n");

  const results = await Promise.allSettled([
    resend.emails.send({
      from,
      to: email,
      subject: "You're on the QPlan waitlist",
      react: WaitlistConfirmation({ industry: industry || "your field" }),
    }),
    resend.emails.send({
      from,
      to: notifyTo,
      replyTo: email,
      subject: `New QPlan waitlist signup: ${name}`,
      text: notificationText,
    }),
  ]);

  results.forEach((r, i) => {
    if (r.status === "rejected") {
      console.error(`[waitlist] send #${i} rejected:`, r.reason);
    } else if (r.value?.error) {
      console.error(`[waitlist] send #${i} resend error:`, r.value.error);
    }
  });

  return NextResponse.json({ ok: true }, { status: 200 });
}
