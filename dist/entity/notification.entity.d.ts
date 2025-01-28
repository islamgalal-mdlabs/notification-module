import { RelNotificationUser } from './rel-notification-user.entity';
import { NotificationTopic } from './notification-topic.entity';
import { BaseEntity } from './base.entity';
import { NotificationStatus } from '../enum/notification-status';
export declare class Notification extends BaseEntity {
    title: string;
    message: string;
    status: NotificationStatus;
    type: string;
    scope: string;
    metaData: string;
    relNotificationUsers: RelNotificationUser[];
    notificationTopic: NotificationTopic;
}
