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
exports.NotificationService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const notification_mapper_1 = require("../mapper/notification.mapper");
const notification_repository_1 = require("../repoistory/notification.repository");
const relationshipNames = [];
let NotificationService = class NotificationService {
    constructor(notificationRepository) {
        this.notificationRepository = notificationRepository;
        this.logger = new common_1.Logger('NotificationService');
    }
    async findById(id) {
        const options = { relations: relationshipNames };
        const result = await this.notificationRepository.findOne(id, options);
        return notification_mapper_1.NotificationMapper.fromEntityToDTO(result);
    }
    async findByFields(options) {
        const result = await this.notificationRepository.findOne(options);
        return notification_mapper_1.NotificationMapper.fromEntityToDTO(result);
    }
    async findAndCount(options) {
        options.relations = relationshipNames;
        const resultList = await this.notificationRepository.findAndCount(options);
        const notificationDTO = [];
        if (resultList && resultList[0]) {
            resultList[0].forEach(notification => notificationDTO.push(notification_mapper_1.NotificationMapper.fromEntityToDTO(notification)));
            resultList[0] = notificationDTO;
        }
        return resultList;
    }
    async save(notificationDTO, creator) {
        const entity = notification_mapper_1.NotificationMapper.fromDTOtoEntity(notificationDTO);
        if (creator) {
            if (!entity.createdBy) {
                entity.createdBy = creator;
            }
            entity.lastModifiedBy = creator;
        }
        const result = await this.notificationRepository.save(entity);
        return notification_mapper_1.NotificationMapper.fromEntityToDTO(result);
    }
    async update(notificationDTO, updater) {
        const entity = notification_mapper_1.NotificationMapper.fromDTOtoEntity(notificationDTO);
        if (updater) {
            entity.lastModifiedBy = updater;
        }
        const result = await this.notificationRepository.save(entity);
        return notification_mapper_1.NotificationMapper.fromEntityToDTO(result);
    }
    async deleteById(id) {
        await this.notificationRepository.delete(id);
        const entityFind = await this.findById(id);
        if (entityFind) {
            throw new common_1.HttpException('Error, entity not deleted!', common_1.HttpStatus.NOT_FOUND);
        }
        return;
    }
};
exports.NotificationService = NotificationService;
exports.NotificationService = NotificationService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(notification_repository_1.NotificationRepository)),
    __metadata("design:paramtypes", [notification_repository_1.NotificationRepository])
], NotificationService);
//# sourceMappingURL=notification.service.js.map