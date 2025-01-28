import { EntityRepository, Repository } from 'typeorm';
import { NotificationTopic } from '../entity/notification-topic.entity';


@EntityRepository(NotificationTopic)
export class NotificationTopicRepository extends Repository<NotificationTopic> {}
