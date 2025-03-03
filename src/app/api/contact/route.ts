import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
    try {
        // Parse the form data from the request
        const formData = await request.json();
        const { name, email, company, message, subject } = formData;

        // Create a nodemailer transport with the provided credentials
        const transporter = nodemailer.createTransport({
            host: 'smtp.domain.com',  // Use the SMTP server provided
            port: 587,  // Standard SMTP port
            secure: false,  // true for 465, false for other ports
            auth: {
                user: 'info@langiq.ai',
                pass: 'kMQzXJ7W$Q9kb3s',
            },
        });

        // Create the email content
        const mailOptions = {
            from: '"LangIQ Contact" <info@langiq.ai>',
            to: 'sandesh.ghimire@langiq.ai',
            replyTo: email,
            subject: `Contact Form: ${subject}`,
            text: `
        Name: ${name}
        Email: ${email}
        Company: ${company || 'Not provided'}
        Subject: ${subject}
        
        Message:
        ${message}
      `,
            html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company || 'Not provided'}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <h3>Message:</h3>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
        };

        // Send the email
        await transporter.sendMail(mailOptions);

        // Return success response
        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json(
            { error: 'Failed to send email' },
            { status: 500 }
        );
    }
}
