import { MigrationInterface, QueryRunner, Table, TableIndex } from 'typeorm';
import { baseColumns } from '../utils/migrations/get-base-columns';

export class CreateNotificationTable1738087729217
  implements MigrationInterface
{
  private tableName: string = 'notifications';

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
              length: '255',
            },
            {
              name: 'content',
              type: 'text',
            },
            {
              name: 'status',
              type: 'enum',
              enum: ['SCHEDULED', 'IMMEDIATE', 'DRAFT'],
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
              name: 'scheduled_at',
              type: 'timestamp',
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

      // Create indexes
      await queryRunner.createIndex(
        this.tableName,
        new TableIndex({
          name: `IDX_${this.tableName}_status_scheduled`,
          columnNames: ['status', 'scheduled_at'],
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
