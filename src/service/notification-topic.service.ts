import { Injectable, HttpException, HttpStatus, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindManyOptions, FindOneOptions } from 'typeorm';
import { NotificationTopicDTO } from '../dto/notification-topic.dto';
import { NotificationTopicMapper } from '../mapper/notification-topic.mapper';
import { NotificationTopicRepository } from '../repoistory/notification-topic.repository';

const relationshipNames = [];
relationshipNames.push('relUserNotificationTopics');

@Injectable()
export class NotificationTopicService {
    logger = new Logger('NotificationTopicService');

    constructor(
        @InjectRepository(NotificationTopicRepository) private notificationTopicRepository: NotificationTopicRepository,
    ) {}

    async findById(id: number): Promise<NotificationTopicDTO | undefined> {
        const options = { relations: relationshipNames };
        const result = await this.notificationTopicRepository.findOne(id, options);
        return NotificationTopicMapper.fromEntityToDTO(result);
    }

    async findByFields(options: FindOneOptions<NotificationTopicDTO>): Promise<NotificationTopicDTO | undefined> {
        const result = await this.notificationTopicRepository.findOne(options);
        return NotificationTopicMapper.fromEntityToDTO(result);
    }

    async findAndCount(options: FindManyOptions<NotificationTopicDTO>): Promise<[NotificationTopicDTO[], number]> {
        options.relations = relationshipNames;
        const resultList = await this.notificationTopicRepository.findAndCount(options);
        const notificationTopicDTO: NotificationTopicDTO[] = [];
        if (resultList && resultList[0]) {
            resultList[0].forEach(notificationTopic =>
                notificationTopicDTO.push(NotificationTopicMapper.fromEntityToDTO(notificationTopic)),
            );
            resultList[0] = notificationTopicDTO;
        }
        return resultList;
    }

    async save(
        notificationTopicDTO: NotificationTopicDTO,
        creator?: string,
    ): Promise<NotificationTopicDTO | undefined> {
        const entity = NotificationTopicMapper.fromDTOtoEntity(notificationTopicDTO);
        if (creator) {
            if (!entity.createdBy) {
                entity.createdBy = creator;
            }
            entity.lastModifiedBy = creator;
        }
        const result = await this.notificationTopicRepository.save(entity);
        return NotificationTopicMapper.fromEntityToDTO(result);
    }

    async update(
        notificationTopicDTO: NotificationTopicDTO,
        updater?: string,
    ): Promise<NotificationTopicDTO | undefined> {
        const entity = NotificationTopicMapper.fromDTOtoEntity(notificationTopicDTO);
        if (updater) {
            entity.lastModifiedBy = updater;
        }
        const result = await this.notificationTopicRepository.save(entity);
        return NotificationTopicMapper.fromEntityToDTO(result);
    }

    async deleteById(id: number): Promise<void | undefined> {
        await this.notificationTopicRepository.delete(id);
        const entityFind = await this.findById(id);
        if (entityFind) {
            throw new HttpException('Error, entity not deleted!', HttpStatus.NOT_FOUND);
        }
        return;
    }
}
