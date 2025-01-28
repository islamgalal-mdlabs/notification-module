import { Logger } from '@nestjs/common';
import { FindManyOptions, FindOneOptions } from 'typeorm';
import { RelNotificationUserDTO } from '../dto/notification-user.dto';
import { RelNotificationUserRepository } from '../repoistory/notification-user.repository';
export declare class RelNotificationUserService {
    private relNotificationUserRepository;
    logger: Logger;
    constructor(relNotificationUserRepository: RelNotificationUserRepository);
    findById(id: number): Promise<RelNotificationUserDTO | undefined>;
    findByFields(options: FindOneOptions<RelNotificationUserDTO>): Promise<RelNotificationUserDTO | undefined>;
    findAndCount(options: FindManyOptions<RelNotificationUserDTO>): Promise<[RelNotificationUserDTO[], number]>;
    save(relNotificationUserDTO: RelNotificationUserDTO, creator?: string): Promise<RelNotificationUserDTO | undefined>;
    update(relNotificationUserDTO: RelNotificationUserDTO, updater?: string): Promise<RelNotificationUserDTO | undefined>;
    deleteById(id: number): Promise<void | undefined>;
}
