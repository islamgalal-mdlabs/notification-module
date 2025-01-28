
import { ApiProperty } from '@nestjs/swagger';
import { NotificationStatus } from '../enum/notification-status';
import { BaseDTO } from './base.dto';
import { NotificationTopicDTO } from './notification-topic.dto';
import { RelNotificationUserDTO } from './notification-user.dto';


export class NotificationDTO extends BaseDTO {
    @ApiProperty({ description: 'title field', required: false })
    title: string;

    @ApiProperty({ description: 'message field', required: false })
    message: string;

    @ApiProperty({ enum: NotificationStatus, description: 'status enum field', required: false })
    status: NotificationStatus;

    @ApiProperty({ description: 'type field', required: false })
    type: string;

    @ApiProperty({ description: 'scope field', required: false })
    scope: string;

    @ApiProperty({ description: 'metaData field', required: false })
    metaData: string;

    @ApiProperty({
        type: () => RelNotificationUserDTO,
        isArray: true,
        description: 'relNotificationUsers relationship',
    })
    relNotificationUsers: RelNotificationUserDTO[];

    @ApiProperty({ type: () => NotificationTopicDTO, description: 'notificationTopic relationship' })
    notificationTopic: NotificationTopicDTO;
}
