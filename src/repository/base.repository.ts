import { Repository, DeepPartial, FindManyOptions, FindOneOptions } from 'typeorm';
import { BaseEntity } from '../entity/base.entity';
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';

export abstract class BaseRepository<T extends BaseEntity> extends Repository<T> {
  async findById(id: string): Promise<T | undefined> {
    return this.findOne({ where: { id } } as FindOneOptions<T>);
  }

  async findWithOptions(options: FindManyOptions<T>): Promise<[T[], number]> {
    return this.findAndCount(options);
  }

  async createEntity(data: DeepPartial<T>, creator?: string): Promise<T> {
    const entity = this.create(data);
    if (creator) {
      entity.createdBy = creator;
      entity.lastModifiedBy = creator;
    }
    return this.save(entity as DeepPartial<T>);
  }

  async updateEntity(
    id: string,
    data: QueryDeepPartialEntity<T>,
    updater?: string
  ): Promise<T | undefined> {
    await this.update(id, {
      ...data,
      updatedBy: updater,
    } as QueryDeepPartialEntity<T>);
    
    return this.findById(id);
  }

} 