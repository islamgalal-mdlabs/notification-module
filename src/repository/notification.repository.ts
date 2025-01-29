import { EntityRepository } from 'typeorm';
import { NotificationEntity } from '../entity/notification.entity';
import { BaseRepository } from './base.repository';

@EntityRepository(NotificationEntity)
export class NotificationRepository extends BaseRepository<NotificationEntity> {
  async findByRecipientId(recipientId: string): Promise<NotificationEntity[]> {
    return this.find({
      where: { recipientId },
      relations: ['topic', 'recipients'],
      order: { createdDate: 'DESC' }
    });
  }

  async findPendingNotifications(): Promise<NotificationEntity[]> {
    return this.find({
      where: { status: 'PENDING' },
      relations: ['recipients'],
      order: { scheduledAt: 'ASC' }
    });
  }
} 