import { RelNotificationUserDTO } from "../dto/notification-user.dto";
import { RelNotificationUser } from "../entity/rel-notification-user.entity";
export declare class RelNotificationUserMapper {
    static fromDTOtoEntity(entityDTO: RelNotificationUserDTO): RelNotificationUser;
    static fromEntityToDTO(entity: RelNotificationUser): RelNotificationUserDTO;
}
