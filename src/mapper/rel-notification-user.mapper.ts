import { RelNotificationUserDTO } from "../dto/notification-user.dto";
import { RelNotificationUser } from "../entity/rel-notification-user.entity";

export class RelNotificationUserMapper {
    static fromDTOtoEntity(entityDTO: RelNotificationUserDTO): RelNotificationUser {
        if (!entityDTO) {
            return;
        }
        let entity = new RelNotificationUser();
        const fields = Object.getOwnPropertyNames(entityDTO);
        fields.forEach(field => {
            entity[field] = entityDTO[field];
        });
        return entity;
    }

    static fromEntityToDTO(entity: RelNotificationUser): RelNotificationUserDTO {
        if (!entity) {
            return;
        }
        let entityDTO = new RelNotificationUserDTO();

        const fields = Object.getOwnPropertyNames(entity);

        fields.forEach(field => {
            entityDTO[field] = entity[field];
        });

        return entityDTO;
    }
}
