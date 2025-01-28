"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateNotificationTable1738087729217 = void 0;
const typeorm_1 = require("typeorm");
const get_base_columns_1 = require("../utils/migrations/get-base-columns");
class CreateNotificationTable1738087729217 {
    constructor() {
        this.tableName = 'notification';
    }
    async up(queryRunner) {
        const [idColumn, ...otherBaseColumns] = get_base_columns_1.baseColumns;
        try {
            await queryRunner.createTable(new typeorm_1.Table({
                name: this.tableName,
                columns: [
                    idColumn,
                    {
                        name: 'title',
                        type: 'varchar',
                    },
                    {
                        name: 'message',
                        type: 'varchar',
                    },
                    {
                        name: 'status',
                        type: 'enum',
                        enum: ['SCHEDULED', 'IMMEDIATE'],
                        default: "'IMMEDIATE'",
                    },
                    {
                        name: 'type',
                        type: 'varchar',
                        isNullable: true,
                    },
                    {
                        name: 'scope',
                        type: 'varchar',
                        isNullable: true,
                    },
                    {
                        name: 'metaData',
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
exports.CreateNotificationTable1738087729217 = CreateNotificationTable1738087729217;
//# sourceMappingURL=1738087729217-CreateNotificationTable.js.map