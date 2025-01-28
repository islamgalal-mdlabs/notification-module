import { Entity, Column, ManyToMany } from 'typeorm';

import { NotificationTopic } from './notification-topic.entity';
import { BaseEntity } from './base.entity';

@Entity('rel_user_notification_topic')
export class RelUserNotificationTopic extends BaseEntity {
    @Column({ type: 'integer', name: 'user_id', nullable: true })
    userId: number;

    @ManyToMany(type => NotificationTopic)
    notificationTopics: NotificationTopic[];

}
