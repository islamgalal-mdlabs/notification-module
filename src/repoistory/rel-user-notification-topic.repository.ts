import { EntityRepository, Repository } from 'typeorm';
import { RelUserNotificationTopic } from '../entity/rel-user-notification-topic.entity';

@EntityRepository(RelUserNotificationTopic)
export class RelUserNotificationTopicRepository extends Repository<RelUserNotificationTopic> {}
