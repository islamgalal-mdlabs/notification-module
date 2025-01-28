"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateRelNotificationUserTable1738089194509 = void 0;
const typeorm_1 = require("typeorm");
const get_base_columns_1 = require("../utils/migrations/get-base-columns");
class CreateRelNotificationUserTable1738089194509 {
    constructor() {
        this.tableName = 'rel_notification_user';
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
                uniques: [
                    {
                        name: `UQ_${this.tableName}_userId_notificationId`,
                        columnNames: ['userId', 'notificationId'],
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
exports.CreateRelNotificationUserTable1738089194509 = CreateRelNotificationUserTable1738089194509;
//# sourceMappingURL=1738089194509-CreateRelNotificationUserTable.js.map