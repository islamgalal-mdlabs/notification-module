"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationTopicService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const notification_topic_mapper_1 = require("../mapper/notification-topic.mapper");
const notification_topic_repository_1 = require("../repoistory/notification-topic.repository");
const relationshipNames = [];
relationshipNames.push('relUserNotificationTopics');
let NotificationTopicService = class NotificationTopicService {
    constructor(notificationTopicRepository) {
        this.notificationTopicRepository = notificationTopicRepository;
        this.logger = new common_1.Logger('NotificationTopicService');
    }
    async findById(id) {
        const options = { relations: relationshipNames };
        const result = await this.notificationTopicRepository.findOne(id, options);
        return notification_topic_mapper_1.NotificationTopicMapper.fromEntityToDTO(result);
    }
    async findByFields(options) {
        const result = await this.notificationTopicRepository.findOne(options);
        return notification_topic_mapper_1.NotificationTopicMapper.fromEntityToDTO(result);
    }
    async findAndCount(options) {
        options.relations = relationshipNames;
        const resultList = await this.notificationTopicRepository.findAndCount(options);
        const notificationTopicDTO = [];
        if (resultList && resultList[0]) {
            resultList[0].forEach(notificationTopic => notificationTopicDTO.push(notification_topic_mapper_1.NotificationTopicMapper.fromEntityToDTO(notificationTopic)));
            resultList[0] = notificationTopicDTO;
        }
        return resultList;
    }
    async save(notificationTopicDTO, creator) {
        const entity = notification_topic_mapper_1.NotificationTopicMapper.fromDTOtoEntity(notificationTopicDTO);
        if (creator) {
            if (!entity.createdBy) {
                entity.createdBy = creator;
            }
            entity.lastModifiedBy = creator;
        }
        const result = await this.notificationTopicRepository.save(entity);
        return notification_topic_mapper_1.NotificationTopicMapper.fromEntityToDTO(result);
    }
    async update(notificationTopicDTO, updater) {
        const entity = notification_topic_mapper_1.NotificationTopicMapper.fromDTOtoEntity(notificationTopicDTO);
        if (updater) {
            entity.lastModifiedBy = updater;
        }
        const result = await this.notificationTopicRepository.save(entity);
        return notification_topic_mapper_1.NotificationTopicMapper.fromEntityToDTO(result);
    }
    async deleteById(id) {
        await this.notificationTopicRepository.delete(id);
        const entityFind = await this.findById(id);
        if (entityFind) {
            throw new common_1.HttpException('Error, entity not deleted!', common_1.HttpStatus.NOT_FOUND);
        }
        return;
    }
};
exports.NotificationTopicService = NotificationTopicService;
exports.NotificationTopicService = NotificationTopicService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(notification_topic_repository_1.NotificationTopicRepository)),
    __metadata("design:paramtypes", [notification_topic_repository_1.NotificationTopicRepository])
], NotificationTopicService);
//# sourceMappingURL=notification-topic.service.js.map