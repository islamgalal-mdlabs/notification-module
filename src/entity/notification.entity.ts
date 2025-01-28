
import { Entity, Column, OneToOne, OneToMany } from 'typeorm';

import { RelNotificationUser } from './rel-notification-user.entity';
import { NotificationTopic } from './notification-topic.entity';
import { BaseEntity } from './base.entity';
import { NotificationStatus } from '../enum/notification-status';

@Entity('notification')
export class Notification extends BaseEntity {
    @Column({ name: 'title', nullable: true })
    title: string;

    @Column({ name: 'message', nullable: true })
    message: string;

    @Column({ type: 'simple-enum', name: 'status', enum: NotificationStatus })
    status: NotificationStatus;

    @Column({ name: 'type', nullable: true })
    type: string;

    @Column({ name: 'scope', nullable: true })
    scope: string;

    @Column({ name: 'meta_data', nullable: true })
    metaData: string;

    @OneToMany(type => RelNotificationUser, other => other.notification)
    relNotificationUsers: RelNotificationUser[];

    @OneToOne(type => NotificationTopic)
    notificationTopic: NotificationTopic;

}
