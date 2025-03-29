import nodemailer from 'nodemailer';

/**
 * Creates and verifies a nodemailer transporter for sending emails
 * @param email The email address to use for sending
 * @param password The password for the email account
 * @param host The SMTP host server
 * @param port The SMTP server port
 * @param secure Whether to use SSL/TTLS
 * @returns A verified nodemailer transporter or throws an error
 */
export async function createVerifiedTransporter(
    email: string,
    password: string,
    host: string,
    port: number,
    secure = true
) {
    // Create transporter with provided configuration
    const transporter = nodemailer.createTransport({
        host: host,
        port: port,
        secure: secure, // SSL/TLS
        auth: {
            user: email,
            pass: password,
        },
        tls: {
            // Don't fail on invalid certificates if specified in env
            rejectUnauthorized: process.env.EMAIL_REJECT_UNAUTHORIZED !== 'false'
        },
        // Debug options
        debug: process.env.EMAIL_DEBUG === 'true',
        logger: process.env.EMAIL_DEBUG === 'true',
    });

    // Verify connection configuration
    try {
        await transporter.verify();
        console.log('Email transport verified successfully');
        return transporter;
    } catch (error) {
        console.error('Transport verification failed:', error);
        throw error;
    }
}

/**
 * Helper function to get email configuration based on service type
 */
export function getEmailConfig(service: string, email: string, password: string) {
    switch (service) {
        case 'gmail':
            return {
                service: 'gmail',
                auth: {
                    user: email,
                    pass: password,
                },
            };
        case 'office365':
            return {
                host: 'smtp.office365.com',
                port: 587,
                secure: false,
                auth: {
                    user: email,
                    pass: password,
                },
                requireTLS: true,
            };
        // Add more services as needed
        default:
            return null;
    }
}

/**
 * Send a test email to verify configuration
 */
export async function sendTestEmail(transporter: nodemailer.Transporter, fromEmail: string) {
    try {
        const info = await transporter.sendMail({
            from: `"Test" <${fromEmail}>`,
            to: fromEmail,
            subject: "Test Email",
            text: "This is a test email to verify SMTP configuration",
            html: "<p>This is a test email to verify SMTP configuration</p>",
        });

        return { success: true, messageId: info.messageId };
    } catch (error) {
        console.error('Test email failed:', error);
        throw error;
    }
}
