import { NotificationConfigurationDTO } from "../dto/notification-configuration.dto";
import { NotificationConfiguration } from "../entity/notification-configuration.entity";

export class NotificationConfigurationMapper {
    static fromDTOtoEntity(entityDTO: NotificationConfigurationDTO): NotificationConfiguration {
        if (!entityDTO) {
            return;
        }
        let entity = new NotificationConfiguration();
        const fields = Object.getOwnPropertyNames(entityDTO);
        fields.forEach(field => {
            entity[field] = entityDTO[field];
        });
        return entity;
    }

    static fromEntityToDTO(entity: NotificationConfiguration): NotificationConfigurationDTO {
        if (!entity) {
            return;
        }
        let entityDTO = new NotificationConfigurationDTO();

        const fields = Object.getOwnPropertyNames(entity);

        fields.forEach(field => {
            entityDTO[field] = entity[field];
        });

        return entityDTO;
    }
}
