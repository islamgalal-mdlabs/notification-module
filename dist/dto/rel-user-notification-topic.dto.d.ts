import { BaseDTO } from './base.dto';
import { NotificationTopicDTO } from './notification-topic.dto';
export declare class RelUserNotificationTopicDTO extends BaseDTO {
    userId: number;
    notificationTopics: NotificationTopicDTO[];
}
