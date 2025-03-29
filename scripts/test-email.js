// Run this script with: node scripts/test-email.js
require('dotenv').config({ path: '.env.local' });
const nodemailer = require('nodemailer');

async function testEmailConnection() {
    console.log('Testing email connection...');
    console.log('Email configuration:', {
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        secure: true, // SSL is enabled as per your settings
        user: process.env.INFO_EMAIL,
        // password is hidden
    });

    let transporter;

    try {
        // Using the exact SMTP settings you provided
        transporter = nodemailer.createTransport({
            host: process.env.EMAIL_HOST, // smtp.domain.com
            port: Number(process.env.EMAIL_PORT), // 465
            secure: true, // SSL is enabled
            auth: {
                user: process.env.INFO_EMAIL,
                pass: process.env.EMAIL_PASSWORD,
            },
            debug: true,
        });

        console.log('Verifying connection...');
        await transporter.verify();
        console.log('✅ SMTP connection successful!');

        console.log('Sending test email...');
        const info = await transporter.sendMail({
            from: `"Test" <${process.env.INFO_EMAIL}>`,
            to: process.env.INFO_EMAIL, // Send to self for testing
            subject: 'Test Email',
            text: 'This is a test email to verify SMTP configuration',
            html: '<p>This is a test email to verify SMTP configuration</p>',
        });

        console.log('✅ Test email sent successfully!');
        console.log('Message ID:', info.messageId);
    } catch (error) {
        console.error('❌ Email test failed:', error);
        console.error('Error details:', {
            code: error.code,
            command: error.command,
            response: error.response,
        });

        if (error.code === 'EAUTH') {
            console.log('\n🔑 Authentication failed. Possible solutions:');
            console.log('1. Double-check your email and password');
            console.log('2. Make sure SMTP is enabled for your email account');
        } else if (error.code === 'ESOCKET' || error.code === 'ECONNECTION') {
            console.log('\n🔌 Connection failed. Possible solutions:');
            console.log('1. Check if "domain.com" needs to be replaced with your actual domain');
            console.log('2. Verify your network allows connections to the SMTP server');
            console.log('3. Check if port 465 is blocked by a firewall');
        }
    }
}

testEmailConnection();
