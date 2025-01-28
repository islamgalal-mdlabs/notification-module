"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationConfigurationMapper = void 0;
const notification_configuration_dto_1 = require("../dto/notification-configuration.dto");
const notification_configuration_entity_1 = require("../entity/notification-configuration.entity");
class NotificationConfigurationMapper {
    static fromDTOtoEntity(entityDTO) {
        if (!entityDTO) {
            return;
        }
        let entity = new notification_configuration_entity_1.NotificationConfiguration();
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
        let entityDTO = new notification_configuration_dto_1.NotificationConfigurationDTO();
        const fields = Object.getOwnPropertyNames(entity);
        fields.forEach(field => {
            entityDTO[field] = entity[field];
        });
        return entityDTO;
    }
}
exports.NotificationConfigurationMapper = NotificationConfigurationMapper;
//# sourceMappingURL=notification-configuration.mapper.js.map