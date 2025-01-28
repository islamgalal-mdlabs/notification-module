import { MigrationInterface, QueryRunner, Table } from "typeorm";
import { baseColumns } from "../utils/migrations/get-base-columns";

export class CreateNotificationTable1738087729217 implements MigrationInterface {
  private tableName: string = 'notification';

  public async up(queryRunner: QueryRunner): Promise<void> {
    const [idColumn, ...otherBaseColumns] = baseColumns;
    try {
      await queryRunner.createTable(
        new Table({
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
        }),
        false,
      );
    } catch (error) {
      console.error(`Failed to create ${this.tableName} table:`, error);
      throw error;
    }
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    try {
      await queryRunner.dropTable(this.tableName, true);
    } catch (error) {
      console.error(`Failed to drop ${this.tableName} table:`, error);
      throw error;
    }
  }
}
