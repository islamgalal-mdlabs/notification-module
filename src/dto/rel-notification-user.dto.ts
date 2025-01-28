import { ApiProperty } from '@nestjs/swagger';
import { BaseDTO } from './base.dto';

import { NotificationDTO } from './notification.dto';

export class RelNotificationUserDTO extends BaseDTO {
    @ApiProperty({ description: 'userId field', required: false })
    userId: number;

    @ApiProperty({ type: () => NotificationDTO, description: 'notification relationship' })
    notification: NotificationDTO;

}
