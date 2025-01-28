import { Notification } from './notification.entity';
import { RelUserNotificationTopic } from './rel-user-notification-topic.entity';
import { BaseEntity } from './base.entity';
export declare class NotificationTopic extends BaseEntity {
    topicId: number;
    topicName: string;
    notification: Notification;
    relUserNotificationTopics: RelUserNotificationTopic[];
}
