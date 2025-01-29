import { Entity, Column, ManyToOne, Index } from 'typeorm';
import { BaseEntity } from './base.entity';
import { NotificationTopic } from './notification-topic.entity';

@Entity('topic_subscriptions')
@Index(['subscriberId', 'topic'])
export class TopicSubscription extends BaseEntity {
  @Column()
  subscriberId: string;

  @Column({ default: true })
  isActive: boolean;

  @Column({ type: 'jsonb', nullable: true })
  preferences?: Record<string, any>;

  @ManyToOne(() => NotificationTopic, (topic) => topic.subscriptions, {
    onDelete: 'CASCADE',
  })
  topic: NotificationTopic;
}
