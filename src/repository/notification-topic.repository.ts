import { EntityRepository } from 'typeorm';
import { NotificationTopic } from '../entity/notification-topic.entity';
import { BaseRepository } from './base.repository';

@EntityRepository(NotificationTopic)
export class NotificationTopicRepository extends BaseRepository<NotificationTopic> {
  async findByName(name: string): Promise<NotificationTopic | undefined> {
    return this.findOne({
      where: { name, isActive: true },
      relations: ['subscriptions']
    });
  }

  async findActiveTopics(): Promise<NotificationTopic[]> {
    return this.find({
      where: { isActive: true },
      relations: ['subscriptions']
    });
  }
} 