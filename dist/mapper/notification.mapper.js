"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationMapper = void 0;
const notification_entity_1 = require("../entity/notification.entity");
const notification_dto_1 = require("../dto/notification.dto");
class NotificationMapper {
    static fromDTOtoEntity(entityDTO) {
        if (!entityDTO) {
            return;
        }
        let entity = new notification_entity_1.Notification();
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
        let entityDTO = new notification_dto_1.NotificationDTO();
        const fields = Object.getOwnPropertyNames(entity);
        fields.forEach(field => {
            entityDTO[field] = entity[field];
        });
        return entityDTO;
    }
}
exports.NotificationMapper = NotificationMapper;
//# sourceMappingURL=notification.mapper.js.map