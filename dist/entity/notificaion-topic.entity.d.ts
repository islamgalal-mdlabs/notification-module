import { BaseEntity } from './base.entity';
import { Notification } from './notification.entity';
export declare class NotificationTopic extends BaseEntity {
    category: string;
    topicId: number;
    relatedTopicId: number;
    notification: Notification;
}
