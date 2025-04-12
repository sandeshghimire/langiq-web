import { TransportOptions } from 'nodemailer';

interface EmailConfig {
    getTransportConfig: (isInvestor: boolean) => TransportOptions;
    getEmailAddress: (isInvestor: boolean) => string;
}

// Email configuration that doesn't expose secrets directly
const emailConfig: EmailConfig = {
    getTransportConfig: (isInvestor: boolean) => {
        return {
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
    },

    getEmailAddress: (isInvestor: boolean) => {
        return isInvestor
            ? process.env.INVESTOR_EMAIL || 'investors@langiq.ai'
            : process.env.INFO_EMAIL || 'info@langiq.ai';
    }
};

export default emailConfig;
