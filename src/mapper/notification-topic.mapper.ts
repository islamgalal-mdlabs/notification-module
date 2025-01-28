import { NotificationTopicDTO } from "../dto/notification-topic.dto";
import { NotificationTopic } from "../entity/notification-topic.entity";

export class NotificationTopicMapper {
    static fromDTOtoEntity(entityDTO: NotificationTopicDTO): NotificationTopic {
        if (!entityDTO) {
            return;
        }
        let entity = new NotificationTopic();
        const fields = Object.getOwnPropertyNames(entityDTO);
        fields.forEach(field => {
            entity[field] = entityDTO[field];
        });
        return entity;
    }

    static fromEntityToDTO(entity: NotificationTopic): NotificationTopicDTO {
        if (!entity) {
            return;
        }
        let entityDTO = new NotificationTopicDTO();

        const fields = Object.getOwnPropertyNames(entity);

        fields.forEach(field => {
            entityDTO[field] = entity[field];
        });

        return entityDTO;
    }
}
