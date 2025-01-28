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
exports.NotificationTopic = void 0;
const typeorm_1 = require("typeorm");
const notification_entity_1 = require("./notification.entity");
const rel_user_notification_topic_entity_1 = require("./rel-user-notification-topic.entity");
const base_entity_1 = require("./base.entity");
let NotificationTopic = class NotificationTopic extends base_entity_1.BaseEntity {
};
exports.NotificationTopic = NotificationTopic;
__decorate([
    (0, typeorm_1.Column)({ type: 'integer', name: 'topic_id', nullable: true }),
    __metadata("design:type", Number)
], NotificationTopic.prototype, "topicId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'topic_name', nullable: true }),
    __metadata("design:type", String)
], NotificationTopic.prototype, "topicName", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(type => notification_entity_1.Notification),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", notification_entity_1.Notification)
], NotificationTopic.prototype, "notification", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(type => rel_user_notification_topic_entity_1.RelUserNotificationTopic),
    (0, typeorm_1.JoinTable)({
        name: 'rel_notification_topic__rel_user_notification_topic',
        joinColumn: { name: 'notification_topic_id', referencedColumnName: 'id' },
        inverseJoinColumn: { name: 'rel_user_notification_topic_id', referencedColumnName: 'id' },
    }),
    __metadata("design:type", Array)
], NotificationTopic.prototype, "relUserNotificationTopics", void 0);
exports.NotificationTopic = NotificationTopic = __decorate([
    (0, typeorm_1.Entity)('notification_topic')
], NotificationTopic);
//# sourceMappingURL=notification-topic.entity.js.map