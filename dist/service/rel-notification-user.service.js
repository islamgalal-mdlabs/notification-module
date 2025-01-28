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
exports.RelNotificationUserService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const rel_notification_user_mapper_1 = require("../mapper/rel-notification-user.mapper");
const notification_user_repository_1 = require("../repoistory/notification-user.repository");
const relationshipNames = [];
relationshipNames.push('notification');
let RelNotificationUserService = class RelNotificationUserService {
    constructor(relNotificationUserRepository) {
        this.relNotificationUserRepository = relNotificationUserRepository;
        this.logger = new common_1.Logger('RelNotificationUserService');
    }
    async findById(id) {
        const options = { relations: relationshipNames };
        const result = await this.relNotificationUserRepository.findOne(id, options);
        return rel_notification_user_mapper_1.RelNotificationUserMapper.fromEntityToDTO(result);
    }
    async findByFields(options) {
        const result = await this.relNotificationUserRepository.findOne(options);
        return rel_notification_user_mapper_1.RelNotificationUserMapper.fromEntityToDTO(result);
    }
    async findAndCount(options) {
        options.relations = relationshipNames;
        const resultList = await this.relNotificationUserRepository.findAndCount(options);
        const relNotificationUserDTO = [];
        if (resultList && resultList[0]) {
            resultList[0].forEach(relNotificationUser => relNotificationUserDTO.push(rel_notification_user_mapper_1.RelNotificationUserMapper.fromEntityToDTO(relNotificationUser)));
            resultList[0] = relNotificationUserDTO;
        }
        return resultList;
    }
    async save(relNotificationUserDTO, creator) {
        const entity = rel_notification_user_mapper_1.RelNotificationUserMapper.fromDTOtoEntity(relNotificationUserDTO);
        if (creator) {
            if (!entity.createdBy) {
                entity.createdBy = creator;
            }
            entity.lastModifiedBy = creator;
        }
        const result = await this.relNotificationUserRepository.save(entity);
        return rel_notification_user_mapper_1.RelNotificationUserMapper.fromEntityToDTO(result);
    }
    async update(relNotificationUserDTO, updater) {
        const entity = rel_notification_user_mapper_1.RelNotificationUserMapper.fromDTOtoEntity(relNotificationUserDTO);
        if (updater) {
            entity.lastModifiedBy = updater;
        }
        const result = await this.relNotificationUserRepository.save(entity);
        return rel_notification_user_mapper_1.RelNotificationUserMapper.fromEntityToDTO(result);
    }
    async deleteById(id) {
        await this.relNotificationUserRepository.delete(id);
        const entityFind = await this.findById(id);
        if (entityFind) {
            throw new common_1.HttpException('Error, entity not deleted!', common_1.HttpStatus.NOT_FOUND);
        }
        return;
    }
};
exports.RelNotificationUserService = RelNotificationUserService;
exports.RelNotificationUserService = RelNotificationUserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(notification_user_repository_1.RelNotificationUserRepository)),
    __metadata("design:paramtypes", [notification_user_repository_1.RelNotificationUserRepository])
], RelNotificationUserService);
//# sourceMappingURL=rel-notification-user.service.js.map