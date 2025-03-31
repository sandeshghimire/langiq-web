declare module 'nodemailer' {
    interface Transporter {
        sendMail(mailOptions: Mail.Options): Promise<SentMessageInfo>;
        verify(): Promise<boolean>;
    }

    interface SentMessageInfo {
        messageId: string;
        envelope: any;
        accepted: string[];
        rejected: string[];
        pending: string[];
        response: string;
    }

    namespace Mail {
        interface Options {
            from?: string;
            to?: string | string[];
            cc?: string | string[];
            bcc?: string | string[];
            subject?: string;
            text?: string;
            html?: string;
            attachments?: {
                filename?: string;
                content?: any;
                path?: string;
                contentType?: string;
            }[];
            headers?: { [key: string]: string };
            [key: string]: any;
        }
    }

    interface TransportOptions {
        host?: string;
        port?: number;
        secure?: boolean;
        auth?: {
            user?: string;
            pass?: string;
        };
        tls?: {
            rejectUnauthorized?: boolean;
        };
        debug?: boolean;
        [key: string]: any;
    }

    function createTransport(options: TransportOptions): Transporter;
    function createTransport(transport: any, defaults?: any): Transporter;

    const nodemailer: {
        createTransport: typeof createTransport;
    };

    export default nodemailer;
}
