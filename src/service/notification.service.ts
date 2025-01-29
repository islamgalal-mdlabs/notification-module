import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseNotificationChannel } from '../channels/base.channel';
import { NOTIFICATION_OPTIONS } from '../constants';
import { NotificationEntity } from '../entity/notification.entity';
import { NotificationModuleOptions } from '../interfaces/notification-module-options.interface';

@Injectable()
export class NotificationService {
  private channels: Map<string, BaseNotificationChannel> = new Map();

  constructor(
    @InjectRepository(NotificationEntity)
    private readonly notificationRepository: Repository<NotificationEntity>,
    @Inject(NOTIFICATION_OPTIONS)
    private readonly options: NotificationModuleOptions,
  ) {}
}
