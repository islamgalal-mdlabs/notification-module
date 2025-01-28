
import { ApiProperty } from '@nestjs/swagger';
import { BaseDTO } from './base.dto';


export class NotificationConfigurationDTO extends BaseDTO {
    @ApiProperty({ description: 'key field', required: false })
    key: string;

    @ApiProperty({ description: 'value field', required: false })
    value: string;

}
