import { NotificationTopicDTO } from "../dto/notification-topic.dto";
import { NotificationTopic } from "../entity/notification-topic.entity";
export declare class NotificationTopicMapper {
    static fromDTOtoEntity(entityDTO: NotificationTopicDTO): NotificationTopic;
    static fromEntityToDTO(entity: NotificationTopic): NotificationTopicDTO;
}
