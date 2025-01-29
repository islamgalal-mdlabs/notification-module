import { MigrationInterface, QueryRunner, Table, TableIndex } from 'typeorm';
import { baseColumns } from '../utils/migrations/get-base-columns';

export class CreateNotificationTopicTable1738087729218
  implements MigrationInterface
{
  private tableName: string = 'notification_topics';

  public async up(queryRunner: QueryRunner): Promise<void> {
    const [idColumn, ...otherBaseColumns] = baseColumns;
    try {
      await queryRunner.createTable(
        new Table({
          name: this.tableName,
          columns: [
            idColumn,
            {
              name: 'name',
              type: 'varchar',
              length: '255',
              isUnique: true,
            },
            {
              name: 'description',
              type: 'text',
              isNullable: true,
            },
            {
              name: 'metadata',
              type: 'jsonb',
              isNullable: true,
            },
            ...otherBaseColumns,
          ],
        }),
        false,
      );

      await queryRunner.createIndex(
        this.tableName,
        new TableIndex({
          name: `IDX_${this.tableName}_name`,
          columnNames: ['name'],
          isUnique: true,
        }),
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
