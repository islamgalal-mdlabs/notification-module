import { Entity, Column, ManyToOne } from 'typeorm';
import { BaseEntity } from './base.entity';

import { Notification } from './notification.entity';


@Entity('rel_notification_user')
export class RelNotificationUser extends BaseEntity {
    @Column({ type: 'integer', name: 'user_id', nullable: true })
    userId: number;

    @ManyToOne(type => Notification)
    notification: Notification;

}
