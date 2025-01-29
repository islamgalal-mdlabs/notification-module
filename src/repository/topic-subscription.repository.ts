import { EntityRepository } from 'typeorm';
import { TopicSubscription } from '../entity/topic-subscription.entity';
import { BaseRepository } from './base.repository';

@EntityRepository(TopicSubscription)
export class TopicSubscriptionRepository extends BaseRepository<TopicSubscription> {
  async findBySubscriberId(subscriberId: string): Promise<TopicSubscription[]> {
    return this.find({
      where: { subscriberId, isActive: true },
      relations: ['topic']
    });
  }

  async findByTopicAndSubscriber(
    topicId: string,
    subscriberId: string
  ): Promise<TopicSubscription | undefined> {
    return this.findOne({
      where: { topic: { id: topicId }, subscriberId }
    });
  }
} 