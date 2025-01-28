import { BaseEntity } from './base.entity';
import { Notification } from './notification.entity';
export declare class RelNotificationUser extends BaseEntity {
    userId: number;
    notification: Notification;
}
