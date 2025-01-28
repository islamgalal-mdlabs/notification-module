import { Notification } from './notification.entity';
import { BaseEntity } from './base.entity';
export declare class RelNotificationUser extends BaseEntity {
    userId: number;
    notification: Notification;
}
