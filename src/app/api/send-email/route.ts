import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { type, formData } = body;

        // Configure transporter based on form type
        let transporter;
        let recipientEmail;

        if (type === 'investor') {
            transporter = nodemailer.createTransport({
                host: process.env.INVESTOR_SMTP_SERVER,
                port: parseInt(process.env.INVESTOR_SMTP_PORT || '465'),
                secure: process.env.INVESTOR_SSL === 'true',
                auth: {
                    user: process.env.INVESTOR_EMAIL,
                    pass: process.env.INVESTOR_PASSWORD,
                },
            });
            recipientEmail = process.env.INVESTOR_EMAIL;
        } else {
            transporter = nodemailer.createTransport({
                host: process.env.INFO_SMTP_SERVER,
                port: parseInt(process.env.INFO_SMTP_PORT || '465'),
                secure: process.env.INFO_SSL === 'true',
                auth: {
                    user: process.env.INFO_EMAIL,
                    pass: process.env.INFO_PASSWORD,
                },
            });
            recipientEmail = process.env.INFO_EMAIL;
        }

        let emailContent = '';
        let subject = '';

        if (type === 'client') {
            subject = 'New Client Contact Form Submission';
            emailContent = `
        <h2>New Client Contact Form Submission</h2>
        <p><strong>Name:</strong> ${formData.firstName} ${formData.lastName}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Company:</strong> ${formData.company || 'Not provided'}</p>
        <p><strong>Phone:</strong> ${formData.phone || 'Not provided'}</p>
        <p><strong>Message:</strong> ${formData.message || 'No message'}</p>
      `;
        } else if (type === 'investor') {
            subject = 'New Investor Information Submission';
            emailContent = `
        <h2>New Investor Information Submission</h2>
        <p><strong>Name:</strong> ${formData.name}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Company:</strong> ${formData.company || 'Not provided'}</p>
        <p><strong>Previous Experience:</strong> ${formData.previousExperience || 'Not provided'}</p>
        <p><strong>Questions/Comments:</strong> ${formData.questions || 'None'}</p>
      `;
        }

        const mailOptions = {
            from: type === 'investor' ? process.env.INVESTOR_EMAIL : process.env.INFO_EMAIL,
            to: recipientEmail,
            subject: subject,
            html: emailContent,
        };

        await transporter.sendMail(mailOptions);

        return NextResponse.json({ success: true, message: 'Email sent successfully' });
    } catch (error) {
        console.error('Email sending error:', error);
        return NextResponse.json(
            { success: false, message: 'Failed to send email' },
            { status: 500 }
        );
    }
}
