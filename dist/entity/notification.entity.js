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
exports.Notification = void 0;
const typeorm_1 = require("typeorm");
const rel_notification_user_entity_1 = require("./rel-notification-user.entity");
const notification_topic_entity_1 = require("./notification-topic.entity");
const base_entity_1 = require("./base.entity");
const notification_status_1 = require("../enum/notification-status");
let Notification = class Notification extends base_entity_1.BaseEntity {
};
exports.Notification = Notification;
__decorate([
    (0, typeorm_1.Column)({ name: 'title', nullable: true }),
    __metadata("design:type", String)
], Notification.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'message', nullable: true }),
    __metadata("design:type", String)
], Notification.prototype, "message", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'simple-enum', name: 'status', enum: notification_status_1.NotificationStatus }),
    __metadata("design:type", String)
], Notification.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'type', nullable: true }),
    __metadata("design:type", String)
], Notification.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'scope', nullable: true }),
    __metadata("design:type", String)
], Notification.prototype, "scope", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'meta_data', nullable: true }),
    __metadata("design:type", String)
], Notification.prototype, "metaData", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(type => rel_notification_user_entity_1.RelNotificationUser, other => other.notification),
    __metadata("design:type", Array)
], Notification.prototype, "relNotificationUsers", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(type => notification_topic_entity_1.NotificationTopic),
    __metadata("design:type", notification_topic_entity_1.NotificationTopic)
], Notification.prototype, "notificationTopic", void 0);
exports.Notification = Notification = __decorate([
    (0, typeorm_1.Entity)('notification')
], Notification);
//# sourceMappingURL=notification.entity.js.map