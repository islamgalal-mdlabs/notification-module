"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
const notification_status_1 = require("../enum/notification-status");
const base_dto_1 = require("./base.dto");
const notification_topic_dto_1 = require("./notification-topic.dto");
const notification_user_dto_1 = require("./notification-user.dto");
class NotificationDTO extends base_dto_1.BaseDTO {
}
exports.NotificationDTO = NotificationDTO;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'title field', required: false }),
    __metadata("design:type", String)
], NotificationDTO.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'message field', required: false }),
    __metadata("design:type", String)
], NotificationDTO.prototype, "message", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ enum: notification_status_1.NotificationStatus, description: 'status enum field', required: false }),
    __metadata("design:type", String)
], NotificationDTO.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'type field', required: false }),
    __metadata("design:type", String)
], NotificationDTO.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'scope field', required: false }),
    __metadata("design:type", String)
], NotificationDTO.prototype, "scope", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'metaData field', required: false }),
    __metadata("design:type", String)
], NotificationDTO.prototype, "metaData", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: () => notification_user_dto_1.RelNotificationUserDTO,
        isArray: true,
        description: 'relNotificationUsers relationship',
    }),
    __metadata("design:type", Array)
], NotificationDTO.prototype, "relNotificationUsers", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: () => notification_topic_dto_1.NotificationTopicDTO, description: 'notificationTopic relationship' }),
    __metadata("design:type", notification_topic_dto_1.NotificationTopicDTO)
], NotificationDTO.prototype, "notificationTopic", void 0);
//# sourceMappingURL=notification.dto.js.map