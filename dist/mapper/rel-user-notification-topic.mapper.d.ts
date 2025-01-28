import { RelUserNotificationTopicDTO } from "../dto/rel-user-notification-topic.dto";
import { RelUserNotificationTopic } from "../entity/rel-user-notification-topic.entity";
export declare class RelUserNotificationTopicMapper {
    static fromDTOtoEntity(entityDTO: RelUserNotificationTopicDTO): RelUserNotificationTopic;
    static fromEntityToDTO(entity: RelUserNotificationTopic): RelUserNotificationTopicDTO;
}
