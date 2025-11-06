import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const { name, email } = await req.json();

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.SMTP_USER, // your Gmail
      pass: process.env.SMTP_PASS, // app password (not your real password)
    },
  });

  const approveLink = `${process.env.NEXT_PUBLIC_SITE_URL}/api/approve-user?email=${email}`;

  await transporter.sendMail({
    from: `"Altius 2025" <${process.env.SMTP_USER}>`,
    to: "suraj.b.melligeri@gmail.com",
    subject: "🆕 New Signup Request - Altius 2025",
    html: `
      <h3>New signup request received</h3>
      <p><b>Name:</b> ${name}</p>
      <p><b>Email:</b> ${email}</p>
      <a href="${approveLink}" style="background:#E63946;color:white;padding:10px 20px;border-radius:6px;text-decoration:none;">Approve User</a>
    `,
  });

  return NextResponse.json({ success: true });
}
