import { NotificationStatus } from '../enum/notification-status';
import { BaseDTO } from './base.dto';
import { NotificationTopicDTO } from './notification-topic.dto';
import { RelNotificationUserDTO } from './notification-user.dto';
export declare class NotificationDTO extends BaseDTO {
    title: string;
    message: string;
    status: NotificationStatus;
    type: string;
    scope: string;
    metaData: string;
    relNotificationUsers: RelNotificationUserDTO[];
    notificationTopic: NotificationTopicDTO;
}
