import { ApiProperty } from '@nestjs/swagger';
import { BaseDTO } from './base.dto';

import { NotificationTopicDTO } from './notification-topic.dto';


export class RelUserNotificationTopicDTO extends BaseDTO {
    @ApiProperty({ description: 'userId field', required: false })
    userId: number;

    @ApiProperty({ type: () => NotificationTopicDTO, isArray: true, description: 'notificationTopics relationship' })
    notificationTopics: NotificationTopicDTO[];
}
