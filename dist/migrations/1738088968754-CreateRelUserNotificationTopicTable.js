"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateRelUserNotificationTopicTable1738088968754 = void 0;
const typeorm_1 = require("typeorm");
const get_base_columns_1 = require("../utils/migrations/get-base-columns");
class CreateRelUserNotificationTopicTable1738088968754 {
    constructor() {
        this.tableName = 'rel_user_notification_topic';
    }
    async up(queryRunner) {
        const [idColumn, ...otherBaseColumns] = get_base_columns_1.baseColumns;
        try {
            await queryRunner.createTable(new typeorm_1.Table({
                name: this.tableName,
                columns: [
                    idColumn,
                    {
                        name: 'userId',
                        type: 'int4',
                    },
                    ...otherBaseColumns,
                ],
                foreignKeys: [
                    {
                        columnNames: ['notificationId'],
                        referencedColumnNames: ['id'],
                        referencedTableName: 'notification',
                        onDelete: 'CASCADE',
                        name: `${this.tableName}_notificationId_fk`,
                    },
                ],
                indices: [
                    {
                        name: `IDX_${this.tableName}_notificationId`,
                        columnNames: ['notificationId'],
                    },
                ],
            }), false);
        }
        catch (error) {
            console.error(`Failed to create ${this.tableName} table:`, error);
            throw error;
        }
    }
    async down(queryRunner) {
        try {
            await queryRunner.dropTable(this.tableName, true);
        }
        catch (error) {
            console.error(`Failed to drop ${this.tableName} table:`, error);
            throw error;
        }
    }
}
exports.CreateRelUserNotificationTopicTable1738088968754 = CreateRelUserNotificationTopicTable1738088968754;
//# sourceMappingURL=1738088968754-CreateRelUserNotificationTopicTable.js.map