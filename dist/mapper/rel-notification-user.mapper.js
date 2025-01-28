"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RelNotificationUserMapper = void 0;
const notification_user_dto_1 = require("../dto/notification-user.dto");
const rel_notification_user_entity_1 = require("../entity/rel-notification-user.entity");
class RelNotificationUserMapper {
    static fromDTOtoEntity(entityDTO) {
        if (!entityDTO) {
            return;
        }
        let entity = new rel_notification_user_entity_1.RelNotificationUser();
        const fields = Object.getOwnPropertyNames(entityDTO);
        fields.forEach(field => {
            entity[field] = entityDTO[field];
        });
        return entity;
    }
    static fromEntityToDTO(entity) {
        if (!entity) {
            return;
        }
        let entityDTO = new notification_user_dto_1.RelNotificationUserDTO();
        const fields = Object.getOwnPropertyNames(entity);
        fields.forEach(field => {
            entityDTO[field] = entity[field];
        });
        return entityDTO;
    }
}
exports.RelNotificationUserMapper = RelNotificationUserMapper;
//# sourceMappingURL=rel-notification-user.mapper.js.map