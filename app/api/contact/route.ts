import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
    try {
        // Parse the request body
        const body = await request.json();
        const { name, email, company, message, interest, type } = body;

        // Validate required fields
        if (!name || !email || !message) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            );
        }

        // Determine which email configuration to use based on the form type
        const isInvestor = type === 'investor';

        // Configure email transport
        const transportConfig = {
            host: isInvestor
                ? process.env.INVESTOR_SMTP_SERVER
                : process.env.INFO_SMTP_SERVER,
            port: isInvestor
                ? parseInt(process.env.INVESTOR_SMTP_PORT || '465')
                : parseInt(process.env.INFO_SMTP_PORT || '465'),
            secure: isInvestor
                ? process.env.INVESTOR_SSL === 'true'
                : process.env.INFO_SSL === 'true',
            auth: {
                user: isInvestor
                    ? process.env.INVESTOR_EMAIL
                    : process.env.INFO_EMAIL,
                pass: isInvestor
                    ? process.env.INVESTOR_PASSWORD
                    : process.env.INFO_PASSWORD
            }
        };

        // Create transporter
        const transporter = nodemailer.createTransport(transportConfig);

        // Set up email content
        const fromEmail = isInvestor
            ? process.env.INVESTOR_EMAIL
            : process.env.INFO_EMAIL;

        const companyInfo = company ? `Company: ${company}\n` : '';

        const mailOptions = {
            from: fromEmail,
            to: fromEmail, // Send to the same email address
            replyTo: email, // Set reply-to as the user's email
            subject: `${isInvestor ? 'Investor' : 'Client'} Contact: ${interest}`,
            text: `Name: ${name}
Email: ${email}
${companyInfo}
Interest: ${interest}

Message:
${message}`,
            html: `
        <h2>${isInvestor ? 'Investor' : 'Client'} Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${company ? `<p><strong>Company:</strong> ${company}</p>` : ''}
        <p><strong>Interest:</strong> ${interest}</p>
        <h3>Message:</h3>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `
        };

        // Send the email
        await transporter.sendMail(mailOptions);

        // Return success response
        return NextResponse.json({
            success: true,
            message: 'Email sent successfully'
        });

    } catch (error: any) {
        console.error('Contact form submission error:', error);

        // Return detailed error for debugging
        return NextResponse.json(
            {
                error: 'Failed to send message',
                details: error.message
            },
            { status: 500 }
        );
    }
}
