import { DynamicModule, Module, Provider } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NOTIFICATION_OPTIONS } from '../constants';
import { NotificationModuleOptions } from '../interfaces/notification-module-options.interface';
import { NotificationService } from '../service/notification.service';
import { NotificationEntity } from '../entity/notification.entity';

@Module({})
export class NotificationModule {
  static register(options: NotificationModuleOptions): DynamicModule {
    const providers: Provider[] = [
      {
        provide: NOTIFICATION_OPTIONS,
        useValue: options,
      },
      NotificationService
    ];

    return {
      module: NotificationModule,
      imports: [TypeOrmModule.forFeature([NotificationEntity])],
      providers,
      exports: [NotificationService],
    };
  }
}
