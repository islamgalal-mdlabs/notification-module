import { Injectable, HttpException, HttpStatus, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindManyOptions, FindOneOptions } from 'typeorm';
import { RelNotificationUserDTO } from '../dto/notification-user.dto';
import { RelNotificationUserMapper } from '../mapper/rel-notification-user.mapper';
import { RelNotificationUserRepository } from '../repoistory/notification-user.repository';

const relationshipNames = [];
relationshipNames.push('notification');

@Injectable()
export class RelNotificationUserService {
    logger = new Logger('RelNotificationUserService');

    constructor(
        @InjectRepository(RelNotificationUserRepository)
        private relNotificationUserRepository: RelNotificationUserRepository,
    ) {}

    async findById(id: number): Promise<RelNotificationUserDTO | undefined> {
        const options = { relations: relationshipNames };
        const result = await this.relNotificationUserRepository.findOne(id, options);
        return RelNotificationUserMapper.fromEntityToDTO(result);
    }

    async findByFields(options: FindOneOptions<RelNotificationUserDTO>): Promise<RelNotificationUserDTO | undefined> {
        const result = await this.relNotificationUserRepository.findOne(options);
        return RelNotificationUserMapper.fromEntityToDTO(result);
    }

    async findAndCount(options: FindManyOptions<RelNotificationUserDTO>): Promise<[RelNotificationUserDTO[], number]> {
        options.relations = relationshipNames;
        const resultList = await this.relNotificationUserRepository.findAndCount(options);
        const relNotificationUserDTO: RelNotificationUserDTO[] = [];
        if (resultList && resultList[0]) {
            resultList[0].forEach(relNotificationUser =>
                relNotificationUserDTO.push(RelNotificationUserMapper.fromEntityToDTO(relNotificationUser)),
            );
            resultList[0] = relNotificationUserDTO;
        }
        return resultList;
    }

    async save(
        relNotificationUserDTO: RelNotificationUserDTO,
        creator?: string,
    ): Promise<RelNotificationUserDTO | undefined> {
        const entity = RelNotificationUserMapper.fromDTOtoEntity(relNotificationUserDTO);
        if (creator) {
            if (!entity.createdBy) {
                entity.createdBy = creator;
            }
            entity.lastModifiedBy = creator;
        }
        const result = await this.relNotificationUserRepository.save(entity);
        return RelNotificationUserMapper.fromEntityToDTO(result);
    }

    async update(
        relNotificationUserDTO: RelNotificationUserDTO,
        updater?: string,
    ): Promise<RelNotificationUserDTO | undefined> {
        const entity = RelNotificationUserMapper.fromDTOtoEntity(relNotificationUserDTO);
        if (updater) {
            entity.lastModifiedBy = updater;
        }
        const result = await this.relNotificationUserRepository.save(entity);
        return RelNotificationUserMapper.fromEntityToDTO(result);
    }

    async deleteById(id: number): Promise<void | undefined> {
        await this.relNotificationUserRepository.delete(id);
        const entityFind = await this.findById(id);
        if (entityFind) {
            throw new HttpException('Error, entity not deleted!', HttpStatus.NOT_FOUND);
        }
        return;
    }
}
