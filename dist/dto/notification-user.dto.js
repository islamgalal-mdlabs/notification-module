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
exports.RelNotificationUserDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
const base_dto_1 = require("./base.dto");
const notification_dto_1 = require("./notification.dto");
class RelNotificationUserDTO extends base_dto_1.BaseDTO {
}
exports.RelNotificationUserDTO = RelNotificationUserDTO;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'userId field', required: false }),
    __metadata("design:type", Number)
], RelNotificationUserDTO.prototype, "userId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: () => notification_dto_1.NotificationDTO, description: 'notification relationship' }),
    __metadata("design:type", notification_dto_1.NotificationDTO)
], RelNotificationUserDTO.prototype, "notification", void 0);
//# sourceMappingURL=notification-user.dto.js.map