import { Entity, Column, OneToMany, ManyToOne, Index } from 'typeorm';
import { BaseEntity } from './base.entity';
import { NotificationStatus } from '../enum/notification-status';
import { NotificationRecipient } from './notification-recipient.entity';
import { NotificationTopic } from './notification-topic.entity';

@Entity('notifications')
@Index(['status', 'scheduledAt'])
export class NotificationEntity extends BaseEntity {
  @Column()
  title: string;

  @Column({ type: 'text' })
  content: string;

  @Column({
    type: 'enum',
    enum: NotificationStatus,
    default: NotificationStatus.IMMEDIATE,
  })
  status: NotificationStatus;

  @Column({ type: 'jsonb', nullable: true })
  templateData?: Record<string, any>;

  @Column({ type: 'timestamp', nullable: true })
  scheduledAt?: Date;

  @Column({ type: 'jsonb', nullable: true })
  metadata?: Record<string, any>;

  @ManyToOne(() => NotificationTopic, (topic) => topic.notifications)
  topic?: NotificationTopic;

  @OneToMany(() => NotificationRecipient, (recipient) => recipient.notification)
  recipients: NotificationRecipient[];
}
