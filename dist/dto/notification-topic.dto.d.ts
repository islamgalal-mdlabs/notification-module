import { BaseDTO } from './base.dto';
import { NotificationDTO } from './notification.dto';
import { RelUserNotificationTopicDTO } from './rel-user-notification-topic.dto';
export declare class NotificationTopicDTO extends BaseDTO {
    topicId: number;
    topicName: string;
    notification: NotificationDTO;
    relUserNotificationTopics: RelUserNotificationTopicDTO[];
}
