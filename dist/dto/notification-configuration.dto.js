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
exports.NotificationConfigurationDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
const base_dto_1 = require("./base.dto");
class NotificationConfigurationDTO extends base_dto_1.BaseDTO {
}
exports.NotificationConfigurationDTO = NotificationConfigurationDTO;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'key field', required: false }),
    __metadata("design:type", String)
], NotificationConfigurationDTO.prototype, "key", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'value field', required: false }),
    __metadata("design:type", String)
], NotificationConfigurationDTO.prototype, "value", void 0);
//# sourceMappingURL=notification-configuration.dto.js.map