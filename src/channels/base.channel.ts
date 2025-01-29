import { Injectable } from '@nestjs/common';

export interface NotificationPayload {
  to: string | string[];
  subject?: string;
  body: string;
  template?: string;
  data?: Record<string, any>;
}

@Injectable()
export abstract class BaseNotificationChannel {
  abstract send(payload: NotificationPayload): Promise<void>;
  abstract validateConfig(): Promise<boolean>;
} 