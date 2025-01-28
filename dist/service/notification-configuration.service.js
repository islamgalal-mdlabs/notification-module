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
exports.NotificationConfigurationService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const notification_configuration_mapper_1 = require("../mapper/notification-configuration.mapper");
const notification_configuration_repository_1 = require("../repoistory/notification-configuration.repository");
const relationshipNames = [];
let NotificationConfigurationService = class NotificationConfigurationService {
    constructor(notificationConfigurationRepository) {
        this.notificationConfigurationRepository = notificationConfigurationRepository;
        this.logger = new common_1.Logger('NotificationConfigurationService');
    }
    async findById(id) {
        const options = { relations: relationshipNames };
        const result = await this.notificationConfigurationRepository.findOne(id, options);
        return notification_configuration_mapper_1.NotificationConfigurationMapper.fromEntityToDTO(result);
    }
    async findByFields(options) {
        const result = await this.notificationConfigurationRepository.findOne(options);
        return notification_configuration_mapper_1.NotificationConfigurationMapper.fromEntityToDTO(result);
    }
    async findAndCount(options) {
        options.relations = relationshipNames;
        const resultList = await this.notificationConfigurationRepository.findAndCount(options);
        const notificationConfigurationDTO = [];
        if (resultList && resultList[0]) {
            resultList[0].forEach(notificationConfiguration => notificationConfigurationDTO.push(notification_configuration_mapper_1.NotificationConfigurationMapper.fromEntityToDTO(notificationConfiguration)));
            resultList[0] = notificationConfigurationDTO;
        }
        return resultList;
    }
    async save(notificationConfigurationDTO, creator) {
        const entity = notification_configuration_mapper_1.NotificationConfigurationMapper.fromDTOtoEntity(notificationConfigurationDTO);
        if (creator) {
            if (!entity.createdBy) {
                entity.createdBy = creator;
            }
            entity.lastModifiedBy = creator;
        }
        const result = await this.notificationConfigurationRepository.save(entity);
        return notification_configuration_mapper_1.NotificationConfigurationMapper.fromEntityToDTO(result);
    }
    async update(notificationConfigurationDTO, updater) {
        const entity = notification_configuration_mapper_1.NotificationConfigurationMapper.fromDTOtoEntity(notificationConfigurationDTO);
        if (updater) {
            entity.lastModifiedBy = updater;
        }
        const result = await this.notificationConfigurationRepository.save(entity);
        return notification_configuration_mapper_1.NotificationConfigurationMapper.fromEntityToDTO(result);
    }
    async deleteById(id) {
        await this.notificationConfigurationRepository.delete(id);
        const entityFind = await this.findById(id);
        if (entityFind) {
            throw new common_1.HttpException('Error, entity not deleted!', common_1.HttpStatus.NOT_FOUND);
        }
        return;
    }
};
exports.NotificationConfigurationService = NotificationConfigurationService;
exports.NotificationConfigurationService = NotificationConfigurationService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(notification_configuration_repository_1.NotificationConfigurationRepository)),
    __metadata("design:paramtypes", [notification_configuration_repository_1.NotificationConfigurationRepository])
], NotificationConfigurationService);
//# sourceMappingURL=notification-configuration.service.js.map