"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateNotificationConfigurationTable1738088153197 = void 0;
const typeorm_1 = require("typeorm");
const get_base_columns_1 = require("../utils/migrations/get-base-columns");
class CreateNotificationConfigurationTable1738088153197 {
    constructor() {
        this.tableName = 'notification_configuration';
    }
    async up(queryRunner) {
        const [idColumn, ...otherBaseColumns] = get_base_columns_1.baseColumns;
        try {
            await queryRunner.createTable(new typeorm_1.Table({
                name: this.tableName,
                columns: [
                    idColumn,
                    {
                        name: 'key',
                        type: 'varchar',
                    },
                    {
                        name: 'value',
                        type: 'varchar',
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
exports.CreateNotificationConfigurationTable1738088153197 = CreateNotificationConfigurationTable1738088153197;
//# sourceMappingURL=1738088153197-CreateNotificationConfigurationTable.js.map