
import { Entity, Column, ManyToOne } from 'typeorm';

import { Notification } from './notification.entity';
import { BaseEntity } from './base.entity';


@Entity('rel_notification_user')
export class RelNotificationUser extends BaseEntity {
    @Column({ type: 'integer', name: 'user_id', nullable: true })
    userId: number;

    @ManyToOne(type => Notification)
    notification: Notification;


}
