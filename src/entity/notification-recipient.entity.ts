import { Entity, Column, ManyToOne, Index } from 'typeorm';
import { BaseEntity } from './base.entity';
import { NotificationEntity } from './notification.entity';
import { NotificationDeliveryStatus } from '../enum/notification-delivery-status.enum';

@Entity('notification_recipients')
@Index(['recipientId', 'status'])
export class NotificationRecipient extends BaseEntity {
  @Column()
  recipientId: string;

  @Column({
    type: 'enum',
    enum: NotificationDeliveryStatus,
    default: NotificationDeliveryStatus.PENDING,
  })
  status: NotificationDeliveryStatus;

  @Column({ type: 'timestamp', nullable: true })
  deliveredAt?: Date;

  @Column({ type: 'timestamp', nullable: true })
  readAt?: Date;

  @Column({ type: 'jsonb', nullable: true })
  metadata?: Record<string, any>;

  @ManyToOne(() => NotificationEntity, notification => notification.recipients, {
    onDelete: 'CASCADE'
  })
  notification: NotificationEntity;
}
