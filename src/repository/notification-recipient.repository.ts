import { EntityRepository } from 'typeorm';
import { NotificationRecipient } from '../entity/notification-recipient.entity';
import { BaseRepository } from './base.repository';
import { NotificationDeliveryStatus } from '../enum/notification-delivery-status.enum';

@EntityRepository(NotificationRecipient)
export class NotificationRecipientRepository extends BaseRepository<NotificationRecipient> {
  async findByRecipientId(
    recipientId: string,
  ): Promise<NotificationRecipient[]> {
    return this.find({
      where: { recipientId },
      relations: ['notification'],
      order: { createdDate: 'DESC' },
    });
  }

  async findUndelivered(): Promise<NotificationRecipient[]> {
    return this.find({
      where: { status: NotificationDeliveryStatus.PENDING },
      relations: ['notification'],
      order: { createdDate: 'ASC' },
    });
  }

  async markAsDelivered(
    id: string,
  ): Promise<NotificationRecipient | undefined> {
    await this.update(id, {
      status: NotificationDeliveryStatus.DELIVERED,
      deliveredAt: new Date(),
    });
    return this.findById(id);
  }

  async markAsRead(id: string): Promise<NotificationRecipient | undefined> {
    await this.update(id, {
      status: NotificationDeliveryStatus.READ,
      readAt: new Date(),
    });
    return this.findById(id);
  }

  async findByNotificationId(
    notificationId: string,
  ): Promise<NotificationRecipient[]> {
    return this.find({
      where: { notification: { id: notificationId } },
      order: { createdDate: 'ASC' },
    });
  }
}
