import { Entity, Column } from 'typeorm';
import { BaseEntity } from './base.entity';

@Entity('notification_configuration')
export class NotificationConfiguration extends BaseEntity {
    @Column({ name: 'key', nullable: true })
    key: string;

    @Column({ name: 'value', nullable: true })
    value: string;

}
