"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RelUserNotificationTopicMapper = void 0;
const rel_user_notification_topic_dto_1 = require("../dto/rel-user-notification-topic.dto");
const rel_user_notification_topic_entity_1 = require("../entity/rel-user-notification-topic.entity");
class RelUserNotificationTopicMapper {
    static fromDTOtoEntity(entityDTO) {
        if (!entityDTO) {
            return;
        }
        let entity = new rel_user_notification_topic_entity_1.RelUserNotificationTopic();
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
        let entityDTO = new rel_user_notification_topic_dto_1.RelUserNotificationTopicDTO();
        const fields = Object.getOwnPropertyNames(entity);
        fields.forEach(field => {
            entityDTO[field] = entity[field];
        });
        return entityDTO;
    }
}
exports.RelUserNotificationTopicMapper = RelUserNotificationTopicMapper;
//# sourceMappingURL=rel-user-notification-topic.mapper.js.map