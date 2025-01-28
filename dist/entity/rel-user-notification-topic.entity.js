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
exports.RelUserNotificationTopic = void 0;
const typeorm_1 = require("typeorm");
const notification_topic_entity_1 = require("./notification-topic.entity");
const base_entity_1 = require("./base.entity");
let RelUserNotificationTopic = class RelUserNotificationTopic extends base_entity_1.BaseEntity {
};
exports.RelUserNotificationTopic = RelUserNotificationTopic;
__decorate([
    (0, typeorm_1.Column)({ type: 'integer', name: 'user_id', nullable: true }),
    __metadata("design:type", Number)
], RelUserNotificationTopic.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(type => notification_topic_entity_1.NotificationTopic),
    __metadata("design:type", Array)
], RelUserNotificationTopic.prototype, "notificationTopics", void 0);
exports.RelUserNotificationTopic = RelUserNotificationTopic = __decorate([
    (0, typeorm_1.Entity)('rel_user_notification_topic')
], RelUserNotificationTopic);
//# sourceMappingURL=rel-user-notification-topic.entity.js.map