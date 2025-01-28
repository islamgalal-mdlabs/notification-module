import { RelUserNotificationTopicDTO } from "../dto/rel-user-notification-topic.dto";
import { RelUserNotificationTopic } from "../entity/rel-user-notification-topic.entity";

export class RelUserNotificationTopicMapper {
    static fromDTOtoEntity(entityDTO: RelUserNotificationTopicDTO): RelUserNotificationTopic {
        if (!entityDTO) {
            return;
        }
        let entity = new RelUserNotificationTopic();
        const fields = Object.getOwnPropertyNames(entityDTO);
        fields.forEach(field => {
            entity[field] = entityDTO[field];
        });
        return entity;
    }

    static fromEntityToDTO(entity: RelUserNotificationTopic): RelUserNotificationTopicDTO {
        if (!entity) {
            return;
        }
        let entityDTO = new RelUserNotificationTopicDTO();

        const fields = Object.getOwnPropertyNames(entity);

        fields.forEach(field => {
            entityDTO[field] = entity[field];
        });

        return entityDTO;
    }
}
