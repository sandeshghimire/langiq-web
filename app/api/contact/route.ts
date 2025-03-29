import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, email, company, message, interest, type } = body;

        // Validate required fields
        if (!name || !email || !message) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            );
        }

        // Determine which email to use based on the contact type
        const toEmail = type === 'investor'
            ? process.env.INVESTOR_EMAIL
            : process.env.INFO_EMAIL;

        const fromEmail = type === 'investor'
            ? process.env.INVESTOR_EMAIL
            : process.env.INFO_EMAIL;

        // Log email configuration (for debugging)
        console.log('Email configuration:', {
            host: process.env.EMAIL_HOST,
            port: process.env.EMAIL_PORT,
            fromEmail,
            toEmail,
        });

        // Create transporter with the specific settings provided
        const transporter = nodemailer.createTransport({
            host: process.env.EMAIL_HOST, // smtp.domain.com
            port: Number(process.env.EMAIL_PORT), // 465
            secure: true, // SSL is enabled
            auth: {
                user: fromEmail,
                pass: process.env.EMAIL_PASSWORD,
            },
            debug: process.env.EMAIL_DEBUG === 'true',
        });

        // Verify connection configuration
        try {
            await transporter.verify();
            console.log('SMTP connection verified successfully');
        } catch (verifyError: any) {
            console.error('SMTP verification error:', verifyError);
            console.error('Error details:', {
                code: verifyError.code,
                command: verifyError.command,
                responseCode: verifyError.responseCode,
                response: verifyError.response
            });

            return NextResponse.json(
                {
                    error: 'Email server connection failed',
                    details: `${verifyError.message} (Code: ${verifyError.code || 'unknown'})`
                },
                { status: 500 }
            );
        }

        // Email subject based on type
        const subject = type === 'investor'
            ? `Investment Inquiry from ${name}`
            : `${interest} Inquiry from ${name}`;

        // Compose email content
        const mailOptions = {
            from: `"LangIQ Contact" <${fromEmail}>`,
            to: toEmail,
            replyTo: email,
            subject: subject,
            text: `
Name: ${name}
Email: ${email}
${company ? `Company: ${company}\n` : ''}
Interest: ${interest}

Message:
${message}
            `,
            html: `
                <h2>New Contact Form Submission</h2>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                ${company ? `<p><strong>Company:</strong> ${company}</p>` : ''}
                <p><strong>Interest:</strong> ${interest}</p>
                <p><strong>Message:</strong></p>
                <p>${message.replace(/\n/g, '<br/>')}</p>
            `,
        };

        // Send email with proper error handling
        try {
            const info = await transporter.sendMail(mailOptions);
            console.log('Message sent successfully:', info.messageId);
            return NextResponse.json({
                success: true,
                messageId: info.messageId
            });
        } catch (sendError: any) {
            console.error('Email sending error details:', sendError);
            return NextResponse.json(
                {
                    error: 'Failed to send email',
                    details: sendError.message
                },
                { status: 500 }
            );
        }
    } catch (error: any) {
        console.error('Contact API error:', error);
        return NextResponse.json(
            {
                error: 'Server error processing your request',
                details: error.message
            },
            { status: 500 }
        );
    }
}
