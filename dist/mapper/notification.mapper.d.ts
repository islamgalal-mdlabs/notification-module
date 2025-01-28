import { Notification } from '../entity/notification.entity';
import { NotificationDTO } from '../dto/notification.dto';
export declare class NotificationMapper {
    static fromDTOtoEntity(entityDTO: NotificationDTO): Notification;
    static fromEntityToDTO(entity: Notification): NotificationDTO;
}
