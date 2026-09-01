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
      react: WaitlistConfirmation({ name, industry: industry || "your field" }),
    }),
    resend.emails.send({
      from,
      to: notifyTo,
      replyTo: email,
      subject: `New QPlan waitlist signup: ${name}`,
      text: notificationText,
    }),
  ]);

  // Which of the two sends failed decides what the visitor is told.
  //
  // Before this, the route returned ok:true whatever happened: allSettled
  // swallows both rejections, the failures went to console.error where nobody
  // reads them, and the dialog said "You're on the list". A waitlist that had
  // stopped working would have looked exactly like a waitlist nobody had
  // joined, which is the worst possible failure for a launch page.
  //
  // The confirmation to the visitor is a courtesy: if it fails the lead is
  // still captured, so do not make them retry. The notification is the lead
  // itself; if that fails nobody has their details and saying "you're on the
  // list" would be false.
  const failed = (r: PromiseSettledResult<{ error?: unknown } | undefined>) =>
    r.status === "rejected" || Boolean(r.value?.error);

  const [confirmation, notification] = results;

  if (failed(confirmation)) {
    console.error(
      "[waitlist] confirmation to visitor failed:",
      confirmation.status === "rejected" ? confirmation.reason : confirmation.value?.error,
    );
  }

  if (failed(notification)) {
    console.error(
      "[waitlist] OWNER NOTIFICATION FAILED, lead not captured:",
      name,
      email,
      notification.status === "rejected" ? notification.reason : notification.value?.error,
    );
    return NextResponse.json(
      { error: "We could not record that. Please email edward@qplan.co.uk directly." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true }, { status: 200 });
}
