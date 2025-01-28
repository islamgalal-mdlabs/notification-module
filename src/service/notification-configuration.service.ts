import { Injectable, HttpException, HttpStatus, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindManyOptions, FindOneOptions } from 'typeorm';
import { NotificationConfigurationDTO } from '../dto/notification-configuration.dto';
import { NotificationConfigurationMapper } from '../mapper/notification-configuration.mapper';
import { NotificationConfigurationRepository } from '../repoistory/notification-configuration.repository';

const relationshipNames = [];

@Injectable()
export class NotificationConfigurationService {
    logger = new Logger('NotificationConfigurationService');

    constructor(
        @InjectRepository(NotificationConfigurationRepository)
        private notificationConfigurationRepository: NotificationConfigurationRepository,
    ) {}

    async findById(id: number): Promise<NotificationConfigurationDTO | undefined> {
        const options = { relations: relationshipNames };
        const result = await this.notificationConfigurationRepository.findOne(id, options);
        return NotificationConfigurationMapper.fromEntityToDTO(result);
    }

    async findByFields(
        options: FindOneOptions<NotificationConfigurationDTO>,
    ): Promise<NotificationConfigurationDTO | undefined> {
        const result = await this.notificationConfigurationRepository.findOne(options);
        return NotificationConfigurationMapper.fromEntityToDTO(result);
    }

    async findAndCount(
        options: FindManyOptions<NotificationConfigurationDTO>,
    ): Promise<[NotificationConfigurationDTO[], number]> {
        options.relations = relationshipNames;
        const resultList = await this.notificationConfigurationRepository.findAndCount(options);
        const notificationConfigurationDTO: NotificationConfigurationDTO[] = [];
        if (resultList && resultList[0]) {
            resultList[0].forEach(notificationConfiguration =>
                notificationConfigurationDTO.push(
                    NotificationConfigurationMapper.fromEntityToDTO(notificationConfiguration),
                ),
            );
            resultList[0] = notificationConfigurationDTO;
        }
        return resultList;
    }

    async save(
        notificationConfigurationDTO: NotificationConfigurationDTO,
        creator?: string,
    ): Promise<NotificationConfigurationDTO | undefined> {
        const entity = NotificationConfigurationMapper.fromDTOtoEntity(notificationConfigurationDTO);
        if (creator) {
            if (!entity.createdBy) {
                entity.createdBy = creator;
            }
            entity.lastModifiedBy = creator;
        }
        const result = await this.notificationConfigurationRepository.save(entity);
        return NotificationConfigurationMapper.fromEntityToDTO(result);
    }

    async update(
        notificationConfigurationDTO: NotificationConfigurationDTO,
        updater?: string,
    ): Promise<NotificationConfigurationDTO | undefined> {
        const entity = NotificationConfigurationMapper.fromDTOtoEntity(notificationConfigurationDTO);
        if (updater) {
            entity.lastModifiedBy = updater;
        }
        const result = await this.notificationConfigurationRepository.save(entity);
        return NotificationConfigurationMapper.fromEntityToDTO(result);
    }

    async deleteById(id: number): Promise<void | undefined> {
        await this.notificationConfigurationRepository.delete(id);
        const entityFind = await this.findById(id);
        if (entityFind) {
            throw new HttpException('Error, entity not deleted!', HttpStatus.NOT_FOUND);
        }
        return;
    }
}
