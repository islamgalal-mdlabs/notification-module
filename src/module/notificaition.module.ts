import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NotificationRepository } from '../repoistory/notification.repository';
import { NotificationService } from '../service/notification.service';
import { RelNotificationUser } from '../entity/notification-user.entity';
import { NotificationTopicService } from '../service/notification-topic.service';
import { RelNotificationUserService } from '../service/notification-user.service';

@Module({
    imports: [TypeOrmModule.forFeature([NotificationRepository, RelNotificationUser])],
    controllers: [],
    providers: [NotificationService, RelNotificationUserService, NotificationTopicService],
    exports: [NotificationService, RelNotificationUserService, NotificationTopicService],
})
export class NotificationModule { }
