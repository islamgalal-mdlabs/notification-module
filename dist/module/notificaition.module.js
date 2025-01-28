"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const notification_repository_1 = require("../repoistory/notification.repository");
const notification_service_1 = require("../service/notification.service");
const notification_user_entity_1 = require("../entity/notification-user.entity");
const notification_topic_service_1 = require("../service/notification-topic.service");
const notification_user_service_1 = require("../service/notification-user.service");
let NotificationModule = class NotificationModule {
};
exports.NotificationModule = NotificationModule;
exports.NotificationModule = NotificationModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([notification_repository_1.NotificationRepository, notification_user_entity_1.RelNotificationUser])],
        controllers: [],
        providers: [notification_service_1.NotificationService, notification_user_service_1.RelNotificationUserService, notification_topic_service_1.NotificationTopicService],
        exports: [notification_service_1.NotificationService, notification_user_service_1.RelNotificationUserService, notification_topic_service_1.NotificationTopicService],
    })
], NotificationModule);
//# sourceMappingURL=notificaition.module.js.map