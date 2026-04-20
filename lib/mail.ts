export type MailPayload = {
  name: string;
  email: string;
  message: string;
};

/**
 * Send a contact form email.
 * Wire up to your preferred email provider (Resend, SendGrid, Nodemailer, etc.)
 */
export async function sendMail(payload: MailPayload): Promise<void> {
  const { name, email, message } = payload;

  // Example: Resend
  // const res = await fetch("https://api.resend.com/emails", {
  //   method: "POST",
  //   headers: {
  //     Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify({
  //     from: "onboarding@resend.dev",
  //     to: process.env.CONTACT_EMAIL,
  //     subject: `New message from ${name}`,
  //     text: `From: ${email}\n\n${message}`,
  //   }),
  // });
  // if (!res.ok) throw new Error("Failed to send email");

  console.log("sendMail called:", { name, email, message });
  throw new Error("Configure an email provider in lib/mail.ts");
}
