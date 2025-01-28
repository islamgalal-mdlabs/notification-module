import { Logger } from '@nestjs/common';
import { FindManyOptions, FindOneOptions } from 'typeorm';
import { NotificationDTO } from '../dto/notification.dto';
import { NotificationRepository } from '../repoistory/notification.repository';
export declare class NotificationService {
    private notificationRepository;
    logger: Logger;
    constructor(notificationRepository: NotificationRepository);
    findById(id: number): Promise<NotificationDTO | undefined>;
    findByFields(options: FindOneOptions<NotificationDTO>): Promise<NotificationDTO | undefined>;
    findAndCount(options: FindManyOptions<NotificationDTO>): Promise<[NotificationDTO[], number]>;
    save(notificationDTO: NotificationDTO, creator?: string): Promise<NotificationDTO | undefined>;
    update(notificationDTO: NotificationDTO, updater?: string): Promise<NotificationDTO | undefined>;
    deleteById(id: number): Promise<void | undefined>;
}
