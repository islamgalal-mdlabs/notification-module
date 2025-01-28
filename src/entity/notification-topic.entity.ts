import { Entity, Column, JoinColumn, OneToOne, ManyToMany, JoinTable } from 'typeorm';

import { Notification } from './notification.entity';
import { RelUserNotificationTopic } from './rel-user-notification-topic.entity';
import { BaseEntity } from './base.entity';

@Entity('notification_topic')
export class NotificationTopic extends BaseEntity {
    @Column({ type: 'integer', name: 'topic_id', nullable: true })
    topicId: number;

    @Column({ name: 'topic_name', nullable: true })
    topicName: string;

    @OneToOne(type => Notification)
    @JoinColumn()
    notification: Notification;

    @ManyToMany(type => RelUserNotificationTopic)
    @JoinTable({
        name: 'rel_notification_topic__rel_user_notification_topic',
        joinColumn: { name: 'notification_topic_id', referencedColumnName: 'id' },
        inverseJoinColumn: { name: 'rel_user_notification_topic_id', referencedColumnName: 'id' },
    })
    relUserNotificationTopics: RelUserNotificationTopic[];
}
