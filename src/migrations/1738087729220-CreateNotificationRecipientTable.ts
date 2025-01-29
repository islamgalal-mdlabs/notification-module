import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableIndex,
  TableForeignKey,
} from 'typeorm';
import { baseColumns } from '../utils/migrations/get-base-columns';

export class CreateNotificationRecipientTable1738087729220
  implements MigrationInterface
{
  private tableName: string = 'notification_recipients';

  public async up(queryRunner: QueryRunner): Promise<void> {
    const [idColumn, ...otherBaseColumns] = baseColumns;
    try {
      await queryRunner.createTable(
        new Table({
          name: this.tableName,
          columns: [
            idColumn,
            {
              name: 'recipient_id',
              type: 'uuid',
            },
            {
              name: 'notification_id',
              type: 'uuid',
            },
            {
              name: 'status',
              type: 'enum',
              enum: ['PENDING', 'DELIVERED', 'READ'],
              default: "'PENDING'",
            },
            {
              name: 'delivered_at',
              type: 'timestampz',
              isNullable: true,
            },
            {
              name: 'read_at',
              type: 'timestampz',
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
          name: `IDX_${this.tableName}_recipient_status`,
          columnNames: ['recipient_id', 'status'],
        }),
      );

      // Create foreign key
      await queryRunner.createForeignKey(
        this.tableName,
        new TableForeignKey({
          name: `FK_${this.tableName}_notification`,
          columnNames: ['notification_id'],
          referencedTableName: 'notifications',
          referencedColumnNames: ['id'],
          onDelete: 'CASCADE',
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
      await queryRunner.query(
        `DROP TYPE IF EXISTS notification_delivery_status_enum;`,
      );
    } catch (error) {
      console.error(`Failed to drop ${this.tableName} table:`, error);
      throw error;
    }
  }
}
