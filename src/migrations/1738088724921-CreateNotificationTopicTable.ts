import { MigrationInterface, QueryRunner, Table } from "typeorm";
import { baseColumns } from "../utils/migrations/get-base-columns";

export class CreateNotificationTopicTable1738088724921 implements MigrationInterface {

  private tableName: string = 'notification_topic';

  public async up(queryRunner: QueryRunner): Promise<void> {
    const [idColumn, ...otherBaseColumns] = baseColumns;
    try {
      await queryRunner.createTable(
        new Table({
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
