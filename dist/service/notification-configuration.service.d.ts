import { Logger } from '@nestjs/common';
import { FindManyOptions, FindOneOptions } from 'typeorm';
import { NotificationConfigurationDTO } from '../dto/notification-configuration.dto';
import { NotificationConfigurationRepository } from '../repoistory/notification-configuration.repository';
export declare class NotificationConfigurationService {
    private notificationConfigurationRepository;
    logger: Logger;
    constructor(notificationConfigurationRepository: NotificationConfigurationRepository);
    findById(id: number): Promise<NotificationConfigurationDTO | undefined>;
    findByFields(options: FindOneOptions<NotificationConfigurationDTO>): Promise<NotificationConfigurationDTO | undefined>;
    findAndCount(options: FindManyOptions<NotificationConfigurationDTO>): Promise<[NotificationConfigurationDTO[], number]>;
    save(notificationConfigurationDTO: NotificationConfigurationDTO, creator?: string): Promise<NotificationConfigurationDTO | undefined>;
    update(notificationConfigurationDTO: NotificationConfigurationDTO, updater?: string): Promise<NotificationConfigurationDTO | undefined>;
    deleteById(id: number): Promise<void | undefined>;
}
