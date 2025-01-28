import { EntityRepository, Repository } from 'typeorm';
import { RelNotificationUser } from '../entity/notification-user.entity';

@EntityRepository(RelNotificationUser)
export class RelNotificationUserRepository extends Repository<RelNotificationUser> {}
