import { NextRequest, NextResponse } from 'next/server';
import { render } from '@react-email/render';
import nodemailer from 'nodemailer';
import { Resend } from 'resend';
import ContactFormEmail from '@/emails/ContactFormEmail';
import ThankYouEmail from '@/emails/ThankYouEmail';

export async function POST(request: NextRequest) {
  try {
    const { firstName, lastName, email, phone, message } = await request.json();

    if (!firstName || !lastName || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Load environment 
    console.log('EMAIL_USER:', process.env.EMAIL_USER ? 'Set' : 'Not set');
    console.log('EMAIL_APP_PASSWORD:', process.env.EMAIL_APP_PASSWORD ? 'Set' : 'Not set');
    console.log('RESEND_API_KEY:', process.env.RESEND_API_KEY ? 'Set' : 'Not set');

    // cek environment (IMPORTANT)
    if (!process.env.EMAIL_USER || !process.env.EMAIL_APP_PASSWORD) {
      return NextResponse.json(
        { error: 'Email configuration missing. Please check your environment variables.' },
        { status: 500 }
      );
    }

    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json(
        { error: 'Resend API key missing. Please check your environment variables.' },
        { status: 500 }
      );
    }

    // fungsi transporter pake Gmail SMTP
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_APP_PASSWORD, 
      },
    });

    // Render email
    const emailHtml = await render(ContactFormEmail({
      firstName,
      lastName,
      email,
      phone,
      message,
    }));

    // Email options
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: `New Contact Form Submission from ${firstName} ${lastName}`,
      html: emailHtml,
      replyTo: email, //pastikan balas ke sender
    };

    await transporter.sendMail(mailOptions);

    try {
      const resend = new Resend(process.env.RESEND_API_KEY);
      
      const thankYouHtml = await render(ThankYouEmail({
        firstName,
        lastName,
      }));

      console.log('Sending thank you email to:', email);

      const resendResult = await resend.emails.send({
        from: 'CPS Laboratory <onboarding@resend.dev>',
        to: [email],
        subject: 'Thank you for contacting CPS Laboratory!',
        html: thankYouHtml,
      });

      console.log('Resend email sent successfully:', resendResult);
    } catch (resendError) {
      console.error('Error sending thank you email via Resend:', resendError);
    }

    return NextResponse.json(
      { message: 'Emails sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}
