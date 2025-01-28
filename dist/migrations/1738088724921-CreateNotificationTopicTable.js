"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateNotificationTopicTable1738088724921 = void 0;
const typeorm_1 = require("typeorm");
const get_base_columns_1 = require("../utils/migrations/get-base-columns");
class CreateNotificationTopicTable1738088724921 {
    constructor() {
        this.tableName = 'notification_topic';
    }
    async up(queryRunner) {
        const [idColumn, ...otherBaseColumns] = get_base_columns_1.baseColumns;
        try {
            await queryRunner.createTable(new typeorm_1.Table({
                name: this.tableName,
                columns: [
                    idColumn,
                    {
                        name: 'topicId',
                        type: 'int4',
                    },
                    {
                        name: 'topicName',
                        type: 'varchar',
                        isNullable: true,
                    },
                    ...otherBaseColumns,
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
exports.CreateNotificationTopicTable1738088724921 = CreateNotificationTopicTable1738088724921;
//# sourceMappingURL=1738088724921-CreateNotificationTopicTable.js.map