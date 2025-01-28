
import { ApiProperty } from '@nestjs/swagger';
import { BaseDTO } from './base.dto';

import { NotificationDTO } from './notification.dto';
import { RelUserNotificationTopicDTO } from './rel-user-notification-topic.dto';

export class NotificationTopicDTO extends BaseDTO {
    @ApiProperty({ description: 'topicId field', required: false })
    topicId: number;

    @ApiProperty({ description: 'topicName field', required: false })
    topicName: string;

    @ApiProperty({ type: () => NotificationDTO, description: 'notification relationship' })
    notification: NotificationDTO;

    @ApiProperty({
        type: () => RelUserNotificationTopicDTO,
        isArray: true,
        description: 'relUserNotificationTopics relationship',
    })
    relUserNotificationTopics: RelUserNotificationTopicDTO[];

}
