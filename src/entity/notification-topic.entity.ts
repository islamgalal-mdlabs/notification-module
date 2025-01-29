import { Entity, Column, OneToMany, Index } from 'typeorm';
import { BaseEntity } from './base.entity';
import { NotificationEntity } from './notification.entity';
import { TopicSubscription } from './topic-subscription.entity';

@Entity('notification_topics')
@Index(['name'], { unique: true })
export class NotificationTopic extends BaseEntity {
  @Column({ unique: true })
  name: string;

  @Column({ type: 'text', nullable: true })
  description?: string;

  @Column({ default: true })
  isActive: boolean;

  @Column({ type: 'jsonb', nullable: true })
  metadata?: Record<string, any>;

  @OneToMany(() => NotificationEntity, notification => notification.topic)
  notifications: NotificationEntity[];

  @OneToMany(() => TopicSubscription, subscription => subscription.topic, {
    cascade: true
  })
  subscriptions: TopicSubscription[];
}
