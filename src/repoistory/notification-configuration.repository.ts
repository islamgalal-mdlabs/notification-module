import { EntityRepository, Repository } from 'typeorm';
import { NotificationConfiguration } from '../entity/notification-configuration.entity';

@EntityRepository(NotificationConfiguration)
export class NotificationConfigurationRepository extends Repository<NotificationConfiguration> {}
