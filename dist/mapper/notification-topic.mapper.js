"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationTopicMapper = void 0;
const notification_topic_dto_1 = require("../dto/notification-topic.dto");
const notification_topic_entity_1 = require("../entity/notification-topic.entity");
class NotificationTopicMapper {
    static fromDTOtoEntity(entityDTO) {
        if (!entityDTO) {
            return;
        }
        let entity = new notification_topic_entity_1.NotificationTopic();
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
        let entityDTO = new notification_topic_dto_1.NotificationTopicDTO();
        const fields = Object.getOwnPropertyNames(entity);
        fields.forEach(field => {
            entityDTO[field] = entity[field];
        });
        return entityDTO;
    }
}
exports.NotificationTopicMapper = NotificationTopicMapper;
//# sourceMappingURL=notification-topic.mapper.js.map