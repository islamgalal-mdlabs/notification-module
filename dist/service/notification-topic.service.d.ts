import { Logger } from '@nestjs/common';
import { FindManyOptions, FindOneOptions } from 'typeorm';
import { NotificationTopicDTO } from '../dto/notification-topic.dto';
import { NotificationTopicRepository } from '../repoistory/notification-topic.repository';
export declare class NotificationTopicService {
    private notificationTopicRepository;
    logger: Logger;
    constructor(notificationTopicRepository: NotificationTopicRepository);
    findById(id: number): Promise<NotificationTopicDTO | undefined>;
    findByFields(options: FindOneOptions<NotificationTopicDTO>): Promise<NotificationTopicDTO | undefined>;
    findAndCount(options: FindManyOptions<NotificationTopicDTO>): Promise<[NotificationTopicDTO[], number]>;
    save(notificationTopicDTO: NotificationTopicDTO, creator?: string): Promise<NotificationTopicDTO | undefined>;
    update(notificationTopicDTO: NotificationTopicDTO, updater?: string): Promise<NotificationTopicDTO | undefined>;
    deleteById(id: number): Promise<void | undefined>;
}
