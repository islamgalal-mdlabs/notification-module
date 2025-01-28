import { NotificationTopic } from './notification-topic.entity';
import { BaseEntity } from './base.entity';
export declare class RelUserNotificationTopic extends BaseEntity {
    userId: number;
    notificationTopics: NotificationTopic[];
}
