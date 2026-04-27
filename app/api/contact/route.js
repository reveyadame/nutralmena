import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, phone, message } = body;

    if (!name || !phone || !message) {
      return NextResponse.json({ error: "Todos los campos son obligatorios" }, { status: 400 });
    }

    // Configuración de nodemailer. 
    // Por defecto usa SMTP estándar, si el cliente en Plesk tiene su correo alojado ahí mismo, 
    // localhost o el dominio funcionarán. Recomendamos que pongan su pass en .env
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "localhost",
      port: process.env.SMTP_PORT || 587,
      secure: process.env.SMTP_SECURE === "true",
      auth: process.env.SMTP_USER ? {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      } : undefined,
      tls: {
        rejectUnauthorized: false
      }
    });

    const mailOptions = {
      from: process.env.SMTP_FROM || '"Nutralmena Web" <info@nutralmena.com>',
      to: "info@nutralmena.com", // El usuario pidió info@nutralmena.com
      subject: `Nuevo mensaje de contacto de ${name}`,
      text: `Nombre: ${name}\nTeléfono: ${phone}\nMensaje:\n${message}`,
      html: `<p><strong>Nombre:</strong> ${name}</p>
             <p><strong>Teléfono:</strong> ${phone}</p>
             <p><strong>Mensaje:</strong><br/>${message.replace(/\n/g, '<br/>')}</p>`
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: "Mensaje enviado exitosamente" });
  } catch (error) {
    console.error("Error enviando correo:", error);
    return NextResponse.json({ error: "Error al enviar el mensaje. Por favor intenta más tarde." }, { status: 500 });
  }
}
