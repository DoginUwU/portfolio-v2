/* eslint-disable no-use-before-define */
/* eslint-disable class-methods-use-this */
import provider, { EmailJSResponseStatus } from '@emailjs/browser';

interface TemplateParams {
    from_name: string;
    reply_to: string;
    message: string;
}

class Mail {
    private static instance: Mail;

    constructor() {
        provider.init(import.meta.env.VITE_EMAILJS_USER_ID as string);
    }

    public static getInstance(): Mail {
        if (!Mail.instance) {
            Mail.instance = new Mail();
        }

        return Mail.instance;
    }

    async send(template: TemplateParams): Promise<EmailJSResponseStatus> {
        const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID as string;
        const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string;

        return provider.send(serviceID, templateID, template as any);
    }
}

export { Mail };
