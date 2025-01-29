export interface NotificationModuleOptions {
    database?: {
      type: 'postgres' | 'mysql';
      host: string;
      port: number;
      username: string;
      password: string;
      database: string;
    };
    channels?: {
      email?: {
        provider: 'nodemailer' | 'ses' | 'sendgrid';
        config: Record<string, any>;
      };
      sms?: {
        provider: 'twilio' | 'nexmo';
        config: Record<string, any>;
      };
      push?: {
        provider: 'fcm';
        config: any;
      };
      websocket?: {
        enabled: boolean;
      };
    };
    queue?: {
      redis?: {
        host: string;
        port: number;
        password?: string;
      };
    };
    templates?: {
      engine: 'handlebars' | 'ejs';
      directory: string;
    };
  }