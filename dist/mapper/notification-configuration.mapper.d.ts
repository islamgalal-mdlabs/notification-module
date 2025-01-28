import { NotificationConfigurationDTO } from "../dto/notification-configuration.dto";
import { NotificationConfiguration } from "../entity/notification-configuration.entity";
export declare class NotificationConfigurationMapper {
    static fromDTOtoEntity(entityDTO: NotificationConfigurationDTO): NotificationConfiguration;
    static fromEntityToDTO(entity: NotificationConfiguration): NotificationConfigurationDTO;
}
