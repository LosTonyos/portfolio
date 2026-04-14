import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const { nom, email, sujet, message } = await req.json();

  try {
    await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: "jeupour@outlook.fr",
      subject: `[Portfolio] ${sujet}`,
      text: `Nom : ${nom}\nEmail : ${email}\n\n${message}`,
      html: `
        <p><strong>Nom :</strong> ${nom}</p>
        <p><strong>Email :</strong> ${email}</p>
        <p><strong>Sujet :</strong> ${sujet}</p>
        <hr/>
        <p>${message.replace(/\n/g, "<br/>")}</p>
      `,
    });
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
