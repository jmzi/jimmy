import nodemailer from "nodemailer";

export type MailPayload = {
  name: string;
  email: string;
  subject?: string;
  message: string;
};

export async function sendMail(payload: MailPayload): Promise<void> {
  const { name, email, subject, message } = payload;

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  await transporter.sendMail({
    from: `"${name}" <${process.env.SMTP_USER}>`,
    replyTo: email,
    to: process.env.CONTACT_EMAIL,
    subject: subject ? `[Contact] ${subject}` : `[Contact] New message from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p><hr/><p>${message.replace(/\n/g, "<br/>")}</p>`,
  });
}
